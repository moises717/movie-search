import React, { useEffect, useState, useCallback } from "react";
import { GetMoviesInfo } from "../services/GetMoviesInfo";

const INITIAL_PAGE = 1;

export function useMovie() {
	const [movie, setmovie] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingNextPage, setLoadingNextPage] = useState(false);
	const [page, setPage] = useState(INITIAL_PAGE);
	const [empty, setEmpty] = useState(false);
	const [keyword, setKeyword] = useState(
		() => localStorage.getItem("ultimaBusqueda") || ""
	);

	const [busqueda, setBusqueda] = useState(
		() => localStorage.getItem("ultimaBusqueda") || ""
	);

	useEffect(() => {
		if (keyword === "") {
			const lastkey = localStorage.getItem("ultimaBusqueda");
			if (lastkey) {
				setBusqueda(lastkey);
			}
		} else {
			localStorage.setItem("ultimaBusqueda", busqueda);
		}
		setmovie([]);
		setLoadingNextPage(false);
		setLoading(true);

		GetMoviesInfo({ busqueda }).then((res) => {
			if (res !== "False") {
				setEmpty(false);

				setmovie(res.data.Search);
			} else {
				setEmpty(true);
			}

			setLoading(false);
		});
	}, [busqueda]);

	useEffect(() => {
		if (page === INITIAL_PAGE) return;
		setLoadingNextPage(true);

		GetMoviesInfo({ busqueda, page }).then((res) => {
			if (res !== "False") {
				if (page !== res.data.totalResults) {
					setmovie((prevMovie) => prevMovie.concat(res.data.Search));
				}
			}

			setLoadingNextPage(false);
		});
	}, [page]);

	const onSubmit = useCallback(
		({ keyword }) => {
			if (keyword !== "") {
				setBusqueda(keyword);
			} else {
				alert("Debes Ingresar un nombre de la pelicula");
			}
		},
		[setBusqueda]
	);

	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();

			onSubmit({ keyword });
		},
		[keyword, onSubmit]
	);

	const handleInput = useCallback(
		(e) => {
			setKeyword(e.target.value);
		},
		[setKeyword]
	);

	return {
		busqueda,
		keyword,
		movie,
		loading,
		loadingNextPage,
		empty,
		handleSubmit,
		handleInput,
		setPage,
	};
}
