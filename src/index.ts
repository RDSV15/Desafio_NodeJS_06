/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

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
	
	const { Sequelize } = require('sequelize');

	const sequelize = new Sequelize({
		dialect: 'sqlite',
		storage: 'path/to/database.sqlite'
	});

	const readline = require('readline');
		const leitor = readline.createInterface({
    	input: process.stdin,
    	output: process.stdout
	});

	const DAO: any[] = [];

	leitor.question('Digite a quantidade de alunos: ', async (quantidade: number) => {
    	for(let i = 0; i < quantidade; i++) {
        	
       	 	await new Promise((resolve) => { 
            	leitor.question(`Digite o seu nome ${i}: `, (nome: any) => {
                	resolve(DAO.push(nome)); 
					
            	});
        	});
		}
		leitor.close();
    	console.log(DAO);
		
	});
	
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	  } catch (error) {
		console.error('Unable to connect to the database:', error);
	  }

});
