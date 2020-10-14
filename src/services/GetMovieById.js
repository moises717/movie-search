import axios from "axios";
import { GET_MOVIE_BY_ID } from "./settings";

export const GetMovieById = async ({ idmovie }) => {
	const baseurl = GET_MOVIE_BY_ID + idmovie;

	const response = await axios.get(baseurl);

	const data = response;

	return data;
};
