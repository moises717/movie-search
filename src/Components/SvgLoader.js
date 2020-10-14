import React from "react";
import { Link } from "wouter";
import Skeleton from "react-loading-skeleton";
import { Card } from "react-bootstrap";

const SvgLoader = (props) => (
	<div className="row">
		<div className="col-md-3">
			<Card style={{ height: "450px" }} className="mt-2">
				<Skeleton
					height="380px"
					style={{
						paddingTop: "4px",
					}}></Skeleton>
				<Card.Body>
					<Card.Title>
						<Link to="#">
							<Skeleton></Skeleton>
						</Link>
					</Card.Title>
					<br />
					<Card.Text className="text-secondary">
						<br />
						<Skeleton></Skeleton>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
		<div className="col-md-3">
			<Card style={{ height: "450px" }} className="mt-2">
				<Skeleton
					height="380px"
					style={{
						paddingTop: "4px",
					}}></Skeleton>
				<Card.Body>
					<Card.Title>
						<Link to="#">
							<Skeleton></Skeleton>
						</Link>
					</Card.Title>
					<br />
					<Card.Text className="text-secondary">
						<br />
						<Skeleton></Skeleton>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
		<div className="col-md-3">
			<Card style={{ height: "450px" }} className="mt-2">
				<Skeleton
					height="380px"
					style={{
						paddingTop: "4px",
					}}></Skeleton>
				<Card.Body>
					<Card.Title>
						<Link to="#">
							<Skeleton></Skeleton>
						</Link>
					</Card.Title>
					<br />
					<Card.Text className="text-secondary">
						<br />
						<Skeleton></Skeleton>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
		<div className="col-md-3">
			<Card style={{ height: "450px" }} className="mt-2">
				<Skeleton
					height="380px"
					style={{
						paddingTop: "4px",
					}}></Skeleton>
				<Card.Body>
					<Card.Title>
						<Link to="#">
							<Skeleton></Skeleton>
						</Link>
					</Card.Title>
					<br />
					<Card.Text className="text-secondary">
						<br />
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	</div>
);

export default SvgLoader;
