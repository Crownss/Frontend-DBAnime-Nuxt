<template>
  <v-app dark>
    <v-btn class="mr-auto" outlined color="black" @click="expand2 = !expand2">
      search
    </v-btn>
    <br />
    <v-expand-x-transition>
      <v-text-field
        v-show="expand2"
        v-model="search"
        outlined
        label="search"
        rounded
        danse
      ></v-text-field>
    </v-expand-x-transition>

    <v-row>
      <v-col
        v-for="(value, index) in (getAllDB, searchResult)"
        :key="index"
        cols="12"
        no-gutters
        md="4"
      >
        <v-card class="mx-auto" max-width="400" rounded="xl">
          <v-img
            class="white--text text--primary align-end"
            height="100%"
            width="100%"
            :src="value.image_url"
          >
          </v-img>
          <v-card-title>{{ value.title }}</v-card-title>
          <v-spacer />
          <v-card-subtitle class="pb-0">Type: {{ value.type }}</v-card-subtitle>
          <v-card-subtitle class="pb-0"
            >Episode: {{ value.episodes }}</v-card-subtitle
          >
          <v-card-subtitle class="pb-0"
            >Score: {{ value.score }}</v-card-subtitle
          >
          <v-card-subtitle class="pb-5"
            >Completed on:
            {{ $moment(value.end_date).fromNow() }}</v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>{{ value.synopsis }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-chip
              color="blue"
              link
              target="_blank"
              outlined
              nuxt
              rel="noreferrer"
              :href="value.url"
              >Go to Link</v-chip
            >
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import sanitizeHtml from 'sanitize-html'
import lodash from 'lodash'
export default {
  data() {
    return {
      getAllDB: [],
      search: '',
      expand2: false,
    }
  },
  computed: {
    searchResult() {
      return this.getAllDB.filter((db) => {
        return db.title.match(this.search)
      })
    },
  },

  watch: {
    Sanitize() {
      return this.sanitize()
    },
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      await this.$axios
        .get(process.env.HOME)
        .then((response) => {
          this.getAllDB = lodash.sortBy(response.data.results, ['title'])
        })
        .catch((e) => {
          if (e.response.status === 404) {
            return this.$nuxt.error({ statusCode: 404, message: e.message })
          }
        })
    },
    sanitize() {
      return sanitizeHtml(this.searchResult)
    },
  },
}
</script>
