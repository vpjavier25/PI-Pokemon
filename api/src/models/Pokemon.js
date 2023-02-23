const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID, //ALTER SEQUENCE pokemons_id_seq RESTART WITH 1280 en consola para setear el valor inicial en 1280
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      
    },
    height: {
      type: DataTypes.INTEGER,
      
    },
    weight: {
      type: DataTypes.INTEGER,
      
    }
  },
    {
      timestamps: false
    });
};

