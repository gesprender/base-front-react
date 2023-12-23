// Constants for URLs and Routes
const DEV_URL = 'http://localhost';
const DEV_PORT = '2024';
const PROD_URL = 'https://app.gesprender.com';
const API_ENDPOINT = '/api/index.php';

// Determine mode (development or production)
const MODE = globalThis.location.host == 'app.gesprender.com' ? 'Prod' : 'Dev';

// Configure the base url according to the current mode and route
let localUrl;
if (MODE === 'Dev') {
    localUrl = `${DEV_URL}:${DEV_PORT}`;
} else {
    localUrl = PROD_URL;
}

// Export URLs configured
export const API_URL = localUrl + API_ENDPOINT;
export const BASE_URL = localUrl;