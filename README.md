## WHAT IS XAOAI?<br>
» Integrated from the known Artificial intelligence with special tweaks to make
it more advantageous to the user. This is still under development so expect some
blunders while using this.

### INSTALLING PACKAGE
» in shell/terminal

```bash
# This command installs the XAOAI library from the npm registry.
# Make sure you have Node.js and npm installed on your system before running this.
npm install @y2pheq/xaoai 
```
» in package.json
```json
"dependencies" {
    // This line includes the XAOAI library in your project.
    // Make sure it's properly installed and that "x.x.x" is replaced with the correct version number you need. 
    "@y2pheq/xaoai": "^x.x.x" 
}
```

### IMPORT/CONST THE PACKAGE FROM YOUR PROJECT

```javascript
// Import the XAOAI library.  This line assumes 'xaoai' is a valid module.
const xaoai = require('xaoai'); 

// Instantiate a new XAOAI object.
xaoai = new xaoai();
```

### USAGE<br>

» xaoai.xviii (AI)

```javascript
// Import the necessary module (replace 'xaoai' with the actual module name)
//  This line assumes xaoai is a module you've imported. Adjust as needed for your setup.
//const xaoai = require('./xaoai'); // Example if xaoai is in the same directory


/**
 • Asynchronously sends a message using the xaoai.xviii function.
 •
 • @param {string} query - The message to send.
 • @param {number} sid - The session ID (required).
 • @returns {Promise<object>} A promise that resolves with the response from xaoai.xviii, or rejects with an error.
 **/
async function sendMessage(query, sid) {
  try {
    // Send the message using the xaoai.xviii function.  Replace this with the actual function call if different.
    const response = await xaoai.xviii(query, sid); 

    // Log the response received from the server.  Consider more robust error handling within the response itself.
    console.log("Message sent successfully. Response:", response);  
    return response; // Return the response for potential further processing
  } catch (error) {
    // Handle errors that occurred during message sending.
    console.error("Error sending message:", error);
    //Consider throwing the error to be handled higher up in the call stack instead of just logging
    // throw error;  
    return null; // Or another appropriate value to signal failure
  }
}

/**
 • Main function to execute the message sending process.
 **/
async function main() {
  const query = "hi";
  const sid = 100; // Session ID -  This is crucial and should be obtained securely and correctly!

  // Send the message and handle the response (or potential errors).
  const result = await sendMessage(query, sid);
  if (result) {
    console.log(result); // Add further processing of the result if necessary.
  } else {
    console.log("Message sending failed.");
  }
}


// Execute the main function.
main();

```

> [!WARNING] 
> __This tool is designed to be a helpful educational resource.  It's important to remember that any misuse of this tool, such as engaging in illegal or harmful activities, is the sole responsibility of the user. I am not liable for any such actions.__
