import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { charactersApi } from '../services/api';

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const requestCharacters = createAsyncThunk(
	'characters/requestCharacters',
	async function (_, { rejectWithValue }) {
		try {
			const response = await charactersApi.getCharacters();
			createAndCheckError(response, "Can't get characters. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const charactersSlice = createSlice({
	name: 'characters',
	initialState: {
		arrayCharacters: [],
		status: null,
		error: null,
	},
	extraReducers: {
		[requestCharacters.pending]: state => {
			state.status = 'loading';
			state.error = null;
		},
		[requestCharacters.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.arrayCharacters = action.payload;
		},
		[requestCharacters.rejected]: state => {
			state.error = 'rejected';
		},
	},
});

// export const { getCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
