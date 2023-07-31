import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const startServer = () => {
	http.createServer(app).listen(process.env.PORT, () => {
		console.info(`Server started at port ${process.env.PORT}`);
	});
};

startServer();
