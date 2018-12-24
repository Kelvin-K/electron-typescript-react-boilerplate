# electron-typescript-react-boilerplate

A boilerplate project for electron using typescript, sass, react  jest, web pack and redux

## styles

All files under [./src/renderer/styles/components]() are directly included in the project. It is recommended that each component has its own style file


## Coding Standards

1. All file name should follow camel casing except for interface where first letter capitalized.
2. USe of snippets are recommended as these will automatically take care of classnames (see last section)

## Entry points

There is a entry section under src/renderer directory where all external dependencies should be handle one example of which is electron specific ipc calls. Which will help you to target multiple platforms. 

## Components

All the components should be included under src/renderer/components

## Resources

All the resource files will directly included into "dist" folder.

## webpack

There are two supported modes in webpack

1. Production
2. Development

Production mode will create electron application along with bundle_sizes.html.Where development mode will user webpack-dev-server to server files from memory

## snippets

include below snippets in vsCode for <B>typescript</B>

```json
"print log": {
		"prefix": "clog",
		"body": [
			"console.log($1);",
		]
	},
	"try catch": {
		"prefix": "tryc",
		"body": [
			"try",
			"{",
			"$1",
			"}",
			"catch(e) { }"
		]
	},
	"store Module": {
		"prefix": "reducer",
		"body": [
			"import { Reducer } from \"redux\";",
			"",
			"export class ${1:${TM_FILENAME_BASE/(.)/${1:/upcase}/}}State",
			"{",
			"",
			"}",
			"",
			"export type $1Action =",
			"\t{ type: \"XYZ\" }",
			"",
			"export const $1Reducer:Reducer<$1State,$1Action> = (state: $1State = new $1State(), action: $1Action) =>",
			"{",
			"\tswitch (action.type)",
			"\t{",
			"\t\tdefault:",
			"\t\treturn state;",
			"\t}",
			"}"
		]
	},
	"instance of class": {
		"prefix": "class",
		"body": [
			"class ${1:${TM_FILENAME_BASE/(.)/${1:/upcase}/}}",
			"{",
			"$2",
			"}",
			"",
			"export default $1;"
		],
	},
	"instance of interface": {
		"prefix": "interface",
		"body": [
			"interface ${1:${TM_FILENAME_BASE/(.)/${1:/upcase}/}}",
			"{",
			"$2",
			"}",
			"",
			"export default $1;"
		],
	},
	"instance of enum": {
		"prefix": "enum",
		"body": [
			"enum ${1:${TM_FILENAME_BASE/(.)/${1:/upcase}/}}",
			"{",
			"$2",
			"}",
			"",
			"export default $1;"
		],
	},
	"static readonly": {
		"prefix": "sr",
		"body": "static readonly $1 = \"$1\";"
	}
```

include below snippets in vsCode for <B>typescriptReact</B>

```json
"initialize Class": {
		"prefix": "init",
		"body": [
			"import * as React from 'react';",
			"",
			"export default class ${1:${TM_FILENAME_BASE/(.)/${1:/upcase}/}} extends React.Component",
			"{",
			"\trender()",
			"\t{",
			"\t\treturn (",
			"\t\t\t<div id=\"$1\">",
			"\t\t\t\t$2",
			"\t\t\t</div>",
			"\t\t);",
			"\t}",
			"}"
		]
	},
	"initizlize Redux Class": {
		"prefix": "initr",
		"body": [
			"import * as React from 'react';",
			"import { connect } from 'react-redux';",
			"import { bindActionCreators } from 'redux';",
			"import IAppState from '../interfaces/IAppState';",
			"",
			"interface StateProps",
			"{",
			"",
			"}",
			"",
			"interface DispatchProps",
			"{",
			"",
			"}",
			"",
			"export class ${1:${TM_FILENAME_BASE/(.)/${1:/upcase}/}} extends React.Component<StateProps & DispatchProps, any>",
			"{",
			"\trender()",
			"\t{",
			"\t\treturn (",
			"\t\t\t<div id=\"$1\">",
			"\t\t\t\t$2",
			"\t\t\t</div>",
			"\t\t);",
			"\t}",
			"}",
			"",
			"function connectStateToProps(state: IAppState): StateProps",
			"{",
			"\treturn {",
			"\t\t",
			"\t};",
			"}",
			"",
			"function connectDispatchToProps(dispatch: any): DispatchProps",
			"{",
			"\treturn bindActionCreators({",
			"\t\t",
			"\t}, dispatch);",
			"}",
			"",
			"export default connect(connectStateToProps, connectDispatchToProps)($1);"
		]
	},
	"print log": {
		"prefix": "clog",
		"body": [
			"console.log($1);",
		]
	},
	"try catch": {
		"prefix": "tryc",
		"body": [
			"try",
			"{",
			"$1",
			"}",
			"catch(e) { }"
		]
	}
```


With this below snippets are added for uniformity


init -> for state less component
initr -> for state component
reducer -> for creating reducer
clog -> for quick console logging
class -> for class creation
interface -> for interface creation
enum -> for enum creation
sr -> for static read only variables
