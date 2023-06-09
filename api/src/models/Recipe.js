const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    idRecipe: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    recipeSummary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.FLOAT(2),
      allowNull: false,
    },
    stepByStep: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
   
  });
  
};
