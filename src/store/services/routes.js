const routes = {
	homepage: '/rick-and-morty-app',
	characters: 'characters/:id',
	locations: 'locations/:id',
	episodes: 'episodes/:id',
	favorites: 'favorites',
	notfound: '*',
};

export const {
	homepage,
	characters,
	episodes,
	favorites,
	locations,
	notfound,
} = routes;
