import ModeToggler from "../admin/components/ThemeToggler";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
    <div className='h-[100vh] flex items-center justify-center relative'>
      <div className='absolute bottom-5 right-0 text-white'>
        <ModeToggler />
      </div>
      {children}
    </div>
    </body>
    </html>
  );
};

export default AuthLayout;