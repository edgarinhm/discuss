import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import { Button } from "@nextui-org/react";
import Profile from "../components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <form action={signIn}>
        <Button type="submit">{"Sign In"}</Button>
      </form>
      <form action={signOut}>
        <Button type="submit">{"Sign Out"}</Button>
      </form>
      {session?.user ? (
        <pre>{JSON.stringify(session.user)}</pre>
      ) : (
        <div>Signed Out</div>
      )}
      <Profile />
    </main>
  );
}
