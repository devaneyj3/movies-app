// pages/index.js
import Header from "../components/Header";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to MovieTracker</h1>
				<p className={styles.description}>
					Track the movies you&apos;ve watched and discover new favorites with
					ease.
				</p>
			</main>
		</div>
	);
}
