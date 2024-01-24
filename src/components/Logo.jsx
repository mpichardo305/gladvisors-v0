import EagleLogo from '@/images/logos/guardianla.svg'
import StripLogo from '@/images/logos/GuardianLifeAdvisors.svg'
import Image from 'next/image'

export function Logo(props) {
  return (
    <Image src={StripLogo} alt={'Logo'} width={250} height={150} optimized />
  )
}
