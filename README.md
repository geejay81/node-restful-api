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