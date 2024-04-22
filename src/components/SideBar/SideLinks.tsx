import Link from 'next/link';
import React from 'react'

const SideLinks = () => {
  return (
    <div className='flex flex-col space-y-4 mb-6 text-center'>
      <Link href="/learn">Learn</Link>
      <Link href="/leaderboard">Leaderboard</Link>
      <Link href="/quests">Quests</Link>
      <Link href="/shop">Shop</Link>
    </div>
  );
}

export default SideLinks