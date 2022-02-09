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
    
  },
  beforeMount() {
    // this.getIvanAPIDelegatorData();
  },
  mounted() {
    
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
                this.ivanapi_post_data = response.data[0]
                this.tableData = JSON.parse(this.ivanapi_post_data).result.validators[0].delegators;
                });

    },
    getIvanAPIDelegatorData() {

        // axios
        //     .post('http://127.0.0.1:8000/ivanpostapi/', {
        //         headers : {
        //         'Content-Type': 'application/json'
        //         }, 
        //         body : {
        //             "jsonrpc": "2.0",
        //             "method": "platform.getCurrentValidators",
        //             "params": {
        //                 "nodeIDs": [
        //                 "NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69"
        //                 ]
        //             },
        //             "id": 1
        //         }
        //     })
        //     .then(response => {
        //         // console.log(response.data[0])
        //         this.tableData = JSON.parse(response.data[0]).result.validators[0].delegators;
                
        //         });

         //this.tableData = JSON.parse(this.ivanapi_post_data).result.validators[0].delegators;
        // console.log("Validator Delegator Data");
        // // console.log(JSON.parse(this.ivanapi_post_data).result.validators[0]);
        // const json = '{"jsonrpc":"2.0","result":{"validators":[{"txID":"jjUDt65TSgNAfFYVcTmLAaS8CskHk9aatjLjofeeDJuXUVb2D","startTime":"1644210334","endTime":"1645506613","stakeAmount":"29997000000","nodeID":"NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69","rewardOwner":{"locktime":"0","threshold":"1","addresses":["P-fuji147zgnd63ujdwrp3kxysr63tw0vpyccn0tkax3g"]},"potentialReward":"118330314","delegationFee":"2.0000","uptime":"1.0000","connected":true,"delegators":[{"txID":"tsz32h5X6PswpPHBYHgEMzzCSsW24XchktpD7Kak1MVUq43xj","startTime":"1644211216","endTime":"1645421347","stakeAmount":"15000000000","nodeID":"NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69","rewardOwner":{"locktime":"0","threshold":"1","addresses":["P-fuji1uhzkydrqd0suqkg02q2250ufdfyf6xh8f3v4ze"]},"potentialReward":"55208754"},{"txID":"28fboUZwNhhJyQLE3fZEBEnupkhgyMWJe531to46eG1bJCsntG","startTime":"1644211455","endTime":"1645421640","stakeAmount":"12998000000","nodeID":"NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69","rewardOwner":{"locktime":"0","threshold":"1","addresses":["P-fuji1e5m7akgqer649cd73ksqjtphmxl80r45346qjg"]},"potentialReward":"47842377"},{"txID":"2mAoB1z8eipaNL11qjGuae24tGvM5kmQqUU6XBv8tmdh5Fhfno","startTime":"1644211498","endTime":"1645421651","stakeAmount":"13969000000","nodeID":"NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69","rewardOwner":{"locktime":"0","threshold":"1","addresses":["P-fuji12uj7wuzthdp7ajxvwwfdsnynl9ud8ahg2mvtma"]},"potentialReward":"51415014"},{"txID":"2REUQ9sP1nFyZ7mzfh3SBCjC2BCcXiL2GuVQMxmHmYQC34Bfsw","startTime":"1644230425","endTime":"1645440590","stakeAmount":"1998000000","nodeID":"NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69","rewardOwner":{"locktime":"0","threshold":"1","addresses":["P-fuji1ygw0ut78rvv3x9v4zkwsu0k7eveg2huzyaznu4"]},"potentialReward":"7354014"}]}]},"id":1}';
        // const obj = JSON.parse(json);

        // console.log(obj.result.validators[0].delegators[0]);
        // this.tableData = JSON.parse(this.ivanapi_post_data).delegators;
    },
  },

  // computed, created  , bbforecreated, afterreated, -before created eg. session check beforecreated,
  // destroyed -
};
</script>
