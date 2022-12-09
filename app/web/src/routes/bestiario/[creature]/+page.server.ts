import type { PageServerLoad } from ".svelte-kit/types/src/routes/bestiario/[creature]/$types";

export const load: PageServerLoad = async ({ locals, params }) => {
  return {
    item: params.creature
  }
}