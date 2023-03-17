<template>
  <section>
    <b-container>
      <div class="mt-5">
        <b-row>
          <b-col lg="12" md="12" sm="12">
            <Heading title="ข่าวสาร และบทความ ClickNext" class="text-center" />
          </b-col>
        </b-row>
        <b-row>
          <b-col v-for="(item, key) in news" :key="key" lg="4" md="4" sm="12">
            <div class="cn-card card-type-2 radius-small">
              <div class="inner">
                <div class="thumbnail">
                  <a :href="item.url">
                    <img class="w-100" :src="item.thumbnail" alt="" />
                  </a>
                  <div class="top-position status-group left-top">
                    <span class="cnvibe-status status-02"><i class="icon-time-line"></i> {{ item.date }}</span>
                  </div>
                  <!-- <div class="wishlist-top-right">
                      <button class="wishlist-btn"><i class="icon-Heart"></i></button>
                    </div> -->
                </div>
                <div class="content">
                  <div class="card-top">
                    <div class="author-meta">
                      <div class="author-thumb">
                        <a :href="item.url">
                          <!-- <img
                              src="https://cnvibe.html.devsvibe.com/assets/images/instructor/instructor-small/instructor-4.jpg"
                              alt="Author Images"
                            /> -->
                          <i class="far fa-user mr-2"></i>
                          <span class="author-title">
                            {{ item.postBy }}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <h6 class="title">
                    <a :href="item.url" class="text-decoration-none">
                      {{ item.details }}
                    </a>
                  </h6>
                  <!-- <ul class="cn-meta meta-01">
                      <li><i class="icon-group-line"></i>286 Students</li>
                      <li><i class="icon-file-list-4-line"></i>61 Lessons</li>
                    </ul>
                     -->
                  <div class="card-bottom">
                    <b-button variant="outline-danger">Read more...</b-button>
                  </div>
                </div>
              </div>
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
  name: "SectionNews",
  components: {
    Heading,
  },
  data() {
    return {
      news: [
        {
          postBy: "User Name",
          details: "ยกระดับการป้องกันภัยคุกคามทางไซเบอร์ในโรงพยาบาล ด้วย AI และ Automation",
          thumbnail: "https://placehold.co/400x225?text=News",
          url: "#",
          date: "18 มี.ค. 65",
        },
        {
          postBy: "User Name",
          details: "ยกระดับการป้องกันภัยคุกคามทางไซเบอร์ในโรงพยาบาล ด้วย AI และ Automation",
          thumbnail: "https://placehold.co/400x225?text=News",
          url: "#",
          date: "18 มี.ค. 65",
        },
        {
          postBy: "User Name",
          details: "ยกระดับการป้องกันภัยคุกคามทางไซเบอร์ในโรงพยาบาล ด้วย AI และ Automation",
          thumbnail: "https://placehold.co/400x225?text=News",
          url: "#",
          date: "18 มี.ค. 65",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.course-activation-item-2 .cn-card.card-type-2 {
  margin: 20px 0;
}
.cn-card {
  overflow: hidden;
}
.cn-card .thumbnail {
  position: relative;
}
.cn-card.card-type-2 {
  background-color: #f5f5f5;
  padding: 20px 20px 30px;
  transition: 0.4s;
}
.cn-card.card-type-2 .inner .thumbnail a {
  border-radius: 3px;
}
.cn-card.card-type-2 .inner .thumbnail a img {
  border-radius: 3px;
  transition: 0.4s;
}
.cn-card .thumbnail a {
  display: block;
  overflow: hidden;
}
.cn-card.card-type-2 .inner .thumbnail .top-position.left-top {
  left: 0;
  top: 10px;
}
.cn-card.card-type-2 .inner .thumbnail .wishlist-top-right {
  right: 20px;
  top: 10px;
}
.cn-card.card-type-2 .inner .content {
  padding-top: 25px;
}
.cn-card.card-type-2 .inner .content .card-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.cn-card.card-type-2 .inner .content .title {
  margin-bottom: 20px;
  text-align: left;
}
.cn-card.card-type-2 .inner .content .title a {
  color: black;
  text-align: left;
  font-family: Prompt;
}
.cn-card.card-type-2 .inner .content .title a:hover {
  color: #e1032b;
}
.cn-card.card-type-2 .inner .content .card-bottom {
  display: flex;
  align-items: center;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #eeeeee;
}
.cn-card.card-type-2:hover {
  background-color: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06);
}
.author-meta {
  display: flex;
  align-items: center;
}

.author-meta .author-thumb a {
  display: block;
  transition: 0.4s;
  text-decoration: none;
  color: #ccc;
}
.author-meta .author-thumb a img {
  max-height: 34px;
  border-radius: 100%;
  margin-right: 10px;
  display: inline-block;
}
.author-meta .author-thumb a .author-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #231f40;
  transition: 0.4s;
}
.text-decoration-none {
  text-decoration: none;
}
.cn-card .thumbnail .top-position {
  position: absolute;
  z-index: 2;
}
.status-group {
  margin: -5px;
}
.cnvibe-status.status-02 {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
  padding: 0 12px;
  background: #e1032b;
  border-radius: 0 2px 2px 0;
  display: flex;
  align-items: center;
}
.status-group .cnvibe-status {
  margin: 5px;
}
.cnvibe-status.status-02 i {
  margin-right: 5px;
}
.cn-meta.meta-01 {
  margin: 0 -20px;
}
.cn-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.cn-meta.meta-01 li i {
  color: #6f6b80;
  margin-right: 8px;
}
.cn-meta.meta-01 li {
  font-weight: 500;
  line-height: 26px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  color: #6f6b80;
}
.cn-card:hover .thumbnail a img {
  transform: scale(1.1);
}
.cn-card.card-type-2:hover {
  background-color: #fff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06);
}
</style>
