"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AppContextProvider>{children}</AppContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
