<template>
<layout :active="6" :title="true">
    <div class="content-body">
         <div>
           <section class="section">
         <div class="box" v-for="item in news" :key="item">
               <div class="card">
                    <div class="card-image">
                    </div>
                    <div class="card-content">
                        <div class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                            <img  v-bind:src="item.imageurl" alt="" style="width:60px;height=60px;">
                            </figure>
                            <bold>
                            <a class="title is-link" v-bind:href="item.guid" target="_blank">{{item.title}}</a>
                            </bold>
                            <br>
                             {{item.body}}
                             
                        </div>
                       
                        </div>
<div class="content">
                        
                        <br>
                        <br>
</div>
                    </div>
                </div>
             </div>
      </section>
      </div>
     </div>
    </layout>
</template>

<script>
import axios from 'axios';
import Layout from "../components/dashboard/Layout.vue";
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
        console.log(response.data.Message) // This will give you access to the full object
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
 
 a.title:hover{
  color:#3273dc;
 }
 section.section{
  width: 70%;
}
section.section{
   margin: auto; 
}
</style>