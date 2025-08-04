"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function Profile() {
	const { data: session } = useSession();
	return (
		<div>
			<p>Hello, {session?.user.name}</p>
			<p>Email: {session?.user.email}</p>
		</div>
	);
}
