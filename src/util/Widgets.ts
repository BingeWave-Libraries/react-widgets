import Config from "../constants/Config";
import useScript from "./useScript";

declare global {
    interface Window { BingewaveConnector: any; }
}

window.BingewaveConnector = window.BingewaveConnector || {};

const Widgets = {
    init : (auth_token :string | null ) => {

       window.BingewaveConnector.init({auth_token : auth_token});
    },
    loadWidgets : () => {
        window.BingewaveConnector.parseTags();
    },
    setAuthToken : (token : string | null) => {
        window.BingewaveConnector.setAuthToken(token);
    }
}

export default Widgets;