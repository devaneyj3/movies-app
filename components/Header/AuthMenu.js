"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserIcon } from "lucide-react";

export default function AuthMenu() {
	const { data: session } = useSession();
	return (
		<>
			{session ? (
				<>
					<Button asChild variant="ghost">
						<Link href="/Profile"> Profile</Link>
					</Button>
					<Button onClick={() => signOut()}>
						<UserIcon />
						Sign Out
					</Button>
				</>
			) : (
				<Button asChild variant="ghost">
					<Link href="/sign-in">
						<UserIcon />
						Sign In
					</Link>
				</Button>
			)}
		</>
	);
}
