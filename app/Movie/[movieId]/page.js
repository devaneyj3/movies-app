"use client";
import { apiClient } from "@/utils/apiClient";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./Movie.module.scss";
import { Button } from "@/components/ui/button";

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
		runtime,
		revenue,
		poster_path,
		budget,
		spoken_languages,
		genres,
		vote_average,
	} = movieDetails;

	return (
		<>
			{movieDetails ? (
				<div className={styles.movieContainer}>
					<div className={styles.imageContainer}>
						<Image
							src={`https://image.tmdb.org/t/p/w500${poster_path}`}
							width={200}
							height={300}
							alt={`${title} Poster`}
						/>
						<Button
							className="mt-2 w-full bg-green-400"
							variant="secondary"
							size="lg">
							Add to my list
						</Button>
					</div>
					<div className={styles.details}>
						<h2 className="font-bold">{title}</h2>

						{release_date && (
							<>
								<span className={styles.label}>Release date:</span>
								<span className={styles.value}>{release_date}</span>
							</>
						)}

						{runtime && (
							<>
								<span className={styles.label}>Runtime:</span>
								<span className={styles.value}>{runtime} min</span>
							</>
						)}

						<span className={styles.label}>Revenue:</span>
						<span className={styles.value}>${revenue?.toLocaleString()}</span>

						{budget && (
							<>
								<span className={styles.label}>Budget:</span>
								<span className={styles.value}>
									${budget?.toLocaleString()}
								</span>
							</>
						)}

						{vote_average && (
							<>
								<span className={styles.label}>Vote average:</span>
								<span className={styles.value}>{vote_average}/10</span>
							</>
						)}
						{overview && (
							<div className={styles.fullRow}>
								<p className={styles.value}>{overview}</p>
							</div>
						)}

						{genres && genres.length > 0 && (
							<div className={styles.genresSection}>
								<div className={styles.genresList}>
									{genres.map((genre) => (
										<div key={genre.id}>
											<Button
												variant="ghost"
												className="mt-2 w-full bg-green-400">
												{genre.name}
											</Button>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			) : (
				<h2>No details</h2>
			)}
		</>
	);
}
