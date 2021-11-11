const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h2>Welcome to central-po-queue</h2>
  <h3>api endpoints</h3>
  <p> 
    <a href="/api/v1/cpoq/PurchaseOrders">/api/v1/cpoq/PurchaseOrders</a>
  </p>`);
});

module.exports = router;