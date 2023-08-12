const video = document.getElementById('main__video');
let keyState = {
  w: false,
  s: false,
  a: false,
  d: false
};

function init() {
  video.addEventListener('loadedmetadata', startWebVideo);
  video.src = 'CameraOutput.mp4'; // Replace 'CameraOutput.mp4' with the actual path to your video file
}

function startWebVideo() {
  video.play();
}

init();

document.addEventListener('keydown', (event) => {
  if (!keyState[event.key]) {
    keyState[event.key] = true;
    var key = event.key
    switch (key) {
      case 'w':
        console.log('Car moving forward');
        ///sendDataToPython(1);
        break;
      case 's':
        console.log('Car moving backward');
        ///sendDataToPython(2);
        break;
      case 'a':
        console.log('Car moving left');
        ///sendDataToPython(3);
        break;
      case 'd':
        console.log('Car moving right');
        ///sendDataToPython(4);
        break;
      case '1':
        console.log('Car turning left');
        ///sendDataToPython(6);
        break;
      case '2':
        console.log('Car turning right');
        ///sendDataToPython(5);
        break;
      case 'q':
        console.log('Car moving forward left');
        ///sendDataToPython(9);
        break;
      case 'e':
        console.log('Car moving forward right');
        ///sendDataToPython(10);
        break;
      case 'z':
        console.log('Car moving backward left');
        ///sendDataToPython(11);
        break;
      case 'c':
        console.log('Car moving backward right');
        ///sendDataToPython(12);
        break;
      default:
        console.log('Car is stopping');
        ///sendDataToPython(0);
        break;
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (keyState[event.key]) {
    keyState[event.key] = false;
    switch (event.key) {
      case 'w':
        console.log('Car stop');
        ///sendDataToPython(0);
        break;
      case 's':
        console.log('Car stop');
        ///sendDataToPython(0);
        break;
      case 'a':
        console.log('Car stop');
        ///sendDataToPython(0);
        break;
      case 'd':
        console.log('Car is stopping');
        ///sendDataToPython(0);
        break;
      case '1':
        console.log('Car is stopping');
        ///sendDataToPython(0);
        break;
      case '2':
        console.log('Car is stopping');
        ///sendDataToPython(0);
        break;
      case 'q':
        console.log('Car is stopping');
        ///sendDataToPython(0);
        break;
      case 'e':
        console.log('Car is stopping');
        ///sendDataToPython(0);
        break;
      case 'z':
        console.log('Car is stopping');
        ///sendDataToPython(0);
        break;
      case 'c':
        console.log('Car is stopping');
        ///sendDataToPython(0);
        break;
      default:
        break;
    }
  }
});

function sendDataToPython(data1) {
  const net = require('net');
  const client = new net.Socket();
  client.connect(11217, '6.tcp.eu.ngrok.io', () => {
    console.log('Connected to server'); 
  });
  client.on('data', (data) => {
    console.log('Received:', data.toString());
  });
  client.write(data1, 'utf-8', () => {
    console.log('Message sent to server');
  });
}

function sendDataToPython1(data) {
  fetch("https://d354-2a00-a041-2d20-ff00-e53c-da43-d3e3-dd9e.ngrok-free.app/",{  // Replace with the appropriate URL for your Python server
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // Convert the data to a JSON string
  })
    .then(response => {
      if (response.ok) {
        console.log('Data sent to Python');
      } else {
        console.error('Error sending data to Python');
      }
    })
    .catch(error => {
      console.error('Error sending data to Python', error);
    });
}
