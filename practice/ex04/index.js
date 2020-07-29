const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV1,
      primaryKey: true
    },
    name: Sequelize.STRING,
  })

  const Product = sequelize.define('product', {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV1,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })

  Product.belongsTo(User)
  User.hasMany(Product)

  await sequelize.sync({ force: true })
  return { User, Product }
} 
