'use client'
import React, { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '@/lib/api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', username: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => { getUsers().then(res => setUsers(res.data)); }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const action = editingId ? updateUser(editingId, form) : createUser(form);
    action.then(res => {
      setUsers(u => editingId ? u.map(x => x.id === editingId ? res.data : x) : [...u, res.data]);
      setForm({ name: '', email: '', username: '' });
      setEditingId(null);
    });
  };

  const handleDelete = id => deleteUser(id).then(() => setUsers(u => u.filter(x => x.id !== id)));
  const handleEdit = user => { setForm({ name: user.name, email: user.email, username: user.username }); setEditingId(user.id); };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-600">User Management</h1>
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
        <UserForm form={form} onChange={handleChange} onSubmit={handleSubmit} onCancel={() => setEditingId(null)} editing={!!editingId} />
      </div>
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
