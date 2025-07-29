// components/Header.js
import Link from "next/link";
import { EllipsisVertical, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const Menu = () => (
	<div className="flex justify-end gap-3">
		<nav className="md:flex hidden w-full max-w-xs gap-1">
			<Button asChild variant="ghost">
				<Link href="/Movies">Movies</Link>
			</Button>
			<Button asChild variant="ghost">
				<Link href="/TVShows">TV Shows</Link>
			</Button>
			<Button asChild>
				<Link href="/sign-in">
					<UserIcon />
					Sign In
				</Link>
			</Button>
		</nav>
		<nav className="md:hidden">
			<Sheet>
				<SheetTrigger className="align-middle">
					<EllipsisVertical />
				</SheetTrigger>
				<SheetContent className="flex flex-col items-start">
					<SheetTitle>Menu</SheetTitle>
					<Button asChild variant="ghost">
						<Link href="/Movies">Movies</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link href="/TVShows">TV Shows</Link>
					</Button>
					<Button asChild>
						<Link href="/sign-in">
							<UserIcon />
							Sign In
						</Link>
					</Button>
				</SheetContent>
			</Sheet>
		</nav>
	</div>
);

export default Menu;
