import { ID } from "$env/static/private";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user || locals.user.id !== ID) {
    throw redirect(308, "/");
  }
}

export const actions: Actions = {
  createMonster: async ({ request }) => {
    
  }
}