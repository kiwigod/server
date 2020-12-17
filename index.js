import registerRoutes from './providers/routeProvider.js';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

registerRoutes(app);

app.listen(PORT);
