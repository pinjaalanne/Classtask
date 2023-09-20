// task 1

class Pizza {
    name;
    toppings = [];
    basePrice = 0;

    constructor(name, toppings, basePrice) {
        this.name = name;
        this.toppings = toppings;
        this.basePrice = basePrice;
 }
    getPrice() {
        return this.basePrice;
    }
}

const julia = new Pizza(
            'julia',
            ['ham', 'prawn','pineapple', 'bluecheese'], 
            7.90);
const americano = new Pizza(
            'americano',
            ['ham','pineapple', 'bluecheese'], 
            7.90);
const vege = new Pizza(
            'vege',
            ['onion', 'tomato', 'mushroom', 'mozzarella'], 
            7.90);

console.log(julia.getPrice());
console.log(julia.toppings);
console.log(julia, vege);

// task 2

class pizzaOrder {
    customerName;
    deliveryType;
    pizzaType = [];
    pizzaPrice = 0;

    constructor(customerName, deliveryType, pizzaType, pizzaPrice) {
        this.customerName = customerName;
        this.deliveryType = deliveryType;
        this.pizzaType = pizzaType;
        this.pizzaPrice = pizzaPrice;
    }
}

const newOrder = new pizzaOrder(
                'Pinja Alanne', 
                'Home Delivery',
                [julia, vege],
                );

        console.log(newOrder);
