import { error, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  login: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());
    const user = body.name.toString().toLowerCase();
    const pw = body.password.toString();

    try {
      //await locals.pb.collection('users').authWithPassword(user, pw);
      await locals.pb.admins.authWithPassword(user, pw);

    } catch (err) {
      console.error("Error: ", err);
      throw error(500, "Error al intentar login");
    }

    throw redirect(303, "/");
  }
}