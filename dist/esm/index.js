import e,{useEffect as n}from"react";var t=function(e,t){n((function(){if(e&&!function(e){for(var n=document.getElementsByTagName("script"),t=0;t<n.length;t++)if(n[t].getAttribute("src")==e)return!0;return!1}(e)){var n=document.createElement("script");n.src=e,n.async=!0,t&&(n.id=t),document.body.appendChild(n)}}),[e,t])},i="https://connect.bingewave.com/connect.js",o="bw_connector";window.BingewaveConnector=window.BingewaveConnector||{};var r={init:function(e){window.BingewaveConnector.init({auth_token:e})},loadWidgets:function(){window.BingewaveConnector.parseTags()},setAuthToken:function(e){window.BingewaveConnector.setAuthToken(e)}},a=function(a){var c=a.id,d=a.auth_token;t(i,o);var u=e.createElement("bw:widget",{type:"webrtc",id:c});return n((function(){var e=document.getElementById(o);e&&e.addEventListener("load",(function(){r.init(d),r.loadWidgets()}))})),e.createElement(e.Fragment,null,u)},c=function(a,c){t(i,o);var d=e.createElement("bw:widget",{type:"stream",id:a});return n((function(){var e=document.getElementById(o);e&&e.addEventListener("load",(function(){r.init(c),r.loadWidgets()}))})),e.createElement(e.Fragment,null,d)},d=function(a,c){t(i,o);var d=e.createElement("bw:widget",{type:"broadcast",id:a});return n((function(){var e=document.getElementById(o);e&&e.addEventListener("load",(function(){r.init(c),r.loadWidgets()}))})),e.createElement(e.Fragment,null,d)};export{d as Broadcasting,c as Livestreaming,a as VideoConferencing,r as Widgets};
//# sourceMappingURL=index.js.map
