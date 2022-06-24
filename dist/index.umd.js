(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('components/VideoConferencing'), require('components/Livestreaming'), require('components/Broadcasting')) :
    typeof define === 'function' && define.amd ? define(['components/VideoConferencing', 'components/Livestreaming', 'components/Broadcasting'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["bingewage-react-widgets"] = factory(global.VideoConferencing, global.Livestreaming, global.Broadcasting));
})(this, (function (VideoConferencing, Livestreaming, Broadcasting) { 'use strict';

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

    return index;

}));
