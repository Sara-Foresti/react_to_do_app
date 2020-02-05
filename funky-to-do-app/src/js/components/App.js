import React from 'react';
import Headline from './Headline';
import TaskList from './TaskList';
import AddListForm from './AddListForm';

class App extends React.Component {
	// here add (save) the tasks by pushing them into the tasks object
	constructor() {
		super();

		// binding methods
		this.addList = this.addList.bind(this);
		this.updateListTasks = this.updateListTasks.bind(this);

		//this.makeSomething = this.makeSomething.bind(this);

		// how do we 'nest' pieces of state? 
		// this.state = {
		// 	lists: {}, 
		// 	tasks: {}
		// }

		this.state = {
			lists: {}
		}
	}

	// this will be called inside another function
	// do I need to bind it in the contsructor?
	// seems to be working anyway
	// makeSomething() {
	// 	document.body.style.background = "#9C27B0";
	// }

	addList(newList){
		const lists = {...this.state.lists};
		lists[newList.id] = newList;
		this.setState({lists: lists});
	}

	updateListTasks(newTask, listId) {
		// get copy of the current list
		const list = {...this.state.lists[listId]}
		const lists = {...this.state.lists}
		// get copy of the current list's tasks
		const listTasks = {...list.tasks};
		// add new task in the list tasks object
		listTasks[newTask.id] = newTask;
		// need to add the tasks object to the list
		list.tasks = listTasks;

		lists[listId] = list;

		console.log('the list in addTaskToList: ', list); // list tasks is empty at this stage
		// update list in state
		this.setState({ 
			lists: lists 
		});
	}

	render() {
	  return (
	    <div className="App">
	      <Headline />
	      <AddListForm addList={this.addList} />
      	{/* render lists here */}
      	{
      		Object.keys(this.state.lists)
      			.map(key => {
      				return <TaskList key={key} lists={this.state.lists} listDetails={this.state.lists[key]} updateListTasks={this.updateListTasks}/>
      			})
      	}
	    </div>
	  );
	}
}

export default App;
