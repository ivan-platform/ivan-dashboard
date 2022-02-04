<template>
  <layout :title="false">
    <div class="content-body">
      <div class="verification section-padding">
        <div class="container h-100">
          <div class="row justify-content-center h-100 align-items-center">
            <div class="col-xl-5 col-md-6">
              <div class="auth-form card">
                <!-- <div class="card-header">
                                <h4 class="card-title">Link a Debit card</h4>
                            </div> -->
                <div class="card-body">
                  <form @submit.prevent="otpSubmit" class="identity-upload">
                    <div class="identity-content">
                      <h4>Upload your ID card</h4>
                      <span>(Driving License or Government ID card)</span>

                      <p>
                        Uploading your ID helps as ensure the safety and
                        security of your founds
                      </p>
                    </div>

                    <div class="form-group">
                      <label class="mr-sm-2">Upload Front ID </label>
                      <span class="float-right">Maximum file size is 2mb</span>
                      <div class="file-upload-wrapper" data-text="front.jpg">
                        <input
                          name="file-upload-field"
                          type="file"
                          class="file-upload-field"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="mr-sm-2">Upload Back ID </label>
                      <span class="float-right">Maximum file size is 2mb</span>
                      <div class="file-upload-wrapper" data-text="back.jpg">
                        <input
                          name="file-upload-field"
                          type="file"
                          class="file-upload-field"
                          value=""
                        />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-success pl-5 pr-5">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/dashboard/Layout.vue";
export default {
  components: { Layout },
  methods: {
    otpSubmit() {
      this.$router.push("/verify-step-3");
    },
  },
};
</script>
