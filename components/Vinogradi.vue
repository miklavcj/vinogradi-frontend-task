<template>
  <div>
    <div class="imgContainer">
      <div class="iconContainer">
        <div
          class="svgIcon"
          :class="{ svgIconActive: showVineyard === 'rebisce' }"
          @click="changeVineyard(vinogradi.rebisce.show)"
        >
          <img src="../assets/images/Rebisce.svg" alt="Rebisce vineyard icon" />
          <p>Rebišče</p>
        </div>
        <div class="tr" :class="{ trActive: showVineyard === 'rebisce' }"></div>
      </div>

      <div class="iconContainer">
        <div
          class="svgIcon"
          :class="{ svgIconActive: showVineyard === 'leskovca' }"
          @click="changeVineyard(vinogradi.leskovca.show)"
        >
          <img
            src="../assets/images/Leskovca.svg"
            alt="Leskovca vineyard icon"
          />
          <p>Leskovca</p>
        </div>
        <div
          class="tr"
          :class="{ trActive: showVineyard === 'leskovca' }"
        ></div>
      </div>

      <div class="iconContainer">
        <div
          class="svgIcon"
          :class="{ svgIconActive: showVineyard === 'rovna' }"
          @click="changeVineyard(vinogradi.rovna.show)"
        >
          <img src="../assets/images/Rovna.svg" alt="Rovna vineyard icon" />
          <p>Rovna</p>
        </div>
        <div class="tr" :class="{ trActive: showVineyard === 'rovna' }"></div>
      </div>

      <div class="iconContainer">
        <div
          class="svgIcon"
          :class="{ svgIconActive: showVineyard === 'hrbec' }"
          @click="changeVineyard(vinogradi.hrbec.show)"
        >
          <img src="../assets/images/Hrbec.svg" alt="Hrbec vineyard icon" />
          <p>Hrbec</p>
        </div>
        <div class="tr" :class="{ trActive: showVineyard === 'hrbec' }"></div>
      </div>

      <div class="iconContainer">
        <div
          class="svgIcon"
          :class="{ svgIconActive: showVineyard === 'hrib' }"
          @click="changeVineyard(vinogradi.hrib.show)"
        >
          <img src="../assets/images/Hrib.svg" alt="Hrib vineyard icon" />
          <p>Hrib</p>
        </div>
        <div class="tr" :class="{ trActive: showVineyard === 'hrib' }"></div>
      </div>

      <div class="iconContainer">
        <div
          class="svgIcon"
          :class="{ svgIconActive: showVineyard === 'glinsek' }"
          @click="changeVineyard(vinogradi.glinsek.show)"
        >
          <img src="../assets/images/Glinsek.svg" alt="Glinsek vineyard icon" />
          <p>Glinšek</p>
        </div>
        <div class="tr" :class="{ trActive: showVineyard === 'glinsek' }"></div>
      </div>
    </div>

    <Rebisce v-show="showVineyard === 'rebisce'" />
    <Leskovca v-show="showVineyard === 'leskovca'" />
    <Rovna v-show="showVineyard === 'rovna'" />
    <Hrbec v-show="showVineyard === 'hrbec'" />
    <Hrib v-show="showVineyard === 'hrib'" />
    <Glinsek v-show="showVineyard === 'glinsek'" />
  </div>
</template>

<script>
import Rebisce from "./vineyards/Rebisce";
import Leskovca from "./vineyards/Leskovca";
import Rovna from "./vineyards/Rovna";
import Hrbec from "./vineyards/Hrbec";
import Hrib from "./vineyards/Hrib";
import Glinsek from "./vineyards/Glinsek";

export default {
  components: {
    Rebisce,
    Leskovca,
    Rovna,
    Hrbec,
    Hrib,
    Glinsek,
  },
  data() {
    return {
      showVineyard: "rebisce",
      vinogradi: {
        rebisce: { name: "Rebišče", show: "rebisce" },
        leskovca: { name: "Leskovca", show: "leskovca" },
        rovna: { name: "Rovna", show: "rovna" },
        hrbec: { name: "Hrbec", show: "hrbec" },
        hrib: { name: "Hrib", show: "hrib" },
        glinsek: { name: "Glinšek", show: "glinsek" },
      },
    };
  },
  methods: {
    changeVineyard(value) {
      this.showVineyard = value;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variables";

.imgContainer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
  padding: 0 100px;

  height: 1050px;
  background-image: url("../assets/images/vinograd.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .iconContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;

    .svgIcon {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      font-size: 30px;
      font-weight: 700;
      filter: grayscale(100%) brightness(200%);
      transition: 0.2s;

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        filter: none;
      }

      img {
        height: 72px;
      }
    }

    .svgIconActive {
      filter: none;
    }

    .tr {
      width: 60%;
      padding-bottom: 30%;
      position: relative;
      overflow: hidden;
      opacity: 0;
    }
    .tr:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;

      -webkit-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      transform-origin: 0 100%;

      -webkit-transform: rotate(30deg) skewX(-30deg);
      -ms-transform: rotate(30deg) skewX(-30deg);
      transform: rotate(30deg) skewX(-30deg);
    }

    .trActive {
      opacity: 1;
    }
  }

  p {
    margin-top: 20px;
  }
}

@include breakpoint(1000px) {
  .imgContainer {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
    padding: 0;
    padding-top: 20px;
    margin-top: 20px;

    .iconContainer {
      justify-content: space-around;

      .svgIcon {
        img {
          height: 50px;
        }
      }

      .tr {
        display: none;
      }
    }

    p {
      margin-top: 20px;
    }
  }
}

@include breakpoint(600px) {
  .imgContainer {
    background-image: none;
    background-color: $secondary;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
    padding: 0;
    padding-top: 20px;
    margin-top: 20px;

    .iconContainer {
      justify-content: space-around;

      .svgIcon {
        font-size: 25px;

        &:hover {
          cursor: pointer;

          img {
            filter: brightness(30%);
          }
        }

        img {
          height: 50px;
        }
      }
      .svgIconActive {
        img {
          filter: brightness(30%);
        }
      }
    }
  }
}
</style>
