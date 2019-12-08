import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../shared/App';
import {StaticRouter} from 'react-router-dom';
const app = express();

app.use(express.static("public"));



app.get('*', (req, res, next) => {
  console.log(req.url);
  const context = {};

  const markup = renderToString(
    <StaticRouter location={req.url} context={context} >
      <App />
    </StaticRouter>
  );
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>UyduSoft React SSR</title>
      <link rel="stylesheet" href="/css/main.css" />
    </head>
    <body>
      <div id="root">${markup}</div>
      <script src="index_bundle.js"></script>
    </body>
    </html>
  `);
  
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
})