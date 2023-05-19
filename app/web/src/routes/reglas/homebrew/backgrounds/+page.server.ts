import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { Utils } from "$lib/utils";
import { ID } from "$env/static/private";

export const load: PageServerLoad = async ({ locals }) => {
    try {
        const backgrounds = await locals.pb.collection('backgrounds').getFullList(200, {
            sort: 'name'
        });

        return {
            backgrounds: Utils.serializeNonPOJOs(backgrounds),
            isAdmin: locals.user && locals.user.id === ID ? true : false
        };
    }
    catch (err) {
        console.error("Error al recuperar trasfondos", err);
        throw error(500, 'Error al recuperar trasfondos');
    }
};