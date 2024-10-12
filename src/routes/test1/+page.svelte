<script>
    let quotes = [{quote: "No quotes..."}];

    const getQuotes = async () => {
        const res = await fetch("../api/quotes");
        const json = await res.json();
        console.log(json.quotes);
        quotes = json.quotes;
    }
</script>

<main>
    <button on:click={getQuotes}>Get quotes</button>
    <div class="container">
        {#each quotes as { quote }}
            <div>{quote}</div>
        {/each}
    </div>
</main>

<style>
    main {
        padding: .5rem;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    button {
        margin-bottom: .5rem;
    }
</style>