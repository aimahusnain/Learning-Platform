"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import * as React from "react";
import { FC } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
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
    <div className={cn("flex justify-center", className)} {...props}>
      <motion.button
        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center mx-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={loginWithGoogle}
        disabled={isLoading}
      >
        Start Learning Now
      </motion.button>
    </div>
  );
};

export default UserAuthForm;
