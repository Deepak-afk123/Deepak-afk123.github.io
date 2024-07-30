document.getElementById('onButton').addEventListener('click', function() {
    fetch('http://<YOUR_ESP8266_IP>/led/on')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});

document.getElementById('offButton').addEventListener('click', function() {
    fetch('http://<YOUR_ESP8266_IP>/led/off')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});
