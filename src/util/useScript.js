import { useEffect } from 'react';

function isScriptAlreadyIncluded(src) {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++)
        if (scripts[i].getAttribute('src') == src) return true;
    return false;
}

const useScript = (url, id) => {
    let callback = useEffect(() => {

        if (!isScriptAlreadyIncluded(url)){
            console.log("Loading");
            const script = document.createElement('script');

            script.src = url;
            script.async = true;

            if(id) {
                script.id = id;
            }

            document.body.appendChild(script);

            return () => {
                console.log("Removing");
                document.body.removeChild(script);
            }
        }
    }, [url]);

    return callback;

};

export default useScript;