import React, { memo } from "react";

import { Card } from "react-bootstrap";
import { Link } from "wouter";

export const ListOfMovies = memo((props) => {
	const { id, title, poster } = props;

	return (
		<div>
			<Card style={{ height: "480px" }} className="mt-2">
				<Card.Img variant="top" src={poster} style={{ height: "400px" }} />
				<Card.Body>
					<Card.Title>
						<Link to={"/movie/" + id}>{title}</Link>
					</Card.Title>
					<br />
					<Card.Text className="text-secondary">
						<br />
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
});
