import Image from 'next/image'
import { Button } from '@/components/Button'
import { CheckIcon } from '@heroicons/react/solid'
import photoFlorida from '@/images/logos/Florida.svg'
const areas = [
  { city: 'Miami' },
  { city: 'Fort Lauderdale' },
  { city: 'Destin' },
  { city: 'West Palm Beach' },
  // { city: 'Orlando' },
  // { city: 'Boca Raton' },
  // { city: 'Jacksonville' },
]
export function ServiceArea() {
  return (
    <section className="ServiceArea">
      <div className="container mx-auto">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '10px',
            width: '45rem',
          }}
        >
          <Image
            style={{
              width: '18rem',
              marginRight: '1rem',
            }}
            src={photoFlorida}
            alt=""
            priority
          />
          <div style={{ flexGrow: 1 }}>
            <p style={{ marginBottom: '0.5rem' }}>Our Markets</p>
            <p>
              Our firm, has offices in 4 cities in the State of Florida and we
              are looking to expand
            </p>
          </div>
        </div>
      </div>

      {/* See all service areas button */}
    </section>
  )
}

export default ServiceArea
