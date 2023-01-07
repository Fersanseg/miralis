<script lang="ts">
	import { browser } from "$app/environment";
  import "../app.postcss";
	import type { LayoutData } from "./$types";
  
  export let data: LayoutData;

  let isPcScreen: boolean;
  if (browser) {
    function setIsPcScreen() {
      isPcScreen = window.matchMedia('(max-width: 1024px)').matches;
    }
    
    setIsPcScreen();
    window.addEventListener('resize', setIsPcScreen);
  }
</script>
  
<div class="min-h-full">
  <nav class="navbar px-16 bg-blue-100 border-b-2 border-neutral">
    <div class="flex-1">
      <a href="/" class="mx-auto lg:mx-0 btn btn-ghost normal-case text-xl">Miralis</a>
    </div>
    {#if data.user && !isPcScreen}
    <div class="flex-none">
          <div class="dropdown dropdown-end mr-4">
            <form action="/logout" method="POST">
              <button type="submit" class="btn btn-primary">Logout</button>
            </form>
          </div>
          <div class="dropdown dropdown-end mr-4">
            <a href="/create-monster" class="btn btn-primary">Nuevo monstruo</a>
          </div>
        </div>
        {/if}
  </nav>
  <div class="xl:py-10">
    <div class="mx-auto max-w-7xl sm:px-2 lg:px-4">  
      <slot/>
    </div>
  </div>
</div>