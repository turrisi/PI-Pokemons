const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('pokemon', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		hp: {
			type: DataTypes.STRING,
		},
		img: {
			type: DataTypes.TEXT,
		},
		attack: {
			type: DataTypes.STRING,
		},
		defense: {
			type: DataTypes.STRING,
		},
		speed: {
			type: DataTypes.STRING,
		},
		height: {
			type: DataTypes.STRING,
		},
		weight: {
			type: DataTypes.STRING,
		},

	});
};
