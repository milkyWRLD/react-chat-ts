import React from 'react'

interface TypingProps {
	from: { name: string }
	message: { time: string }
}

const Typing: React.FC<TypingProps> = ({ from, message }) => (
	<li>
		<div className='message-data'>
			<span className='message-data-name'>
				<i className='fa fa-circle online'></i> {from.name}
			</span>
			<span className='message-data-time'>{message.time}</span>
		</div>
		<div className='message my-message'>
			<i>печатает...</i>
		</div>
	</li>
)

export default Typing
