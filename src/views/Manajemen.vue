<template>
  <!-- navbar on device mode -->
  <nav id="nav-manajemen" class="navbar">
    <div class="container-fluid">
      <div class="navbar-brand">
        <strong id="nav-manajemen-title">Manajemen</strong>
        <p id="info-manajemen">
          <span>Lorem ipsum dolor sit amet.</span>
        </p>
      </div>
      <router-link id="add-manejemen-data" class="nav-link" to="/manajemen/add">
        <i class="bi bi-plus-square-fill" style="font-size: 25px"></i>
      </router-link>
    </div>
  </nav>
  <div class="container">
    <!-- Card -->
    <div id="card-manajemen" class="card">
      <div class="card-body">This is some text within a card body.</div>
    </div>

    <!-- Table list -->
    <div id="table-manajemen" class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th colspan="2">
              <span class="text-muted">List data manajemen</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-start">Manajemen data tipe</td>
            <td class="text-end">
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="aksi"
              >
                <button type="button" class="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-eye-fill text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path
                      d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />
                  </svg>
                </button>
                <button type="button" class="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-pencil-square text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </button>
                <button type="button" class="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-trash-fill text-danger"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
@media (max-width: 575.98px) {
  #nav-manajemen {
    background: #0099ff;
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    height: 150px;
  }
  #nav-manajemen-title {
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: white;
  }
  #info-manajemen {
    display: flex;
    margin-bottom: 3px;
    margin-left: 10px;
    color: whitesmoke;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
  #card-manajemen {
    padding: 0.5em 0.5em 0.5em;
    border-radius: 1em;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    top: 110px;
    /* color: white;
    background: #00cba9; */
  }
  #add-manejemen-data {
    margin-right: -5%;
  }
  #table-manajemen {
    margin-top: 140px;
  }
}
</style>
