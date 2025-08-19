import React from "react";
import MovieCard from "../MovieCard/MovieCard";

export default function MovieList({ data }) {
	return (
		<section className="grid grid-cols-4 gap-4">
			{data.map((movie) => {
				return <MovieCard key={movie.id} movie={movie} />;
			})}
		</section>
	);
}
