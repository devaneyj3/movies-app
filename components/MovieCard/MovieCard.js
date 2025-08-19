"use client";
import { dateFormatter } from "@/utils/dateFormater";
import React from "react";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MovieCard({ movie }) {
	const { id, title, release_date, popularity, poster_path, vote_average } =
		movie;
	const router = useRouter();
	function goToMovie() {
		router.push(`/Movie/${id}`);
	}
	return (
		<div className={styles.card} onClick={goToMovie}>
			{poster_path ? (
				<div className={styles.imageContainer}>
					<Image
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
						width={200}
						height={300}
						alt={`${title} Poster`}
					/>
				</div>
			) : (
				<p>No poster available</p>
			)}
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.date}>{dateFormatter(release_date)}</p>
			</div>
		</div>
	);
}
