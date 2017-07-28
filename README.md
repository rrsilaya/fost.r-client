<h1 align="center">
	<img alt="fost.r" src="./src/assets/images/logo2-dblue.png" height="256px" />
	<br />
	fost.r Client
	<br />
	<img src="https://img.shields.io/badge/status-development-yellow.svg" />
	<img src="https://img.shields.io/badge/node-v7.8.0-green.svg" />
	<img src="https://img.shields.io/badge/react-v15.5.4-green.svg" />
	<br />
</h1>
<h4 align="center">Raise awareness on homeless animals because of neglect or abuse</h4>

### Installation
1. Have the latest version of [yarn](http://www.yarnpkg.com/).
2. Clone this repository.
3. Install all the dependencies using `yarn install`.
4. Run the [API server](https://github.com/rrsilaya/fost.r-backend).
5. Start the react app with `yarn start`.

It is assumed that you are using [yarn](http://www.yarnpkg.com/) as your package manager. To use [npm](https://www.npmjs.com/), do:
```
$ npm install && npm start
```

### Project Structure
```
.
├── node_modules
├── public
│   ├── index.html
│   └── manifest.json
├── src
│   ├── app
│   │   ├── components                  # global components
│   │   │   ├── Main.js                 # main component, handles rendering of pages
│   │   │   └── Navigation.js           # navigation bar
│   │   ├── ducks                       # folder for all ducks*
│   │   │   └── auth.js
│   │   ├── pages                       # 'page' components of app
│   │   │   ├── page1
│   │   │   │   ├── <PageContainer>.js  # container component of page
│   │   │   │   └── <Page>.js           # presentational component of page
│   │   │   ├── AnonUser.js             # handles routes for unauthenticated users
│   │   │   └── LoggedIn.js             # handles routes for logged in users
│   │   ├── AppContainer.js
│   │   ├── App.js
│   │   └── store.js                    # redux store, handles app state
│   ├── assets
│   │   ├── css                         # folder for the app's stylesheets
│   │   │   ├── <componentStyle>.css    # specific component stylesheet
│   │   │   ├── index.css               # global stylesheet
│   │   │   └── uikit.min.css           # framework stylesheet
│   │   ├── fonts
│   │   │   ├── <font>.eot
│   │   │   ├── <font>.svg
│   │   │   ├── <font>.ttf
│   │   │   └── <font>.woff
│   │   └── images
│   │       └── section-background.svg  # framework image dependency
│   └── index.js
├── package.json
├── README.md
└── yarn.lock
```

### Developers
##### API
* Evangelista, Erlen Mae
* Sombaes, Kia Mei

##### Client
* Gotis, Ciara Mae
* Silaya, Ralph Lawrence
