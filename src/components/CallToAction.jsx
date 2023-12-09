import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/screenshots/walkingfast.jpg'

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
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center ml-20">
          <h2 className="font-display text-4xl tracking-tight text-black sm:text-4xl">
            Join our Financial Planning Team
          </h2>
          <p className="mt-4 text-lg tracking-tight text-black">
            Explore exciting opportunities in our financial planning practice.
          </p>
          <Button href="/register" color="blue" className="mt-10" style={{ width: '150px', height: '50px', fontSize: '16px'  }}>
            Get started
          </Button>
        </div>
      </Container>
    </section>
  )
}
