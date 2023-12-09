import EagleLogo from '@/images/logos/guardianla.svg'
import Image from 'next/image'

export function Logo(props) {
  return (
    // <svg aria-hidden="true" viewBox="0 0 109 40" {...props}>
      <Image
        src={EagleLogo}
        alt={'Logo'}
        width={250}
        height={150}
        optimized
      />
    // </svg>
  )
}
