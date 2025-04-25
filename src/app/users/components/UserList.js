'use client'
import UserCard from './UserCard';
export default function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users.map(u => <UserCard key={u.id} user={u} onEdit={onEdit} onDelete={onDelete} />)}
    </div>
  );
}