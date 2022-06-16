<template>
  <div class="banner">
    <div class="banner-inner">
      <a-carousel class="carousel" effect="fade" autoplay arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div v-for="item in carouselItem" :key="item.slogan">
          <div :key="item.slogan" class="carousel-item">
            <div class="carousel-title">{{ item.slogan }}</div>
            <div class="carousel-sub-title">{{ item.subSlogan }}</div>
            <img class="carousel-image" :src="item.image" />
          </div>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const carouselItem = computed(() => [
  {
    slogan: "时光流逝",
    subSlogan: "记忆中那片雪花仍在飘荡",
    image:
      "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1654313188737-dc65639ee929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    slogan: "生命不止，时光不惜",
    subSlogan: "无尽的岁月却转瞬即逝",
    image:
      "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1648737966769-98fa88fe66bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    slogan: "每一片树叶都有存在的价值",
    subSlogan: "所以请善待每个生命",
    image:
      "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1654923167496-32ec0bb09ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
]);
</script>

<style lang="less" scoped>
.banner {
  width: calc(100% - 840px) !important;
  min-width: 420px;
  .banner-inner {
    height: 100%;
    .carousel-item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 50%;
      height: 100vh;
      text-align: center;
      margin: 0 auto;
      .carousel-title {
        color: white;
        font-size: 20px;
      }
      .carousel-sub-title {
        color: gray;
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
  .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
  }
  .ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
  }
  .ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
  }
}
</style>
