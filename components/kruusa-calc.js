Vue.component('kruusa-calc', {
	data() {
		return {
			karjaarid: "json_file",
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
					id: "1",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 0/16",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "2",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 0/45",
					hindIlmaKm: "3.8",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "3",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 0/32",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "4",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 0/63",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "5",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 8/16",
					hindIlmaKm: "7.8",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "6",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 16/32",
					hindIlmaKm: "7.4",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "7",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 32/64",
					hindIlmaKm: "7",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "8",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 0/500",
					hindIlmaKm: "4.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "9",
					ettevote: "OÜ Väo Paas",
					asukoht: "Koigi karjäär",
					fraktsioon: "Killustik fr 0/8",
					hindIlmaKm: "2.4",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "10",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 4/12",
					hindIlmaKm: "10",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "11",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 4/16",
					hindIlmaKm: "10",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "12",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 8/16",
					hindIlmaKm: "10",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "13",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 4/32",
					hindIlmaKm: "8.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "14",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 4/63",
					hindIlmaKm: "8.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "15",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 16/32",
					hindIlmaKm: "8",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "16",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 32/63",
					hindIlmaKm: "8",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "17",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 0/63",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "18",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 0/32",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "19",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 0/16",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "20",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 4/16 III klass",
					hindIlmaKm: "10.5",
					lisainfo: "Purunemiskindlusega LA≤30",
					type: "killustik"
				},
				{
					id: "21",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 16/32 III klass",
					hindIlmaKm: "8",
					lisainfo: "Purunemiskindlusega LA≤31",
					type: "killustik"
				},
				{
					id: "22",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 32/63 III klass",
					hindIlmaKm: "8",
					lisainfo: "Purunemiskindlusega LA≤32",
					type: "killustik"
				},
				{
					id: "23",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 4/32 III klass",
					hindIlmaKm: "9",
					lisainfo: "Purunemiskindlusega LA≤33",
					type: "killustik"
				},
				{
					id: "24",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Killustik fr 4/63 III klass",
					hindIlmaKm: "9",
					lisainfo: "Purunemiskindlusega LA≤34",
					type: "killustik"
				},
				{
					id: "26",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Sõelmed fr 0/4",
					hindIlmaKm: "2",
					lisainfo: "",
					type: "soelmed"
				},
				{
					id: "27",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Sõelutud kivi fr 0/32",
					hindIlmaKm: "5.5",
					lisainfo: "",
					type: "kruus"
				},
				{
					id: "28",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Sõelutud kivi fr 8/32",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "kruus"
				},
				{
					id: "29",
					ettevote: "Eesti Killustik OÜ",
					asukoht: "Rõstla paekarjäär",
					fraktsioon: "Lõhatud paekivi",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "lohatud"
				},
				{
					id: "30",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Kruusasõelmed fr 0/4",
					hindIlmaKm: "5",
					lisainfo: "",
					type: "soelmed"
				},
				{
					id: "31",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Kruuskillustik fr 4/8",
					hindIlmaKm: "8",
					lisainfo: "",
					type: "kruuskillustik"
				},
				{
					id: "32",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Kruuskillustik fr 8/12",
					hindIlmaKm: "8",
					lisainfo: "",
					type: "kruuskillustik"
				},
				{
					id: "33",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Purustatud kruus fr 0/16",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "kruus"
				},
				{
					id: "34",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Purustatud kruus fr 0/32",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "kruus"
				},
				{
					id: "35",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Täiteliiv",
					hindIlmaKm: "3",
					lisainfo: "",
					type: "liiv"
				},
				{
					id: "36",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Seguliiv",
					hindIlmaKm: "3.5",
					lisainfo: "",
					type: "liiv"
				},
				{
					id: "37",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Sõelutud liiv fr 0/2",
					hindIlmaKm: "5",
					lisainfo: "",
					type: "liiv"
				},
				{
					id: "38",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Looduslik kruus",
					hindIlmaKm: "4",
					lisainfo: "",
					type: "kruus"
				},
				{
					id: "39",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 0/4",
					hindIlmaKm: "3.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "40",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 4/8",
					hindIlmaKm: "9",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "41",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 4/16",
					hindIlmaKm: "9",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "42",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 8/16",
					hindIlmaKm: "9",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "43",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 16/32",
					hindIlmaKm: "8.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "44",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 4/32",
					hindIlmaKm: "8.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "45",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 32/63",
					hindIlmaKm: "8",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "46",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 0/16",
					hindIlmaKm: "7.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "47",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 0/32",
					hindIlmaKm: "7.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "48",
					ettevote: "OÜ Moreen",
					asukoht: "Siimusti karjäär",
					fraktsioon: "Lubjakivikillustik fr 0/63",
					hindIlmaKm: "7.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "49",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 0/4",
					hindIlmaKm: "2.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "50",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 4/8",
					hindIlmaKm: "7.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "51",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 4/16",
					hindIlmaKm: "7.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "52",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 8/16",
					hindIlmaKm: "7.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "53",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 16/32",
					hindIlmaKm: "7",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "54",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 4/32",
					hindIlmaKm: "7",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "55",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 32/63",
					hindIlmaKm: "6.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "56",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 0/16",
					hindIlmaKm: "5.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "57",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 0/32",
					hindIlmaKm: "5.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "58",
					ettevote: "OÜ Moreen",
					asukoht: "Sopimetsa II lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 0/63",
					hindIlmaKm: "5.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "59",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 0/6",
					hindIlmaKm: "3",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "60",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 4/12",
					hindIlmaKm: "7.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "61",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 8/16",
					hindIlmaKm: "7.5",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "62",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 16/32",
					hindIlmaKm: "7",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "63",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 32/63",
					hindIlmaKm: "7",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "64",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 0/32",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "65",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 0/63",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "66",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lubjakivikillustik fr 0/16",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "killustik"
				},
				{
					id: "67",
					ettevote: "Luige Kivi OÜ",
					asukoht: "Sopimetsa lubjakivikarjäär",
					fraktsioon: "Lõhatud paekivi",
					hindIlmaKm: "6",
					lisainfo: "",
					type: "lohatud"
				},
				{
					id: "68",
					ettevote: "Sopimetsa",
					asukoht: "Sopimetsa",
					fraktsioon: "Sõelutud muld",
					hindIlmaKm: "7",
					lisainfo: "",
					type: "muld"
				}
			],
		}
	},
	computed: {
		totalPrice() {
			const productObj = this.products.find(prod => prod.id === this.selectedProductId);
			//Total product price w/o tax
			this.totalProductPrice = parseFloat(this.selectedAmount * productObj.hindIlmaKm).toFixed(2);
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
			return product.fraktsioon;
		},
	},
	template: `
    <section class="wrapper">
    <!-- row-t title -->
    <div class="row-t title">
      <ul>
        <li style="width: 35%">{{ $t("message.calc_product") }}</li>
        <li style="width: 17%">{{ $t("message.calc_price") }}</li>
        <li style="width: 17%">{{ $t("message.calc_tax") }} 20%</li>
        <li style="width: 17%">{{ $t("message.calc_price_and_tax") }}</li>
        <li style="width: 14%">{{ $t("message.calc_select") }}</li>
      </ul>
    </div>
    <!-- row-t 3 -->
    <article v-for="product in products" :key="product.id" class="row-t" :class="product.type">
      <ul>
        <label :for="'product_' + product.id">
          <li style="width: 35%"><a href="#">{{ productFullName(product) }}</a></li>
          <li style="width: 17%">{{ product.hindIlmaKm }} €/t</li>
          <li style="width: 17%">{{ calcTax(product.hindIlmaKm, 2) }} €/t</li>
          <li style="width: 17%">{{ calcTotal(product.hindIlmaKm, 2) }} €/t</li>
          <input :id="'product_' + product.id" type="radio" :name="product.name" v-model="selectedProductId"
                 :value="product.id">
        </label>
      </ul>
      <ul class="more-content">
        <li>{{ product.lisainfo !== '' ? product.lisainfo : '' }}</li>
      </ul>
    </article>

    <article>
      <div class="hero-unit" style="background-color: black">
        <h3 v-if="!selectedProductId"> Vali tabelist toode, mille hinda soovid teada</h3>
        <div v-else>
          <h3>{{ products.find(product => product.id === selectedProductId).asukoht }} - {{ products.find(product => product.id === selectedProductId).fraktsioon.toLowerCase() }} - ligikaudne hind: </h3>
          <div class="row-fluid">
            <div class="span3">Kogus (min 5t)</div>
            <div class="span6">
              <input type="range" min="5" max="200" value="5" step="0.1" class="slider" v-model="selectedAmount">
            </div>
            <div class="span1 input-append">
              <input style="width: 3.5em" id="appendedInput" type="number" v-model="selectedAmount">
              <span class="add-on">tonni</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span3">Kaugus karjäärist </div>
            <div class="span6">
              <input type="range" min="0" max="200" value="5" step="0.1" class="slider" v-model="selectedDistance">
            </div>
            <div class="span1 input-append">
              <input style="width: 3.5em" id="appendedInput" type="number" v-model="selectedDistance">
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