import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Why Us</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            <NavLink href="#disclosure">Important Disclosure</NavLink>
          </p>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Guardian Life Advisors. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
