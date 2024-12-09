import OpenCloseNav from '@/app/components/ui/Navbar/OpenCloseNav'
import { Button } from '@/components/ui/button'
import { authUserSession } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

const Dashboard = async () => {
  const user = await authUserSession()

  return (
    <main className="w-full min-h-screen">
      <nav className="flex justify-between py-3">
        <h1 className="text-3xl">Dashboard</h1>
        <OpenCloseNav classname="bg-background" />
      </nav>
      <div className="p-5 flex flex-col">
        <Image
          className="rounded-xl py-2"
          src={`${user?.image}`}
          alt="img"
          width={100}
          height={100}
        />
        <h2 className="text-2xl">Wellcome, {user?.name}</h2>
        <p>{user?.email}</p>
        <div className="py-5 flex gap-2">
          <Link href="/users/dashboard/collection">
            <Button>My Collection</Button>
          </Link>
          <Link href="/users/dashboard/comment">
            <Button>My Comment</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
