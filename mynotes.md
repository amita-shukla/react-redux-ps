npm install

========================

- webpack has become the most popular bundler. Use webpack to compile javascript to single minified file that works in browser.
- webpack also includes a development web server.
- babel transpiles all javascript features down so that they run in all browsers. Also it is needed as it needs to transpile JSX (which is not valid js).
- babel can be configured via .bablerc file, here we are using package.json though.
- "babel-preset-react-app" tells babel to transpile JSX and modern JS features like object spread, class properties, dynamic imports, and more to run in today's browsers.
