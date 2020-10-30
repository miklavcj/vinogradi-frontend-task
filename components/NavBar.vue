<template>
  <div>
    <div class="navContainer">
      <img src="../assets/images/Logo.svg" alt="Ana Belle Logo" />

      <ul class="links">
        <a v-for="link in links" :key="link.name" :href="link.url" class="link">
          <li :class="{ active: activeLink === link.name }">
            {{ link.name }}
          </li></a
        >
      </ul>
      <ul class="languages">
        <a v-for="item in languages" :key="item.language" :href="item.url">
          <li :class="{ active: lang === item.language }">
            {{ item.language }}
          </li></a
        >
      </ul>
    </div>
    <Dropdown
      :links="links"
      :languages="languages"
      :activeLink="activeLink"
      :lang="lang"
      class="disableOnBig"
    />
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
export default {
  components: {
    Dropdown,
  },
  name: "NavBar",
  data() {
    return {
      activeLink: "Vinogradi",
      lang: "SLO",
      links: [
        { name: "Zgodba", url: "#" },
        { name: "Vino", url: "#" },
        { name: "Vinogradi", url: "#" },
        { name: "Kmetija", url: "#" },
        { name: "Kontakt", url: "#" },
      ],
      languages: [
        { language: "SLO", url: "#" },
        { language: "ANG", url: "#" },
        { language: "DE", url: "#" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.navContainer {
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include breakpoint(800px) {
    display: none;
  }

  a {
    text-decoration: none;
    list-style-type: none;
    margin: 25px 0;
  }
  a:hover {
    color: $secondary;
  }

  img {
    max-width: 250px;
  }

  .links {
    width: 65%;
    display: flex;
    justify-content: space-between;
  }

  .link {
    color: black;
    font-family: "LLRG";
    font-size: 23px;
    width: 84%;
    margin: 0 auto;
    text-align: center;
    align-self: center;

    li {
      margin-right: 20px;
    }
  }

  .active {
    color: $active;
  }

  .dropdown {
    display: none;
  }
}

.languages {
  li {
    font-size: 18px;
    color: $grey;
    margin: 5px 0;
  }
  li:hover {
    color: $secondary;
  }

  .active {
    color: $active;
  }
}

.disableOnBig {
  display: none;
  @include breakpoint(800px) {
    display: block;
  }
}
</style>
