import React from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

class TaskList extends React.Component {
	render () {
		// is this PROPS DRILLING?
		const { addTask, tasks } = this.props;
		return (
			<div>
				<h2>Your First Task List</h2>
				<div className="taskList">
					<AddTaskForm 
					addTask={addTask}
					/>
					<ul className="tasks">
						{
							Object.keys(tasks).map(key => {
								// return <Task key={task} id={task.id} desc={task.desc} status={task.status}/> 
								return <Task key={ key } details={ tasks[key] } />
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default TaskList;