<script>
//@ts-nocheck 
import { toast } from '@zerodevx/svelte-toast';
import { onMount } from 'svelte';
import {db} from "$lib/app/db";
import {AppConsts} from "taleemtools";
import BookToolbar from './BookToolbar.svelte';

let tcode;
let questions;
let chaptersData;


////////////////////////////////////////////////////////
onMount(async ()=>{  
    tcode = new URLSearchParams(location.search).get("tcode");
    let d = await AppConsts.getTcode(tcode);
    chaptersData = d.chapters;
    
  //---DB access
  const resp = await db.tcode.get(`tcode=${tcode}&limit=1500&fields=-slides`)

  if (resp.ok){
    const incomming = await resp.json();
    
    questions = incomming.data;

}else {
    toast.push("failed to load");
 } 
});
////////////////////////////////////////////
</script> 
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class='bg-gray-800 text-white w-full min-h-screen' 
style='position: fixed; top: 0;'>

{#if chaptersData && questions}
   <BookToolbar 
   {chaptersData} 
   imgUrl="/system_images/gen/fbise9math.png" 
   {questions}
   selectedChapterNumber = 1
   selectedEx="1.1"
   selectedVideoId = "66505334ba9a237f5dd73370"
   />
   {/if}



</div><!--page wrapper-->


