const heroActions = {
	changePosition(tile) {
		return {
			type: 'CHANGE_POSITION',
			tile
		};
	},
	changeColor(color) {
		return {
			type: 'CHANGE_COLOR',
			color
		};
	}
};

export default heroActions;