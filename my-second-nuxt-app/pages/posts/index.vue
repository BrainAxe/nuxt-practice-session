<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  components: {
    PostList
  },
  data() {
    return {
      loadedPosts: [
        {
          id: '1',
          title: 'First Post',
          previewText: 'This is our first post!',
          thumbnail: 'https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg'
        },
        {
          id: '2',
          title: 'Second Post',
          previewText: 'This is our second post!',
          thumbnail: 'https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg'
        },
        {
          id: '3',
          title: 'Third Post',
          previewText: 'This is our third post!',
          thumbnail: 'https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
