import React from 'react';
import Headline from './Headline';
import TaskList from './TaskList';

class App extends React.Component {
	// here add (save) the tasks by pushing them into the tasks object
	constructor() {
		super();

		// binding methods
		this.addTask = this.addTask.bind(this);
		this.state = {
			lists: {}, // for later: how do we 'nest' pieces of state? 
			tasks: {}
		}
	}

	addTask(newTask) {
		console.log('task added', newTask);
	}

	render() {
	  return (
	    <div className="App">
	      <Headline />
	      <TaskList addTask={this.addTask}/>
	    </div>
	  );
	}
}

export default App;
