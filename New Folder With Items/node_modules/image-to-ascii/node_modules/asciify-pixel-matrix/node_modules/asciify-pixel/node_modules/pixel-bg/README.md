
# pixel-bg [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/pixel-bg.svg)](https://www.npmjs.com/package/pixel-bg) [![Downloads](https://img.shields.io/npm/dt/pixel-bg.svg)](https://www.npmjs.com/package/pixel-bg) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Change the pixel background color.

## :cloud: Installation

```sh
$ npm i --save pixel-bg
```


## :clipboard: Example



```js
const pixelBg = require("pixel-bg");

console.log(pixelBg({
    r: 255
  , g: 0
  , b: 0
  , a: 1
}, {
    r: 0
  , g: 255
  , b: 0
}));
// PixelClass { r: 255, g: 0, b: 0, a: 1 }

console.log(pixelBg({
    r: 255
  , g: 0
  , b: 0
  , a: 0.5
}, {
    r: 0
  , g: 255
  , b: 0
}));
// PixelClass { r: 127.5, g: 127.5, b: 0, a: 1 }
```

## :memo: Documentation


### `pixelBg(pixel, bgColor)`
Change the pixel background color.

#### Params
- **Pixel** `pixel`: A [`Pixel`](https://github.com/IonicaBizau/pixel-class) instance.
- **Object** `bgColor`: An object containing the `r`, `g`, `b` values of the new background color.

#### Return
- **Pixel** The `Pixel` instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`asciify-pixel`](https://github.com/IonicaBizau/asciify-pixel#readme)—Asciifies a pixel object.
 - [`pixel-white-bg`](https://github.com/IonicaBizau/pixel-white-bg#readme)—Set white background color for a pixel.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
