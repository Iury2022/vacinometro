import { fetchVaxineReadingData } from "./services/vaxine_reading_service";

const readings = fetchVaxineReadingData();

console.log(readings);