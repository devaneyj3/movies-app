import { EllipsisVertical } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import UserButton from "./user-button";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import styles from "./Menu.module.scss";

const Menu = () => {
	return (
		<div className={styles.menuContainer}>
			<nav className={styles.desktopNav}>
				<NavigationLinks />
				<UserButton />
			</nav>
			<nav className={styles.mobileNav}>
				<Sheet>
					<SheetTrigger className="align-middle">
						<EllipsisVertical />
					</SheetTrigger>
					<SheetContent className={styles.sheetContent}>
						<SheetTitle className={styles.sheetTitle}>Menu</SheetTitle>
						<NavigationLinks />
						<UserButton />
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
};

export default Menu;
