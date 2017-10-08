const gameActions = {
	toggleShift() {
		return {
			type: 'TOGGLE_SHIFT'
		};
	},
	addToScore() {
		return {
			type: 'ADD_TO_SCORE'
		};
	}
};

export default gameActions;