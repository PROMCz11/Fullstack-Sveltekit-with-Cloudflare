<script>
    export let data;
    $tasks = data.tasks;
    import { tasks } from "$lib/stores";

    const addTask = async (content) => {
        fetch("./api/tasks/add", {
            method: "POST",
            body: JSON.stringify(content),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(json => {
            $tasks = [...$tasks, {id: json, content: content}];
        })
        .catch(err => console.log(err));
    };

    const refreshTasks = async () => {
        $tasks = [];
        fetch("./api/tasks")
        .then(res => res.json())
        .then(json => {
            $tasks = json;
        })
        .catch(err => console.log(err));
    }

    const deleteAllTasks = () => {
        $tasks = [];
        fetch("./api/tasks/deleteAll",{
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }

    $: console.log($tasks);
</script>

<main>
    <input
    on:keydown={e => {
        if(e.key === "Enter") {
            addTask(e.target.value);
            e.target.value = '';
        }
    }}
    type="text" placeholder="Enter task content">
    <button on:click={refreshTasks}>Refresh</button>
    <button on:click={deleteAllTasks}>Delete all</button>
    <div class="task-container">
        {#each $tasks as {id, content} (id)}
            <div class="task" {id}>{content}</div>
            {:else}
            <p>No tasks yet</p>
        {/each}
    </div>
</main>

<style>
    main {
        padding: .5rem;
    }

    .task-container {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        margin-block: .5rem;
    }

    .task {
        padding: .5rem;
        border: 1px solid hsl(0, 0%, 63%);
        background-color: black;
        color: hsl(0, 0%, 63%);
        cursor: pointer;
    }

    .task:hover {
        border: 1px solid white;
        color: white;
    }
</style>