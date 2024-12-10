'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'

const quotes = [
  {
    text: "Power isn't determined by your size, but by the size of your heart and dreams.",
    highlight: 'size of your heart and dreams',
    character: 'Monkey D. Luffy',
  },
  {
    text: 'When the world shoves you around, you just gotta stand up and shove back.',
    highlight: 'stand up and shove back',
    character: 'Roronoa Zoro',
  },
  {
    text: 'A lesson without pain is meaningless. That’s why you have to fight!',
    highlight: 'fight',
    character: 'Monkey D. Luffy',
  },
  {
    text: 'Being lonely is more painful than getting hurt.',
    highlight: 'more painful than getting hurt',
    character: 'Monkey D. Luffy',
  },
  {
    text: 'If you don’t take risks, you can’t create a future.',
    highlight: 'take risks',
    character: 'Monkey D. Luffy',
  },
  {
    text: 'I don’t want to conquer anything. I just think the guy with the most freedom in this ocean is the Pirate King!',
    highlight: 'freedom in this ocean',
    character: 'Monkey D. Luffy',
  },
  {
    text: 'Forget your name and make something of yourself!',
    highlight: 'make something of yourself',
    character: 'Sabo',
  },
  {
    text: 'Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!',
    highlight: 'wins this war',
    character: 'Donquixote Doflamingo',
  },
  {
    text: 'No matter how difficult or impossible it is, never lose sight of your goal.',
    highlight: 'never lose sight of your goal',
    character: 'Monkey D. Luffy',
  },
]

export function HeroHighlightSection() {
  const [randomQuote, setRandomQuote] = useState(quotes[0])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setRandomQuote(quotes[randomIndex])
  }, [])

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {randomQuote.text.split(randomQuote.highlight)[0]}
        <Highlight className="text-black dark:text-white">
          {randomQuote.highlight}
        </Highlight>
        {randomQuote.text.split(randomQuote.highlight)[1]}
      </motion.h1>
      <p className="text-lg text-neutral-500 dark:text-neutral-400 mt-4 text-center">
        - {randomQuote.character}
      </p>
    </HeroHighlight>
  )
}
