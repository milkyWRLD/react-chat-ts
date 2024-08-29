import React from 'react'
import { Message as MessageType } from '../types'

interface ResponseProps {
	from: MessageType['from']
	message: MessageType
}

const Response: React.FC<ResponseProps> = ({ from, message }) => (
	<li className='clearfix'>
		<div className='message-data align-right'>
			<span className='message-data-time'>{message.time}</span> &nbsp; &nbsp;
			<span className='message-data-name'>{from.name}</span>
			<i className='fa fa-circle me'></i>
		</div>
		<div className='message other-message float-right'>{message.text}</div>
	</li>
)

export default Response
