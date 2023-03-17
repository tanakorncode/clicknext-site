// import style
import "@/assets/css/swiper.css";
import "swiper/css/swiper.css";

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import Vue from "vue";

Vue.component(Swiper.name, Swiper);
Vue.component(SwiperSlide.name, SwiperSlide);
Vue.directive("swiper", directive);
