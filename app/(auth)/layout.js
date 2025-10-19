import styles from "./authLayout.module.scss";

export default function AuthLayout({ children }) {
	return (
		<div className={styles.authLayout}>
			{/* Background gradient overlay */}
			<div className={styles.authBackground}></div>

			{/* Animated background elements */}
			<div className={styles.backgroundElements}>
				<div className={styles.backgroundDot}></div>
				<div className={styles.backgroundDot}></div>
				<div className={styles.backgroundDot}></div>
				<div className={styles.backgroundDot}></div>
			</div>

			{/* Main content */}
			<div className={styles.authContent}>{children}</div>
		</div>
	);
}
