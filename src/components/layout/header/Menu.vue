<template>
  <ul class="menu-nav">
    <router-link to="/" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text"> HOME </span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/custom') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> SOLUTION </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu menu-submenu-classic" data-hor-direction="menu-submenu-left">
        <span class="m-menu__arrow" style="left: 50.5px"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item menu-item-submenu">
            <a href="#" class="menu-link menu-toggle">
              <span class="menu-text"> MARKETING PLATFORM </span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu menu-submenu-classic menu-submenu-right">
              <span class="m-menu__arrow"></span>
              <ul class="menu-subnav">
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">SMSMKT</span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">MakeWebEasy</span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">Chatcone</span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">Line OA Customization</span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li>
          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/custom-wizard/wizard'),
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <span class="menu-text"> ENTERPRISE SOFTWARE </span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu menu-submenu-classic menu-submenu-right">
              <span class="m-menu__arrow"></span>
              <ul class="menu-subnav">
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> CRM </span>
                    </a>
                  </li>
                </router-link>

                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> ERP </span>
                    </a>
                  </li>
                </router-link>

                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> HRM </span>
                    </a>
                  </li>
                </router-link>

                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Intranet </span>
                    </a>
                  </li>
                </router-link>

                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> E-Learning </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> E-Meeting </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> BMS </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> CMS </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li>

          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/custom-plugins'),
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <span class="menu-text"> SOFTWARE DEVELOPMENT </span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu menu-submenu-classic menu-submenu-right">
              <span class="m-menu__arrow"></span>
              <ul class="menu-subnav">
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Mobile App Development </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Software Development </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Website Development </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Interactive Media </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li>

          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/custom-pages'),
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <span class="menu-text"> ENTERPRISE SOLUTION </span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu menu-submenu-classic menu-submenu-right">
              <span class="m-menu__arrow"></span>
              <ul class="menu-subnav">
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">Anti Drone </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">Gait Recognition</span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li>

          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/custom-pages'),
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <span class="menu-text"> IT SOLUTION </span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu menu-submenu-classic menu-submenu-right">
              <span class="m-menu__arrow"></span>
              <ul class="menu-subnav">
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">Server &amp; Storage </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">Cloud Services </span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">Networking</span>
                    </a>
                  </li>
                </router-link>
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">Smart Classroom</span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>

    <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text"> SUCCESS STORY </span>
        </a>
      </li>
    </router-link>

    <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text"> BLOG </span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> CAREER </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu menu-submenu-classic">
        <span class="m-menu__arrow" style="left: 50.5px"></span>
        <div class="menu-subnav megamenu">
          <ul class="menu-content">
            <li class="menu-item">
              <!-- <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Header </span>
                <i class="menu-arrow"></i>
              </h3> -->
              <ul class="menu-inner">
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Full-time Jobs </span>
                    </a>
                  </li>
                </router-link>

                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Internship </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/vue-bootstrap2') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> COMPANY </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu menu-submenu-classic">
        <span class="m-menu__arrow" style="left: 50.5px"></span>
        <div class="menu-subnav megamenu">
          <ul class="menu-content">
            <li class="menu-item">
              <!-- <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Header </span>
                <i class="menu-arrow"></i>
              </h3> -->
              <ul class="menu-inner">
                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> ABOUT US </span>
                    </a>
                  </li>
                </router-link>

                <router-link to="/404" v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> CONTACT </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<style module>
@media (min-width: 1025px) {
  .m-menu__arrow {
    color: red;
    line-height: 0;
    display: inline-block;
    overflow: hidden;
    height: 12px;
    width: 40px;
    position: relative;
    left: 50%;
    margin-left: -40px;
    position: absolute;
    margin-top: -28px;
  }
}
</style>

<script>
export default {
  name: "HeaderMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
};
</script>
