import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import SponsorsCarousel from "./../../components/home/SponsorsCarousel";
import Sponsors from "./../../components/shared/Sponsors";

// You can return JSX or null here if needed

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      {children}
      {/* <SponsorsCarousel></SponsorsCarousel> */}
      <Sponsors></Sponsors>
      <Footer></Footer>
    </>
  );
}
