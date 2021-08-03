
<template>
  <div class="cta-image-area cta-image-bg_05" style="padding-top: 100px">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="cta-image">
            <div class="row align-items-center">
              <div class="col-lg-6 order-2 order-lg-1">
                <div class="cta-image__content">
                  <h4 class="cta-image__title text-white mb-20 wow move-up">
                    Download the Free 3D Viewer
                  </h4>
                  <div class="cta-image__text text-white mb-20 wow move-up">
                    syGlass View is the free version of syGlass that is
                    redefining the communication of scientific data. Explore
                    image volumes provided by scientists and educators around
                    the world in virtual reality. Learn more about syGlass View
                    at our
                    <a
                      href="https://store.steampowered.com/app/1560420/syGlass_View/"
                      target="_blank"
                      id="highlight"
                    >
                      STEAM store.
                    </a>
                  </div>
                  <a
                    href="https://syglassview.s3.us-east-2.amazonaws.com/syGlassViewInstaller_v1_1_0.exe"
                    class="d-none d-md-block"
                  >
                    <button
                      class="btn btn--green wow move-up d-sm-none d-md-block"
                    >
                      <span class="btn-icon ml-0 mr-2"
                        ><i class="fa fa-arrow-alt-to-bottom"></i
                      ></span>
                      Get syGlass View
                    </button>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2">
                <div class="cta-image_two wow move-up">
                  <img
                    src="../assets/img/syglass/occulus.png"
                    alt="Graphic of vr viewing experience with occulus headset"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtaThree",
};
</script>
