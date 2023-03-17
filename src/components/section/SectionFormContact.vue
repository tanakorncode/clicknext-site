<template>
  <section>
    <div class="section-contact mt-5">
      <div style="padding-top: 60px; padding-bottom: 40px">
        <b-container>
          <b-row>
            <b-col lg="6" md="6" sm="12" class="m-auto">
              <div class="text-left content-left">
                <h2 class="text-white">
                  <p>Are you ready to</p>
                  <p>take your business</p>
                  <p>to the next level</p>
                  <p>with <span style="font-size: 50px">CLICKNEXT</span></p>
                </h2>
              </div>
            </b-col>
            <b-col lg="6" md="6" sm="12" class="m-auto">
              <b-form class="text-left">
                <b-form-group label-for="name">
                  <b-form-input id="name" type="text" placeholder="ชื่อ" required></b-form-input>
                </b-form-group>
                <b-form-group label-for="email">
                  <b-form-input id="email" type="email" placeholder="E-Mail" required></b-form-input>
                </b-form-group>
                <b-form-group label-for="phone">
                  <b-form-input id="phone" type="tel" placeholder="เบอร์โทรศัพท์" required></b-form-input>
                </b-form-group>
                <b-form-group label-for="type">
                  <b-form-select id="type" v-model="selected" :options="options"></b-form-select>
                </b-form-group>
                <b-form-group>
                  <b-form-textarea placeholder="ข้อความ" rows="4" max-rows="6"></b-form-textarea>
                </b-form-group>
                <b-form-group>
                  <b-button pill variant="danger">ส่งข้อความ</b-button>
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionFormContact",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "เลือกประเภทการติดต่อ" },
        { value: "1", text: "สมัครงาน/ฝึกงาน" },
        { value: "2", text: "สนใจผลิตภัณฑ์" },
        { value: "3", text: "สนใจบริการ" },
        { value: "4", text: "อื่นๆ" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-contact {
  position: relative;
  background-image: url(https://image.makewebeasy.net/makeweb/m_1920x0/m14BHwk4P/Home%2F10_BG_contact_edit_1.jpg?v=202012190947);
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
@media (max-width: 767px) {
  .content-left {
    padding-bottom: 50px;
  }
  .content-left h2 p {
    font-size: 1.5rem;
  }
}
</style>
