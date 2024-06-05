# Medium Clone

A full-stack Medium clone built using modern web technologies.    
App live on: https://medium-eta-nine.vercel.app

## Stack

- **Backend**: [Hono](https://hono.dev/) on [Cloudflare Workers](https://workers.cloudflare.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/) with connection pooling
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Frontend**: [React](https://reactjs.org/)
- **Validation**: [Zod](https://zod.dev/) for schema validation and type inference

## Features

- Sign up or log in to start writing and reading articles
- User authentication and authorization
- Create articles

## Installation

-  **Clone the repository:**

    ```sh
    git clone https://github.com/aryanxvz/medium.git
    cd medium
    ```

## Project Structure

- `backend/`: Contains the Hono backend with Cloudflare Workers, Prisma ORM setup, and PostgreSQL database configuration.
- `frontend/`: Contains the React application biult using TypeScript
- `common/`: Contains shared code between frontend and backend. Contains zod validation and type inference.

## Environment Variables

### Backend

- `DATABASE_URL`: The connection string for your PostgreSQL database.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Open a pull request

## Acknowledgments

- Inspired by the real Medium platform.
- Built with [Hono](https://hono.dev/), [Cloudflare Workers](https://workers.cloudflare.com/), [PostgreSQL](https://www.postgresql.org/), [Prisma](https://www.prisma.io/), [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), and [Zod](https://zod.dev/).

