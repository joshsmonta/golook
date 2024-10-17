import * as fs from 'fs';

// Define the interface for your data structure
interface JobData {
  "job position": string;
  company: string;
}

interface Data {
  list: JobData[];
}

// Read the JSON file
fs.readFile('../services/sample-data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Parse the JSON data
  const jsonData: Data = JSON.parse(data);
  console.log(jsonData);
});
