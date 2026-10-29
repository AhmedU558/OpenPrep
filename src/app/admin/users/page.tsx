import { RoleSelect } from '@/components/admin/admin-widgets';
import { Card, PageHeader, inputCls } from '@/components/ui';
import { listUsers } from '@/lib/admin';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'Users · Admin' };

export default async function UsersPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const actor = await requireRolePage('ADMIN');
  const q = (await searchParams).q ?? '';
  const users = await listUsers(actor, q);
  return (
    <>
      <PageHeader title="Users & roles" subtitle="Editors write and review content; admins also publish, manage taxonomy and roles. You can't change your own role." />
      <form method="get" className="mb-4"><input name="q" defaultValue={q} placeholder="Search name or email" aria-label="Search users" className={`${inputCls} max-w-sm`} /></form>
      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead className="text-left text-muted"><tr><th className="px-4 py-2 font-medium">Name</th><th className="px-4 py-2 font-medium">Email</th><th className="px-4 py-2 font-medium">Answers</th><th className="px-4 py-2 font-medium">Joined</th><th className="px-4 py-2 font-medium">Role</th></tr></thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-line">
                <td className="px-4 py-2">{u.name}</td><td className="px-4 py-2">{u.email}</td><td className="px-4 py-2 tabular-nums">{u._count.responses}</td>
                <td className="px-4 py-2 whitespace-nowrap">{u.createdAt.toLocaleDateString()}</td>
                <td className="px-4 py-2"><RoleSelect userId={u.id} role={u.role} self={u.id === actor.id} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
