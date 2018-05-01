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
		return{designChoices:"template"}
	}
}
</script>
<style>
/*Content Table:
------------------
Rafael De Jongh's Personal Reset v0.3 - github.com/RafaelDeJongh/Rafael-CSS-Reset */
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,a,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,summary,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;font:inherit;vertical-align:baseline;background:transparent}html{height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*,::before,::after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}::before,::after{text-decoration:inherit;vertical-align:inherit;-webkit-backface-visibility:hidden}body{line-height:1;font-family:sans-serif;position:relative;height:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}nav{list-style:none}ul{list-style-type:disc;padding-left:25px}ol{list-style-type:decimal;padding-left:25px}blockquote,q{quotes:none;margin:1em}blockquote:before,blockquote:after,q:before,q:after{content:none}address{margin:1.5em 0}summary{display:list-item}table{border-collapse:collapse;border-spacing:0}hr{display:block;box-sizing:content-box;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}h1,h2,h3,h4,h5,h6{clear:both;margin:.5em 0 .35em}h1{font-size:2em}h2{font-size:1.8em}h3{font-size:1.6em}h4{font-size:1.4em}h5{font-size:1.2em}h6{font-size:.9em}a{background:transparent;-webkit-text-decoration-skip:objects;text-decoration:none}a:active,a:hover{outline-width:0}b,strong,optgroup{font-weight:700}ins{text-decoration:underline}del{background-color:#f44336;text-decoration:line-through}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:700;text-decoration:none}abbr[title],dfn[title],acronym{text-decoration:none;border-bottom:1px dotted;cursor:help}dfn{font-style:italic}code,kbd,tt,var,pre,samp{font-family:monospace,monospace;font-size:1em}pre{max-width:100%;overflow:auto;padding:.6em}input,select{vertical-align:middle}textarea{overflow:auto;resize:vertical}input,textarea,button{padding:.3em .5em}button,input,select,textarea{outline:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;cursor:pointer;border:none}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{outline:1px dotted ButtonText}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}::-webkit-input-placeholder{color:inherit;opacity:.54}[type="file"]{padding-left:0}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;border:none;outline:0;padding:.3em .5em;cursor:pointer}[disabled]{cursor:not-allowed}fieldset{border:1px solid #bbb;margin:.5em 0;padding:.8em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;white-space:normal;padding:0;border:0}img{display:block;border-style:none;height:auto;max-width:100%;-webkit-backface-visibility:hidden}svg:not(:root){overflow:hidden}video{height:55vw;width:100%;max-width:100%;min-height:65%}audio,canvas,progress,video,iframe{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}template,[hidden]{display:none}
/*Body
------------------*/
body{
	width:100%;
	min-height:100%;
	color:#fff;
	background-color:#2E2A29;
	font-family:'Montserrat',sans-serif;
	font-weight:400
}
/*Header
------------------*/
header{
	width:100%;
	box-shadow:0 2px 2px rgba(0,0,0,.2);
	margin-bottom:2em
}
header img{max-height:120px;margin:auto}
/*Content
-------------*/
main{
	margin:0 2em
}
section h1,section h2{
	text-align:center;
	margin:1em auto;
	padding:1em;
	font-weight:500
}
#price{
	color:#333;
	background:#ececec;
	border-radius:.5em;
	min-height:80vh;
	width:50%;
	margin:auto;
}
/*Columns
-------------*/
.cl{
	display:flex;
	flex-wrap:wrap;
	flex-direction:row;
	justify-content:space-between;
	align-items:stretch;
}
/*Price Calculator
-------------*/
#priceCalculator{
	position:fixed;
	position:sticky;
	top:40px;
	background:#c2b49a;
	width:20%;
	border-radius:6px;
	padding:1em 2em 2em;
	display:inline-block;
}
/*Forms
-------------*/
form.calcForm{
	width:50%;
	margin:auto;
	-webkit-touch-callout:none;
	  -webkit-user-select:none;
		 -moz-user-select:none;
		  -ms-user-select:none;
			  user-select:none;
}
.calcForm label{
	display:block;
	margin:1.5em 0 .8em;
}
form ul{
	list-style:none;
	padding:0;
}
ul#features{
	display:flex;
	flex-wrap:wrap;
	flex-direction:row;
	justify-content:flex-start;
	align-items:stretch;
}
ul#features li{width:50%}
/*Option Select*/
.selectbox{
	position:relative;
	display:inline-block;
	vertical-align:middle;
}
.selectbox select{
	background-color:#c2b49a;
	color:#fff;
	font-size:inherit;
	padding:.5em;
	padding-right:3em;
	min-width:200px;
	border:0;
	margin:0;
	border-radius:6px;
	-webkit-appearance:button;
	   -moz-appearance:button;
	cursor:pointer;
}
.selectbox::before,.selectbox::after{
	content:"";
	position:absolute;
	pointer-events:none;
}
.selectbox::after{
	content:"\f0dd";
	font-family:"FontAwesome";
	color:#fff;
	font-size:1.3em;
	line-height:.7;
	right:.5em;
	top:50%;
	margin-top:-.5em;
}
.selectbox::before{
	width:2em;
	right:0;
	top:0;
	bottom:0;
	border-radius:0 6px 6px 0;
	background-color:rgba(0,0,0,0.2);
	-webkit-transition:all .3s ease-out;
	   -moz-transition:all .3s ease-out;
			transition:all .3s ease-out;
}
.selectbox:hover::before{opacity:.8}
.selectbox select[disabled]{color:rgba(0,0,0,.3)}
.selectbox select[disabled]::after{color:rgba(0,0,0,.1)}
/*Number Input*/
input[type="number"]{
	position:relative;
	background:#c2b49a;
	border:none;
	color:#fff;
	border-radius:6px;
	padding:.5em;
	-webkit-appearance:button;
	   -moz-appearance:button;
}
input[type="number"]::-webkit-outer-spin-button, 
input[type="number"]::-webkit-inner-spin-button{
	-webkit-appearance:none;
	background:rgba(0,0,0,0.2)url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5IDkiPjxwYXRoIGQ9Ik0xLjkgNS4zaDUuMmMuNCAwIC41LjQuMy43TDQuOCA4LjZjLS4yLjItLjQuMi0uNiAwTDEuNiA2Yy0uMi0uMi0uMS0uNy4zLS43em01LjItMS43SDEuOWMtLjQgMC0uNS0uNC0uMy0uN0w0LjIuM2MuMi0uMi40LS4yLjYgMGwyLjYgMi42Yy4yLjMuMS43LS4zLjd6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbD0iI2JiYiIgZD0iTTAgNC4xaDl2LjhIMHoiLz48L3N2Zz4=) no-repeat center center;
	border-radius:0 6px 6px 0;
	width:1em;
	opacity:1;
	position:absolute;
	top:0;
	right:0;
	bottom:0;
	-webkit-transition:all .3s ease-out;
	   -moz-transition:all .3s ease-out;
			transition:all .3s ease-out;
	cursor:pointer;
	padding:0 2px
}
input[type="number"]::-webkit-inner-spin-button:hover,input[type="number"]::-webkit-inner-spin-button:active{opacity:.8}
/*Checkboxes and Radio Buttons*/
[type="checkbox"]:not(:checked),[type="checkbox"]:checked,[type="radio"]:not(:checked),[type="radio"]:checked{
	position:absolute;
	left:-9999px
}
[type="checkbox"]:not(:checked) + label,[type="checkbox"]:checked + label,[type="radio"]:not(:checked) + label,[type="radio"]:checked + label{
	position:relative;
	padding-left:35px;
	cursor:pointer;
	display:inline-block;
	text-transform:capitalize;
	font-size:15px
}
[type="checkbox"]:not(:checked) + label:before,[type="checkbox"]:checked + label:before,[type="checkbox"]:not(:checked) + label:after,[type="checkbox"]:checked + label:after,[type="radio"]:not(:checked) + label:before,[type="radio"]:checked + label:before,[type="radio"]:not(:checked) + label:after,[type="radio"]:checked + label:after{
	content:'';
	position:absolute
}
[type="checkbox"]:not(:checked) + label:before,[type="checkbox"]:checked + label:before,[type="radio"]:not(:checked) + label:before,[type="radio"]:checked + label:before{
	left:0;
	top:-4px;
	width:25px;
	height:25px;
	border:2px solid #c2b49a;
	border-radius:6px;
	transition:background-color .2s
}
[type="radio"]:not(:checked) + label:before,[type="radio"]:checked + label:before{
	border-radius:100%;
}
[type="checkbox"]:checked + label:before,[type="radio"]:checked + label:before{
	background:#c2b49a;
	border:2px solid #c2b49a
}
[type="checkbox"]:checked + label:before,[type="checkbox"]:not(:checked) + label:before,[type="radio"]:checked + label:before,[type="radio"]:not(:checked) + label:before{
	content:"";
	display:inline-block;
	width:25px;
	height:25px;
	position:absolute;
	background-repeat:no-repeat;
	background-position:center center;
	background-size:80%
}
[type="checkbox"]:checked + label:before,[type="radio"]:checked + label:before{
	background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTczLjkgNDM5LjRMNy41IDI3M2MtMTAtMTAtMTAtMjYuMiAwLTM2LjJsMzYuMi0zNi4yYzEwLTEwIDI2LjItMTAgMzYuMiAwTDE5MiAzMTIuNyA0MzIuMSA3Mi42YzEwLTEwIDI2LjItMTAgMzYuMiAwbDM2LjIgMzYuMmMxMCAxMCAxMCAyNi4yIDAgMzYuMkwyMTAuMSA0MzkuNGMtMTAgMTAtMjYuMiAxMC0zNi4yIDB6Ii8+PC9zdmc+)
}
[type="checkbox"]:checked + label:after,[type="radio"]:checked + label:after{
	border:0;
	outline:0;
	box-sizing:border-box
}
/*ToolTip*/
[tooltip-info]{
	position:relative;
	display:inline-block;
}
[tooltip-info]:after{
	content:attr(tooltip-info);
	display:inline-block;
	position:absolute;
	background:#444;
	min-width:14vw;
	width:auto;
	color:#fff;
	text-align:center;
	margin:auto;
	bottom:40px;
	left:-6.5vw;
	right:0;
	border-radius:5px;
	padding:.5em 1em;
	opacity:0;
	z-index:10;
	pointer-events:none;
	-webkit-transition:all .3s ease-out;
	   -moz-transition:all .3s ease-out;
			transition:all .3s ease-out;
}
[tooltip-info]:before{
	content:'';
	width:0;
	height:0;
	opacity:0;
	border-left:15px solid transparent;
	border-right:15px solid transparent;
	border-top:15px solid #444;
	pointer-events:none;
	-webkit-transition:all .3s ease-out;
	   -moz-transition:all .3s ease-out;
			transition:all .3s ease-out;
	position:absolute;
	z-index:10;
	bottom:25px;
	left:165px;
	left:calc(50% - 15px);
}
[tooltip-info]:hover:before,[tooltip-info]:hover:after{
	opacity:1;
	pointer-events:auto;
}
/*Footer
-------------*/
footer{
	font-weight:300;
	width:100%;
	text-align:center;
	margin:1em auto;
}
/*ToTop
---------------*/
#totop{
	color:#fff;
	padding:6px 7px;
	position:fixed;
	bottom:3%;
	right:2%;
	z-index:999;
	border-radius:5em;
	border:2px solid #c2b49a;
	background-color:#c2b49a;
	line-height:0;
	-webkit-transition:transform .3s ease,background .3s ease,color .3s ease;
	   -moz-transition:transform .3s ease,background .3s ease,color .3s ease;
			transition:transform .3s ease,background .3s ease,color .3s ease;
}
#totop:after{
	content:"";
	display:block;
	background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNi4xMDEgMzU5LjI5M0wyNS45IDM3OS4wOTJjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwTDIyNCAxOTguMzkzbDE4MS4xMyAxODAuNjk4YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMzIuNDg1IDEzMi45MDhjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2LjEwMSAzNDIuMzIyYy00LjY4NyA0LjY4Ny00LjY4NyAxMi4yODUgMCAxNi45NzF6Ii8+PC9zdmc+);
	background-size:cover;
	background-repeat:no-repeat;
	background-position-y:-2px;
	width:28px;
	height:28px;
}
#totop:hover{
	background-color:#fff;
	color:#c2b49a;
	-webkit-transform:scale(1.1);
		 -moz-transform:scale(1.1);
			transform:scale(1.1);
}
#totop:hover:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIiBmaWxsPSIjYzJiNDlhIj48cGF0aCBkPSJNNC40NjUgMzY2LjQ3NWw3LjA3IDcuMDcxYzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMEwyMjQgMTc4LjA1M2wxOTUuNDk0IDE5NS40OTNjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDcuMDctNy4wNzFjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTdsLTIxMS4wNS0yMTEuMDUxYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMNC40NjUgMzQ5LjUwNWMtNC42ODcgNC42ODYtNC42ODcgMTIuMjg0IDAgMTYuOTd6Ii8+PC9zdmc+)}
/*Fade*/
.fade-enter-active,.fade-leave-active{transition:all .5s}
.fade-enter,.fade-leave-to{opacity:0}
/*FadeInOnLoad
---------------*/
/*@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}
@-moz-keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
body{
	opacity:0;
	-webkit-animation:fadeIn ease-in 1;
		 -moz-animation:fadeIn ease-in 1;
			animation:fadeIn ease-in 1;
	-webkit-animation-fill-mode:forwards;
		 -moz-animation-fill-mode:forwards;
			animation-fill-mode:forwards;
	-webkit-animation-duration:.5s;
		 -moz-animation-duration:.5s;
			animation-duration:.5s;
	-webkit-animation-delay:.4s;
		 -moz-animation-delay:.4s;
			animation-delay:.4s;
}*/
/*MediaQueries
------------------*/
@media screen and(max-width:770px){}
@media screen and(max-width:480px){}
@media screen and(max-width:385px){}
/*Links
-------------*/
a,a:visited{
	color:#eee;
	text-decoration:none;
	-webkit-transition:all .3s ease-out;
	   -moz-transition:all .3s ease-out;
			transition:all .3s ease-out;
}
a:active,a:hover{color:#fff}
/*Scrollbar
-------------*/
::-webkit-scrollbar{width:12px;height:12px;background-color:rgba(0,0,0,.2)}
::-webkit-scrollbar-corner{background-color:rgba(0,0,0,.2)}
::-webkit-scrollbar-track{background-color:rgba(0,0,0,.2)}
::-webkit-scrollbar-thumb{background:#c2b49a;border-radius:5em}
/*Selection
-------------*/
::selection{color:#fff;background-color:#c2b49a}
::-moz-selection{color:#fff;background-color:#c2b49a}
</style>