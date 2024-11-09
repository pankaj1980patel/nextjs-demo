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
## Folder Structure Overview
This project follows a structured folder organization to maintain clarity and scalability. Here's an overview of the key folders and their contents:

```public/```
Contains static files that are directly accessible by the browser.

```fonts/```: Stores custom fonts used in the project.
```icons/```: Contains icon assets used across the application.
```users/```: Stores user-specific data or images, such as avatars or other user-generated content.
```src/```
This is the main source directory where the application logic resides.

```app/```: Contains the main application code. This is where your pages, routing, and app-specific logic can be found.

```components/```: Includes reusable UI components and other smaller pieces of the interface which are globally needed.

    Sidebar/: Contains the sidebar component used in the app.
    ui/: Houses general UI components (buttons, modals, etc.) that can be used across various pages and features (Shadcn Components mostly).
    feature/: Organizes features into dedicated subfolders. Each feature can have its own set of components, services, and logic.

lib/: Includes utility libraries and functions that can be imported across the app, such as API clients, configuration files, and helper functions.

## Deployed on Vercel

Demo Link: [link](https://nextjs-demo-sage-one-87.vercel.app/)
