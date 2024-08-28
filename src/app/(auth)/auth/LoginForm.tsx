'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
    email: z.string().email({ message: 'Please provide a valid email' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

const LoginForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.ok) {
            router.push('/admin/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Login into your account with your credentials
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
