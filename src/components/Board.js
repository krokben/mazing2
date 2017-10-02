import React, { Component } from 'react';
import Tile from './Tile';

export default class Board extends Component {
	render() {
		const style = {
			width: '320px',
			height: '320px',
			margin: 'auto',
			marginTop: '200px',
			fontFamily: 'Arial',
			textAlign: 'right',
			border: '1px solid #000',
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