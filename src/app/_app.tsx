import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import AdminLayout from './admin/layout';
import { ThemeProvider } from './admin/components/ThemeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter();
    const { pathname } = router;

    const isAdminRoute = pathname.startsWith('/admin');

    return (
        <SessionProvider session={session}>
            <ThemeProvider
                attribute='class'
                defaultTheme='light'
                enableSystem={true}
                storageKey='dashboard-theme'
            >
                {isAdminRoute ? (
                    <AdminLayout>
                        <Component {...pageProps} />
                    </AdminLayout>
                ) : (
                    <Component {...pageProps} />
                )}
            </ThemeProvider>
        </SessionProvider>
    );
}

export default MyApp;
