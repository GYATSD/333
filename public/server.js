const express = require('express');
const { exec } = require('child_process'); // For VM management via shell commands
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' folder

app.post('/vm/:action', (req, res) => {
    const action = req.params.action;

    if (action === 'start') {
        exec('your-vm-start-command', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return res.status(500).json({ error: 'Failed to start VM' });
            }
            res.json({ message: 'VM started successfully' });
        });
    } else if (action === 'stop') {
        exec('your-vm-stop-command', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return res.status(500).json({ error: 'Failed to stop VM' });
            }
            res.json({ message: 'VM stopped successfully' });
        });
    } else {
        res.status(400).json({ error: 'Invalid action' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
