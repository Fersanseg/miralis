<script lang="ts">
  import { browser } from "$app/environment";
	import type { LayoutData } from "./$types";
  import isSmallScreen from "$lib/stores/smallScreenStore";
  import isPcScreen from "$lib/stores/pcScreenStore";
  import "../app.postcss";
  
  export let data: LayoutData;
  
  if (browser) {
    function setIsPcScreen() {
      $isPcScreen = window.matchMedia('(max-width: 1024px)').matches;
    }
    function setIsSmallScreen() {
      $isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    }
    
    setIsPcScreen();
    window.addEventListener('resize', setIsPcScreen);
    window.addEventListener('resize', setIsSmallScreen);
  }
</script>
  
<div class="{$isSmallScreen ? 'min-h-screen': 'h-full'}">
  <nav class="navbar px-16 bg-blue-100 border-b-2 border-neutral">
    <div class="flex-1">
      <a href="/" class="mx-auto lg:mx-0 btn btn-ghost normal-case text-xl">Miralis</a>
    </div>
    {#if data.user && !$isPcScreen}
    <div class="flex-none">
          <div class="dropdown dropdown-end mr-4">
            <form action="/logout" method="POST">
              <button type="submit" class="btn btn-accent">Logout</button>
            </form>
          </div>
          <div class="dropdown dropdown-end mr-4">
            <a href="/create-monster" class="btn btn-primary">Nuevo monstruo</a>
          </div>
        </div>
        {/if}
  </nav>
  <div class="lg:mt-10 md:mb-10 {$isSmallScreen ? 'min-h-screen' : 'mb-10'}">
    <div class="mx-auto max-w-7xl lg:px-10 {$isSmallScreen ? 'min-h-screen' : ''}">  
      <slot/>
    </div>
  </div>
</div>