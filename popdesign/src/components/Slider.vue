<template lang="pug">
    .slider-container
      .product-slider
        .product-slider--image
          img.thumbsnail(
            v-for="image in images"
            :src="image.picture"
            :key="image._id"
            @click="activeImage=image._id"
            :class="{ isShown: activeImage == image._id}"
          )
        .product-image--test
          img.m-l-1(
            v-for="image in images"
            :src="image.picture"
            :key="image._id"
            v-if="activeImage == image._id"
           )

</template>
<script>
export default {
  data() {
    return {
      activeImage:'1',
      images:[
        {
          _id: 1,
          picture: "./img/gallery-img-01-tn.jpg",
          text:"Hello"
        },
        {
          _id: 2,
          picture: "./img/gallery-img-02-tn.jpg",
          text:"Hey"
        },
        {
          _id: 3,
          picture: "/img/gallery-img-03-tn.jpg",
          text:"Hi"
        },
        {
          _id: 4,
          picture: "/img/gallery-img-04-tn.jpg",
          text:"Hi"
        },
        {
          _id: 5,
          picture: "/img/gallery-img-05-tn.jpg",
          text:"Hi"
        },
        {
          _id: 6,
          picture: "/img/gallery-img-06-tn.jpg",
          text:"Hi"
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.slider-container
  position: relative
  .product-slider--image
    text-align: center
    z-index: 5
    position: absolute
    bottom: 15px
    left: 0
    right: 0
  .product-image--test
    padding-top: 15px
    width: 60%
    height: 350px
    margin: 0 auto
  .thumbsnail
    width: 60px
    height: 40px
  img
    width: 100%
    height: 100%
</style>
