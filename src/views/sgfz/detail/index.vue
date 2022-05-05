<!--
 * @Author: WangYP
 * @Date: 2021-09-22 15:12:44
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-05 16:47:25
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
      tableList: [
        {
          abandonedFootage: null,
          occurrenceProcess: null,
          processingCourse:
            "10月27日三方协调会后，10点开始做穿心打捞前的准备工作，15:00开始穿心，下钻，28日9:00抓住仪器，19:00仪器出井口，全捞获。",
          accidentBitDepth: null,
          stuckDrillReason:
            '1、经过2000年11月8日点班，二开钻进至9:30当班司钻发现转盘页荷不均，存蹩钻况家，便立即循环起钻，到15:00起完，起出8 1/2"GA114钻头1#、2#牙轮落井。\r\n2、原因钻头质量问题设备转盘页数弹子间断发卡，二开快速钻进，为保证井身质量采用了高转迈120r/inm较小的钻质5/8吨，由于转盘页荷弹子间断发卡，上钻头纯钻20小时，转盘页荷加重蹩钻倒转时牙轮已掉。',
          lostTime: "68.0",
          wellPurpose: "基础井网油井",
          structurePos: null,
          wellType: "定向井",
          accidentNumber: "1",
          treatingAgentCost: null,
          lossCost: null,
          wellDepth: 1926,
          openTimes: null,
          stuckPointLava: null,
          processingMethod: null,
          wellName: "满深1",
          id: "WEBHTL100002348",
          wellId: "WELLTL100017467",
          wellBoreId: "WEBHTL100002348",
          accidentDate: "2000-11-18 15:00:00",
          removeDate: "2000-11-21 10:30:00",
          stuckDrillType: null,
          stuckPointPlace: null,
          accidentBitHorizon: null,
          completionWellDate: "2020-04-01",
          reworkFootage: null,
          stuckPointHorizon: null,
          fluidType: null,
          runtimeSituation: null,
          bitSize: null,
          geoDescription: "塔里木盆地塔北隆起轮南低凸起南斜坡  ",
        },
      ],
      paginationData: {
        pageNum: 1,
        pageSize: 10,
        total: 10,
      },
      searchConfig: {
        geoDescription: [2018, 2019, 2020],
        wellType: ["ceshi1", "ceshi2"],
        wellPurpose: ["ceshi1", "ceshi2"],
        completionWellDate: [2022, 2021, 2020, 2019, 2018],
        wellId: ["ceshi1", "ceshi2"],
        stuckPointHorizon: [],
      },
      searchData: {
        geoDescription: null,
        wellType: null,
        wellPurpose: null,
        completionWellDate: null,
        wellId: null,
        stuckPointHorizon: null,
      },
    };
  },
  methods: {
    onSearchClick(params, type) {
      var temSearch = this.searchData;
      Object.keys(temSearch).forEach((item) => {
        const key = temSearch[item];
        if (key === "" || key === null || key === undefined) {
          delete temSearch[item];
        }
      });
      var searchParam = {
        searchWildcardParam: temSearch,
        indexName: "zwjy-accident-info",
        pageNum: this.paginationData.pageNum,
        pageSize: this.paginationData.pageSize,
      };
      if (type === "search"){
        this.paginationData.pageNum = 1
        this.paginationData.pageSize = 10
        searchParam.pageSize = 10
        searchParam.pageNum = 1
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
          this.tableList = res.data;
          this.paginationData.total = res.total
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
      if (item !== "completionWellDate" && item !== "wellId") {
        this.$axios
          .get(this.$apiList.base.searchByField, { params })
          .then((res) => {
            console.log(res);
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

