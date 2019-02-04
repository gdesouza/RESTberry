'use strict';

// include rpi GPIO
var gpio = require('rpi-gpio');

var pins = {
    physical: [
        { name: "Physical Pin 1", state: "fixed", mode: "3.3V" },
        { name: "Physical Pin 2", state: "fixed", mode: "5V" },
        { name: "Physical Pin 3", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 4", state: "fixed", mode: "5V" },
        { name: "Physical Pin 5", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 6", state: "fixed", mode: "ground" },
        { name: "Physical Pin 7", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 8", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 9", state: "fixed", mode: "ground" },
        { name: "Physical Pin 10", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 11", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 12", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 13", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 14", state: "fixed", mode: "ground" },
        { name: "Physical Pin 15", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 16", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 17", state: "fixed", mode: "3.3V" },
        { name: "Physical Pin 18", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 19", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 20", state: "fixed", mode: "ground" },
        { name: "Physical Pin 21", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 22", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 23", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 24", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 25", state: "fixed", mode: "ground" },
        { name: "Physical Pin 26", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 27", state: "fixed", mode: "id_sd" },
        { name: "Physical Pin 28", state: "fixed", mode: "id_sc" },
        { name: "Physical Pin 29", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 30", state: "fixed", mode: "ground" },
        { name: "Physical Pin 31", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 32", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 33", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 34", state: "fixed", mode: "ground" },
        { name: "Physical Pin 35", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 36", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 37", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 38", state: "unknown", mode: "uninitialized" },
        { name: "Physical Pin 39", state: "fixed", mode: "ground" },
        { name: "Physical Pin 40", state: "unknown", mode: "uninitialized" }
    ],
    gpio: [
        { name: "GPIO 1", state: "invalid", mode: "uninitialized" },
        { name: "GPIO 2", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 3", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 4", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 5", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 6", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 7", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 8", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 9", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 10", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 11", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 12", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 13", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 14", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 15", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 16", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 17", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 18", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 19", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 20", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 21", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 22", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 23", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 24", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 25", state: "unknown", mode: "uninitialized" },
        { name: "GPIO 26", state: "unknown", mode: "uninitialized" },
    ]
}

/**
 * method: gpio_readall
 * Read states of all GPIO pins
 */
exports.gpio_readall = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
 * method: gpio_read
 * Read state of a specific pin
 */
exports.gpio_read = function(req, res) {
    read(req.params.pinId, function(err, state) {
        if (err) {
            res.send(err);
        }
        res.json(state);
    });
};

