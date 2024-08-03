const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/vm/:action', (req, res) => {
    const action = req.params.action;
    const validActions = ['start', 'stop'];

    if (!validActions.includes(action)) {
        return res.status(400).json({ error: 'Invalid action' });
    }

    const command = action === 'start' ? 'start-command.bat' : 'stop-command.bat';

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: 'Failed to execute command' });
        }
        res.json({ message: `VM ${action}d successfully` });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
