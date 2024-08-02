import { type Metadata } from 'next'

import { Container } from '@/components/Container'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Leave your details and we will get in touch',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScVzU7N-auZQUVekfXDwI1bIpxbmLJKG5vlMl6pNuMO2xx2Ow/viewform?embedded=true"
        width="100%"
        height="1000px"
      >
        Loading…
      </iframe>
    </Container>
  )
}
