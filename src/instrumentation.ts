/* instrumentation.ts */
import { NodeSDK } from '@opentelemetry/sdk-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
/*import {
   PeriodicExportingMetricReader,
   //  ConsoleMetricExporter,
} from '@opentelemetry/sdk-metrics'; */

import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';

const sdk = new NodeSDK({
   traceExporter: new ConsoleSpanExporter(),
   metricReader: new PrometheusExporter({ port: 9464 }),
   instrumentations: [getNodeAutoInstrumentations(), new HttpInstrumentation(), new ExpressInstrumentation()],
});

//const sdk = new NodeSDK({
//  traceExporter: new ConsoleSpanExporter(),
//  metricReader: new PeriodicExportingMetricReader({
//    exporter: new ConsoleMetricExporter(),
//  }),
//  instrumentations: [getNodeAutoInstrumentations()],
//});

//sdk.start();
