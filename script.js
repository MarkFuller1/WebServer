//Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', '192.168.1.39:/playsound', true);

request.onload = function () {
        var data = this.response;

        if(request.status >= 200 && request.status < 400) {
            console.log(data)
        } else {
            console.log('error: ' + request.status + ", " + request.responseURL);
        }
}

// Send request
request.send()
