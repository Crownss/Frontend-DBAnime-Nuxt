<template>
  <v-app dark>
    <v-container fluid>
      <v-app-bar fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <v-spacer />
        <v-spacer />
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <NuxtLink to="/" class="removeunderline">
              <v-list-item>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </NuxtLink>

            <NuxtLink to="/movie" class="removeunderline">
              <v-list-item>
                <v-list-item-title>Movie</v-list-item-title>
              </v-list-item>
            </NuxtLink>

            <NuxtLink to="/on-going" class="removeunderline">
              <v-list-item>
                <v-list-item-title>On-Going</v-list-item-title>
              </v-list-item>
            </NuxtLink>

            <NuxtLink to="/genre" class="removeunderline">
              <v-list-item>
                <v-list-item-title>Genre</v-list-item-title>
              </v-list-item>
            </NuxtLink>

            <NuxtLink to="/about" class="removeunderline">
              <v-list-item>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </NuxtLink>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    <v-card class="mx-auto" max-width="500">
      <v-card-text>
        <v-spacer />
        <div>Nhentai Downloader</div>
        <v-form v-model="valid" method="GET">
          <v-spacer />
          <v-col cols="15" md="15">
            <v-text-field
              v-model="nhentaiID"
              :rules="Rules"
              :counter="7"
              label="Code nuclear"
              maxlength="7"
              pattern="[0-9]+"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              required
              class="text-h4 text--primary mx-auto"
            ></v-text-field>
          </v-col>
        </v-form>
        <div class="text--primary">
          Download it with zip format or cbz format
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          submit
          color="deep-purple--text text--accent-4"
          rel="noreferrer"
          target="_blank"
          :href="linkZip"
        >
          Zip
        </v-btn>
        <v-spacer />
        <v-btn
          submit
          color="deep-purple--text text--accent-4"
          rel="noreferrer"
          target="_blank"
          :href="linkCbz"
        >
          Cbz
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      valid: false,
      nhentaiID: '',
      title: 'DBAnime',
      Rules: [
        (v) => !!v || 'Code nuclear is required',
        (v) => v.length <= 7 || 'Code nuclear must be less than 7 characters',
      ],
    }
  },
  head: {
    title: 'Nhentai',
  },
  computed: {
    linkZip() {
      return process.env.NHENTAI + this.nhentaiID + `/zip`
    },
    linkCbz() {
      return process.env.NHENTAI + this.nhentaiID + `/cbz`
    },
  },
}
</script>
<style scoped>
.removeunderline {
  text-decoration: none;
}
</style>
