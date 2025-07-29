import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { Film } from "lucide-react";

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex-between">
				<div className="flex-start">
					<Link href="/" className="flex-start">
						<Film />
					</Link>
				</div>
				<Menu />
			</div>
		</header>
	);
};

export default Header;
