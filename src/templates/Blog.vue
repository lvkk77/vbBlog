<template>
  <Layout>
    <div class="blog-detail">
      <h2>{{ $page.post.title }}</h2>
      <small>更新时间：{{ $page.post.date }}</small>
      <p v-html="$page.post.description"></p>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    id
    title
    date
    summary
    description
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="less" scoped>
.blog-detail {
  text-align: center;
  p {
    text-align: left;
    font-size: small;
  }
}
</style>