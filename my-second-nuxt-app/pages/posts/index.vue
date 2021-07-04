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
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
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
        });
      }, 1000);
    }).then((data) => {
      return data;
    });
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts);
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
