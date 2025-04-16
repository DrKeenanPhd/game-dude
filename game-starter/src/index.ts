import { activity_agent } from './agent';
import http from 'http';

// Create a simple HTTP server for health checks
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Game Agent is running');
});

// Use the PORT environment variable provided by Render or default to 3000
const PORT = process.env.PORT || 3000;

async function main() {
    try {
        // Initialize the agent
        await activity_agent.init();
        
        // Start the HTTP server
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        
        // Run the agent
        while (true) {
            await activity_agent.step({ verbose: true });
            // Add a small delay to prevent CPU overuse
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } catch (error) {
        console.error("Error running activity recommender:", error);
    }
}

main(); 