<template>
  <Layout>
    <Header
      :style="{
        background: '#fff',
        boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
      }"
    >
      <input
        id="add"
        size="small"
        v-model="inputVal"
        placeholder="请输入待办"
        style="height:30px ; width:1000px;outline:none"
      />
      <Button type="success" @click="add">添加</Button>
    </Header>
    <Content :style="{ padding: '0 16px 16px' }">
      <Breadcrumb :style="{ margin: '16px 0' }">
        <BreadcrumbItem></BreadcrumbItem>
        <BreadcrumbItem></BreadcrumbItem>
        <BreadcrumbItem></BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <div style="height: 100%">
          <content>
            <div>
              <strong>未完成:</strong>
              <br /><br />
              <List border>
                <ListItem v-for="(item, index) in list" :key="item.id">
                  <input id="changeval" v-show="statu" v-model="item.name" />
                  <span v-show="!statu">{{ item.name }}</span>
                  <div>
                    <Button type="info" ghost @click="done(index)">
                      完成
                    </Button>
                    <Button type="info" ghost @click="change(index)">
                      修改
                    </Button>
                    <Button type="info" ghost @click="del(item.id)">
                      删除
                    </Button>
                  </div>
                </ListItem>
              </List>
            </div>
            <div>
              <strong>已完成:</strong>
              <br /><br />
              <List border>
                <ListItem v-for="item in listed" :key="item.id">
                  {{ item.name }}
                  <div>
                    <Button type="info" ghost @click="del2(item.id)"
                      >删除</Button
                    >
                  </div>
                </ListItem>
              </List>
            </div>
          </content>
        </div>
      </Card>
    </Content>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  name: "lists",
  data() {
    return {
      statu: false,
      inputVal: "",
      list: [],
      listed: [],
    };
  },
  created: function() {
    this.getlist();
  },

  methods: {
    getlist() {
      axios.get("http://121.4.183.85:3055/todolist").then((res) => {
        for (var i in res.data.data)
          if (res.data.data[i].status) {
            this.listed.push(res.data.data[i]);
          } else {
            this.list.push(res.data.data[i]);
          }
      });
    },

    add() {
      var names = document.getElementById("add");
      console.log(names.value);
      {
        axios
          .post("http://121.4.183.85:3055/todolist", {
            name: names.value,
            status: false,
          })
          .then((res) => {
            console.log(res.data.data);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      names.value = "";
    },

    done(index) {
      {
        axios
          .put("http://121.4.183.85:3055/todolist", {
            id: this.list[index].id,
            name: this.list[index].name,
            status: true,
          })
          .then((res) => {
            console.log(res);
            //  getlist();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      window.location.reload();
    },

    change(index) {
      var changename = document.getElementById("changeval");
      console.log(changename);
      this.statu = !this.statu;
      {
        axios
          .put("http://121.4.183.85:3055/todolist", {
            id: this.list[index].id,
            name: changename.value,
            status: false,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    del(id) {
      axios.delete("http://121.4.183.85:3055/todolist/" + id).then((res) => {
        console.log(res);
        this.getlist();
        console.log(this.list);
        window.location.reload();
      });
    },
    del2(id) {
      axios.delete("http://121.4.183.85:3055/todolist/" + id).then((res) => {
        console.log(res);
        this.getlist();
        // console.log(this.listed);
        window.location.reload();
      });
    },
  },
};
</script>

<style></style>
