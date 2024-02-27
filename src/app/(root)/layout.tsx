import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex  bg-slate-400 flex-col'>
      <Navbar />
      {children}
    </div>
  );
}
