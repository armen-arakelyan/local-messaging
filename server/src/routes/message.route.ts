import { Router } from 'express';
import MessageController from '../features/message/message.controller';

const router = Router();

router.post('/send-message', MessageController.createMessage);
router.get('/messages', MessageController.getAllMessages);

export default router;
