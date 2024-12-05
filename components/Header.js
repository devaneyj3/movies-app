// components/Header.js
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => (
	<header className={styles.header}>
		{" "}
		<Link className={styles.logo} href="/">
			MovieTracker
		</Link>
		<nav>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<Link href="/Movies">Movies</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/TVShows">TV Shows</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/Profile">Profile</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
