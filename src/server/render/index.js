const dotenv = require('dotenv');
const getManifest = require('../getManifest');

dotenv.config();
let files = {};

if (process.env.NODE_ENV === 'production') {
    files = getManifest();
    } else {
        files = {
            'main.css': 'assets/main.css',
            'main.js': 'assets/app.js',
            'vendors.js': 'assets/vendors.js',
    };
}

const render = (html, preloadedState) => {
  return (`
  <html lang="en">
  <head>
      <title>Point Of Sale</title>
      <script src="https://kit.fontawesome.com/473d269aa9.js"></script>
      <link rel="stylesheet" href="${files['main.css']}" type="text/css" />
  </head>
  <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="${files['main.js']}" type="text/javascript"></script>
      <script src="${files['vendors.js']}" type="text/javascript"></script>
  </body>
  </html>
  `);
};

module.exports = render;
