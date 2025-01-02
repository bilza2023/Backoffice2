
<script>
    //@ts-nocheck 
    import {Player ,SlideObject} from '$lib/taleem-presentation';
    import {onMount} from "svelte";

    import {db} from "../../lib/app/db.js";

    let showToolbar=true;

    let item =null;
    let slides;
    let id;
    
    
onMount(async()=>{

  id = new URLSearchParams(location.search).get("id");
  const resp = await db.tcode.getOne(id);

    if (resp.ok){
    item = await resp.json();
    slides = await SlideObject.updateSlides(item.slides);
    slides[0].startTime = 0; //--> keep this line
      
    debugger;
    }
    else {
      throw new Error('Failed to load');
    }
});



    </script> 
 
    <div class='bg-gray-800 text-white w-full' >
      {#if slides}
        <div class="flex justify-center w-full   border-white border-2 text-center  rounded-lg  ">
             
          {#key slides}
              <Player
                isBlob = {false}
                slides={slides} 
                audioData= "/music1.opus"    
              />
          {/key}

        </div>
      {/if}
    </div>
    
    