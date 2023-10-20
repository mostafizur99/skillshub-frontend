import MainNav from "@/components/ui/nav/MainNav";
import Footer from "@/components/ui/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  );
}
