import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
        Welcome to the Admin Dashboard
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Manage users with full CRUD functionality powered by Next.js App Router, Axios, and Tailwind CSS.
      </p>
      <Link
        href="/users"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Go to User Management
      </Link>
    </div>
  )
}
