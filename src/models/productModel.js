// filepath: product-api/product-api/src/models/productModel.js
class Product {
    constructor(id, name, price, description) {
        this.id = id; // Unique identifier for the product
        this.name = name; // Name of the product
        this.price = price; // Price of the product
        this.description = description; // Description of the product
    }
}

// Example method to simulate saving a product to a database
Product.save = async function(product) {
    // Logic to save the product to the database would go here
    // This is a placeholder for demonstration purposes
    console.log("Product saved:", product);
};

// Example method to simulate finding a product by ID
Product.findById = async function(id) {
    // Logic to find a product by its ID in the database would go here
    // This is a placeholder for demonstration purposes
    console.log("Finding product with ID:", id);
    return null; // Placeholder return value
};

// Example method to simulate updating a product
Product.update = async function(id, updatedData) {
    // Logic to update the product in the database would go here
    // This is a placeholder for demonstration purposes
    console.log("Updating product with ID:", id, "to", updatedData);
};

// Example method to simulate deleting a product
Product.delete = async function(id) {
    // Logic to delete the product from the database would go here
    // This is a placeholder for demonstration purposes
    console.log("Deleting product with ID:", id);
};

module.exports = Product; // Exporting the Product class for use in other modules