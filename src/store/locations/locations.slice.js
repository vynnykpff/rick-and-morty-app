import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { locationsApi } from '../services/api';

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const requestLocations = createAsyncThunk(
	'locations/requestLocations',
	async function (_, { rejectWithValue }) {
		try {
			const response = await locationsApi.getLocations();
			createAndCheckError(response, "Can't get locations. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const locationsSlice = createSlice({
	name: 'locations',
	initialState: {
		arrayLocations: [],
		status: null,
		error: null,
	},
	extraReducers: {
		[requestLocations.pending]: state => {
			state.status = 'loading';
			state.error = null;
		},
		[requestLocations.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.arrayLocations = action.payload;
		},
		[requestLocations.rejected]: state => {
			state.error = 'rejected';
		},
	},
});

// export const { getCharacters } = charactersSlice.actions;

export default locationsSlice.reducer;
