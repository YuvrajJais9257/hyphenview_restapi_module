// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const jwt = require('jsonwebtoken'); // For JWT handling
// const crypto = require('crypto');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// let users = [];

// // Function to generate a random API key
// const generateApiKey = () => {
//     return Math.random().toString(36).substring(2, 15);
// };

// // Endpoint to register a user
// app.post('/api/register', (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ message: 'Username and password are required' });
//     }

//     const apiKey = generateApiKey();
//     users.push({ username, password, apiKey });
//     res.status(201).json({ username, apiKey });
// });

// // Middleware for Basic Authentication
// const authenticateBasicAuth = (req, res, next) => {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const base64Credentials = authHeader.split(' ')[1];
//     const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
//     const [username, password] = credentials.split(':');
    
//     const user = users.find((user) => user.username === username && user.password === password);
    
//     if (!user) {
//         return res.status(403).json({ message: 'Unauthorized' });
//     }
    
//     next();
// };

// // Middleware for API Key Authentication
// const authenticateApiKey = (req, res, next) => {
//     const apiKey = req.headers['x-api-key'];
    
//     const user = users.find((user) => user.apiKey === apiKey);
    
//     if (!user) {
//         return res.status(403).json({ message: 'Unauthorized' });
//     }
    
//     next();
// };

// // Middleware for Bearer Token Authentication
// const authenticateBearerToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
    
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
    
//     const token = authHeader.split(' ')[1];
    
//     // Here you would typically validate the token against your store or logic
//     // For demonstration purposes, we will assume the token is valid if it's not empty
//     if (!token) {
//         return res.status(403).json({ message: 'Unauthorized' });
//     }

//     next();
// };

// // Middleware for JWT Bearer Authentication
// const authenticateJwtBearerToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
    
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
    
//     const token = authHeader.split(' ')[1];
    
//     jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] }, (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Unauthorized' });
//         }
        
//         req.user = decoded; // Attach the decoded user info to the request object
//         next();
//     });
// };

// // Endpoint to get a JWT token
// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
    
//     const user = users.find((user) => user.username === username && user.password === password);
    
//     if (!user) {
//         return res.status(403).json({ message: 'Invalid credentials' });
//     }
    
//     // Generate a JWT token with the specified algorithm and payload
//     const payload = { username }; // Customize this payload as needed
//     const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

//     res.json({ token });
// });

// // Protected endpoint for Basic Auth
// app.get('/api/basic-data', authenticateBasicAuth, (req, res) => {
//     const responseData = { message: 'Hello, this is your protected data via Basic Auth!' };
//     console.log("Response being sent:", responseData);
//     res.json(responseData);
// });

// // Protected endpoint for API Key Auth
// app.get('/api/api-key-data', authenticateApiKey, (req, res) => {
//     const responseData = { message: 'Hello, this is your protected data via API Key!' };
//     console.log("Response being sent:", responseData);
//     res.json(responseData);
// });

// // Protected endpoint for Bearer Token Auth
// app.get('/api/bearer-data', authenticateBearerToken, (req, res) => {
//     const responseData = { message: 'Hello, this is your protected data via Bearer Token!' };
//     console.log("Response being sent:", responseData);
//     res.json(responseData);
// });

// // Protected endpoint for JWT Bearer Auth
// app.get('/api/jwt-bearer-data', authenticateJwtBearerToken, (req, res) => {
//     const responseData = { message: 'Hello, this is your protected data via JWT Bearer Token!', user: req.user };
//     console.log("Response being sent:", responseData);
//     res.json(responseData);
// });



// // Start the server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // For JWT handling
const crypto = require('crypto');
const OAuth = require('oauth-1.0a'); // For OAuth 1.0a
const axios = require('axios'); // For making HTTP requests

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

let users = [];

// Function to generate a random API key
const generateApiKey = () => {
    return Math.random().toString(36).substring(2, 15);
};

// Endpoint to register a user
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const apiKey = generateApiKey();
    users.push({ username, password, apiKey });
    res.status(201).json({ username, apiKey });
});

// Middleware for Basic Authentication
const authenticateBasicAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');
    
    const user = users.find((user) => user.username === username && user.password === password);
    
    if (!user) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    
    next();
};

// Middleware for API Key Authentication
const authenticateApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    
    const user = users.find((user) => user.apiKey === apiKey);
    
    if (!user) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    
    next();
};

// Middleware for Bearer Token Authentication
const authenticateBearerToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const token = authHeader.split(' ')[1];
    
    // Here you would typically validate the token against your store or logic
    if (!token) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    next();
};

// Middleware for JWT Bearer Authentication
const authenticateJwtBearerToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const token = authHeader.split(' ')[1];
    
    jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] }, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        
        req.user = decoded; // Attach the decoded user info to the request object
        next();
    });
};



const authenticateOAuth1 = async (req, res, next) => {
   const authHeader = req.headers['authorization'];

   if (!authHeader || !authHeader.startsWith('OAuth ')) {
       return res.status(401).json({ message: 'Unauthorized' });
   }

   // Extract the OAuth parameters from the header
   const oauthParams = parseOAuthParams(authHeader);

   // Validate the signature and other parameters here (this is a simplified example)
   try {
       // You would typically verify the signature and other parameters here.
       // For demonstration purposes only:
       if (!oauthParams.oauth_token || !oauthParams.oauth_signature) {
           throw new Error("Invalid OAuth parameters");
       }

       // Optionally verify against your store or logic here.
       req.user = { username: oauthParams.username }; // Assuming you have this information.
       next();
   } catch (error) {
       return res.status(403).json({ message: 'Unauthorized' });
   }
};

// Helper function to parse OAuth parameters from the Authorization header
function parseOAuthParams(authHeader) {
   const paramsString = authHeader.split(' ')[1];
   const paramsArray = paramsString.split(',').map(param => param.trim());
   const paramsObj = {};
   
   paramsArray.forEach(param => {
       const [key, value] = param.split('=');
       paramsObj[key] = decodeURIComponent(value.replace(/"/g, ''));
   });

   return paramsObj;
}

// Endpoint to get a JWT token
app.post('/api/login', (req, res) => {
   const { username, password } = req.body;
   
   const user = users.find((user) => user.username === username && user.password === password);
   
   if (!user) {
       return res.status(403).json({ message: 'Invalid credentials' });
   }
   
   // Generate a JWT token with the specified algorithm and payload
   const payload = { username }; // Customize this payload as needed
   const token = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

   res.json({ token });
});

app.post('/api/token-secret', (req, res) => {
    const {username, password} = req.body;
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
        return res.status(403).json({message: 'Invalid credentials'});
    }
    const secret = crypto.randomBytes(32).toString('hex');
    res.json({secret});
})

// Protected endpoint for Basic Auth
app.get('/api/basic-data', authenticateBasicAuth, (req, res) => {
   const responseData = { message: 'Hello, this is your protected data via Basic Auth!' };
   console.log("Response being sent:", responseData);
   res.json(responseData);
});

// Protected endpoint for API Key Auth
app.get('/api/api-key-data', authenticateApiKey, (req, res) => {
   const responseData = { message: 'Hello, this is your protected data via API Key!' };
   console.log("Response being sent:", responseData);
   res.json(responseData);
});

// Protected endpoint for Bearer Token Auth
app.get('/api/bearer-data', authenticateBearerToken, (req, res) => {
   const responseData = { message: 'Hello, this is your protected data via Bearer Token!' };
   console.log("Response being sent:", responseData);
   res.json(responseData);
});

// Protected endpoint for JWT Bearer Auth
app.get('/api/jwt-bearer-data', authenticateJwtBearerToken, (req, res) => {
   const responseData = { message: 'Hello, this is your protected data via JWT Bearer Token!', user: req.user };
   console.log("Response being sent:", responseData);
   res.json(responseData);
});

// Protected endpoint for OAuth 1.0 Auth
app.get('/api/oauth1-data', authenticateOAuth1, (req, res) => {
   const responseData = { message: 'Hello, this is your protected data via OAuth 1.0!', user: req.user };
   console.log("Response being sent:", responseData);
   res.json(responseData);
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});