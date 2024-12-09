import Navbar from '../components/ui/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen flex">
      <Navbar />
      <div className="w-1/12 navbar-temp"></div>
      <div className="bg-secondary w-full rounded-xl p-5">{children}</div>
    </main>
  )
}

export default Layout
