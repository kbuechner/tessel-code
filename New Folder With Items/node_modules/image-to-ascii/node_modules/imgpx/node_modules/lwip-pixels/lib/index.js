"use strict";

const Pixel = require("pixel-class");

/**
 * getPixels
 * Builts a pixel matrix from the input `lwip` object.
 *
 * @name getPixels
 * @function
 * @param {lwip} image The `lwip` object.
 * @return {Array} An array of arrays of [`Pixel`](https://github.com/IonicaBizau/pixel-class) instances.
 */
module.exports = function getPixels (image) {

    let pixels = []
      , height = image.height()
      , width = image.width()
      , cRow = []
      ;

    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            cRow.push(new Pixel(image.getPixel(x, y)));
        }
        pixels.push(cRow);
        cRow = [];
    }

    return pixels;
};
