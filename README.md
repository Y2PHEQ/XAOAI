## WHAT IS XAOAI?<br>
<h5> v0.0.6-beta [LATEST]</h5>

» Integrated from the known Artificial intelligence with special tweaks to make
it more advantageous to the user. This is still under development so expect some
blunders while using this.

### INSTALLING PACKAGE
» in shell/terminal

```bash
npm install @y2pheq/xaoai
```
» in package.json
```json
"dependencies" {
    "@y2pheq/xaoai": "^x.x.x"
}
```

### IMPORT/CONST THE PACKAGE FROM YOUR PROJECT

```javascript
const Xaoai = require('xaoai'),
	xaoai = new Xaoai();
// or
import Xaoai from 'xaoai';
const xaoai = new Xaoai();
```

### USAGE<br>

» xaoai.xviii (AI)

```javascript
async function sendMessage(query, sid) {
  try {
    const response = await xaoai.xviii(query, sid);
    console.log(response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

async function main() {
  const query = "hi";
  const sid = 100; // required

  await sendMessage(query, sid);
}

main();
```

> [!WARNING]  
> _This tool is for educational purposes only. I won't take any responsibility
> if any users take advantage of this and exploit it for illicit activities._
