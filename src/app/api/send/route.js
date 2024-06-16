// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.From_Email;
export async function POST(req, res) {
    const { body } = await req.json();
    const { email, subject, message } = body;
    try {
        const { data, error } = await resend.emails.send({
            from: 'Gaurav <gta94227@gmail.com>',
            to: ['gta94227@gmail.com'],
            subject: 'Hello world',
            react: < >
                <
                h2 > { subject } < /h2> <
                p > Thankyou
            for contacting me < /p> <
            p > { message } < /p></ >
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}