# Dbs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## About the project
This app is used to save the server load by not sending the data on every key press rather than sending one if you pause for 5 sec and after every 20 char data will be send to server.
1. The app should post data to API after 5 sec 
2. It should post data to API for 20,40,60 etc char lengths when user enters the chanracter in the input box.


