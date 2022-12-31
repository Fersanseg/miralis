<script>
  export let data = { imgUrl: '', title: '', text: '', routeTo: '' }
</script>

<a href="{data.routeTo}"
   class="bg-base-200 rounded-2xl flex xl:flex-col lg:flex-row items-center
    p-7 md:p-6 xl:p-10
    transition-all duration-200 ease-in-out hover:bg-green-300 hover:bg-opacity-90 hover:scale-102">
  <img src="{data.imgUrl}" class="rounded-2xl max-w-0 md:max-w-[15rem] xl:max-w-md" alt="libro.jpg"/>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl lg:text-5xl md:text-4xl font-bold text-center mb-4 lg:mb-10 xl:my-4">{data.title}</h1>
    <p class="md:ml-5 text-base md:text-lg lg:text-xl">{data.text}</p>
  </div>
</a>