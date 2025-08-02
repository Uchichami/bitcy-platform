import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">Welcome to Bitcy</h1>
        <p className="mb-6 text-lg text-gray-600">
          Earn real Bitcoin by completing tasks and referring your friends.
        </p>

        {!user ? (
          <div className="space-x-4">
            <button
              onClick={() => setUser('user')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Login with Email
            </button>
            <button
              onClick={() => setUser('admin')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Admin Login
            </button>
          </div>
        ) : user === 'user' ? (
          <UserDashboard />
        ) : (
          <AdminDashboard />
        )}
      </div>
    </main>
  );
}

function UserDashboard() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
      <ul className="text-left list-disc pl-6 mb-4">
        <li>Follow us on Twitter – <strong>200 sats</strong></li>
        <li>Watch a video – <strong>150 sats</strong></li>
        <li>Refer a friend – <strong>500 sats</strong></li>
      </ul>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
        Request Bitcoin Withdrawal
      </button>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <ul className="text-left list-disc pl-6 mb-4">
        <li>Approve Bitcoin withdrawals</li>
        <li>Credit users manually</li>
        <li>View task completions</li>
        <li>Manage investment requests</li>
      </ul>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
        Log out
      </button>
    </div>
  );
}
