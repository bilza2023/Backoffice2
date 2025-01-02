<script>
  import {SlideObject,Editor} from '$lib/taleem-presentation';
  // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
    import audioData from "./audioData.js";
    import {onMount} from "svelte";
  ////////////////////////////////////////////
  import {db} from "../../lib/app/db.js";
    
    let showToolbar=true;

 let item =null;
 let slides;
 let id; 
 /////////////////////////////////
onMount(async()=>{

    id = new URLSearchParams(location.search).get("id");
    const resp = await db.tcode.getOne(id);

    if (resp.ok){
    item = await resp.json();
debugger;
    slides = await SlideObject.updateSlides(item.slides);
    // soundFilePath =  SOUND_FILE_PATH + item.filename + '.opus'; 

    }
    else {
      throw new Error('Failed to load');
    }
   
      // const s = SlideObject.Canvas.getDemoSlide();
      // const report = await healthCheckCanvas(s);
      // console.log('report' , report);
      // slides = [s];

});

</script>

  <div class="w-full bg-gray-800">
  {#if slides}
    <Editor
      isBlob={true}
      {showToolbar}
      bind:slides={slides}
      {audioData}
    />
  {/if}
  </div>