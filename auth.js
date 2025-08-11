import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: "/sign-in",
		signOut: "/sign-out",
	},
	// finding if the user exists in the database, if it does creat new session properties with the existing database properties
	callbacks: {
		async session({ session, user }) {
			// On sign-in, user is defined. On subsequent requests, user is undefined.
			let dbUser = user;
			if (!dbUser && session.user?.email) {
				dbUser = await prisma.user.findUnique({
					where: { email: session.user.email },
				});
			}
			if (dbUser) {
				session.user.id = dbUser.id;
				session.user.phone = dbUser.phone;
				session.user.address = dbUser.address;
				session.user.city = dbUser.city;
				session.user.state = dbUser.state;
				session.user.zip = dbUser.zip;
				session.user.profileComplete = dbUser.profileComplete;
			}
			return session;
		},
	},
});
