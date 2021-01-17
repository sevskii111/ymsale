const debug = process.env.NODE_ENV !== "production";

module.exports = {
  //assetPrefix: '',
  assetPrefix: !debug ? "/ymsale/" : "",
};
