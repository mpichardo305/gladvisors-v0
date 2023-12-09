import EagleLogo from '@/images/logos/eagle_logo.svg'
import Image from 'next/image'

export function Logo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 109 40" {...props}>
      <Image src={EagleLogo} alt={'Logo'} width={56} height={56} unoptimized />
    </svg>
  )
}
