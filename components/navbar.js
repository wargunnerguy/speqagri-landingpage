Vue.component('navbar', {
    created: function () {
        if (localStorage.getItem("locale") !== null) {
            i18n.locale = localStorage.getItem("locale");
        }
    },
    methods: {
        changeToEstonian: function () {
            i18n.locale = 'et';
            localStorage.setItem("locale", "et");
        },
        changeToRussian: function () {
            i18n.locale = 'ru';
            localStorage.setItem("locale", "ru");
        },
        changeToEnglish: function () {
            i18n.locale = 'en';
            localStorage.setItem("locale", "en");
        }
    },
    template:
    `<div class="navbar-wrapper">
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <!-- Responsive navbar -->
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                    </a>
                    <h1 class="brand"><a href="index.html">SPEQ Agri</a></h1>
                    <!-- navigation -->
                    <nav class="pull-right nav-collapse collapse">
                        <ul id="menu-main" class="nav">
                             <li><a v-bind:title="$t('message.job_vacancies')" href="index.html#tööpakkumised">{{ $t("message.job_vacancies") }} <span class="badge badge-important badge-circled">0</span></a></li>
<!--                            <li><a v-bind:title="$t('message.job_vacancies')" href="index.html#tööpakkumised">{{ $t("message.job_vacancies") }} <span class="badge badge-warning badge-circled">1</span></a></li>-->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{$t('message.Services')}}
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="index.html#contact" class="home-slide-content" v-html="$t('message.maintenance_service_html')"/>
                                   </li>
                                    <li>
                                        <a href="index.html#contact" class="home-slide-content" v-html="$t('message.excavation_service_html')"/>
                                   </li>
                                    <li class="dropdown-submenu">
                                        <a class="home-slide-content" v-html="$t('message.landscaping_service_html')"/>
                                        <ul class="dropdown-menu">
                                            <li><a href="index.html#contact">{{$t('message.roadside_mowing_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.trimming_service')}}</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a class="home-slide-content" v-html="$t('message.rental_service_html')"/>
                                        <ul class="dropdown-menu">
                                            <li><a href="index.html#contact">{{$t('message.multilift_container_rental_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.portable_toilet_rental_service')}}</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a class="home-slide-content" v-html="$t('message.snow_removal_service_html')"/>
                                        <ul class="dropdown-menu">
                                            <li><a href="index.html#contact">{{$t('message.snow_plowing_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.snow_transport_service')}}</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index.html#contact" class="home-slide-content" v-html="$t('message.telehandler_service_html')"/>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a class="home-slide-content" v-html="$t('message.transport_service_html')"/>
                                        <ul class="dropdown-menu">
                                            <li><a href="index.html#contact">{{$t('message.platform_trailer_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.multilift_services')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.dirt_transport_sale_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.gravel_transport_sale_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.sand_transport_sale_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.material_transport_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.logging_service')}}</a></li>
                                            <li><a href="index.html#contact">{{$t('message.construction_waste_transport_service')}}</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://fekaaliabi.ee" class="home-slide-content" v-html="$t('message.winding_service_html')"/>
                                    </li>
                                </ul>
                            </li>
                            <li><a v-bind:title="$t('message.contact')" href="index.html#contact">{{ $t("message.contact") }}</a></li>
                            <li>
                                <a @click=changeToEstonian() href="#" onclick="event.preventDefault();"><img src="assets/img/flags/et.png"/></a>
                            </li>
                            <li>
                                <a @click=changeToEnglish() href="#" onclick="event.preventDefault();"><img src="assets/img/flags/en.png"/></a>
                            </li>
                            <li>
                                <a @click=changeToRussian() href="#" onclick="event.preventDefault();"><img src="assets/img/flags/ru.png"/></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>`
});
