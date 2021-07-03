<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :posts="loadedPosts" is-admin />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';
import AppButton from '@/components/UI/AppButton.vue';

export default {
  components: {
    PostList,
    AppButton
  },
  layout: 'admin',
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
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
