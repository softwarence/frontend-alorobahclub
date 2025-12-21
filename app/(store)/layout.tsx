import StoreHeader from "./../../components/store/StoreHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StoreHeader></StoreHeader>
      {children}
    </>
  );
}
