import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMW from 'webpack-dev-middleware';
import webpackHMW from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackMW(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true,
}));
app.use(webpackHMW(compiler));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
/* eslint-disable */
app.listen(3000, () => console.log('App listen to localhost:3000'))
