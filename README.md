# B3k3n - web (service by SejutaCita)

## Overview

### The challenge

    Sejutacita is looking to expand its B3k3n service to web application.
    We invite you to help us designing and creating a working web application of B3k3n.

- We expose two API `Category API` and `Book API`
- It needs to be built using React.js
- It has to be responsive
- It has to support pagination
- A locally-stored bookmarking feature needs to be provided
- Search feature is required to help user easily find the books based on title or author(s)

### Build with

- React
- Typescript
- TailwindCSS
- React Router
- Jest & RTL

## API feedback

1. The API response need more additional data such as

- `status` (error or ok)
- `message`
- `total page` or `total count` of the books for Book API, so on the frontend side will get easier to handle pagination

2. The API should response with error when no query params sends when API call

3. `page` param should start from 1

```typescript
{
  status: 'ok' | 'error',
  message: 'Book found | Category found' | 'Error ...',

  // result for categories API
  categories: [],

  // result for book API
  books: {
    page: 1,
    data: [],
    total: 100
  }
}
```

<br />
<hr />
<br />

## How to run this project locally

_Make sure you already had NodeJS ver >= 14 installed_

### Clone repo

```bash
$ git clone https://github.com/gerasaka/b3k3n-web.git

# Move to project dir
$ cd b3k3n-web
```

### Install dependencies

_By default this project use `yarn` as package manager, but you can use another package manager like `npm`_

```bash
# yarn
$ yarn install

# npm
$ npm install
```

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn lint`

Check(lint) this codebase with `ESLint`

### `yarn format`

Format codebase with `Prettier`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
