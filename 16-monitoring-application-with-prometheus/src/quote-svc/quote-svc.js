const express = require('express');
const stoicapi = require("stoic-api");
const promBundle = require("express-prom-bundle");

const app = express();
const metricsMiddleware = promBundle({includeMethod: true});
const Prometheus = metricsMiddleware.promClient;
const quotesTotal = new Prometheus.Counter({
  name: 'quote_fetches_total',
  help: 'Total number of quotes',
  labelNames: []
});
app.use(metricsMiddleware);

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.get('/quote', (req, res) => {
  const quote = {
    title: 'This is a random quote',
    description: stoicapi.random(),
  };
  quote.title = quote.title.toUpperCase();
  quotesTotal.inc();
  res.send([quote]);
});

const port = 3000;

const server = app.listen(port, () => console.log(`quote svc listening on port ${port}!`));

process.on('SIGTERM', function () {
    server.close(function () {
        process.exit(0);
    });
});
