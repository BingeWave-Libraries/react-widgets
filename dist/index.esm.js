import VideoConferencing from 'VideoConferencing/';
import Livestreaming from 'Livestreaming/';
import Broadcasting from 'Broadcasting/';
import 'react';

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
  VideoConferencing: VideoConferencing,
  Livestreaming: Livestreaming,
  Broadcasting: Broadcasting,
  Widgets: Widgets
};

export { index as default };
