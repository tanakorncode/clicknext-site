<template>
  <div class="swiper">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="true"
    >
      <swiper-slide v-for="(item, key) in slideItems" :key="key">
        <!-- one image per slide -->
        <div class="slide-image">
          <b-img
            v-lazy="item.img"
            alt="Image Preview"
            :src="item.img"
            class="swiper-shutters-image w-100 img-responsive"
          ></b-img>
        </div>
        <!-- slide title -->
        <div class="swiper-slide-title" data-swiper-parallax="50%">
          {{ item.title }}
        </div>
      </swiper-slide>
      <!-- <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "SlideClicknext1",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
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
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2Fsection_01_herobanner.jpg",
        },
        {
          title: "Clicknext",
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2Fsection_01_herobanner.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$breakpoints: (
  "sm": 630px,
  "md": 768px,
  "lg": 1024px,
);
.swiper {
  will-change: transform;
}

.slide-image {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height: 530px;
  width: 100%;
}
.slide-image img {
  height: 100%;
  width: 100%;
  max-height: 530px;
  object-fit: fill;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: scale3d(1.3, 1.3, 1); // 3d to hardware accelerate
  backface-visibility: hidden;
  will-change: transform;
  transition: transform 1400ms ease;
}

// @media (min-width: map-get($breakpoints, "sm")) {
//   .slide-image,
//   .slide-image img {
//     max-height: 150px !important;
//   }
// }
// @media (min-width: map-get($breakpoints, "md")) {
//   .slide-image,
//   .slide-image img {
//     max-height: 350px !important;
//   }
// }
.swiper-slide {
  width: 100%;
  background-color: white;
  overflow: hidden;

  &.swiper-slide-active,
  &.swiper-slide-duplicate-active {
    .slide-image img {
      transform: scale3d(1, 1, 1);
    }
  }

  @media (min-width: map-get($breakpoints, "sm")) {
    width: 50%;
  }

  // @media (min-width: map-get($breakpoints, "md")) {
  //   width: 33.333333%;

  //   &.swiper-slide-next,
  //   &.swiper-slide-prev,
  //   &.swiper-slide-duplicate-next,
  //   &.swiper-slide-duplicate-prev {
  //     .slide-image img {
  //       transform: scale3d(1, 1, 1);
  //     }
  //   }
  // }

  @media (min-width: map-get($breakpoints, "lg")) {
    width: 25%;
  }

  @media (max-width: 767px) {
    .swiper-slide-title {
      font-size: 10px;
    }
  }
}
</style>
