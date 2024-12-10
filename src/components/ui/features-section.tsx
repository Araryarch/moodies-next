import { cn } from '@/lib/utils'
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react'

export function FeaturesSection() {
  const features = [
    {
      title: 'Dirancang untuk semua orang',
      description:
        'Dibuat untuk membantu Anda menemukan pengalaman terbaik sesuai suasana hati Anda.',
      icon: <IconTerminal2 />,
    },
    {
      title: 'Mudah digunakan',
      description:
        'Seperti berjalan di mal favorit Anda, kini lebih personal dengan bantuan AI.',
      icon: <IconEaseInOut />,
    },
    {
      title: 'AI Chatbot Pintar',
      description:
        'Chatbot kami memahami mood Anda dan memberikan rekomendasi genre yang tepat.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: '100% Akurat',
      description:
        'Kami memastikan pengalaman Anda tetap relevan dan menyenangkan.',
      icon: <IconCloud />,
    },
    {
      title: 'Rekomendasi Personal',
      description:
        'Setiap saran disesuaikan berdasarkan preferensi dan mood Anda saat ini.',
      icon: <IconRouteAltLeft />,
    },
    {
      title: 'Dukungan 24/7',
      description:
        'Kami selalu ada, baik untuk menjawab pertanyaan maupun menemani Anda memilih.',
      icon: <IconHelp />,
    },
    {
      title: 'Jaminan Kepuasan',
      description:
        'Moodies dirancang untuk membuat pengalaman Anda lebih bermakna dan memuaskan.',
      icon: <IconHeart />,
    },
    {
      title: 'Semua Ada di Sini',
      description:
        'Dari hiburan hingga inspirasi, temukan semuanya dengan mudah di Moodies.',
      icon: <IconCurrencyDollar />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
