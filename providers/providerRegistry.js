import registerRoutes from './routeProvider.js';
import registerAuth from './authProvider.js';

export default (app) => {
    registerRoutes(app);
    registerAuth();
}
