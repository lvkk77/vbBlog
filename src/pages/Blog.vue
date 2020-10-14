<template>
  <Layout>
    <el-card
      shadow="hover"
      v-for="{ node } in $page.allPost.edges"
      :key="node.id"
      style="margin-bottom: 20px"
    >
      <div slot="header">
        <el-row>
          <el-col :span="16">
            <span>
              <g-link :to="'/blog/' + node.id">
                <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{node.title}}
              </g-link>
            </span>
          </el-col>
        </el-row>
      </div>
      <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
        最近更新 {{node.date}}
      </div>
      <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
        {{node.summary}}
      </div>
    </el-card>
    
    <Pager :info="$page.allPost.pageInfo" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date
        summary
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
  metaInfo: {
    title: "博客列表",
  },
};
</script>

<style lang="less">
.node-item {
  margin-bottom: 30px;
  border-bottom: 1px solid #ebeef5;
  &:hover {
    h3 {
      a {
        color: #1e6bb8;
      }
    }
  }
  h3 {
    font-size: 1.1rem;
    a {
      color: #333;
    }
    small {
      font-size: 12px;
      color: gray;
      padding: 0 10px;
    }
  }
  p {
    font-size: 0.9rem;
  }
}
</style>
