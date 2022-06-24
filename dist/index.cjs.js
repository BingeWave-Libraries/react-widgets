'use strict';

var VideoConferencing = require('components/VideoConferencing');
var Livestreaming = require('components/Livestreaming');
var Broadcasting = require('components/Broadcasting');
var Widgets = require('util/Widgets');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var VideoConferencing__default = /*#__PURE__*/_interopDefaultLegacy(VideoConferencing);
var Livestreaming__default = /*#__PURE__*/_interopDefaultLegacy(Livestreaming);
var Broadcasting__default = /*#__PURE__*/_interopDefaultLegacy(Broadcasting);
var Widgets__default = /*#__PURE__*/_interopDefaultLegacy(Widgets);

var index = {
  VideoConferencing: VideoConferencing__default["default"],
  Livestreaming: Livestreaming__default["default"],
  Broadcasting: Broadcasting__default["default"],
  Widgets: Widgets__default["default"]
};

module.exports = index;
