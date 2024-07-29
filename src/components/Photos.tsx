import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/images/apps/rad-timer.png'

export default function Photos() {
  return (
    <div className="bg-gray-200 dark:bg-zinc-800">
      <div className="flex justify-center gap-5 overflow-hidden sm:gap-8">
        {[image1].map((image, imageIndex) => (
          <div
            className="flex w-44 flex-col items-center sm:w-72"
            key={image.src}
          >
            <div className={clsx('flex-none sm:rounded-2xl')}>
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
              />
            </div>
            <div className="-mt-4 mb-6">
              <h2 className="text-center text-2xl font-black tracking-wider text-zinc-600 dark:text-zinc-300">
                Rad Timer
              </h2>
              <p className="mt-2 text-center text-sm leading-tight text-zinc-600 dark:text-zinc-300">
                Ridiculously simple timer for your menu bar
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
