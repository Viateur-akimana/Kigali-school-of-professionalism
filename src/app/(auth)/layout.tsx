


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
    <div className='h-[100vh] flex items-center justify-center relative'>
      {children}
    </div>
    </body>
    </html>
  );
};

export default AuthLayout;