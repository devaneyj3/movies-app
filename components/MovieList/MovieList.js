import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.scss";

export default function MovieList({ data }) {
	console.log(data);
	return (
		<section className={styles.cardContainer}>
			{data.map((movie) => {
				return <MovieCard key={movie.id} movie={movie} />;
			})}
		</section>
	);
}
