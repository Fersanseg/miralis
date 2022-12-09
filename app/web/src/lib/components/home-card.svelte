<script>
  export let data = { imgUrl: '', title: '', text: '', routeTo: '' }
</script>

<a href="{data.routeTo}"
   class="bg-base-200 rounded-2xl flex flex-col items-center
    transition-all duration-200 ease-in-out hover:bg-green-300 hover:bg-opacity-90 hover:scale-102">
  <img src="{data.imgUrl}" class="max-w-md rounded-2xl mt-12 mb-4" alt="libro.jpg"/>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-bold text-center">{data.title}</h1>
    <p class="py-10 mx-16">{data.text}</p>
  </div>
</a>