import { Utils } from "$lib/utils";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, setHeaders }) => {
  try { 
    const creatures = await locals.pb.collection('creatures').getFullList(200, {
      sort: 'name'
    })
    .then(result => {
      return result.map(item => {
        return {
          ...item,
          rarity: Utils.capitalizeFirstLetter(item.rarity),
          size: Utils.capitalizeFirstLetter(item.size),
          traits: Utils.sanitizeBarString(item.traits)
        };
      })
    });

    setHeaders({
      'cache-control': 'max-age=300'
    })
    
    return {
      list: Utils.serializeNonPOJOs(creatures)
    }
  }
  catch (err) {
    console.error('Error fetching creature list: ', err);
    throw error(500, "Error al recuperar criaturas");
  }
}