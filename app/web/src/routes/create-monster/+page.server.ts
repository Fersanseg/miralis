import { ID } from "$env/static/private";
import { Utils } from "$lib/utils";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user || locals.user.id !== ID) {
    throw redirect(308, "/");
  }
}

export const actions: Actions = {
  createMonster: async ({ locals, request }) => {
    const formData = await request.formData();

    // Pocketbase doesn't allow updating records with files AND other fields together, so they need to be split in two separate FormData
    const noImageFormData = new FormData();
    const onlyImageFormData = new FormData();
    formData.forEach((value, key) => {
      if (key === "image") {
        onlyImageFormData.append('image', value);
      }
      else {
        noImageFormData.append(key, value);
      }
    })

    try {
      // Create the new creature (minus the image) and get its new id
      let hasSpells: boolean = noImageFormData.has("hasSpells");
      const noImgBody = Object.fromEntries(noImageFormData);
      const traits = Utils.stringReplace(noImgBody.traits, ", ", "|");
      const properties = Utils.stringReplace(noImgBody.properties, ", ", "|");
      const skills = Utils.stringReplace(noImgBody.skills, ", ", "|");
      
      let id = "";
      await locals.pb.collection('creatures').create({
          ...noImgBody, 
          traits, 
          properties, 
          skills, 
          hasSpells
        }).then(resp => id = resp.id);
      
      // Update the newly created record with the image
      await locals.pb.collection('creatures').update(id, onlyImageFormData);
    }
    catch (err) {
      console.error("Error al crear criatura", err);
    }
  }
}