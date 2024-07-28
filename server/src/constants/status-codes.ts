const STATUS_CODES = {
	OK: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
} as const;

export type StatusCode = typeof STATUS_CODES[keyof typeof STATUS_CODES];
export { STATUS_CODES };
