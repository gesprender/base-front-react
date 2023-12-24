// Constants for URLs and Routes
const DEV_URL: string = 'http://localhost';
const DEV_PORT: string = '80';
const PROD_URL: string = 'https://app.gesprender.com';
const API_ENDPOINT: string = '/api/index.php';

// Determine mode (development or production)
const MODE: 'Dev' | 'Prod' = globalThis.location.host == 'app.gesprender.com' ? 'Prod' : 'Dev';

// Configure the base url according to the current mode and route
let localUrl: string;
if (MODE === 'Dev') {
  localUrl = `${DEV_URL}:${DEV_PORT}`;
} else {
  localUrl = PROD_URL;
}

// Export URLs configured
export const API_URL: string = localUrl + API_ENDPOINT;
export const BASE_URL: string = localUrl;