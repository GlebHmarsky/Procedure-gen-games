import path from 'path';

import common from './webpack.common.js';
import { merge } from 'webpack-merge';
import { fileURLToPath } from 'url';

/*
 * __dirname is no more in es6, this is a legal workaround
 * https://nodejs.org/api/esm.html#esm_no_filename_or_dirname
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(common, {
  /* Enable source maps for bundled files */
  devtool: 'inline-source-map',
  /* Optimize */
  mode: 'production',

  /* where to save bundled files and what names to give */
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'images/[hash].[name][ext]',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    /* empty build dir before next build */
    clean: true,
  },
});
