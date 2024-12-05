"use client";
import { apiClient } from "@/utils/apiClient";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./movie.module.scss";
import { Button } from "reactstrap";

export default function Movie() {
	const { movieId } = useParams();
	const [movieDetails, setMovieDetails] = useState([]);
	useEffect(() => {
		const fetchMovieDetails = async () => {
			const res = await apiClient.get(`/movie/${movieId}`);
			setMovieDetails(res.data);
		};
		fetchMovieDetails();
	}, [movieId]);

	console.log(movieDetails);

	const {
		title,
		overview,
		tagline,
		release_date,
		statues,
		runtime,
		revenue,
		poster_path,
		budget,
		spoken_languages,
		genres,
		vote_average,
	} = movieDetails;

	return (
		<div>
			{movieDetails ? (
				<div>
					<h2>{title}</h2>
					<div className={styles.imageContainer}>
						<Image
							src={`https://image.tmdb.org/t/p/w500${poster_path}`}
							width={200}
							height={300}
							alt={`${title} Poster`}
						/>
					</div>
					<p>{tagline}</p>
					<p>{release_date}</p>
					<p>{overview}</p>
					<p>{statues}</p>
					<p>{runtime}</p>
					<p>{revenue}</p>
					<p>{budget}</p>
					<p>{vote_average}</p>
					{genres &&
						genres.map((genre) => {
							return (
								<div key={genre.id}>
									<p>{genre.name}</p>
								</div>
							);
						})}
					<Button color="success">Add to my list</Button>
				</div>
			) : (
				<h2>No details</h2>
			)}
		</div>
	);
}
