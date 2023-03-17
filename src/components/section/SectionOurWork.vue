<template>
  <section>
    <b-container>
      <div class="mt-5">
        <b-row>
          <b-col lg="6" md="6" sm="12">
            <Heading title="OUR WORK" />
          </b-col>
          <b-col lg="6" md="6" sm="12">
            <div class="text-muted2 text-left desc" data-aos="fade-left">
              {{ description }}
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
import Heading from "@/components/AppHeading.vue";

export default {
  name: "SectionOurWork",
  components: {
    Heading,
  },
  data() {
    return {
      description: `เราสร้างสรรค์ผลงานที่ใช่สำหรับคุณและนำไปใช้พัฒนาธุรกิจของคุณได้จริง ด้วยทีมงานมืออาชีพมากประสบการณ์ที่เข้าใจธุรกิจคุณที่สุด`,
    };
  },
};
</script>

<style lang="scss" scoped>
.desc {
  font-size: 18px;
  line-height: 1.5;
  font-family: Prompt;
  font-weight: 500;
}
@media (max-width: 767px) {
  .desc {
    font-size: 14px;
  }
}
</style>
