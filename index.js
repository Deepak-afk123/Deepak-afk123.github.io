const esp8266Ip = '192.168.29.79'; // Replace with your ESP8266 IP address

document.getElementById('onButton').addEventListener('click', function() {
    fetch(`${esp8266Ip}/led/on`)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});

document.getElementById('offButton').addEventListener('click', function() {
    fetch(`${esp8266Ip}/led/off`)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});
