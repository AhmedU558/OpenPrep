'use server';
import { revalidatePath } from 'next/cache';
import { action } from '@/lib/errors';
import * as plan from '@/lib/plan';
import { requireUser } from '@/lib/session';

const me = async () => (await requireUser()).id;
const done = () => { revalidatePath('/planner'); revalidatePath('/dashboard'); };

export async function savePlanAction(input: unknown, fromToday = false) { return action(async () => { await plan.savePlan(await me(), input, fromToday); done(); }); }
export async function taskDoneAction(id: string, on: boolean) { return action(async () => { await plan.setTaskDone(await me(), id, on); done(); }); }
export async function moveTaskAction(id: string, date: string) { return action(async () => { await plan.moveTask(await me(), id, date); done(); }); }
export async function taskTargetAction(id: string, target: number) { return action(async () => { await plan.setTaskTarget(await me(), id, target); done(); }); }
export async function deletePlanAction() { return action(async () => { await plan.deletePlan(await me()); done(); }); }
