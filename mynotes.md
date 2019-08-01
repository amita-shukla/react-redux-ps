npm install

---

- webpack has become the most popular bundler. Use webpack to compile javascript to single minified file that works in browser.
- webpack also includes a development web server.
- babel transpiles all javascript features down so that they run in all browsers. Also it is needed as it needs to transpile JSX (which is not valid js).
- babel can be configured via .bablerc file, here we are using package.json though.
- "babel-preset-react-app" tells babel to transpile JSX and modern JS features like object spread, class properties, dynamic imports, and more to run in today's browsers.

### complete dev env:

- transpile: Babel
- bundle: Webpack
- lint: eslint
- webserver: webpack
- generating index.html: webpack
- loading changes on save: webpack
- one command via npm scripts!

---

### four ways to create react component

- createClass component
  <code>var HelloWorld = React.createClass({...});</code>
- JS class component
  <code>class HelloWorld extends React.Component {...}</code>
- function component
  <code> function HelloWorld(props){return(...)}</code>
- arror function
  <code>const HelloWorld = (props) => ... </code>

---

### note

only class components support state, refs, lifecycle methods before 16.8 but after v16.8 functional components support these using hooks.

---

### container(or smart/stateful/controller view) vs presentation(or dumb/stateless/view) components

container components: you can call them the backend for the front end, typically stateful, concerned with passing data, typically created using Redux's connect function at the bottom of the file

presentation components just rely on props, no dependence on rest of the app, such as actions or stores. They don't specify how the data is loaded or mutated.

| container                  | presentation                       |
| -------------------------- | ---------------------------------- |
| little or no markup        | nearly all markup                  |
| pass data and actions down | receive data and actions via props |
| knows about redux          | doesn't know about redux           |
| often stateful             | often no state                     |

---
