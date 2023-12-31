import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()
  return null
  // return (
  //   <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
  //     <rect
  //       clipPath={`url(#${id}-clip)`}
  //       className={clsx(
  //         'h-8 transition-all duration-300',
  //         invert ? 'fill-white' : 'fill-neutral-950',
  //         filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
  //       )}
  //     />
  //     <use
  //       href={`#${id}-path`}
  //       className={invert ? 'stroke-white' : 'stroke-neutral-950'}
  //       fill="none"
  //       strokeWidth="1.5"
  //     />
  //     <defs>
  //       <path
  //         id={`${id}-path`}
  //         d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
  //       />
  //       <clipPath id={`${id}-clip`}>
  //         <use href={`#${id}-path`} />
  //       </clipPath>
  //     </defs>
  //   </svg>
  // )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 200 20"
      className="w-full"
    >
      <g>
        <path d="M12.2,16.5H5.8l-1,3H0L6.6,2h4.9l6.6,17.5h-4.8L12.2,16.5z M11.1,13L9,7.2L7,13H11.1z" />
        <path
          d="M27.4,10.7c-0.8-0.4-1.5-0.6-2.2-0.6c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.4,0.4-0.4,0.6c0,0.1,0,0.3,0.1,0.3
		c0,0.1,0.1,0.2,0.3,0.2c0.1,0.1,0.3,0.1,0.6,0.2c0.3,0.1,0.6,0.1,1,0.2c1.1,0.2,2,0.6,2.6,1.2c0.6,0.6,0.8,1.4,0.8,2.3
		c0,0.7-0.1,1.3-0.4,1.9c-0.3,0.6-0.7,1-1.1,1.4c-0.5,0.4-1.1,0.7-1.8,0.9c-0.7,0.2-1.4,0.3-2.3,0.3c-1.6,0-3.2-0.5-4.7-1.4l1.5-3
		c1.2,0.8,2.3,1.2,3.3,1.2c0.4,0,0.7-0.1,0.9-0.3c0.2-0.2,0.4-0.4,0.4-0.6c0-0.2,0-0.3-0.1-0.4c0-0.1-0.1-0.2-0.2-0.3
		c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2-0.1-0.5-0.1-0.9-0.2c-1.3-0.3-2.2-0.7-2.7-1.2c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.7,0.1-1.3,0.4-1.8
		c0.2-0.5,0.6-1,1.1-1.4s1-0.7,1.7-0.9c0.6-0.2,1.4-0.3,2.2-0.3c1.3,0,2.6,0.3,3.8,0.8L27.4,10.7z"
        />
        <path d="M36.3,11.1v8.4h-4.1v-8.4h-1.4V7.6h1.4V4h4.1v3.6h2.4v3.5H36.3z" />
        <path
          d="M44.2,14.3c0,1.8,0.8,2.7,2.5,2.7c0.9,0,1.6-0.4,2-1.1h4c-0.8,2.7-2.8,4.1-6.1,4.1c-1,0-1.9-0.2-2.7-0.5
		c-0.8-0.3-1.5-0.7-2.1-1.3c-0.6-0.6-1-1.2-1.4-2c-0.3-0.8-0.5-1.6-0.5-2.6c0-1,0.2-1.9,0.5-2.7c0.3-0.8,0.7-1.5,1.3-2
		c0.6-0.6,1.2-1,2.1-1.3c0.8-0.3,1.7-0.5,2.7-0.5c1,0,1.9,0.2,2.7,0.5c0.8,0.3,1.5,0.7,2,1.3c0.6,0.6,1,1.3,1.3,2.1
		c0.3,0.8,0.4,1.8,0.4,2.8v0.4H44.2z M49,11.8c-0.1-0.6-0.4-1.1-0.8-1.4c-0.4-0.4-0.9-0.5-1.6-0.5c-0.6,0-1.2,0.2-1.6,0.5
		c-0.4,0.3-0.7,0.8-0.8,1.4H49z"
        />
        <path
          d="M55.3,7.6h4.2v1.9c0.4-0.7,1-1.3,1.6-1.6c0.6-0.4,1.4-0.6,2.2-0.6c0.1,0,0.2,0,0.4,0c0.1,0,0.3,0,0.4,0v4
		c-0.6-0.3-1.1-0.4-1.8-0.4c-1,0-1.7,0.3-2.2,0.9c-0.5,0.6-0.7,1.4-0.7,2.5v5.1h-4.2V7.6z"
        />
        <path
          d="M69.8,14.3c0,1.8,0.8,2.7,2.5,2.7c0.9,0,1.6-0.4,2-1.1h4c-0.8,2.7-2.8,4.1-6.1,4.1c-1,0-1.9-0.2-2.7-0.5
		c-0.8-0.3-1.5-0.7-2.1-1.3c-0.6-0.6-1-1.2-1.4-2c-0.3-0.8-0.5-1.6-0.5-2.6c0-1,0.2-1.9,0.5-2.7c0.3-0.8,0.7-1.5,1.3-2
		c0.6-0.6,1.2-1,2.1-1.3c0.8-0.3,1.7-0.5,2.7-0.5c1,0,1.9,0.2,2.7,0.5c0.8,0.3,1.5,0.7,2,1.3c0.6,0.6,1,1.3,1.3,2.1
		c0.3,0.8,0.4,1.8,0.4,2.8v0.4H69.8z M74.7,11.8c-0.1-0.6-0.4-1.1-0.8-1.4c-0.4-0.4-0.9-0.5-1.6-0.5c-0.6,0-1.2,0.2-1.6,0.5
		c-0.4,0.3-0.7,0.8-0.8,1.4H74.7z"
        />
        <path
          d="M98.6,6.5c-0.5-0.4-1-0.7-1.5-0.9c-0.5-0.2-1-0.3-1.4-0.3c-0.6,0-1.1,0.1-1.4,0.4c-0.4,0.3-0.6,0.6-0.6,1.1
		c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.1,0.6,0.3,1,0.4c0.4,0.1,0.7,0.2,1.1,0.3c1.5,0.5,2.5,1.2,3.2,2
		c0.7,0.8,1,1.9,1,3.2c0,0.9-0.1,1.7-0.4,2.4c-0.3,0.7-0.7,1.3-1.3,1.9c-0.6,0.5-1.3,0.9-2.1,1.2c-0.8,0.3-1.8,0.4-2.8,0.4
		c-2.2,0-4.2-0.7-6.1-2l1.9-3.7c0.7,0.6,1.3,1.1,2,1.3c0.7,0.3,1.3,0.4,1.9,0.4c0.7,0,1.3-0.2,1.6-0.5c0.4-0.3,0.5-0.7,0.5-1.2
		c0-0.3,0-0.5-0.1-0.7c-0.1-0.2-0.2-0.4-0.5-0.5c-0.2-0.2-0.5-0.3-0.8-0.5c-0.3-0.1-0.8-0.3-1.2-0.5c-0.6-0.2-1.2-0.4-1.7-0.6
		c-0.6-0.2-1.1-0.5-1.5-0.9c-0.4-0.4-0.8-0.8-1.1-1.4C89.2,8.9,89,8.2,89,7.3c0-0.9,0.1-1.7,0.4-2.4c0.3-0.7,0.7-1.3,1.2-1.8
		c0.5-0.5,1.1-0.9,1.9-1.2c0.7-0.3,1.6-0.4,2.5-0.4c0.9,0,1.8,0.1,2.7,0.4c0.9,0.2,1.8,0.6,2.7,1.1L98.6,6.5z"
        />
        <path
          d="M103.1,13.5c0-0.9,0.2-1.7,0.5-2.5c0.4-0.8,0.8-1.4,1.5-2c0.6-0.6,1.4-1,2.2-1.3c0.9-0.3,1.8-0.5,2.8-0.5
		c1,0,1.9,0.2,2.8,0.5c0.9,0.3,1.6,0.8,2.2,1.3c0.6,0.6,1.1,1.2,1.5,2c0.4,0.8,0.5,1.6,0.5,2.6c0,0.9-0.2,1.8-0.5,2.6
		c-0.4,0.8-0.9,1.5-1.5,2c-0.6,0.6-1.4,1-2.3,1.3c-0.9,0.3-1.8,0.5-2.9,0.5c-1,0-1.9-0.2-2.8-0.5c-0.9-0.3-1.6-0.7-2.2-1.3
		c-0.6-0.6-1.1-1.3-1.5-2.1C103.2,15.3,103.1,14.4,103.1,13.5z M107.4,13.5c0,0.4,0.1,0.8,0.2,1.1c0.1,0.3,0.3,0.6,0.6,0.9
		c0.2,0.2,0.5,0.4,0.8,0.6c0.3,0.1,0.7,0.2,1,0.2c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.6c0.2-0.2,0.4-0.5,0.6-0.9
		c0.1-0.3,0.2-0.7,0.2-1.1c0-0.4-0.1-0.7-0.2-1.1c-0.1-0.3-0.3-0.6-0.6-0.9c-0.2-0.2-0.5-0.4-0.8-0.6c-0.3-0.1-0.7-0.2-1-0.2
		c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.6c-0.2,0.2-0.4,0.5-0.6,0.9C107.5,12.8,107.4,13.1,107.4,13.5z"
        />
        <path
          d="M124.1,11.1v8.4h-4.2v-8.4h-1.5V7.6h1.5V5.8c0-1,0.1-1.8,0.3-2.4c0.2-0.5,0.4-1,0.7-1.4c0.3-0.4,0.7-0.8,1.2-1.1
		c0.5-0.3,0.9-0.5,1.5-0.7c0.5-0.2,1-0.3,1.5-0.3c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3v3.7c-0.3-0.1-0.5-0.2-0.8-0.3
		c-0.2-0.1-0.5-0.1-0.7-0.1c-0.2,0-0.3,0-0.5,0.1c-0.2,0.1-0.3,0.2-0.5,0.3c-0.2,0.2-0.3,0.4-0.3,0.7c-0.1,0.3-0.1,0.7-0.1,1.3v1.5
		h2.9v3.5H124.1z"
        />
        <path d="M133.8,11.1v8.4h-4.1v-8.4h-1.4V7.6h1.4V4h4.1v3.6h2.4v3.5H133.8z" />
        <path d="M140.9,7.6l2.8,6.3l2.9-6.3h2.6l2.9,6.5l3-6.5h4.6l-6.1,11.9h-2.8l-2.9-6.5l-2.8,6.5h-2.8l-6-11.9H140.9z" />
        <path
          d="M169.7,7.6h4.2v11.9h-4.2v-1.3c-0.9,1.1-2.1,1.7-3.6,1.7c-0.9,0-1.6-0.2-2.4-0.5c-0.7-0.3-1.3-0.8-1.9-1.3
		c-0.5-0.6-1-1.2-1.2-2c-0.3-0.8-0.4-1.6-0.4-2.5c0-0.9,0.1-1.7,0.4-2.4c0.3-0.8,0.7-1.4,1.2-2c0.5-0.6,1.1-1,1.9-1.4
		c0.7-0.3,1.5-0.5,2.4-0.5c1.5,0,2.7,0.5,3.6,1.6V7.6z M164.5,13.5c0,0.4,0.1,0.7,0.2,1.1c0.1,0.3,0.3,0.6,0.6,0.9
		c0.2,0.2,0.5,0.4,0.8,0.6c0.3,0.1,0.7,0.2,1.1,0.2c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.6c0.2-0.2,0.4-0.5,0.6-0.9
		s0.2-0.7,0.2-1c0-0.4-0.1-0.7-0.2-1.1s-0.3-0.6-0.6-0.9c-0.2-0.2-0.5-0.4-0.8-0.6c-0.3-0.1-0.7-0.2-1-0.2c-0.4,0-0.7,0.1-1.1,0.2
		c-0.3,0.1-0.6,0.3-0.8,0.6c-0.2,0.2-0.4,0.5-0.6,0.8C164.6,12.8,164.5,13.2,164.5,13.5z"
        />
        <path
          d="M176.7,7.6h4.2v1.9c0.4-0.7,1-1.3,1.6-1.6c0.6-0.4,1.4-0.6,2.2-0.6c0.1,0,0.2,0,0.4,0c0.1,0,0.3,0,0.4,0v4
		c-0.6-0.3-1.1-0.4-1.8-0.4c-1,0-1.7,0.3-2.2,0.9c-0.5,0.6-0.7,1.4-0.7,2.5v5.1h-4.2V7.6z"
        />
        <path
          d="M191.3,14.3c0,1.8,0.8,2.7,2.5,2.7c0.9,0,1.6-0.4,2-1.1h4c-0.8,2.7-2.8,4.1-6.1,4.1c-1,0-1.9-0.2-2.7-0.5
		c-0.8-0.3-1.5-0.7-2.1-1.3c-0.6-0.6-1-1.2-1.4-2c-0.3-0.8-0.5-1.6-0.5-2.6c0-1,0.2-1.9,0.5-2.7c0.3-0.8,0.7-1.5,1.3-2
		c0.6-0.6,1.2-1,2.1-1.3c0.8-0.3,1.7-0.5,2.7-0.5c1,0,1.9,0.2,2.7,0.5c0.8,0.3,1.5,0.7,2,1.3c0.6,0.6,1,1.3,1.3,2.1
		c0.3,0.8,0.4,1.8,0.4,2.8v0.4H191.3z M196.1,11.8c-0.1-0.6-0.4-1.1-0.8-1.4c-0.4-0.4-0.9-0.5-1.6-0.5c-0.6,0-1.2,0.2-1.6,0.5
		c-0.4,0.3-0.7,0.8-0.8,1.4H196.1z"
        />
      </g>
    </svg>
  )
}
