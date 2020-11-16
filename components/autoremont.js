Vue.component('autoremont', {
    template: `
<div id="job_vacancies_box" class="well well-large section green joboffer">
    <a onclick="location.href='index.html'">
        <picture>
            <a href="assets/img/fb_share_pics/remont.jpg" class="progressive replace">
                <img src="assets/img/fb_share_pics/remont_tiny.jpg" class="preview" alt="image"/>
            </a>
        </picture>
    </a>
    <div class="row"></div>
    <div class="row">
        <div class="text-center">
            <div class="fb-share-button" data-href="https://speqagri.ee/autoremont.html" data-layout="button_count" data-size="large">
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fspeqagri.ee%2Fautoremont.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore" >Share
                </a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="text-center">
            <button onclick="location.href='index.html'" class="btn btn-theme">{{$t("message.back_to_homepage")}}</button>
        </div>
    </div>
</div>
`
});
