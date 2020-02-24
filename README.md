# ExpressReactBasic

1. Inside new folder:

```js
npm init // to create package.json

/*
package name: (express)
version: (1.0.0)
description: Boilerplate for React and Express
entry point: (index.js) server.js
test command:
git repository:
keywords:
author: Alan
*/
```

2. Install dependencies:

```js
npm i express concurrently

npm i nodemon --save-dev
// run app and constanlty watches changes
```

3. Changes to package.json:

```js
    "start": "node server.js",
    "server": "nodemon server.js"
```

4. Create server.js  (backend DONE)


```js
// backend API

const express = require('express');

const app = express();


// route and json data
app.get('/api/boxers', (req, res) => {
  const boxers = [
    {id: 1, firstName: 'Anthony', lastName: 'Joshua'},
    {id: 2, firstName: 'Tyson', lastName: 'Fury'},
    {id: 3, firstName: 'Deontay', lastName: 'Wilder'},
  ];

  res.json(boxers);
});


// port configuration
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

// check server (in package.json -> "server": "nodemon server.js")
npm run server

// in browser
http://localhost:5000/api/boxers

// response

[
	{
		id: 1,
		firstName: "Anthony",
		lastName: "Joshua"
	},
	{
		id: 2,
		firstName: "Tyson",
		lastName: "Fury"
	},
	{
		id: 3,
		firstName: "Deontay",
		lastName: "Wilder"
	}
]
```

5. Open another terminal and run (for FRONTEND):

```js
create-react-app client

// creates react frontend client folder
```

6. open package.json inside client folder:

```js
add:

  "proxy": "http://localhost:5000"

// defining backend and URL as proxy
// when fetching no need for http

```

##### - create components to fetch and show data

7. run:
```js
npm start

// frontend is now loaded

-> npm run server

// backend loaded and data fetched
```


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

```js
// Install Express and any other dependencies
npm install

// Install dependencies for client
npm run client-install

// Run the client & server with concurrently
npm run dev

// Run the Express server only
npm run server

// Run the React client only
npm run client
```
