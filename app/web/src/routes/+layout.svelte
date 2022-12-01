<script>
  import "../app.postcss";
  /**
	 * @type {{ user: any; }}
	 */
   export let data;
</script>
  
<div class="min-h-full">
  <nav class="navbar bg-base-100 border-b">
    <div class="flex-1 ">
      <a href="/" class="btn btn-ghost normal-case text-xl">Miralis</a>
    </div>
    <div class="flex-none">
      {#if !data.user}
        <div class="dropdown dropdown-end">
          <a href="/login" class="btn btn-primary">Login</a>
        </div>
        {:else}
          <div class="dropdown dropdown-end mr-4">
            <span class="btn btn-primary">Utils</span>
          </div>
      {/if}
    </div>
  </nav>
  <div class="py-10">
    <div class="mx-auto max-w-7xl sm:px6 lg:px-8">  
      <slot/>
    </div>
  </div>
</div>