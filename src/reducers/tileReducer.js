export default function tileReducer(tiles = [], action) {
	switch (action.type) {
		case 'SHIFT_LEFT':
			return tiles.map(tile => {
				return Object.assign({}, tile, {x: tile.x - 1});
			});
		case 'SHIFT_RIGHT':
			return tiles.map(tile => {
				return Object.assign({}, tile, {x: tile.x + 1});
			});
		case 'SHIFT_UP':
			return tiles.map(tile => {
				return Object.assign({}, tile, {y: tile.y - 1});
			});
		case 'SHIFT_DOWN':
			return tiles.map(tile => {
				return Object.assign({}, tile, {y: tile.y + 1});
			});
		case 'CHANGE_TILE_COLOR':
			return tiles.map((tile) => {
				return tile.id === action.id ?
					Object.assign({}, tile, {color: '#fff'}) : tile
			});
		default:
			return tiles;
	}
}