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
    The creation of a interface, when developing services with Angular it is a good idea to use classes and Interfaces to define the data structures. 
    And maybe thinking about the scalability of the application, for applications with lots of routes, consider lazy loading—a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.

* how do you feel about the libraries chosen, are there different ones you would use?
    I feel good with the chosen libraries. A different one that i would use, could be source-map-explorer. The source map explorer determines which file each byte in your minified code came from. It shows you an interactive tree-map visualization to help you debug where all the code is coming from.
    Or for example underscore.js, a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. 
    Or also Angular Zone, a zone is an execution context that persists across async tasks.

* what do you think about the structure of the application?
    The structure of the application is optimal for this application.
    But in case of thinking in a scalable application, the current structure could add a folder called shared, who contain all the components that are used by the entire application. Or the creation of a folder called service, to separate specific functionalities.In this case, the project clould follow the folders-by-feature structure from the Angular style guide. 

* could TypeScript be used more effectively? 
    Yes, here are 3 tips to use TypeScript effectively:
    - Use Strict Mode: It’s as simple as providing strict: true in the compiler option in tsconfig.json. It provides stronger guarantees about the types in the code.
    - Don’t Suppress Types: The most common way of suppressing types is through casting to the type any.
    - Use Generics: Generics are a key TypeScript feature that will increase the scalability of the code. Generic code involves using generic parameters such as filter<T>(param: T[]): T[] where T is a generic type that is passed into a function definition such as filter<User[]>(users) or filter<Post[]>(post)

Please provide a short summary on your thoughts.

