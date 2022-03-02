<template>
  <layout :active="2" :title="true">
    <div class="content-body">

      <b-tabs class="tab-content tab-content-default">
        <b-tab class="tab-pane fade" id="validators" role="tabpanel">
          <template v-slot:title>
            <span style="color:black;font-size:20px;font-weight: bold;">VALIDATORS</span>
          </template>
          <br><br><br>


          <div class="row">

            <div class="col-xl-4">

              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>NAME</h3>
                  </div>
                  <div class="widget-info">
                    <h5>IVAN-STAKE </h5>
                    </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12 col-md-12">
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

              <div class="col-xl-12 col-lg-12 col-md-12">
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

            </div>


            <div class="col-xl-4">

              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>STATUS</h3>
                  </div>
                  <div class="widget-info">
                    <h5>{{ $store.state.avalanche_data.api_data.ivanStatus }}</h5>
                    </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>BENEFICIARY ADDRESS</h3>
                  </div>
                  <div class="widget-info">
                    <h5>
                      <br>
                      <!-- <span style="padding-right:30px;">ADDRESS</span> -->
                      {{ $store.state.avalanche_data.api_data.beneficiaryAddress }}
                    </h5>
                  </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>STAKE</h3>
                  </div>
                  <div class="widget-info">
                    <h5><span style="padding-right:30px;">OWNED</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.stakeOwned }} 
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">TOTAL</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.stakeTotal }} 
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>


            </div>


            <div class="col-xl-4">

              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>TIME LEFT</h3>
                  </div>
                  <div class="widget-info">
                    <h5>{{ $store.state.avalanche_data.api_data.leftTimeDays }} days</h5>
                    <hr class="dotted">
                  </div>
                    <br>
                    <div class="progress" :style="cssProps" style="height: 30px;">
                      <div class="progress-bar bg-success progressvalidatortimeleft"  role="progressbar"  aria-valuemin="0" aria-valuemax="100">
                        <span class="progress-bar-text"> {{ progressvalidatortimeleft.toFixed(2) }} % </span>
                      </div>
                    </div>
                    <div>
                      <p style="text-align:left;height: 30px; width:auto;">
                          START DATE : {{ $store.state.avalanche_data.api_data.startTime }}
                          <span style="float:right;">
                              END TIME : {{ $store.state.avalanche_data.api_data.endTime }} 
                          </span>
                      </p>
                    </div>
                </div>
              </div>  

              <div class="col-xl-12 col-lg-12 col-md-12">
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

            </div>
            

          </div>

          <div class="row">
            
            <div class="col-xl-6">

              <div class="col-xl-12 col-lg-12 col-md-12">
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
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">FROM DELEGATIONS</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.potentialRewardFromDelegations }}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">TOTAL REWARDS</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.potentialRewardTotalRewards }}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                    </h5>
                  </div>
                  <br>
                  <div class="progress" :style="cssProps" style="height: 30px;">
                    <div class="progress-bar progresspotentialreward" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                      {{ $store.state.avalanche_data.api_data.potentialRewardFromOwnedStakePct.toFixed(2) }} %
                    </div>
                  </div>
                  <div>
                    <p style="text-align:left;">
                        FROM OWNED STAKE
                        <span style="float:right;">
                            {{ $store.state.avalanche_data.api_data.potentialRewardFromDelegationsPct.toFixed(2) }}% FROM DELEGATIONS
                        </span>
                    </p>
                  </div>
                </div>
              </div> 
                         
            </div>


            <div class="col-xl-6">

              <div class="col-xl-12 col-lg-12 col-md-12">
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
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">NET REWARDS</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsNetRewards }}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">DELEGATED</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsDelegated }}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">FREE SPACE</span>
                      <span style='font-size:1.2em'>{{ $store.state.avalanche_data.api_data.delegationsFreeSpace }}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                    </h5>
                  </div>
                  <div class="progress" :style="cssProps" style="height: 30px;">
                    <div class="progress-bar bg-success progressCapacity"  role="progressbar"  aria-valuemin="0" aria-valuemax="100">
                      <span> {{ $store.state.avalanche_data.api_data.delegationsCapacity.toFixed(2) }} % </span>
                    </div>
                  </div>
                  <div>
                    <p style="text-align:left;height: 30px; width:auto;">
                        CAPACITY
                        <span style="float:right;">
                            MAX CAPACITY = {{ $store.state.avalanche_data.api_data.delegationsMaxCapacity }} 
                            <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                        </span>
                    </p>
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

          <br>
          <br>
          

        </b-tab>


        <b-tab class="tab-pane fade" id="delegators" ref="tab2">
          <template v-slot:title>
            <span style="color:black;font-size:20px;font-weight: bold;">DELEGATORS</span>
          </template>
          <br>
          <br>

          <div class="row">

            <div class="col-xl-6">

              <div class="col-xl-12 col-lg-12 col-md-12">
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

              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>TIME LEFT</h3>
                  </div>
                  <div class="widget-info">
                    <h5>{{$store.state.avalanche_data.api_data.delegatorDaysLeft}} days</h5>
                    <hr class="dotted">
                  </div>
                  <div class="progress" :style="cssProps" style="height: 30px;">
                    <div class="progress-bar bg-success progressdelegatortimeleft"  role="progressbar"  aria-valuemin="0" aria-valuemax="100">
                      <span class="progress-bar-text"> {{ progressdelegatortimeleft.toFixed(2) }} % </span>
                    </div>
                  </div>
                  <div>
                    <p style="text-align:left;height: 30px; width:auto;">
                        START DATE : {{ $store.state.avalanche_data.api_data.delegatorStartTime }}
                        <span style="float:right;">
                            END TIME : {{ $store.state.avalanche_data.api_data.delegatorEndTime }} 
                        </span>
                    </p>
                  </div>
                </div>
              </div>


              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>STAKE</h3>
                  </div>
                  <div class="widget-info">
                    <h5><span style="padding-right:30px;">DELEGATED</span>
                      <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorStakeDelegated}} 
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-xl-6">

              <div class="col-xl-12 col-lg-12 col-md-12">
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


              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="widget-card">
                  <div class="widget-title"><h3>POTENTIAL REWARDS</h3></div>
                  <div class="widget-info">
                    <h5><span style="padding-right:30px;">GROSS REWARDS</span>
                      <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorGrossRewards}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">DELEGATION FEES</span>
                      <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorDelegationFees}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">NET REWARDS</span>
                      <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorNetRewards}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:15px;padding-left:5px;padding-right:5px;">{{$store.state.avalanche_data.api_data.cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">NET YIELD</span>
                      <span style='font-size:1.2em'>{{$store.state.avalanche_data.api_data.delegatorNetYield}} %</span>
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
// import moment from 'moment';


export default {
  components: { Layout },
  name : "my_validator",
  data() {
    return {  
      progressCapacity: 0, 
      progresspotentialreward: 0,  
      progressvalidatortimeleft: 0,
      progressdelegatortimeleft: 0,
        
    }
  },
  created() {},
  beforeMount() {},
  computed:{
    cssProps(){
      return {
        '--progress-Capacity': this.progressCapacity+"%",
        '--progress-potential-reward': this.progresspotentialreward+"%",
        '--progress-validator-timeleft': this.progressvalidatortimeleft+"%",
        '--progress-delegator-timeleft': this.progressdelegatortimeleft+"%",
      }
    },

    


  },
  mounted() {
    this.$store.dispatch("getIvanAPIPostData");
    this.progressCapacity = this.$store.state.avalanche_data.api_data.delegationsCapacity ;
    this.progresspotentialreward = this.$store.state.avalanche_data.api_data.potentialRewardFromOwnedStakePct ;
    this.progressvalidatortimeleft = 100 - (this.$store.state.avalanche_data.api_data.leftTimeDays * 100/ this.$store.state.avalanche_data.api_data.totalTimeDays);
    // this.progressdelegationtimeleft = 50;

  },
  methods: {
    ...mapMutations(['setDelegator']),
    daysApart(startDate,endDate, timeLeftDays) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      var splittedstartDate = startDate.split("-"); 
      var strstartDate = [splittedstartDate[0], splittedstartDate[2], splittedstartDate[1]].join('/');
      var startdateObject = new Date(strstartDate);

      var splittedendDate = endDate.split("-"); 
      var strendDate = [splittedendDate[0], splittedendDate[2], splittedendDate[1]].join('/');
      var enddateObject = new Date(strendDate);

      // Discard the time and time-zone information.
      const utc1 = Date.UTC(startdateObject.getFullYear(), startdateObject.getMonth(), startdateObject.getDate());
      const utc2 = Date.UTC(enddateObject.getFullYear(), enddateObject.getMonth(), enddateObject.getDate());
      const dur = Math.floor((utc2 - utc1) / _MS_PER_DAY)
      const timeLeft = 100 - (timeLeftDays/dur) * 100
      return timeLeft 
    },

    changeTab(record){
      this.progressdelegatortimeleft = this.daysApart(record.startTime, record.endTime, +record.timeLeftDays);
      this.setDelegator(record);
      this.$refs.tab2.activate();
    }
  }

};



</script>



<style scoped>
.progressCapacity{
  width: var(--progress-Capacity);
}

.progresspotentialreward {
  width: var(--progress-potential-reward);
}

.progressvalidatortimeleft {
  width: var(--progress-validator-timeleft);
}


.progressdelegatortimeleft {
  width: var(--progress-delegator-timeleft);
}

.progress-bar .progress-bar-text {
  position: absolute;
  color: black;
  padding-left:1px;
  /* text-shadow: 0px 0px 4px #444; */
}

</style>