import React, { Component } from 'react';
import Hero from './Hero';

export default class Tile extends Component {
	handleClick = () => {
		this.props.tileActions.setClickables(this.props.hero);
		setTimeout(() => {
			if (this.props.tile.clickable) {
				this.shiftTiles();
				this.props.heroActions.changePosition(this.props.tile);
				this.props.heroActions.changeColor(this.props.tile.color);
				this.props.tileActions.changeTileColor(this.props.tile.id);
				this.props.gameActions.addToScore();
			}
		}, 1);
	};

	shiftTiles() {
		if (this.props.tiles[25].x > 0 && (this.props.tile.group - this.props.hero.group === 10 || (this.props.tile.group === this.props.hero.group && this.props.hero.position < this.props.tile.id))) {
			this.shiftLeft();
		} else if (this.props.tiles[0].x !== 0 && (this.props.hero.group - this.props.tile.group === 10  || (this.props.tile.group === this.props.hero.group && this.props.hero.position > this.props.tile.id))) {
			this.shiftRight();
		} else if (this.props.tiles[70].y !== 256 && (this.props.tile.group - this.props.hero.group === 1)) {
			this.shiftUp();
		} else if (this.props.tiles[0].y < 0 && (this.props.hero.group - this.props.tile.group === 1)) {
			this.shiftDown();
		}
	}

	shiftLeft() {
		this.props.gameActions.toggleShift(); // false
		let counter = 0;
		const interval = setInterval(() => {
			this.props.tileActions.shiftLeft();
			counter++;
			if (counter === 64) {
				clearInterval(interval);			}
		}, 1);
	}

	shiftRight() {
		this.props.gameActions.toggleShift(); // false
		let counter = 0;
		const interval = setInterval(() => {
			this.props.tileActions.shiftRight();
			counter++;
			if (counter === 64) {
				clearInterval(interval);
			}
		}, 1);
	}

	shiftUp() {
		this.props.gameActions.toggleShift(); // false
		let counter = 0;
		const interval = setInterval(() => {
			this.props.tileActions.shiftUp();
			counter++;
			if (counter === 64) {
				clearInterval(interval);
			}
		}, 1);
	}

	shiftDown() {
		this.props.gameActions.toggleShift(); // false
		let counter = 0;
		const interval = setInterval(() => {
			this.props.tileActions.shiftDown();
			counter++;
			if (counter === 64) {
				clearInterval(interval);
			}
		}, 1);
	}

	render() {
		const style = {
			backgroundColor: this.props.tile.color,
			width: '64px',
			height: '64px',
			boxSizing: 'border-box',
			border: '1px solid #fff',
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
			</div>
		);
	}
}