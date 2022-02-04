<template>
    <layout :active="5" :title="true">
    <div class="content-body">
        <div>
        <b-tabs content-class="mt-3">
        <b-tab title="Github API Data" active><p>
                <b-table
                    title="API Data"
                    
                    striped
                    small
                    bordered
                    outlined
                    :items="tableData1"
                    :fields="fields1"
                    :current-page="currentPage"
                    :per-page="perPage"
                    />
            <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="my-table"
            ></b-pagination>

        <br>
        <button class="btn btn-xs btn-primary" @click="getCryptoData">Refresh</button>    
                
                
        </p></b-tab>
        
            <b-tab title="Coin Market Cap API Data"><p>
                <b-table
                    title="API Data"
                    
                    striped
                    small
                    bordered
                    outlined
                    :items="tableData2"
                    :fields="fields2"
                    :current-page="currentPage"
                    :per-page="perPage"
                    />
            <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="my-table"
            ></b-pagination>

        <br>
        <button class="btn btn-xs btn-primary" @click="getCryptoData">Refresh</button>    
                
                
            </p></b-tab>
            
        </b-tabs>
        </div>
     <!-- <div class="container"> -->
        
    </div>
         <!-- </div>  -->
    </layout>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Layout from "../components/dashboard/Layout.vue";
import axios from 'axios';
export default ({
    components: { Layout },
    data() {
       return{
        fields1: ['Name','Symbol','Repository','Latest_release','Commits_Count','Branches_Count','Tags_Count','Pull_Requests_Count','Issues_Count','Comments_Count','Languages_Count','Downloads_Count','Labels_Count','Milestones_Count','Watchers_Count','Stars_Count'],
        fields2: ['name','symbol','slug','num_market_pairs','date_added','max_supply','circulating_supply','total_supply','cmc_rank','last_updated','quote.USD.price','quote.USD.volume_24h','quote.USD.percent_change_1h','quote.USD.percent_change_24h'],
        info:{},
        tableData1: [],
        tableData2: [],
        totalRows: 100,
        currentPage: 1,
        perPage: 10



        } 

    },
    created() {
        this.getCryptoData();
        this.getGithubData();
    },
    methods: {
        getCryptoData()
        {
            axios
            .get('http://127.0.0.1:8000/coinmarketcap/')
            .then(response => {this.tableData2 = response.data})
        },
        getGithubData()
        {
            axios
            .get('http://127.0.0.1:8000/github/')
            .then(response => {this.tableData1 = response.data})
        }
    }
    
  // computed, created  , bbforecreated, afterreated, -before created eg. session check beforecreated, 
  // destroyed -

})
</script>
