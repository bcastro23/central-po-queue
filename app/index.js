
const express = require('express');
const morgan = require('morgan');
const config = require('config');

const po_route = require('./routes/puchase_orders');
const home_route = require('./routes/home')

const app = express();

/**
 * Adding middleware
 */
app.use(express.json());

console.log(`$NODE_CONFIG_DIR=${process.env.NODE_CONFIG_DIR}`);

/**
 * adding logging on dev environments
 */
console.log(`starting app on '${app.get('env')}' environment`);
console.log(config.get('name'));    //reading configuration file into folder ./config based on $NODE_ENV

if (app.get('env') === 'development') {   //reading environment variable $NODE_ENV
  app.use(morgan('tiny'));
  console.log(`enabling module 'morgan' for hhtp request logs...`);  
}

/**
 * adding routes
 */
app.use('/', home_route);
app.use('/api/v1/cpoq/PurchaseOrders', po_route);

/**
 * create env variable for PORT 
 * */ 
const port = process.env.CPOQ_PORT || 3000

/**
 * start up app
 */
app.listen(port, () => {
  console.log(`cpoq running...`);
  console.log(`listening on port ${port}...`)
});
