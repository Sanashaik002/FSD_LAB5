const os = require('os');

function formatUptime() {
    const uptimeInSeconds = os.uptime();

    const days = Math.floor(uptimeInSeconds / (24 * 3600));
    const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}

function logUptime() {
    setInterval(() => {
        const uptime = formatUptime();
        console.log(`System Uptime: ${uptime}`);
    }, 5000);
}
logUptime(); 
