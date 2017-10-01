import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
		tileActions: bindActionCreators(tileActions, dispatch),
		heroActions: bindActionCreators(heroActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);