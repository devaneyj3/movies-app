"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/utils/apiClient";
import Header from "../components/Header";
import styles from "./page.module.scss";
import MovieList from "@/components/MovieList/MovieList";
import { dateFormatter } from "@/utils/dateFormater";

export default function Home() {
	const [moviesPlaying, setMoviesPlaying] = useState({});

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
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to MovieTracker</h1>
				<p className={styles.description}>
					Track the movies you&apos;ve watched and discover new favorites with
					ease.
				</p>
				{dates && (
					<h3>
						Now in theaters between {minDate} and {maxDate}
					</h3>
				)}
				{results && <MovieList data={results} />}
			</main>
		</div>
	);
}
