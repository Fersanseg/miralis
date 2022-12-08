<script>
  export let data = { imgUrl: '', title: '', text: '', routeTo: '' }
</script>

<a href="{data.routeTo}" class="bg-base-300 rounded-2xl flex flex-col items-center">
  <img src="{data.imgUrl}" class="max-w-md rounded-2xl mt-12 mb-4" alt="libro.jpg"/>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-bold text-center">{data.title}</h1>
    <p class="py-10 mx-16">{data.text}</p>
  </div>
</a>
    