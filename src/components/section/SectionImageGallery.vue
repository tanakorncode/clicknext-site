<template>
  <section>
    <b-container>
      <div class="mt-5">
        <b-row>
          <template v-for="(item, key) in items">
            <b-col :key="key" data-aos="fade-up" :lg="item.gridSize" :md="item.gridSize" sm="6" cols="12">
              <div class="cn-img-rallery d-flex cn-img-rallery--height-fluid pb-3">
                <div class="inner w-100 cn-img-rallery--height-fluid">
                  <div class="thumbnail d-flex cn-img-rallery--height-fluid">
                    <a class="thumbnail-link" target="_blank" :href="item.href">
                      <b-img :src="item.img" alt="Preview Images" class="img-responsive" />
                    </a>
                    <div class="hover-action">
                      <a class="cn-btn" target="_blank" :href="item.href">
                        READ MORE ...
                        <i class="icon-arrow-right-line-right"></i
                      ></a>
                    </div>
                  </div>
                  <!-- <h5 class="title"><a href="index-one.html" target="_blank">EduVibe Home 01</a></h5> -->
                </div>
              </div>
            </b-col>
          </template>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<style module>
.gallery {
  position: relative;
  background-image: url(https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2F05__BG.png?v=202012190947);
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<script>
export default {
  name: "SectionImageGallery",
  data() {
    return {
      items: [
        {
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home/05__Service_01_edit_1.png",
          href: "#",
          gridSize: 5,
        },
        {
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home/05__Service_02_edit_1.png",
          href: "#",
          gridSize: 7,
        },
        {
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home/05__Service_03_edit_1.png",
          href: "#",
          gridSize: 7,
        },
        {
          img: "https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home/05__Service_04_edit_1.png",
          href: "#",
          gridSize: 5,
        },
      ],
    };
  },
  methods: {
    gridSize(n) {
      // if (Math.abs(n % 2) == 1) {
      //   return "7";
      // }
      // if (n % 2 == 0) {
      //   return "5";
      // }
      // return "6";
    },
  },
};
</script>

<style lang="scss" scoped>
/*  */
.cn-img-rallery .thumbnail {
  position: relative;
}
.cn-img-rallery--height-fluid {
  height: calc(100% - 0px);
}
.cn-img-rallery .thumbnail .thumbnail-link {
  display: block;
  /* padding: 5px; */
  background-color: #fff;
  box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative;
  width: 100%;
}
.cn-img-rallery:hover .thumbnail .thumbnail-link::before {
  opacity: 1;
}
.cn-img-rallery .thumbnail .thumbnail-link::before {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.4s;
}
.cn-img-rallery .thumbnail .thumbnail-link img {
  width: 100%;
  border-radius: 5px;
  /* height: 100%; */
  object-fit: fill;
  height: calc(100% - 0px);
}
.cn-img-rallery:hover .thumbnail .hover-action {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
.cn-img-rallery .thumbnail .hover-action {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  z-index: 1;
  transition: 0.4s;
  opacity: 0;
}
.cn-img-rallery .thumbnail .hover-action a.cn-btn {
  height: 50px;
  line-height: 50px;
  padding: 0 24px;
  text-decoration: none;
}
.cn-img-rallery .title {
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  margin-top: 30px;
}
a.cn-btn,
button.cn-btn {
  border-radius: 5px;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  color: #fff;
  background: #e1032b;
  padding: 0 30px;
  font-size: 18px;
  font-weight: 700;
  transition: 0.4s;
  border: 0 none;
}
</style>
