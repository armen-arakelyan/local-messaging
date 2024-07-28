class MessageService {
	private messages: string[] = [];

	addMessage(message: string): string {
		if (this.messages.length >= 9) {
			this.messages.shift();
		}
		this.messages.push(message);
		return message;
	}

	getMessages(): string[] {
		return this.messages;
	}
}

export default new MessageService();
