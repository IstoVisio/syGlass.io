<template>
    <div class="contact-form-section section-space--ptb_120" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 order-2 order-lg-1">
                    <div class="section-title text-left section-space--mb_60">
                        <h2 class="font-weight--bold mb-15 wow move-up">Let’s cooperate!</h2>
                        <span class="section-text_left wow move-up">Let’s become partners to build a better future for today.</span>
                    </div>
                    <div class="contact-from-wrapper wow move-up">
                        <form id="contact-form" action="http://hasthemes.com/file/mail.php" method="post">
                            <div class="contact-page-form">
                                <div class="contact-input">
                                    <div class="contact-inner">
                                        <input name="con_name" type="text" placeholder="Name *">
                                    </div>
                                    <div class="contact-inner">
                                        <input name="con_email" type="email" placeholder="Email *">
                                    </div>
                                </div>
                                <div class="contact-inner">
                                    <input name="con_subject" type="text" placeholder="Subject *">
                                </div>
                                <div class="contact-inner contact-message">
                                    <textarea name="con_message" placeholder="Message *"></textarea>
                                </div>
                                <div class="contact-submit-btn">
                                    <button class="ht-btn ht-btn-md" type="submit">Send message</button>
                                    <p class="form-messege"></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5 order-1 order-lg-2">
                    <div class="peatures_image-wrap section-space--mb_40">
                        <div class="image text-center wow move-up">
                            <img class="img-fluid" src="../assets/img/features/aeroland-contact-form-image-01.png" alt="contact thumb">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactForm'
    }
</script>