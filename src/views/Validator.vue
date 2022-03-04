<template>
  <layout :active="2" :title="true">

    <div >
      <div v-show="validatorDivShow == 'Avalanche'"><AvalancheValidator/></div>
      <div v-show="validatorDivShow == 'Ethereum'"><EthereumValidator/></div>
      <div v-show="validatorDivShow == 'Solana'"><SolanaValidator/></div>
      <div v-show="validatorDivShow == 'Chainlink'"><ChainlinkValidator/></div> 
    </div>

  </layout>
</template>





<script>
import Layout from "../components/dashboard/Layout.vue";
import AvalancheValidator from '../components/Validators/Avalanche.vue';
import EthereumValidator from '../components/Validators/Ethereum.vue';
import SolanaValidator from '../components/Validators/Solana.vue';
import ChainlinkValidator from '../components/Validators/Chainlink.vue';


export default {
  components: { 
    Layout, 
    AvalancheValidator, 
    EthereumValidator, 
    SolanaValidator, 
    ChainlinkValidator,
  },

  name : "my_validator",
  data() {
    return { 
      validatorDivShow: 'Avalanche', 
    }
  },
  created() {},
  beforeMount() {},
  computed:{},
  mounted() {
    this.validatorDivShow = this.$store.state.avalanche_data.validators_tab_show.validatorDivShow;
  },
  methods: {}

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