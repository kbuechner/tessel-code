
# lwip-pixels [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/lwip-pixels.svg)](https://www.npmjs.com/package/lwip-pixels) [![Downloads](https://img.shields.io/npm/dt/lwip-pixels.svg)](https://www.npmjs.com/package/lwip-pixels) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get a matrix of pixels from a lwip image object.

## :cloud: Installation

```sh
$ npm i --save lwip-pixels
```


## :clipboard: Example



```js
const lwipPixels = require("lwip-pixels")
    , lwip = require("lwip")
    ;

lwip.open(`${__dirname}/octocat.png`, (err, img) => {
    console.log(lwipPixels(img));
    // [ [ PixelClass { r: 0, g: 0, b: 0, a: 0 },
    //     PixelClass { r: 0, g: 0, b: 0, a: 0 },
    //     PixelClass { r: 0, g: 0, b: 0, a: 0 },
    //     ...
    //     PixelClass { r: 0, g: 0, b: 0, a: 0 } ],
    //   [ PixelClass { r: 0, g: 0, b: 0, a: 0 },
    //     ...
    //     PixelClass { r: 0, g: 0, b: 0, a: 0.14 },
    //     ...
    //     PixelClass { r: 0, g: 0, b: 0, a: 0 } ],
    //   ... ]
});
```

## :memo: Documentation


### `getPixels(image)`
Builts a pixel matrix from the input `lwip` object.

#### Params
- **lwip** `image`: The `lwip` object.

#### Return
- **Array** An array of arrays of [`Pixel`](https://github.com/IonicaBizau/pixel-class) instances.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`imgpx`](https://github.com/IonicaBizau/imgpx#readme)—Get a matrix of pixels of a given image.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
