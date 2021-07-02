<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author Name</AppControlInput
        >

        <AppControlInput v-model="editedPost.title">Title</AppControlInput>

        <AppControlInput v-model="editedPost.thumbnailLink"
          >Thumbnail Link</AppControlInput
        >

        <AppControlInput v-model="editedPost.content" control-type="textarea" 
          >Content</AppControlInput
        >

        <AppButton type="submit">Save</AppButton>

        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel"
          >Cancel</AppButton
        >
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput.vue';
import AppButton from '@/components/UI/AppButton.vue';

export default {
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onSave() {
      // save the post
      // eslint-disable-next-line no-console
      console.log(this.editedPost);
    },
    onCancel() {
      // navigate back
      this.$router.push('/admin'); 
    }
  }
}
</script>