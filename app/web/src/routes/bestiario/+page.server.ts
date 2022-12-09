import { Utils } from "$lib/utils";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  try { 
    const creatures = await locals.pb.collection('creatures').getFullList(200, {
      sort: 'name'
    })
    .then(result => {
      return result.map(item => {
        return {...item, image: locals.pb.getFileUrl(item, item.image)};
      })
    });
    
    return {
      list: Utils.serializeNonPOJOs(creatures)
    }
  }
  catch (err) {
    console.error('Error fetching creature list: ', err);
    throw error(500, "Error al recuperar criaturas");
  }
}