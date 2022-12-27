import PocketBase from 'pocketbase';
import type { Handle } from '@sveltejs/kit'
import { Utils } from '$lib/utils';
import { PB_LOCAL } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase(PB_LOCAL);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "")

  if (event.locals.pb.authStore.isValid) {
    event.locals.user = Utils.serializeNonPOJOs(event.locals.pb.authStore.model);
  }
  else {
    event.locals.user = undefined;
  }

  const response = await resolve(event);

  response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: true }));

  return response;
}
