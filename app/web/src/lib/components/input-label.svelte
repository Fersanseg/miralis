<script lang=ts>
  export let label: string = "";
  export let inputName: string = "";
  export let inputType: "text"|"number"|"file";
  export let mandatory: boolean = false;
</script>

<div class="flex flex-col mb-4">
  <label for={inputName} class="ml-2">{label}
    {#if mandatory}
      <span class="text-red-500">*</span>
    {/if}
  </label>
  
  <input type={inputType} name={inputName} class="max-w-sm rounded-lg">
</div>