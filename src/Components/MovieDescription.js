import React, { memo } from "react";
import { Card } from "react-bootstrap";

const MovieDescription = (props) => {
	const { description, Poster, Title, Actores, Star, Gen, Year } = props;
	return (
		<div className="container mt-4">
			<Card className="m-auto shadow">
				<div className="row no-gutters">
					<div className="col-md-4  shadow">
						<Card.Img
							src={Poster}
							thumbnail="true"
							style={{ height: "100%" }}
						/>
					</div>
					<div className="col-md-8">
						<Card.Body>
							<Card.Title>{Title}</Card.Title>
							<Card.Text>{description}</Card.Text>
							<b>Actores:</b>
							<Card.Text className="text-muted">{Actores}</Card.Text>
							<b>Puntuacion</b>: <Card.Text>{Star}</Card.Text>
							<b>Genero</b>: <Card.Text>{Gen}</Card.Text>
							<b>Año</b>: <Card.Text>{Year}</Card.Text>
						</Card.Body>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default React.memo(MovieDescription);
