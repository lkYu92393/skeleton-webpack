# skeleton-webpack

Serve as skeleton for webpack, using the following webpack components:
- webpack
- webpack-cli
- copy-webpack-plugin
- html-webpack-plugin

Webpack and webpack-cli is core of webpack. On top of it there are different plugins for different tasks.

copy-webpack-plugin allows configs for copying file to the `dist` folder. It is setup in the webpack.config.js. It allows config for from and to destination.

html-webpack-plugin allows configuration of template, template location, title of the website. This allows the template to be like a template instead of having fixed value in the html file.
