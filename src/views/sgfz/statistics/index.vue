<!--
 * @Author: WangYP
 * @Date: 2021-09-22 15:12:44
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-05 18:30:26
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
            :cols="cols"
            :searchData="searchData"
            v-model="paginationData"
            @onSearch="onSearchClick"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="区块" name="second">
        <div class="sgfz-search">
          <Search2
            @onSearch="onSearchClick"
            @checkBox2="checkBoxChange2"
            v-model="searchData"
            :config="searchConfig"
          />
        </div>
        <div class="sgfz-list">
          <List2
            :tableList="tableList"
            :cols2="cols2"
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
      cols: [
        { props: "id", label: "井号", fixed: "left", isShow: true },

        { props: "accidentDate", label: "卡钻年份", isShow: false },
        { props: "openTime", label: "卡钻开次", isShow: false },
        { props: "bitSize", label: "钻头直径", isShow: false },
        { props: "stuckPointHorizon", label: "卡点层位", isShow: false },
        { props: "accidentBitHorizon", label: "钻头深度层位", isShow: false },
        { props: "fluidType", label: "钻井液亚类", isShow: false },
        { props: "stuckDrillType", label: "卡钻类型", isShow: false },
        { props: "processingMethod", label: "解卡方法", isShow: false },

        { props: "wellType", label: "p钻井液g/cm3", isShow: true },
        { props: "wellType", label: "卡钻次数", isShow: true },
        { props: "wellType", label: "总损失时间h", isShow: true },
        { props: "wellType", label: "平均损失时间h/次", isShow: true },
        { props: "wellType", label: "总损失金额万元", isShow: true },
        { props: "wellType", label: "平均损失金额万元", isShow: true },
      ],
      cols2: [
        { props: "geoDescription", label: "构造带", isShow: true },
        { props: "structurePos", label: "圈闭/构造", isShow: true },

        { props: "accidentDate", label: "卡钻年份", isShow: false },
        { props: "openTime", label: "卡钻开次", isShow: false },
        { props: "bitSize", label: "钻头直径", isShow: false },
        { props: "stuckPointHorizon", label: "卡点层位", isShow: false },
        { props: "accidentBitHorizon", label: "钻头深度层位", isShow: false },
        { props: "fluidType", label: "钻井液亚类", isShow: false },
        { props: "stuckDrillType", label: "卡钻类型", isShow: false },
        { props: "processingMethod", label: "解卡方法", isShow: false },

        { props: "id", label: "统计井数", isShow: true },
        { props: "id", label: "钻头直径", isShow: true },
        { props: "id", label: "卡钻井数口", isShow: true },
        { props: "id", label: "卡钻概率%", isShow: true },
        {
          label: "卡钻次数",
          child: [
            { props: "accidentNumb", label: "总次数" },
            { props: "accidentNumb", label: "平均次数/次/扣" },
          ],
        },
        {
          label: "损失时间",
          child: [
            { props: "accidentNumb", label: "总次数" },
            { props: "accidentNumb", label: "平均次数/次/扣" },
          ],
        },
        {
          label: "损失金额",
          child: [
            { props: "accidentNumb", label: "总次数" },
            { props: "accidentNumb", label: "平均次数/次/扣" },
          ],
        },
        { props: "id", label: "对应井号" },
      ],
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
        wellId: [],
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
        wellId: null,
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
      console.log(url)
      this.$axios.post(url, searchParam).then((res) => {
        this.tableList = res.data;
        console.log(res);
      });
    },
    checkBoxChange(values) {
      values.forEach((element) => {
        this.cols.forEach((item) => {
          console.log(item);
          if (item.props === element) {
            item.isShow = true;
          }
        });
      });
    },
    checkBoxChange2(values) {
      values.forEach((element) => {
        console.log(element);
        this.cols2.forEach((item) => {
          console.log(item);
          if (item.props === element) {
            item.isShow = true;
          }
        });
      });
    },
    handleClick() {
      this.searchData.returnField = [];
      this.onSearchClick();
    },
    onSearchClick() {
      var temSearch = {};
      Object.keys(this.searchData).forEach((item) => {
        const key = this.searchData[item];
        if (item !== "returnField" && key) {
          temSearch[item] = this.searchData[item];
        }
        if (item === "returnField" && this.searchData.returnField.length) {
          temSearch["returnField"] = this.searchData["returnField"];
        }
      });
      var searchParam = {
        searchWildcardParam: temSearch,
        indexName: "zwjy-accident-info",
        pageNum: this.paginationData.pageNum,
        pageSize: this.paginationData.pageSize,
      };
      this.getList(this.activeName, searchParam);
      // this.$axios
      //   .post(this.$apiList.base.searchWellCount, searchParam)
      //   .then((res) => {
      //     var arr = Object.keys(res.data);
      //     var paramss = [];
      //     arr.forEach((items) => {
      //       paramss = [...paramss, ...res.data[items]];
      //     });
      //     // this.tableList = paramss;
      //     console.log(res);
      //   });
    },
  },
  created() {
    var aa = {
      "轮南2-3-1": [
        {
          id: "1003019_TL_TL1183Y1AEEJY7YG",
          wellId: "WELLTL100017398",
          wellBoreId: "WEBHTL100004687",
          wellDepth: 4808,
          wellType: "直井",
          wellName: "轮南2-3-1",
          wellPurpose: "基础井网注水井",
          completionWellDate: "1991-05-16",
          geoDescription:
            "塔里木盆地塔北隆起轮南潜山背斜2号构造中部，轮南2井与轮南5井之间的平台上。",
          structurePos: "轮2 TⅠ",
          accidentNumber: "1",
          accidentDate: "1991-01-01 07:30:00",
          removeDate: "1991-02-21 07:00:00",
          openTimes: null,
          bitSize: null,
          accidentBitDepth: null,
          accidentBitHorizon: null,
          runtimeSituation: null,
          stuckDrillType: null,
          stuckPointPlace: null,
          stuckPointHorizon: null,
          stuckPointLava: null,
          occurrenceProcess: null,
          processingMethod: null,
          processingCourse:
            "倒扣下入接头对扣后，上提250T脱扣，下入公锥打捞，二次水眼堵死蹩压270AT不通，下铣管套铣三次，将鱼义包至4773M，下卡打捞筒失败，后下公锥打捞公锥成功，解除事故。",
          stuckDrillReason:
            "91-1-1 7:30固1#泵左排上水凡尔座刺坏又因高压管汇闸门压力互泻矿停泵抢修，8:00修好后开泵蹩压，200AT未通上提活动遇卡，上提1110DC250T。下放MIN60T，（全悬152T）。\r\n原因：井内沉砂未及内携出，造成沉砂卡钻。",
          reworkFootage: null,
          abandonedFootage: null,
          lostTime: "1224.0",
          treatingAgentCost: null,
          lossCost: null,
          fluidType: null,
        },
      ],
      塔中723: [
        {
          id: "1003019_TL_TL1183VTGLDK9VK0",
          wellId: "WELLTL100017695",
          wellBoreId: "WEBHTL100002658",
          wellDepth: 3483,
          wellType: "直井",
          wellName: "塔中723",
          wellPurpose: "报废井",
          completionWellDate: "2007-06-22",
          geoDescription:
            "位于塔里木盆地中央隆起塔中低凸起北斜坡塔中83号岩性圈闭上。",
          structurePos: "北部上斜坡",
          accidentNumber: "1",
          accidentDate: "2007-02-05 17:40:00",
          removeDate: "2007-02-11 15:30:00",
          openTimes: null,
          bitSize: null,
          accidentBitDepth: null,
          accidentBitHorizon: null,
          runtimeSituation: null,
          stuckDrillType: null,
          stuckPointPlace: null,
          stuckPointHorizon: null,
          stuckPointLava: null,
          occurrenceProcess: null,
          processingMethod: null,
          processingCourse:
            '07年2月5日卡钻后，因钻具立柱下单根接头进入转盤下近5m，无法卸立柱，为接方钻杆，只有采用上提活动钻具方法，反复用180t、200t、220t、240t、270t活动钻具，最后上提拉力290t将立柱接头提出转盤面坐吊卡卸掉立柱，抢接方钻杆开泵循环钻井液12-15MPa，循环正常。用上提随钻震击器拉力100-175t反复震击100多次，卡点末移动。\r\n2、2月6日配解卡剂15方(配方：柴油13m3+解卡剂1200kg+快T400kg+水1m3+重晶石5.8t。密度1.18g/cm3，粘度40秒)，打入10m3，出钻头进环空2m3，浸泡高度约100m，間隔1小时顶0.5m3，共漫泡9小时，中间上提下放活动钻具，拉力140-200t--270t活动，上击数拾次卡点末移动。\r\n3、2月7日打酸浸泡，第1次打酸8m3，出钻头进环空2m3，浸泡8小时无效；第2次打酸5m3，进环空1m3，浸泡6小时无效；第3次打酸5m3，浸泡6小时无效，多次活动钻具，上提拉力140-250t未解卡。\r\n4、2月8-9日上测卡車、爆炸倒扣，先下测卡仪测卡点井深3437.52m，爆炸倒扣位置3428. 45m，倒出钻具6-1/4 "钻铤*1根+8-1/2 "扶正器*1+6-1/4 "钻铤*17根+6-1/4 "随钻震器+6-1/4 "钻铤*3根+5 "加重钻杆*15根+5 "钻杆，倒出钻具长度3422.88m。\r\n5、2月10--11日，用超级震击器下钻至井深3428.45m对扣顺利，方钻杆扭紧扣后，第1次从100-160t上击，提钻具末解卡。第2次用100-189t拉力上击，震动后悬重由189t下降至123.4t，原悬重120t，上增3.4t，井下钻具解卡，起钻提出全部井下钻具，事故解除。',
          stuckDrillReason:
            '2007年2月5日17:40下钻至井深3443.37m迂阻(从录井时时监測图查看)，悬重下降14.3t(原悬重132.9t)，随钻震击器下击器突然下击工作，然后上提钻具至162.2t，发現井下钻具卡死。经事故处理完分折，见8-1/2"PDC钻头保径齿复合片都有破碎，钻头平面齿复合片完好。造成保径齿损壞原因是：当钻头入小井眼迂阻后，因下击器工作产生的震动造成保径齿损坏。由于迂阻后下击器意外下击，使Φ215mm扶正器插入小井眼(井深3447-3452为泥岩段，泥浆浸泡后产生缩径)造成卡钻。',
          reworkFootage: null,
          abandonedFootage: null,
          lostTime: "142.0",
          treatingAgentCost: null,
          lossCost: null,
          fluidType: null,
        },
      ],
    };
    var arr = Object.keys(aa);
    var paramss = [];
    arr.forEach((items) => {
      paramss = [...paramss, ...aa[items]];
    });
    //this.tableList = params;
    var params = {
      indexName: "zwjy-accident-info",
      field: "",
    };
    Object.keys(this.searchData).map((item) => {
      var searchArray = [
        "completionWellDate",
        "wellId",
        "returnField",
        "structurePos",
      ];
      if (!searchArray.includes(item)) {
        params.field = item;
        console.log(params);
        this.$axios
          .get(this.$apiList.base.searchByField, { params })
          .then((res) => {
            console.log(res);
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

