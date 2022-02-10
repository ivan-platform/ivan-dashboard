import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About";
import AddBankAcc from "../views/AddBankAcc";
import AddDebitCard from "../views/AddDebitCard";
import Condition from "../views/Condition";
import Accounts from "../views/dashboard/Accounts";
import Exchange from "../views/dashboard/Exchange";
// Landing
import Index from "../views/dashboard/Index";
import Account from "../views/dashboard/settings/Account";
import SettingsPreferences from "../views/dashboard/settings/Preferences";
import Security from "../views/dashboard/settings/Security";
import Settings from "../views/dashboard/settings/Settings";
import Demo from "../views/Demo";
import History from "../views/History";
// import Landing from "../views/Landing.vue";
import Lock from "../views/Lock";
import Otp1 from "../views/Otp1";
import Otp2 from "../views/Otp2";
import Policy from "../views/Policy";
import Reset from "../views/Reset";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import VerifyStep1 from "../views/VerifyStep1";
import VerifyStep2 from "../views/VerifyStep2";
import VerifyStep3 from "../views/VerifyStep3";
import VerifyStep4 from "../views/VerifyStep4";
import VerifyStep5 from "../views/VerifyStep5";
import VerifyStep6 from "../views/VerifyStep6";
import HistoricalCharts from "../views/HistoricalCharts";
import TradingCharts from "../views/TradingCharts";
import PubSub from "../views/PubSub";
import APIIntegration from "../views/APIIntegration";
import Validator from "../views/Validator";
import Delegator from "../views/Delegator";
import News from "../views/News";

Vue.use(VueRouter);

const routes = [
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  // {
  //   path: "/index",
  //   name: "Index",
  //   component: Index,
  // },
  {
    path: "/HistoricalCharts",
    name: "HistoricalCharts",
    component: HistoricalCharts,
  },
  {
    path: "/TradingCharts",
    name: "TradingCharts",
    component: TradingCharts,
  },
  {
    path: "/PubSub",
    name: "PubSub",
    component: PubSub,
  },
  {
    path: "/APIIntegration",
    name: "APIIntegration",
    component: APIIntegration,
  },
  {
    path: "/Validator",
    name: "Validator",
    component: Validator,
  },
  {
    path: "/Delegator",
    name: "Delegator",
    component: Delegator,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/buy-sell",
    name: "Exchange",
    component: Exchange,
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: Accounts,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/lock",
    name: "Lock",
    component: Lock,
  },
  {
    path: "/add-bank-acc",
    name: "AddBankAcc",
    component: AddBankAcc,
  },
  {
    path: "/add-debit-card",
    name: "AddDebitCard",
    component: AddDebitCard,
  },
  {
    path: "/verify-step-1",
    name: "VerifyStep1",
    component: VerifyStep1,
  },
  {
    path: "/verify-step-2",
    name: "VerifyStep2",
    component: VerifyStep2,
  },
  {
    path: "/verify-step-3",
    name: "VerifyStep3",
    component: VerifyStep3,
  },
  {
    path: "/verify-step-4",
    name: "VerifyStep4",
    component: VerifyStep4,
  },
  {
    path: "/verify-step-5",
    name: "VerifyStep5",
    component: VerifyStep5,
  },
  {
    path: "/verify-step-6",
    name: "VerifyStep6",
    component: VerifyStep6,
  },
  {
    path: "/otp-1",
    name: "Otp1",
    component: Otp1,
  },
  {
    path: "/otp-2",
    name: "Otp2",
    component: Otp2,
  },
  {
    path: "/settings-preferences",
    name: "SettingsPreferences",
    component: SettingsPreferences,
  },
  {
    path: "/settings-account",
    name: "Account",
    component: Account,
  },
  {
    path: "/settings-security",
    name: "Security",
    component: Security,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/vuehome",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/privacy-policy",
    name: "Policy",
    component: Policy,
  },
  {
    path: "/term-condition",
    name: "Condition",
    component: Condition,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
