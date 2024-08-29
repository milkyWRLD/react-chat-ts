import React from 'react'
import { Message as MessageType } from '../types'

interface MessageProps {
	from: MessageType['from']
	message: MessageType
}

const Message: React.FC<MessageProps> = ({ from, message }) => (
	<li>
		<div className='message-data'>
			<span className='message-data-name'>
				<i className='fa fa-circle online'></i> {from.name}
			</span>
			<span className='message-data-time'>{message.time}</span>
		</div>
		<div className='message my-message'>{message.text}</div>
	</li>
)

export default Message
