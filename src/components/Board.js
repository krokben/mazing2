import React, { Component } from 'react';
import Tile from './Tile';

export default class Board extends Component {
	render() {
		const style = {
			width: '320px',
			height: '320px',
			marginLeft: '64px',
			fontFamily: 'Arial',
			textAlign: 'right',
			position: 'relative'
		};

		return (
			<div style={style}>
				{
					this.props.tiles.map((tile, i) => {
						return (
							<Tile
								key={`tile-${i}`}
								tile={tile}
								tiles={this.props.tiles}
								tileActions={this.props.tileActions}
								hero={this.props.hero}
								heroActions={this.props.heroActions}
								game={this.props.game}
								gameActions={this.props.gameActions}
							/>
						);
					})
				}
			</div>
		);
	}
}