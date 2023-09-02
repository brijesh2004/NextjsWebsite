// Import necessary dependencies and functions
import dbConnect from '@/utils/dbConn';
import Contact from '@/models/contact';
import { NextResponse } from 'next/server';

// Export the POST method as a named export in uppercase
export async function POST(req, res) {
    try {
        const body = await req.json();
        await dbConnect(); // Ensure the database connection is established
        const contact = await Contact.create(body);

        return NextResponse.json({
            message: "Message sent successfully",
            contact, // Optionally, you can return the created contact object
        }, { status: 200 });
    } catch (err) {
        console.error('Error:', err); // Log the error for debugging
        return NextResponse.json({
            message: "Server error, please try again!",
        }, { status: 500 });
    }
}
