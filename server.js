const EventEmitter = require("events");

const eventBus = new EventEmitter();

eventBus.on("userLoggedIn", (user) => {
    console.log(`Email Service: Login alert sent to ${user.email}`);
});

eventBus.on("itemAddedToCart", (item) => {
    console.log(`Cart Service: ${item.name} added to cart`);
});

eventBus.on("orderPlaced", (order) => {
    console.log(`Inventory Service: Stock updated for order ${order.id}`);
});

eventBus.on("orderPlaced", (order) => {
    console.log(`Billing Service: Payment processed for order ${order.id}`);
});

eventBus.on("orderPlaced", (order) => {
    console.log(`Email Service: Order confirmation sent for ${order.id}`);
});

eventBus.on("paymentFailed", (order) => {
    console.log(`Notification Service: Payment failed for order ${order.id}`);
});

eventBus.on("orderShipped", (order) => {
    console.log(`Order Service: Order ${order.id} marked as shipped`);
    console.log(`Notification Service: Tracking details sent to customer`);
});

eventBus.emit("userLoggedIn", {
    email: "user@example.com"
});

eventBus.emit("itemAddedToCart", {
    name: "Laptop"
});

eventBus.emit("orderPlaced", {
    id: 101
});

eventBus.emit("paymentFailed", {
    id: 102
});

eventBus.emit("orderShipped", {
    id: 101
});