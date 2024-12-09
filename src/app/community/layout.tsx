import Navbar from '../components/ui/Navbar'
import OpenCloseNav from '../components/ui/Navbar/OpenCloseNav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen flex">
      <Navbar />
      <div className="w-1/12 navbar-temp"></div>
      <div className="bg-secondary w-full rounded-xl relative">
        <div className="absolute top-0 right-0 left-0 flex justify-between p-5 items-center">
          <OpenCloseNav classname="bg-background" />
        </div>
        <div>{children}</div>
      </div>
    </main>
  )
}

export default Layout
