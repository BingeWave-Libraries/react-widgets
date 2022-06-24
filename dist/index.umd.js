(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('VideoConferencing/'), require('Livestreaming/'), require('Broadcasting/'), require('react')) :
    typeof define === 'function' && define.amd ? define(['VideoConferencing/', 'Livestreaming/', 'Broadcasting/', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["bingewage-react-widgets"] = factory(global.VideoConferencing, global.Livestreaming, global.Broadcasting));
})(this, (function (VideoConferencing, Livestreaming, Broadcasting) { 'use strict';

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

    return index;

}));
