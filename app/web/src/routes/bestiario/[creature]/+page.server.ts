import { Utils } from "$lib/utils";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/bestiario/[creature]/$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals, params }) => {
  try {
    const creature = await locals.pb.collection('creatures').getOne(params.creature)
      .then(item => {
        return {
          ...item, 
          image: locals.pb.getFileUrl(item, item.image),
          traits: Utils.sanitizeBarString(item.traits)
        };
      })
      
    return {
      creature: Utils.serializeNonPOJOs(creature)
    }
  }
  catch (err) {
    console.error('Error fetching creature list: ', err);
    throw error(500, "Error al recuperar criaturas");
  }
}