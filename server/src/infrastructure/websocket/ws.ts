import { Server } from 'http';
import WebSocket, { WebSocketServer as WSServer } from 'ws';

class WebSocketServer {
	private wss: WSServer | null = null;

	initialize(server: Server, getMessages: () => string[]): void {
		this.wss = new WebSocket.Server({ server });

		this.wss.on('connection', (ws: WebSocket) => {
			ws.send(JSON.stringify({ type: 'INIT', messages: getMessages() }));
		});
	}

	notifyClients(message: object): void {
		if (this.wss) {
			this.wss.clients.forEach((client) => {
				if (client.readyState === WebSocket.OPEN) {
					client.send(JSON.stringify(message));
				}
			});
		}
	}
}

export default new WebSocketServer();
