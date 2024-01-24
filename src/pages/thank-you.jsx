import { Container } from '@/components/Container'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
export function Disclosure() {
  return (
    <>
      <Head>
        <title>Guardian Life Advisors</title>
        <meta
          name="description"
          content="Attracting and developing exceptional talent to service our distinguished clients."
        />
      </Head>
      <Header />
      <Container id="thank-you">
        <div className="py-20 text-center text-lg">
          <h1 className="font-semibold text-gray-900">
            Thank you for your submission!
          </h1>
          <h2 className="py-4 text-gray-900">
            We will be in touch with next steps
          </h2>
          <Button
            style={{ width: '150px', height: '50px', fontSize: '16px' }}
            href="/"
            action="/"
          >
            Return
          </Button>
        </div>
      </Container>
    </>
  )
}
export default Disclosure
