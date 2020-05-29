const env = process.env.NODE_ENV || 'Dev';

let config = require(`../configs/${env}/config.json`);
if (env === 'Dev') {
  try {
    const localConfig = require('../configs/local.config.json');
    config = { ...config, ...localConfig };
  } catch (err) {
    console.log("Unable to find local config, exporting default config");
  }
};

module.exports = config;