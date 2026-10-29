// Optional AI study assistant behind a provider interface. With AI_PROVIDER unset, getProvider() returns null
// and the UI hides the feature; nothing else in the app depends on it.
import { env } from './env';

export interface AiProvider {
  name: string;
  chat(system: string, user: string): Promise<string>;
}

const TIMEOUT_MS = 45_000;

function ollama(base: string, model: string): AiProvider {
  return {
    name: `ollama:${model}`,
    async chat(system, user) {
      const r = await fetch(`${base.replace(/\/$/, '')}/api/chat`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(TIMEOUT_MS),
        body: JSON.stringify({ model, stream: false, messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }),
      });
      if (!r.ok) throw new Error(`AI provider returned ${r.status}`);
      return String((await r.json())?.message?.content ?? '');
    },
  };
}

function openaiCompatible(base: string, model: string, key?: string): AiProvider {
  return {
    name: `openai-compatible:${model}`,
    async chat(system, user) {
      const r = await fetch(`${base.replace(/\/$/, '')}/chat/completions`, {
        method: 'POST', signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { 'Content-Type': 'application/json', ...(key ? { Authorization: `Bearer ${key}` } : {}) },
        body: JSON.stringify({ model, messages: [{ role: 'system', content: system }, { role: 'user', content: user }], max_tokens: 700 }),
      });
      if (!r.ok) throw new Error(`AI provider returned ${r.status}`);
      return String((await r.json())?.choices?.[0]?.message?.content ?? '');
    },
  };
}

export function getProvider(): AiProvider | null {
  const e = env();
  if (!e.AI_PROVIDER || !e.AI_BASE_URL || !e.AI_MODEL) return null;
  return e.AI_PROVIDER === 'ollama' ? ollama(e.AI_BASE_URL, e.AI_MODEL) : openaiCompatible(e.AI_BASE_URL, e.AI_MODEL, e.AI_API_KEY);
}

export const aiEnabled = () => getProvider() !== null;

export const TUTOR_PROMPT = `You are a careful study tutor helping a learner understand one practice question they already answered.
Ground every answer in the question and explanation provided. If something is outside them or you are unsure, say so plainly.
Never invent citations, statistics or guidelines. Keep answers under 200 words. This is educational, not medical advice.`;
