import Link from "next/link";
import Menu from "./Menu";
import { Film } from "lucide-react";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<div className={styles.logoContainer}>
					<Link href="/" className={styles.logoLink}>
						<Film className={styles.logoIcon} />
					</Link>
				</div>
				<Menu />
			</div>
		</header>
	);
};

export default Header;
