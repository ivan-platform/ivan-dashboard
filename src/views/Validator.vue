<template>
  <layout :active="2" :title="true">
    <div class="content-body">
      <div>
        <span style="color:black;font-size:50px;font-weight:700;">Validator</span>
        <br>
        <br>
        <!-- {{ivanapi_data}} -->



        <div class="col-xl-12">
          <div class="col-xl-12">
            <div class="row">


              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>NAME</h3>
                  </div>
                  <div class="widget-info">
                    <h5>IVAN-STAKE</h5>
                    </div>
                </div>
              </div>


              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>STATUS</h3>
                  </div>
                  <div class="widget-info">
                    <h5>{{ivanStatus}}</h5>
                    </div>
                </div>
              </div>


              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h3>NODE</h3>
                  </div>
                  <div class="widget-info">
                    <h5>{{nodeID}}</h5>
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
                    <h5>{{leftTimeDays}} days</h5>
                    <hr class="dotted">
                  </div>
                  <div class="hr"><hr></div>
                    <span style="padding-right:30px;">START TIME</span>
                    <span style='font-size:1.2em'>{{startTime}} </span>
                  <div class="hr"><hr></div>
                    <span style="padding-right:30px;">END TIME</span>
                    <span style='font-size:1.2em'>{{endTime}} </span>
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
                      {{beneficiaryAddress}}
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
                      <span style='font-size:1.2em'>avalanche/1.7.4</span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">IP</span>
                      <span style='font-size:1.2em'>3.143.14.77</span>
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
                      <span style='font-size:1.2em'>{{stakeOwned}} 
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">TOTAL</span>
                      <span style='font-size:1.2em'>{{stakeTotal}} 
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
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
                      <span style='font-size:1.2em'>{{potentialRewardfromOwnedStake}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">FROM DELEGATIONS</span>
                      <span style='font-size:1.2em'>{{potentialRewardFromDelegations}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">TOTAL REWARDS</span>
                      <span style='font-size:1.2em'>{{potentialRewardTotalRewards}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">FROM OWNED STAKE</span>
                      <span style='font-size:1.2em'>{{potentialRewardFromOwnedStakePct.toFixed(2)}} %</span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">FROM DELEGATIONS</span>
                      <span style='font-size:1.2em'>{{potentialRewardFromDelegationsPct.toFixed(2)}} %</span>
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
                      <span style='font-size:1.2em'>{{delegationsMaxYield.toFixed(6)}} %</span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">DELEGATION FEES</span>
                      <span style='font-size:1.2em'>{{delegationsFee}} %</span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">GROSS REWARDS</span>
                      <span style='font-size:1.2em'>{{delegationsGrossReward}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">NET REWARDS</span>
                      <span style='font-size:1.2em'>{{delegationsNetRewards}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">DELEGATED</span>
                      <span style='font-size:1.2em'>{{delegationsDelegated}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">FREE SPACE</span>
                      <span style='font-size:1.2em'>{{delegationsFreeSpace}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">CAPACITY</span>
                      <span style='font-size:1.2em'>{{delegationsCapacity.toFixed(2)}}  %</span>
                      <div class="hr"><hr></div>
                      <span style="padding-right:30px;">MAX CAPACITY</span>
                      <span style='font-size:1.2em'>{{delegationsMaxCapacity}}  
                        <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>





        <span style="color:black;font-size:40px;font-weight:700;">{{NumberOfDelegators}} Delegations</span>
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

              :items="tableData"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              @row-clicked="setDelegator"
            />
        <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        aria-controls="my-table"
        ></b-pagination>
        

        <br>
        <br>
        <br>
        <br>

        <span style="color:black;font-size:40px;font-weight:700;">Delegator Insight</span>
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
                <h5>{{delegatorDelegatedNode}}</h5>
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
                  {{delegatorBeneficiary}}
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
                <h5>{{delegatorDaysLeft}} days</h5>
                <hr class="dotted">
              </div>
              <div class="hr"><hr></div>
                <span style="padding-right:30px;">START TIME</span>
                <span style='font-size:1.2em'>{{delegatorStartTime}} </span>
              <div class="hr"><hr></div>
                <span style="padding-right:30px;">END TIME</span>
                <span style='font-size:1.2em'>{{delegatorEndTime}} </span>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="widget-card">
              <div class="widget-title"><h3>POTENTIAL REWARDS</h3></div>
              <div class="widget-info">
                <h5><span style="padding-right:30px;">GROSS REWARDS</span>
                  <span style='font-size:1.2em'>{{delegatorGrossRewards}}  
                    <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                  </span>
                  <div class="hr"><hr></div>
                  <span style="padding-right:30px;">DELEGATION FEES</span>
                  <span style='font-size:1.2em'>{{delegatorDelegationFees}}  
                    <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                  </span>
                  <div class="hr"><hr></div>
                  <span style="padding-right:30px;">NET REWARDS</span>
                  <span style='font-size:1.2em'>{{delegatorNetRewards}}  
                    <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                  </span>
                  <div class="hr"><hr></div>
                  <span style="padding-right:30px;">NET YIELD</span>
                  <span style='font-size:1.2em'>{{delegatorNetYield}} %</span>
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
                  <span style='font-size:1.2em'>{{delegatorStakeDelegated}} 
                    <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:20px;font-weight:300;border-radius:8px;">{{cryptoSymbol}}</span>
                  </span>
                </h5>
              </div>
            </div>
          </div>


          </div>
        </div>
        
        <br>
        <br>

      </div>

      <!-- <div class="container"> -->
    </div>

  </layout>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Layout from "../components/dashboard/Layout.vue";
//import axios from "axios";
import moment from 'moment';
export default {
  components: { Layout },
  data() {
    return {
      ivanapi_post_data: [],
        fields: ['txID','startTime','endTime','stakeAmount','nodeID',{'rewardOwner.addresses[0]':'Address'},'potentialReward'],
        tableData: [],
        totalRows: 100,
        currentPage: 1,
        perPage: 10,
        cryptoSymbol : NaN,
        nodeID : NaN,
        startTime : NaN,
        endTime : NaN,
        //STATUS
        ivanStatus : NaN,
        // BENEFICIARY
        beneficiaryAddress : NaN,
        // TIME LEFT
        timeLeft : NaN,
        leftTimeDays : NaN,
        // STAKE
        stakeOwned : NaN,
        stakeTotal : NaN,
        // Potential Rewards
        potentialRewardfromOwnedStake : NaN,
        potentialRewardFromDelegations : NaN,
        potentialRewardTotalRewards : NaN,
        potentialRewardFromOwnedStakePct : NaN,
        potentialRewardFromDelegationsPct : NaN,
        // Delegations
        NumberOfDelegators : NaN,
        delegationFee : NaN,
        delegationsDelegated : NaN,
        delegationsGrossReward : NaN,
        delegationsNetRewards : NaN,
        delegationsMaxYield : NaN,
        delegationsMaxCapacity : NaN,
        delegationsCapacity : NaN,
        delegationsFreeSpace : NaN,
        // DELEGATOR DATA
        delegatorDelegatedNode : NaN,
        delegatorBeneficiary : NaN,
        delegatorDaysLeft : NaN,
        delegatorStartTime : NaN,
        delegatorEndTime : NaN,
        delegatorGrossRewards : NaN,
        delegatorDelegationFees : NaN,
        delegatorNetRewards : NaN,
        delegatorNetYield : NaN,
        delegatorStakeDelegated : NaN,

        
        
    };
  },
  created() {
    this.getIvanAPIPostData();
    
  },
  beforeMount() {
  },
  mounted() {
    
  },
  methods: {
    getStatus(x){
      if(x){return "ACTIVE";}
      else{return "INACTIVE";}
    },
    getDate(x){
      var date = new Date(x * 1000);
      return moment(date).format();//.format("YYYY-DD-MM HH:MM:SS")
    },
    mydiff(date1,date2,interval) {
    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
    date1 = new Date();//new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years": return date2.getFullYear() - date1.getFullYear();
        case "months": return (
            ( date2.getFullYear() * 12 + date2.getMonth() )
            -
            ( date1.getFullYear() * 12 + date1.getMonth() )
        );
        case "weeks"  : return Math.floor(timediff / week);
        case "days"   : return Math.floor(timediff / day); 
        case "hours"  : return Math.floor(timediff / hour); 
        case "minutes": return Math.floor(timediff / minute);
        case "seconds": return Math.floor(timediff / second);
        default: return undefined;
    }
},
setDelegator(record, index){
    var delegatoridx = index;
    this.delegatorDelegatedNode = this.tableData[delegatoridx].nodeID;
    this.delegatorBeneficiary = this.tableData[delegatoridx].rewardOwner.addresses[0];
    this.delegatorStartTime = this.getDate(this.tableData[delegatoridx].startTime);
    this.delegatorEndTime = this.getDate(this.tableData[delegatoridx].endTime);
    this.delegatorDaysLeft = this.mydiff(this.delegatorStartTime,this.delegatorEndTime,"days") ; 
    this.delegatorGrossRewards = this.tableData[delegatoridx].potentialReward/1000000000;
    this.delegatorDelegationFees = - this.delegationsFee * this.delegatorGrossRewards / 100;
    this.delegatorNetRewards = this.delegatorGrossRewards + this.delegatorDelegationFees;
    this.delegatorStakeDelegated = this.tableData[delegatoridx].stakeAmount/1000000000;
    this.delegatorNetYield = this.delegatorNetRewards/this.delegatorStakeDelegated * 100;
    

},

getIvanAPIPostData() {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              "jsonrpc": "2.0",
              "method": "platform.getCurrentValidators",
              "params": {
                  "nodeIDs": ["NodeID-2K5AqZwp8LvRNnVWWB2VY7VkxVZbt9K69"]
              },
              "id": 1
          })
        };
      
    fetch('http://ec2-3-132-31-18.us-east-2.compute.amazonaws.com:9650/ext/P', requestOptions)
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      
      console.log("1--------")
      console.log(data.result);
      console.log("2------------")
      // console.log(JSON.parse(data).result);
      console.log("3--------")
      this.ivanapi_post_data = data;
      console.log(this.ivanapi_post_data.result.validators[0].delegators)
      console.log("4--------")
      this.tableData = this.ivanapi_post_data.result.validators[0].delegators;
      console.log(this.tableData)
      console.log("5--------")
      this.ivanStatus = this.getStatus(this.ivanapi_post_data.result.validators[0].connected);
      console.log(this.ivanStatus)
      console.log("6-------")
      this.nodeID = this.ivanapi_post_data.result.validators[0].nodeID
      this.beneficiaryAddress = this.ivanapi_post_data.result.validators[0].rewardOwner.addresses[0]
      this.stakeOwned = this.ivanapi_post_data.result.validators[0].stakeAmount / 1000000000;
      this.potentialRewardfromOwnedStake = this.ivanapi_post_data.result.validators[0].potentialReward / 1000000000;
      this.delegationsFee = +this.ivanapi_post_data.result.validators[0].delegationFee;
      this.delegationsDelegated= this.ivanapi_post_data.result.validators[0].delegators
          .map(x => +x.stakeAmount) 
          .flat().reduce((e, f) => e + f) / 1000000000; 
      
      this.delegationsGrossReward= this.ivanapi_post_data.result.validators[0].delegators
          .map(x => +x.potentialReward) 
          .flat().reduce((e, f) => e + f) / 1000000000; 

      this.potentialRewardFromDelegations = this.delegationsGrossReward * this.delegationsFee / 100;
      this.delegationsNetRewards = this.delegationsGrossReward  - this.potentialRewardFromDelegations;
      this.potentialRewardTotalRewards = this.potentialRewardFromDelegations + this.potentialRewardfromOwnedStake;
      this.stakeTotal = this.stakeOwned + this.delegationsDelegated;
      this.timeLeft = parseInt((this.ivanapi_post_data.result.validators[0].endTime - this.ivanapi_post_data.result.validators[0].startTime)/86400);
      this.potentialRewardFromOwnedStakePct = this.potentialRewardfromOwnedStake / this.potentialRewardTotalRewards * 100;
      this.potentialRewardFromDelegationsPct = this.potentialRewardFromDelegations / this.potentialRewardTotalRewards * 100;
      this.NumberOfDelegators = Object.keys(this.ivanapi_post_data.result.validators[0].delegators).length;
      this.delegationsMaxYield = this.delegationsNetRewards / this.delegationsDelegated * 100;
      this.delegationsFreeSpace = this.stakeOwned * 5;
      this.delegationsMaxCapacity = this.delegationsFreeSpace + this.stakeTotal;
      this.delegationsCapacity = this.stakeTotal / this.delegationsMaxCapacity * 100;
      this.cryptoSymbol = "AVAX";
      this.startTime = this.getDate(this.ivanapi_post_data.result.validators[0].startTime);
      this.endTime = this.getDate(this.ivanapi_post_data.result.validators[0].endTime);
      this.leftTimeDays = this.mydiff(this.startTime,this.endTime,"days");

      // Delegators Insight
      this.setDelegator(0,0)
     
          })
          .catch(error => {
      this.errorMessage = error;
      console.error('There was an error!', error);
    });
                      
                
    },
  },
  // computed, created  , bbforecreated, afterreated, -before created eg. session check beforecreated,
  // destroyed -
};
</script>
