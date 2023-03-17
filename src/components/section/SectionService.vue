<template>
  <section>
    <b-container>
      <div class="mt-5">
        <b-row>
          <b-col lg="6" md="6" sm="12">
            <Heading title="SERVICE" />
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
  name: "SectionService",
  components: {
    Heading,
  },
  data() {
    return {
      description:
        "เราเป็นนักพัฒนาซอฟต์แวร์มืออาชีพที่เน้นกระบวนการพัฒนาซอฟต์แวร์แบบครบวงจร เพื่อให้ลูกค้าได้รับผลงานที่มีคุณภาพและส่งมอบตรงเวลา",
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
