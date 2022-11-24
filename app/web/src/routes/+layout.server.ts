import type { LayoutServerLoad } from ".svelte-kit/types/src/routes/$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  if (locals.user) {
    return {
      user: locals.user
    }
  }

  return {
    user: undefined
  }
}