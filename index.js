import registerProviders from './providers/providerRegistry.js';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

registerProviders(app);

app.listen(PORT);
