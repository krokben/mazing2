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
					Object.assign({}, tile, {color: '#ecf0f1'}) : tile
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
		case 'SET_CLICKABLES':
			return tiles.map((tile) => {
				return ((tile.group === action.hero.group &&
					(tile.id - action.hero.position === 1 || action.hero.position - tile.id === 1)) ||
					((tile.group - action.hero.group === 1 || action.hero.group - tile.group === 1) &&
					(tile.id - action.hero.position === 5 || action.hero.position - tile.id === 5 || tile.id - action.hero.position === 30 || action.hero.position - tile.id === 30)) ||
					((tile.group - action.hero.group === 10 || action.hero.group - tile.group === 10) &&
					(tile.id - action.hero.position === 21 || action.hero.position - tile.id === 21))) &&
					(tile.color === action.hero.color || action.hero.color === '#34495e') ?
					Object.assign({}, tile, {clickable: true}) :
					Object.assign({}, tile, {clickable: false})
			});
		default:
			return tiles;
	}
}