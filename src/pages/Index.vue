<template>
  <Layout>
    <el-card
      shadow="never"
      style="min-height: 400px"
      v-if="this.$page.allGists.edges[0].node.id"
    >
      <div slot="header">
        <span>{{this.$page.allGists.edges[0].node.title.filename}}</span>
      </div>
      <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
        发布 {{this.$page.allGists.edges[0].node.createTime}}
        <br> 更新 {{this.$page.allGists.edges[0].node.updateTime}}
      </div>
      <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
        <pre style="font-family: '微软雅黑'">{{this.$page.allGists.edges[0].node.description}}</pre>
      </div>
      <div
        v-html="this.$markdown(this.$page.allGists.edges[0].node.title.content)"
        class="markdown-body"
        style="padding-top: 20px"
      ></div>
    </el-card>
  </Layout>
</template>

<page-query>
query {
  allGists{
    edges{
      node{
        id
        created_at
        description
        updated_at
        title {
          filename
          rawUrl
          content
        }
          
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "最新动态",
  },
};
</script>