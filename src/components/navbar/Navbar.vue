<template>
  <nav class="navbar navbar-expand-md fixed-top bg-dark">
    <div class="container-fluid">
      <button class="btn btn-dark"><fai icon="arrow-left" :size="iconSize"></fai></button>
      <h3 class="navbar-description">ROZCESTNÍK TEN-T 2015</h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span><fai icon="bars" size="lg"></fai></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mb-2 mb-md-0 justify-content-around">
          <li class="nav-item">
            <a class="nav-link" href="#"><fai icon="exclamation-circle" :size="iconSize"></fai></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dokumenty" data-bs-toggle="dropdown" aria-expanded="false"><fai icon="sticky-note" :size="iconSize"></fai></a>
            <ul class="dropdown-menu" aria-labelledby="dokumenty">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="nastaveni" data-bs-toggle="dropdown" aria-expanded="false"><fai icon="cog" :size="iconSize"></fai></a>
            <ul class="dropdown-menu" aria-labelledby="nastaveni">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><fai icon="chart-pie" :size="iconSize"></fai></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><fai icon="sign-out-alt" :size="iconSize"></fai></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      iconSize: 'lg'
    }
  },
  methods: {

  },
}
</script>

<style scoped>
  .navbar-collapse {
    flex-grow: 0;
  }
  .navbar-description {
    color: white;
    font-size: 20px;
  }
  @media(max-width: 768px) {
    .navbar-description {
      font-size: 100%;
    }
  }
  .nav-item {
    padding-left: 15px;
  }
  .navbar-nav {
    flex-direction: row;
  }
  .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-toggler {
    border: none;
    color: white;
  }
  .navbar-toggler:focus {
    box-shadow: none;
  }
  a {
    color: white;
  }
  a:hover {
    color: #cfcfcf;
  }
  a:focus {
    color: #cfcfcf;
  }
  .dropdown-item {
    color: black;
  }
</style>