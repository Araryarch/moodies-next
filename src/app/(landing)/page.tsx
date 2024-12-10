import Navbar from '@/app/components/ui/Navbar'
import { Button } from '@/components/ui/button'
import { authUserSession } from '@/lib/auth'
import Image from 'next/image'
import MangaList from './components/MangaList'
import AnimeList from './components/AnimeList'
import OpenCloseNav from '../components/ui/Navbar/OpenCloseNav'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { getFetchData } from '@/lib/getFetchData'
import { AnimeData, MangaData } from '../types/api'
import { FeaturesSection } from '@/components/ui/features-section'
import { HeroHighlightSection } from './components/HeroHighlight'

const Landing = async () => {
  const user = await authUserSession()
  const { data } = await getFetchData('top/anime')

  const products = data.map((anime: AnimeData | MangaData) => ({
    title: anime.title,
    link: `/anime/${anime.mal_id}`,
    thumbnail: anime.images.jpg.large_image_url,
  }))

  return (
    <main className="w-full min-h-screen bg-background flex">
      <Navbar />
      <div className="w-1/4 md:w-1/6 px-5 xl:w-1/12 navbar-temp"></div>
      <div className="min-h-screen transition-all ease-in-out duration-300 items-center bg-secondary w-full rounded-xl relative overflow-x-hidden overflow-y-scroll">
        <div className="fixed z-50 top-0 left-0 right-0 px-5 py-[1.2rem] flex h-fit text-xl gap-2 items-center justify-end backdrop-blur-sm">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={
                user?.image
                  ? user.image
                  : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              }
              alt="user"
              className="rounded-full"
              width={40}
              height={40}
            />
            <span>{user?.name ? user.name : 'Guest'}</span>
            <OpenCloseNav classname={'bg-background'} />
          </div>
        </div>
        <div className="flex gap-5 min-h-screen w-full justify-center pl-5 items-center">
          <div className="max-w-xl gap-4 flex flex-col pr-5 px-5">
            <h1 className="text-6xl md:text-8xl font-bold">
              MOODIES<span className="text-destructive">.</span>
            </h1>
            <p className="text-xs md:text-base">
              Moodies is your go-to app for anime that fits your vibe! Feeling
              happy, sad, hyped, chill, or romantic? Just pick a mood, and let
              Jikan API deliver top anime picks that match your energy. Try it
              now and vibe like a true weeb! 🎉
            </p>
            <div className="button-wrapper flex gap-2">
              <Button className="w-fit">Try Now</Button>
              <Button className="w-fit" variant={'ghost'}>
                Signup
              </Button>
            </div>
          </div>
          <div className="w-full h-full hidden rounded-xl relative xl:flex flex-col justify-center items-center flex-wrap max-h-screen gap-3 overflow-hidden">
            <div className="atas flex max-w-full w-full gap-3">
              <AnimeList />
            </div>
            <div className="bawah flex w-full max-w-full gap-3">
              <MangaList />
            </div>
          </div>
        </div>
        <div className="min-h-screen w-full dark:bg-black bg-white">
          <HeroParallax products={products} />
        </div>
        <div className="min-h-screen w-full pt-20">
          <h1 className="text-center text-4xl uppercase font-medium">
            Why Choose Moodies ?
          </h1>
          <FeaturesSection />
        </div>
        <div className="min-h-screen w-full">
          <HeroHighlightSection />
        </div>
      </div>
    </main>
  )
}

export default Landing
