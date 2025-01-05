import {database} from '$lib/database';
import {SlideObject} from '$lib/taleem-presentation';

export const upgrade = async () => {
    debugger;
    console.log('Starting slide count:', database.reduce((acc, item) => acc + item.slides.length, 0));
    
    const updatedDatabase = await Promise.all(database.map(async (item) => {
        return {
        ...item,
        // slides: await updateSlides(item.slides)
        slides: await SlideObject.updateSlides(item.slides)
        };
    }));
    
    console.log('Final slide count:', updatedDatabase.reduce((acc, item) => acc + item.slides.length, 0));
    
    return updatedDatabase;
    };