<template>
  <Layout>

    <el-card
      shadow="hover"
      v-for="{ node } in $page.allProject.edges"
      :key="node.id"
      style="margin-bottom: 20px"
      
    >
      <div slot="header">
        <el-row>
          <el-col :span="16">
            <span>
              <span
                style="text-decoration:none;cursor:pointer"
              >
                <i class="el-icon-service"></i>&nbsp;&nbsp; {{node.name}}
              </span>
            </span>
          </el-col>
          <el-col :span="8">
            <div style="text-align: right;">
              <el-button
                style="padding: 3px 0"
                type="text"
                icon="el-icon-back"
              >前往GitHub</el-button>
              <el-button
                style="padding: 3px 0"
                type="text"
                icon="el-icon-share"
              ></el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
        最近更新 {{node.date}}
      </div>
      <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
        {{node.content}}
      </div>
      <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
        <el-row>
          <el-col
            :span="16"
            style="padding-top: 5px"
          >
            <el-tooltip
              effect="dark"
              :content="'star '+ 11"
              placement="bottom"
            >
              <i
                class="el-icon-star-off"
                style="margin: 0px 5px 0px 0px"
              ></i>
            </el-tooltip>
            11
            <el-tooltip
              effect="dark"
              :content="'watch '+ 12"
              placement="bottom"
            >
              <i
                class="el-icon-view"
                style="margin: 0px 5px 0px 15px"
              ></i>
            </el-tooltip>
            12
            <el-tooltip
              effect="dark"
              :content="'fork '+ 10"
              placement="bottom"
            >
              <i
                class="el-icon-bell"
                style="margin: 0px 5px 0px 15px"
              ></i>
            </el-tooltip>
            10
          </el-col>
        </el-row>
      </div>
    </el-card>
    <Pager :info="$page.allProject.pageInfo" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allProject (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date
        content
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
    title: "开源项目",
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
