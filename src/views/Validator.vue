<template>
  <layout :active="2" :title="true">
    <div class="content-body">

      <b-tabs class="tab-content tab-content-default">
        <b-tab class="tab-pane fade" id="validators" role="tabpanel">
          <template v-slot:title>
            <span style="color:black;font-size:20px;font-weight: bold;">VALIDATORS</span>
          </template>
          <br><br>
          <div class="col-xl-12">
            <div class="col-xl-12">
              <div class="row">


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>NAME</h3>
                    </div>
                    <div class="widget-info">
                      <h5>IVAN-STAKE </h5>
                      </div>
                  </div>
                </div>


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>STATUS</h3>
                    </div>
                    <div class="widget-info">
                      <h5>{{ $store.state.avalanche_data.api_data.ivanStatus }}</h5>
                      </div>
                  </div>
                </div>


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>NODE</h3>
                    </div>
                    <div class="widget-info">
                      <h5>{{ $store.state.avalanche_data.api_data.nodeID }}</h5>
                      <hr class="dotted">
                    </div>
                  </div>
                </div>


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>TIME LEFT</h3>
                    </div>
                    <div class="widget-info">
                      <h5>{{ $store.state.avalanche_data.api_data.leftTimeDays }} days</h5>
                      <hr class="dotted">
                    </div>
                    <div class="hr"><hr></div>
                      <span style="padding-right:30px;">START TIME</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.startTime }} </span>
                    <div class="hr"><hr></div>
                      <span style="padding-right:30px;">END TIME</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.endTime }} </span>
                  </div>
                </div>


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>BENEFICIARY</h3>
                    </div>
                    <div class="widget-info">
                      <h5>
                        <br>
                        <span style="padding-right:30px;">ADDRESS</span>
                        {{ $store.state.avalanche_data.api_data.beneficiaryAddress }}
                      </h5>
                    </div>
                  </div>
                </div>



                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>NODE<span style='font-size:0.73em'>(CURRENT STATUS)</span></h3>
                    </div>
                    <div class="widget-info">
                      <h5><span style="padding-right:30px;">VERSION</span>
                        <span style='font-size:1.2em'>avalanche/1.7.5</span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">IP</span>
                        <span style='font-size:1.2em'>18.190.173.22</span>
                      </h5>
                    </div>
                  </div>
                </div>


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>STAKE</h3>
                    </div>
                    <div class="widget-info">
                      <h5><span style="padding-right:30px;">OWNED</span>
                        <!-- <span style='font-size:1.2em'>{{JSON.parse(ivanapi_post_data).result.validators[0].stakeAmount}}</span> -->
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.stakeOwned }} 
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">TOTAL</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.stakeTotal }} 
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <!-- <div class="hr"><hr></div>
                        <span style="padding-right:30px;">NETWORK SHARE</span>
                        <span style='font-size:1.2em'>0.000184816 %</span> -->
                      </h5>
                    </div>
                  </div>
                </div>


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>PERFORMANCE</h3>
                    </div>
                    <div class="widget-info">
                      <h5><span style="padding-right:30px;">AVERAGE RESPONSE</span>
                        <span style='font-size:1.2em'>100.00 %</span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">RESPONSIVENESS</span>
                        <span style='font-size:1.2em'>14 / 14</span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">SAMPLED RESPONSES</span>
                        <span style='font-size:1.2em'>100 %</span>
                      </h5>
                    </div>
                    <br>
                    <p>
                      Response data from a sample of Avalanche nodes. <br>
                      Node uptime can't be known before end time.
                    </p>
                  </div>
                </div>


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>POTENTIAL REWARDS</h3>
                    </div>
                    <p>
                      Rewards earned if the validator uptime is greater than 80% at validation end time
                    </p>
                    <br>
                    <div class="widget-info">
                      <h5><span style="padding-right:30px;">FROM OWNED STAKE</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.potentialRewardfromOwnedStake }}  
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">FROM DELEGATIONS</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.potentialRewardFromDelegations }}  
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">TOTAL REWARDS</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.potentialRewardTotalRewards }}  
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">FROM OWNED STAKE</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.potentialRewardFromOwnedStakePct.toFixed(2) }} %</span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">FROM DELEGATIONS</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.potentialRewardFromDelegationsPct.toFixed(2) }} %</span>
                        <!-- <div class="progress" style="height: 30px;">
                          <div class="progress-bar" role="progressbar" style="width: 99.74%; text-align:left; padding-left: 20px;" aria-valuenow="99.72" aria-valuemin="0" aria-valuemax="100">
                            {{ $store.state.avalanche_data.api_data.potentialRewardFromOwnedStakePct.toFixed(2) }} %
                          </div>
                          
                          <div class="progress-bar bg-danger" role="progressbar" style="float:right; padding-right: 50px;" aria-valuenow="0.28" aria-valuemin="0" aria-valuemax="100">
                            {{ $store.state.avalanche_data.api_data.potentialRewardFromDelegationsPct.toFixed(2) }} %
                          </div>
                        </div>
                        <div>
                          <p style="text-align:left;">
                              FROM OWNED STAKE
                              <span style="float:right;">
                                  FROM DELEGATIONS
                              </span>
                          </p>
                        </div> -->
                      </h5>
                    </div>
                  </div>
                </div>


                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="widget-card">
                    <div class="widget-title">
                      <h3>DELEGATIONS</h3>
                    </div>
                    <div class="widget-info">
                      <h5><span style="padding-right:30px;">MAX YIELD</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsMaxYield.toFixed(6) }} %</span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">DELEGATION FEES</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsFee }} %</span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">GROSS REWARDS</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsGrossReward }}  
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">NET REWARDS</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsNetRewards }}  
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">DELEGATED</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsDelegated }}  
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">FREE SPACE</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsFreeSpace }}  
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">CAPACITY</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsCapacity.toFixed(2) }}  %</span>
                        <div class="hr"><hr></div>
                        <span style="padding-right:30px;">MAX CAPACITY</span>
                        <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsMaxCapacity }}  
                          <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                        <!-- <br><br>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                        </div> -->
                      </h5>
                    </div>
                  </div>
                </div>




              </div>
            </div>
          </div>

          <span style="color:black;font-size:30px;font-weight:700;">{{ $store.state.avalanche_data.api_data.NumberOfDelegators }} Delegations</span>
          <br>
          <br>

          <b-table
                title="Validators Data"

                striped
                outlined
                responsive
                small
                bordered
                table-variant

                :items="$store.state.avalanche_data.api_data.tableData"
                :fields="$store.state.avalanche_data.api_data.fields"
                :current-page="$store.state.avalanche_data.api_data.currentPage"
                :per-page="$store.state.avalanche_data.api_data.perPage"
                @row-clicked="changeTab"
              />
          <b-pagination
          v-model="$store.state.avalanche_data.api_data.currentPage"
          :total-rows="$store.state.avalanche_data.api_data.totalRows"
          :per-page="$store.state.avalanche_data.api_data.perPage"
          aria-controls="my-table"
          ></b-pagination>
          

        </b-tab>


        <b-tab class="tab-pane fade" id="delegators" ref="tab2">
          <template v-slot:title>
            <span style="color:black;font-size:20px;font-weight: bold;">DELEGATORS</span>
          </template>
          <br>
          <br>

          <div class="col-xl-12">
            <div class="row">


            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="widget-card">
                <div class="widget-title">
                  <h3>DELEGATED NODE</h3>
                </div>
                <div class="widget-info">
                  <h5>{{$store.state.avalanche_data.api_data.delegatorDelegatedNode}}</h5>
                  <hr class="dotted">
                </div>
              </div>
            </div>


            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="widget-card">
                <div class="widget-title">
                  <h3>BENEFICIARY</h3>
                </div>
                <div class="widget-info">
                  <h5>
                    <br>
                    <span style="padding-right:30px;">ADDRESS</span>
                    {{$store.state.avalanche_data.api_data.delegatorBeneficiary}}
                  </h5>
                </div>
              </div>
            </div>
    

            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="widget-card">
                <div class="widget-title">
                  <h3>TIME LEFT</h3>
                </div>
                <div class="widget-info">
                  <h5>{{$store.state.avalanche_data.api_data.delegatorDaysLeft}} days</h5>
                  <hr class="dotted">
                </div>
                <div class="hr"><hr></div>
                  <span style="padding-right:30px;">START TIME</span>
                  <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorStartTime}} </span>
                <div class="hr"><hr></div>
                  <span style="padding-right:30px;">END TIME</span>
                  <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorEndTime}} </span>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="widget-card">
                <div class="widget-title"><h3>POTENTIAL REWARDS</h3></div>
                <div class="widget-info">
                  <h5><span style="padding-right:30px;">GROSS REWARDS</span>
                    <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorGrossRewards}}  
                      <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                    </span>
                    <div class="hr"><hr></div>
                    <span style="padding-right:30px;">DELEGATION FEES</span>
                    <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorDelegationFees}}  
                      <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                    </span>
                    <div class="hr"><hr></div>
                    <span style="padding-right:30px;">NET REWARDS</span>
                    <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorNetRewards}}  
                      <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                    </span>
                    <div class="hr"><hr></div>
                    <span style="padding-right:30px;">NET YIELD</span>
                    <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorNetYield}} %</span>
                  </h5>
                </div>
              </div>
            </div>


            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="widget-card">
                <div class="widget-title">
                  <h3>STAKE</h3>
                </div>
                <div class="widget-info">
                  <h5><span style="padding-right:30px;">DELEGATED</span>
                    <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorStakeDelegated}} 
                      <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                    </span>
                  </h5>
                </div>
              </div>
            </div>


            </div>
          </div>
          
          <br>
          <br>

        </b-tab>


      </b-tabs>      
    
    </div>

  </layout>
</template>





<script>
import Layout from "../components/dashboard/Layout.vue";
import {mapMutations} from 'vuex';


export default {
  components: { Layout },
  name : "my_validator",
  data() {
    return {        
    }
  },
  created() {},
  beforeMount() {},
  mounted() {
    this.$store.dispatch("getIvanAPIPostData");
  },
  methods: {
    ...mapMutations(['setDelegator']),
    changeTab(record){
      this.setDelegator(record);
      this.$refs.tab2.activate();
    }
  }

};



</script>



<style scoped>

</style>