'use client';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function UserCard({ user, onEdit, onDelete }) {
  return (
    <Card>
      <h3 className="text-xl font-bold mb-2">{user.name}</h3>
      <p className="text-gray-600 mb-1">@{user.username}</p>
      <p className="text-gray-700 mb-4 truncate">{user.email}</p>
      <div className="flex space-x-3">
        <Button onClick={() => onDelete(user.id)}>Delete</Button>
        <Button onClick={() => onEdit(user)}>Edit</Button>
      </div>
    </Card>
  );
}
