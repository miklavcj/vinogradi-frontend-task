<template>
  <div>
    <div class="navContainer">
      <img src="../static/images/Logo.svg" alt="Ana Belle Logo" />
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
  </div>
</template>

<script>
export default {
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

.navContainer {
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    list-style-type: none;
    margin: 25px 0;
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
  }

  .active {
    color: $active;
  }
}

.languages {
  li {
    font-size: 18px;
    color: #aeadae;
    margin: 5px 0;
  }

  .active {
    color: $active;
  }
}
</style>
