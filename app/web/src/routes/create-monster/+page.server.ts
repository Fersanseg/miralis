import { ID } from "$env/static/private";
import { Utils } from "$lib/utils";
import { error, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user || locals.user.id !== ID) {
    throw redirect(308, "/");
  }
}

export const actions: Actions = {
  createMonster: async ({ locals, request }) => {
    try {
      const body = Object.fromEntries(await request.formData());
      // We don want to upload the file, we just used it as a pretext to save its name to 'image'
      delete body.imgFile;
      // Parse traits/props/skills to db format
      const traits = Utils.stringReplace(body.traits, ", ", "|");
      const properties = Utils.stringReplace(body.properties, ", ", "|");
      const skills = Utils.stringReplace(body.skills, ", ", "|");
      // If the 'hasSpells' checkbox isn't marked, it doesn't get included in the form data.
      // So if the form data includes, the check is marked (hasSpells=true), otherwise it isn't (hasSpells=false)
      const hasSpells = Object.keys(body).includes("hasSpells");
 
      // Create the new record
      await locals.pb.collection('creatures').create({
        ...body,
        traits, 
        properties, 
        skills, 
        hasSpells
      });
    } catch (err) {
      throw error(400, `Ha ocurrido un error al intentar crear una nueva criatura\n${err}`);
    }
  },

  insertTrait: async ({ locals, request }) => {
    try {
      const body = Object.fromEntries(await request.formData());
      await locals.pb.collection('traits').create(body);
    }
    catch (err){
      throw error(400, `Ha ocurrido un error al intentar crear un nuevo trait\n${err}`);
    }
  }
}