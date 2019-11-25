const render = (html) => {
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
  </body>
  </html>
  `);
};

module.exports = render;