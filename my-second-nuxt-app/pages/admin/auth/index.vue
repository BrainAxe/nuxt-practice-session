<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput v-model="email" type="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput v-model="password" type="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppControlInput from '@/components/UI/AppControlInput';
import AppButton from '@/components/UI/AppButton';

export default {
  name: 'AdminAuthPage',
  components: {
    AppControlInput,
    AppButton
  },
  layout: 'admin',
  data() {
    return {
      email: '',
      password: '',
      isLogin: true
    };
  },
  methods: {
    onSubmit() {
      let authUrl =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        process.env.fBaseAPIKey;
      if (!this.isLogin) {
        authUrl =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          process.env.fBaseAPIKey;
      }
      axios
        .post(authUrl, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result);
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
