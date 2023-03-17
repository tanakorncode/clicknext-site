<template>
  <section>
    <b-container>
      <div data-aos="fade-up" class="mt-5">
        <b-row>
          <b-col cols="12" md="8" lg="8" sm="12">
            <div class="customer-logo m-auto w-100">
              <b-img
                class="img-responsive m-auto"
                src="https://image.makewebeasy.net/makeweb/0/m14BHwk4P/Home/07__Logo.png?v=202012190947"
              ></b-img>
            </div>
          </b-col>
          <b-col cols="12" md="4" lg="4" sm="12" class="m-auto">
            <div class="m-auto customer-client">
              <span class="text-center client-text"> CLIENT </span>
              <span class="text-center client-text text-dark line-height-1"> SUCCESS </span>
              <p class="mt-4 mb-1">
                <span class="text-center client-text-small text-muted2 pb-0"> ส่วนหนึ่ง จากลูกค้า ที่ไว้วางใจ </span>
              </p>
              <p class="mt-0 pt-0">
                <span class="text-center client-text-small text-muted2 p-0"> ให้เราดูแลธุรกิจ </span>
              </p>
              <div class="d-flex justify-content-between flex-grow-1 mb-3">
                <div class="bg-white customer-card mb-1 mb-md-0 rounded-lg">
                  <div :class="$style.partnerNo" class="customer-no">100k+</div>
                  <span class="font-weight-bold letter-spacing-2px text-muted2 customer-title">Clients Love US</span>
                </div>
                <div style="border: 1px solid #ccc; margin: 20px 15px 20px 15px"></div>
                <div class="bg-white customer-card mb-1 mb-md-0 rounded-lg">
                  <div :class="$style.partnerNo" class="customer-no">100+</div>
                  <span class="font-weight-bold letter-spacing-2px text-muted2 customer-title">Enterprise</span>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<style module>
.partnerNo {
  font-size: 4rem;
  font-weight: 600;
  color: #e0042a;
  margin: auto;
  padding-top: 10px;
}
</style>

<script>
export default {
  name: "SectionCustomer",
};
</script>

<style lang="scss" scoped>
.customer-card {
  width: 250px;
  height: 150px;
}
.client-text {
  font-size: 50px;
  color: #e1032b;
  font-weight: 600;
  font-family: Poppins;
}
.client-text-small {
  font-size: 20px;
  font-weight: 400;
  padding: 15px;
  font-family: Prompt;
}
.client-text.line-height-1 {
  line-height: 1;
}
@media (max-width: 992px) {
  .customer-card {
    width: 200px;
    height: 100px;
  }
  .customer-no {
    font-size: 2rem;
  }
  .customer-title {
    font-size: 10px;
  }
}
@media (max-width: 767px) {
  .customer-client {
    padding-top: 20px;
  }
  .customer-no {
    font-size: 1.5rem;
  }
  .customer-title {
    font-size: 10px;
  }
  .customer-card {
    width: 200px;
    height: 100px;
  }
  .client-text {
    font-size: 2rem;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .customer-no {
    font-size: 2.5rem;
  }
  .customer-card {
    width: 200px;
    height: 100px;
  }
}
</style>
