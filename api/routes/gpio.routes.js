'use strict';
module.exports = function(app) {
  var gpioCtrl = require('../controllers/gpio.controller');

  // gpio Routes
  app.route('/gpio')
    .get(gpioCtrl.gpio_readall);

  app.route('/gpio/:pinId')
    .get(gpioCtrl.gpio_read);
};