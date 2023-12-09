import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { WhyUs } from '@/components/WhyUs'
import ServiceArea from '@/components/ServiceArea'

export default function Home() {
  return (
    <>
      <Head>
        <title>Join Our Elite Team of Financial Advisors</title>
        <meta
          name="description"
          content="Attracting and developing exceptional talent to service our distinguished clients."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        <Testimonials />
        {/* <Pricing /> */}
       
       <WhyUs/>
        <CallToAction />
        <Faqs />
        {/* <ServiceArea/> */}
      </main>
      <Footer />
    </>
  )
}
