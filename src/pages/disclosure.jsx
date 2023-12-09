import { Container } from '@/components/Container'
export function Disclosure() {
  return (
    <Container className="relative" id="disclosure">
    <div style={{color: 'black'}}>
      <h1>Important Disclosure:</h1>
      <h2>
        Guardian Life Advisors is not affiliated with Guardian Life or Guardian.
      </h2>
      <h2>
        Guardian Life Advisors is a talent recruiting team responsible for
        recruiting advisors to join firms like NPC Financial, member of the
        Guardian network. We source candidates for financial planning firms that
        are part of the Guardian Network.{' '}
      </h2>
    </div>
  </Container>
    
  )
}
export default Disclosure
