# electron-typescript-react-boilerplate

A boilerplate project for electron using typescript, sass, react, jest, spectron, web pack and redux

## Usage

- <font color="dodgerblue">npm run build</font> => build the script
- <font color="dodgerblue">npm run start</font> => start electron app
- <font color="dodgerblue">npm run restart</font> => build and start electron app
- <font color="dodgerblue">npm run dev</font> => build development version of application and run in web with auto reload
- <font color="dodgerblue">npm run test</font> => test application
- <font color="dodgerblue">npm run pack</font> => pack application using electron-packager
- <font color="dodgerblue">npm run distribute</font> => install node modules, build electron project and pack application

## Styles

All files under ./src/renderer/styles/components are directly included in the project. It is recommended that each component has its own style file


## Coding Standards

1. All file name should follow camel casing except for interface where first letter capitalized.
2. USe of snippets are recommended as these will automatically take care of classnames (see last section)

## Entry points

There is a entry section under src/renderer directory where all external dependencies should be handle one example of which is electron specific ipc calls. Which will help you to target multiple platforms. 

## Components

All the components should be included under src/renderer/components

## Resources

All the resource files will directly included into "build" folder.

## webpack

There are two supported modes in webpack

1. Production
2. Development

Production mode will create electron application along with bundle_sizes.html.Where development mode will user webpack-dev-server to server files from memory

## snippets

With this below snippets are added for uniformity

- init -> for state less component
- initr -> for state component
- reducer -> for creating reducer
- clog -> for quick console logging
- class -> for class creation
- interface -> for interface creation
- enum -> for enum creation
- sr -> for static read only variables
