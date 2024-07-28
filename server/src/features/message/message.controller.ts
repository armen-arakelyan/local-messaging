import { Request, Response } from 'express';
import MessageService from './message.service';
import WebSocketServer from '../../infrastructure';
import { MessageEntity } from './message.entity';
import sendJsonResponse from '../../utils/send-json-response';
import { STATUS_CODES } from '../../constants';

class MessageController {
	createMessage(req: Request, res: Response): void {
		const { message } = req.body;
		const validationError = MessageEntity.validate(message);

		if (validationError) {
			sendJsonResponse(res, STATUS_CODES.BAD_REQUEST, validationError);
			return;
		}

		const newMessage = MessageService.addMessage(message);
		WebSocketServer.notifyClients({ type: 'ADD_MESSAGE', message: newMessage });
		sendJsonResponse(res, STATUS_CODES.CREATED, 'Message created');
	}

	getAllMessages(req: Request, res: Response): void {
		const messages = MessageService.getMessages();
		res.status(STATUS_CODES.OK).json({ messages });
	}
}

export default new MessageController();
