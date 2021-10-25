<template>
  <!-- navbar on device mode -->
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-brand">
        <img
          src="https://source.unsplash.com/50x50?user"
          class="rounded-circle mx-auto d-block float-start"
          alt="user"
        />
        <strong id="user-login">Jack Daniel</strong><br />
        <span id="jabatan">Admin</span>
      </div>
      <router-link
        id="sliderr"
        class="nav-link"
        to="#"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i class="bi bi-sliders" style="font-size: 1.3rem"></i>
      </router-link>
    </div>
  </nav>
  <!-- Off canvas -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Pengaturan</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">...</div>
  </div>
  <!-- Content -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 id="title-card"><strong>Jadwal Terbaru</strong></h1>
        <div id="card" class="card">
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            distinctio sit repellat nobis inventore officiis.
          </div>
        </div>
      </div>
    </div>

    <div id="table" class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th colspan="3">
                  <span class="text-muted">Jadwal Terlaksana</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2">
                  <img
                    src="https://source.unsplash.com/50x50?food-drink"
                    class="image-user mx-auto d-block float-start mt-1"
                    alt="user"
                  />
                  <p id="user">
                    <strong> Mikle</strong>
                  </p>
                </td>
                <td>
                  <p id="data-user" class="text-center">
                    <strong>20%</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <img
                    src="https://source.unsplash.com/50x50?food-drink"
                    class="image-user mx-auto d-block float-start mt-1"
                    alt="user"
                  />
                  <p id="user">
                    <strong> Mikle</strong>
                  </p>
                </td>
                <td>
                  <p id="data-user" class="text-center">
                    <strong>20%</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <img
                    src="https://source.unsplash.com/50x50?food-drink"
                    class="image-user mx-auto d-block float-start mt-1"
                    alt="user"
                  />
                  <p id="user">
                    <strong> Mikle</strong>
                  </p>
                </td>
                <td>
                  <p id="data-user" class="text-center">
                    <strong>20%</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#card {
  padding: 0.5em 0.5em 0.5em;
  border-radius: 2em;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  top: 75px;
  /* color: white;
  background: #663ff5; */
}
@media (max-width: 575.98px) {
  #card {
    padding: 0.5em 0.5em 0.5em;
    border-radius: 2em;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    top: 150px;
    color: white;
    /* background: #00cba9; */
    /* background: #0099ff; */
    /* background: #d0b96f; */
    background: #40a6ff;
    height: 10rem;
  }
  #table {
    margin-top: 180px;
  }
  #user {
    font-size: 20px;
    display: inline-block;
    margin-top: 10px;
    margin-left: 5px;
  }
  #data-user {
    font-size: 20px;
    display: block;
    margin-top: 10px;
  }
  .image-user {
    width: 50px;
    border-radius: 20%;
    margin: 0 auto;
  }
  #title-card {
    margin-top: 110px;
    margin-bottom: -145px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .navbar {
    /* background: #0099ff; */
    background: #40a6ff;
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    height: 100px;
  }
  #user-login {
    margin-left: 10px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: white;
  }
  img {
    width: 30%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .nav-user {
    color: white;
    display: flex;
    margin-right: -100%;
  }
  #sliderr {
    margin-right: -9%;
  }
  #jabatan {
    margin-left: 10px;
    margin-top: -5px;
    color: whitesmoke;
    font-style: italic;
    font-family: "Courier New", Courier, monospace;
  }
}
</style>
