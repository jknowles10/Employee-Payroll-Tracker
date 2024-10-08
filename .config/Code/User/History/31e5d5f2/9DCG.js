// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {type: DataTypes.INTEGER},
    product_name: {type: DataTypes.STRING},
    price: {type: DataTypes.DECIMAL(10, 2)},
    stock: {type: DataTypes.INTEGER(10)},
    category_id: {type: DataTypes.INTEGER references category.id}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;