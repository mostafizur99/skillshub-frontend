"use client";
import { getUserInfo } from "@/services/auth.service";

const ProfilePage = () => {
  const { email, userId, role } = getUserInfo() as any;
  console.log("userData", { email, userId, role });

  return (
    <div>
      <h1>Welcome back to your profile</h1>
    </div>
  );
};

export default ProfilePage;
