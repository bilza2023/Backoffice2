<script>
    import { onMount } from 'svelte';    
    export let message = 'Message';
    export let color = '#af6223';
    export let fontColor = '#ead088';
    let show = true;
    let timer;
    
    // Clear any existing timer before setting a new one
    function resetTimer() {
        if (timer) clearTimeout(timer);
    }
    
    onMount(() => {
        return () => resetTimer();
    });
    
    $: {
        message;
        resetTimer(); // Clear any existing timer first
            show = true;
            timer = setTimeout(() => {
                show = false;
                message = '';
            }, 2000);
    }
</script>

{#if show}
<div class='text-center w-full p-2 m-1' style="background-color: {color}">
    <h1 style="color: {fontColor}">{message}</h1>
</div>
{/if}