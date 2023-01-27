import type { LayoutServerLoad } from ".svelte-kit/types/src/routes/$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    user: getUser(locals),
    traits: getTraits(locals)
  }
}

function getUser(locals: App.Locals) {
  if (locals.user) {
    return locals.user
  }
  
  return undefined
}

async function getTraits(locals: App.Locals) {
  if (locals.traits)
    return locals.traits;
  
  try {
    const traitsList = await locals.pb.collection("traits").getFullList()
    .then(res => {
      return res.map(tr => {
        return {
          trait: tr.trait,
          description: tr.description
        }
      })
    });
    
    return traitsList;
  }
  catch (err) {
    console.error("Error fetching traits: ", err);
    return null;
  }
}