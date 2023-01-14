<script lang="ts">
  export let text: string;
</script>

<div class="flex w-full h-fit my-4">
  <hr class="relative border-slate-700 w-full self-center"/>
  <button class="btn btn-outline mx-4" on:click>{text}</button>
  <hr class="relative border-slate-700 w-full self-center"/>
</div>