import React, { Component } from 'react';

export default class Hero extends Component {
	render() {
		const style = {
			width: '63px',
			height: '63px',
			backgroundColor: this.props.hero.color,
			borderRadius: '50%',
			color: '#fff',
			textAlign: 'center'
		};

		return (
			<div style={style}>
				{this.props.hero.group}
			</div>
		);
	}
}