<div class="flex flex-col items-center h-full w-full">
  <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
    Crea una cuenta
  </h2>
  <p class="text-center mt-1">
    O <a href="/login" class="text-accent font-medium hover:cursor-pointer hover:underline">accede a tu cuenta</a>
  </p>
  <form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
    <div class="form-control w-full max-w-md">
      <label for="name" class="label font-medium pb-1">
        <span class="label-text">Nombre de usuario</span>
      </label>
      <input type="text" name="name" class="input input-bordered w-full max-w-md"/>
    </div>
    <div class="form-control w-full max-w-md">
      <label for="email" class="label font-medium pb-1">
        <span class="label-text">Email</span>
      </label>
      <input type="email" name="email" class="input input-bordered w-full max-w-md"/>
    </div>
    <div class="form-control w-full max-w-md">
      <label for="password" class="label font-medium pb-1">
        <span class="label-text">Contraseña</span>
      </label>
      <input type="password" name="password" class="input input-bordered w-full max-w-md"/>
    </div>
    <div class="form-control w-full max-w-md">
      <label for="passwordConfirm" class="label font-medium pb-1">
        <span class="label-text">Confirmar contraseña</span>
      </label>
      <input type="password" name="passwordConfirm" class="input input-bordered w-full max-w-md"/>
    </div>

    <div class="w-full max-w-md pt-2">
      <button type="submit" class="btn btn-primary w-full">Crear cuenta</button>
    </div>
  </form>
</div>