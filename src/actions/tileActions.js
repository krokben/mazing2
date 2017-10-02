const tileActions = {
	shiftLeft() {
		return {
			type: 'SHIFT_LEFT'
		};
	},
	shiftRight() {
		return {
			type: 'SHIFT_RIGHT'
		};
	},
	shiftUp() {
		return {
			type: 'SHIFT_UP'
		};
	},
	shiftDown() {
		return {
			type: 'SHIFT_DOWN'
		};
	},
	changeTileColor(id) {
		return {
			type: 'CHANGE_TILE_COLOR',
			id
		};
	},
	setClickable(id) {
		return {
			type: 'SET_CLICKABLE',
			id
		};
	},
	setUnclickable(id) {
		return {
			type: 'SET_UNCLICKABLE',
			id
		};
	}
};

export default tileActions;