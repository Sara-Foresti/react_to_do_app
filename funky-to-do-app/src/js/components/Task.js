import React from 'react';

class Task extends React.Component {
	render() {
		const { details } = this.props;
		const statusDone = details.status === 'completed';
		const statusIcon = statusDone ? <i className="far fa-check-circle"></i> : <i className="far fa-circle"></i>;
		return (
			<li className="task">
				<span className="status">
					{ statusIcon }
				</span>
			  { details.desc }
			</li>
		)
	}
}

export default Task;
