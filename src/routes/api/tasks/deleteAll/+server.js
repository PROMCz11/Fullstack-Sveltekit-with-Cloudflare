import { supabase } from "$lib/supabaseClient";
import { json } from "@sveltejs/kit";

export const DELETE = async () => {
    const { data, error } = await supabase
    .from("tasks")
    .delete()
    .neq("id", 0);

    if (error) {
        console.error("Error deleting tasks:", error);
    } 
    
    else {
        return json(data);
    }
}
