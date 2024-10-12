<script>
    export let data;
    let { quotes } = data;
</script>

<main>
    {#each quotes as { quote }}
        <div>{quote}</div>
    {/each}
</main>

<style>
    main {
        padding: .5rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
</style>