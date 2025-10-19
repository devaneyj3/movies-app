import { Button } from "../ui/button";
import Link from "next/link";
import { EllipsisVertical } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import UserButton from "./user-button";
import styles from "./Menu.module.scss";

const Menu = () => {
	return (
		<div className={styles.menuContainer}>
			<nav className={styles.desktopNav}>
				<Button asChild variant="ghost">
					<Link href="/">Movies</Link>
				</Button>
				<Button asChild variant="ghost">
					<Link href="/TVShows">TV Shows</Link>
				</Button>
				<UserButton />
			</nav>
			<nav className={styles.mobileNav}>
				<Sheet>
					<SheetTrigger className="align-middle">
						<EllipsisVertical />
					</SheetTrigger>
					<SheetContent className={styles.sheetContent}>
						<SheetTitle className={styles.sheetTitle}>Menu</SheetTitle>
						<Button asChild variant="ghost">
							<Link href="/">Movies</Link>
						</Button>
						<Button asChild variant="ghost">
							<Link href="/TVShows">TV Shows</Link>
						</Button>
						<UserButton />
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
};

export default Menu;
