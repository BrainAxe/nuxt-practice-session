import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post!',
                thumbnail:
                  'https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg'
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our second post!',
                thumbnail:
                  'https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg'
              },
              {
                id: '3',
                title: 'Third Post',
                previewText: 'This is our third post!',
                thumbnail:
                  'https://i.dawn.com/primary/2020/04/5e8b78912bd68.jpg'
              }
            ]);
            resolve();
          }, 1000);
        });
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
