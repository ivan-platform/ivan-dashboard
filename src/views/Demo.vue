<template>
  <div id="main-wrapper pt-0">
    <div class="header landing_page">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <nav class="navbar navbar-expand-lg navbar-light px-0">
              <router-link class="navbar-brand" to="demo"
                ><img src="../assets/images/logo.png" alt="" />
                <span>Treemium </span></router-link
              >
              <b-navbar-toggle target="navbarSupportedContent">
              </b-navbar-toggle>

              <b-collapse is-nav id="navbarSupportedContent">
                <b-navbar-nav class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      @click="active = 'home'"
                      :class="active === 'home' && 'active'"
                      href="#home"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      @click="active = 'demo'"
                      :class="active === 'demo' && 'active'"
                      href="#demo"
                      >Demo</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#support">Support</a>
                  </li>
                </b-navbar-nav>
              </b-collapse>
              <div class="dashboard_log">
                <div class="d-flex align-items-center">
                  <div class="header_auth">
                    <router-link to="#" class="btn btn-primary"
                      >Buy</router-link
                    >
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="intro section-padding position-relative" id="home">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-xl-6 col-md-6">
            <div class="intro-content">
              <h2>The complete Treemium cryptocurrency Exchange VueJS App</h2>
              <p>
                Sign in, Signup, Phone and ID card verification, One time
                password verify and add bank, debit card settings and profile
                etc pages included.
              </p>
              <router-link to="#" class="btn btn-primary" data-scroll-nav="1"
                >View Demo</router-link
              >
            </div>
          </div>
          <div class="col-xl-6 col-md-6 py-md-5">
            <div class="demo_img intro-img">
              <img
                src="../assets/images/portfolio.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="market section-padding page-section" id="demo">
      <div class="container">
        <div class="row py-lg-5 justify-content-center">
          <div class="col-xl-7">
            <div class="section_heading">
              <span>Explore</span>
              <h3>The Complete Treemium Crafted Design Pages</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/landing.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Landing Page</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/index" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/dashboard.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Dashboard</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/buy-sell" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/buy-sell.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Buy and Sell</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/accounts" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/accounts.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Accounts</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/settings" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/edit-profile.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Edit Profile</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/settings-preferences" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/preferences.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Preferences</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/settings-security" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/security.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Security</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/settings-account" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/linked-account.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Linked Account</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/history" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/history.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>History</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/signin" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/signin.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Signin</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/signup" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/signup.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Signup</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/reset" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/reset.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Reset</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/lock" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/lock.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Locked</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/otp-1" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/otp-phone.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>OTP Number</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/otp-2" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/otp-code.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>OTP Code</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/verify-step-1" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/verify-id.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Verify ID</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/verify-step-2" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/upload-id.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Upload ID</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/verify-step-3" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/id-verifing.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>ID Verifying</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/verify-step-4" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/id-verified.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>ID Verified</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/add-debit-card" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/add-debit-card.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Add Debit Card</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/verify-step-6" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/success.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Success</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/verify-step-5" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/choose-account.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Recommendation</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/add-bank-acc" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/add-bank.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Add Bank Account</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/about" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/about.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>About US</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/privacy-policy" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/privacy.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Privacy Policy</h4>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-sm-6">
            <div class="demo_img">
              <router-link to="/term-condition" target="_blank">
                <div class="img-wrap">
                  <img
                    src="../assets/images/demo/terms.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </router-link>
              <h4>Terms & Condition</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-md-6">
            <div class="copy_right">
              Copyright © {{ new Date().getFullYear() }} Quixlab. All Rights
              Reserved.
            </div>
          </div>
          <div class="col-xl-6 col-md-6 text-lg-right text-center">
            <div class="social">
              <router-link
                to="https://www.youtube.com/channel/UChN1goECpg64jlUxSzySiNg?view_as=subscriber"
                ><i class="fa fa-youtube-play"></i
              ></router-link>
              <router-link to="https://twitter.com/quixlab"
                ><i class="fa fa-twitter"></i
              ></router-link>
              <router-link to="https://www.facebook.com/qxlab"
                ><i class="fa fa-facebook"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
    };
  },
};
</script>
