# Formspree Setup Instructions

Your contact form is ready to connect to Formspree. Follow these steps:

## 1. Create Formspree Account
- Go to [formspree.io](https://formspree.io)
- Sign up for a free account (50 submissions/month)

## 2. Create New Form
- Click "New Form" in your dashboard
- Name it "Portfolio Contact Form"
- Set the email where you want to receive submissions

## 3. Get Form Endpoint
- Copy your form endpoint URL (looks like: `https://formspree.io/f/abcd1234`)
- The form ID is the part after `/f/` (e.g., `abcd1234`)

## 4. Update Your Website
- Replace `FORMSPREE_FORM_ID_PLACEHOLDER` in `index.html` with your actual form ID
- Find this line: `action="https://formspree.io/f/FORMSPREE_FORM_ID_PLACEHOLDER"`
- Replace with: `action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID"`

## 5. Test the Form
- Submit a test message through your contact form
- Check your email for the submission
- Verify the form shows success message

## Current Form Fields
Your form captures:
- First Name
- Last Name  
- Email
- Project Type (QA Automation, AI Consulting, UX Design, etc.)
- Message

## Features Included
- ✅ Loading states during submission
- ✅ Success/error message display
- ✅ Google Analytics tracking
- ✅ Form validation
- ✅ Responsive design
- ✅ Spam protection (Formspree includes this)

Once you complete the setup, your contact form will be fully functional!