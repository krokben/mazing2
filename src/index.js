import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
	game: {
		shiftAllowed: true
	},
	hero: {
		position: 1,
		color: '#34495e',
		group: 1
	},
	tiles: [
		{id:   1, x:   0, y:   0, color: 'lightblue', group:  1},
		{id:   2, x:  64, y:   0, color: 'lightblue', group:  1},
		{id:   3, x: 128, y:   0, color: 'lightblue', group:  1},
		{id:   4, x: 192, y:   0, color: 'lightblue', group:  1},
		{id:   5, x: 256, y:   0, color: 'lightblue', group:  1},
		{id:   6, x:   0, y:  64, color: 'lightblue', group:  2},
		{id:   7, x:  64, y:  64, color: 'lightblue', group:  2},
		{id:   8, x: 128, y:  64, color: 'lightblue', group:  2},
		{id:   9, x: 192, y:  64, color: 'lightblue', group:  2},
		{id:  10, x: 256, y:  64, color: 'lightblue', group:  2},
		{id:  11, x:   0, y: 128, color: 'lightblue', group:  3},
		{id:  12, x:  64, y: 128, color: 'lightblue', group:  3},
		{id:  13, x: 128, y: 128, color: 'lightblue', group:  3},
		{id:  14, x: 192, y: 128, color: 'lightblue', group:  3},
		{id:  15, x: 256, y: 128, color: 'lightblue', group:  3},
		{id:  16, x:   0, y: 192, color: 'lightblue', group:  4},
		{id:  17, x:  64, y: 192, color: 'lightblue', group:  4},
		{id:  18, x: 128, y: 192, color: 'lightblue', group:  4},
		{id:  19, x: 192, y: 192, color: 'lightblue', group:  4},
		{id:  20, x: 256, y: 192, color: 'lightblue', group:  4},
		{id:  21, x:   0, y: 256, color: 'lightblue', group:  5},
		{id:  22, x:  64, y: 256, color: 'lightblue', group:  5},
		{id:  23, x: 128, y: 256, color: 'lightblue', group:  5},
		{id:  24, x: 192, y: 256, color: 'lightblue', group:  5},
		{id:  25, x: 256, y: 256, color: 'lightblue', group:  5},
		{id:  26, x: 320, y:   0, color: 'lightblue', group: 11},
		{id:  27, x: 384, y:   0, color: 'lightblue', group: 11},
		{id:  28, x: 448, y:   0, color: 'lightblue', group: 11},
		{id:  29, x: 512, y:   0, color: 'lightblue', group: 11},
		{id:  30, x: 576, y:   0, color: 'lightblue', group: 11},
		{id:  31, x: 320, y:  64, color: 'lightblue', group: 12},
		{id:  32, x: 384, y:  64, color: 'lightblue', group: 12},
		{id:  33, x: 448, y:  64, color: 'lightblue', group: 12},
		{id:  34, x: 512, y:  64, color: 'lightblue', group: 12},
		{id:  35, x: 576, y:  64, color: 'lightblue', group: 12},
		{id:  36, x: 320, y: 128, color: 'lightblue', group: 13},
		{id:  37, x: 384, y: 128, color: 'lightblue', group: 13},
		{id:  38, x: 448, y: 128, color: 'lightblue', group: 13},
		{id:  39, x: 512, y: 128, color: 'lightblue', group: 13},
		{id:  40, x: 576, y: 128, color: 'lightblue', group: 13},
		{id:  41, x: 320, y: 192, color: 'lightblue', group: 14},
		{id:  42, x: 384, y: 192, color: 'lightblue', group: 14},
		{id:  43, x: 448, y: 192, color: 'lightblue', group: 14},
		{id:  44, x: 512, y: 192, color: 'lightblue', group: 14},
		{id:  45, x: 576, y: 192, color: 'lightblue', group: 14},
		{id:  46, x: 320, y: 256, color: 'lightblue', group: 15},
		{id:  47, x: 384, y: 256, color: 'lightblue', group: 15},
		{id:  48, x: 448, y: 256, color: 'lightblue', group: 15},
		{id:  49, x: 512, y: 256, color: 'lightblue', group: 15},
		{id:  50, x: 576, y: 256, color: 'lightblue', group: 15},
		{id:  51, x:   0, y: 320, color: 'lightblue', group:  6},
		{id:  52, x:  64, y: 320, color: 'lightblue', group:  6},
		{id:  53, x: 128, y: 320, color: 'lightblue', group:  6},
		{id:  54, x: 192, y: 320, color: 'lightblue', group:  6},
		{id:  55, x: 256, y: 320, color: 'lightblue', group:  6},
		{id:  56, x:   0, y: 384, color: 'lightblue', group:  7},
		{id:  57, x:  64, y: 384, color: 'lightblue', group:  7},
		{id:  58, x: 128, y: 384, color: 'lightblue', group:  7},
		{id:  59, x: 192, y: 384, color: 'lightblue', group:  7},
		{id:  60, x: 256, y: 384, color: 'lightblue', group:  7},
		{id:  61, x:   0, y: 448, color: 'lightblue', group:  8},
		{id:  62, x:  64, y: 448, color: 'lightblue', group:  8},
		{id:  63, x: 128, y: 448, color: 'lightblue', group:  8},
		{id:  64, x: 192, y: 448, color: 'lightblue', group:  8},
		{id:  65, x: 256, y: 448, color: 'lightblue', group:  8},
		{id:  66, x:   0, y: 512, color: 'lightblue', group:  9},
		{id:  67, x:  64, y: 512, color: 'lightblue', group:  9},
		{id:  68, x: 128, y: 512, color: 'lightblue', group:  9},
		{id:  69, x: 192, y: 512, color: 'lightblue', group:  9},
		{id:  70, x: 256, y: 512, color: 'lightblue', group:  9},
		{id:  71, x:   0, y: 576, color: 'lightblue', group: 10},
		{id:  72, x:  64, y: 576, color: 'lightblue', group: 10},
		{id:  73, x: 128, y: 576, color: 'lightblue', group: 10},
		{id:  74, x: 192, y: 576, color: 'lightblue', group: 10},
		{id:  75, x: 256, y: 576, color: 'lightblue', group: 10},
		{id:  76, x: 320, y: 320, color: 'lightblue', group: 16},
		{id:  77, x: 384, y: 320, color: 'lightblue', group: 16},
		{id:  78, x: 448, y: 320, color: 'lightblue', group: 16},
		{id:  79, x: 512, y: 320, color: 'lightblue', group: 16},
		{id:  80, x: 576, y: 320, color: 'lightblue', group: 16},
		{id:  81, x: 320, y: 384, color: 'lightblue', group: 17},
		{id:  82, x: 384, y: 384, color: 'lightblue', group: 17},
		{id:  83, x: 448, y: 384, color: 'lightblue', group: 17},
		{id:  84, x: 512, y: 384, color: 'lightblue', group: 17},
		{id:  85, x: 576, y: 384, color: 'lightblue', group: 17},
		{id:  86, x: 320, y: 448, color: 'lightblue', group: 18},
		{id:  87, x: 384, y: 448, color: 'lightblue', group: 18},
		{id:  88, x: 448, y: 448, color: 'lightblue', group: 18},
		{id:  89, x: 512, y: 448, color: 'lightblue', group: 18},
		{id:  90, x: 576, y: 448, color: 'lightblue', group: 18},
		{id:  91, x: 320, y: 512, color: 'lightblue', group: 19},
		{id:  92, x: 384, y: 512, color: 'lightblue', group: 19},
		{id:  93, x: 448, y: 512, color: 'lightblue', group: 19},
		{id:  94, x: 512, y: 512, color: 'lightblue', group: 19},
		{id:  95, x: 576, y: 512, color: 'lightblue', group: 19},
		{id:  96, x: 320, y: 576, color: 'lightblue', group: 20},
		{id:  97, x: 384, y: 576, color: 'lightblue', group: 20},
		{id:  98, x: 448, y: 576, color: 'lightblue', group: 20},
		{id:  99, x: 512, y: 576, color: 'lightblue', group: 20},
		{id: 100, x: 576, y: 576, color: 'lightblue', group: 20}
	]
};

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
