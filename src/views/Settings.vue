<template>
  <!-- navbar on device mode -->
  <nav id="nav-settings" class="navbar">
    <div class="container-fluid">
      <div class="navbar-brand"></div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="card-profil" class="card">
          <div id="img-profil" class="text-center">
            <img
              src="https://source.unsplash.com/500x500?user"
              class="rounded-circle"
              alt="Profil"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Jack Daniel</h5>
            <p class="card-text text-center text-muted">
              Account verified
              <i class="bi bi-check-circle-fill text-success"></i>
            </p>

            <!-- Table of content -->
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <td><i class="bi bi-person-circle"></i> Informasi</td>
                    <td class="text-end">
                      <router-link to="#">
                        <i class="bi bi-arrow-right-short text-dark"></i>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="bi bi-bell-fill"></i> Notifikasi</td>
                    <td class="text-end">
                      <router-link to="#">
                        <i class="bi bi-arrow-right-short text-dark"></i>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="bi bi-bar-chart-line-fill"></i> Statistik</td>
                    <td class="text-end">
                      <router-link to="#">
                        <i class="bi bi-arrow-right-short text-dark"></i>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="bi bi-circle-square"></i> Lainnya</td>
                    <td class="text-end">
                      <router-link to="#">
                        <i class="bi bi-arrow-right-short text-dark"></i>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About -->
    <div class="row">
      <div class="col-md-12 mt-3 text-center">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <th colspan="3">
                <router-link to="/">
                  <div id="card-contact" class="card">
                    <div class="card-body">CONTACT SUPPORT</div>
                  </div>
                </router-link>
              </th>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (max-width: 575.98px) {
  #nav-settings {
    background: #0099ff;
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    height: 200px;
  }
  #card-profil {
    margin-top: 35%;
    border-radius: 1em;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  #img-profil {
    display: block;
    margin-top: -25%;
    margin-left: -35%;
    width: 170%;
  }
  #card-contact {
    background: #0099ff;
    color: white;
    border-radius: 1em;
  }
}
</style>
