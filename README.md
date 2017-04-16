### A sample app built using React & Flux
---
**Tech Stack & Versions**
- **Node** for server side js
- **Browserify** v11.0.1 - for module bundling
- **React** v0.13.3 - for components
- **React Router** v0.13.3 - for client-side routing
- **Flux** v2.0.3 - for unidirectional data flow
- **Gulp** v3.9.0 - for build tasks

Review `package.json` for additional dependencies & versions.

----
### How do I run this app?

- `git clone` to whatever directory you want & `cd` in to it
- then do an `npm install`
- and then `gulp` to run the app

Running `gulp` does the following things:
- Compiles React JSX to plain JS
- Lints JSX & JS using ESLint
- Bundles JS & CSS files using Browserify
- Migrates the app to the dist folder
- Runs a local dev server at port 9005
- Opens the app at that port with live reloading enabled

