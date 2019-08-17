function playSoundAPI(){
        const https = require('https');

        https.get('192.168.1.34:8002/playsound', (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                        data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                        console.log(JSON.parse(data).explanation);
                });

        }).on("error", (err) => {
                console.log("Error: " + err.message);
        });    
}
