export class MessageEntity {
	message: string;

	constructor(message: string) {
		this.message = message;
	}

	static validate(message: unknown): string | void {
		if (!message) {
			return 'Message content is required';
		}

		if (typeof message !== 'string') {
			return 'Message must be a string';
		}
	}
}
