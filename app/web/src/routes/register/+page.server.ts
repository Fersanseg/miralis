import { error, redirect, type Actions } from "@sveltejs/kit"

export const actions: Actions = {
  register: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData())
    const group = "user";
    const username = body.name.toString().toLowerCase();

    try {
      await locals.pb.collection('users').create({ username, group, ...body });
      await locals.pb.collection('users').requestVerification(body.email.toString());
    } catch (err) {
      console.error("Error: ", err);
      throw error(500, "Ha ocurrido un error al intentar registrar el usuario");
    }

    throw redirect(303, "/login")
  }
}