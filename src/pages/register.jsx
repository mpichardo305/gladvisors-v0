import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  const handleSubmit = async (event) => {
    event.preventDefault() // Prevent the default form submission behavior
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    // Send form data to our custom API endpoint
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      // If the request was successful, redirect or inform the user
      if (res.ok) {
        // For example, redirect to a thank you page
        window.location.href = '/thank-you'
      } else {
        // Error handling here, e.g., showing a message to the user
        console.error('Form submission failed')
      }
    } catch (error) {
      // Network or other error handling here
      console.error('An error occurred while submitting the form:', error)
    }
  }
  return (
    <>
      <Head>
        <title>Getting started</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Fill out the form to get started with our firm
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              We will contact you shortly for next steps
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Phone number"
            id="phone"
            name="phone"
            type="phone"
            autoComplete="phone"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          {/* <TextField
            className="col-span-full"
            label="LinkedIn URL"
            id="email"
            name="linkedin_profile"
            type="url"
            required
          /> */}
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option>Word of Mouth</option>
            <option>Email</option>
            <option>LinkedIn Message</option>
            <option>Phone call</option>
          </SelectField>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Submit <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
