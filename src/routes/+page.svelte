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

    // const getTasks = async () => {
    //     fetch("./api/tasks")
    //     .then(res => res.json())
    //     .then(json => {
    //         $tasks = json;
    //     })
    //     .catch(err => console.log(err));
    // }

    // $: console.log($tasks);
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
    <!-- <button on:click={getTasks}>Get tasks</button> -->
    <div class="task-container">
        {#each $tasks as {id, content}}
            <div class="task" {id}>{content}</div>
        {/each}
    </div>
</main>

<style>
    main {
        padding: .5rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .task-container {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
    }

    .task {
        padding: .5rem;
        border: 1px solid white;
        background-color: black;
        color: white;
    }
</style>