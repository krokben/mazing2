export default function gameReducer(game = {}, action) {
	switch (action.type) {
		case 'TOGGLE_SHIFT':
			return {
				...game,
				shiftAllowed: !game.shiftAllowed
			};
		default:
			return game;
	}
}