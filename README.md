# Node Restful API

An API built using NodeJS, Express and MongoDB

# Process
- Initialise Node app
```
npm init
```
- Install Express
```
npm install express --save
```
- Create index.js at application route
```
touch index.js
```
- Add GitHub origin
```
git remote add origin https://github.com/geejay81/node-restful-api.git
git push -u origin master
```
- Install nodemon to dev dependencies so that we don't have to keep restarting node index manually when we make a changed
```
npm install nodemon --save-dev
```
- Now we can run nodemon that will automatically restart when we make changes to the codebase
```
nodemon index
```
- Add a file to store the API routes
```
mkdir routes
touch routes/api.js
```
- Install body-parser middleware so that we can process body in requests
```
npm install body-parser --save
```
- Install Mongoose so that we can talk to MongoDb. Save to dependencies
```
npm install mongoose --save
```
- Add a schema to represent our model
```
mkdir models
touch models/dinosaur.js
```
- Setup to serve static files
``` js
// in index.js
// first in list of middleware
app.use(express.static('public));
// application will serve files in the public folder
```
- Make the public folder and add an index page, with styles.css
```
mkdir public
touch public/index.html
touch public/styles.css
touch public/main.js
```