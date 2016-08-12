import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMW from 'webpack-dev-middleware';
import webpackHMW from 'webpack-hot-middleware';
import bodyParser from 'body-parser';

import webpackConfig from '../webpack.config.dev.js';

import users from './routes/users';

const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackMW(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true,
}));
app.use(webpackHMW(compiler));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


/* eslint-disable */
app.listen(3000, () => console.log('App listen to localhost:3000'))
