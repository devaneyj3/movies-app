import React from "react";
import { Button } from "../ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { auth, signOut } from "@/auth";

const UserButton = async () => {
	const session = await auth();

	if (!session) {
		return (
			<Button asChild variant="ghost">
				<Link href="/sign-in">
					<UserIcon />
					Sign In
				</Link>
			</Button>
		);
	}
	const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "";
	return (
		<div className="flex gap-2 items-center">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="relative h-8 w-8 rounded-full ml-2 flex items-center justify-center bg-gray-200">
						{firstInitial}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						<div className="flex flex-col space-y-1">
							<div className="text-sm font-medium leading-none">
								{session.user?.name}
							</div>
							<div className="text-sm text-muted-foreground leading-none">
								{session.user?.email}
							</div>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuItem className="p-0 mb-1">
						<form
							action={async () => {
								"use server";
								await signOut();
							}}>
							<Button
								className="w-full py-4 px-2 h-2 justify-start"
								variant="ghost">
								<UserIcon />
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
