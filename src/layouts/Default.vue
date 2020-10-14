<template>
  <div class="layout">
    <header class="page-header">
      <h1 class="project-name">Laziji - Gridsome</h1>
      <h2 class="project-taglist">
        <span>欢迎来到辣子鸡的个人博客</span>
        <small><i>(Data From Mockjs)</i></small>
      </h2>
      <div class="btns">
        <a href="javascript:void(0);" target="_blank" class="btn">GitHub主页</a>
        <a href="javascript:void(0);" target="_blank" class="btn">博客源码</a>
      </div>
      <div
        v-for="(item, index) in randomIcon"
        :key="'ri' + index"
        :style="
          'position:absolute; top:' +
          item.top +
          'px; left:' +
          item.left +
          'px; z-index:1;'
        "
      >
        <font :style="'font-size: ' + item.size + 'px;color:#fff;'">
          <b>♪</b>
        </font>
      </div>
      <div class="touch-bar box"></div>
    </header>
    <main class="main-content">
      <div class="page-left">
        <div class="page-tab box">
          <div class="menuitem">
            <g-link to="/" exact>最新动态</g-link>
          </div>
          <div class="menuitem">
            <g-link to="/social" exact>社交圈</g-link>
          </div>
          <div class="menuitem">
            <g-link to="/blog" exact>博客列表</g-link>
          </div>
          <div class="menuitem">
            <g-link to="/project" exact>开源项目</g-link>
          </div>
        </div>
        <div class="page-token box">
          <div class="title">
            <i></i>
            <span>Token未绑定</span>
          </div>
          <div class="body">
            在 github-> settings-> developerSettings-> personalAccessTokens
            勾选gist权限,获取Token. 详情参考README.md
          </div>
        </div>
      </div>
      <div class="page-right box">
        <slot />
      </div>
    </main>
    <footer class="page-footer">
      <div
        style="
          border-top: 1px solid rgb(225, 228, 232) !important;
          padding: 45px 0px;
        "
      >
        <div>
          <div>
            <div>
              © 2018 GitHub-Laziji  
              <a href="https://github.com/GitHub-Laziji" target="_blank"
                >Profile</a
              >  
              <a href="https://github.com/GitHub-Laziji/vblog" target="_blank"
                >VBlog</a
              >
            </div>
          </div>
          <div>
            <div style="text-align: center; font-size: 18px">
              <i class="el-icon-location-outline"></i>
            </div>
          </div>
          <div>
            <div style="float: right">
              <a href="https://developer.github.com" target="_blank"
                >GitHub-API</a
              >   <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>  
              <a href="http://element.eleme.io/" target="_blank">Element</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      randomIcon: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      let width = window.innerWidth;
      for (let i = 0; i < 12; i++) {
        let temp = {};
        let left = this.randomInt(10, width - 310);
        if (left > width / 2 - 150) {
          left += 300;
        }
        temp["left"] = left;
        temp["top"] = this.randomInt(20, 300);
        temp["size"] = this.randomInt(20, 40);
        this.randomIcon.push(temp);
      }
    });
  },
  methods: {
    randomInt(s, e) {
      let d = e - s;
      if (d < 0) {
        return s;
      }
      let r = Math.random() * d + s;
      r = Number.parseInt(r, 10);
      return r;
    },
  },
};
</script>

<style lang="less">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: #333;
}
a {
  color: #1e6bb8;
  text-decoration: none;
}
.box {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  border-radius: 4px;
  transition: 0.3s;
  padding: 20px;
}
.page-header {
  background-image: linear-gradient(
    120deg,
    rgb(38, 144, 249),
    rgb(252, 45, 45)
  );
  padding: 5rem 6rem;
  color: #fff;
  text-align: center;
  background-color: #159957;
  position: relative;
  .project-name {
    font-size: 3.25rem;
    margin-top: 0;
    margin-bottom: 0.1rem;
  }
  .project-taglist {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    font-weight: normal;
    opacity: 0.7;
  }
  .btns {
    .btn {
      padding: 0.75rem 1rem;
      display: inline-block;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.7);
      background-color: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      border-style: solid;
      border-width: 1px;
      border-radius: 0.3rem;
      transition: color 0.2s, background-color 0.2s, border-color 0.2s;
      text-decoration: none;
      &:nth-child(2n) {
        margin-left: 1rem;
      }
    }
  }
  .touch-bar {
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
    max-width: 64rem;
    min-height: 60px;
    box-sizing: border-box;
  }
}
.main-content {
  max-width: 64rem;
  padding: 60px 0px 30px 0px;
  margin: 0 auto;
  font-size: 1.1rem;
  word-wrap: break-word;
  min-height: 800px;
  display: flex;
  justify-content: flex-start;
  .page-left {
    flex: 6;
    margin-right: 10px;
    .page-tab {
      padding: 20px;
      margin-bottom: 20px;
      .menuitem {
        font-size: 14px;
        line-height: 56px;
        &:hover {
          background: rgba(64, 158, 255, 0.1);
        }
        a {
          box-sizing: border-box;
          padding: 0 20px;
          color: #303133;
          width: 100%;
          height: 100%;
          cursor: pointer;
          display: inline-block;
          &.active {
            color: #1e6bb8;
            background: rgba(64, 158, 255, 0.1);
          }
        }
      }
    }
    .page-token {
      padding: 20px;
      .title {
        font-size: 0.9rem;
        line-height: 1.5;
        color: rgb(96, 108, 113);
        i {
          height: 24px;
          padding: 0 8px;
          line-height: 22px;
          background-color: rgba(245, 108, 108, 0.2);
          border-color: rgba(245, 108, 108, 0.2);
          color: #f56c6c;
          font-size: 12px;
          border-radius: 4px;
          box-sizing: border-box;
          border: 1px solid rgba(64, 158, 255, 0.2);
          white-space: nowrap;
          margin-right: 5px;
        }
      }
      .body {
        color: #909399;
        font-size: 12px;
        margin: 5px 0 0;
        background: #f4f4f5;
        padding: 20px;
        border-radius: 4px;
      }
    }
  }
  .page-right {
    flex: 18;
    padding: 20px;
  }
}
.page-footer {
  max-width: 67rem;
  margin: 0 auto;
  font-size: 12px !important;
  color: #586069 !important;
  a {
    padding: 0 1rem;
  }
}
nav[role="navigation"] {
  text-align: right;
  a {
    border: 1px solid #1e6bb8;
    border-radius: 4px;
    padding: 5px 8px;
    margin: 0 5px;
    &:hover {
      background: #ebeef5;
    }
    &.active {
      color: #fff;
      background: #1e6bb8;
    }
  }
}
</style>
