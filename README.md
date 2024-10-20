# DocExchange.io

DocExchange.io is a student-powered study platform built with Next.js and Firebase. We aim to provide students with a platform where they can share their work and be rewarded as well as access all the best study materials from their peers.

## Try it out

DocExchange.io is live at <https://staging.docexchange.io>, but you can also run all the code locally by following the steps below.

### Prerequisites

Make sure you have installed:

-   [pnpm](https://pnpm.io/installation)
-   [Node.js](https://nodejs.org/en/download)

### Firebase Emulator

-   Create a [Firebase project](https://console.firebase.google.com)
-   Install the Firebase CLI: `pnpm install -g firebase-tools`
-   Login to Firebase: `firebase login`
-   Set the project: `firebase use <your project ID>`
-   Navigate to the functions directory: `cd firebase/functions`
-   Install the dependencies: `pnpm install`
-   Build the functions: `pnpm run build`
-   Run the emulator: `cd .. && pnpm run emulator`

### Web App

-   Navigate back to the root directory: `cd ..`
-   Add a web app to your Firebase project under "Project Overview"
-   Install the dependencies: `pnpm install`
-   Create an `.env.local` file with the following environment variables from you Firebase app:

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

-   Start the development server: `pnpm run dev`
-   Visit: <http://localhost:3000>

## Contributing

Feel free to submit bugs and feature requests by creating an [issue](https://github.com/norkang-solutions/docexchange/issues) or contribute code with [pull requests](https://github.com/norkang-solutions/docexchange/pulls). Please follow the guidelines and best practices in the provided templates.

## License

Copyright (C) 2024-present Norkang Solutions AS

DocExchange.io is free and open-source software available under the GNU Affero General Public License version 3 or any later version ([AGPL-3.0-or-later](https://www.gnu.org/licenses/agpl-3.0.html)).
