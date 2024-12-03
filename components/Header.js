// components/Header.js
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => (
	<header className={styles.header}>
		<h1 className={styles.logo}>MovieTracker</h1>
		<nav>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/watchlist">Watchlist</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/recommendations">Recommendations</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/profile">Profile</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
