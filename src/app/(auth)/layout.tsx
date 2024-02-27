const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-center w-full min-h-screen bg-red-200 '>
      {children}
    </div>
  );
};
export default Layout;
