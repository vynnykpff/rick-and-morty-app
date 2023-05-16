// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import axios from 'axios';

// const API_URL = 'https://rickandmortyapi.com/api';

// export const api = createApi({
// 	reducerPath: 'api',
// 	tagTypes: ['Characters'],
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: API_URL,
// 	}),
// 	endpoints: builder => ({
// 		getCharacters: builder.query({
// 			query: () => '/character',
// 			providesTags: () => [
// 				{
// 					type: 'Characters',
// 				},
// 			],
// 		}),
// 	}),
// });

// export const { useGetCharactersQuery } = api;

const instance = axios.create({
	baseURL: 'https://rickandmortyapi.com/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const charactersApi = {
	getCharacters() {
		return instance.get('/character').then(res => res.data);
	},
};

export const locationsApi = {
	getLocations() {
		return instance.get('/location').then(res => res.data);
	},
};

export const episodesApi = {
	getEpisodes() {
		return instance.get('/episode').then(res => res.data);
	},
};
