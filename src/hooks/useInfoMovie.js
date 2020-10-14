import React, { useEffect, useState } from "react";
import { GetMovieById } from "../services/GetMovieById";
export const useInfoMovie = ({ idmovie }) => {
	const [movie, setMovie] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		GetMovieById({ idmovie }).then((res) => {
			console.log(res.data);
			setMovie(res.data);
			setLoader(false);
		});
	}, [idmovie]);

	return { movie, loader };
};
