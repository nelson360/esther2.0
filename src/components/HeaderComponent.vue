<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/home">MaishaCare</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="showMenu = !showMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{ show: showMenu }" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/qualification">Careers</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Why-Us">Why Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>
.header {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
}

.logo {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 24px;
}

.nav-links ul {
  list-style: none;
  display: flex;
  margin-left: auto;
}

.nav-links li {
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
}

.nav-links li a {
  color: #333;
  text-decoration: none;
}

.burger {
  display: none;
  cursor: pointer;
  margin-left: 20px;
}

.burger .line {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: all 0.3s ease;
}

.mobile-nav-links {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.mobile-nav-links ul {
  list-style: none;
  padding: 0;
}

.mobile-nav-links.active {
  display: block;
}

@media only screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: block;
  }

  .mobile-nav-links {
    position: static;
    width: 100%;
  }
}
</style>
