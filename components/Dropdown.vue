<template>
  <div class="dropdown">
    <img src="../assets/images/Logo.svg" alt="Ana Belle Logo" />
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <div class="menu">
      <ul class="menu-item">
        <a v-for="(link, i) in links" :key="i" :href="link.url" class="link">
          <li :class="{ active: activeLink === link.name }">
            {{ link.name }}
          </li></a
        >
      </ul>
      <ul class="menu-item">
        <a
          class="secondary"
          v-for="item in languages"
          :key="item.language"
          :href="item.url"
        >
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
  props: {
    links: Array,
    languages: Array,
    activeLink: String,
    lang: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.dropdown {
  width: 100%;
  position: relative;
  margin-top: 20px;

  img {
    margin-left: 20px;
    width: 150px;
  }

  /* menu */

  .menu {
    background-color: #fff;
    position: absolute;
    width: 100%;
    max-height: 0;
    padding: 10px;
    z-index: 3;
    transition: max-height 0.2s ease-out;
    display: flex;
    justify-content: space-between;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
    }

    a {
      color: black;
      font-family: "LLRG";
      display: block;
      padding: 10px 20px;
      text-decoration: none;

      .active {
        color: $active;
      }
    }

    a:hover {
      color: $secondary;
    }

    .menu-item {
      max-height: 0;
      transition: max-height 0.2s ease-out;

      .secondary {
        font-family: "Courier Prime", monospace;
        font-size: 14px;

        .active {
          color: $active;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;

    .navicon {
      background: #333;
      display: block;
      height: 2px;
      position: relative;
      transition: 0.2s ease-out;
      width: 18px;
    }

    .navicon:before,
    .navicon:after {
      background: #333;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }
    /* menu icon */
    .navicon:before {
      top: 5px;
    }

    .navicon:after {
      top: -5px;
    }
  }

  /* menu btn */

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .menu-btn:checked ~ .menu .menu-item {
    max-height: 240px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
}
</style>
