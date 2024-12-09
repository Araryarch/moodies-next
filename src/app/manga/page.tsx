import OpenCloseNav from '../components/ui/Navbar/OpenCloseNav'
import MangaList from './components/MangaList'
import InputSearch from './components/InputSearch'

const page = () => {
  return (
    <div className="w-full min-h-screen relative">
      <nav className="w-full flex justify-between py-2 gap-2 flex-wrap items-center">
        <div className="flex gap-2">
          <InputSearch />
        </div>
        <OpenCloseNav classname="bg-background" />
      </nav>
      <div className="w-full min-h-screen">
        <h1 className="text-4xl py-2 uppercase">Manga</h1>
        <MangaList />
      </div>
    </div>
  )
}

export default page
