<template>
  <div class="home">
    <!-- Section Slide -->
    <SlideClicknext1 />

    <!-- Partner -->
    <ClicknextPartner />

    <!-- Section service -->
    <SectionService />

    <!-- SectionImageGallery -->
    <SectionImageGallery />

    <!-- Ourwork -->
    <SectionOurWork />

    <!-- SlideWorking -->
    <SlideWorking />

    <!-- SectionCustomer -->
    <SectionCustomer />

    <!-- SectionReward -->
    <SectionReward />

    <!-- SectionNews -->
    <SectionNews />

    <!-- SectionFormContact -->
    <SectionFormContact />

    <!-- SectionLocation -->
    <SectionLocation />

    <!-- SectionFooter -->
    <SectionFooter />
  </div>
</template>

<script>
import SlideClicknext1 from "@/components/slide/SlideClicknext1.vue";
import ClicknextPartner from "@/components/Partner.vue";
import SectionService from "@/components/section/SectionService.vue";
import SectionImageGallery from "@/components/section/SectionImageGallery.vue";
import SectionOurWork from "@/components/section/SectionOurWork.vue";
import SlideWorking from "@/components/slide/SlideWorking.vue";
import SectionCustomer from "@/components/section/SectionCustomer.vue";
import SectionReward from "@/components/section/SectionReward.vue";
import SectionNews from "@/components/section/SectionNews.vue";
import SectionLocation from "@/components/section/SectionLocation.vue";
import SectionFormContact from "@/components/section/SectionFormContact.vue";
import SectionFooter from "@/components/section/SectionFooter.vue";

let previousY = 0;
let previousRatio = 0;

export default {
  name: "HomeView",
  components: {
    SlideClicknext1,
    ClicknextPartner,
    SectionService,
    SectionImageGallery,
    SectionOurWork,
    SlideWorking,
    SectionCustomer,
    SectionReward,
    SectionNews,
    SectionLocation,
    SectionFormContact,
    SectionFooter,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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
      swiperOptions2: {
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
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.scrollTrigger(".animation-fade-in-left", {
        animationScrollEnter: "fade-in-left",
        animationScrollLeave: "fade-out-left",
      });
      this.scrollTrigger(".animation-fade-in-right", {
        animationScrollEnter: "fade-in-right",
        animationScrollLeave: "fade-out-right",
      });
    });
  },
  methods: {
    onSwiper() {},
    onSlideChange() {},
    scrollTrigger(selector, options = {}) {
      let els = document.querySelectorAll(selector);
      els = Array.from(els);
      els.forEach((el) => {
        this.addObserver(el, options);
      });
    },
    thresholdArray(steps) {
      return Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0);
    },
    handleIntersect(entries = [], options) {
      entries.forEach((entry) => {
        // console.log(entry.boundingClientRect.bottom);
        const currentY = entry.boundingClientRect.y;
        const currentRatio = entry.intersectionRatio;
        const isIntersecting = entry.isIntersecting;
        // console.log("isIntersecting", isIntersecting);

        // Scrolling down/up
        if (currentY < previousY) {
          if (currentRatio > previousRatio && isIntersecting) {
            // console.log("Scrolling down enter");
            if (window.ClicknextUtil.hasClass(entry.target, options.animationScrollLeave)) {
              entry.target.classList.remove(options.animationScrollLeave);
            }
            if (!window.ClicknextUtil.hasClass(entry.target, options.animationScrollEnter)) {
              entry.target.classList.add(options.animationScrollEnter);
            }
          } else if (entry.boundingClientRect.bottom < 120) {
            // console.log("Scrolling down leave");
            if (window.ClicknextUtil.hasClass(entry.target, options.animationScrollEnter)) {
              entry.target.classList.remove(options.animationScrollEnter);
            }
            if (!window.ClicknextUtil.hasClass(entry.target, options.animationScrollLeave)) {
              entry.target.classList.add(options.animationScrollLeave);
            }
          }
        } else if (currentY > previousY && isIntersecting) {
          if (currentRatio < previousRatio) {
            // console.log("Scrolling up leave", entry.boundingClientRect.top);
            // if (window.ClicknextUtil.hasClass(entry.target, options.animationScrollEnter)) {
            //   entry.target.classList.remove(options.animationScrollEnter);
            // }
            // if (!window.ClicknextUtil.hasClass(entry.target, options.animationScrollLeave)) {
            //   entry.target.classList.add(options.animationScrollLeave);
            // }
          } else if (entry.boundingClientRect.bottom > 0) {
            // console.log("Scrolling up enter");
            if (window.ClicknextUtil.hasClass(entry.target, options.animationScrollLeave)) {
              entry.target.classList.remove(options.animationScrollLeave);
            }
            if (!window.ClicknextUtil.hasClass(entry.target, options.animationScrollEnter)) {
              entry.target.classList.add(options.animationScrollEnter);
            }
          }
        } else if (!isIntersecting) {
          // console.log("Scrolling up leave", entry.boundingClientRect.top);
          if (window.ClicknextUtil.hasClass(entry.target, options.animationScrollEnter)) {
            entry.target.classList.remove(options.animationScrollEnter);
          }
          if (!window.ClicknextUtil.hasClass(entry.target, options.animationScrollLeave)) {
            entry.target.classList.add(options.animationScrollLeave);
          }
        }

        previousY = currentY;
        previousRatio = currentRatio;
      });
    },
    addObserver(el, options) {
      // if (!("IntersectionObserver" in window)) {
      //   if (options.cb) {
      //     options.cb(el);
      //   } else {
      //     el.target.classList.add(options.animationScrollDown);
      //   }
      //   return;
      // }

      const observer = new IntersectionObserver((entries, observer) => this.handleIntersect(entries, options), {
        threshold: this.thresholdArray(20),
      });

      observer.observe(el);

      // let observer = new IntersectionObserver((entries, observer) => {
      //   //this takes a callback function which receives two arguments: the elemts list and the observer instance
      //   entries.forEach((entry) => {
      //     // if (entry.isIntersecting && entry.boundingClientRect.top < 0) {
      //     //   console.log("up");
      //     //   entry.target.classList.add(options.animationScrollUp);
      //     // } else if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
      //     //   console.log("down");
      //     //   entry.target.classList.add(options.animationScrollDown);
      //     // }
      //     if (entry.isIntersecting) {
      //       if (options.cb) {
      //         options.cb(el);
      //       } else {
      //         entry.target.classList.add("active");
      //       }
      //       // observer.unobserve(entry.target);
      //     }
      //   });
      // }, options);
      // observer.observe(el);
    },
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.transform-1 {
  transform: scale3d(1, 1, 1) !important;
}

@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
</style>
