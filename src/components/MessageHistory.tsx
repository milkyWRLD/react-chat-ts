import React from 'react'
import Message from './Message'
import Response from './Response'
import Typing from './Typing'

interface MessageHistoryProps {
	list: {
		id: string
		from: { name: string }
		type: 'message' | 'response' | 'typing'
		time: string
		text?: string
	}[]
}

const MessageHistory: React.FC<MessageHistoryProps> = ({ list }) => {
	if (list.length === 0) return null

	return (
		<ul>
			{list.map(msg => {
				switch (msg.type) {
					case 'message':
						return <Message key={msg.id} from={msg.from} message={msg} />
					case 'response':
						return <Response key={msg.id} from={msg.from} message={msg} />
					case 'typing':
						return <Typing key={msg.id} from={msg.from} message={msg} />
					default:
						return null
				}
			})}
		</ul>
	)
}

export default MessageHistory
