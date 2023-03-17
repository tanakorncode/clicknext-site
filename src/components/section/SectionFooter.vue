<template>
  <section>
    <footer style="background-color: #212121">
      <b-container>
        <br />
        <div class="mt-5">
          <b-row>
            <b-col lg="3" md="3" sm="3" class="text-left">
              <p class="text-white text-left footer-heading">CLICKNEXT COMPANY LIMITED</p>
              <p class="text-left text-muted2">
                128/323-333 30th FL. Phayathai Plaza Bldg. Phayathai road, Thung Phayathai, Ratchathewi, Bangkok, 10400,
                Thailand.
              </p>
              <p>Phone : <a class="" href="tel:+66-2217-7900">+66-2217-7900</a></p>
              <p>
                E-mail :
                <a class="" href="mailto:info@clicknext.com">info@clicknext.com</a>
              </p>
              <p class="social">
                Social
                <a class="ml-3" href="#"><i class="fab fa-facebook-square"></i></a>
                <a class="ml-3" href="#"><i class="fab fa-youtube"></i></a>
                <a class="ml-3" href="#"><i class="fab fa-linkedin-in"></i></a>
              </p>
            </b-col>
            <b-col lg="3" md="3" sm="3">
              <p class="text-white footer-heading">Company</p>
              <p>
                <a href="#">Team</a>
              </p>
              <p>
                <a href="#">Carees</a>
              </p>
              <p>
                <a href="#">Success Story</a>
              </p>
              <p>
                <a href="#">Contact</a>
              </p>
            </b-col>
            <b-col lg="3" md="3" sm="3">
              <p class="text-white footer-heading">Service</p>
              <p>
                <a href="#">Software Development</a>
              </p>
              <p>
                <a href="#">Mobile Application</a>
              </p>
              <p>
                <a href="#">Interactive Media</a>
              </p>
            </b-col>
            <b-col lg="3" md="3" sm="3">
              <p class="text-white footer-heading">Products</p>
              <p>
                <a href="#">MakeWebEasy</a>
              </p>
              <p>
                <a href="#">ChatCone</a>
              </p>
              <p>
                <a href="#">SMS Marketing</a>
              </p>
              <p>
                <a href="#">SMS</a>
              </p>
              <br />
              <p class="text-white">Become to ClickNexter</p>
              <p>
                <b-button pill variant="danger" size="lg" block>Join US</b-button>
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="12" md="12" sm="12" class="text-left">
              <p>Copyright © ClickNext Co.,Ltd All right reserved.</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </footer>
  </section>
</template>

<script>
export default {
  name: "SectionFooter",
};
</script>

<style lang="scss" scoped>
.footer-heading {
  font-weight: 600;
}
footer p a,
footer p {
  color: #b5b5c3;
}
.social a {
  color: #b5b5c3;
  text-decoration: none;
}
</style>
