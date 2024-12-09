'use client'
import { Menu } from 'lucide-react'
import { create } from 'zustand'
import Tooltips from '../Tooltips'

interface NavState {
  isNavOpen: boolean
  toggleNav: () => void
}

interface NavProps {
  classname: string
}

const useNavStore = create<NavState>((set) => ({
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}))

const OpenCloseNav = ({ classname }: NavProps) => {
  const { isNavOpen, toggleNav } = useNavStore()

  const handleToggle = () => {
    toggleNav()
    document.querySelector('.navbar')?.classList.toggle('hidden', !isNavOpen)
    document
      .querySelector('.navbar-temp')
      ?.classList.toggle('hidden', !isNavOpen)
  }

  return (
    <Tooltips text={'toggle sidebar'}>
      <button
        onClick={handleToggle}
        className={`rounded-full p-3 ${classname}`}
      >
        <Menu size={20} />
      </button>
    </Tooltips>
  )
}

export default OpenCloseNav
