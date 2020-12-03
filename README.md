# Byju's Chat (React)

A React single page chat application (SPA) built with the following technologies:
- React with TypeScript (`create-react-app my-app --scripts-version=react-scripts-ts`)
- Redux
- Express.js with Socket.io
- styled-components (SASS)
- Jest/Enzyme/Sinon

### Running The App locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [npm](https://www.npmjs.com/).
3. From the project folder, execute the following commands:

To install dependencies:
```shell
  npm i
```
To run the client app:

```shell
  npm start
```
To run the server app:

```shell
  npm run server:watch
```
To run the tests:

```shell
  npm t
```
Browse to [http://localhost:3000](http://localhost:3000) and see the running app. In order to test, open it in two different computers,
 or computer and a phone, or two browsers on the same computer (one of it in incognito mode). 
 _If you are running it locally, make sure to change the __host__ variable in Socket.ts (line:28) and its value to match
 your local network address - the one of the computer you are running the server app._ 
 

### Deploy to Heroku 
_This step assumes you have already a Heroku account, installed heroku-cli and did login._

1. `npm build` to build the project to `build` folder.
2. Add `build` folder to be committed to Git
3. Make sure that express server loads static resources from it.
4. Commit all: `git commit -m 'Deploy to Heroky'`.
5. Run `git push heroku master`.
6. Open the app from the given URL