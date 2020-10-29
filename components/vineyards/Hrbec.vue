<template>
  <div class="vinograd">
    <div class="main">
      <div class="icon">
        <img
          src="../../static/images/Hrbec.svg"
          alt="Icon for Hrbec vineyard"
        />
        <h2>{{ hrbec.name }}</h2>
      </div>
      <h3>terase, z razgledom na <br />lepote doline</h3>
    </div>
    <p>{{ hrbec.mainText }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hrbec: {
        name: "Hrbec",
        shortText: `terase, z razgledom na lepote doline`,
        mainText: `Hrbec nosi barbero. Njegov pogled nam odkrije bogastvo in lepoto celotne
                    doline od vzhoda do zahoda. Vinograd je v terasah z lapornatimi tlemi.
                    Eno šparonska vzgoja, daje tej sorti vina vse tisto, kar je bilo kot
                    zelo rodovitni trti odvzeto. Zelo omejen pridelek,ki ga dodatno odvzame
                    še poletna suša, daje temu vinu poseben pečat. Optimalna dozorelost in
                    visoke stopnje sladkorja vinu dajejo vse tisto, kar se od sorte
                    Pričakuje. V okusu je vino sveže, harmonično, elegantno z okusi višenj
                    in sliv.
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
    margin-top: 175px;
  }
}
</style>