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
    <meta name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="content-type"
          content="text/html; charset=UTF-8">
    <meta name="SPEQ Agri"
          content="Teostame põllumajandusteenuseid, kaevetöid, haljastustöid, lumetõrjet, tõstetöid, transporditeenust, purgimisteenust, renditeenust">
    <meta name="theme-color"
          content="#222222"/>
    <meta name="description"
          content="Teostame Järvamaal lumetõrjet, tõstetöid, kaevetöid, haljastustöid ning pakume ka transporditeenust, purgimisteenust põllumajandusteenuseid ja erinevaid renditeenuseid. Võta ühendust: +372 452 2002, agri@speq.ee" />
    <title>SPEQ Agri</title>
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
    <script src="https://cdn.jsdelivr.net/npm/progressive-image.js/dist/progressive-image.js"></script>
    <script src="components/navbar.js"></script>
</head>
<body>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v6.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/et_EE/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <!-- Your customer chat code -->
    <div class="fb-customerchat"
        attribution=setup_tool
        page_id="109635857069303"
        logged_in_greeting="Tere! Kuidas saame aidata? :)"
        logged_out_greeting="Tere! Kuidas saame aidata? :)"
        greeting_dialog_delay=4>
    </div>
    <!-- Our application root element -->
    <div id="app">
        <!-- navbar -->
        <navbar></navbar>
        <!-- Header area -->
        <div id="header-wrapper" class="header-slider">
            <header class="clearfix">
                <div class="logo">
                    <img src="assets/img/logo-image-speq-agri.png" alt=""/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="span12">
                            <div id="main-flexslider" class="flexslider">
                                <ul class="slides">
                                    <li>
                                        <p class="home-slide-content" v-html="$t('message.landscaping_service_html')"/>
                                    </li>
                                    <li>
                                        <p class="home-slide-content" v-html="$t('message.winding_service_html')"/>
                                    </li>
                                    <li>
                                        <p class="home-slide-content" v-html="$t('message.transport_service_html')"/>
                                    </li>
                                    <li>
                                        <p class="home-slide-content" v-html="$t('message.excavation_service_html')"/>
                                    </li>
                                    <li>
                                        <p class="home-slide-content" v-html="$t('message.telehandler_service_html')"/>
                                    </li>
                                    <li>
                                        <p class="home-slide-content" v-html="$t('message.rental_service_html')"/>
                                    </li>
                                    <li>
                                        <p class="home-slide-content" v-html="$t('message.agricultural_service_html')"/>
                                    </li>
                                    <li>
                                        <p class="home-slide-content" v-html="$t('message.snow_removal_service_html')"/>
                                    </li>
                                </ul>
                            </div>
                            <!-- end slider -->
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <!-- section: services -->
        <section id="services" class="section orange">
            <div class="container">
                <a href="#services"><h4>{{$t("message.Services")}}</h4></a>
                <!-- Four columns -->
                <!-- First row -->
                <div class="row brand">
                    <a href="#job_vacancies">
                        <div class="span3 animated-slow flyIn">
                            <div class="service-box">
                                <img src="assets/img/icons/jobs.png" alt=""/>
                                <h2>{{ $t("message.job_vacancies") }}</h2>
                                <p>{{ $t("message.job_vacancies_text") }}</p>
                            </div>
                        </div>
                    </a>
                    <div class="span3 animated-fast flyIn">
                        <div class="service-box">
                            <img src="assets/img/icons/snow-flake-icon.png" alt=""/>
                            <h2>{{ $t("message.snow_removal_service") }}</h2>
                            <p>{{ $t("message.snow_removal_service_text") }}</p>
                        </div>
                    </div>
                    <div class="span3 animated-fast flyIn">
                        <div class="service-box">
                            <img src="assets/img/icons/vector-lawn-mower.png" alt=""/>
                            <h2>{{ $t("message.landscaping_service") }}</h2>
                            <p>{{ $t("message.landscaping_service_text") }}</p>
                        </div>
                    </div>
                    <a href="https://fekaaliabi.ee">
                        <div class="span3 animated-slow flyIn">
                            <div class="service-box">
                                <img src="assets/img/icons/vac-truck.png" alt=""/>
                                <h2>{{ $t("message.winding_service") }}</h2>
                                <p>{{ $t("message.winding_service_text") }}</p>
                            </div>
                        </div>
                    </a>
                </div>
                </a>
                <!-- Second row -->
                <div class="row brand">
                    <div class="span3 animated flyIn">
                        <div class="service-box">
                            <img src="assets/img/icons/circle-rent.png" alt=""/>
                            <h2>{{ $t("message.rental_service") }}</h2>
                            <p>{{ $t("message.rental_service_text") }}</p>
                        </div>
                    </div>
                    <div class="span3 animated flyIn">
                        <div class="service-box">
                            <img src="assets/img/icons/transport.png" alt=""/>
                            <h2>{{ $t("message.transport_service") }}</h2>
                            <p>{{ $t("message.transport_service_text") }}</p>
                        </div>
                    </div>
                    <div class="span3 animated-fast flyIn">
                        <div class="service-box">
                            <img src="assets/img/icons/excavation.png" alt=""/>
                            <h2>{{ $t("message.excavation_service") }}</h2>
                            <p>{{ $t("message.excavation_service_text") }}</p>
                        </div>
                    </div>
                    <div class="span3 animated-slow flyIn">
                        <div class="service-box">
                            <img src="assets/img/icons/telehandler.png" alt=""/>
                            <h2>{{ $t("message.telehandler_service") }}</h2>
                            <p>{{ $t("message.telehandler_service_text") }}</p>
                        </div>
                    </div>
                </div>
                <!-- Third row -->
                <div class="row brand">
                    <div class="span3 animated-fast flyIn">
                        <div class="service-box">
                            <img src="assets/img/icons/circle-tractor.png" alt=""/>
                            <h2>{{ $t("message.agricultural_service") }}</h2>
                            <p>{{ $t("message.agricultural_service_text") }}</p>
                        </div>
                    </div>
                    <div class="span3 animated-slow flyIn">
                        <a href="#machinery">
                            <div class="service-box">
                                <img src="assets/img/icons/machinery.png" alt=""/>
                                <h2>{{ $t("message.machinery") }}</h2>
                                <p>{{ $t("message.machinery_text") }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section: services -->
        <!-- start section: machines -->
        <section id="machinery" class="section green">
            <div class="container">
                <div class="row">
                    <div class="span6 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <video autoplay loop muted loading="lazy defer">
                                <source src="assets/video/traktor_360p_preview.mp4" type="video/mp4">
                                <source src="assets/video/traktor_360p_preview.mp4" type="video/ogg">
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                            <div class="overlay">JCB 3CX</div>
                        </div>
                    </div>
                    <div class="span6 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <picture>
                                <a href="assets/img/masinad/Volvo_tilted_720_3.jpg" class="progressive replace">
                                    <img src="assets/img/masinad/Volvo_tilted_tiny.jpg" class="preview" alt="image" />
                                    <div class="overlay">Volvo FH12</div>
                                </a>
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="span6 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <picture>
                                <a href="assets/img/masinad/VolvoFM12_CAT308_720_3.jpg" class="progressive replace">
                                    <img src="assets/img/masinad/VolvoFM12_CAT308_tiny.jpg" class="preview" alt="image" />
                                    <div class="overlay">Volvo FM12, {{ $t("message.multilift") }}</div>
                                </a>
                            </picture>
                        </div>
                    </div>
                    <div class="span6 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <picture>
                                <a href="assets/img/masinad/VOLVOH12_720_3.jpg" class="progressive replace">
                                    <img src="assets/img/masinad/VOLVOH12_tiny.jpg" class="preview" alt="image" />
                                    <div class="overlay">Volvo FH12</div>
                                </a>
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="span6 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <picture>
                                <a href="assets/img/masinad/RenaultMidlum_720_3.jpg" class="progressive replace">
                                    <img src="assets/img/masinad/RenaultMidlum_tiny.jpg" class="preview" alt="image" />
                                    <div class="overlay">Renault Midlum {{ $t("message.tanker") }}</div>
                                </a>
                            </picture>
                        </div>
                    </div>
                    <div class="span6 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <picture>
                                <a href="assets/img/masinad/LSPN4003_720_3.jpg" class="progressive replace">
                                    <img src="assets/img/masinad/LSPN4003_tiny.jpg" class="preview" alt="image" />
                                    <div class="overlay">Volvo FH12, {{ $t("message.attached_plow") }}</div>
                                </a>
                            </picture>
                        </div>
                    </div>
                </div>
                <!-- Second row-->
                <div class="row">
                    <div class="span6 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <picture>
                                <a href="assets/img/masinad/VolvoFM12_720_3.jpg" class="progressive replace">
                                    <img src="assets/img/masinad/VolvoFM12_tiny.jpg" class="preview" alt="image" />
                                    <div class="overlay">Volvo FM12, {{ $t("message.multilift") }}</div>
                                </a>
                            </picture>
                        </div>
                    </div>
                    <div class="span6 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <picture>
                                <a href="assets/img/masinad/CaterpillarCR308_720_3.jpg" class="progressive replace">
                                    <img src="assets/img/masinad/CaterpillarCR308_tiny.jpg" class="preview" alt="image" />
                                    <div class="overlay">Caterpillar CR308</div>
                                </a>
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="span12 animated-slow flyIn">
                        <div class="service-box overlay-container">
                            <picture>
                                <a href="assets/img/masinad/Manitou_1440_3.jpg" class="progressive replace">
                                    <img src="assets/img/masinad/Manitou_tiny.jpg" class="preview" alt="image" />
                                    <div class="overlay">Manitou</div>
                                </a>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section: machines -->
        <!-- spacer section -->
        <section class="spacer bg3">
            <div class="container">
                <div class="row">
                    <div class="span12 aligncenter flyLeft">
                        <blockquote class="large">
                            {{$t("message.motto")}}
                        </blockquote>
                    </div>
                    <div class="span12 aligncenter flyRight">
                        <i class="icon-rocket icon-10x"></i>
                    </div>
                </div>
            </div>
        </section>
        <!-- end spacer section -->
        <!-- Map -->
        <section class="section green">
            <h4>{{$t("message.location")}}</h4>
        </section>
        <!-- Map -->
        <section>
            <div id=map>
                <iframe width="100%" height="300" frameborder="0" style="border:0"
                        :src="'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYYCdyCg4k0YRYGD8GG2zAAM&key=AIzaSyB682Q1mLjWfdfWFbuGr_2qV1pn4meJMZA&language=' + i18n.locale"
                        allowfullscreen></iframe>
            </div>
        </section>
        <!-- Job vacancies -->
        <section id="job_vacancies" class="section orange">
            <div class="container">
<!--                <a href="veoautojuht.html"><veoautojuht></veoautojuht></a>-->
                <h4>{{ $t("message.job_vacancies_NA_text") }}</h4>
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
