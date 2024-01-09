import Image from 'next/image'
import { Button } from '@/components/Button'
import { CheckIcon } from '@heroicons/react/solid'
import screenshotPayroll from '@/images/screenshots/blue_sweater_man.webp'

const reasons = [
  { reason: 'Supportive Work Environment' },
  { reason: 'Entrepreneurial Culture' },
  {
    reason: 'Industry Expertise',
  },
  {
    reason: 'Professional Growth',
  },
  {
    reason: 'Client Impact',
  },
]
export function WhyUs() {
  return (
    <section className="whyus-section">
      <div className="container mx-auto">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="mb-4 mt-20 text-center text-4xl font-bold leading-tight">
            Join Our Firm
          </h1>
          <p className="mt-4 text-center text-xl">
            At our firm, we offer a range of benefits and perks that make us
            stand out from the competition. Join our team and enjoy a supportive
            work environment, competitive compensation, and opportunities for
            growth and development.
          </p>
          <div className="mt-4">
            <ul role="list">
              {reasons.map((reason, reasonIndex) => (
                <li key={reasonIndex} className="flex flex-col gap-y-8">
                  <div className="flex font-display text-lg leading-7 text-slate-900">
                    <CheckIcon
                      style={{ marginRight: '10px' }}
                      className="h-6 w-6 text-gray-500"
                    />
                    <span>{reason.reason}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              marginTop: '40px',
              marginBottom: '40px',
            }}
          >
           
            <Button
              style={{
                borderRadius: '0.5rem',
                backgroundColor: 'black',
                fontSize: '16px',
                color: 'white',
                cursor: 'pointer',
              }}
              href="/register"
            >
              Get Started
            </Button>
            <Button
              style={{
                color: 'white',
                backgroundColor: '#08A665', // Light green color
                borderRadius: '1.5rem',
                border: '1px solid #08A665', // Light green border
                padding: '0.5rem 1rem',
                fontSize: '16px',
                cursor: 'pointer',
                marginLeft: '2rem', // Add margin to right
              }}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <span>Learn More</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
        <Image
          src={screenshotPayroll}
          alt=""
          priority
          sizes="(min-width: 1024px) 67.8125rem, (min-width: 768px) 45rem, 100%"
        />
      </div>
    </section>
  )
}

export default WhyUs
