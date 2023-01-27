<script lang="ts">
	import InputLabel from "$lib/components/input-label.svelte";
	import { PROPERTIES } from "$lib/constants";

  let propertyNames = Object.keys(PROPERTIES)
  let files: any;
  let selectedFile: string;
  function printFiles() {
    selectedFile = files[0].name;
  }

</script>

<div class="grid grid-cols-[1fr_min-content] max-w-7xl bg-base-200 rounded-xl p-10">
  <form action="?/createMonster" method="POST" enctype="multipart/form-data" class="flex flex-col">
    <InputLabel label="Name:" inputType="text" inputName="name" mandatory/>
    <InputLabel label="Family:" inputType="text" inputName="family"/>
    <InputLabel label="Level:" inputType="text" inputName="level" mandatory/>

    <label for="rarity">Rarity: <span class="text-red-500">*</span></label>
    <select name="rarity" class="max-w-sm mb-5">
      <option value="COMMON">COMMON</option>
      <option value="UNCOMMON">UNCOMMON</option>
      <option value="RARE">RARE</option>
      <option value="UNIQUE">UNIQUE</option>
    </select>
    <label for="size">Size: <span class="text-red-500 mb-5">*</span></label>
    <select name="size" class="max-w-sm mb-5">
      <option value="TINY">TINY</option>
      <option value="SMALL">SMALL</option>
      <option value="MEDIUM">MEDIUM</option>
      <option value="LARGE">LARGE</option>
      <option value="HUGE">HUGE</option>
      <option value="GARGANTUAN">GARGANTUAN</option>
    </select>

    <InputLabel label="Traits ( | separator):" inputType="text" inputName="traits" mandatory/>
    <InputLabel label="Properties ( | separator):" inputType="text" inputName="properties" mandatory/>

    <label for="description">Description: <span class="text-red-500 mb-5">*</span></label>
    <textarea name="description" cols="30" rows="10" class="mb-5"></textarea>

    <InputLabel label="Skills:" inputType="text" inputName="skills"/>
    <InputLabel label="Parts value (empty if no specific value needed):" inputType="text" inputName="partsValue"/>
    <InputLabel label="Parts bulk (empty if no specific value needed):" inputType="text" inputName="partsBulk"/>

    <div class="flex flex-col mb-4">
      <label for="imgFile" class="ml-2">Image: </label>
      <input bind:files={files} on:change={printFiles} type="file" name="imgFile" class="max-w-sm" accept="image/*">
    </div>

    <div>

      <label for="hasSpells">Has Spells: </label>
      <input type="checkbox" name="hasSpells" class="w-4 h-4"/>
    </div>

    <button type="submit" class="btn btn-primary w-20 self-center">Submit</button>

    <input type="hidden" name="image" value={selectedFile}/>
  </form>
  <ul>
    {#each propertyNames as prop}
      <li>{prop}</li>
    {/each}
  </ul>

  <hr class="col-span-2 border-black my-5"/>

  <form action="?/insertTrait" method="POST" class="flex flex-col">
    <InputLabel label="Name" inputType="text" inputName="trait"/>
    <label for="description">Description</label>
    <textarea name="description" cols="30" rows="10" class="mb-5"></textarea>

    <button type="submit" class="btn btn-primary w-20 self-center">Submit</button>
  </form>
</div>