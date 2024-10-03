export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure

    if (success) {
      resolve('Response from API');
    } else {
      reject(new Error('Failed to fetch data from API'));
    }
  });
}
