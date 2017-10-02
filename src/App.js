import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gameActions from './actions/gameActions';
import tileActions from './actions/tileActions';
import heroActions from './actions/heroActions';
import Board from './components/Board';

class App extends Component {
	render() {
		return (
			<div>
				<Board
					tiles={this.props.tiles}
					tileActions={this.props.tileActions}
					hero={this.props.hero}
					heroActions={this.props.heroActions}
					game={this.props.game}
					gameActions={this.props.gameActions}
				/>
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