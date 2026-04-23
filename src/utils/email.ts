const BREVO_API_KEY = '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'; // Brevo REST API Key
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
export const ADMIN_EMAIL = 'nayaksn@gmail.com';
export const BUSINESS_EMAIL = 'css@dimakkonsulting.com';
const NOTIFICATION_RECIPIENTS = [ADMIN_EMAIL, BUSINESS_EMAIL];

interface SendEmailParams {
    subject: string;
    recipients: { email: string }[];
    htmlContent: string;
}

async function sendEmail({ subject, recipients, htmlContent }: SendEmailParams) {
    try {
        const response = await fetch(BREVO_API_URL, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: { name: "DIMAK Corporate Team", email: "sn_vicky@yahoo.com" },
                to: recipients,
                subject: subject,
                htmlContent: htmlContent
            })
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Brevo API Error:', error);
            throw new Error('Failed to send email notification');
        }

        console.log('Email notification sent successfully');
        return true;
    } catch (error) {
        console.error('Error in sendEmail:', error);
        return false;
    }
}

export async function sendLeadNotification(leadData: any) {
    const subject = `New Inquiry from DIMAK: ${leadData.firstName} ${leadData.lastName}`;
    const htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px;">
            <h2 style="color: #D62329;">New Lead Captured (DIMAK)</h2>
            <p><strong>Name:</strong> ${leadData.firstName} ${leadData.lastName}</p>
            <p><strong>Email:</strong> ${leadData.email}</p>
            <p><strong>Service Interest:</strong> ${leadData.service || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f8fafc; padding: 15px; border-radius: 4px; border-left: 4px solid #D62329;">
                ${leadData.message || 'No message provided.'}
            </div>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e2e8f0;" />
            <p style="font-size: 12px; color: #64748b;">Source: DIMAK Corporate Website<br>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
    `;

    return sendEmail({
        subject,
        recipients: NOTIFICATION_RECIPIENTS.map(email => ({ email })),
        htmlContent
    });
}
