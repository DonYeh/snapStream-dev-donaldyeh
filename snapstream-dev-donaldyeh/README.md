## notes

using a default vue with navbar and inserting the 3 pages into the slot

steps: 1. created a default layout that displays the navbar 2. created 3 pages (/, /question1, question2) 3. for question 1, created a numToStringBase helper function to calculate a number to the number base. I set the default answer to a string and concatenate it with the calculated answer in order to return a string. 4. for question 2, the Activity api extracts the userID via query params (getQuery) and returns activity for the selected user.

problems:
I kept on getting an 'Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist'. After doing some googling, I determined that it had something to do with my Chrome extensions so I disabled them all.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
