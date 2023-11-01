# Weather App Documentation

## Introduction

The weather app allows the user to find the weather for a specific location using
the a city name and optionally a country name.
There will be a drop-down list of max 5 search results from which the user can choose their location.
Upon selecting the location, the app will request the current weather as well as a forecast for the next 5 days.

### Prerequisites

-   NodeJS
-   Angular CLI `npm i -g @angular/cli`

### Installation

Install the app and it's dependencies using `npm install`.

## Project Structure

/src/app contains all of the project files, below are the highlights from within the folder:

| File(s)         | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| /core           | Any classes that will be used application wide                                       |
| /mock-api       | Mock objects that are used in testing. The JSON files are from the API as reference. |
| /models         | All TS interfaces used in the application                                            |
| /modules        | Feature modules                                                                      |
| /modules/shared | Shared modules modules                                                               |
| /shared         | Shared Angular elements like components, pipes etc...                                |
| /state          | NgRX actions, reducers, effects, selectors - grouped per module                      |

## Styling

The project contains a style configuration file which can be found in `styles/_variables.scss`.

### Environment Variables

| Key    | Description                          |
| ------ | ------------------------------------ |
| apiUrl | Contains the base URL for the api    |
| apiKey | Contains the private key for the api |

## Development

Before commiting run:

-   `npm run precommit`. This will run linting on all files as well as prettier using the `prettier:write` command to automagically fix any issues.

You can run these separatley during development

-   `ng lint` and `prettier:check` to verify the changes are inline with the coding standard.

### Running the Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

### Code Style and Conventions

The project uses ESLint with a 'standard' configuration. See [overview of TS rules](https://eslint.org/docs/latest/rules/).

SCSS linting is done using [StyleLint](stylelint.io). See [overview of SCSS rules](https://stylelint.io/user-guide/rules).

## Building and Deployment

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Building for Production

ToDo: create automatic builds and deploys when pull requests get merged.

## Testing

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Third-Party Libraries

VS Code users:
it's recommended to use an extension for prettier and configure 'formatOnSave'.
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Known issues:

API keys are currently included in the public repository.
