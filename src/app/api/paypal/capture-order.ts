import { NextApiRequest, NextApiResponse } from 'next';
import paypal from '@paypal/checkout-server-sdk';

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET as string;

function environment() {
    return new paypal.core.SandboxEnvironment(clientId, clientSecret);
}

function client() {
    return new paypal.core.PayPalHttpClient(environment());
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { orderId } = req.body;

        const request = new paypal.orders.OrdersCaptureRequest(orderId);
        request.requestBody({});

        try {
            const capture = await client().execute(request);
            res.status(200).json({ capture });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
