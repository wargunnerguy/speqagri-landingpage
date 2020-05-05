<!DOCTYPE html>
<html lang="et">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-100516196-6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-100516196-6');
    </script>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="SPEQ Agri" content="Pakume konkurentsivõimelist palka, toredat kollektiivi ja kütusekompensatsiooni">
    <meta name="theme-color" content="#222222"/>
    <meta name="description" content="Pakume konkurentsivõimelist palka, toredat kollektiivi ja kütusekompensatsiooni"/>

    <meta property="fb:app_id" content="2298596397103477"/>
    <meta property="og:url" content="https://speqagri.ee/veoautojuht.php"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="Tööpakkumine veoautojuhile"/>
    <meta property="og:description" content="Pakume konkurentsivõimelist palka, toredat kollektiivi ja kütusekompensatsiooni"/>
    <meta property="og:image" content="https://speqagri.ee/assets/img/fb_share_pics/veoautojuht.png"/>
    <meta property="og:image:alt" content="https://speqagri.ee/assets/img/fb_share_pics/alt.png"/>

    <title>Tööpakkumine veoautojuhile</title>

    <link rel="icon" href="assets/img/favicon.ico">
    <!-- Required Stylesheets -->
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/color/default.css" rel="stylesheet">
    <!-- Required scripts -->
    <script src="assets/js/vue.min.js"></script>
    <script src="assets/js/vue-i18n.min.js"></script>
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/jquery.scrollTo.js"></script>
    <script src="assets/js/jquery.nav.js"></script>
    <script src="assets/js/jquery.localScroll.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/jquery.prettyPhoto.js"></script>
    <script src="assets/js/isotope.js"></script>
    <script src="assets/js/jquery.flexslider.js"></script>
    <script src="assets/js/inview.js"></script>
    <script src="assets/js/animate.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="assets/lang/messages.js"></script>
    <script src="contactform.php"></script>
    <script src="components/veoautojuht.js"></script>
    <script src="components/job_filled_already_redirect.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/progressive-image.js/dist/progressive-image.js"></script>
    <script src="components/navbar.js"></script>
</head>
<body>
<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
    <script>
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v6.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/et_EE/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
<!-- Your customer chat code -->
    <div class="fb-customerchat"
         attribution=setup_tool
         page_id="109635857069303"
         logged_in_greeting="Tere! Otsid tööd? :)"
         logged_out_greeting="Tere! Otsid tööd? :)"
         greeting_dialog_delay=4>
    </div>
<!-- Our application root element -->
    <div id="app">
        <!-- navbar -->
        <navbar></navbar>
        <section id="job_offer_section" class="section orange">
            <div class="container">
<!--                <veoautojuht></veoautojuht>-->
                <job_filled_already_redirect></job_filled_already_redirect>
            </div>
        </section>

        <!-- section: contact -->
        <section id="contact" class="section green">
            <div class="container">
                <h4>{{ $t("message.get_in_touch") }}</h4>
                <p v-html="$t('message.your_message_notification_html')">
                </p>
                <div class="blankdivider30">
                </div>
                <div class="row">
                    <div class="span12">
                        <div class="contactform">
                            <form action="contactform.php" method="POST" role="form" class="contactForm" id="contact-form">
                                <div class="row">
                                    <div class="span6">
                                        <div class="field subject form-group">
                                            <input type="text" class="form-control" name="subject"
                                                   :placeholder="$t('message.your_subject')"/>
                                        </div>
                                        <div class="field your-name form-group">
                                            <input type="text" name="name" class="form-control"
                                                   :placeholder="$t('message.your_name')"/>
                                        </div>
                                        <div class="field your-email form-group">
                                            <input type="text" class="form-control" name="mail"
                                                   :placeholder="$t('message.your_email')"/>
                                        </div>
                                    </div>
                                    <div class="span6">
                                        <div class="field message form-group">
                                            <textarea class="form-control" name="message" rows="5"
                                                      :placeholder="$t('message.your_message')"></textarea>
                                        </div>
                                        <input name="submit" type="submit" :value="$t('message.your_message_send')"
                                               class="btn btn-theme pull-left">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- ./span12 -->
                </div>
            </div>
        </section>
        <section id="sponsor" class="section white">
            <div class="container">
                <h4>{{ $t("message.sponsor_heading") }}</h4>
                <img src="assets/img/leader.gif" alt=""/>
                <p>{{ $t("message.sponsor_message") }}</p>
                <div class="blankdivider30">
                    </p>
                </div>
                <div class="row">
                    <div class="span12">

                    </div>
                    <!-- ./span12 -->
                </div>
            </div>
        </section>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="span6 offset3">
                        <p><a href="tel:+372 452 2002"><i class="icon-phone"></i> +372 452 2002</a></strong></p>
                        <p><a href="#contact">agri@speq.ee</a></strong></p>
                        <p class="copyright">
                            <?php auto_copyright("2018");?> {{ $t("message.copyright") }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- ./container -->
        </footer>
    </div>
    <!-- Start running your app -->
    <script>
        window.app = new Vue({

            i18n,
            el: "#app",
            data: {
                name: ''
            },
            computed: {
                showAlert() {
                    return this.name.length > 4 ? true : false;
                }
            }
        });
    </script>
    <?php function auto_copyright($year = 'auto'){ ?>
    <?php if(intval($year) == 'auto'){ $year = date('Y'); } ?>
    <?php if(intval($year) == date('Y')){ echo intval($year); } ?>
    <?php if(intval($year) < date('Y')){ echo intval($year) . ' - ' . date('Y'); } ?>
    <?php if(intval($year) > date('Y')){ echo date('Y'); } ?>
    <?php } ?>
</body>
</html>
