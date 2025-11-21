import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "./login-client/page";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/home");
  }

  const providers = await getProviders();

  return <Login providers={providers} />;
}
