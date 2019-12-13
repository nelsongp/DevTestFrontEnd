<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills float-right">
      <li class="nav-link"><router-link to="/">Inicio</router-link></li>
      <li class="nav-link"><router-link to="/addproducts">Agregar Productos</router-link></li>
      <li class="nav-link"><router-link to="/viewproducts">Ver productos</router-link></li>
      </ul>
      <h3 class="text muted">DevApps S.A</h3>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>