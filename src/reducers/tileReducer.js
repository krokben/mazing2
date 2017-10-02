export default function tileReducer(tiles = [], action) {
	switch (action.type) {
		case 'SHIFT_LEFT':
			if (tiles[25].x > 0) {
				return tiles.map(tile => {
					return Object.assign({}, tile, {x: tile.x - 1});
				});
			}
			return tiles;
		case 'SHIFT_RIGHT':
			if (tiles[0].x !== 0) {
				return tiles.map(tile => {
					return Object.assign({}, tile, {x: tile.x + 1});
				});
			}
			return tiles;
		case 'SHIFT_UP':
			if (tiles[70].y !== 256) {
				return tiles.map(tile => {
					return Object.assign({}, tile, {y: tile.y - 1});
				});
			}
			return tiles;
		case 'SHIFT_DOWN':
			if (tiles[0].y < 0) {
				return tiles.map(tile => {
					return Object.assign({}, tile, {y: tile.y + 1});
				});
			}
			return tiles;
		case 'CHANGE_TILE_COLOR':
			return tiles.map((tile) => {
				return tile.id === action.id ?
					Object.assign({}, tile, {color: '#fff'}) : tile
			});
		case 'SET_CLICKABLE':
			return tiles.map((tile) => {
				return tile.id === action.id ?
					Object.assign({}, tile, {clickable: true}) :
					Object.assign({}, tile, {clickable: false})
			});
		case 'SET_UNCLICKABLE':
			return tiles.map((tile) => {
				return tile.id === action.id ?
					Object.assign({}, tile, {clickable: false}) : tile
			});
		default:
			return tiles;
	}
}