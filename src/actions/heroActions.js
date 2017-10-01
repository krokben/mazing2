const heroActions = {
	changePosition(tile) {
		return {
			type: 'CHANGE_POSITION',
			tile
		};
	}
};

export default heroActions;