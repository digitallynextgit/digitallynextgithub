This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Next.js Careers Page Application

## Email Configuration

The application includes a form submission feature that sends confirmation emails to applicants and notification emails to your team. To set this up:

1. Create a `.env.local` file in the root directory with the following variables:

```
# Email configuration for Gmail
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_app_password
RECIPIENT_EMAIL=your_company_email@example.com
```

### How to get an App Password for Gmail

Gmail requires an App Password for applications to send emails on your behalf:

1. Go to your Google Account at [myaccount.google.com](https://myaccount.google.com)
2. Select Security
3. Under "Signing in to Google," select 2-Step Verification (enable it if not already enabled)
4. At the bottom of the page, select App passwords
5. Enter a name that helps you remember where you'll use the app password (e.g., "NextJS Careers App")
6. Select Generate
7. Copy the generated password and paste it in your `.env.local` file as the GMAIL_PASS value

## Handling Form Submissions Without Email Configuration

If email sending is not configured, the application will:
1. Still accept and process form submissions
2. Display appropriate error messages to users
3. Log submission details to the console

For production deployment, ensure proper email configuration to provide the best user experience.
