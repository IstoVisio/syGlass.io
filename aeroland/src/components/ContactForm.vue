<template>
  <div class="contact-form-section section-space--ptb_120" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 order-2 order-lg-1">
          <div class="section-title text-left section-space--mb_60">
            <h2 class="font-weight--bold mb-15 wow move-up">
              Contact Us for a License
            </h2>
            <span class="section-text_left wow move-up"
              >Or let us know how we can help.</span
            >
          </div>
          <div class="contact-from-wrapper wow move-up">
            <div data-form-alert="true"></div>
            <form
              action="https://script.google.com/macros/s/AKfycbwhdTNjWJK_qJY_WYO55RamymOYEHKdmlHlHkm_JmQfpgjVyMQcdVMIhgWBvofTPPnh/exec"
              id="gform"
              method="post"
              name="gform"
            >
              <input
                data-form-email="true"
                type="hidden"
                value="QYJJaXGQjybL3tPwmy5gVHDBKrBiZhkaLK3dCJW6kNvmuOXshLhplWMAVdoP2cl/TEEfJN6b5AaXPGdEknB1LdX6uNy0iQCaIXXTCTsdFjPfukdK8Z38sYcUA891l25U"
              />
              <div class="form-group">
                <input
                  class="form-control"
                  data-form-field="Name"
                  name="name"
                  placeholder="Name*"
                  required=""
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  data-form-field="Email"
                  name="email"
                  placeholder="Email*"
                  required=""
                  type="email"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  data-form-field="Phone"
                  name="phone"
                  placeholder="Phone"
                  type="tel"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  data-form-field="Message"
                  name="message"
                  placeholder="Message"
                  rows="7"
                ></textarea>
              </div>
              <div class="mbr-buttons mbr-buttons--right">
                <button 
                  class="btn mbr-buttons__btn btn-lg btn-warning"
                  type="submit"
                >
                  <i class="fa fa-paper-plane"></i>
                  SEND
                </button>
              </div>

              <div id="email-invalid" style="display: none; text-align: center">
                <p style="color: #23b0e6; font-size: 18px; line-height: 26px">
                  <b></b> Please enter a valid email.
                </p>
              </div>
            </form>
            <br />
            <div
              id="thankyou_message"
              style="display: none; text-align: center"
            >
              <p style="color: #23b0e6; font-size: 20px; line-height: 26px">
                <b></b> Thanks for your interest! We'll get back to you shortly.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2">
          <div class="peatures_image-wrap section-space--mb_40">
            <div class="image text-center wow move-up">
              <img
                class="img-fluid"
                src="../assets/img/syglass/microscope.png"
                alt="Graphic of scientists researching with microscope"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    export default {
    name: 'form',
    }       
</script>
