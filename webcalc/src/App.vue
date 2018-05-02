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
					<li><input class="features" name="features" type="checkbox" id="seo" value="Search Engine Optimisation" v-model="form.features"><label for="seo">Search Engine Optimisation (SEO)</label></li>
					<li><input class="features" name="features" type="checkbox" id="smo" value="Social Media Optimisation" v-model="form.features"><label for="smo">Social Media Optimisation (SMO)</label></li>
					<li><input class="features" name="features" type="checkbox" id="security" value="Security Setup" v-model="form.features"><label for="security">Security Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="caching" value="Caching &amp; Compression Setup" v-model="form.features"><label for="caching">Caching &amp; Compression Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="cdn" value="Content Delivery Network (CDN) Setup" v-model="form.features"><label for="cdn">Content Delivery Network (CDN) Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="server" value="Server/Webhost Setup" v-model="form.features"><label for="server">Server/Webhost Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="mail" value="Mail Setup" v-model="form.features"><label for="mail">Mail Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="gallery" value="Image/Sliders Gallery" v-model="form.features"><label for="gallery">Image/Sliders Gallery</label></li>
					<li><input class="features" name="features" type="checkbox" id="pagebuilder" value="PageBuilder Support" v-model="form.features"><label for="pagebuilder">PageBuilder Support</label></li>
					<li><input class="features" name="features" type="checkbox" id="contactform" value="Contact Form" v-model="form.features"><label for="contactform">Contact Form</label></li>
					<li><input class="features" name="features" type="checkbox" id="multilingual" value="Multilingual support" v-model="form.features"><label for="multilingual">Multilingual support</label></li>
					<li><input class="features" name="features" type="checkbox" id="backup" value="Backup (Offsite/Server side backup configuration)" v-model="form.features"><label for="backup">Backup (Offsite/Server side backup configuration)</label></li>
				</ul>
				
			</form>
		</section>
		<section id="siteresults">
			<h2>Your currently configured site</h2>
			<ul>
				<li v-for="(item,f) in form">
				<strong>{{f}}:</strong> {{item}}</li>
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
					{value:"Standard",text:"Standard"},
					{value:"E-Commerce",text:"E-Commerce"},
					{value:"Custom Production",text:"Custom Production"}
				],
				designChoices:[
					{value:"Template",text:"Template"},
					{value:"Custom Design",text:"Custom Design"}
				],
				speed:[
					{value:"Less than 1 month",text:"Less than 1 month"},
					{value:"Around 1 to 2 months",text:"Around 1 to 2 months"},
					{value:"More than 2 months",text:"More than 2 months"}
				]
			}
		}
	}
}
</script>
<style lang="scss">@import 'assets/css/style.scss'</style>
