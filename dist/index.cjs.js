'use strict';

var VideoConferencing = require('VideoConferencing/');
var Livestreaming = require('Livestreaming/');
var Broadcasting = require('Broadcasting/');
require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var VideoConferencing__default = /*#__PURE__*/_interopDefaultLegacy(VideoConferencing);
var Livestreaming__default = /*#__PURE__*/_interopDefaultLegacy(Livestreaming);
var Broadcasting__default = /*#__PURE__*/_interopDefaultLegacy(Broadcasting);

var Widgets = {
  init: function init(auth_token) {
    window.BingewaveConnector.init({
      auth_token: auth_token
    });
  },
  loadWidgets: function loadWidgets() {
    window.BingewaveConnector.parseTags();
  },
  setAuthToken: function setAuthToken(token) {
    window.BingewaveConnector.setAuthToken(token);
  }
};

var index = {
  VideoConferencing: VideoConferencing__default["default"],
  Livestreaming: Livestreaming__default["default"],
  Broadcasting: Broadcasting__default["default"],
  Widgets: Widgets
};

module.exports = index;
