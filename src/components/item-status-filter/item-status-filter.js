import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	state = {
		clNameButtonAll: "btn btn-info",
		clNameButtonActive: "btn btn-outline-secondary",
		clNameButtonDone: "btn btn-outline-secondary"
	}

	onClickAll = () => {
		this.setState({
			clNameButtonAll: "btn btn-info",
			clNameButtonActive: "btn btn-outline-secondary",
			clNameButtonDone: "btn btn-outline-secondary"
		});
		this.props.onFilter('All');
	}

	onClickActive = () => {
		this.setState({
			clNameButtonAll: "btn btn-outline-secondary",
			clNameButtonActive: "btn btn-info",
			clNameButtonDone: "btn btn-outline-secondary"
		});
		this.props.onFilter('Active');
	}
	onClickDone = () => {
		this.setState({
			clNameButtonAll: "btn btn-outline-secondary",
			clNameButtonActive: "btn btn-outline-secondary",
			clNameButtonDone: "btn btn-info"
		});
		this.props.onFilter('Done');
	}
	
	render() {

		return (
			<form className="btn-group">
			  <button type="button"
					  className={this.state.clNameButtonAll}
					  onClick={this.onClickAll}
					  >All</button>
			  <button type="button"
					  className={this.state.clNameButtonActive}
					  onClick={this.onClickActive}
					  >Active</button>
			  <button type="button"
					  className={this.state.clNameButtonDone}
					  onClick={this.onClickDone}
					  >Done</button>
			</form>
		);		
	};
};

