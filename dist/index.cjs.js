'use strict';

var VideoConferencing = require('components/VideoConferencing');
var Livestreaming = require('components/Livestreaming');
var Broadcasting = require('components/Broadcasting');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var VideoConferencing__default = /*#__PURE__*/_interopDefaultLegacy(VideoConferencing);
var Livestreaming__default = /*#__PURE__*/_interopDefaultLegacy(Livestreaming);
var Broadcasting__default = /*#__PURE__*/_interopDefaultLegacy(Broadcasting);

var returnLibrary = function returnLibrary() {
  return {
    VideoConferencing: VideoConferencing__default["default"],
    Broadcasting: Broadcasting__default["default"],
    Livestreaming: Livestreaming__default["default"] // you can add here other components that you want to export

  };
};

var index = returnLibrary();

module.exports = index;
