<template>
  <layout :active="7" :title="true">
    <div class="content-body">
      <div>
         
          <!-- {{ivanapi_data}} -->
          <div class="row">
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>PostmanId</h5>
                  </div>
                  <div class="widget-info">
                    <h3>{{ivanapi_data.info._postman_id}}</h3>
                   
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>Name</h5>
                  </div>
                  <div class="widget-info">
                    <h3>{{ivanapi_data.info.name}}</h3>
                   </div>
                </div>
              </div>
              <div class="col-xl-10 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>Schema</h5>
                  </div>
                  <div class="widget-info">
                    <h3>{{ivanapi_data.info.schema}}</h3>
                  </div>
                </div>
              </div>
              <br>
              <div class="col-xl-10 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>1st Validators txID</h5>
                  </div>
                  <div class="widget-info">
                    <h3>{{JSON.parse(ivanapi_post_data).result.validators[0].txID}}</h3>
                  </div>
                </div>
              </div>
              <div class="col-xl-10 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>1st Validators NodeID</h5>
                  </div>
                  <div class="widget-info">
                    <h3>{{JSON.parse(ivanapi_post_data).result.validators[0].nodeID}}</h3>
                  </div>
                </div>
              </div>
              <b-table
                    title="Validators Data"
                    
                    striped
                    small
                    bordered
                    outlined
                    :items="tableData"
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    />
                <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                aria-controls="my-table"
                ></b-pagination>
            </div>
            </div>
        </div>
      </div>
      <!-- <div class="container"> -->
    </div>

  </layout>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Layout from "../components/dashboard/Layout.vue";
import axios from "axios";
export default {
  components: { Layout },
  data() {
    return {
      ivanapi_data: [],
      ivanapi_post_data: [],
        fields: ['txID','startTime','endTime','stakeAmount','nodeID','rewardOwner','potentialReward'],
        tableData: [],
        totalRows: 100,
        currentPage: 1,
        perPage: 10
    };
  },
  created() {
    this.getCryptoData();
    this.getGithubData();
    this.getIvanAPIData();
    this.getIvanAPIPostData();
    this.getIvanAPIDelegatorData();
  },
  methods: {
    getCryptoData() {
      axios.get("http://127.0.0.1:8000/coinmarketcap/").then((response) => {
        this.tableData2 = response.data;
      });
    },
    getGithubData() {
      axios.get("http://127.0.0.1:8000/github/").then((response) => {
        this.tableData1 = response.data;
      });
    },
    getIvanAPIData() {
      axios.get("http://127.0.0.1:8000/ivanapi/").then((response) => {
          
        this.ivanapi_data = response.data;
      });
    },
    getIvanAPIPostData() {
    //   axios.get("http://127.0.0.1:8000/ivanapi/").then((response) => {
    //     this.ivanapi_data = response.data;
    //   });
    //  axios
    //         .post('ec2-3-143-14-77.us-east-2.compute.amazonaws.com:9650/ext/P', {
    //             headers : {
    //             'Content-Type': 'application/json'
    //             }, 
    //             body : {
    //                 "jsonrpc": "2.0",
    //                 "method": "platform.getCurrentValidators",
    //                 "params": {
    //                     "nodeIDs": [
    //                     "NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69"
    //                     ]
    //                 },
    //                 "id": 1
    //             }
    //         })
    //         .then(response => {this.ivanapi_post_data = response.data});

    // },
    axios
            .post('http://127.0.0.1:8000/ivanpostapi/', {
                headers : {
                'Content-Type': 'application/json'
                }, 
                body : {
                    "jsonrpc": "2.0",
                    "method": "platform.getCurrentValidators",
                    "params": {
                        "nodeIDs": [
                        "NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69"
                        ]
                    },
                    "id": 1
                }
            })
            .then(response => {
                // console.log(response.data[0])
                this.ivanapi_post_data = response.data[0]});

    },
    getIvanAPIDelegatorData() {
        console.log("Validator Delegator Data");
        console.log(JSON.parse(this.ivanapi_post_data));
        this.tableData = this.ivanapi_post_data.result.validators[0].delegators;
    },
  },

  // computed, created  , bbforecreated, afterreated, -before created eg. session check beforecreated,
  // destroyed -
};
</script>
