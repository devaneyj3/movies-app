"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import styles from "./NavigationLinks.module.scss";
import { useAuth } from "@/context/authContext";

const NavigationLinks = ({ className = "" }) => {
	const { signedInUser } = useAuth();
	console.log(signedInUser);
	return (
		<div className={`${styles.navLinks} ${className}`}>
			<Button asChild variant="ghost" className={styles.navButton}>
				<Link href="/">Movies</Link>
			</Button>
			{signedInUser && (
				<Button asChild variant="ghost" className={styles.navButton}>
					<Link href="/MovieList">Movie List</Link>
				</Button>
			)}
			<Button asChild variant="ghost" className={styles.navButton}>
				<Link href="/TVShows">TV Shows</Link>
			</Button>
		</div>
	);
};

export default NavigationLinks;
