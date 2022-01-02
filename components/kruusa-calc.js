Vue.component('kruusa-calc', {
	data() {
		return {
			products: [
				{
					id: 1,
					name: "Lubjakivikillustik",
					type: 'mlb',
					fraction: '0-10 mm',
					pricePerTon: 3.5,
					tax: 0.70,
					desc: 'This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!',
				},
				{
					id: 2,
					name: "Lubjakivikillustik",
					type: 'mlb',
					fraction: '0-16 mm',
					pricePerTon: 5.00,
					tax: 0.70,
					desc: '',
				},
				{
					id: 3,
					type: 'nhl',
					name: "Täiteliiv",
					fraction: 'Täiteliiv',
					pricePerTon: 6.00,
					tax: 1.20,
					desc: '',
				}
			],
		}
	},
	template: `
<section class="wrapper">
    <!-- row-t title -->
    <div class="row-t title">
      <ul>
        <li>Fraktsioon</li>
        <li>Hind/t</li>
        <li>Km 20%</li>
        <li>Hind+km/t</li>
      </ul>
    </div>
    <!-- row-t 3 -->
    <article v-for="product in products" :key="product.id" class="row-t" :class="product.type">
      <ul>
        <li><a href="#">{{ product.fraction }}</a></li>
        <li>{{ product.pricePerTon }} €/t</li>
        <li>{{ product.tax }} €</li>
        <li>{{ product.pricePerTon + product.tax }} €/t</li>
      </ul>
      <ul class="more-content">
        <li>{{ product.desc }}</li>
      </ul>
    </article>
  
<!--    &lt;!&ndash; row-t 5 &ndash;&gt;
    <article class="row-t mlb">
      <ul>
        <li><a href="#">MLB</a></li>
        <li>$5</li>
        <li>48</li>
        <li>120</li>
      </ul>
      <ul class="more-content">
        <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
      </ul>
    </article>
    &lt;!&ndash; row-t 6 &ndash;&gt;
    <article class="row-t nhl">
      <ul>
        <li><a href="#">NHL</a></li>
        <li>$50</li>
        <li>12</li>
        <li>48</li>
      </ul>
      <ul class="more-content">
        <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
      </ul>
    </article>
    &lt;!&ndash; row-t 7 &ndash;&gt;
    <article class="row-t nhl">
      <ul>
        <li><a href="#">NHL</a></li>
        <li>$50</li>
        <li>12</li>
        <li>48</li>
      </ul>
      <ul class="more-content">
        <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
      </ul>
    </article>
    &lt;!&ndash; row-t 8 &ndash;&gt;
    <article class="row-t pga">
      <ul>
        <li><a href="#">PGA</a></li>
        <li>$50</li>
        <li>12</li>
        <li>48</li>
      </ul>
      <ul class="more-content">
        <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
      </ul>
    </article>
    &lt;!&ndash; row-t 9 &ndash;&gt;
    <article class="row-t pga">
      <ul>
        <li><a href="#">PGA</a></li>
        <li>$50</li>
        <li>12</li>
        <li>48</li>
      </ul>
      <ul class="more-content">
        <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
      </ul>
    </article>
    &lt;!&ndash; row-t 10 &ndash;&gt;
    <article class="row-t pga">
      <ul>
        <li><a href="#">PGA</a></li>
        <li>$50</li>
        <li>12</li>
        <li>48</li>
      </ul>
      <ul class="more-content">
        <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
      </ul>
    </article>
    &lt;!&ndash; row-t 11 &ndash;&gt;
    <article class="row-t mlb">
      <ul>
        <li><a href="#">MLB</a></li>
        <li>$10</li>
        <li>1</li>
        <li>10</li>
      </ul>
      <ul class="more-content">
        <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
      </ul>
    </article>-->
  </section>
`
});
