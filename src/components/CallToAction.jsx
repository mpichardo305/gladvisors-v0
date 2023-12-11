import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/screenshots/walking_fast.webp'

export function CallToAction() {
  return (
    <section
      id="register-today"
      className="relative overflow-hidden bg-blue-600 py-80"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
        style={{ filter: 'brightness(0.9)' }}
      />
      <Container className="relative">
        <div className="mx-auto ml-20 max-w-lg text-center">
          <h2 className="font-display text-5xl tracking-tight text-black sm:text-5xl">
            Join our Financial Planning Team
          </h2>
          <p className="mt-4 text-xl tracking-tight text-black">
            Explore exciting opportunities in our financial planning practice.
          </p>
          <Button
            href="/register"
            color="blue"
            className="mt-10"
            style={{ width: '150px', height: '50px', fontSize: '16px' }}
          >
            Get started
          </Button>
        </div>
      </Container>
    </section>
  )
}
