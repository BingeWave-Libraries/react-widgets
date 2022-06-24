import React, { useEffect } from 'react';

import useScript from '../../util/useScript';
import Config from '../../constants/Config';
import Widgets from '../../util/Widgets';

const VideoConferencing = (id : string, auth_token : string | null) => {

    useScript(Config.connector_script, Config.connector_script_id);

    const widget = React.createElement('bw:widget', { type: 'webrtc', id: id })

    useEffect(() => {

        let script = document.getElementById(Config.connector_script_id) as HTMLElement | null;

        if(script){

            script.addEventListener('load', () => {

                //Ensure the conector has been loaded
                Widgets.init(auth_token);

                //Reload the widgets if it hasn't be done already
                Widgets.loadWidgets();
            })
        }

    })

    return (
        <>
            {widget}
        </>
    )
}

export default VideoConferencing;