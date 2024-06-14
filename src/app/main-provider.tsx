import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};
const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.VITE_NODE_ENV === "development" && (
        <ReactQueryDevtools />
      )}
      {children}
    </QueryClientProvider>
  );
};

export default AppProvider;
