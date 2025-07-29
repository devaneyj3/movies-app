import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
	title: "Movie Tracker",
	description: "Track your movies",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="flex h-screen flex-col">
					<Header />
					<main className="flex-1 wrapper">{children}</main>
				</div>
			</body>
		</html>
	);
}
