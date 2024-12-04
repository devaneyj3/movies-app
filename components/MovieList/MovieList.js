import { dateFormatter } from "@/utils/dateFormater";
import Image from "next/image";
import React from "react";

export default function MovieList({ data }) {
	console.log(data);
	return (
		<div>
			{data.map((movie) => {
				const {
					id,
					title,
					release_date,
					overview,
					popularity,
					poster_path,
					backdrop_path,
					vote_average,
					vote_count,
				} = movie;
				return (
					<div key={id}>
						<h1>{id}</h1>
						<h2>{title}</h2>
						{poster_path ? (
							<Image
								src={`https://image.tmdb.org/t/p/w500${poster_path}`}
								width={200}
								height={200}
								alt={`${title} Poster`}
							/>
						) : (
							<p>No poster available</p>
						)}
						<p>{overview}</p>
						<p>{dateFormatter(release_date)}</p>
						<p>
							{vote_average}/10 based on {vote_count} votes
						</p>
					</div>
				);
			})}
		</div>
	);
}
