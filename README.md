<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->


# Obscura

An anonymous feedback platform that lets users send and receive honest feedback — privately and securely.

---

## Features

- **Anonymous Feedback** — Users can send feedback without revealing their identity.
- **Email OTP Verification** — Secure account verification using one-time passwords sent via email.
- **Authentication** — Session-based auth powered by NextAuth with minimal friction.
- **Optimized Data Queries** — MongoDB Aggregation Pipelines for fast and efficient data retrieval.
- **Scalable Architecture** — Modular components and clean API design built for future expansion.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js |
| Database | MongoDB |
| Authentication | NextAuth |
| Email Service | Resend |
| Language | TypeScript |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running [MongoDB](https://www.mongodb.com/) instance

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Shreshth-Srivastava/Obscura.git
   cd obscura
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory. Refer to the [Environment Variables](#environment-variables) section below.

4. **Run the development server**
```bash
   npm run dev
```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:
```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
<!-- NEXTAUTH_URL=http://localhost:3000 -->

# Resend (Email Service)
RESEND_API_KEY=your_resend_api_key
```

> **Note:** Never commit your `.env.local` file to version control. It is already included in `.gitignore` by default in Next.js projects.

---

<!-- ## Screenshots

> _Add screenshots of your app here._
```
![Home Page](screenshots/home.png)
![Feedback Page](screenshots/feedback.png)
``` -->

---

## License

This project is licensed under the [MIT License](LICENSE).