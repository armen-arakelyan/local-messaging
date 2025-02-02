import express from 'express';
import cors from 'cors';
import { messageRoutes } from './routes';

class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use('/api', messageRoutes);
	}
}

export default new App().app;
