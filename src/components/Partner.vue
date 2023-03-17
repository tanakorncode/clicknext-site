<template>
  <section>
    <div data-aos="fade-up" class="container mt-3">
      <b-row>
        <b-col cols="12" sm="4" class="m-auto">
          <span class="text-muted2 font-weight-bold font-size-lg flex-grow-1 d-flex justify-content-start">
            {{ title }}
          </span>
        </b-col>
        <b-col cols="12" sm="8" class="m-auto">
          <div>
            <b-img class="img-responsive m-auto" :src="img"></b-img>
          </div>
        </b-col>
      </b-row>
    </div>

    <div data-aos="fade-up" class="container mt-3">
      <b-row>
        <b-col v-for="(item, key) in items" :key="key" md="3" sm="6" class="m-auto col-xs-6">
          <div class="d-flex justify-content-between flex-grow-1 mb-3">
            <div class="bg-white partner-card mb-1 mb-md-0 rounded-lg box-shadow-custom">
              <div :class="$style.partnerNo" class="partner-no">
                {{ item.no }}
              </div>
              <span class="font-weight-bold letter-spacing-2px text-muted2 partner-title">
                {{ item.title }}
              </span>
            </div>
            <!-- <div class="bg-white w-250px h-150px mb-1 mb-md-0 rounded-lg box-shadow-custom">
              <div :class="$style.partnerNo">100+</div>
              <span class="font-weight-bold letter-spacing-2px text-muted2">Clients Love US</span>
            </div> -->
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<style module>
.partnerNo {
  font-size: 4rem;
  font-weight: 600;
  color: #e0042a;
  margin: auto;
  padding-top: 10px;
}
</style>

<script>
export default {
  name: "ClicknextPartner",
  data() {
    return {
      title: "STRATEGIC PARTNER",
      img: "https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/02_Partner.png?v=202012190947",
      items: [
        {
          no: "210+",
          title: "Clicknexter",
        },
        {
          no: "100+",
          title: "Clients Love US",
        },
        {
          no: "100+",
          title: "Successful Project",
        },
        {
          no: "19+",
          title: "Years In Business",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.partner-card {
  width: 250px;
  height: 150px;
}
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
  .partner-no {
    font-size: 2.5rem;
  }
  .partner-title {
    font-size: 10px;
  }
  .partner-card {
    width: 200px;
    height: 100px;
  }
}
</style>
