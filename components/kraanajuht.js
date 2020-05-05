Vue.component('kraanajuht', {
    created: function () {
        if (localStorage.getItem("locale") !== null) {
            i18n.locale = localStorage.getItem("locale");
        }
    },
    template: `
         <section id="job_vacancies" class="section orange">
        <div class="container">
            <h4>Veoautojuht</h4>
            <div class="blankdivider30">
            </div>
            <div class="row">
                <div class="span12">

                </div>
                <!-- ./span12 -->
            </div>
        </div>
    </section>`
});
