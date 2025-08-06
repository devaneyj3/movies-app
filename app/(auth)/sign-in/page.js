import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import Link from "next/link";
export const metadata = {
	title: "Sign In",
};
const SignInPage = () => {
	return (
		<div className="w-full max-w-md mx-auto">
			<Card>
				<CardHeader className="space-y-4">
					<Link href="/" className="flex-center"></Link>
					<CardTitle className="text-center">Sign In</CardTitle>
					<CardDescription className="text-center">
						Sign in to your account
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Button type="submit" className="text-center">
						<span>Sign in with Google</span>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default SignInPage;
