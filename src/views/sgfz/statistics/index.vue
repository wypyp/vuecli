<!--
 * @Author: WangYP
 * @Date: 2021-09-22 15:12:44
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-06 18:14:37
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/statistics/index.vue
-->
<template>
  <div class="sgfz-content-statistics">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="井" name="first">
        <div class="sgfz-search">
          <Search
            @onSearch="onSearchClick"
            @checkBox="checkBoxChange"
            v-model="searchData"
            :config="searchConfig"
          />
        </div>
        <div class="sgfz-list">
          <List
            :tableList="tableList"
            :first="first"
            :searchData="searchData"
            @onSearch="onSearchClick"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="区块" name="second">
        <div class="sgfz-search">
          <Search2
            @onSearch="onSearchClick"
            @checkBox2="checkBoxChange"
            v-model="searchData"
            :config="searchConfig"
          />
        </div>
        <div class="sgfz-list">
          <List2
            :tableList="tableList"
            :second="second"
            :searchData="searchData"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Search from "./search.vue";
import Search2 from "./search2.vue";
import List from "./list.vue";
import List2 from "./list2.vue";

export default {
  name: "main-page-wrapper",
  data() {
    return {
      first: [
        {
          props: "wellName",
          label: "井号",
          isShow: true,
          fixed: "left",
          width: "80px",
          immobilization: true,
        },
        {
          props: "total",
          isShow: true,
          fixed: "left",
          width: "80px",
          immobilization: true,
        },

        { props: "accidentDate", label: "卡钻年份", isShow: false },
        { props: "openTime", label: "卡钻开次", isShow: false },
        { props: "bitSize", label: "钻头直径", isShow: false },
        { props: "stuckPointHorizon", label: "卡点层位", isShow: false },
        { props: "accidentBitHorizon", label: "钻头深度层位", isShow: false },
        { props: "fluidType", label: "钻井液亚类", isShow: false },
        { props: "stuckDrillType", label: "卡钻类型", isShow: false },
        { props: "processingMethod", label: "解卡方法", isShow: false },

        {
          props: "wellType",
          label: "p钻井液g/cm3",
          isShow: true,
          immobilization: true,
        },
        {
          props: "sumStickingTimes",
          label: "卡钻次数",
          isShow: true,
          immobilization: true,
        },
        {
          props: "sumLostTime",
          label: "总损失时间h",
          isShow: true,
          immobilization: true,
        },
        {
          props: "lostTime",
          label: "平均损失时间h/次",
          isShow: true,
          immobilization: true,
        },
        {
          props: "sumLossCost",
          label: "总损失金额万元",
          isShow: true,
          immobilization: true,
        },
        {
          props: "lossCost",
          label: "平均损失金额万元",
          isShow: true,
          immobilization: true,
        },
      ],
      second: [
        {
          props: "geoDescription",
          label: "构造带",
          isShow: true,
          immobilization: true,
          fixed: "left",
          width: "100px",
        },
        {
          props: "structurePos",
          label: "圈闭/构造",
          isShow: true,
          immobilization: true,
          fixed: "left",
          width: "100px",
        },
        {
          props: "wellName",
          label: "井号",
          isShow: true,
          immobilization: true,
          fixed: "left",
          width: "80px",
        },
        {
          props: "total",
          fixed: "left",
          isShow: true,
          immobilization: true,
          width: "80px",
        },

        { props: "accidentDate", label: "卡钻年份", isShow: false },
        { props: "openTime", label: "卡钻开次", isShow: false },
        { props: "bitSize", label: "钻头直径", isShow: false },
        { props: "stuckPointHorizon", label: "卡点层位", isShow: false },
        { props: "accidentBitHorizon", label: "钻头深度层位", isShow: false },
        { props: "fluidType", label: "钻井液亚类", isShow: false },
        { props: "stuckDrillType", label: "卡钻类型", isShow: false },
        { props: "processingMethod", label: "解卡方法", isShow: false },

        {
          props: "countWellNumber;",
          label: "统计井数",
          isShow: true,
          immobilization: true,
        },
        {
          props: "stickingWellNumber",
          label: "卡钻井数口",
          isShow: true,
          immobilization: true,
        },
        {
          props: "stickingProbability",
          label: "卡钻概率%",
          isShow: true,
          immobilization: true,
        },
        {
          label: "卡钻次数",
          child: [
            {
              props: "sumStickingTimes",
              label: "总次数",
              isShow: true,
              immobilization: true,
            },
            {
              props: "stickingTimes",
              label: "平均次数(次/口)",
              isShow: true,
              immobilization: true,
            },
          ],
        },
        {
          label: "损失时间",
          child: [
            {
              props: "sumLostTime",
              label: "总时间(h)",
              isShow: true,
              immobilization: true,
            },
             {
              props: "lostTime",
              label: "平均损失时间",
              isShow: true,
              immobilization: true,
            },
          ],
        },
        {
          label: "损失金额",
          child: [
            {
              props: "sumLossCost",
              label: "总金额(万元)",
              isShow: true,
              immobilization: true,
            },
            {
              props: "lossCost",
              label: "平均金额(万元/口)",
              isShow: true,
              immobilization: true,
            },
          ],
        },
        {
          props: "wellNumber",
          label: "对应井号",
          isShow: true,
          immobilization: true,
        },
      ],
      tableList: [],
      activeName: "first",
      paginationData: {
        pageNum: 1,
        pageSize: 10,
      },
      searchConfig: {
        structurePos: [],
        wellType: [],
        wellPurpose: [],
        completionWellDate: [2022, 2021, 2020, 2019, 2018],
        wellName: [],
        returnField: [
          { value: "accidentDate", label: "卡钻年份" },
          { value: "openTime", label: "卡钻开次" },
          { value: "bitSize", label: "钻头直径" },
          { value: "stuckPointHorizon", label: "卡点层位" },
          { value: "accidentBitHorizon", label: "钻头深度层位" },
          { value: "fluidType", label: "钻井液亚类" },
          { value: "stuckDrillType", label: "卡钻类型" },
          { value: "processingMethod", label: "解卡方法" },
        ],
        stuckPointHorizon: [],
      },
      searchData: {
        structurePos: null, // 区块
        wellType: null,
        wellPurpose: null,
        completionWellDate: null, // 时间
        wellName: [],
        stuckPointHorizon: null,
        returnField: [], // 维度
      },
    };
  },
  methods: {
    getList(type, searchParam) {
      let url;
      if (type === "first") {
        url = this.$apiList.base.searchWellCount;
      } else if (type === "second") {
        url = this.$apiList.base.searchRegionCount;
      }
      this.$axios.post(url, searchParam).then((res) => {
        this.tableList = res.data.sort((a, b) => {
          return a.wellName.localeCompare(b.wellName, "zh-CN");
        });
        console.log(res.data);
        this.tableList.forEach((item) => {
          item["total"] = 1;
        });
      });
    },
    checkBoxChange(values) {
      const valueOb = {};
      values.forEach((item) => {
        console.log(item);
        valueOb[item] = item;
      });
      this[this.activeName].forEach((item) => {
        const { immobilization, props, child } = item;
        console.log(child);
        if (!child) {
          if (!immobilization) {
            item.isShow = false;
          }
          if (valueOb[props]) {
            item.isShow = true;
          }
        }
      });
    },
    handleClick() {
      this.searchData.returnField = [];
      console.log("")
      this.onSearchClick("reset");
    },
    onSearchClick(reset) {
      var searchParam = {
        indexName: "zwjy-accident-info",
        pageNum: this.paginationData.pageNum,
        pageSize: this.paginationData.pageSize,
      };
      if (reset === "reset") {
        this.searchData = {
          structurePos: null, // 区块
          wellType: null,
          wellPurpose: null,
          completionWellDate: null, // 时间
          wellName: [],
          stuckPointHorizon: null,
          returnField: [], // 维度
        };
        this.checkBoxChange([]);
      } else {
        var temSearch = {};
        var temArr = ["returnField", "wellName"];
        Object.keys(this.searchData).forEach((item) => {
          const key = this.searchData[item];
          if (!temArr.includes(item) && key) {
            temSearch[item] = this.searchData[item];
          }
        });
        searchParam["searchWildcardParam"] = temSearch;
        console.log(this.searchData.wellName)
        if (this.searchData.wellName.length) {
          var wellNameArray = {
            wellName: this.searchData['wellName']
          }
          searchParam['inSearchTextParam'] = wellNameArray 
        }
      }
      this.getList(this.activeName, searchParam);
    },
  },
  created() {
    this.tableList = [
      { wellName: "井号1", accidentDate: "2021" },
      { wellName: "井号2", accidentDate: "2021" },
      { wellName: "井号3", accidentDate: "2021" },
    ].sort((a, b) => {
      return a.wellName.localeCompare(b.wellName, "zh-CN");
    });
    var params = {
      indexName: "zwjy-accident-info",
      field: "",
    };
    Object.keys(this.searchData).map((item) => {
      var searchArray = ["completionWellDate", "returnField", "structurePos"];
      if (!searchArray.includes(item)) {
        params.field = item;
        this.$axios
          .get(this.$apiList.base.searchByField, { params })
          .then((res) => {
            this.searchConfig[item] = res.data;
          });
      }
    });
    this.$axios
      .get(this.$apiList.base.getRegionInfo) // 统计区块 区块
      .then((res) => {
        console.log(res);
        this.searchConfig["structurePos"] = res.data;
      });
    this.onSearchClick();
  },
  components: {
    Search,
    Search2,
    List,
    List2,
  },
};
</script>

<style lang="less">
.sgfz-content-statistics {
  padding: 20px;
}
</style>>

