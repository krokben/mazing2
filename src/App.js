import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gameActions from './actions/gameActions';
import tileActions from './actions/tileActions';
import heroActions from './actions/heroActions';
import Board from './components/Board';

class App extends Component {
	render() {
		const styles = {
			main: {
				backgroundColor: '#fff'
			},
			score: {
				margin: 0,
				color: '#000',
				fontSize: '36px',
				position: 'absolute',
				top: '15px',
				left: '15px',
				zIndex: 2
			},
			overlayInner: {
				backgroundColor: '#fff',
				position: 'absolute',
				top: 0,
				right: 0,
				left: 0,
				bottom: 0,
				zIndex: 1
			},
			overlayInnerTop: {
				backgroundColor: '#fff',
				position: 'absolute',
				top: 0,
				right: 0,
				left: 0,
				bottom: '100%',
				zIndex: 1
			},
			overlayTop: {
				position: 'relative',
				width: '705px',
				height: '64px',
			},
			overlayBottom: {
				position: 'relative',
				width: '705px',
				height: '320px'
			},
			overLayRight: {
				position: 'relative',
				width: '320px',
				height: '320px'
			}
		};

		return (
			<div style={styles.main}>
				<div style={styles.score}>{this.props.game.score} / {this.props.game.maxScore}</div>
				<div style={styles.overlayTop}>
					<div style={styles.overlayInnerTop}></div>
				</div>
				<Board
					tiles={this.props.tiles}
					tileActions={this.props.tileActions}
					hero={this.props.hero}
					heroActions={this.props.heroActions}
					game={this.props.game}
					gameActions={this.props.gameActions}
				/>
				<div style={styles.overlayBottom}>
					<div style={styles.overlayInner}></div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		gameActions: bindActionCreators(gameActions, dispatch),
		tileActions: bindActionCreators(tileActions, dispatch),
		heroActions: bindActionCreators(heroActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);