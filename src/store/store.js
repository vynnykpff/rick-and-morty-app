import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/theme.slice';
import charactersReducer from './characters/characters.slice';
import locationsReducer from './locations/locations.slice';
import episodesReducer from './episodes/episodes.slice';
import totalActionsReducer from './total-actions/totalActions.slice';

const reducers = combineReducers({
	theme: themeReducer,
	characters: charactersReducer,
	locations: locationsReducer,
	episodes: episodesReducer,
	actions: totalActionsReducer,
});

export const store = configureStore({
	reducer: reducers,
});
