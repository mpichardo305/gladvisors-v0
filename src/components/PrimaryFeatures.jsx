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
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="why-us"
      aria-label="Features for running your books"
      className="bg-white-600 relative overflow-hidden pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="mt-10 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Unlock Your Potential with Our Prestigious Firm
          </h2>
          <p className="mt-10 text-lg tracking-tight text-white">
            At our firm, we offer a unique opportunity for talented individuals
            to join our prestigious financial planning practice. With our regal
            design and industry expertise, we provide the perfect environment
            for you to thrive and make a difference in the lives of our clients.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6	'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'cursor-default font-display text-lg text-blue-100 lg:text-white [&:not(:focus-visible)]:focus:outline-none'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm text-blue-100 lg:block'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-12">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6">
                      <div className="absolute bottom-[-1.25rem] sm:inset-x-0" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                      <div
                        style={{
                          marginTop: '40px',
                          display: 'flex',
                          justifyContent: 'space-evenly',
                        }}
                      >
                        <Button
                          style={{
                            color: 'white',
                            backgroundColor: 'gray',
                            borderRadius: '0.375rem',
                            border: '1px solid black',
                            padding: '0.5rem 1rem',
                            fontSize: '1.125rem',
                            cursor: 'pointer',
                          }}
                        >
                          <span>Learn More</span>
                        </Button>
                        <Button
                          style={{
                            borderRadius: '9999px',
                            backgroundColor: 'black',
                            padding: '0.25rem 1rem',
                            fontSize: '1.125rem',
                            color: 'white',
                            cursor: 'pointer',
                          }}
                          href="/register"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                    {/* <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div> */}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
