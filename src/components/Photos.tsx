import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/images/apps/rad-timer.png'
import macAppStoreBadgeBlack from '@/images/apple/mac_app_store_badge_black.svg'
import macAppStoreBadgeWhite from '@/images/apple/mac_app_store_badge_white.svg'

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
                Radial Timer
              </h2>
              <p className="mt-2 text-center text-sm leading-tight text-zinc-600 dark:text-zinc-300">
                Ridiculously simple timer for your menu bar
              </p>
              <div className="mt-3 flex justify-center">
                <a
                  href="https://apps.apple.com/us/app/radial-timer/id6581479928?mt=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  aria-label="Download Radial Timer on the Mac App Store"
                >
                  <Image
                    src={macAppStoreBadgeBlack}
                    alt="Download on the Mac App Store"
                    className="dark:hidden"
                  />
                  <Image
                    src={macAppStoreBadgeWhite}
                    alt="Download on the Mac App Store"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
