const axios = require('axios');
const dataURL = 'https://api.y2pheq.me';

async function fetchData(url) {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
}

class XaoaiData {
  async xviii(prompt, sid = 'default') {
    if (!prompt) throw new Error('Missing prompt.');
    try {
      const data = await fetchData(`${dataURL}/xaoai?prompt=${encodeURIComponent(prompt)}&uid=${sid}`);
      return data.result;
    } catch (error) {
      return 'API limit reached.';
    }
  }

  async lyrics(query) {
    if (!query) throw new Error('Missing query.');
    try {
      const data = await fetchData(`${dataURL}/xaoai/lyrics?song=${encodeURIComponent(query)}`);
      let { title, artist, lyrics } = data;
      return `${title}\n${artist}\n\n${lyrics}`;
    } catch (error) {
      return error.message;
    }
  }
}

const Xaoai = XaoaiData;

module.exports = Xaoai;