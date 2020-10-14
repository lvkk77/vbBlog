<template>
  <Layout>
    <div class="blog-detail">
      <h2>{{ $page.new.title }}</h2>
      <small>更新时间：{{ $page.new.date }}</small>
      <p v-html="$page.new.description"></p>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  new(id: $id) {
    id
    title
    date
    banner
    summary
    description
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.new.title,
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