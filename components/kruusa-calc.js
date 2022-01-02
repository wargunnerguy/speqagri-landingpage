Vue.component('kruusa-calc', {
	data() {
		return {
			selectedProductId: null,
			selectedAmount: 5,
			selectedDistance: 20,
			transportStartPrice: 50,
			transportKmPrice: 2,
			k2ibemaks: 0.2,
			totalTransportPrice: 0.0,
			totalProductPrice: 0.0,
			totalTaxPrice: 0.0,
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
					fraction: '',
					pricePerTon: 6.00,
					tax: 1.20,
					desc: '',
				}
			],
		}
	},
	computed: {
		totalPrice() {
			const productObj = this.products.find(prod => prod.id === this.selectedProductId);
			//Total product price w/o tax
			this.totalProductPrice = parseFloat(this.selectedAmount * productObj.pricePerTon).toFixed(2);
			//Total transport price w/o tax
			this.totalTransportPrice = parseFloat(this.selectedDistance * this.transportKmPrice).toFixed(2);
			//Total tax for product + transport
			this.totalTaxPrice = parseFloat(this.totalTransportPrice * this.k2ibemaks + this.totalProductPrice * this.k2ibemaks).toFixed(2);
			//Return total sum with taxes
			return parseFloat(parseFloat(this.totalProductPrice) + parseFloat(this.totalTransportPrice) + parseFloat(this.totalTaxPrice)).toFixed(2);
		},
	},
	methods: {
		calcTax(price, round) {
			return parseFloat(price * this.k2ibemaks).toFixed(2);
		},
		calcTotal(price, round) {
			return parseFloat(price * (1 + this.k2ibemaks)).toFixed(2);
		},
		productFullName(product) {
			return product.fraction !== '' ? product.name + ' (' + product.fraction + ')' : product.name;
		},
	},
	template: `
    <section class="wrapper">
    <!-- row-t title -->
    <div class="row-t title">
      <ul>
        <li>Toode</li>
        <li>Hind/t</li>
        <li>Km 20%</li>
        <li>Hind+km/t</li>
        <li>Vali</li>
      </ul>
    </div>
    <!-- row-t 3 -->
    <article v-for="product in products" :key="product.id" class="row-t" :class="product.type">
      <ul>
        <label :for="'product_' + product.id">
          <li><a href="#">{{ productFullName(product) }}</a></li>
          <li>{{ product.pricePerTon }} €/t</li>
          <li>{{ calcTax(product.pricePerTon, 2) }} €</li>
          <li>{{ calcTotal(product.pricePerTon, 2) }} €/t</li>
          <input :id="'product_' + product.id" type="radio" :name="product.name" v-model="selectedProductId"
                 :value="product.id">
        </label>
      </ul>
      <ul class="more-content">
        <li>{{ product.desc }}</li>
      </ul>
    </article>

    <article>
      <div class="hero-unit" style="background-color: black">
        <h3 v-if="!selectedProductId"> Vali tabelist toode, mille hinda soovid teada</h3>
        <div v-else>
          <h3>{{ products.find(product => product.id === selectedProductId).name }} - ligikaudne hind: </h3>
          <div class="row-fluid">
            <div class="span3">Kogus (min 5t)</div>
            <div class="span6">
              <input type="range" min="5" max="200" value="5" step="0.1" class="slider" v-model="selectedAmount">
            </div>
            <div class="span1 input-append">
              <input id="appendedInput" type="number" v-model="selectedAmount">
              <span class="add-on">tonni</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span3">Kaugus karjäärist</div>
            <div class="span6">
              <input type="range" min="0" max="200" value="5" step="0.1" class="slider" v-model="selectedDistance">
            </div>
            <div class="span1 input-append">
              <input id="appendedInput" type="number" v-model="selectedDistance">
              <span class="add-on">km</span>
            </div>
          </div>
	        <hr>
          <div class="row-fluid">
            <div class="span8"></div>
            <div class="span4 input-prepend input-append">
              <span class="span6 add-on">Materjalihind</span>
              <input class="span6" readonly id="appendedInput prependedInput" type="number" v-model="totalProductPrice"
                     :value="totalProductPrice">
              <span class="add-on">€</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span8"></div>
            <div class="span4 input-prepend input-append">
              <span class="span6 add-on">Transpordihind</span>
              <input class="span6" readonly id="appendedInput prependedInput" type="number"
                     v-model="totalTransportPrice"
                     :value="totalTransportPrice">
              <span class="add-on">€</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span8"></div>
            <div class="span4 input-prepend input-append">
              <span class="span6 add-on">Käibemaks kokku</span>
              <input class="span6" readonly id="appendedInput prependedInput" type="number" v-model="totalTaxPrice"
                     :value="totalTaxPrice">
              <span class="add-on">€</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span8"></div>
            <div class="span4 input-prepend input-append">
              <span class="span6 add-on">Hind kokku</span>
              <input class="span6" readonly id="appendedInput prependedInput" type="number" v-model="totalPrice"
                     :value="totalPrice">
              <span class="add-on">€</span>
            </div>
          </div>
        </div>
      </div>
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