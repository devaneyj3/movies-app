import React from "react";
import { Button } from "../ui/button";
import { UserIcon, LogOut } from "lucide-react";

import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { auth, signOut } from "@/auth";
import styles from "./UserButton.module.scss";

const UserButton = async () => {
	const session = await auth();

	if (!session) {
		return (
			<Button asChild variant="ghost" className={styles.signInButton}>
				<Link href="/sign-in">
					<UserIcon />
					Sign In
				</Link>
			</Button>
		);
	}
	const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "";
	return (
		<div className={styles.userContainer}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className={styles.userAvatar}>
						{firstInitial}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className={styles.dropdownContent}
					align="end"
					forceMount>
					<DropdownMenuLabel className={styles.dropdownLabel}>
						<div className={styles.userInfo}>
							<div className={styles.userName}>{session.user?.name}</div>
							<div className={styles.userEmail}>{session.user?.email}</div>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuItem className={styles.dropdownItem}>
						<Button className={styles.dropdownButton} variant="ghost" asChild>
							<Link href="/Profile">
								<UserIcon />
								Profile
							</Link>
						</Button>
					</DropdownMenuItem>
					<DropdownMenuItem className={styles.dropdownItem}>
						<form
							action={async () => {
								"use server";
								await signOut();
							}}>
							<Button className={styles.dropdownButton} variant="ghost">
								<LogOut />
								Sign Out
							</Button>
						</form>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default UserButton;
