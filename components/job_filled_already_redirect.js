Vue.component('job_filled_already_redirect', {
    template: `
<div id="job_vacancies_box" class="well well-large section green joboffer">
<!--<h4>{{$t("message.we_offer_work_to")}}{{$t("message.to_truck_driver")}}</h4>-->
    <h4>{{$t("message.position_filled")}}</h4>
    <div class="row">
        <div class="span11 text-center">
            <button onclick="location.href='index.html'" class="btn btn-theme">{{$t("message.back_to_homepage")}}</button>
        </div>
    </div>
</div>
`
});
