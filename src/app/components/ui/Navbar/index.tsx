import {
  BotMessageSquare,
  House,
  LibraryBig,
  MessageSquarePlus,
  MonitorPlay,
} from 'lucide-react'
import Tooltips from '@/app/components/ui/Tooltips'
import UserActionButton from './UserActionButton'
import DashboardButton from './DashboardButton'
import Link from 'next/link'
import ToggleTheme from '@/app/components/ui/Navbar/ToggleTheme'

const Navbar = () => {
  return (
    <nav className="navbar fixed left-0 top-0 z-[99] min-h-screen w-1/4 md:w-1/6 xl:w-1/12 transition-all duration-300 ease-in-out rounded py-6 pr-3 flex justify-between items-center flex-col">
      <div>
        <Tooltips text="Home">
          <Link href={'/'}>
            <button className="rounded-full p-3 bg-secondary">
              <House />
            </button>
          </Link>
        </Tooltips>
      </div>
      <div className="flex justify-center flex-col items-center gap-5">
        <Tooltips text="Anime">
          <Link href="/anime">
            <button className="rounded-full p-3 bg-secondary">
              <MonitorPlay />
            </button>
          </Link>
        </Tooltips>
        <Tooltips text="Manga">
          <Link href={'/manga'}>
            <button className="rounded-full p-3 bg-secondary">
              <LibraryBig />
            </button>
          </Link>
        </Tooltips>
        <Tooltips text="ChatBot">
          <Link href={'/chatbot'}>
            <button className="rounded-full p-3 bg-secondary">
              <BotMessageSquare />
            </button>
          </Link>
        </Tooltips>
        <Tooltips text="Community">
          <Link href="/community">
            <button className="rounded-full p-3 bg-secondary">
              <MessageSquarePlus />
            </button>
          </Link>
        </Tooltips>
        <DashboardButton />
        <ToggleTheme />
      </div>
      <div>
        <UserActionButton />
      </div>
    </nav>
  )
}

export default Navbar
