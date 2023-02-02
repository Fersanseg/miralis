import type { CreaturesResponse } from "$lib/pocketbase-types";
import type { RequestHandler } from "./$types";
import { Utils } from "$lib/utils";
import { error, json } from "@sveltejs/kit";

export const GET: RequestHandler = async ({locals}) => {
  throw error(403, "Forbidden");
  try {
    const dbData: Array<CreaturesResponse>  = await locals.pb.collection('creatures').getFullList(200, {sort: "name"});
    const parsedData = dbData.map(item => {
      return {
        "id": item.id,
        "name": item.name,
        "level": item.level,
        "properties": Utils.splitCreatureProperties(item.properties),
        "size": item.size
      }
    })
    return json({"data": parsedData, "error": null});
  }
  catch (err) {
    return json({"data": null, "error": err})
  }
}