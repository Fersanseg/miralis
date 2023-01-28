import type { CreaturesRecord } from "$lib/pocketbase-types";
import type { RequestHandler } from "./$types";
import { Utils } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async ({locals}) => {
  try {
    const dbData: Array<CreaturesRecord>  = await locals.pb.collection('creatures').getFullList(200, {sort: "name"});
    const parsedData = dbData.map(item => {
      return {
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