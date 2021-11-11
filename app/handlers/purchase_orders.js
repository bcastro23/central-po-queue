const { purchase_orders } = require('../local-data/purchase_orders')
const po_list = purchase_orders.slice()

function get_all() {
  return po_list;
};

function get(ponum) {
  const po_found = po_list.find( c => c.ponum === ponum );
  return po_found;  
};

function push(new_po) {
  po_list.push(new_po);
  return new_po
}

module.exports.get_all = get_all;
module.exports.get = get;
module.exports.push = push;
