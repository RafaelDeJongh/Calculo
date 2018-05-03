<template>
<div id="app">
	<header>
		<img src="./assets/images/webcalc-logo.svg" alt="Web Calc Logo"/>
	</header>
	<main id="webcalc">
		<section id="calculator">
		<aside id="priceCalculator">
			<h3>Estimated Price:</h3>
			<label>&euro;1000 to &euro;3000 excl. VAT</label>
		</aside>
			<h1>The Easy Website Price Calculator</h1>
			<form class="calcForm" action="#">
			<div class="cl">
				<!--Type of Site-->
				<div>
					<label for="sitetype">What type of site do you want? <a href="#" tooltip-info="Info about type of site."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
						<select id="sitetype" name="sitetype" v-model="form.sitetype">
							<option v-for="option in options.sitetype" v-bind:value="option.value">
								{{option.text}}
							</option>
						</select>
						
					</div>
				</div>
				<!--Design Choise-->
				<div>
					<label for="design">What kind of design? <a href="#" tooltip-info="Info about what kind of design you need."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="design" name="design" v-model="form.designChoices">
						<option v-for="option in options.designChoices" v-bind:value="option.value">
							{{option.text}}
						</option>
					</select>
					</div>
				</div>
				<!--Development Speed-->
				<div>
					<label for="speed">How fast do you need it build?  <a href="#" tooltip-info="Info about how fast you want the website to be made."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="speed" name="speed" v-model="form.speed">
						<option v-for="option in options.speed" v-bind:value="option.value">
							{{option.text}}
						</option>
					</select>
					</div>
				</div>
			</div>
				<transition name="fade">
					<h2 v-if="form.designChoices == 'Custom Design'">Show new labels</h2>
				</transition>
				<!--Amount of Pages-->
			<div class="cl">
				<div>
					<label for="amountPages">How many pages do you require? <a href="#" tooltip-info="Info about how much pages you require."><i class="fas fa-info-circle"></i></a></label>
					<input id="amountPages" name="amountPages" type="number" value="1" min="1" max="250" v-model="form.pages">
				</div>
				<!--CopyWriting-->
				<div>
					<label for="copywriting">Do your pages need copywriting? <a href="#" tooltip-info="Info about if you require your pages to be copyrighted."><i class="fas fa-info-circle"></i></a></label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-yes" value="Yes" v-model="form.copywriting"><label for="copywrite-yes">Yes</label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-no" value="No" v-model="form.copywriting"><label for="copywrite-no">No</label>
				</div>
			</div>
				<!--Features-->
				<label for="features">Do you require any of the following features?  <a href="#" tooltip-info="Select all the features you think you will require."><i class="fas fa-info-circle"></i></a></label>
				<ul id="features">
					<li v-for="option in options.features"><input class="features" name="features" type="checkbox" v-bind:id="option.id" v-bind:value="option.value" v-model="form.features"><label v-bind:for="option.id">{{option.text}}</label></li>
				</ul>
				</form>
		</section>
		<section id="siteresults">
			<h2>Your currently configured site</h2>
			<ul>
				<li v-for="(item,f) in form"><strong>{{f}}:</strong> {{item}}</li>
			</ul>
			<ul>
				<li v-for="(item,p) in options.sitetype">Estimated Price: {{item.price.low}} &ndash; {{item.price.high}}</li>
			</ul>
		</section>
		<section id="price">
			<h2>Why exactly does a website has this price?</h2>
		</section>
	</main>
	<footer id="copyright">Copyright &copy; {{new Date().getFullYear()}} | Web Calc | <a href="https://www.rafaeldejongh.com" target="_blank">www.RafaelDeJongh.com</a> | All Rights Reserved.</footer>
	<back-to-top visibleoffset="250"><button id="totop"></button></back-to-top>
</div>
</template>
<script>
import BackToTop from 'vue-backtotop'
export default{
	name:'app',
	components:{BackToTop},
	data(){
		return{
			form:{
				sitetype:"Standard",
				designChoices:"Template",
				speed:"Less than 1 month",
				pages:1,
				copywriting:"",
				features:[]
				
			},
			options:{
				sitetype:[
					{value:"Standard",text:"Standard",price:{low:800,high:1500}},
					{value:"E-Commerce",text:"E-Commerce",price:{low:2000,high:4000}},
					{value:"Custom Production",text:"Custom Production",price:{low:5000,high:8000}}
				],
				designChoices:[
					{value:"Template",text:"Template"},
					{value:"Custom Design",text:"Custom Design"}
				],
				speed:[
					{value:"Less than 1 month",text:"Less than 1 month"},
					{value:"Around 1 to 2 months",text:"Around 1 to 2 months"},
					{value:"More than 2 months",text:"More than 2 months"}
				],
				features:[
					{id:"seo",value:"Search Engine Optimisation",text:"Search Engine Optimisation (SEO)"},
					{id:"smo",value:"Social Media Optimisation",text:"Social Media Optimisation (SMO)"},
					{id:"security",value:"Security Setup",text:"Security Setup"},
					{id:"caching",value:"Caching & Compression Setup",text:"Caching & Compression Setup"},
					{id:"cdn",value:"Content Delivery Network Setup",text:"Content Delivery Network (CDN) Setup"},
					{id:"server",value:"Server/Webhost Setup",text:"Server/Webhost Setup"},
					{id:"mail",value:"Mail Setup",text:"Mail Setup"},
					{id:"gallery",value:"Image/Sliders Gallery",text:"Image/Sliders Gallery"},
					{id:"pagebuilder",value:"PageBuilder Support",text:"PageBuilder Support"},
					{id:"contactform",value:"Contact Form",text:"Contact Form"},
					{id:"multilingual",value:"Multilingual Support",text:"Multilingual Support"},
					{id:"backup",value:"Backup (Offsite/Server side backup configuration)",text:"Backup (Offsite/Server side backup configuration)"}
				]
			}
		}
	}
}
</script>
<style lang="scss">@import 'assets/css/style.scss'</style>
