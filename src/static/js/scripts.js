import markDownComponent from '@/static/content'
export default{
	name:'app',
	components:markDownComponent,
	data(){
		return{
			form:{
				sitetype:"Standard",
				designChoices:"Template",
				speed:"Around 1 to 2 months",
				pages:1,
				copywriting:"No",
				features:[],
				eCommerceFeatures:[],
				customFeatures:[],
				configuration:false,
				classActive:false
			},
			options:{
				sitetype:[
					{text:"Standard",         price:{low:500, high:800}},
					{text:"E-Commerce",       price:{low:1500,high:3000}},
					{text:"Custom Production",price:{low:4000,high:6000}}
				],
				designChoices:[
					{text:"Template",     price:{low:200, high:500}},
					{text:"Custom Design",price:{low:1000,high:2000}}
				],
				speed:[
					{text:"Less than 1 month",   price:{low:1500,high:2500}},
					{text:"Around 1 to 2 months",price:{low:500, high:1000}},
					{text:"More than 2 months",  price:{low:300, high:500}}
				],
				features:[
					{id:"seo",         price:{low:250,high:500}, text:"Search Engine Optimisation (SEO)",tooltipInfo:"Info about Search Engine Optimisation"},
					{id:"smo",         price:{low:350,high:700}, text:"Social Media Optimisation (SMO)",tooltipInfo:"Info about Social Media Optimisation"},
					{id:"security",    price:{low:450,high:900}, text:"Security Setup",tooltipInfo:"Info about the Security Setup"},
					{id:"caching",     price:{low:400,high:800}, text:"Caching & Compression Setup",tooltipInfo:"Info about Caching & Compression"},
					{id:"cdn",         price:{low:150,high:300}, text:"Content Delivery Network (CDN) Setup",tooltipInfo:"Info about Content Delivery Network"},
					{id:"server",      price:{low:300,high:600}, text:"Server/Webhost Setup",tooltipInfo:"Info about Server/Webhost Setup"},
					{id:"mail",        price:{low:150,high:200}, text:"Mail Setup",tooltipInfo:"Info about the Mail Setup"},
					{id:"gallery",     price:{low:100,high:300}, text:"Image/Sliders Gallery",tooltipInfo:"Info about Image & Slider Galleries"},
					{id:"pagebuilder", price:{low:200,high:400}, text:"PageBuilder Intergration",tooltipInfo:"Info about Pagebuilders"},
					{id:"contactform", price:{low:100,high:300}, text:"Contact Form",tooltipInfo:"Info about Contact Forms"},
					{id:"multilingual",price:{low:500,high:1000},text:"Multilingual Intergration",tooltipInfo:"Info about Multilanguage"},
					{id:"backup",      price:{low:250,high:500}, text:"Offsite Backup Intergration",tooltipInfo:"Info about Offsite Backup"}
				],
				eCommerceFeatures:[
					{id:"pgw",         price:{low:300,high:600}, text:"Payment Gateway Intergration",tooltipInfo:"Info about Payment Gateways"},
					{id:"social",      price:{low:400,high:800}, text:"Social Login Intergration",tooltipInfo:"Info about Social Login"},
					{id:"livesearch",  price:{low:300,high:600}, text:"Live Search Intergration",tooltipInfo:"Info about Live Search"},
					{id:"livechat",    price:{low:600,high:1200},text:"Live Chat Intergration",tooltipInfo:"Info about Live Chat"},
					{id:"catalog",     price:{low:500,high:1000},text:"Catalog Mode",tooltipInfo:"Info about Catalog Mode"},
					{id:"pos",         price:{low:800,high:2500},text:"Point Of Sale (POS)",tooltipInfo:"Info about POS Systems"},
				],
				customFeatures:[
					{id:"crm",          price:{low:1500,high:3500}, text:"Customer Relationship Management (CRM)",tooltipInfo:"Info about CRM"},
					{id:"invoice",      price:{low:1000,high:3000}, text:"Invoicing and Accounting Intergration",tooltipInfo:"Info about Invoicing and Accounting"},
					{id:"mailMarketing",price:{low:2000,high:4000}, text:"Email Marketing Intergration",tooltipInfo:"Info about Email Marketing"},
					{id:"helpdesk",     price:{low:2500,high:5000}, text:"Helpdesk Intergration",tooltipInfo:"Info about Helpdesks"},
				],
			}
		}
	},
	methods:{
		//Give active class to toggled collapse elements
		activateClass:function(event){event.target.parentElement.classList.toggle("active")},
		//Keep the accordion from closing on double toggle
		alwaysOpen:function(){
			for(var i in this.$refs){
				if(true == this.$refs[i].status){
					this.$refs[i].close();
				}
			}
		},
		calcPrice(isMin){
		//Calculate CopyWriting
			var copywriting = this.form.copywriting == "Yes" ? (isMin ? 2.5 : 2) : 1;
			//Calculate Features
				var otherPrice = 0;
				for(var option in this.options){
					if("features" == option || "eCommerceFeatures" == option || "customFeatures" == option){
						var featuresPrice = this.form[option].reduce((total,current)=>{
							var optionFeatures = this.options[option].filter(featureCheck => featureCheck.text == current);
							optionFeatures.forEach(check=>{otherPrice += isMin ? check.price.low : check.price.high;});
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
				var price = otherPrice + ((this.form.pages * (isMin ? 50 : 100)) * copywriting);
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