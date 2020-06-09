import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
	
	state = {
		label: ''
	};

	onLabelChange = (e) => {
		const text = e.target.value;
		this.setState({
			label: text
		});
		this.props.onSearchInput(text);
	};

	render() {
		return (
			<input type="text"
					className="form-control search-input"
					onChange={this.onLabelChange}
					placeholder="type to search"
					value={this.state.label}
					/>
	)};
};
