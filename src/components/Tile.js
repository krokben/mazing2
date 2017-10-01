import React, { Component } from 'react';
import Hero from './Hero';

export default class Tile extends Component {
	handleClick = () => {
		this.shiftTiles();
		this.props.heroActions.changePosition(this.props.tile);
		this.props.tileActions.changeTileColor(this.props.tile.id);
	};

	shiftTiles() {
		if (this.props.tile.group - this.props.hero.group === 10 || (this.props.tile.group === this.props.hero.group && this.props.hero.position < this.props.tile.id)) {
			this.shiftLeft();
		} else if (this.props.hero.group - this.props.tile.group === 10  || (this.props.tile.group === this.props.hero.group && this.props.hero.position > this.props.tile.id)) {
			this.shiftRight();
		} else if (this.props.tile.group - this.props.hero.group === 1) {
			this.shiftUp();
		} else if (this.props.hero.group - this.props.tile.group === 1) {
			this.shiftDown();
		}
	}

	shiftLeft() {
		let counter = 0;
		const interval = setInterval(() => {
			this.props.tileActions.shiftLeft();
			counter++;
			if (counter === 64) clearInterval(interval);
		}, 1000 / 60);
	}

	shiftRight() {
		let counter = 0;
		const interval = setInterval(() => {
			this.props.tileActions.shiftRight();
			counter++;
			if (counter === 64) clearInterval(interval);
		}, 1000 / 60);
	}

	shiftUp() {
		let counter = 0;
		const interval = setInterval(() => {
			this.props.tileActions.shiftUp();
			counter++;
			if (counter === 64) clearInterval(interval);
		}, 1000 / 60);
	}

	shiftDown() {
		let counter = 0;
		const interval = setInterval(() => {
			this.props.tileActions.shiftDown();
			counter++;
			if (counter === 64) clearInterval(interval);
		}, 1000 / 60);
	}

	render() {
		const style = {
			backgroundColor: this.props.tile.color,
			width: '64px',
			height: '64px',
			boxSizing: 'border-box',
			border: '1px solid darkblue',
			position: 'absolute',
			left: this.props.tile.x,
			top: this.props.tile.y
		};
		
		return (
			<div style={style} onClick={this.handleClick}>
				{
					this.props.tile.id ===
					this.props.hero.position &&
					<Hero hero={this.props.hero} />
				}
				id: {this.props.tile.id}<br />
				grp: {this.props.tile.group}
			</div>
		);
	}
}