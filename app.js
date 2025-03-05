const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Will Yeadon's website.");
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Retrying in 5 seconds...`);
        setTimeout(() => {
            server.close();
            server.listen(PORT);
        }, 5000);
    } else {
        console.error("Unexpected error:", err);
        process.exit(1);
    }
});