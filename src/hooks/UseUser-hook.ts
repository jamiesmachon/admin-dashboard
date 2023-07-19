import { useSession } from "next-auth/react";

function useUser() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Return loading state if session data is being fetched
    return { user: null, isLoading: true };
  }

  // If there's no session data, return null user
  if (!session) {
    return { user: null, isLoading: false };
  }

  // Otherwise, return the session user
  return { user: session.user, isLoading: false };
}

export default useUser;
