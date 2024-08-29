export interface MessageFrom {
	name: string
}

export interface Message {
	id: string
	from: MessageFrom
	type: 'message' | 'response' | 'typing'
	time: string
	text?: string
}
