const Purchase_Orders = [
  { 
    ponum : 1000000000, 
    matnum : 20310, 
    desc : "Dummy Purchase Order", 
    qty : 10, 
    uom : "EA", 
    facname : "FAC-300", 
    address : "Freya St 123", 
    city : "Los Angeles", 
    pocode : "R3C-4J4", 
    status : "N"  
  },
  { 
    ponum : 1000000001, 
    matnum : 20210, 
    desc : "Dummy PO", 
    qty : 5, 
    uom : "BX", 
    facname : "FAC-301", 
    address : "Freu St 321", 
    city : "San Diego", 
    pocode : "R5C-2J6", 
    status : "N"  
  }
];

module.exports.purchase_orders = Purchase_Orders;