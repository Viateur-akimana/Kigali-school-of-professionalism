'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentPage: React.FC = () => {
    const [selectedMethod, setSelectedMethod] = useState<string>('offline');
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/join');
        }
    }, [status, router]);

    const handlePaymentMethodChange = (method: string) => {
        setSelectedMethod(method);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // where to handle payment logic
        console.log('Payment method:', selectedMethod);
    };



    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex">
                <div className="w-full md:w-2/3 p-6">
                    <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="paypal"
                                    name="paymentMethod"
                                    value="paypal"
                                    checked={selectedMethod === 'paypal'}
                                    onChange={() => handlePaymentMethodChange('paypal')}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="paypal" className="ml-2 text-gray-900 font-medium">
                                    PayPal
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="offline"
                                    name="paymentMethod"
                                    value="offline"
                                    checked={selectedMethod === 'offline'}
                                    onChange={() => handlePaymentMethodChange('offline')}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="offline" className="ml-2 text-gray-900 font-medium">
                                    Offline Payment
                                </label>
                            </div>
                        </div>

                        {selectedMethod === 'offline' && (
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md">
                                <h3 className="font-semibold text-gray-900 mb-2">Registration Procedures</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>Payment amount: <strong>10,000 RWF</strong></li>
                                    <li>Payment methods:</li>
                                    <li>MOMO CODE: 1054234</li>
                                    <li>Account Holder: Martin</li>
                                    <li>Equity bank: 4005100563989</li>
                                    <li>VisaCard: 4576691020216380</li>
                                    <li>Deadline: 14 July 2024</li>
                                    <li>
                                        Please send payment proof via WhatsApp (Screenshot or Photo): +250782401380 OR
                                        bring the payment slip to the office in Kicukiro, near BPR Bank.
                                    </li>
                                </ul>
                            </div>
                        )}

                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your email"
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                            >
                                Buy Now
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full md:w-1/3 bg-gray-100 p-6">
                    <h2 className="text-xl font-semibold mb-4">Course Summary</h2>
                    <div className="space-y-2">
                        <p className="text-gray-700">Professional Financial Management and Planning</p>
                        <p className="text-gray-500">Duration: 24 Weeks</p>
                        <p className="text-gray-900 font-semibold">Total: US$10.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
