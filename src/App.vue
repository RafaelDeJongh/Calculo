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
					<label for="sitetype">What type of site do you want? <a href="#siteInfo" v-on:click="alwaysOpen" v-scroll-to="'#siteInfo'" v-collapse-toggle="'siteInfo'" tooltip-info="Info about type of site."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
						<select id="sitetype" name="sitetype" v-model="form.sitetype">
							<option v-for="option in options.sitetype" v-bind:value="option.text">{{option.text}}</option>
						</select>
						
					</div>
				</div>
				<!--Design Choise-->
				<div>
					<label for="design">What kind of design? <a href="#designInfo" v-on:click="alwaysOpen" v-scroll-to="'#designInfo'" v-collapse-toggle="'designInfo'" tooltip-info="Info about what kind of design you need."><i class="fas fa-info-circle"></i></a></label>
					<div class="selectbox">
					<select id="design" name="design" v-model="form.designChoices">
						<option v-for="option in options.designChoices" v-bind:value="option.text">{{option.text}}</option>
					</select>
					</div>
				</div>
				<!--Development Speed-->
				<div>
					<label for="speed">How fast do you need it build? <a href="#speedInfo" v-on:click="alwaysOpen" v-scroll-to="'#speedInfo'" v-collapse-toggle="'speedInfo'" tooltip-info="Info about how fast you want the website to be made."><i class="fas fa-info-circle"></i></a></label>
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
					<!--<label for="amountPages">How many pages do you require? <a href="#pageInfo" v-on:click="alwaysOpen" v-scroll-to="'#pageInfo'" v-collapse-toggle="'pageInfo'" tooltip-info="Info about how much pages you require."><i class="fas fa-info-circle"></i></a></label>
					<input id="amountPages" name="amountPages" type="number" value="1" min="1" max="250" v-model="form.pages">-->
					<output for="rangeAmountPages">{{form.pages}}</output>
					<input name="rangeAmountPages" type="range" min="1" max="250" v-model="form.pages">
					
				</div>
				<!--CopyWriting-->
				<div>
					<label for="copywriting">Do your pages need copywriting? <a href="#copywritingInfo" v-on:click="alwaysOpen" v-scroll-to="'#copywritingInfo'" v-collapse-toggle="'copywritingInfo'" tooltip-info="Info about if you require your pages to be copyrighted."><i class="fas fa-info-circle"></i></a></label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-yes" value="Yes" v-model="form.copywriting"><label for="copywrite-yes">Yes</label>
					<input class="copywriting" name="copywriting" type="radio" id="copywrite-no" value="No" v-model="form.copywriting"><label for="copywrite-no">No</label>
				</div>
			</div>
				<!--Features-->
				<label for="features">Do you require any of the following features?  <a href="#featuresInfo" v-on:click="alwaysOpen" v-scroll-to="'#featuresInfo'" v-collapse-toggle="'featuresInfo'" tooltip-info="Select all the features you think you will require."><i class="fas fa-info-circle"></i></a></label>
				<ul id="features" class="features">
					<li v-for="option in options.features"><input class="features" name="features" type="checkbox" v-bind:id="option.id" v-bind:value="option.text" v-model="form.features"><label v-bind:for="option.id">{{option.text}}</label></li>
					<transition name="fade">
						<ul id="eCommerceFeatures" class="features" v-if="form.sitetype == 'E-Commerce'">
							<li v-for="option in options.eCommerceFeatures"><input class="eCommerceFeatures" name="eCommerceFeatures" type="checkbox" v-bind:id="option.id" v-bind:value="option.text" v-model="form.eCommerceFeatures"><label v-bind:for="option.id">{{option.text}}</label></li>
						</ul>
					</transition>
					<transition name="fade">
						<ul id="customFeatures" class="features" v-if="form.sitetype == 'Custom Production'">
							<li v-for="option in options.customFeatures"><input class="customFeatures" name="customFeatures" type="checkbox" v-bind:id="option.id" v-bind:value="option.text" v-model="form.customFeatures"><label v-bind:for="option.id">{{option.text}}</label></li>
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
		<section id="price">
			<introductionText></introductionText>
		<v-collapse-group>
			<!--Site Types-->
			<v-collapse-wrapper ref="siteInfo">
				<h3 id="siteInfo" v-collapse-toggle>Site Types</h3>
				<div v-collapse-content>
					<siteTypesText></siteTypesText>
				</div>
			</v-collapse-wrapper>
			<!--Design Types-->
			<v-collapse-wrapper ref="designInfo">
				<h3 id="designInfo" v-collapse-toggle>Design Types</h3>
				<div v-collapse-content>
					<designTypesText></designTypesText>
				</div>
			</v-collapse-wrapper>
			<!--Speed-->
			<v-collapse-wrapper ref="speedInfo">
				<h3 id="speedInfo" v-collapse-toggle>Build Speed</h3>
				<div v-collapse-content>
					<buildSpeedText></buildSpeedText>
				</div>
			</v-collapse-wrapper>
			<!--Pages-->
			<v-collapse-wrapper ref="pageInfo">
				<h3 id="pageInfo" v-collapse-toggle>Amount of Pages</h3>
				<div v-collapse-content>
					<amountOfPagesText></amountOfPagesText>
				</div>
			</v-collapse-wrapper>
			<!--Copywriting-->
			<v-collapse-wrapper ref="copywritingInfo">
				<h3 id="copywritingInfo" v-collapse-toggle>Copywriting</h3>
				<div v-collapse-content>
					<copywritingText></copywritingText>
				</div>
			</v-collapse-wrapper>
			<!--Features-->
			<v-collapse-wrapper ref="featuresInfo">
				<h3 id="featuresInfo" v-collapse-toggle>Features</h3>
				<div v-collapse-content>
					<featuresText></featuresText>
				</div>
			</v-collapse-wrapper>
			<!--External Cost-->
			<v-collapse-wrapper ref="externalCostInfo">
				<h3 id="externalCostInfo" v-collapse-toggle>External Costs</h3>
				<div v-collapse-content>
					<externalCostsText></externalCostsText>
				</div>
			</v-collapse-wrapper>
			<!--Rates-->
			<v-collapse-wrapper ref="externalCostInfo">
				<h3 id="externalCostInfo" v-collapse-toggle>Pricing &amp; Rates</h3>
				<div v-collapse-content>
					<ratesText></ratesText>
				</div>
			</v-collapse-wrapper>
		</v-collapse-group>
		</section>
	</main>
	<footer id="copyright">Copyright &copy; {{new Date().getFullYear()}} | Web Calc | <a href="https://www.rafaeldejongh.com" target="_blank">www.RafaelDeJongh.com</a> | All Rights Reserved.</footer>
	<back-to-top visibleoffset="250"><button id="totop"></button></back-to-top>
</div>
</template>
<script src="./assets/js/scripts.js"></script>
<style lang="scss" src="./assets/css/style.scss"></style>
