"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PageLoader } from "@/components/ui/Loader";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";

import { Fragment } from "react";

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
      <Fragment>
        <div className="px-0">
          <div className="bg-gray-300 w-full min-h-screen max-h-full">
            <div className="flex">
              <div className="w-2/12">
                <Sidebar />
              </div>
              <div className="w-10/12">
                <div className="p-10">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default DashboardLayout;
