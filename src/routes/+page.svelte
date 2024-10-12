<script>
    import { supabase } from "$lib/supabaseClient.js";
    // const addTask = (content) => {
    //     console.log("task added");
    // }

    const addTask = async (content) => {
        const { data, error } = await supabase
            .from("tasks")
            .insert({ content: content });
        if (error) {
            console.error("Error adding task:", error);
        } 
        
        else {
            console.log("Task added:", data);
        }
    };


    const getTasks = async () => {
        const { data } = await supabase.from("tasks").select();
        console.log(data);
    }
</script>

<main>
    <input
    on:keydown={e => {
        if(e.key === "Enter") {
            addTask(e.target.value);
        }
    }}
    type="text" placeholder="Enter task content">
    <button on:click={getTasks}>Get tasks</button>
</main>

<style>
    main {
        padding: .5rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
</style>