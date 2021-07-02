<template>
  <section class="post-list">
      <PostPreview
        id="1"
        thumbnail="https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg"
        title="Hello there!"
        preview-text="This is my first post"
      />
      <PostPreview
        id="2"
        thumbnail="https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg"
        title="Hello there - the second time!"
        preview-text="This is my second post"
      />
      <PostPreview
        id="3"
        thumbnail="https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg"
        title="Hello there - the third time!"
        preview-text="This is my third post"
      />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue';

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>