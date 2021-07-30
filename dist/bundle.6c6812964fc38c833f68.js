/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/templates.js
function getTemplate(_ref) {
  var imageInput = _ref.imageInput,
      urlInput = _ref.urlInput,
      animationDirection = _ref.animationDirection;
  return "\n            <a href=\"".concat(urlInput, "\" class=\"").concat(animationDirection, "\">\n                <img src=\"").concat(URL.createObjectURL(imageInput), "\" alt=\"inserted image\" disabled class=\"inserted-image\" id=\"insertedImage\" data-scale=\"1\"/>\n            </a>\n    ");
}
;// CONCATENATED MODULE: ./src/js/mainView.js
function inserNewTemplate(elTemplate, imageContainer) {
  imageContainer.innerHTML = null;
  imageContainer.insertAdjacentHTML('afterbegin', elTemplate);
}

function changeImageScale(e) {
  e.preventDefault();
  var scale = +this.dataset.scale;

  if (e.deltaY > 0) {
    scale -= 0.1;
  } else if (e.deltaY < 0) {
    scale += 0.1;
  }

  this.style.transform = "scale(".concat(scale, ")");
  this.dataset.scale = scale;
}


;// CONCATENATED MODULE: ./src/js/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




initFormListeners();

function initFormListeners() {
  var mainForm = document.getElementById('mainForm');
  mainForm.addEventListener('submit', showImageLink);
}

function showImageLink(e) {
  e.preventDefault();
  var formDataObj = prepareFormData(this);
  var elTemplate = getTemplate(formDataObj);
  var imageContainer = document.getElementById('imageContainer');
  inserNewTemplate(elTemplate, imageContainer);
  e.target.reset();
  initImageListener();
}

function prepareFormData(eventForm) {
  var formData = new FormData(eventForm);
  var formDataObj = {};

  var _iterator = _createForOfIteratorHelper(formData.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      formDataObj[key] = value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return formDataObj;
}

function initImageListener() {
  var insertedImage = document.getElementById('insertedImage');
  insertedImage.addEventListener('wheel', changeImageScale);
}
/******/ })()
;