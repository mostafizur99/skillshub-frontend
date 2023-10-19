"use client";
import { PageLoader } from "@/components/ui/Loader";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <PageLoader />;
  }

  return (
    <div>
      <h2>SideBar</h2>
      <h2>Contents</h2>
      {children}
    </div>
  );
};

export default DashboardLayout;
