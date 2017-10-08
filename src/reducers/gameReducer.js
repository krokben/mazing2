export default function gameReducer(game = {}, action) {
	switch (action.type) {
		case 'TOGGLE_SHIFT':
			return {
				...game,
				shiftAllowed: !game.shiftAllowed
			};
		case 'ADD_TO_SCORE':
			return {
				...game,
				score: game.score + 1
			};
		default:
			return game;
	}
}