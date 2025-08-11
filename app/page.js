"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/utils/apiClient";
import MovieList from "@/components/MovieList/MovieList";
import { dateFormatter } from "@/utils/dateFormater";
import { useAuth } from "@/context/authContext";

export default function Home() {
	const [moviesPlaying, setMoviesPlaying] = useState({});
	const { signedInUser } = useAuth();

	useEffect(() => {
		const getMoviesPlaying = async () => {
			try {
				const response = await apiClient.get("movie/now_playing", {
					params: { language: "en-US", page: 1 },
				});
				setMoviesPlaying(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		getMoviesPlaying();
	}, []);

	const { dates, results } = moviesPlaying;

	const minDate = dates ? dateFormatter(dates.minimum) : "";
	const maxDate = dates ? dateFormatter(dates.maximum) : "";

	return (
		<div>
			{signedInUser && <h2>Welcome, {signedInUser.name}!</h2>}
			<div className="flex-col justify-items-center p-10">
				<h1 className="font-bold text-3xl pb-5">Welcome to MovieTracker</h1>
				<p className="text-xl italic">
					Track the movies you&apos;ve watched and discover new favorites with
					ease.
				</p>
			</div>
			{dates && (
				<h3>
					Now in theaters between {minDate} and {maxDate}
				</h3>
			)}
			{results && <MovieList data={results} />}
		</div>
	);
}
