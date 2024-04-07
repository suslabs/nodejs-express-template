# NodeJS Express Template (with directory routes)

Usage:
- Duplicate the file located in the "routes/example.js.bkp" folder.
- Rename the duplicated file with a *.js extension (for example: mogus.js).
- Modify the code according to your requirements.
- Run index.js located in the main directory (node index.js).

# WARNING! The file name represents the actual path.

Example:
- filename.js

You can access it using the following address:
- IP:PORT/api/filename (IP and PORT are variables set in index.js)

# File Example (location.js):
```
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const response = await axios.get('http://ip-api.com/json/');
  res.json(response.data);
});

module.exports = router;
```

Accessing IP:PORT/api/location will return all the information about your IP in JSON format.
