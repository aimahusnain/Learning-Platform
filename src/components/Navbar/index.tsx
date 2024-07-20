import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button, buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";
import UserAccountNav from "./UserAccountNav";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      console.log("There was an error logging in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>wordwise.</span>
          </Link>

          {/* <MobileNav isAuth={!!user} /> */}
          {/* <MobileNav /> */}

          <div className="hidden items-center space-x-4 sm:flex">
            {!session ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <Button
                  onClick={loginWithGoogle}
                  disabled={isLoading}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    }),
                    "bg-indigo-500"
                  )}
                >
                  Sign in
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/learn"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Learn
                </Link>

                <UserAccountNav
                  user={user}
                  // name={
                  //   !user.given_name || !user.family_name
                  //     ? 'Your Account'
                  //     : `${user.given_name} ${user.family_name}`
                  // }
                  // email={user.email ?? ''}
                  // imageUrl={user.picture ?? ''}
                />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
