import axios from "axios";

export const BASE_URL = `https://api.themoviedb.org/3/`;
export const BASE_IMG_URL = `https://image.tmdb.org/t/p/w500`;
export const API_KEY = `3dae11a96d00f5dfacaa5825dad50350`;

export const api = {
	getPopularMovies: (page) =>
		axios.get(BASE_URL + "/movie/popular", {
			params: {
				api_key: API_KEY,
				page: page,
			},
		}),

	getTopRatedMovies: (page) =>
		axios.get(BASE_URL + "/movie/top_rated", {
			params: {
				api_key: API_KEY,
				page: page,
			},
		}),
	getUpcomingMovies: (page) =>
		axios.get(BASE_URL + "/movie/upcoming", {
			params: {
				api_key: API_KEY,
				page: page,
			},
		}),
	getSinglePageMovies: (id) =>
		axios.get(BASE_URL + `/movie/${id}`, {
			params: {
				api_key: API_KEY,
			},
		}),
	getActorsMovies: (id) =>
		axios.get(BASE_URL + `movie/${id}/credits`, {
			params: {
				api_key: API_KEY,
			},
		}),
	getSimilarMovie: (id) =>
		axios.get(`${BASE_URL}/movie/${id}/similar`, {
			params: {
				api_key: API_KEY,
			},
		}),

	getPersonActorsMovies: (id) =>
		axios.get(`${BASE_URL}/person/${id}/movie_credits`, {
			params: {
				api_key: API_KEY,
			},
		}),
	getPerson: (id) =>
		axios.get(`${BASE_URL}/person/${id}`, {
			params: {
				api_key: API_KEY,
			},
		}),
};
