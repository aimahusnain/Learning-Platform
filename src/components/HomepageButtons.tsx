"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Signin from "./Signin";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

const HomepageButtons = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleRedirect = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      {session ? (
        <Link href="/learn">
          <motion.button
            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRedirect}
            disabled={loading}
          >
            {loading ? "Redirecting..." : "Start Learning Now"}{" "}
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </Link>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default HomepageButtons;
