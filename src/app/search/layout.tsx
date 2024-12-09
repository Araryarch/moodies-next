import Navbar from '../components/ui/Navbar'
import OpenCloseNav from '../components/ui/Navbar/OpenCloseNav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen flex">
      <Navbar />
      <div className="w-1/12 navbar-temp"></div>
      <div className="bg-secondary w-full rounded-xl p-5">
        <div className="fixed top-0 right-0 p-5">
          <OpenCloseNav classname="bg-background" />
        </div>
        {children}
      </div>
    </main>
  )
}

export default Layout
