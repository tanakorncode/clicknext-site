<template>
  <div class="swiper mt-5">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="true"
    >
      <template v-for="(item, key) in slideItems">
        <swiper-slide :key="key">
          <!-- shutters image must have "swiper-shutters-image" class, one image per slide -->
          <div class="slide-image">
            <img
              v-lazy="item.img"
              alt="Image Preview"
              :src="item.img"
              class="swiper-shutters-image w-100 img-responsive transform-1"
            />
          </div>
          <!-- demo slide title -->
          <div class="swiper-slide-title" data-swiper-parallax="50%">&nbsp;</div>
        </swiper-slide>
      </template>

      <!-- <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "SlideWorking",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        loop: true,
        speed: 1000,
        mousewheel: false,
        grabCursor: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        // Some Swiper option/callback...
      },
      slideItems: [
        {
          title: "Clicknext",
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2F06___Slide_1_edit1.png",
        },
        {
          title: "Clicknext",
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2F06___Slide_2_edit1.png",
        },
        {
          title: "Clicknext",
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2F06___Slide_3_edit1.png",
        },
        {
          title: "Clicknext",
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2F06___Slide_4.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
