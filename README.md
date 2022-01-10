# Tree
Tree is a simple web-client for adding nodes and connections between.

## Available Scripts - from Create React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run update`
Checks for dependency updates and installs them.

### `npm run deploy`
Creates a production build of the current state and deploys it to Firebase Hosting.

## Workflow
* When building something new, you create a branch named:
    * Hotfix/subject: for quick fixes, bugs and refactors
    * Feature/subject: for new any new features


* Create a PR of your branch to master
    * A build will be started using GitHub Actions to preview your changes on a temp environment


* When your branch is approved and merged into master an automatic build will start to deploy your changes to the production environment.