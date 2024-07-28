import http from 'http';
import app from './app';
import WebSocketServer from './infrastructure/websocket/ws';
import MessageService from './features/message/message.service';

const server = http.createServer(app);

WebSocketServer.initialize(server, () => MessageService.getMessages());

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
