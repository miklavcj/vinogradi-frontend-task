<template>
  <div class="vinograd">
    <div class="main">
      <div class="icon">
        <img src="../../assets/images/Hrib.svg" alt="Icon for Hrib vineyard" />
        <h2>{{ hrib.name }}</h2>
      </div>
      <h3>terase, z obilico <br />sonca in juzno lego</h3>
    </div>

    <p>{{ hrib.mainText }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hrib: {
        name: "Hrib",
        shortText: `terase, z obilico sonca in juzno lego`,
        mainText: `Hrib nad vasjo, južna lega Vipavske Doline. Rebula ljubljenka teras
                    in obilice sonca. Le kaj naj povemo o tej priljubljeni sorti, česar
                    niso že kritiki, enologi in vinarji o njej povedali in zapisali. Je
                    Udomačena in ukročena, da tisto najboljše, kar od nje pričakujemo.
                    Vino je sveže, okusi po citronah in zelenem jabolku, vonj cvetličen
                    (Akacija, bezeg, lipa). Mladost tega vina je prioriteta.
                    `,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/mixins";

.vinograd {
  @include vineyard-body;

  .main {
    @include vineyard-main;

    .icon {
      @include vineyard-icon;
      align-items: flex-start;
    }

    h2 {
      @include vineyard-h2;
    }

    h3 {
      @include vineyard-h3;
    }
  }

  p {
    @include vineyard-p;
  }
}
</style>