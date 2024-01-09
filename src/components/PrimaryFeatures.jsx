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
    function onMediaQueryChange(mediaQueryList) {
      if (mediaQueryList.matches) {
        setTabOrientation('vertical')
      } else {
        setTabOrientation('horizontal')
      }
    }

    // Set up media query listeners
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)')
    mobileMediaQuery.addEventListener('change', onMediaQueryChange)

    // Initialize tab orientation
    onMediaQueryChange(mobileMediaQuery)

    return () => {
      // Clean up listeners
      mobileMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="why-us"
      aria-label="why-us"
      className="bg-white-600 relative overflow-hidden pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/4 top-1/3 max-w-none translate-x-[-44%] translate-y-[-32%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
        style={{ filter: 'brightness(0.8)' }}
      />
      <Container className="relative grid-cols-12">
        <div className="grid-cols-6"></div>
        <div className="mr-10 grid-cols-12">
          <div className="grid grid-cols-12">
            <h2 className="col-span-6 col-start-7 font-display text-2xl text-white sm:text-4xl md:text-5xl">
              Unlock Your Potential with Our Prestigious Firm
            </h2>
            <p className="text-1xl col-span-6 col-start-7 mt-10 tracking-tight text-white sm:text-3xl md:text-2xl">
              At our firm, we are looking for talented individuals ready to make
              a real impact in the world of financial planning. Our firm offers
              a unique blend of traditional values and innovative practices,
              providing the ideal setting for ambitious professionals.
            </p>
          </div>
          {tabOrientation === 'horizontal' && (
            <div className="mt-2 grid grid-cols-12 lg:mt-20">
              <Tab.Group
                as="div"
                className="col-span-5 col-start-7 mr-4 grid justify-end sm:mx-0 sm:overflow-visible"
                vertical={tabOrientation === 'vertical'}
                grid-column="7/13"
              >
                {({ selectedIndex }) => (
                  <>
                    <div className="justify-ends -mx-4 flex pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
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
                                  'cursor-default font-display text-xl text-white [&:not(:focus-visible)]:focus:outline-none'
                                )}
                              >
                                <span className="absolute inset-0 rounded-full text-white lg:rounded-l-xl lg:rounded-r-none" />
                                {feature.title}
                              </Tab>
                            </h3>
                            <p
                              className={clsx(
                                'mt-2 hidden text-lg text-white lg:block'
                              )}
                            >
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </Tab.List>
                    </div>
                  </>
                )}
              </Tab.Group>
            </div>
          )}
          <div className="mt-6 flex justify-end sm:pl-4 lg:mr-40">
            <Button
              grid-column="10/11"
              style={{
                color: 'black',
                backgroundColor: '#32A665',
                border: '1px solid black',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '1.125rem',
                cursor: 'pointer',
                marginRight: '30px',
              }}
            >
              <span>Learn More</span>
            </Button>
            <Button
              grid-column="12/13"
              style={{
                borderRadius: '1.5rem',
                backgroundColor: 'white',
                padding: '0.5rem 1rem',
                fontSize: '1.125rem',
                color: 'black',
                cursor: 'pointer',
                border: '1.5px solid black',
              }}
              href="/register"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
