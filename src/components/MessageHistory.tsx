import React from 'react'
import { Message as MessageType } from '../types'
import Message from './Message'
import Response from './Response'
import Typing from './Typing'

interface MessageHistoryProps {
	list: MessageType[]
}

const MessageHistory: React.FC<MessageHistoryProps> = ({ list }) => {
	return (
		<ul>
			{list.map(message => {
				switch (message.type) {
					case 'message':
						return (
							<Message key={message.id} from={message.from} message={message} />
						)
					case 'response':
						return (
							<Response
								key={message.id}
								from={message.from}
								message={message}
							/>
						)
					case 'typing':
						return (
							<Typing key={message.id} from={message.from} message={message} />
						)
					default:
						return null
				}
			})}
		</ul>
	)
}

export default MessageHistory
