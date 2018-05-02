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
						<select id="sitetype" name="sitetype">
							<option value="standard">Standard</option>
							<option value="ecommerce">E-Commerce</option>
							<option value="customProduction">Custom Production</option>
						</select>
					</div>
				</div>
				<!--Design Choise-->
				<div>
					<label for="design">What kind of design? <a href="#" tooltip-info="Info about what kind of design you need."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="design" name="design" v-model="designChoices">
						<option value="template">Template</option>
						<option value="custom">Custom Design</option>
					</select>
					</div>
				</div>
				<!--Development Speed-->
				<div>
					<label for="speed">How fast do you need it build?  <a href="#" tooltip-info="Info about how fast you want the website to be made."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="speed" name="speed">
						<option value="fast">Less than 1 month</option>
						<option value="normal">Around 1 to 2 months</option>
						<option value="slow">More than 2 months</option>
					</select>
					</div>
				</div>
			</div>
				<transition name="fade">
					<h2 v-if="designChoices == 'custom'">Show new labels</h2>
				</transition>
				<!--Amount of Pages-->
			<div class="cl">
				<div>
					<label for="amountPages">How many pages do you require? <a href="#" tooltip-info="Info about how much pages you require."><i class="fas fa-info-circle"></i></a></label>
					<input id="amountPages" name="amountPages" type="number" value="1" min="1" max="250"/>
				</div>
				<!--CopyWriting-->
				<div>
					<label for="copywriting">Do your pages need copywriting? <a href="#" tooltip-info="Info about if you require your pages to be copyrighted."><i class="fas fa-info-circle"></i></a></label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-yes" value="yes"><label for="copywrite-yes">Yes</label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-no" value="no"><label for="copywrite-no">No</label>
				</div>
			</div>
				<!--Features-->
				<label for="features">Do you require any of the following features?  <a href="#" tooltip-info="Select all the features you think you will require."><i class="fas fa-info-circle"></i></a></label>
				<ul id="features">
					<li><input class="features" name="features" type="checkbox" id="seo" value="seo"><label for="seo">Search Engine Optimisation (SEO)</label></li>
					<li><input class="features" name="features" type="checkbox" id="smo" value="smo"><label for="smo">Social Media Optimisation (SMO)</label></li>
					<li><input class="features" name="features" type="checkbox" id="security" value="security"><label for="security">Security Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="caching" value="caching"><label for="caching">Caching &amp; Compression setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="cdn" value="cdn"><label for="cdn">Content Delivery Network (CDN) Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="server" value="server"><label for="server">Server/Webhost Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="mail" value="mail"><label for="mail">Mail Setup</label></li>
					<li><input class="features" name="features" type="checkbox" id="gallery" value="gallery"><label for="gallery">Image/Sliders gallery</label></li>
					<li><input class="features" name="features" type="checkbox" id="pagebuilder" value="pagebuilder"><label for="pagebuilder">PageBuilder Support)</label></li>
					<li><input class="features" name="features" type="checkbox" id="contactform" value="contactform"><label for="contactform">Contact Form</label></li>
					<li><input class="features" name="features" type="checkbox" id="multilingual" value="multilingual"><label for="multilingual">Multilingual support</label></li>
					<li><input class="features" name="features" type="checkbox" id="backup" value="backup"><label for="backup">Backup (Offsite/Server side backup configuration)</label></li>
				</ul>
				
			</form>
		</section>
		<section id="price">
			<h2>Why exactly does a website has this price?</h2>
		</section>
	</main>
	<footer id="copyright">Copyright &copy;	{{new Date().getFullYear()}} | Web Calc | <a href="https://www.rafaeldejongh.com" target="_blank">www.RafaelDeJongh.com</a> | All Rights Reserved.</footer>
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
		designChoices:"template",
		webcalc:[
			{name:"type", low: 1000, high: 2500}
		]
		}
	}
}
</script>
<style lang="scss">
@import 'assets/css/style.scss'
</style>