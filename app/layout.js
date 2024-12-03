import "./globals.css";

export const metadata = {
	title: "Movie Tracker",
	description: "Track your movies",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
