# Next.js Starter (App Router)

## Getting Started

### Development mode

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Production mode

```bash
npm install
npm run build
npm run start
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!

## Environment Variables

In your local environment, create a `env.local` file that looks like:

```dotenv
VCAP_SERVICES='{
  "database": [
          {
              "name": "database",
              "label": "user-provided",
              "tags": [],
              "credentials": {
                  "url": "https://fake.database.url.com",
                  "password": "passw0rd"
              }
          }
      ]
}'

FAKE_ENV_VAR=hello
```

If using Cloud Foundry, you can create a User Provided Environment Variable `FAKE_ENV_VAR` and a User Provided Service (
UPS) named `database` service that provides some fake data.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!
