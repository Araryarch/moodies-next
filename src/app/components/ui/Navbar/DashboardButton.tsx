import React from 'react'
import Tooltips from '../Tooltips'
import { LayoutDashboard } from 'lucide-react'
import { authUserSession } from '@/lib/auth'
import Link from 'next/link'

const DashboardButton = async () => {
  const user = await authUserSession()

  return (
    user && (
      <Link href={'/users/dashboard'}>
        <Tooltips text="Dashboard">
          <button className="rounded-full p-3 bg-secondary">
            <LayoutDashboard />
          </button>
        </Tooltips>
      </Link>
    )
  )
}

export default DashboardButton
