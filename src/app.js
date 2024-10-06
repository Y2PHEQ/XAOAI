var x, dataURL, get, xaoai, title, artist, lyrics, output;
(function () {
  async function g(url) {
    try {
      const response = await x(url);
      return response.data;
    } catch (e) {
      return e.message;
    }
  }
  class xaoaiData {
    constructor() {}
    async xviii(prompt, sid) {
      if (!prompt) {
        throw new Error('Missing arguments: Query parameter required.');
      }
      try {
        const data = await g(
          '' + dataURL + '/xaoai/xviii?prompt=' + prompt + '&sid=' + sid + '',
        );
        return data.result;
      } catch (error) {
        return 'Error: API Key reached the limit.'
      }
    }
    async lyrics(query) {
      if (!query) {
        throw new Error('Missing arguments: Query parameter required.');
      }
      try {
        const data = await g('' + dataURL + '/xaoai/lyrics?song=' + query + '');
        title = data.title;
        artist = data.artist;
        lyrics = data.lyrics;
        output = `${title}\n${artist}\n\n${lyrics}`;
        return output;
      } catch (error) {
        return error.message;
      }
    }
  }
  get = g;
  xaoai = xaoaiData;
  (x = require('axios')),
  (dataURL = 'https://x.y2pheq.me');
  module.exports = xaoai;
})();