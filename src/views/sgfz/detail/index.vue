<!--
 * @Author: WangYP
 * @Date: 2021-09-22 15:12:44
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 14:43:01
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/detail/index.vue
-->
<template>
  <div class="sgfz-content-wapper">
    <div class="sgfz-search">
      <Search
        @onSearch="onSearchClick"
        v-model="searchData"
        :config="searchConfig"
      />
    </div>
    <div class="sgfz-list">
      <List
        v-loading="loading"
        :tableList="tableList"
        v-model="paginationData"
        @onSearch="onSearchClick"
      />
    </div>
  </div>
</template>

<script>
import Search from "./search.vue";
import List from "./list.vue";

export default {
  name: "main-page-wrapper",
  data() {
    return {
      loading:false,
      tableList: [],
      paginationData: {
        pageNum: 1,
        pageSize: 5,
        total: 1,
      },
      searchConfig: {
        geoDescription: [2018, 2019, 2020],
        wellType: ["ceshi1", "ceshi2"],
        wellPurpose: ["ceshi1", "ceshi2"],
        completionWellDate: [2022, 2021, 2020, 2019, 2018],
        wellName: ["ceshi1", "ceshi2"],
        stuckPointHorizon: [],
      },
      searchData: {
        geoDescription: null,
        wellType: null,
        wellPurpose: null,
        completionWellDate: null,
        wellName: null,
        stuckPointHorizon: null,
      },
    };
  },
  methods: {
    onSearchClick(params, type) {
      this.loading = true
      var searchParam = {
        indexName: "zwjy-accident-info",
        pageNum: this.paginationData.pageNum,
        pageSize: this.paginationData.pageSize,
      };
      if (type === "reset") {
        this.searchData = {
          geoDescription: null,
          wellType: null,
          wellPurpose: null,
          completionWellDate: null,
          wellName: null,
          stuckPointHorizon: null,
        };

        this.paginationData.pageNum = 1;
        this.paginationData.pageSize = 5;
        searchParam.pageSize = 5;
        searchParam.pageNum = 1;
      } else {
        var temSearch = {};
        Object.keys(this.searchData).forEach((item) => {
          const key = this.searchData[item];
          if (key) {
            temSearch[item] = this.searchData[item];
          }
        });
        searchParam["searchWildcardParam"] = temSearch;
      }

      if (type === "num") {
        searchParam.pageSize = params;
        this.paginationData.pageSize = params;
      }
      if (type === "page") {
        searchParam.pageNum = params;
        this.paginationData.pageNum = params;
      }
      this.$axios
        .post(this.$apiList.base.searchByVO, searchParam)
        .then((res) => {
          this.loading = false
          this.tableList = res.data;
          this.paginationData.total = res.total;
        });
    },
  },
  created() {
    var params = {
      indexName: "zwjy-accident-info",
      field: "",
    };
    Object.keys(this.searchData).map((item) => {
      params.field = item;
      if (item !== "completionWellDate" && item !== "wellName") {
        this.$axios
          .get(this.$apiList.base.searchByField, { params })
          .then((res) => {
            this.searchConfig[item] = res.data;
          });
      }
    });
    this.onSearchClick();
  },
  components: {
    Search,
    List,
  },
};
</script>

<style lang="less">
.main-page-wrapper {
  .main-content {
    display: flex;
    .main-content-left {
      width: 300px;
    }
    .main-content-right {
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>>

