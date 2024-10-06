## WHAT IS XAOAI?<br>

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
"dependencies": {
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

» xaoai.xviiii (AI)

```javascript
async function x() {
	const QUERY = 'hi';
	const SID = 100; // OPTIONAL
	try {
		const resp = await xaoai.xviii(QUERY, SID);
		console.log(resp);
	} catch (error) {
		console.error('Error:', error);
	}
}
x();
```

» xaoai.lyrics

```javascript
async function x() {
	const QUERY = 'young girls';
	try {
		const resp = await xaoai.lyrics(QUERY);
		console.log(resp);
	} catch (e) {
		console.error(e);
	}
}
x();
```

> [!WARNING]  
> _This tool is for educational purposes only. I won't take any responsibility
> if any users take advantage of this and exploit it for illicit activities._
