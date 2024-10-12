import { json } from '@sveltejs/kit';

export async function GET() {
    try {
        const response = await fetch('https://dummyjson.com/quotes');
        
        if (!response.ok) {
            throw new Error('Failed to fetch quotes');
        }
        
        const data = await response.json();
        return json(data);
    } catch (error) {
        console.error(error);
        return json({ error: 'Failed to fetch quotes' }, { status: 500 });
    }
}