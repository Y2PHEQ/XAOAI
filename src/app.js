const axios = require('axios');
const dataurl = 'https://x.y2pheq.me';

async function fetchData(url, retries = 5) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Retry if the error status code is 500 or 429 and there are retries left
    if ((error.response.status === 500 || error.response.status === 429) && retries > 0) {
      console.log(`Error fetching data from ${url}: ${error.message}, retrying... (${retries} attempts remaining)`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
      return fetchData(url, retries - 1);
    } else {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error if it's not a retryable status code or we're out of retries
    }
  }
}

class Xaoai {
  constructor() {}

  async xviii(prompt, sid = 'default') {
    if (!prompt) {
      throw new Error('Missing argument: prompt parameter is required.');
    }

    try {
      const url = `${dataurl}/xaoai/xviii?prompt=${encodeURIComponent(prompt)}&sid=${sid}`;
      const data = await fetchData(url);
      return data;
    } catch (error) {
      console.error("Error generating response:", error);
      throw error; 
    }
  }
}

module.exports = Xaoai;