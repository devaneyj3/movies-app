import Header from "@/components/Header";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
	title: "Movie Tracker",
	description: "Track your movies",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
