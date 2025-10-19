import Header from "@/components/Header";
import "./tailwind.css";
import Providers from "@/components/Providers";
import styles from "./layout.module.scss";

export const metadata = {
	title: "Movie Tracker",
	description: "Track your movies",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Providers>
				<body>
					<Header />
					<main className={styles.main}>{children}</main>
				</body>
			</Providers>
		</html>
	);
}
