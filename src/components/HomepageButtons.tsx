"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Signin from "./Signin";
import { useSession } from "next-auth/react";

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
          <Button
            size="lg"
            className="mt-5 text-white"
            onClick={handleRedirect}
            disabled={loading}
          >
            {loading ? "Redirecting..." : "Get started"}{" "}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default HomepageButtons;
