//@ts-nocheck
// import stringify from "./stringify";
import {toast} from '$lib/util';
import {db} from "../../lib/app/db.js";

export default async function saveFinal(slides,tcode,id,item){
  // throw new Error("Not permitted to save");
debugger
  if (slides && slides.length > 0){
    slides[0].startTime = 0;
  }
const question = item;
question.slides = slides;
  // const resp = await db.tcode.update(question._id, question);

  // if(resp.ok){
  //   toast.push('saved');
  // }else {
  //   toast.push('failed to saved');
  // }
}

//////////////////////////////////////////////

