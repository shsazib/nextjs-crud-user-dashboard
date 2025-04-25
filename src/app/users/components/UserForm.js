'use client'
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export default function UserForm({ form, onChange, onSubmit, onCancel, editing }) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input name="name" value={form.name} onChange={onChange} placeholder="Name" required />
      <Input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required />
      <Input name="username" value={form.username} onChange={onChange} placeholder="Username" required />
      <div className="flex items-center space-x-4 md:col-span-2">
        <Button type="submit">{editing ? 'Update' : 'Create'}</Button>
        {editing && <Button type="button" onClick={onCancel}>Cancel</Button>}
      </div>
    </form>
  );
}