import React from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

class TaskList extends React.Component {
	render () {
		// is this PROPS DRILLING?
		const { addTask } = this.props;
		return (
			<div>
				<h2>Your First Task List</h2>
				<div className="tasks">
					<AddTaskForm 
					addTask={addTask}
					/>
					<Task />
				</div>
			</div>
		)
	}
}

export default TaskList;