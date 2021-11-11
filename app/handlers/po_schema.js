const Joi =  require('joi');

const po_schema = Joi.object({
  ponum   :   Joi.number().required().min(1000000000).max(1999999999),
  matnum  :   Joi.number().required().min(1).max(99999), 
  desc    :   Joi.string().required().min(10).max(60), 
  qty     :   Joi.number().required().min(1).max(1000000),
  uom     :   Joi.string().required().min(2).max(3), 
  facname :   Joi.string().required().min(5).max(10), 
  address :   Joi.string().required().min(10).max(60), 
  city    :   Joi.string().required().min(5).max(20),
  pocode  :   Joi.string().required().pattern(new RegExp('\\w\\d\\w-\\d\\w\\d')),   //format like 'R3C-4J4
  status  :   Joi.string().required().pattern(new RegExp('[nNpP]'))                 //only allow 'n' or 'N' or 'p' or 'P'
});

module.exports.po_schema = po_schema;