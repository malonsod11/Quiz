//Definicion del modelo QUiz:

module.exports=function(sequelize, DataTypes){
	return sequelize.define('Quiz',
							{ question: DataTypes.STRING, answer:  DataTypes.STRING});

};