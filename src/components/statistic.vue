<template>
  <Layout>
    <div id="data">
      <p>未完成：{{ count1 }}</p>
      <p>已完成：{{ count2 }}</p>

      <Row style="background:#eee;padding:20px">
        <Col span="8" style="left:200px">
          <Card :bordered="false">
            <p slot="title"><Icon type="md-close" />未完成数</p>
            <p>{{ count1 }}</p>
          </Card>
        </Col>
        <Col span="8" offset="2" style="left:100px">
          <Card shadow>
            <p slot="title"><Icon type="md-checkmark" />已完成数</p>

            <p>{{ count2 }}</p>
          </Card>
        </Col>
      </Row>
    </div>
  </Layout>
</template>
<script>
import axios from "axios";
export default {
  name: "statistic",
  data() {
    return {
      count1: 0,
      count2: 0,
    };
  },
  created: function() {
    this.datalist();
  },
  methods: {
    datalist() {
      axios.get("http://121.4.183.85:3055/todolist").then((res) => {
        for (var i in res.data.data)
          if (res.data.data[i].status) {
            this.count2++;
          } else {
            this.count1++;
          }
      });
    },
  },
};
</script>
