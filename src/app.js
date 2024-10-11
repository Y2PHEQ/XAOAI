const axios = require('axios');
const dataurl = 'https://x.y2pheq.me';

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      const error = new Error(`HTTP error! status: ${response.status}`);
      error.response = response;  // Preserve the response object
      throw error;
    }
  } catch (error) {
    console.error("Error fetching data:", error.message); // Log the error message
      if (error.response) {
        console.error("Response Status:", error.response.status);
        console.error("Response Data (if any):", error.response.data);
      }
      throw error; // Re-throw for handling outside this function
  }
}


class Xaoai {
  constructor() {}

  async xviii(prompt, sid = 'default') {
    if (!prompt) {
      const error = new Error('Missing argument: prompt parameter is required.');
      console.error(error.message);
      throw error;
    }

    try {
      const url = `${dataurl}/xaoai/xviii?prompt=${encodeURIComponent(prompt)}&sid=${sid}`;
      const data = await fetchData(url);
      return data;
    } catch (error) {
      console.error("Error generating response:", error.message);
      if (error.response) {
        // Log detailed response information for debugging.
        console.error("Response Status:", error.response.status);
        console.error("Response Data (if any):", error.response.data);
      }
      throw error;
    }
  }
}

module.exports = Xaoai;