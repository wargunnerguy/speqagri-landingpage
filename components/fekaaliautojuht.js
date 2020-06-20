Vue.component('fekaaliautojuht', {
    template: `
<div id="job_vacancies_box" class="well well-large section green joboffer">
<h4>{{$t("message.we_offer_work_to")}}{{$t("message.to_fecal_truck_driver")}}</h4>
        <div class="row">
            <div class="span3">
                <div class="thumbnail item">
<!--                    <span class="notify-badge">{{$t("message.new")}}</span>-->
<!--                    <span class="badge badge-success notify-badge-active">{{$t("message.active")}}</span>-->
                    <picture>
                        <source srcset="assets/img/job_offer_thumbnails/fekaaliautojuht_360.webp" type="image/webp">
                        <source srcset="assets/img/job_offer_thumbnails/fekaaliautojuht_360.png" type="image/png">
                        <img src="assets/img/masinad/machine_alt.jpg" alt="Pilt puudu!">
                    </picture>
                </div>
            </div>
            <div class="span8">
                <div class="row">
                    <div class="span4">
                        <h5>{{$t("message.requirements_for_candidate")}}</h5>
                        <ul style="list-style-type:circle;">
                            <li>{{$t("message.cat_corresponding_to_job_offer")}}</li>
                            <li>{{$t("message.previous_experience")}}</li>
                            <li>{{$t("message.proficiency_est")}}</li>
                            <li>{{$t("message.correctness_responsibility_accuracy")}}</li>
                        </ul>
                    </div>
                    <div class="span3">
                        <h5>{{$t("message.we_offer")}}</h5>
                        <ul style="list-style-type:circle;">
                            <li>{{$t("message.competitive_salary")}}</li>
                            <li>{{$t("message.fun_team")}}</li>
                            <li>{{$t("message.fuel_compensation")}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="span3">
            </div>
            <div class="span6">               
                <h5>{{$t("message.job_offer_info")}}</h5>
                <div class="fb-share-button" data-href="https://speqagri.ee/fekaaliautojuht.html" data-layout="button_count" data-size="large">
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fspeqagri.ee%2Ffekaaliautojuht.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore" >Share
                    </a>
                </div>
            </div>
        </div>
</div>
`
});
