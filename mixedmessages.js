
//Object which contains both the Arrays and the Function to Generate The Coffee Orders
const coffeeOrder = {
    //Arrays with All Data Required for Message
    coffeeType: ['Espresso', 'Cortado', 'Long Black', 'Flat White', 'Latte', 'Cappuccino', 'Handbrew'],
    customerName: ['Chris', 'Courtney', 'Sam', 'Leah', 'Lauren', 'Benji'],
    sitInOrTakeaway: ['Sit-In', 'Takeaway']
,

//Function to Choose Random Index per Array and Create New Message
randomOrder(coffee, customer, location) {
    let coffee1 = Math.floor(Math.random() * this.coffeeType.length);
    let customer1 = Math.floor(Math.random() * this.customerName.length);
    let location1 = Math.floor(Math.random() * this.sitInOrTakeaway.length);
    return `Order of ${coffee[coffee1]} for ${customer[customer1]}, which is a ${location[location1]}!`
}}

//Logging the Message to the Console
console.log(coffeeOrder.randomOrder(coffeeOrder.coffeeType, coffeeOrder.customerName, coffeeOrder.sitInOrTakeaway));