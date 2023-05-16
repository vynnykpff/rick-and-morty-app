import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { episodesApi } from '../services/api';

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const requestEpisodes = createAsyncThunk(
	'episodes/requestEpisodes',
	async function (_, { rejectWithValue }) {
		try {
			const response = await episodesApi.getEpisodes();
			createAndCheckError(response, "Can't get episodes. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const locationsSlice = createSlice({
	name: 'episodes',
	initialState: {
		arrayEpisodes: [],
		status: null,
		error: null,
	},
	extraReducers: {
		[requestEpisodes.pending]: state => {
			state.status = 'loading';
			state.error = null;
		},
		[requestEpisodes.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.arrayEpisodes = action.payload;
		},
		[requestEpisodes.rejected]: state => {
			state.error = 'rejected';
		},
	},
});

// export const { getCharacters } = charactersSlice.actions;

export default locationsSlice.reducer;
