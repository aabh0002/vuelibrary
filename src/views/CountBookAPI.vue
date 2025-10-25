<template>
  <div id="app">
    <h1>Book Counter</h1>
    <pre v-if="jsondata">{{ jsondata }}</pre>
    <p v-else-if="error">Error: {{ error }}</p>
    <p v-else>Loading…</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsondata: null,
      error: null,
    };
  },
  async mounted() {
    await this.getBookCountAPI();
  },
  methods: {
    async getBookCountAPI() {
      try {
        const res = await axios.get('https://countbooks-dgfqfrvjca-uc.a.run.app/countBooks');
        this.jsondata = JSON.stringify(res.data, null, 2);
        this.error = null;
      } catch (e) {
        console.error('Error fetching book count:', e);
        this.error = e?.response?.data || e.message || 'Unknown error';
        this.jsondata = null;
      }
    },
  },
};
</script>
