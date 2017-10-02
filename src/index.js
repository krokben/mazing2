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
		{id:   1, x:   0, y:   0, color:   '#ecf0f1', group:  1, clickable: false},
		{id:   2, x:  64, y:   0, color: 'lightpink', group:  1, clickable: false},
		{id:   3, x: 128, y:   0, color: 'lightblue', group:  1, clickable: false},
		{id:   4, x: 192, y:   0, color: 'lightblue', group:  1, clickable: false},
		{id:   5, x: 256, y:   0, color: 'lightblue', group:  1, clickable: false},
		{id:   6, x:   0, y:  64, color: 'lightblue', group:  2, clickable: false},
		{id:   7, x:  64, y:  64, color: 'lightpink', group:  2, clickable: false},
		{id:   8, x: 128, y:  64, color: 'lightpink', group:  2, clickable: false},
		{id:   9, x: 192, y:  64, color: 'lightpink', group:  2, clickable: false},
		{id:  10, x: 256, y:  64, color: 'lightblue', group:  2, clickable: false},
		{id:  11, x:   0, y: 128, color: 'lightblue', group:  3, clickable: false},
		{id:  12, x:  64, y: 128, color: 'lightblue', group:  3, clickable: false},
		{id:  13, x: 128, y: 128, color: 'lightblue', group:  3, clickable: false},
		{id:  14, x: 192, y: 128, color: 'lightpink', group:  3, clickable: false},
		{id:  15, x: 256, y: 128, color: 'lightpink', group:  3, clickable: false},
		{id:  16, x:   0, y: 192, color: 'lightblue', group:  4, clickable: false},
		{id:  17, x:  64, y: 192, color: 'lightblue', group:  4, clickable: false},
		{id:  18, x: 128, y: 192, color: 'lightblue', group:  4, clickable: false},
		{id:  19, x: 192, y: 192, color: 'lightpink', group:  4, clickable: false},
		{id:  20, x: 256, y: 192, color: 'lightpink', group:  4, clickable: false},
		{id:  21, x:   0, y: 256, color: 'lightblue', group:  5, clickable: false},
		{id:  22, x:  64, y: 256, color: 'lightblue', group:  5, clickable: false},
		{id:  23, x: 128, y: 256, color: 'lightblue', group:  5, clickable: false},
		{id:  24, x: 192, y: 256, color: 'lightpink', group:  5, clickable: false},
		{id:  25, x: 256, y: 256, color: 'lightpink', group:  5, clickable: false},
		{id:  26, x: 320, y:   0, color: 'lightblue', group: 11, clickable: false},
		{id:  27, x: 384, y:   0, color: 'lightblue', group: 11, clickable: false},
		{id:  28, x: 448, y:   0, color: 'lightblue', group: 11, clickable: false},
		{id:  29, x: 512, y:   0, color: 'lightblue', group: 11, clickable: false},
		{id:  30, x: 576, y:   0, color: 'lightblue', group: 11, clickable: false},
		{id:  31, x: 320, y:  64, color: 'lightblue', group: 12, clickable: false},
		{id:  32, x: 384, y:  64, color: 'lightblue', group: 12, clickable: false},
		{id:  33, x: 448, y:  64, color: 'lightblue', group: 12, clickable: false},
		{id:  34, x: 512, y:  64, color: 'lightblue', group: 12, clickable: false},
		{id:  35, x: 576, y:  64, color: 'lightblue', group: 12, clickable: false},
		{id:  36, x: 320, y: 128, color: 'lightblue', group: 13, clickable: false},
		{id:  37, x: 384, y: 128, color: 'lightblue', group: 13, clickable: false},
		{id:  38, x: 448, y: 128, color: 'lightblue', group: 13, clickable: false},
		{id:  39, x: 512, y: 128, color: 'lightblue', group: 13, clickable: false},
		{id:  40, x: 576, y: 128, color: 'lightblue', group: 13, clickable: false},
		{id:  41, x: 320, y: 192, color: 'lightpink', group: 14, clickable: false},
		{id:  42, x: 384, y: 192, color: 'lightblue', group: 14, clickable: false},
		{id:  43, x: 448, y: 192, color: 'lightblue', group: 14, clickable: false},
		{id:  44, x: 512, y: 192, color: 'lightblue', group: 14, clickable: false},
		{id:  45, x: 576, y: 192, color: 'lightblue', group: 14, clickable: false},
		{id:  46, x: 320, y: 256, color: 'lightpink', group: 15, clickable: false},
		{id:  47, x: 384, y: 256, color: 'lightblue', group: 15, clickable: false},
		{id:  48, x: 448, y: 256, color: 'lightblue', group: 15, clickable: false},
		{id:  49, x: 512, y: 256, color: 'lightblue', group: 15, clickable: false},
		{id:  50, x: 576, y: 256, color: 'lightblue', group: 15, clickable: false},
		{id:  51, x:   0, y: 320, color: 'lightblue', group:  6, clickable: false},
		{id:  52, x:  64, y: 320, color: 'lightblue', group:  6, clickable: false},
		{id:  53, x: 128, y: 320, color: 'lightblue', group:  6, clickable: false},
		{id:  54, x: 192, y: 320, color: 'lightblue', group:  6, clickable: false},
		{id:  55, x: 256, y: 320, color: 'lightblue', group:  6, clickable: false},
		{id:  56, x:   0, y: 384, color: 'lightblue', group:  7, clickable: false},
		{id:  57, x:  64, y: 384, color: 'lightblue', group:  7, clickable: false},
		{id:  58, x: 128, y: 384, color: 'lightblue', group:  7, clickable: false},
		{id:  59, x: 192, y: 384, color: 'lightblue', group:  7, clickable: false},
		{id:  60, x: 256, y: 384, color: 'lightblue', group:  7, clickable: false},
		{id:  61, x:   0, y: 448, color: 'lightblue', group:  8, clickable: false},
		{id:  62, x:  64, y: 448, color: 'lightblue', group:  8, clickable: false},
		{id:  63, x: 128, y: 448, color: 'lightblue', group:  8, clickable: false},
		{id:  64, x: 192, y: 448, color: 'lightblue', group:  8, clickable: false},
		{id:  65, x: 256, y: 448, color: 'lightblue', group:  8, clickable: false},
		{id:  66, x:   0, y: 512, color: 'lightblue', group:  9, clickable: false},
		{id:  67, x:  64, y: 512, color: 'lightblue', group:  9, clickable: false},
		{id:  68, x: 128, y: 512, color: 'lightblue', group:  9, clickable: false},
		{id:  69, x: 192, y: 512, color: 'lightblue', group:  9, clickable: false},
		{id:  70, x: 256, y: 512, color: 'lightblue', group:  9, clickable: false},
		{id:  71, x:   0, y: 576, color: 'lightblue', group: 10, clickable: false},
		{id:  72, x:  64, y: 576, color: 'lightblue', group: 10, clickable: false},
		{id:  73, x: 128, y: 576, color: 'lightblue', group: 10, clickable: false},
		{id:  74, x: 192, y: 576, color: 'lightblue', group: 10, clickable: false},
		{id:  75, x: 256, y: 576, color: 'lightblue', group: 10, clickable: false},
		{id:  76, x: 320, y: 320, color: 'lightblue', group: 16, clickable: false},
		{id:  77, x: 384, y: 320, color: 'lightblue', group: 16, clickable: false},
		{id:  78, x: 448, y: 320, color: 'lightblue', group: 16, clickable: false},
		{id:  79, x: 512, y: 320, color: 'lightblue', group: 16, clickable: false},
		{id:  80, x: 576, y: 320, color: 'lightblue', group: 16, clickable: false},
		{id:  81, x: 320, y: 384, color: 'lightblue', group: 17, clickable: false},
		{id:  82, x: 384, y: 384, color: 'lightblue', group: 17, clickable: false},
		{id:  83, x: 448, y: 384, color: 'lightblue', group: 17, clickable: false},
		{id:  84, x: 512, y: 384, color: 'lightblue', group: 17, clickable: false},
		{id:  85, x: 576, y: 384, color: 'lightblue', group: 17, clickable: false},
		{id:  86, x: 320, y: 448, color: 'lightblue', group: 18, clickable: false},
		{id:  87, x: 384, y: 448, color: 'lightblue', group: 18, clickable: false},
		{id:  88, x: 448, y: 448, color: 'lightblue', group: 18, clickable: false},
		{id:  89, x: 512, y: 448, color: 'lightblue', group: 18, clickable: false},
		{id:  90, x: 576, y: 448, color: 'lightblue', group: 18, clickable: false},
		{id:  91, x: 320, y: 512, color: 'lightblue', group: 19, clickable: false},
		{id:  92, x: 384, y: 512, color: 'lightblue', group: 19, clickable: false},
		{id:  93, x: 448, y: 512, color: 'lightblue', group: 19, clickable: false},
		{id:  94, x: 512, y: 512, color: 'lightblue', group: 19, clickable: false},
		{id:  95, x: 576, y: 512, color: 'lightblue', group: 19, clickable: false},
		{id:  96, x: 320, y: 576, color: 'lightblue', group: 20, clickable: false},
		{id:  97, x: 384, y: 576, color: 'lightblue', group: 20, clickable: false},
		{id:  98, x: 448, y: 576, color: 'lightblue', group: 20, clickable: false},
		{id:  99, x: 512, y: 576, color: 'lightblue', group: 20, clickable: false},
		{id: 100, x: 576, y: 576, color: 'lightblue', group: 20, clickable: false}
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
