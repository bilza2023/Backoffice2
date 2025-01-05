<script>
  import {SlideObject,Editor} from '$lib/taleem-presentation';
  import {onMount} from "svelte";
  import {db} from "../../lib/app/db.js";
  import saveFinal from './saveFinal.js';
  // import {upgrade} from './upgrade.js';
  // import {database} from '../../lib/database.js';

 let showToolbar=true;

 let item =null;
 let slides;
 let id; 

 function convertToUrlFriendlyName(name) {
            const urlFriendlyName = name.replace(/\s+/g, '_');
            const sanitizedUrlFriendlyName = urlFriendlyName.replace(/[^\w\d_]/g, '');
            return sanitizedUrlFriendlyName;
}

// async function ajaxPut(url, payload){
//   try {
//       const token = localStorage.getItem("token");
//       const resp = await fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });
  
//       return resp;
//     } catch (error) {
//       throw error;
//     }
// }
 async function save(){
  
  if (item.name && item.name !== ''){
    item.name = convertToUrlFriendlyName(item.name);
  }  
  if (slides && slides.length > 0){
    slides[0].startTime = 0;
  }
  const data = item;
  data.slides = slides;
// debugger;
  const resp = await db.tcode.update(data._id, data);
  // const resp = await ajaxPut(`http://localhost:5000/test/${data._id}`, data);
  if(resp.ok){
    toast.push('saved');
  }else {
    toast.push('failed to saved');
  } 
 }
 /////////////////////////////////
onMount(async()=>{

    id = new URLSearchParams(location.search).get("id");
    const resp = await db.tcode.getOne(id);

    if (resp.ok){
      item = await resp.json();
      slides = item.slides;
      // debugger;
    // soundFilePath =  SOUND_FILE_PATH + item.filename + '.opus'; 
    }
    else {
      throw new Error('Failed to load');
    }
});

</script>

  <div class="w-full bg-gray-800">
  {#if slides}
    <Editor
      isBlob={false}
      {showToolbar}
      bind:slides={slides}
      {save}
    />
  {/if}
  </div>