const os = require('os');

function getMemoryInfo() {
    
    const totalMemory = os.totalmem(); 
    const freeMemory = os.freemem();  
    const usedMemory = totalMemory - freeMemory;
   
    const freeMemoryPercentage = (freeMemory / totalMemory) * 100;

    return {
        totalMemoryMB: totalMemory / (1024 ** 2),
        usedMemoryMB: usedMemory / (1024 ** 2),
        freeMemoryMB: freeMemory / (1024 ** 2),
         freeMemoryPercentage:freeMemoryPercentage
    };
}

function displayMemoryUsage() {
    setInterval(() => {
        const { totalMemoryMB, usedMemoryMB, freeMemoryMB, freeMemoryPercentage } = getMemoryInfo();
        
        console.log(`Total Memory: ${totalMemoryMB.toFixed(2)} MB`);
        console.log(`Used Memory: ${usedMemoryMB.toFixed(2)} MB`);
        console.log(`Free Memory: ${freeMemoryMB.toFixed(2)} MB`);
        console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%`);
        console.log("-".repeat(40));                      
    }, 5000); 
}

displayMemoryUsage();
