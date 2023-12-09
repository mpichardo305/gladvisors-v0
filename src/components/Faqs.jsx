import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
     question: 'What does a financial advisor do?',
     answer: 'A financial advisor helps manage your finances, or manages them for you. They assess your current financial situation, identify areas for improvement, and help you create a financial plan. They can assist with saving and budgeting, planning to meet short- and long-term goals, retirement planning, tax planning, and investment management.',
    },
    {
     question: 'What are the key differences between a financial advisor and a financial planner?',
     answer: 'A financial advisor can also be a financial planner or provide financial planning as part of their repertoire of services. A financial planner usually focuses on creating and analyzing financial plans and may not provide direct investment advice and/or manage assets. Finding a professional who is skilled in the particular area of your finances that you need help with will likely make the most sense.',
    },
   ],
   [
    {
     question: 'How do financial advisors make money?',
     answer: 'Financial advisors earn their income in three primary ways: client fees, commissions, and salaries. Client fees can be structured in various ways, such as hourly rates, retainers, or a percentage of the client’s assets under management (AUM). Commissions are earned when advisors recommend and sell certain financial products, such as mutual funds or annuities. Some financial advisors receive a salary from the investment firm that employs them.',
    },
    {
     question: 'How do you ensure you are acting in the best interest of your clients?',
     answer: "Financial advisors are required to uphold the fiduciary standard, which means they must put their clients' interests above their own. This includes avoiding conflicts of interest and ensuring transparency in their advice and services. It's crucial to understand their payment structure to establish transparency and trust in the client-advisor relationship.",
    }
   ],
   [
    {
      question: 'What are the key considerations clients have when choosing a financial advisor?',
      answer: "When potenntial clients evaluate a financial advisor, they consider factors such as the advisor's credentials, experience, fee structure, and the advisor's ability to understand and meet the client's unique circumstances. Understanding how your financial advisor is compensated is crucial to establishing transparency and trust in the client-advisor relationship.",
     }
   ],
   
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            These are the typical questions we get from candidates whom are interviewing with our firm.  
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
