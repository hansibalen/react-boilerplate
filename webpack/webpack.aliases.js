const { createWebpackAliases } = require('./webpack.helpers');

/** Export Webpack Aliases; Update `tsconfig.json` file
 *  also to match the `paths` used for aliases in project. */
module.exports = createWebpackAliases({
  '@assets': 'assets',
  '@src': 'src',
});
