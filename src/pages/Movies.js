import React, { useCallback, useRef } from "react";
import SearchForm from "../Components/SearchForm";
import { ListOfMovies } from "../Components/ListOfMovies";
import { useMovie } from "../hooks/useMovie";
import { Spinner } from "../Components/Spinner";
import useNearScreen from "../hooks/useNearScreen";

import { useEffect } from "react";
import debounce from "just-debounce-it";
import SvgLoader from "../Components/svgLoader";

const Movies = () => {
	const {
		busqueda,
		keyword,
		movie,
		loading,
		loadingNextPage,
		empty,
		handleSubmit,
		handleInput,
		setPage,
	} = useMovie();

	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	});

	const debounceHandleNextPage = useCallback(
		debounce(() => {
			setPage((prepag) => prepag + 1);
		}, 200),
		[setPage]
	);

	useEffect(() => {
		console.log(isNearScreen);
		if (isNearScreen) {
			debounceHandleNextPage();
		}
	}, [debounceHandleNextPage, isNearScreen]);

	if (busqueda !== "") {
		return (
			<div>
				<div className="movies container">
					<div className="row">
						<div className="col-md-6 mt-2">
							<SearchForm
								keyword={keyword}
								handleSubmit={handleSubmit}
								handleInput={handleInput}
							/>
							{loading ? <Spinner></Spinner> : ""}
						</div>
					</div>
					{loading ? <SvgLoader></SvgLoader> : ""}
					<div className="list">
						{!empty ? (
							movie.map((m) => {
								return (
									<ListOfMovies
										key={m.imdbID}
										id={m.imdbID}
										poster={m.Poster}
										title={m.Title}
									/>
								);
							})
						) : (
							<h1>No se encontraron datos</h1>
						)}
					</div>
					<br />
					{loadingNextPage ? <SvgLoader></SvgLoader> : ""}
				</div>
				<div id="visor" ref={externalRef}></div>
			</div>
		);
	} else {
		return (
			<div className="row">
				<div className="col-md-12 mt-2">
					<SearchForm
						keyword={keyword}
						handleSubmit={handleSubmit}
						handleInput={handleInput}
					/>
				</div>
				<h3>Realizar una busqueda</h3>
			</div>
		);
	}
};

/*export function LazyLoad() {
	const { isNearScreen, fromRef } = useNearScreen({ distance: "30px" });

	return (
		<div className="container" ref={fromRef}>
			<Suspense fallback={null}>
				{isNearScreen ? <PruevaLazyLoad /> : null}
			</Suspense>
		</div>
	);
}*/

export default Movies;
