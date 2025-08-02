import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Welcome to Bitcy</h1>
      <p>Earn real Bitcoin by completing tasks and referring friends.</p>

      {!user ? (
        <div>
          <button onClick={() => setUser('user')}>Login with Email</button>
          <button onClick={() => setUser('admin')}>Admin Login</button>
        </div>
      ) : user === 'user' ? (
        <UserDashboard />
      ) : (
        <AdminDashboard />
      )}
    </main>
  );
}

function UserDashboard() {
  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        <li>Follow us on Twitter – 200 sats</li>
        <li>Watch a video – 150 sats</li>
        <li>Refer a friend – 500 sats</li>
      </ul>
      <button>Request Bitcoin Withdrawal</button>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        <li>Approve Bitcoin withdrawals</li>
        <li>Credit users manually</li>
        <li>View task completions</li>
        <li>Manage investment requests</li>
      </ul>
      <button>Log out</button>
    </div>
  );
}
