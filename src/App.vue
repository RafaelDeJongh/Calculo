<template>
<div id="app">
	<header>
		<a href="./"><img src="./assets/images/webcalc-logo.svg" alt="Web Calc Logo"/></a>
	</header>
	<main id="webcalc">
		<section id="calculator">
		<aside id="priceCalculator">
			<h3>Estimated Price:</h3>
			<label>&euro;{{calcMin}} to &euro;{{calcMax}} excl. VAT</label>
		</aside>
			<h1>The Easy WordPress Website Price Calculator</h1>
			<form class="calcForm" action="#">
			<div class="cl">
				<!--Type of Site-->
				<div>
					<label for="sitetype">What type of site do you want? <a href="#siteInfo" v-scroll-to="'#siteInfo'" v-collapse-toggle="'siteInfo'" tooltip-info="Info about type of site."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
						<select id="sitetype" name="sitetype" v-model="form.sitetype">
							<option v-for="option in options.sitetype" v-bind:value="option.text">{{option.text}}</option>
						</select>
						
					</div>
				</div>
				<!--Design Choise-->
				<div>
					<label for="design">What kind of design? <a href="#designInfo" v-scroll-to="'#designInfo'" v-collapse-toggle="'designInfo'" tooltip-info="Info about what kind of design you need."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="design" name="design" v-model="form.designChoices">
						<option v-for="option in options.designChoices" v-bind:value="option.text">{{option.text}}</option>
					</select>
					</div>
				</div>
				<!--Development Speed-->
				<div>
					<label for="speed">How fast do you need it build? <a href="#speedInfo" v-scroll-to="'#speedInfo'" v-collapse-toggle="'speedInfo'" tooltip-info="Info about how fast you want the website to be made."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="speed" name="speed" v-model="form.speed">
						<option v-for="option in options.speed" v-bind:value="option.text">{{option.text}}</option>
					</select>
					</div>
				</div>
			</div>
			<!--Amount of Pages-->
			<div class="cl">
				<div>
					<label for="amountPages">How many pages do you require? <a href="#pageInfo" v-on:click="alwaysOpen" v-scroll-to="'#pageInfo'" v-collapse-toggle="'pageInfo'" tooltip-info="Info about how much pages you require."><i class="fas fa-info-circle"></i></a></label>
					<input id="amountPages" name="amountPages" type="number" value="1" min="1" max="250" v-model="form.pages">
				</div>
				<!--CopyWriting-->
				<div>
					<label for="copywriting">Do your pages need copywriting? <a href="#copywritingInfo" v-on:click="alwaysOpen" v-scroll-to="'#copywritingInfo'" v-collapse-toggle="'pageInfo'" tooltip-info="Info about if you require your pages to be copyrighted."><i class="fas fa-info-circle"></i></a></label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-yes" value="Yes" v-model="form.copywriting"><label for="copywrite-yes">Yes</label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-no" value="No" v-model="form.copywriting"><label for="copywrite-no">No</label>
				</div>
			</div>
				<!--Features-->
				<label for="features">Do you require any of the following features?  <a href="#featuresInfo" v-scroll-to="'#featuresInfo'" v-collapse-toggle="'featuresInfo'" tooltip-info="Select all the features you think you will require."><i class="fas fa-info-circle"></i></a></label>
				<ul id="features">
					<li v-for="option in options.features"><input class="features" name="features" type="checkbox" v-bind:id="option.id" v-bind:value="option.text" v-model="form.features"><label v-bind:for="option.id">{{option.text}}</label></li>
				</ul>
				</form>
			<transition name="fade">
			<section id="siteresults" v-if="form.designChoices == 'Custom Design'">
				<h2>Your currently configured site</h2>
				<ul>
					<li v-for="(item,f) in form"><strong>{{f}}:</strong>&nbsp;{{item}}</li>
				</ul>
			</section>
			</transition>
		</section>
		<section id="price">
			<h2>What am I exactly paying for?</h2>
			<p>Websites never have a specific price, especially not a solid price range for any web project you want to be created for you. Even if you ask for a website with the same features, the cost can vary depending on a number of external factors, most importantly depending on the developer.</p>
			<p>That’s why this website calculator exists, it’s really hard (or even impossible) to put a proper price on a specific project, since every website is unique and has different requirements. It really comes down to the features you need for your website.</p>
			<p>However, we want to simplify this for you with this easy website calculator specifically made for estimating a given cost for a potential “WordPress” website.</p>
			<p>We therefore divided this in six chapters, being:</p>
		<v-collapse-group>
			<!--Site Types-->
			<v-collapse-wrapper ref="siteInfo">
				<h3 id="siteInfo" v-collapse-toggle>Site types</h3>
				<div v-collapse-content>
					<p>Here we have three categories for the site types:</p>
					<h4>Standard</h4>
					<p>A standard website is what most people would need, this can range from a portfolio website to a small business one pager or landing page. These kinds of websites can easily range from €800 to €2000 excl. VAT.</p>
					<p>The price can vary depending on the various features you select, but as an starting point it is what most clients will need.</p>
					<h4>E-Commerce</h4>
					<p>E-Commerce websites are a whole other story. A lot more thought needs to be added to creating an E-Commerce website, some features like Search Engine Optimisation (SEO), Social Media Optimisation (SMO) and Security are almost a definite must have, and can easily range from €3000 to €6000 excl. VAT.</p>
					<h4>Custom Production</h4>
					<p>Custom Production websites are the priciest and most advanced kind of website type. This allows the client to request a more specific website equipped with custom functionality that has to be created specifically for them.</p>
					<p>This is also the least picked option as the price for these kind of websites tends to be €8000 or even more than €10000 excl. VAT, as it requires a lot more hours to be put into the development.</p>
				</div>
			</v-collapse-wrapper>
			<!--Design Types-->
			<v-collapse-wrapper ref="designInfo">
				<h3 id="designInfo" v-collapse-toggle>Design types</h3>
				<div v-collapse-content>
					<p>With design types we could have a lot more options but we simplified it to two, making it more understandable for everyone. Here we have:</p>
					<h4>Template</h4>
					<p>Choosing a template allows faster developments and is more affordable. By choosing an existing template, your developer will focus on adjusting it to your needs, making the process easier for both parties.</p>
					<p>WordPress has currently over 2000 Free quality themes, and services like ThemeForest.Net can provide even more Premium themes to choose from. It really is one of the better choices to vastly lower the development cost of the actual website.</p>
					<h4>Custom Design</h4>
					<p>A Custom Design on the other hand is made completely from scratch. Both a design team and UI/UX expert will work on the theme to create that perfect and unique fit for you. This will increase the development cost quite a bit, but it set your website apart and allow it to better match your brand.</p>
				</div>
			</v-collapse-wrapper>
			<!--Speed-->
			<v-collapse-wrapper ref="speedInfo">
				<h3 id="speedInfo" v-collapse-toggle>Build speed</h3>
				<div v-collapse-content>
					<p>Build speed is definitely also a component that you have to take into account, the faster you want the website to be build, the more money it will cost as it has to take priority into account.</p>
					<p>Most websites are usually finished between one or two months, this depends of course on the requirements and features that the website needs.</p>
					<p>Providing more time for the development of the website in turns will decrease the price as you are providing the developers with more breathing room to create your website.</p>
					<p>This is in reverse if you want your website to be done very fast and then we’re speaking less than a month, this heavily increases the price as then full priority is given to the project and sometimes even requires additional developers to get the website with its features done in the provided time period.</p>
				</div>
			</v-collapse-wrapper>
			<!--Pages-->
			<v-collapse-wrapper ref="pageInfo">
				<h3 id="pageInfo" v-collapse-toggle>Amount of pages</h3>
				<div v-collapse-content>
					<p>A big part of the creation of the website is the pages. Depending on the number of pages the total amount can also drastically change.</p>
					<p>A default number of pages for a website is pretty much between 1 to 10 pages, and this is also a very reasonable number not only for the developer but also for your website visitors that they do not have to go through 100’s of pages.</p>
					<p>Of course, on some custom sites this is just required and this will also reflect on the total price asked for such a website.</p>
					<h3 id="copywritingInfo">Copywriting</h3>
					<p>Copywriting is in combination of the number of pages, a lot of pages require content and while a lot of clients tend to already know what they want on the pages, having the right content that fits properly for your website is not always the case.</p>
					<p>Having your pages copywritten is a good way to make sure all the content is in order which as well includes a good portion of Search Engine Optimisation (SEO) in it already to boost the website already with the content on the site itself.</p>
					<p>A proper copywritten page can do a lot of good things for your website as well for your visitors of your site.</p>
					<p>This attribute is also relative to the number of pages you select in this calculator.</p>
				</div>
			</v-collapse-wrapper>
			<!--Features-->
			<v-collapse-wrapper ref="featuresInfo">
				<h3 id="featuresInfo" v-collapse-toggle>Features</h3>
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
			<!--External Cost-->
			<v-collapse-wrapper ref="externalCostInfo">
				<h3 id="externalCostInfo" v-collapse-toggle>External Costs</h3>
				<div v-collapse-content>
					<p>A thing to keep in mind are external costs, these can vary from things you might already know to small things you did not even consider at first. But here we lay down three main categories being:</p>
					<h4>Domain</h4>
					<p>The domain is one of the most important parts of your site as it serves as your site's identity. This domain can pretty much be anything with a range of Top Level Domains (TLD’s) like .be, .com, .net, .org to even to the more silly ones like .space or .pizza. Each TLD comes with its yearly cost which can vary from a couple of euro’s to even 100’s of euro’s. However most of the time regular TLD ranges between €10 to €20 a year.</p>
					<h4>Webhost</h4>
					<p>The webhost is the second most important part of your site as this will be the location where your site is hosted upon. There are various different webhosts available over the whole world with their own pricing and services. Some are excellent, yet we can not say that about every webhost. We suggest you to stay away from big names like GoDaddy or HostGator, and pretty much every webhost owned by the conglomerate EIG.</p>
					<p>We personally can recommend SiteGround, A2Hosting for America and Neostrada for Europe.</p>
					<p>Prices can also differ quite intensively depending on also the requirements of the website, a standard website could easily be hosted on a Shared Webhost and can even cost as low as €0.50 cents but can also be around €20 euro a month.</p>
					<p>Resource intensive websites like E-Commerce or Custom Productions might even need to look for a  Virtual Private Servers or even Cloud/Dedicated Servers, which can cost easily €30 to €200 Euro a month.</p>
					<p>Webhosting really comes down to what the site requires of resources, a lot of sites are good with a shared webhost, however if you want proper speed and perfect uptime a managed VPS or Dedicated server might even be more something for you.</p>
					<p>In general the average hosting price is around €30 to €120 Euro a year.</p>
					<h4>Media &amp; Graphical Content</h4>
					<p>Content in types of movies, graphics, vectors, sounds that are required for the site are all things that are external costs and most of the time are outsourced.</p>
					<p>Therefore, take in consideration if you do not have a logo, corporate identity, etc… that you make sure to see this as an external cost.</p>
					<p>A lot of web agencies these days do provide a full circle service where you can let everything be build in-house but do make sure of this beforehand and know that this is separated from the actual web development cost of building the website.</p>
				</div>
			</v-collapse-wrapper>
		</v-collapse-group>
		</section>
	</main>
	<footer id="copyright">Copyright &copy;	{{new Date().getFullYear()}} | Web Calc | <a href="https://www.rafaeldejongh.com" target="_blank">www.RafaelDeJongh.com</a> | All Rights Reserved.</footer>
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
					{text:"Standard",         price:{low:550, high:750}},
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
					{text:"More than 2 months",  price:{low:300, high:500}}
				],
				features:[
					{id:"seo",         price:{low:250,high:500}, text:"Search Engine Optimisation (SEO)"},
					{id:"smo",         price:{low:350,high:700}, text:"Social Media Optimisation (SMO)"},
					{id:"security",    price:{low:500,high:1000},text:"Security Setup"},
					{id:"caching",     price:{low:500,high:1000},text:"Caching & Compression Setup"},
					{id:"cdn",         price:{low:150,high:300}, text:"Content Delivery Network (CDN) Setup"},
					{id:"server",      price:{low:400,high:800}, text:"Server/Webhost Setup"},
					{id:"mail",        price:{low:150,high:300}, text:"Mail Setup"},
					{id:"gallery",     price:{low:250,high:500}, text:"Image/Sliders Gallery"},
					{id:"pagebuilder", price:{low:150,high:300}, text:"PageBuilder Configuration"},
					{id:"contactform", price:{low:150,high:300}, text:"Contact Form"},
					{id:"multilingual",price:{low:500,high:1000},text:"Multilingual Support"},
					{id:"backup",      price:{low:200,high:400}, text:"Backup (Offsite/Server side backup configuration)"}
				]
			}
		}
	},
	methods:{
		//Keep the accordion from closing on double toggle
		alwaysOpen:function(){this.$refs.pageInfo.close();},
		calcPrice(isMin){
		//Calculate CopyWriting
			var copywriting = this.form.copywriting == "Yes" ? (isMin ? 2.5 : 5) : 1;
			//Calculate Features
				var otherPrice = 0;
				for(var option in this.options){
					if("features" == option){
						var featuresPrice = this.form[option].reduce((total,current)=>{
							var optionFeatures = this.options[option].filter(featureCheck => featureCheck.text == current);
							optionFeatures.forEach(check=>{
								otherPrice += isMin ? check.price.low : check.price.high;
							});
							return otherPrice;
						},0);
					}else{
					//Calculate Options
						for(var index in this.options[option]){
						var getOption = this.options[option][index];
							if(getOption.text == this.form[option]){
								otherPrice += isMin ? getOption.price.low : getOption.price.high;
							}
						}
					}
				};
				//Calculate The Total Price + Pages
				var price = otherPrice + ((this.form.pages * (isMin ? 50 : 120)) * copywriting);
				return price;
		}
	},
	computed:{
		//Calculate Mimimum Price
		calcMin(){return this.calcPrice(true);},
		//Calculate Maximum Price
		calcMax(){return this.calcPrice(false);}
	}
}
</script>
<style lang="scss">@import 'assets/css/style.scss'</style>
