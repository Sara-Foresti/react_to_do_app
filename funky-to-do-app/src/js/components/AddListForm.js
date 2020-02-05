import React from 'react';

class AddListForm extends React.Component {
	constructor() {
		super();
    this.title = React.createRef();

    this.createList = this.createList.bind(this);
	}

	createList(ev) {
		ev.preventDefault();

		const newList = {
			id: Date.now(),
			title: this.title.current.value,
			tasks: {}
		}

		this.props.addList(newList);
	}

	render() {
		return(
			<div className="list-form">
				<h2>Create a tasks list</h2>
				<form className="add-list" onSubmit={this.createList}>
					<input ref={this.title} type="text" name="title" placeholder="Name your list"/>
					
					<button type="submit">Create List</button>
				</form>
			</div>
		)
	}
}

export default AddListForm;