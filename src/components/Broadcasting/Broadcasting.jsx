import React, { useEffect } from 'react';

import useScript from '../../util/useScript';
import Config from '../../constants/Config';
import Widgets from '../../util/Widgets';

const Broadcasting = (props) => {

    useScript(Config.connector_script, Config.connector_script_id);

    const widget = React.createElement('bw:widget', { type: 'broadcast', id: props.id })

    useEffect(() => {

        document.getElementById(Config.connector_script_id).addEventListener('load', () => {

            //Set an auth token, if set
            let init = {};

            if (props.auth_token) {
                init['auth_token'] = props.auth_token;
            }

            //Ensure the conector has been loaded
            Widgets.init(init);

            //Reload the widgets if it hasn't be done already
            Widgets.loadWidgets();
        })

    }, [props])

    return (
        <>
            {widget}
        </>
    )
}

export default Broadcasting;