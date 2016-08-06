import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMW from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

const app = express();

app.use(webpackMW(webpack(webpackConfig)));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
/* eslint-disable */
app.listen(3000, () => console.log('App listen to localhost:3000'))
