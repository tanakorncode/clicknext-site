<template>
  <section>
    <b-container>
      <div class="mt-5 section-location">
        <div class="mb-4">
          <Heading title="LOCATIONS" class="text-center" data-aos="fade-up" />
        </div>
        <b-row data-aos="fade-up">
          <b-col lg="4" md="4" sm="4">
            <h4 class="color-danger text-left font-weight-bold">Bangkok, TH</h4>
            <p class="text-muted2 text-left">
              128/323-333 30th FL. Phayathai Plaza Bldg. Phayathai road, Thung Phayathai, Ratchathewi, Bangkok, 10400,
              Thailand.
            </p>
            <a href="tel:+66-2217-7900">
              <h6 class="text-muted2 text-left">+66-2217-7900</h6>
            </a>
          </b-col>
          <b-col lg="4" md="4" sm="4">
            <h4 class="color-danger text-left font-weight-bold">Chonburi, TH</h4>
            <p class="text-muted2 text-left">
              เลขที่ 22/14-15 ถนนบางแสนสาย 4 เหนือ ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี 20130
            </p>
            <a href="tel:+66-2217-7900">
              <h6 class="text-muted2 text-left">+66-2217-7900</h6>
            </a>
          </b-col>
          <b-col lg="4" md="4" sm="4">
            <h4 class="color-danger text-left font-weight-bold">Jakarta, ID</h4>
            <p class="text-muted2 text-left">
              PT Klik Digital Nusantara AXA Tower Lantai 36, Kuningan City Jl. Prof. Dr. Satrio Kav. 18 Jakarta Selatan
              12940
            </p>
            <a href="tel:+62-8111-9080-89">
              <h6 class="text-muted2 text-left">+62-8111-9080-89</h6>
            </a>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4" md="4" sm="4"> </b-col>
          <b-col lg="4" md="4" sm="4"> </b-col>
          <b-col lg="4" md="4" sm="4"> </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col cols="12">
            <b-img
              class="m-auto img-responsive"
              alt=""
              src="https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2F11_Slide.png?v=202012190947"
            ></b-img>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
import Heading from "@/components/AppHeading.vue";

export default {
  name: "SectionLocation",
  components: {
    Heading,
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .section-location h4 {
    font-size: 1rem;
  }
}
</style>
