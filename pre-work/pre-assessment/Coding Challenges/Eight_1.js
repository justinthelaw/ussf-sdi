console.clear();

console.log("TITLE: Question_08\n");

console.log("DESCRIPTION: Question #8\n");

console.log("SCRIPT:\n");

const purchaseOrders = [
  {
    purchaserId: "1", 
    orderId: "1A",
    items: [
        {
            name: "snap pea crisps", 
            department: "snacks",
            quantity: 10, 
            priceInDollars: 2.50
        }, 
        {
            name: "eggs", 
            department: "dairy",
            quantity: 25, 
            priceInDollars: 1.25
        }
    ] 
  },
  {
    purchaserId: "2", 
    orderId: "2A",
    items: [
        {
            name: "zipperlock bags", 
            department: "essentials",
            quantity: 50, 
            priceInDollars: 4.00
        }, 
        {
            name: "case of soda", 
            department: "beverage",
            quantity: 6, 
            priceInDollars: 4.25
        }, 
    ]
  },

  {
    purchaserId: "3", 
    orderId: "3A",
    items: [
        {
            name: "zipperlock bags", 
            department: "essentials",
            quantity: 50, 
            priceInDollars: 6.00
        }, 
        {
            name: "case of soda", 
            department: "beverage",
            quantity: 6, 
            priceInDollars: 7.25
        }, 
    ]
  }
]

function orderTotalChecker(n, purchaseOrders) {
  let totalPrice = 0;
  let rightOrders = [];
  
  for (let i = 0; i < purchaseOrders.length; i++) {
    
    for (let j = 0; j < purchaseOrders[i].items.length; j++) {
        let currentItem = purchaseOrders[i].items[j];

        totalPrice += currentItem.priceInDollars     
    }
    
    if (totalPrice > n) {
    rightOrders.push(purchaseOrders[i].orderId);
    }
  }
  return rightOrders;
}

console.log (orderTotalChecker(5, purchaseOrders))
