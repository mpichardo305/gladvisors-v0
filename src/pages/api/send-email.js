// pages/api/send-email.js

import nodemailer from 'nodemailer' // You will install this package if not already present

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Your email server credentials and the destination email
    const transporter = nodemailer.createTransport({
      // Example for SMTP transporter
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'user@example.com',
        pass: 'password',
      },
    })

    const {
      first_name,
      last_name,
      phone,
      email,
      linkedin_profile,
      referral_source,
    } = req.body

    try {
      // Send email via your transporter configuration
      await transporter.sendMail({
        from: '"GL Advisors" <michael@guardianlifeadvisors.com>',
        to: 'robert_newman@npc', // Destination email
        subject: 'New Registration',
        text: `New registration details:
First Name: ${first_name}
Last Name: ${last_name}
Phone: ${phone}
Email: ${email}
LinkedIn URL: ${linkedin_profile}
Referral Source: ${referral_source}`,
        // For HTML email body, use `html` key instead of `text`
      })

      // Email sent successfully
      res.status(200).json({ message: 'Email sent successfully.' })
    } catch (error) {
      console.error('Email sending error:', error)
      res.status(500).json({ message: 'Internal server error.' })
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
