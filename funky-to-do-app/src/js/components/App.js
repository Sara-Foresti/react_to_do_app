import React from 'react';
import Headline from './Headline';
import TaskList from './TaskList';

class App extends React.Component {
	// here add (save) the tasks by pushing them into the tasks object
	constructor() {
		super();

		// binding methods
		this.addTask = this.addTask.bind(this);
		this.makeSomething = this.makeSomething.bind(this);

		this.state = {
			lists: {}, // for later: how do we 'nest' pieces of state? 
			tasks: {}
		}
	}

	// this will be called inside another function
	// do I need to bind it in the contsructor?
	// if I dont's it says it's not defined
	makeSomething() {
		document.body.style.background = "#9C27B0";
	}

	addTask(newTask) {
		console.log('task added', newTask);
		// get copy of the tasks
		const tasks = {...this.state.tasks};
		// add new task in 
		tasks[newTask.id] = newTask;
		// set state
		this.setState({ tasks: tasks });

		// do somethings else (eventually make the API call)
		this.makeSomething();
	}

	render() {
	  return (
	    <div className="App">
	      <Headline />
	      <TaskList addTask={this.addTask} tasks={this.state.tasks}/>
	    </div>
	  );
	}
}

export default App;
