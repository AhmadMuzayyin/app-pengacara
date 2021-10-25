<template>
  <div id="nav" class="nav">
    <router-link class="nav-link" to="/">
      <i class="bi bi-house-fill" style="text-align: center"></i>
    </router-link>
    <router-link class="nav-link" to="/manajemen"
      ><i class="bi bi-file-earmark-bar-graph-fill"></i>
    </router-link>
    <router-link class="nav-link" to="/pelanggan"
      ><i class="bi bi-person-lines-fill"></i
    ></router-link>
    <router-link class="nav-link" to="/settings"
      ><i class="bi bi-gear-fill"></i
    ></router-link>
  </div>
  <router-view />
</template>
<style>
#nav {
  /* background: #0099ff; */
  background: #40a6ff;
  justify-content: center;
}
.nav-link {
  color: white;
  padding: 1rem 2rem;
}
@media (max-width: 575.98px) {
  #nav {
    position: fixed;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }
}
</style>
