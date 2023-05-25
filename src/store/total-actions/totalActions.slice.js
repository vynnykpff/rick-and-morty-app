import { createSlice } from '@reduxjs/toolkit';

const totalActionsSlice = createSlice({
	name: 'actions',
	initialState: {
		action: 1,
	},
	reducers: {
		getTotalActions: state => {
			state.action += 1;
		},
	},
});

export const { getTotalActions } = totalActionsSlice.actions;
export default totalActionsSlice.reducer;
