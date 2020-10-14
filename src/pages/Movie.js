import React from "react";
import { useEffect } from "react";
import MovieDescription from "../Components/MovieDescription";
import { Spinner } from "../Components/Spinner";
import { useInfoMovie } from "../hooks/useInfoMovie";

export const Movie = (props) => {
	const { idmovie } = props.params;

	const { movie, loader } = useInfoMovie({ idmovie });

	if (loader) return <Spinner />;

	return (
		<MovieDescription
			description={movie.Plot}
			Poster={movie.Poster}
			Title={movie.Title}
			Actores={movie.Actors}
			Star={movie.imdbRating}
			Gen={movie.Genre}
			Year={movie.Year}
		/>
	);
};
