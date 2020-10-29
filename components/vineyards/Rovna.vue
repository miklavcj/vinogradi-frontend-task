<template>
  <div class="vinograd">
    <div class="main">
      <div class="icon">
        <img
          src="../../static/images/Rovna.svg"
          alt="Icon for Rovna vineyard"
        />
        <h2>{{ rovna.name }}</h2>
      </div>
      <h3>
        lapornata tla, <br />
        pomesana z ilovnato<br />
        zemljo
      </h3>
    </div>
    <p>{{ rovna.mainText }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rovna: {
        name: "Rovna",
        shortText: `lapornata tla,
        pomesana z ilovnato
        zemljo`,
        mainText: `Že samo ime pove, da gre za ravninski svet. Vinograd leži v bližini
                    Domačije, smer vzhod - zahod. Lapornata tla pomešana z ilovnato zemljo
                    dajeta naši malvaziji bogato strukturo. Vino je bogato z aromami in
                    pikantnostjo, ki vino ohranja dolgo časa sveže. Čeprav je bila ta
                    Sorta nekoč zapostavljena, zaradi velikega pridelka in posledično
                    Slabše kakovosti, je danes sprejeta in priljubljena sorta med vinskimi
                    Ljubitelji. Da je res tako, se prepričajte v naši kleti, kjer vam bomo
                    Z veseljem postregli.
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
    margin-top: 155px;
  }
}
</style>