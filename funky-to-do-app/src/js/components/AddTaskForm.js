import React from 'react';

class AddTaskForm extends React.Component {
	// here create a task with all its details, including ID
	// we need to add this task to its list tasks key
	// so probably addTask will become a method of TaskList, not the App
	// as UPDATE LIST, as initially tasks is an 'empty' property of TaskList

	// React 16.3 ref creation
	constructor() {
    super();
    this.desc = React.createRef();
    this.status = React.createRef();

    // binding functions
    this.createTask = this.createTask.bind(this);
	}

	createTask(event) {
		event.preventDefault();

		const newTask = {
			id: Date.now(),
			desc: this.desc.current.value, // need a reference to get the value
			status: this.status.current.value
		}
		console.log('Props: ', this.props);
		this.props.updateListTasks(newTask, this.props.listId);
		//console.log('list id in CREATE TASK: ', this.props.listId);
	}

	render() {
		return(
			<form className="add-task" onSubmit={this.createTask}>
				<input ref={this.desc} type="text" name="desc" placeholder="What do you have to do?"/>
				<select ref={this.status} name="status" >
					<option value="uncompleted">To do</option>
					<option value="completed">Done!</option>
				</select>
				<button type="submit">Add task</button>
			</form>
		)
	}
}

export default AddTaskForm;