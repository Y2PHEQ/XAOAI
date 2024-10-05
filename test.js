const Xaoai = require('./src/app');
const xaoai = new Xaoai ();

async function main() {

  const query = 'young girls';

  try {
    const x__ = await xaoai.lyrics(query);
    console.log(x__);
  } catch (e) {
    console.error(e);
  }
}

main();