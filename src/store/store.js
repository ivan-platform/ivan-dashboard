import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';


Vue.use(Vuex)


function getStatus(x){
    if(x){return "ACTIVE";}
    else{return "INACTIVE";}
}


function getDate(x){
    var date = new Date(x * 1000);
    return moment(date).format("YYYY-DD-MM");//.format("YYYY-DD-MM HH:MM:SS")
}


function  dateDifference(endDate) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    var startDate = new Date();
    var splittedDate = endDate.split("-"); 
    var strDate = [splittedDate[0], splittedDate[2], splittedDate[1]].join('/');
    var dateObject = new Date(strDate);
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const utc2 = Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function daysApart(startDate,endDate) {
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

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}



const state = {
  count: 10,
  avalanche_data : {
    api_data : {
        // ivanapi_post_data : null,
        ivanapi_post_data: [],
        fields: [{'rewardOwner.addresses[0]' : 'BENEFICIARY'},{'stakeAmount':'Delegated'}, 'potentialReward' ,{'startTime':'Started On'},{'endTime': 'Ends On'}, {'timeLeftDays': 'Days Left'}],
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
        totalTimeDays: NaN,
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
    },
    validators_tab_show:{
        validatorDivShow : 'Avalanche',
    }

  }
}


const mutations = {
    setAvalancheData(state, data){
        state.avalanche_data.api_data.ivanapi_post_data = data;
        state.avalanche_data.api_data.tableData = data.result.validators[0].delegators;
        state.avalanche_data.api_data.ivanStatus = getStatus(data.result.validators[0].connected);
        state.avalanche_data.api_data.nodeID = data.result.validators[0].nodeID;
        state.avalanche_data.api_data.beneficiaryAddress = data.result.validators[0].rewardOwner.addresses[0];
        state.avalanche_data.api_data.stakeOwned = data.result.validators[0].stakeAmount / 1000000000;
        state.avalanche_data.api_data.potentialRewardfromOwnedStake = data.result.validators[0].potentialReward / 1000000000;
        state.avalanche_data.api_data.delegationsFee = +data.result.validators[0].delegationFee;
                
        state.avalanche_data.api_data.delegationsDelegated = data.result.validators[0].delegators
                    .map(x => +x.stakeAmount) 
                    .flat().reduce((e, f) => e + f) / 1000000000; 

        state.avalanche_data.api_data.delegationsGrossReward = data.result.validators[0].delegators
                  .map(x => +x.potentialReward) 
                  .flat().reduce((e, f) => e + f) / 1000000000;
        
        state.avalanche_data.api_data.potentialRewardFromDelegations = state.avalanche_data.api_data.delegationsGrossReward
                                                                         * state.avalanche_data.api_data.delegationsFee / 100;

        state.avalanche_data.api_data.delegationsNetRewards = state.avalanche_data.api_data.delegationsGrossReward  
                                                                - state.avalanche_data.api_data.potentialRewardFromDelegations;
        
        state.avalanche_data.api_data.potentialRewardTotalRewards = state.avalanche_data.api_data.potentialRewardFromDelegations 
                                                                    + state.avalanche_data.api_data.potentialRewardfromOwnedStake;
        
        state.avalanche_data.api_data.stakeTotal = state.avalanche_data.api_data.stakeOwned 
                                                    + state.avalanche_data.api_data.delegationsDelegated;
        
        state.avalanche_data.api_data.potentialRewardFromOwnedStakePct = state.avalanche_data.api_data.potentialRewardfromOwnedStake 
                                                                            / state.avalanche_data.api_data.potentialRewardTotalRewards * 100;
        
        state.avalanche_data.api_data.potentialRewardFromDelegationsPct = state.avalanche_data.api_data.potentialRewardFromDelegations 
                                                                            / state.avalanche_data.api_data.potentialRewardTotalRewards * 100;
        
        state.avalanche_data.api_data.NumberOfDelegators = Object.keys(state.avalanche_data.api_data.ivanapi_post_data.result.validators[0].delegators).length;

        state.avalanche_data.api_data.delegationsMaxYield = state.avalanche_data.api_data.delegationsNetRewards / state.avalanche_data.api_data.delegationsDelegated * 100;
        state.avalanche_data.api_data.delegationsMaxCapacity = state.avalanche_data.api_data.stakeOwned * 5;
        state.avalanche_data.api_data.delegationsFreeSpace = state.avalanche_data.api_data.delegationsMaxCapacity - state.avalanche_data.api_data.stakeTotal;
        state.avalanche_data.api_data.delegationsCapacity = state.avalanche_data.api_data.stakeTotal / state.avalanche_data.api_data.delegationsMaxCapacity * 100;
        state.avalanche_data.api_data.cryptoSymbol = "AVAX";
        state.avalanche_data.api_data.startTime = getDate(data.result.validators[0].startTime);
        state.avalanche_data.api_data.endTime = getDate(data.result.validators[0].endTime);
        state.avalanche_data.api_data.leftTimeDays = dateDifference(state.avalanche_data.api_data.endTime);
        state.avalanche_data.api_data.totalTimeDays = daysApart(state.avalanche_data.api_data.startTime, state.avalanche_data.api_data.endTime);        

        for (var i=0; i< state.avalanche_data.api_data.tableData.length; i++){
            state.avalanche_data.api_data.tableData[i].stakeAmount = state.avalanche_data.api_data.tableData[i].stakeAmount / 1000000000 ;
            state.avalanche_data.api_data.tableData[i].potentialReward = state.avalanche_data.api_data.tableData[i].potentialReward / 1000000000 ;
            state.avalanche_data.api_data.tableData[i].startTime = getDate(state.avalanche_data.api_data.tableData[i].startTime) ;
            state.avalanche_data.api_data.tableData[i].endTime = getDate(state.avalanche_data.api_data.tableData[i].endTime) ;
            state.avalanche_data.api_data.tableData[i].timeLeftDays = dateDifference(state.avalanche_data.api_data.tableData[i].endTime);
        }
    },
    setDelegator(state, record){
        state.avalanche_data.api_data.delegatorDelegatedNode = record.nodeID;
        state.avalanche_data.api_data.delegatorBeneficiary = record.rewardOwner.addresses[0];
        state.avalanche_data.api_data.delegatorStartTime = record.startTime;
        state.avalanche_data.api_data.delegatorEndTime = record.endTime;
        try{ 
            state.avalanche_data.api_data.delegatorDaysLeft = dateDifference(state.avalanche_data.api_data.delegatorEndTime) ; 
          } 
        catch (error){ 
          console.log(error)
          }
        state.avalanche_data.api_data.delegatorGrossRewards = record.potentialReward;
        state.avalanche_data.api_data.delegatorDelegationFees = - state.avalanche_data.api_data.delegationsFee * state.avalanche_data.api_data.delegatorGrossRewards / 100;
        state.avalanche_data.api_data.delegatorNetRewards = state.avalanche_data.api_data.delegatorGrossRewards + state.avalanche_data.api_data.delegatorDelegationFees;
        state.avalanche_data.api_data.delegatorStakeDelegated = record.stakeAmount;
        state.avalanche_data.api_data.delegatorNetYield = state.avalanche_data.api_data.delegatorNetRewards/state.avalanche_data.api_data.delegatorStakeDelegated * 100;
    },
    setValidatorShow(state, arg){
        state.avalanche_data.validators_tab_show.validatorDivShow = arg;
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
            context.commit("setAvalancheData", data);            
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