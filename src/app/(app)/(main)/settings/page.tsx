import { AccountSettings } from '@/components/settings-ui';
import { PageHeader } from '@/components/ui';
import { getPrefs } from '@/lib/account';
import { requireUserPage } from '@/lib/session';

export const metadata = { title: 'Settings' };

export default async function SettingsPage() {
  const user = await requireUserPage();
  const prefs = await getPrefs(user.id);
  return (
    <>
      <PageHeader title="Settings" />
      <AccountSettings user={{ name: user.name, email: user.email, isGuest: !!user.isAnonymous }} prefs={prefs} />
    </>
  );
}
