import React from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

class TaskList extends React.Component {
	// addTask should be here? ...probably not...
	// we just need to pass the list ID/KEY to the STATE, 
	// where we update the tasks of that list...
	// or we can pass the lists as props..
	// constructor(){
	// 	super();
 //    // this.addTaskToList = this.addTaskToList.bind(this);
	// 	console.log('taskList Props', this.props);
	// }

	// we need to add tasks 'inside' of lists

	render () {
		// is this PROPS DRILLING?
		const { listDetails, updateListTasks } = this.props;
		console.log('taskList Props', this.props);
		
		return (
			<div>
				<h3 className="list-title">{listDetails.title} { listDetails.id }</h3>
				<div className="taskList">
					<AddTaskForm 
					updateListTasks={updateListTasks}
					listId={ listDetails.id }
					/>
					<ul className="tasks">
						{
							Object.keys(listDetails.tasks).map(key => {
								return <Task key={ key } details={ listDetails.tasks[key] } listId={ listDetails.id }/>
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default TaskList;