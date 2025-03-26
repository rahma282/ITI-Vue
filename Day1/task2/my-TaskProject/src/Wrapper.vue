<template>
  <div class="wrapper bg-dark text-light">
    <Header />
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <Link msg="click here" />
        </div>
        <div class="col-md-8">
          <Body msg="welcome for body" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import Link from './components/Link.vue';

export default {
  name: 'Wrapper',
  components: {
    Header,
    Body,
    Link,
    Footer
  }
};
</script>

<style>
body {
  background-color: #212529;
  color: #ffffff;
}

.wrapper {
  font-family: 'Arial', sans-serif;
}

.min-vh-100 {
  min-height: 100vh;
}
</style>