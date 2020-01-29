import React from 'react';

class AddTaskForm extends React.Component {
	// here create a task with all its details, including ID

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
		console.log('task created');

		const newTask = {
			id: Date.now(),
			desc: this.desc.current.value, // need a reference to get the value
			status: this.status.current.value
		}

		// what do we do with our new task?
		// we send it to the state, passing it to a method
		// defined in the state and passed to AddTaskForm
		// but AddTaskForm is rendered inside TaskList...
		console.log(newTask);
		this.props.addTask(newTask);
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