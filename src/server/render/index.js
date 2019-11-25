const render = (html, preloadedState) => {
  return (`
  <html lang="en">
  <head>
      <title>Point Of Sale</title>
      <script src="https://kit.fontawesome.com/473d269aa9.js"></script>
  </head>
  <body>
      <div id="app">${html}</div>
      <script src="assets/app.js" type="text/javascript"></script>
      <script src="assets/vendor.js" type="text/javascript"></script>
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
  </body>
  </html>
  `);
};

module.exports = render;