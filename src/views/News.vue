<template>
<layout :active="3" :title="true">
    <div class="content-body">
      <div class="box" v-for="(item, index) in news" :key="index">
        <div class="card mb-4" style="width:auto">
          <div class="row no-gutters">
            <div class="col-md-3">
              <img class="center"  v-bind:src="item.imageurl" alt="" style="width:200px;height=2000px;">
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <a class="card-title title is-link" v-bind:href="item.guid" target="_blank">
                  <span style="font-size:20px;">{{item.title}}</span>
                </a>
                <br><br>
                <p class="card-text">{{item.body}}</p>
                <p class="card-text"><small class="text-muted">{{getDate(item.published_on)}}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>           
     </div>
    </layout>
</template>

<script>
import axios from 'axios';
import Layout from "../components/dashboard/Layout.vue";
import moment from 'moment';


export default {
  components: { Layout },
  name: 'news',
  data: () => ({
    news: [],
    errors: []
  }),
created () {
    axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
      .then(response => {
        this.news = response.data.Data
        // console.log(response.data.Message) // This will give you access to the full object
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
methods:{
  getDate(x){
    var date = new Date(x * 1000);
    return moment(date).format("YYYY-DD-MM HH:MM:SS"); // format("YYYY-DD-MM")
    }
  }
}
</script>

<style scoped>
 
 .a:hover{
  color:#3273dc;
 }
 .box{
  width: 95%;
  margin: auto;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

}


</style>
