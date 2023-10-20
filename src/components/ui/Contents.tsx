"use client";
// import { Layout } from "antd";

// const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <div className="pl-10">{children}</div>
    </div>
  );
};

export default Contents;
