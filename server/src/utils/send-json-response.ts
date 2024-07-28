import { Response } from 'express';
import {StatusCode} from '../constants';

const sendJsonResponse = (res: Response, statusCode: StatusCode, message: string | object): void => {
	res.status(statusCode).json({ status: statusCode, message });
};

export default sendJsonResponse;
