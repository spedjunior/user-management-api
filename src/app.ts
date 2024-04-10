// Middleware File

import express from 'express';
import { router } from './routes';
//import promBundle from 'express-prom-bundle';
//import newrelic from 'newrelic';

const app = express();


//newrelic.instrumentLoadedModule('express', app);

//const metricsMiddleware = promBundle({
//    includeMethod: true,
//    includePath: true,
//    includeUp: true,
//    includeStatusCode: true,
//    customLabels: { 'app': 'my_app' },
//  });


//app.use(metricsMiddleware);
app.use(express.json());
app.use(router)

export { app }