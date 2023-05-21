import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { Utils } from '$lib/utils';

export const load: PageServerLoad = (async ({ locals, params }) => {
    try {
        const bg = await locals.pb.collection('backgrounds').getOne(params.background)

        return {
            bg: Utils.serializeNonPOJOs(bg)
        };
    }
    catch (err) {
        console.error("Error recuperando un trasfondo", err);
        throw error(500, "Error recuperando un trasfondo");
    }
})