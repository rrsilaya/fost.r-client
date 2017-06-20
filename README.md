# fost.r ![octal](https://img.shields.io/badge/Batch_o%28ctal%29-fost.r-blue.svg?style=flat-square?colorA=000000)
![status](https://img.shields.io/badge/status-development-yellow.svg)
![yarn](https://img.shields.io/badge/yarn-v0.24.5-green.svg)
![react](https://img.shields.io/badge/react-v15.5.4-green.svg)

fost.r aims to raise awareness about the animals that are not able to have a home because of neglect or abuse. It will also serve people who needs to have companion or friend.

### Installing
1. Have the latest version of [yarn](http://www.yarnpkg.com/).
2. Install all the dependencies using `yarn install`.
3. Start the react app with `yarn start`.

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

### App Routes
| Route        | Page         | Remarks                |
| -------------| ------------ | ---------------------- |
| `/`          | home         | Redirects to `/adopt` if logged in |
| `/login`     | login        | Redirects to `/adopt` if logged in |
| `/adopt`     | adopt        |                        |
| `/community` | community    |                        |
| `/dates`     | dates        |                        |
| `/rescue`    | rescue       |                        |
| `/*`         | no-page      | Error 404 Page, redirects to `/` if not logged in |

### Developers
##### Backend
* Evangelista, Erlen Mae
* Sombaes, Kia Mei

##### Frontend
* Gotis, Ciara Mae
* Silaya, Ralph Lawrence
