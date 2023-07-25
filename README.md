# Housing Cloud - Web

An application to help students find the best housing units.

## :rocket: Technologies

This project was made using the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://vitejs.dev/)
- [Tailwind](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)

## :computer: How to run

```bash
# Clone repository
$ git clone https://github.com/debfdias/housing-cloud-web/

# Access folder
$ cd housing-cloud-web
```

```bash
# Install dependencies
$ yarn install
```
Create an .env file in project's root:

```bash
# Copy this to the .env file
DATABASE_URL="file:./db.sqlite"

# Run DB migrations
$ yarn prisma migrate dev

# Run DB seed
$ npx prisma db seed

# Run aplication
$ yarn dev

# Run Prisma Studio
$ npx prisma studio

```

