import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';


Vue.use(Vuex)


// function getStatus(x){
//     if(x){return "ACTIVE";}
//     else{return "INACTIVE";}
// }


// function getDate(x){
//     var date = new Date(x * 1000);
//     return moment(date).format("YYYY-DD-MM");//.format("YYYY-DD-MM HH:MM:SS")
// }

// function mydiff(date1,date2,interval) {
//     var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
//     date1 = new Date();//new Date(date1);
//     date2 = new Date(date2);
//     var timediff = date2 - date1;
//     if (isNaN(timediff)) return NaN;
//     switch (interval) {
//         case "years": return date2.getFullYear() - date1.getFullYear();
//         case "months": return (
//             ( date2.getFullYear() * 12 + date2.getMonth() )
//             -
//             ( date1.getFullYear() * 12 + date1.getMonth() )
//         );
//         case "weeks"  : return Math.floor(timediff / week);
//         case "days"   : return Math.floor(timediff / day); 
//         case "hours"  : return Math.floor(timediff / hour); 
//         case "minutes": return Math.floor(timediff / minute);
//         case "seconds": return Math.floor(timediff / second);
//         default: return undefined;
//     }
// }


// function  dateDifference(endDate) {
//     const _MS_PER_DAY = 1000 * 60 * 60 * 24;
//     var startDate = new Date();
//     var splittedDate = endDate.split("-"); 
//     var strDate = [splittedDate[0], splittedDate[2], splittedDate[1]].join('/');
//     var dateObject = new Date(strDate);
//     // Discard the time and time-zone information.
//     const utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
//     const utc2 = Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());


//     return Math.floor((utc2 - utc1) / _MS_PER_DAY);
// }

// function setDelegator(record, index){
//     var delegatoridx = index;
//     this.delegatorDelegatedNode = this.tableData[delegatoridx].nodeID;
//     this.delegatorBeneficiary = this.tableData[delegatoridx].rewardOwner.addresses[0];
//     // this.delegatorStartTime = this.getDate(this.tableData[delegatoridx].startTime);
//     this.delegatorStartTime = this.tableData[delegatoridx].startTime;
//     // this.delegatorEndTime = this.getDate(this.tableData[delegatoridx].endTime);
//     this.delegatorEndTime = this.tableData[delegatoridx].endTime;
//     //this.delegatorDaysLeft = this.mydiff(this.delegatorStartTime,this.delegatorEndTime,"days") ; 
//     try{ 
//       this.delegatorDaysLeft = this.dateDifference(this.delegatorEndTime) ; 
//       } 
//     catch (error){ 
//       console.log(error)
//       }
//     //this.delegatorDaysLeft = this.dateDifference(this.delegatorEndTime) ; 
//     this.delegatorGrossRewards = this.tableData[delegatoridx].potentialReward;
//     this.delegatorDelegationFees = - this.delegationsFee * this.delegatorGrossRewards / 100;
//     this.delegatorNetRewards = this.delegatorGrossRewards + this.delegatorDelegationFees;
//     this.delegatorStakeDelegated = this.tableData[delegatoridx].stakeAmount;
//     this.delegatorNetYield = this.delegatorNetRewards/this.delegatorStakeDelegated * 100;
// }



const state = {
  count: 100,
  avalanche_data : {
    api_data : {
        // ivanapi_post_data : null,
        ivanapi_post_data: [],
        fields: ['txID',{'stakeAmount':'Delegated'}, 'potentialReward' ,{'startTime':'Started On'},{'endTime': 'Ends On'}, {'timeLeftDays': 'Days Left'}],
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
    }
  }
}


const mutations = {
    setAvalancheData(state, data){
        state.avalanche_data.api_data.ivanapi_post_data = data;
        state.avalanche_data.api_data.tableData = data.result.validators[0].delegators;
    }
    
}




const actions = {
    async getIvanAPIPostData(context) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "method": "platform.getCurrentValidators",
                    "params": {
                        "nodeIDs": ["NodeID-HKLp5269LH8DcrLvHPc2PHjGczBQD3td4"]
                    },
                    "id": 1
                })
                };
            
            fetch('http://ec2-18-190-173-22.us-east-2.compute.amazonaws.com:9650/ext/P', requestOptions)
            .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            
            // console.log(data.result);
            // console.log(JSON.parse(data).result);
            // this.ivanapi_post_data = data;
            // console.log(JSON.parse(data).result);
            context.commit("setAvalancheData", data);
            
            //   // console.log(this.ivanapi_post_data.result.validators[0].delegators)
            //   this.tableData = this.ivanapi_post_data.result.validators[0].delegators;

            //   // console.log(this.tableData)
            //   this.ivanStatus = this.getStatus(this.ivanapi_post_data.result.validators[0].connected);
            //   // console.log(this.ivanStatus)
            //   this.nodeID = this.ivanapi_post_data.result.validators[0].nodeID
            //   this.beneficiaryAddress = this.ivanapi_post_data.result.validators[0].rewardOwner.addresses[0]
            //   this.stakeOwned = this.ivanapi_post_data.result.validators[0].stakeAmount / 1000000000;
            //   this.potentialRewardfromOwnedStake = this.ivanapi_post_data.result.validators[0].potentialReward / 1000000000;
            //   this.delegationsFee = +this.ivanapi_post_data.result.validators[0].delegationFee;
            //   this.delegationsDelegated= this.ivanapi_post_data.result.validators[0].delegators
            //       .map(x => +x.stakeAmount) 
            //       .flat().reduce((e, f) => e + f) / 1000000000; 
            
            //   this.delegationsGrossReward= this.ivanapi_post_data.result.validators[0].delegators
            //       .map(x => +x.potentialReward) 
            //       .flat().reduce((e, f) => e + f) / 1000000000; 

            //   this.potentialRewardFromDelegations = this.delegationsGrossReward * this.delegationsFee / 100;
            //   this.delegationsNetRewards = this.delegationsGrossReward  - this.potentialRewardFromDelegations;
            //   this.potentialRewardTotalRewards = this.potentialRewardFromDelegations + this.potentialRewardfromOwnedStake;
            //   this.stakeTotal = this.stakeOwned + this.delegationsDelegated;
            //   this.potentialRewardFromOwnedStakePct = this.potentialRewardfromOwnedStake / this.potentialRewardTotalRewards * 100;
            //   this.potentialRewardFromDelegationsPct = this.potentialRewardFromDelegations / this.potentialRewardTotalRewards * 100;
            //   this.NumberOfDelegators = Object.keys(this.ivanapi_post_data.result.validators[0].delegators).length;
            //   this.delegationsMaxYield = this.delegationsNetRewards / this.delegationsDelegated * 100;
            //   this.delegationsMaxCapacity = this.stakeOwned * 5;
            //   this.delegationsFreeSpace = this.delegationsMaxCapacity - this.stakeTotal;
            //   this.delegationsCapacity = this.stakeTotal / this.delegationsMaxCapacity * 100;
            //   this.cryptoSymbol = "AVAX";
            //   this.startTime = this.getDate(this.ivanapi_post_data.result.validators[0].startTime);
            //   this.endTime = this.getDate(this.ivanapi_post_data.result.validators[0].endTime);
            //   //this.leftTimeDays = this.mydiff(this.startTime,this.endTime,"days");
            //   this.leftTimeDays = this.dateDifference(this.endTime);

            //   for (var i=0; i< this.tableData.length; i++){
            //     this.tableData[i].stakeAmount = this.tableData[i].stakeAmount / 1000000000 ;//+ " " + this.cryptoSymbol;
            //     this.tableData[i].potentialReward = this.tableData[i].potentialReward / 1000000000 ;//+ " " + this.cryptoSymbol;
            //     // this.tableData[i].timeLeft = -1 *this.mydiff(parseInt(this.tableData[i].startTime) , parseInt(this.tableData[i].endTime),"days")/52.25;
            //     this.tableData[i].startTime = this.getDate(this.tableData[i].startTime) ;
            //     this.tableData[i].endTime = this.getDate(this.tableData[i].endTime) ;
            //     this.tableData[i].timeLeftDays = this.dateDifference(this.tableData[i].endTime);
                
            //       }

            //   // Delegators Insight
            //   this.setDelegator(0,0)
            
                })
                .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
            });
                            
                        
    },
    

}

const getters = {

}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})