import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Log the submitted form data
    console.log('Form data received:', body);

    // Here you can add logic to:
    // - Validate input
    // - Save to database
    // - Send email notification, etc.

    return NextResponse.json({ message: 'Thank you for contacting us!' }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ message: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}