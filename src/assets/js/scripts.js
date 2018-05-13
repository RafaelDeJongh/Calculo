import markDownComponent from '@/assets/content'
export default{
	components:markDownComponent,
	name:'app',
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
				configuration:false
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
					{id:"pagebuilder", price:{low:150,high:300}, text:"PageBuilder Intergration"},
					{id:"contactform", price:{low:150,high:300}, text:"Contact Form"},
					{id:"multilingual",price:{low:500,high:1000},text:"Multilingual Support"},
					{id:"backup",      price:{low:200,high:400}, text:"Backup (Offsite/Server side backup Intergration)"}
				],
				eCommerceFeatures:[
					{id:"pgw",         price:{low:250,high:500}, text:"Payment Gateway Intergration"},
					{id:"social",      price:{low:400,high:800}, text:"Social Login Intergration"},
					{id:"livesearch",  price:{low:300,high:600}, text:"Live Search Intergration"},
					{id:"livechat",    price:{low:500,high:1000},text:"Live Chat Intergration"},
					{id:"catalog",     price:{low:600,high:1200},text:"Catalogus Mode"},
					{id:"pos",         price:{low:800,high:2000},text:"Point Of Sale (POS)"},
				],
			}
		}
	},
	methods:{
		activateClass:function(vm){
			/*console.log(markDownComponent);*/
		},
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
			var copywriting = this.form.copywriting == "Yes" ? (isMin ? 2.5 : 5) : 1;
			//Calculate Features
				var otherPrice = 0;
				for(var option in this.options){
					if("features" == option){
						var featuresPrice = this.form[option].reduce((total,current)=>{
							var optionFeatures = this.options[option].filter(featureCheck => featureCheck.text == current);
							optionFeatures.forEach(check=>{otherPrice += isMin ? check.price.low : check.price.high;});
							return otherPrice;
						},0);
					}else if("eCommerceFeatures" == option){
						var featuresECPrice = this.form[option].reduce((total,current)=>{
							var optionECFeatures = this.options[option].filter(featureCheck => featureCheck.text == current);
							optionECFeatures.forEach(check=>{otherPrice += isMin ? check.price.low : check.price.high;});
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