<template>
<div id="app">
	<header>
		<a href="index.html"><img src="./assets/images/webcalc-logo.svg" alt="Web Calc Logo"/></a>
	</header>
	<main id="webcalc">
		<section id="calculator">
		<aside id="priceCalculator">
			<h3>Estimated Price:</h3>
			<label>&euro;{{calcMin}} to &euro;{{calcMax}} excl. VAT</label>
		</aside>
			<h1>The Easy Website Price Calculator</h1>
			<form class="calcForm" action="#">
			<div class="cl">
				<!--Type of Site-->
				<div>
					<label for="sitetype">What type of site do you want? <a href="#site-info" tooltip-info="Info about type of site."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
						<select id="sitetype" name="sitetype" v-model="form.sitetype">
							<option v-for="option in options.sitetype" v-bind:value="option.text">{{option.text}}</option>
						</select>
						
					</div>
				</div>
				<!--Design Choise-->
				<div>
					<label for="design">What kind of design? <a href="#design-info" tooltip-info="Info about what kind of design you need."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="design" name="design" v-model="form.designChoices">
						<option v-for="option in options.designChoices" v-bind:value="option.text">{{option.text}}</option>
					</select>
					</div>
				</div>
				<!--Development Speed-->
				<div>
					<label for="speed">How fast do you need it build? <a href="#speed-info" tooltip-info="Info about how fast you want the website to be made."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="speed" name="speed" v-model="form.speed">
						<option v-for="option in options.speed" v-bind:value="option.text">{{option.text}}</option>
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
					<label for="amountPages">How many pages do you require? <a href="#page-info" tooltip-info="Info about how much pages you require."><i class="fas fa-info-circle"></i></a></label>
					<input id="amountPages" name="amountPages" type="number" value="1" min="1" max="250" v-model="form.pages">
				</div>
				<!--CopyWriting-->
				<div>
					<label for="copywriting">Do your pages need copywriting? <a href="#copywriting-info" tooltip-info="Info about if you require your pages to be copyrighted."><i class="fas fa-info-circle"></i></a></label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-yes" value="Yes" v-model="form.copywriting"><label for="copywrite-yes">Yes</label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-no" value="No" v-model="form.copywriting"><label for="copywrite-no">No</label>
				</div>
			</div>
				<!--Features-->
				<label for="features">Do you require any of the following features?  <a href="#features-info" tooltip-info="Select all the features you think you will require."><i class="fas fa-info-circle"></i></a></label>
				<ul id="features">
					<li v-for="option in options.features"><input class="features" name="features" type="checkbox" v-bind:id="option.id" v-bind:value="option.text" v-model="form.features"><label v-bind:for="option.id">{{option.text}}</label></li>
				</ul>
				</form>
			<section id="siteresults">
				<h2>Your currently configured site</h2>
				<ul>
					<li v-for="(item,f) in form"><strong>{{f}}:</strong> {{item}}</li>
				</ul>
			</section>
		</section>
		<section id="price">
			<h2>Why exactly does a website has this price?</h2>
			<p>A website on its own never really has a static price, especially not a solid price range for any web project you want to be created for you. If you ask for a website with the same specifics you can still have a wide range of costs related to it if you would ask this to various different web development bureaus.</p>
			<p>And that’s also why this website calculator exists, it’s really hard to even impossible to put a proper price on a website as every website is unique and has different requirements than others. The prices for websites just vary so much that it really comes down on what kind of features you need for your website.</p>
			<p>However, we want to simplify this for you with this easy website calculator specifically made for estimating a given cost for a potential “WordPress” website.</p>
			<p>We therefore divided this in six chapters being:</p>
		<v-collapse-group>
			<!--Site Types-->
			<v-collapse-wrapper>
				<h3 id="site-info" v-collapse-toggle>Site types</h3>
				<div v-collapse-content>
					<p>Here we decided to have three categories for the site types being:</p>
					<h4>Standard</h4>
					<p>A standard website is what most people would need, this can range from a portfolio website to a small business one pager or landing page. These kinds of websites can easily range from €800 to €2000 excl. VAT.</p>
					<p>The price can vary depending on the various features you select but is most of the time what most clients will need.</p>
					<h4>E-Commerce</h4>
					<p>The E-Commerce websites is a whole other story as a lot more thought needs to be added to creating an E-Commerce website, some features like Search Engine Optimisation (SEO), Social Media Optimisation (SMO) and Security are almost a definitely must have and can easily range from €3000 to €6000 excl. VAT.</p>
					<h4>Custom Production</h4>
					<p>With Custom Production websites we come to the priciest and most advanced kind of website type as this is mostly something very specific that the client requires to be added to their website like a functionality that has to be created specifically for them.</p>
					<p>This is also the least picked option as the amount of these kind of websites tend to be €8000 to even more than €10000 excl. VAT, as it requires a lot more hours to be put into the development of such a site.</p>
				</div>
			</v-collapse-wrapper>
			<!--Design Types-->
			<v-collapse-wrapper>
				<h3 id="design-info" v-collapse-toggle>Design types</h3>
				<div v-collapse-content>
					<p>With design types we tend to have a hole lot more of customisation options but we simplified it to two to make it more understandable for everyone. Here we have:</p>
					<h4>Template</h4>
					<p>Choosing a template is most of the time the easiest and also the cheapest way to save some money, as picking a template with your developer for him then to later adjust it to your needs makes it all the easier for both parties.</p>
					<p>As with WordPress having currently over 2000 Free themes, and with places like ThemeForest having even more Premium themes to choose from. It really is one of the better choices to vastly lower the development cost of the actual website.</p>
					<h4>Custom Design</h4>
					<p>A Custom Design on the other hand is completely made from scratch where both a design team and UI/UX expert will work on the theme to create that perfect and unique fit for you. This will increase the development cost quite a bit. This however will make sure your website will stand out and be unique for everyone that visits it.</p>
				</div>
			</v-collapse-wrapper>
			<!--Speed-->
			<v-collapse-wrapper>
				<h3 id="speed-info" v-collapse-toggle>Build speed</h3>
				<div v-collapse-content>
					<p>Build speed is definitely also a component that you have to take into account, the faster you want the website to be build, the more money it will cost as it has to take priority into account.</p>
					<p>Most websites are usually finished between one or two months, this depends of course on the requirements and features that the website needs.</p>
					<p>Providing more time for the development of the website in turns will decrease the price as you are providing the developers with more breathing room to create your website.</p>
					<p>This is in reverse if you want your website to be done very fast and then we’re speaking less than a month, this heavily increases the price as then full priority is given to the project and sometimes even requires additional developers to get the website with its features done in the provided time period.</p>
				</div>
			</v-collapse-wrapper>
			<!--Pages-->
			<v-collapse-wrapper>
				<h3 id="page-info" v-collapse-toggle>Amount of pages</h3>
				<div v-collapse-content>
					<p>A big part of the creation of the website is the pages. Depending on the number of pages the total amount can also drastically change.</p>
					<p>A default number of pages for a website is pretty much between 1 to 10 pages, and this is also a very reasonable number not only for the developer but also for your website visitors that they do not have to go through 100’s of pages.</p>
					<p>Of course, on some custom sites this is just required and this will also reflect on the total price asked for such a website.</p>
					<h3 id="copywriting-info">Copywriting</h3>
					<p>Copywriting is in combination of the number of pages, a lot of pages require content and while a lot of clients tend to already know what they want on the pages, having the right content that fits properly for your website is not always the case.</p>
					<p>Having your pages copywritten is a good way to make sure all the content is in order which as well includes a good portion of Search Engine Optimisation (SEO) in it already to boost the website already with the content on the site itself.</p>
					<p>A proper copywritten page can do a lot of good things for your website as well for your visitors of your site.</p>
					<p>This attribute is also relative to the number of pages you select in this calculator.</p>
				</div>
			</v-collapse-wrapper>
			<!--Features-->
			<v-collapse-wrapper>
				<h3 id="features-info" v-collapse-toggle>Features</h3>
				<div v-collapse-content>
					<p>This calculator offers in total 12 of the most requested features of a website, and while you definitely do not need all, every one might be good to consider to build you a perfect website, that is not only good looking and properly written but also secure, fast and highly ranked!</p>
					<h4>Search Engine Optimisation (SEO)</h4>
					<p>One of the most requested features as SEO will help you improve your site’s ranking in Google and other Search Engines. We optimise your “WordPress” website with the right plugins and do keyword research per page to properly get your SEO ranking in order. Together with combining this with Google Search Console to always stay connected to your crawl results.</p>
					<h4>Social Media Optimisation (SMO)</h4>
					<p>A second important feature is SMO, this is mostly if you want to expand your website beyond the site as itself, here we will create accounts on popular social media platforms like Facebook, Twitter, Instagram, Google+, etc… to link back to your website so you have a steady trackback of your website and your social media activity.</p>
					<h4>Security Setup</h4>
					<p>We take security very seriously and with this we mean that just installing an SSL certificate is not enough for a properly secured website. We keep the A+ standards from securityheaders.io to not only protect your own website for protentional harm but also your visitors as we take both the owner and the visitors in account when it comes to security!</p>
					<h4>Caching &amp; Compression Setup</h4>
					<p>Caching &amp; Compression is a very important part to make your website fast, and this doesn’t only influence your visitor’s behaviour on your website but also increases page ranking as Google takes page speed into account as well to provide the visitors the best experience.</p>
					<h4>Content Delivery Network (CDN) Setup</h4>
					<p>A CDN is not for needed for every website, but if you have an international site it sure might help you provide your website to your visitors better. We recommend Cloudflare not only a Content Delivery Network but also provides DDOS protection and has proper measures in place to keep your site safe.</p>
					<h4>Server/Webhost Setup</h4>
					<p>When starting a new project, you need a proper server or webhost for your website. Depending on the target audience location and the scale of your website, we can recommend the best option for your needs. Together that we can provide a setup service that will provide the correct server configuration to make your “WordPress” website work like it should.</p>
					<h4>Mail Setup</h4>
					<p>For proper mailing you need a proper configuration to make your custom domain mail not appear in the spam box of your visitor, that’s why we need to properly configure and secure it with SPF, DKIM and DMARK to make your mail properly compliant with most spam filters like SpamAssassin.</p>
					<h4>Image/Sliders Gallery</h4>
					<p>If you want to have a visual appealing website an image or slider gallery is a perfect choice, with these you can present your photographs in a beautiful way and also very easily to use for your visitors.</p>
					<h4>PageBuilder Configuration</h4>
					<p>These days a lot of editing is being done with popular PageBuilders for site and in particular WordPress. However, some theme’s do not support PageBuilder and with this we want to properly configure the PageBuilder to work with your theme.</p>
					<h4>Contact Form</h4>
					<p>Most if not all sites would like a contact form, sometimes this is an easy three field layout to just send a contact mail directly from your site, however this is not always the case as you can also properly customise your form to be dynamic and conditional if you require it for something more than a contact form.</p>
					<h4>Multilingual Support</h4>
					<p>Some sites require Multilingual support, and this can be done with via a range of options but is not always as easy just installing a plugin. Proper configuration is therefore required together with support of the theme to properly translate all the strings for it. With this feature we want to make the theme as well as the content fully multilingual in whatever language you desire.</p>
				</div>
			</v-collapse-wrapper>
		</v-collapse-group>
		</section>
	</main>
	<footer id="copyright">Copyright &copy; {{new Date().getFullYear()}} | Web Calc | <a href="https://www.rafaeldejongh.com" target="_blank">www.RafaelDeJongh.com</a> | All Rights Reserved.</footer>
	<back-to-top visibleoffset="250"><button id="totop"></button></back-to-top>
</div>
</template>
<script>
export default{
	name:'app',
	data(){
		return{
			form:{
				sitetype:"Standard",
				designChoices:"Template",
				speed:"Around 1 to 2 months",
				pages:1,
				copywriting:"No",
				features:[]
			},
			options:{
				sitetype:[
					{text:"Standard",         price:{low:600, high:1000}},
					{text:"E-Commerce",       price:{low:2000,high:4000}},
					{text:"Custom Production",price:{low:5000,high:8000}}
				],
				designChoices:[
					{text:"Template",     price:{low:200, high:500}},
					{text:"Custom Design",price:{low:1200,high:2000}}
				],
				speed:[
					{text:"Less than 1 month",   price:{low:1000,high:3000}},
					{text:"Around 1 to 2 months",price:{low:500, high:1000}},
					{text:"More than 2 months",  price:{low:250, high:500}}
				],
				features:[
					{id:"seo",         price:{low:250,high:500}, text:"Search Engine Optimisation (SEO)"},
					{id:"smo",         price:{low:400,high:800}, text:"Social Media Optimisation (SMO)"},
					{id:"security",    price:{low:500,high:1000},text:"Security Setup"},
					{id:"caching",     price:{low:700,high:1400},text:"Caching & Compression Setup"},
					{id:"cdn",         price:{low:200,high:400}, text:"Content Delivery Network (CDN) Setup"},
					{id:"server",      price:{low:350,high:700}, text:"Server/Webhost Setup"},
					{id:"mail",        price:{low:150,high:300}, text:"Mail Setup"},
					{id:"gallery",     price:{low:250,high:500}, text:"Image/Sliders Gallery"},
					{id:"pagebuilder", price:{low:150,high:300}, text:"PageBuilder Configuration"},
					{id:"contactform", price:{low:150,high:300}, text:"Contact Form"},
					{id:"multilingual",price:{low:500,high:1000},text:"Multilingual Support"},
					{id:"backup",      price:{low:250,high:500}, text:"Backup (Offsite/Server side backup configuration)"}
				]
			}
		}
	},
	computed:{
	//Calculate Mimimum Price
		calcMin(){
			var copywriting = this.form.copywriting == "Yes" ? 2.5 : 1;
			var otherPrice = 0;
			for(var option in this.options) {
				if ("features" == option) {
					var featuresPrice = this.form[option].reduce((total,current)=>{
						var optionFeatures = this.options[option].filter(featureCheck => featureCheck.text == current);
						optionFeatures.forEach(check=>{
							otherPrice += check.price.low
						});
						return otherPrice;
					},0);
				}else{
					for(var index in this.options[option]){
						if(this.options[option][index].text == this.form[option]){
							otherPrice += this.options[option][index].price.low;
						}
					}
				}
			};
			//Calculate the price
			var minPrice = otherPrice + ((this.form.pages * 50) * copywriting);
			return minPrice;
		},
	//Calculate Maximum Price
		calcMax(){
			var copywriting = this.form.copywriting == "Yes" ? 5 : 1;
			var otherPrice = 0;
			for(var option in this.options) {
				if ("features" == option) {
					var featuresPrice = this.form[option].reduce((total,current)=>{
						var optionFeatures = this.options[option].filter(featureCheck => featureCheck.text == current);
						optionFeatures.forEach(check=>{
							otherPrice += check.price.high
						});
						return otherPrice;
					},0);
				}else{
					for(var index in this.options[option]) {
						if(this.options[option][index].text == this.form[option]){
							otherPrice += this.options[option][index].price.high;
						}
					}
				}
			};
			//Calculate the price
			var maxPrice = otherPrice + ((this.form.pages * 150) * copywriting);
			return maxPrice;
		},
	}
}
</script>
<style lang="scss">@import 'assets/css/style.scss'</style>
