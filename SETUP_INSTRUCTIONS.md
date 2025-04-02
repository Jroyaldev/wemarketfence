# SendGrid Email Setup

## Setup Instructions

1. Sign up for a SendGrid account at [sendgrid.com](https://sendgrid.com/) if you don't already have one.

2. Create an API key:
   - Go to SendGrid Dashboard > Settings > API Keys
   - Click "Create API Key"
   - Give it a name like "Fence Marketing Website"
   - Select "Restricted Access" and ensure it has access to "Mail Send"
   - Create the key and copy it

3. Create a `.env.local` file in the root of your project with the following content:

```
SENDGRID_API_KEY=SG.your_sendgrid_api_key_here
```

4. Verify a sender identity:
   - Go to SendGrid Dashboard > Settings > Sender Authentication
   - Either verify a single sender or set up domain authentication
   - Use this verified email address as the "from" email in your API route

5. Update the API route to use your verified sender email:
   - Edit `/app/api/contact/route.ts`
   - Change the `from` field in the msg object to your verified email

## Troubleshooting

If emails are not being delivered:

1. Check your SendGrid dashboard for any delivery issues
2. Ensure your API key has the correct permissions
3. Make sure your sender email is verified
4. Check spam folders
5. Review SendGrid logs for any errors

## Benefits of Using SendGrid + Formik

- **Reliability**: SendGrid has excellent deliverability rates
- **Analytics**: Track email opens, clicks, and more
- **Scalability**: Free tier includes 100 emails/day, upgrades available
- **Compliance**: GDPR and CAN-SPAM compliant
- **Clean Code**: Formik provides better form validation and state management

## Testing

Test your form in development by filling it out and checking the SendGrid Activity Feed for delivery status. The feed provides detailed information about each email sent, including delivery status and any potential issues.
