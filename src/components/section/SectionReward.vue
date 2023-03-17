<template>
  <section>
    <b-container fluid>
      <div :class="$style.reward" class="mt-5">
        <div class="marquee-left">
          <div class="row">
            <div v-for="(item, key) in items" :key="key" class="col-md-3 col-lg-3">
              <div>
                <b-img class="img-responsive m-auto reward-img" :src="item.src"></b-img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<style module>
.reward {
  position: relative;
  background-image: url(https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2F08__BG_Award_edit4.jpg?v=202012190947);
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<script>
export default {
  name: "SectionReward",
  data() {
    return {
      items: [
        {
          title: "",
          src: "https://image.makewebeasy.net/makeweb/m_750x0/m14BHwk4P/Home/08__Award_2_edit3.png?v=202012190947",
        },
        {
          title: "",
          src: "https://image.makewebeasy.net/makeweb/m_750x0/m14BHwk4P/Home/award___ATSI.png?v=202012190947",
        },
        {
          title: "",
          src: "https://image.makewebeasy.net/makeweb/m_750x0/m14BHwk4P/Home/Group_450.png?v=202012190947",
        },
        {
          title: "",
          src: "https://image.makewebeasy.net/makeweb/m_750x0/m14BHwk4P/Home/08__Award_3_edit3.png?v=202012190947",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.marquee-left {
  // animation: marquee 8s linear infinite;
  position: relative;
}

.marquee-left:hover {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}
img.reward-img:hover {
  transition: 0.4s;
  transform: scale(1.2, 1.2);
  cursor: pointer;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .marquee-left {
    /* Starting position */
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    /* Apply animation to this element */
    -moz-animation: marqueeLeft 20s linear infinite;
    -webkit-animation: marqueeLeft 20s linear infinite;
    animation: marqueeLeft 20s linear infinite;
  }
}
@media (min-width: 1200px) {
  .marquee-left {
    /* Starting position */
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    /* Apply animation to this element */
    -moz-animation: marqueeLeft 20s linear infinite;
    -webkit-animation: marqueeLeft 20s linear infinite;
    animation: marqueeLeft 20s linear infinite;
  }
}
/* Move it (define the animation) */
@-moz-keyframes marqueeLeft {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}
@-webkit-keyframes marqueeLeft {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes marqueeLeft {
  0% {
    -moz-transform: translateX(100%); /* Firefox bug fix */
    -webkit-transform: translateX(100%); /* Firefox bug fix */
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%); /* Firefox bug fix */
    -webkit-transform: translateX(-100%); /* Firefox bug fix */
    transform: translateX(-100%);
  }
}
</style>
