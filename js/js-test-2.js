// 31.01.2024
// Wihout changing the logic - change the structure of the code so that it respects the DRY principle:

// ctx.prototype.__applyStyleState = function (styleState) {
// var keys = Object.keys(styleState), i, key;
// for (i=0; i<keys.length; i++) {
// key = keys[i];
// this[key] = styleState[key];
// }
// };
// ctx.prototype.__setDefaultStyles = function () {
// var keys = Object.keys(STYLES), i, key; // keys of object - object selection
// for (i=0; i<keys.length; i++) {
// key = keys[i];
// this[key] = STYLES[key].canvas; // field selection
// }
// };
// ctx.prototype.__getStyleState = function () {
// var i, styleState = {}, keys = Object.keys(STYLES), key;
// for (i=0; i<keys.length; i++) {
// key = keys[i];
// styleState[key] = this[key];
// }
// return styleState;
// };

// Enjoy!

// ========== Improved code ==========
// function applyStyleState(styleState) {
//   const keys = Object.keys(styleState);
//   for (const key of keys) {
//     this[key] = styleState[key];
//   }
// }

// function setDefaultStyles(STYLES) {
//   const keys = Object.keys(STYLES);
//   for (const key of keys) {
//     this[key] = STYLES[key].canvas;
//   }
// }

// function getStyleState(STYLES) {
//   const styleState = {};
//   const keys = Object.keys(STYLES);
//   for (const key of keys) {
//     styleState[key] = this[key];
//   }
//   return styleState;
// }

// ========== Example of use (old school) ==========
// const MyContext = function ({ width, height, padding } = {}) {
//   this.width = width;
//   this.height = height;
//   this.padding = padding;
// };

// MyContext.prototype.__applyStyleState = applyStyleState;
// MyContext.prototype.__setDefaultStyles = setDefaultStyles;
// MyContext.prototype.__getStyleState = getStyleState;

// const ctx = new MyContext({
//   width: "50px",
//   height: "50px",
//   padding: "50px",
// });

// console.log(ctx);

// const styleState = { width: "25px", height: "25px", padding: "25px" };
// const STYLES = { width: "10px", height: "10px", padding: "10px" };

// ctx.__applyStyleState(styleState);
// // ctx.__setDefaultStyles(STYLES);
// console.log(ctx.__getStyleState(STYLES));

// ========== Example of use (syntax on classes) ==========
class MyContext {
  constructor({ width, height, padding } = {}) {
    this.width = width;
    this.height = height;
    this.padding = padding;
  }

  applyStyleState(styleState) {
    const keys = Object.keys(styleState);
    for (const key of keys) {
      this[key] = styleState[key];
    }
  }

  setDefaultStyles(STYLES) {
    const keys = Object.keys(STYLES);
    for (const key of keys) {
      this[key] = STYLES[key].canvas;
    }
  }

  getStyleState(STYLES) {
    const styleState = {};
    const keys = Object.keys(STYLES);
    for (const key of keys) {
      styleState[key] = this[key];
    }
    return styleState;
  }
}

const ctx = new MyContext({
  width: "50px",
  height: "50px",
  padding: "50px",
});

console.log(ctx);

const styleState = { width: "25px", height: "25px", padding: "25px" };
const STYLES = { width: "10px", height: "10px", padding: "10px" };

ctx.applyStyleState(styleState);
// ctx.setDefaultStyles(STYLES);
console.log(ctx.getStyleState(STYLES));
