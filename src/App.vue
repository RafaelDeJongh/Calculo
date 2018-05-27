<template>
<div id="app">
	<main id="calculo">
		<section id="calculator">
			<header>
				<div>
					<a href="" v-scroll-to="'#app'">
						<h1>The Easy WordPress Website Price Calculator</h1>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1900 666" role="img" aria-label="[Calculo – The Easy WordPress Website Price Calculator]"><title>Calculo – The Easy WordPress Website Price Calculator</title><desc>Calculo is here to inform you about WordPress website prices. With our handy Website Calculator, you will easily be able to figure out what a WordPress website might cost you!</desc><path d="M510.87 176.75C507.3 172.78 363.45 24.37 353.39 13.8c-104.25 106-207.68 212.82-311.8 319 102.88 107.55 208 212.9 311.8 319.41 45-46.13 89.38-92.8 134.28-139.07C522 481 549.7 441 563.27 395.72c23.46-75.8.06-160.72-52.4-218.97zM353.12 44.5c24.26 25 48.25 50.18 72.38 75.33-47.09-16.72-98.63-15.83-145.79 0C304 94.47 328.65 69.59 353.12 44.5zm.13 576.93c-24.67-25-49.14-50.24-73.82-75.26a233.83 233.83 0 0 0 147.44.07c-24.61 24.95-49.08 50.1-73.62 75.19zM421 524c-69.91 27.62-153.81 8-206.51-44.76-23.96-24.71-125.13-127.32-144.11-146.31 48.39-48.8 96.51-98 145-146.68 59.63-62.1 165.05-76.77 237-28.17l6.19 4.37a158.88 158.88 0 0 1 43.78 109.66c0 87.5-62.13 158.79-149.06 159.09-55.4-.19-97-40.91-97-95.4s41.79-95.42 97.39-95.42c26.33 0 49.36 8.23 68.11 27.31l15.47-15.47c-20.4-22.37-50.67-33.56-84.23-33.56-69.43 0-120.76 49.69-120.76 117.14S283.6 452.94 352.7 452.94c99.21 0 171.41-81.12 171.41-180.83a180.52 180.52 0 0 0-8.75-55.68c22.38 33.37 35.83 72.78 36.09 113C553.6 412.58 500.48 496.41 421 524zm236.55-185.08c0-67.44 51.33-117.13 120.75-117.13 33.56 0 63.82 11.19 84.22 33.56l-15.46 15.47c-18.75-19.09-41.78-27.31-68.11-27.31-55.6 0-97.38 40.8-97.38 95.41s41.78 95.42 97.38 95.42c26.33 0 49.36-8.23 68.11-27.64l15.46 15.46c-20.4 22.37-50.66 33.89-84.55 33.89-69.09 0-120.42-49.68-120.42-117.13zm380 7.9v107.26h-22.37v-27c-10.53 17.76-30.93 28.62-59.55 28.62-39.15 0-63.17-20.4-63.17-50.34 0-26.65 17.11-49 66.79-49h54.94v-10.53c0-29.61-16.78-45.73-49-45.73-22.37 0-43.43 7.9-57.58 20.4l-10.53-17.44c17.44-14.81 43.11-23.36 70.41-23.36 44.73 0 70.06 22.37 70.06 67.12zm-23.36 55.27V373.8h-54.28c-33.56 0-44.42 13.16-44.42 30.92 0 20.07 16.12 32.58 43.76 32.58 26.32 0 45.75-12.51 54.94-35.21zM1101.05 210h23.36v244.08h-23.36zm71.06 157.55c0-51.66 37.51-87.85 89.16-87.85 29.28 0 54 11.52 67.78 34.22l-17.44 11.84c-11.84-17.44-30.27-25.66-50.34-25.66-37.83 0-65.47 27-65.47 67.45 0 40.79 27.64 67.44 65.47 67.44 20.07 0 38.5-7.89 50.34-25.33l17.44 11.84c-13.82 22.38-38.5 34.22-67.78 34.22-51.65 0-89.16-36.52-89.16-88.17zM1530.72 281v173.08h-22.37v-31.59c-12.17 21.06-34.54 33.23-62.18 33.23-44.09 0-73-24.67-73-74.36V281h23.36v98c0 36.85 19.08 55.6 52 55.6 36.19 0 58.9-23.36 58.9-62.84V281zm65.47-71h23.36v244.08h-23.36zm71.07 157.55c0-51.33 37.5-87.85 88.17-87.85s87.85 36.52 87.85 87.85-37.18 88.17-87.85 88.17-88.17-36.85-88.17-88.17zm152.33 0c0-40.47-27.31-67.45-64.16-67.45s-64.49 27-64.49 67.45 27.64 67.45 64.49 67.45 64.16-27 64.16-67.45z"/></svg>
					</a>
					<aside id="priceCalculator">
						<h2>Estimated Price:</h2>
						<label>&euro;{{calcMin}} to &euro;{{calcMax}} excl. VAT</label>
					</aside>
				</div>
			</header>
			<form class="calcForm" action="#">
			<div class="cl">
				<!--Type of Site-->
				<div>
					<label for="sitetype">Your type of site: <a href="#siteInfo" v-on:click="alwaysOpen" v-scroll-to="'#siteInfo'" v-collapse-toggle="'siteInfo'" tooltip-info="Info about the different type of sites."><i class="info-circle"></i></a></label>
					<div class="selectbox">
						<select id="sitetype" name="sitetype" v-model="form.sitetype">
							<option v-for="option in options.sitetype" v-bind:value="option.text">{{option.text}}</option>
						</select>
						
					</div>
				</div>
				<!--Design Choise-->
				<div>
					<label for="design">Your choice of design: <a href="#designInfo" v-on:click="alwaysOpen" v-scroll-to="'#designInfo'" v-collapse-toggle="'designInfo'" tooltip-info="Info about what kind of design you need."><i class="info-circle"></i></a></label>
					<div class="selectbox">
					<select id="design" name="design" v-model="form.designChoices">
						<option v-for="option in options.designChoices" v-bind:value="option.text">{{option.text}}</option>
					</select>
					</div>
				</div>
				<!--Development Speed-->
				<div>
					<label for="speed">How fast do you need it? <a href="#speedInfo" v-on:click="alwaysOpen" v-scroll-to="'#speedInfo'" v-collapse-toggle="'speedInfo'" class="tooltip-right" tooltip-info="Info about the development speed."><i class="info-circle"></i></a></label>
					<div class="selectbox">
					<select id="speed" name="speed" v-model="form.speed">
						<option v-for="option in options.speed" v-bind:value="option.text">{{option.text}}</option>
					</select>
					</div>
				</div>
			</div>
			<!--Amount of Pages-->
			<div class="cl">
				<div id="pages">
					<label for="amountPages">Page amount: <a href="#pageInfo" v-on:click="alwaysOpen" v-scroll-to="'#pageInfo'" v-collapse-toggle="'pageInfo'" tooltip-info="Info about how much pages you require."><i class="info-circle"></i></a></label>
					<input id="amountPages" name="amountPages" type="number" value="1" min="1" max="250" v-model="form.pages">
				</div>
				<!--CopyWriting-->
				<div id="copywriting">
					<label>Do you need copywriting? <a href="#copywritingInfo" v-on:click="alwaysOpen" v-scroll-to="'#copywritingInfo'" v-collapse-toggle="'pageInfo'" class="tooltip-right" tooltip-info="Info about if you require your pages to be copyrighted."><i class="info-circle"></i></a></label>
					<input name="copywriting" type="radio" id="copywrite-yes" value="Yes" v-model="form.copywriting"><label for="copywrite-yes">Yes</label>
					<input name="copywriting" type="radio" id="copywrite-no" value="No" v-model="form.copywriting"><label for="copywrite-no">No</label>
				</div>
			</div>
				<!--Features-->
				<label for="features">Which of these features will your site require? <a href="#featuresInfo" v-on:click="alwaysOpen" v-scroll-to="'#featuresInfo'" v-collapse-toggle="'featuresInfo'" tooltip-info="Select all the features you think you will require."><i class="info-circle"></i></a></label>
				<ul id="features" class="features">
					<li v-for="option in options.features"><input class="features" name="features" type="checkbox" v-bind:id="option.id" v-bind:value="option.text" v-model="form.features"><label v-bind:for="option.id">{{option.text}}</label> <a v-bind:href="'#info-'+option.id" v-on:click="alwaysOpen" v-scroll-to="'#info-'+option.id" v-collapse-toggle="'featuresInfo'" v-bind:tooltip-info="option.tooltipInfo"><i class="info-circle"></i></a></li>
					<transition name="fade">
						<ul id="eCommerceFeatures" class="features" v-if="form.sitetype == 'E-Commerce'">
							<li v-for="option in options.eCommerceFeatures"><input class="eCommerceFeatures" name="eCommerceFeatures" type="checkbox" v-bind:id="option.id" v-bind:value="option.text" v-model="form.eCommerceFeatures"><label v-bind:for="option.id">{{option.text}}</label> <a v-bind:href="'#info-'+option.id" v-on:click="alwaysOpen" v-scroll-to="'#info-'+option.id" v-collapse-toggle="'eCommerceFeaturesInfo'" v-bind:tooltip-info="option.tooltipInfo"><i class="info-circle"></i></a></li>
						</ul>
					</transition>
					<transition name="fade">
						<ul id="customFeatures" class="features" v-if="form.sitetype == 'Custom Production'">
							<li v-for="option in options.customFeatures"><input class="customFeatures" name="customFeatures" type="checkbox" v-bind:id="option.id" v-bind:value="option.text" v-model="form.customFeatures"><label v-bind:for="option.id">{{option.text}}</label> <a v-bind:href="'#info-'+option.id" v-on:click="alwaysOpen" v-scroll-to="'#info-'+option.id" v-collapse-toggle="'customProductionFeaturesInfo'" v-bind:tooltip-info="option.tooltipInfo"><i class="info-circle"></i></a></li>
						</ul>
					</transition>
				</ul>
				</form>
			<transition name="fade">
			<section id="siteresults" v-if="form.configuration == true">
				<h2>Your currently configured site</h2>
				<ul>
					<li v-for="(item,f) in form"><strong>{{f}}:</strong>&nbsp;{{item}}</li>
				</ul>
			</section>
			</transition>
		</section>
		<!--Information-->
		<section id="price">
			<introductionText></introductionText>
		<v-collapse-group>
			<!--Site Types-->
			<v-collapse-wrapper ref="siteInfo" v-on:onStatusChange="activeClass">
				<h3 id="siteInfo" v-collapse-toggle >Site Types</h3>
				<div v-collapse-content>
					<siteTypesText></siteTypesText>
				</div>
			</v-collapse-wrapper>
			<!--Design Types-->
			<v-collapse-wrapper ref="designInfo" v-on:onStatusChange="activeClass">
				<h3 id="designInfo" v-collapse-toggle>Design Types</h3>
				<div v-collapse-content>
					<designTypesText></designTypesText>
				</div>
			</v-collapse-wrapper>
			<!--Speed-->
			<v-collapse-wrapper ref="speedInfo" v-on:onStatusChange="activeClass">
				<h3 id="speedInfo" v-collapse-toggle>Build Speed</h3>
				<div v-collapse-content>
					<buildSpeedText></buildSpeedText>
				</div>
			</v-collapse-wrapper>
			<!--Pages-->
			<v-collapse-wrapper ref="pageInfo" v-on:onStatusChange="activeClass">
				<h3 id="pageInfo" v-collapse-toggle>Pages &amp; Copywriting</h3>
				<div v-collapse-content>
					<amountOfPagesText></amountOfPagesText>
				</div>
			</v-collapse-wrapper>
			<!--Features-->
			<v-collapse-wrapper ref="featuresInfo" v-on:onStatusChange="activeClass">
				<h3 id="featuresInfo" v-collapse-toggle>Features</h3>
				<div v-collapse-content>
					<featuresText></featuresText>
				</div>
			</v-collapse-wrapper>
			<!--E-Commerce Features-->
			<transition name="fade">
			<v-collapse-wrapper ref="eCommerceFeaturesInfo" v-if="form.sitetype == 'E-Commerce'" v-on:onStatusChange="activeClass">
				<h3 id="eCommerceFeaturesInfo" v-collapse-toggle>E-Commerce Features</h3>
				<div v-collapse-content>
					<eCommerceFeaturesText></eCommerceFeaturesText>
				</div>
			</v-collapse-wrapper>
			</transition>
			<!--Custom Production Features-->
			<transition name="fade">
			<v-collapse-wrapper ref="customProductionFeaturesInfo" v-if="form.sitetype == 'Custom Production'" v-on:onStatusChange="activeClass">
				<h3 id="customProductionFeaturesInfo" v-collapse-toggle>Custom Production Features</h3>
				<div v-collapse-content>
					<customProductionText></customProductionText>
				</div>
			</v-collapse-wrapper>
			</transition>
			<!--External Cost-->
			<v-collapse-wrapper ref="externalCostInfo" v-on:onStatusChange="activeClass">
				<h3 id="externalCostInfo" v-collapse-toggle>External Costs</h3>
				<div v-collapse-content>
					<externalCostsText></externalCostsText>
				</div>
			</v-collapse-wrapper>
			<!--Rates-->
			<v-collapse-wrapper ref="ratesInfo" v-on:onStatusChange="activeClass">
				<h3 id="ratesInfo" v-collapse-toggle>Pricing &amp; Rates</h3>
				<div v-collapse-content>
					<ratesText></ratesText>
				</div>
			</v-collapse-wrapper>
			<!--Why WordPress-->
			<v-collapse-wrapper ref="WordPressInfo" v-on:onStatusChange="activeClass">
				<h3 id="WordPressInfo" v-collapse-toggle>Why WordPress?</h3>
				<div v-collapse-content>
					<WordPressText></WordPressText>
				</div>
			</v-collapse-wrapper>
		</v-collapse-group>
		</section>
	</main>
	<footer id="copyright">Copyright &copy; {{new Date().getFullYear()}} &ndash; Calculo &ndash; Developed by <a href="https://www.rafaeldejongh.com" target="_blank">RafaelDeJongh.com</a> &ndash; All Rights Reserved.</footer>
	<back-to-top visibleoffset="250" bottom="3%" right="2%"><svg id="totop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z"/></svg></back-to-top>
</div>
</template>
<script src="./static/js/scripts.js"></script>
<style lang="scss" src="./static/css/style.scss"></style>
