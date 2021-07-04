## Install & start

```bash
npm install
npm start
```

App will be running at http://localhost:4200/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code Test Instructions

### 1. Bug fix
A bug has been reported with our favourites feature, it seems like it's possible to add the same car multiple times. Looking at the code it seems a bit messy and unreliable. Can you refactor the code and get this feature working properly?

### 2. UX enhancement
Our product team want to add a UX enhancement on the home screen to sort the cars. 

* add a simple dropdown with a 'Sort by' label above the car list 
* it should contain 3 options 'Manufacturer name' (this sorts by manufacturer alphabetically, e.g. Aston Martin, Bugatti, Ferrari, etc), 'Lowest price', and 'Highest price' 
* when you load the page it should default to ordering by manufacturer name.

### 3. New feature
With lots of cars it's hard to compare them side-by-side to decide which one you want to add to your favourites. So product would like a new page, to do this. 

* add a new route and link in the navigation called "Compare Cars"

This new page should: 

* allow you to view up to 3 different cars side-by-side 
* show an image of the car and the different stats (price, top speed, etc) in a way that's easy to visually compare

Our designer is on holiday so you'll need to come up with the design yourself! 

### 4. Codebase thoughts
What are your thoughts on the codebase and how it could be improved? 

Things you might consider: 

* is there any technical debt you've spotted or things you think could be changed? 
* how do you feel about the libraries chosen, are there different ones you would use? 
* what do you think about the structure of the application? 
* could TypeScript be used more effectively? 

Please provide a short summary on your thoughts.

