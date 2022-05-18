/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { userInfo } from "os";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	const readline = require('readline');
		const leitor = readline.createInterface({
    	input: process.stdin,
    	output: process.stdout
	});

	const alunos: any[] = [];

	leitor.question('Digite a quantidade de alunos: ', async (quantidade: number) => {
    	for(let i = 0; i < quantidade; i++) {
        	
       	 	await new Promise((resolve) => { 
            	leitor.question(`Digite o seu nome ${i}: `, (nome: any) => {
                	resolve(alunos.push(nome)); 
					
            	});
        	});
		}
		leitor.close();
    	console.log(alunos);
		
	});

	const { Sequelize, DataTypes, Model } = require('sequelize');
	const sequelize = new Sequelize('sqlite::memory:');

	class lista extends Model {}

	lista.init({
  		// Model attributes are defined here
  		firstName: { 
			alunos,
    	type: DataTypes.STRING,
    	allowNull: false
  		},
	}, 
	{
  		// Other model options go here
  		sequelize, // We need to pass the connection instance
  		modelName: 'lista' // We need to choose the model name
	});

	// the defined model is the class itself
	console.log(lista === sequelize.models.lista); // true
	
	sequelize.define('lista', {
		// ... (attributes)
	}, {
		tableName: 'alunos'
	});
	
	await sequelize.sync({ force: true });
	console.log("All models were synchronized successfully.");	

	await lista.drop();
	console.log("User table dropped!");
});
//user=lista
//users=alunos