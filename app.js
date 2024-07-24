const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

// Function to get the local IP address
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'IP address not found';
}

app.get('/', (req, res) => {
  const ipAddress = getLocalIpAddress();
  res.send(`Hello, vaheeD! This app is running on IP address: ${ipAddress}`);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
