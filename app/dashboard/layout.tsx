import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard - IMET Global',
  description: 'Blog management dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen mt-[8vw]">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <nav className="mt-4">
          {/* <Link 
            href="/dashboard" 
            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Overview
          </Link> */}
          <Link 
            href="/dashboard/posts" 
            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            All Posts
          </Link>
          <Link 
            href="/dashboard/posts/new" 
            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Add New Post
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="px-4 py-6">
            <h2 className="text-xl font-semibold text-gray-800">Blog Dashboard</h2>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
