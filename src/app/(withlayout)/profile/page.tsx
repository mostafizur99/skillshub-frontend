"use client";
import MyProfile from "@/components/Sections/MyProfile";
import { getUserInfo } from "@/services/auth.service";

const ProfilePage = () => {
  const { email, userId, role } = getUserInfo() as any;
  console.log("userData", { email, userId, role });

  return (
    <>
      <MyProfile />
    </>
  );
};

export default ProfilePage;
