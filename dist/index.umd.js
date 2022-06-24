(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('components/VideoConferencing'), require('components/Livestreaming'), require('components/Broadcasting'), require('util/Widgets')) :
	typeof define === 'function' && define.amd ? define(['components/VideoConferencing', 'components/Livestreaming', 'components/Broadcasting', 'util/Widgets'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["bingewage-react-widgets"] = factory(global.VideoConferencing, global.Livestreaming, global.Broadcasting, global.Widgets));
})(this, (function (VideoConferencing, Livestreaming, Broadcasting, Widgets) { 'use strict';

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

	return index;

}));
