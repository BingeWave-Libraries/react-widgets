import Config from "../constants/Config";
import useScript from "./useScript";


const Widgets = {
    init : (auth_token) => {

       window.BingewaveConnector.init({auth_token : auth_token});
    },
    loadWidgets : () => {
        window.BingewaveConnector.parseTags();
    },
    setAuthToken : (token) => {
        window.BingewaveConnector.setAuthToken(token);
    }
}

export default Widgets;