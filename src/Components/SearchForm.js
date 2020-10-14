import React from "react";

import { FormControl, Button, Form } from "react-bootstrap";

const SearchForm = (props) => {
	const { keyword, handleInput, handleSubmit } = props;

	return (
		<div>
			<Form inline onSubmit={handleSubmit}>
				<FormControl
					type="text"
					placeholder="Buscar Pelicula"
					className="mr-sm-2"
					value={keyword}
					onChange={handleInput}
				/>
				<Button type="submit" variant="outline-success">
					Buscar
				</Button>
			</Form>
		</div>
	);
};

export default React.memo(SearchForm);
