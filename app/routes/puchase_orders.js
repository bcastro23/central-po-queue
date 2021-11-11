const express = require('express');
const router = express.Router();
const po_db_driver = require('../handlers/purchase_orders');   //data driver
const { po_schema } = require('../handlers/po_schema');     //data schema validator

router.get('/', async (req, res) => {
  const purchase_orders =po_db_driver.get_all()
  res.send(purchase_orders);
});

router.get('/:ponum', async (req, res) => {
  const purchase_order =po_db_driver.get(parseInt(req.params.ponum))
  if (!purchase_order) {
    res.status(400).send(`Purchase order ${req.params.ponum} not found`);
  }
  
  res.send(purchase_order);
});

router.post('/', (req, res) => {
  console.log(`incoming message : ${req.body}`);  

  const { error } = po_schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message); 

  const newpo = req.body;

  const newpo_result =po_db_driver.push(newpo);
  if (!newpo_result) {
    return res.status(400).send(`Error posting data ${newpo}`);
  }
  
  res.send(newpo_result);
});

module.exports = router;