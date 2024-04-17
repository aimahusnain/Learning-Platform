// In the UserEmail component file

import { useSession } from "next-auth/react";
import React from "react";

export function UserEmail() {
  const { data: session } = useSession();

  return session?.user?.email || ""; // Return the email or an empty string if not available
}
