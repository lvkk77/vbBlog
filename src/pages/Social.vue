<template>
  <Layout>
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="粉丝"
        name="first"
      >

        <el-row style="min-height: 200px; ">
          <el-col
            :span="8"
            v-for="{ node } in $page.allSocial.edges"
            :key="node.id"
            style="padding: 10px"
          >
            <el-card
              shadow="hover"
              style="font-size: 13px;color: #606266;line-height: 20px"
            >
              <i class="el-icon-star-off"></i>&emsp;
              <span style=" text-decoration:none;cursor:pointer">{{node.name}}</span>
              <br>
              <i class="el-icon-message"></i>&emsp;
              <br>
              <img
                :src="node.image"
                style="width: 100%;border-radius:5px;margin-top: 5px"
              >
            </el-card>
          </el-col>
        </el-row>

      </el-tab-pane>
      <el-tab-pane
        label="关注"
        name="second"
      >
        <el-row style="min-height: 200px; ">
          <el-col
            :span="8"
            v-for="{ node } in $page.allSocial.edges"
            :key="node.id"
            style="padding: 10px"
          >
            <el-card
              shadow="hover"
              style="font-size: 13px;color: #606266;line-height: 20px"
            >
              <i class="el-icon-star-off"></i>&emsp;
              <span style=" text-decoration:none;cursor:pointer">{{node.name}}</span>
              <br>
              <i class="el-icon-message"></i>&emsp;
              <br>
              <img
                :src="node.image"
                style="width: 100%;border-radius:5px;margin-top: 5px"
              >
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <Pager :info="$page.allSocial.pageInfo" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allSocial (perPage: 12, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        image
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
    title: "社交圈",
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  },

};
</script>

<style lang="less">
.node-item {
  margin-bottom: 30px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    h3 {
      a {
        color: #1e6bb8;
      }
    }
  }
  img {
    flex: none;
    width: 120px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .right {
    flex: 1;
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
}
</style>
