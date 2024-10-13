import { supabase } from "$lib/supabaseClient";
import { json } from "@sveltejs/kit";
export async function POST({ request }) {
    const content = await request.json();
    const { data } = await supabase
    .from("tasks")
    .insert({ content: content })
    .select("id");
    return json(data[0].id);
}