## Objective

Using TypeScript, [NextJS](https://nextjs.org/docs/getting-started) and [Prisma](https://www.prisma.io/docs/getting-started/quickstart) your assignment is to implement a very simple TODO app, because as we all know: the world always needs more TODO apps.

## How to get started

1. Clone the repository
2. `yarn install` (...or the equivalent `npm` or `pnpm`, just change the scripts section in `package.json` to use your preferred pkg manager.)
3. `yarn prisma db push` followed by `yarn prisma db seed` - these are only needed for step 2 and further.

## Tasks

There are 4 sections to this assignment, with number 4 being optional. Commit your work as you would normally, but keep each section in a separate branch until it's done, open a pull request and merge it into the main branch before continuing with the next section (don't delete the merged branch).

1. Create a basic form that stores TODO entries either in memory or something like localStorage

    - The stored data should be in the form of the types defined in `types.d.ts`.
    - The form should have a `select` element to switch between user TODOs. So, selecting `Travis` from the dropdown should show all TODOs beloning to Travis. You can hardcode the data at this stage.
    - Do not worry about what the form or inputs look like. You are free to use any library (e.g. MUI, Tailwind etc.) **if you want to**.

2. Now, update `prisma/schema.prisma` by adding a `Todo` model and link it to the existing `User` model with a [one-to-many](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-many-relations) relationship. Remember to run `prisma db push` after any changes to the schema.

3. Use the database via the API endpoints in `pages/api`.

    - Implement `pages/api/todos/create.ts` and `pages/api/todos/list.ts`. Tip: import the prisma client from `prisma/client.ts`
    - In the form, fetch the initial data from the database with a `GET` request to `/api/todos/list`. Also use this to populate the user `select` element.
    - When adding a new item to a user's TODOs, save it in the database by sending a `POST` to `/api/todos/create`

4. **[OPTIONAL]** Implement end to end UI tests using Playwright or Cypress
    - You don't need to implement 100% coverage. Simple tests that cover any major feature should do.

## Evaluation Criteria

-   **TypeScript** best practices
-   Show us your work through your commit history
-   We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program
-   Completeness: did you complete the features?
-   Correctness: does the functionality act in sensible, thought-out ways?

## Deliverables

Make sure to include all source code in the repository.

## Code Submit

Please organize, design, test and document your code as if it were going into production - and make sure the code you wish to submit is in the `main` branch and that all section branches are also pushed. Explain important design decisions using comments.

All the best and happy coding,

The GVNG Team
