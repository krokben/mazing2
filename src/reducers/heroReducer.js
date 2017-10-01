export default function heroReducer(hero = {}, action) {
	switch (action.type) {
		case 'CHANGE_POSITION':
			return {
				...hero,
				position: action.tile.id,
				group: action.tile.group
			};
		default:
			return hero;
	}
}