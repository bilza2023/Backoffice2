<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>

<script>
//@ts-nocheck
  import { onMount } from "svelte";
  import Katex from 'svelte-katex'
  export let code;
  let parsedData=[];

  onMount(()=>{
    parsedData = JSON.parse(code);
    console.log(parsedData);
  });

$:{
  code;
  parsedData = JSON.parse(code);

}
</script>
{#if parsedData.length > 0}

<table class="justify-center items-center m-1 p-1 rounded-md border-2 border-gray-300">
  
  {#each parsedData as row, rowIndex}
    <tr class="">
      {#each row as cell, colIndex}
        <td class='border-2 border-gray-200 p-1'>
          <!-- <div class="bg-gray-900 m-1 p-1 rounded-md w-8/12"> -->
          <Katex>{cell}</Katex>
        <!-- </div> -->
        </td>
      {/each}
    </tr>
  {/each}

</table>

{/if}
