import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <p>Привіт, {session.user?.name}</p>
                <button onClick={() => signOut()}>Вийти</button>
            </>
        );
    }
    return <button onClick={() => signIn("google")}>Увійти через Google</button>;
}
