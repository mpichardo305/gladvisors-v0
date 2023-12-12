import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@/components/Button'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/screenshots/woman_shake.webp'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Why Choose Us',
    description:
      'Experience the unparalleled support and resources that set us apart from the competition.',
    image: screenshotPayroll,
  },
  {
    title: 'Our Commitment',
    description:
      'We are dedicated to your success and will provide the guidance you need to excel.',
    image: screenshotExpenses,
  },
]

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState('horizontal')
  const whyUsUrl = backgroundImage.src;

  return (
    <section
      id="why-us"
      aria-label="why-us"
      style={{'--image-url': `url(${whyUsUrl})`}} 
      className="flex flex-col items-start overflow-hidden bg-white-600 py-20 px-8 sm:px-12 md:px-16 bg-cover bg-no-repeat bg-top-left bg-[image:var(--image-url)]"
    >
      <Container className="flex flex-col gap-4 bg-slate-500/75 lg:bg-slate-500/50 mx-0 lg:w-[40%] md:w-[100%] p-10 rounded-4xl">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-white lg:text-3xl font-display sm:text-1xl md:text-2xl">
            Unlock Your Potential with Our Prestigious Firm
          </h2>
          <p className="text-sm text-white lg:text-1xl font-display sm:text-md md:text-lg">
            At our firm, we offer a unique opportunity for talented
            individuals to join our prestigious financial planning practice.
            With our regal design and industry expertise, we provide the
            perfect environment for you to thrive and make a difference in the
            lives of our clients.
          </p>
        </div>
        <div className="flex flex-col gap-4 xl:flex-row">
        {features.map((feature) => (
          <div key={feature.title} className="w-full pl-8 xl:w-1/2">
            <h3 className="text-lg font-bold text-white font-display sm:text-md md:text-lg lg:text-1xl">
              {feature.title}
            </h3>
            <p className="text-sm text-white lg:text-1xl font-display sm:text-md md:text-lg">
              {feature.description}
            </p>
          </div>
        ))}
        </div>
        <div className="grid grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-[unset]">
          <Button className="text-black bg-[#32A665] rounded-3xl border border-black hover:border-[#32A665] py-2 px-4 text-lg cursor-pointer">
            <span>Learn More</span>
          </Button>
          <Button 
            className="py-2 px-4 text-lg !text-black hover:!text-white bg-white border border-black hover:border-white cursor-pointer rounded-3xl"
            href="/register"
          >
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  )
}
