/// <reference types="react" />
declare const VideoConferencing: (id: string, auth_token: string | null) => JSX.Element;

declare const Livestreaming: (id: string, auth_token: string | null) => JSX.Element;

declare const Broadcasting: (id: string, auth_token: string | null) => JSX.Element;

declare global {
    interface Window {
        BingewaveConnector: any;
    }
}
declare const Widgets: {
    init: (auth_token: string | null) => void;
    loadWidgets: () => void;
    setAuthToken: (token: string | null) => void;
};

export { Broadcasting, Livestreaming, VideoConferencing, Widgets };
