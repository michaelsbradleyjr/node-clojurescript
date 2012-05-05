goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2811 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2811))
{return or__3548__auto____2811;
} else
{var or__3548__auto____2812 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2812))
{return or__3548__auto____2812;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__2876 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____2813 = this$;

if(cljs.core.truth_(and__3546__auto____2813))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2813;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____2814 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2814))
{return or__3548__auto____2814;
} else
{var or__3548__auto____2815 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2815))
{return or__3548__auto____2815;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2877 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____2816 = this$;

if(cljs.core.truth_(and__3546__auto____2816))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2816;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____2817 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2817))
{return or__3548__auto____2817;
} else
{var or__3548__auto____2818 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2818))
{return or__3548__auto____2818;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__2878 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____2819 = this$;

if(cljs.core.truth_(and__3546__auto____2819))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2819;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____2820 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2820))
{return or__3548__auto____2820;
} else
{var or__3548__auto____2821 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2821))
{return or__3548__auto____2821;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__2879 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____2822 = this$;

if(cljs.core.truth_(and__3546__auto____2822))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2822;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____2823 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2823))
{return or__3548__auto____2823;
} else
{var or__3548__auto____2824 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2824))
{return or__3548__auto____2824;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__2880 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____2825 = this$;

if(cljs.core.truth_(and__3546__auto____2825))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2825;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____2826 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2826))
{return or__3548__auto____2826;
} else
{var or__3548__auto____2827 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2827))
{return or__3548__auto____2827;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__2881 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____2828 = this$;

if(cljs.core.truth_(and__3546__auto____2828))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2828;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____2829 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2829))
{return or__3548__auto____2829;
} else
{var or__3548__auto____2830 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2830))
{return or__3548__auto____2830;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__2882 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____2831 = this$;

if(cljs.core.truth_(and__3546__auto____2831))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2831;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____2832 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2832))
{return or__3548__auto____2832;
} else
{var or__3548__auto____2833 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2833))
{return or__3548__auto____2833;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__2883 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____2834 = this$;

if(cljs.core.truth_(and__3546__auto____2834))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2834;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____2835 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2835))
{return or__3548__auto____2835;
} else
{var or__3548__auto____2836 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2836))
{return or__3548__auto____2836;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__2884 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____2837 = this$;

if(cljs.core.truth_(and__3546__auto____2837))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2837;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____2838 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2838))
{return or__3548__auto____2838;
} else
{var or__3548__auto____2839 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2839))
{return or__3548__auto____2839;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__2885 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____2840 = this$;

if(cljs.core.truth_(and__3546__auto____2840))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2840;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____2841 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2841))
{return or__3548__auto____2841;
} else
{var or__3548__auto____2842 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2842))
{return or__3548__auto____2842;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__2886 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____2843 = this$;

if(cljs.core.truth_(and__3546__auto____2843))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2843;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____2844 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2844))
{return or__3548__auto____2844;
} else
{var or__3548__auto____2845 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2845))
{return or__3548__auto____2845;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__2887 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____2846 = this$;

if(cljs.core.truth_(and__3546__auto____2846))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2846;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____2847 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2847))
{return or__3548__auto____2847;
} else
{var or__3548__auto____2848 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2848))
{return or__3548__auto____2848;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__2888 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____2849 = this$;

if(cljs.core.truth_(and__3546__auto____2849))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2849;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____2850 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2850))
{return or__3548__auto____2850;
} else
{var or__3548__auto____2851 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2851))
{return or__3548__auto____2851;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__2889 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____2852 = this$;

if(cljs.core.truth_(and__3546__auto____2852))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2852;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____2853 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2853))
{return or__3548__auto____2853;
} else
{var or__3548__auto____2854 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2854))
{return or__3548__auto____2854;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__2890 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____2855 = this$;

if(cljs.core.truth_(and__3546__auto____2855))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2855;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____2856 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2856))
{return or__3548__auto____2856;
} else
{var or__3548__auto____2857 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2857))
{return or__3548__auto____2857;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__2891 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____2858 = this$;

if(cljs.core.truth_(and__3546__auto____2858))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2858;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____2859 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2859))
{return or__3548__auto____2859;
} else
{var or__3548__auto____2860 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2860))
{return or__3548__auto____2860;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__2892 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____2861 = this$;

if(cljs.core.truth_(and__3546__auto____2861))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2861;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____2862 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2862))
{return or__3548__auto____2862;
} else
{var or__3548__auto____2863 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2863))
{return or__3548__auto____2863;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__2893 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____2864 = this$;

if(cljs.core.truth_(and__3546__auto____2864))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2864;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____2865 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2865))
{return or__3548__auto____2865;
} else
{var or__3548__auto____2866 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2866))
{return or__3548__auto____2866;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__2894 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____2867 = this$;

if(cljs.core.truth_(and__3546__auto____2867))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2867;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____2868 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2868))
{return or__3548__auto____2868;
} else
{var or__3548__auto____2869 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2869))
{return or__3548__auto____2869;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__2895 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____2870 = this$;

if(cljs.core.truth_(and__3546__auto____2870))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2870;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____2871 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2871))
{return or__3548__auto____2871;
} else
{var or__3548__auto____2872 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2872))
{return or__3548__auto____2872;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__2896 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____2873 = this$;

if(cljs.core.truth_(and__3546__auto____2873))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2873;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____2874 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2874))
{return or__3548__auto____2874;
} else
{var or__3548__auto____2875 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2875))
{return or__3548__auto____2875;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__2876.call(this,this$);
case  2 :
return _invoke__2877.call(this,this$,a);
case  3 :
return _invoke__2878.call(this,this$,a,b);
case  4 :
return _invoke__2879.call(this,this$,a,b,c);
case  5 :
return _invoke__2880.call(this,this$,a,b,c,d);
case  6 :
return _invoke__2881.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__2882.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__2883.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__2884.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__2885.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__2886.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__2887.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__2888.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__2889.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__2890.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__2891.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__2892.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__2893.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__2894.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__2895.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__2896.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2898 = coll;

if(cljs.core.truth_(and__3546__auto____2898))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2898;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2899 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2899))
{return or__3548__auto____2899;
} else
{var or__3548__auto____2900 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2900))
{return or__3548__auto____2900;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2901 = coll;

if(cljs.core.truth_(and__3546__auto____2901))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2901;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2902 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2902))
{return or__3548__auto____2902;
} else
{var or__3548__auto____2903 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2903))
{return or__3548__auto____2903;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2904 = coll;

if(cljs.core.truth_(and__3546__auto____2904))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2904;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2905 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2905))
{return or__3548__auto____2905;
} else
{var or__3548__auto____2906 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2906))
{return or__3548__auto____2906;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2913 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2907 = coll;

if(cljs.core.truth_(and__3546__auto____2907))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2907;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2908 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2908))
{return or__3548__auto____2908;
} else
{var or__3548__auto____2909 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2909))
{return or__3548__auto____2909;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2914 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2910 = coll;

if(cljs.core.truth_(and__3546__auto____2910))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2910;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2911 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2911))
{return or__3548__auto____2911;
} else
{var or__3548__auto____2912 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2912))
{return or__3548__auto____2912;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2913.call(this,coll,n);
case  3 :
return _nth__2914.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2916 = coll;

if(cljs.core.truth_(and__3546__auto____2916))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2916;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2917 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2917))
{return or__3548__auto____2917;
} else
{var or__3548__auto____2918 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2918))
{return or__3548__auto____2918;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2919 = coll;

if(cljs.core.truth_(and__3546__auto____2919))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2919;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2920 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2920))
{return or__3548__auto____2920;
} else
{var or__3548__auto____2921 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2921))
{return or__3548__auto____2921;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2928 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2922 = o;

if(cljs.core.truth_(and__3546__auto____2922))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2922;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2923 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2923))
{return or__3548__auto____2923;
} else
{var or__3548__auto____2924 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2924))
{return or__3548__auto____2924;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2929 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2925 = o;

if(cljs.core.truth_(and__3546__auto____2925))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2925;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2926 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2926))
{return or__3548__auto____2926;
} else
{var or__3548__auto____2927 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2927))
{return or__3548__auto____2927;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2928.call(this,o,k);
case  3 :
return _lookup__2929.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2931 = coll;

if(cljs.core.truth_(and__3546__auto____2931))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2931;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2932 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2932))
{return or__3548__auto____2932;
} else
{var or__3548__auto____2933 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2933))
{return or__3548__auto____2933;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2934 = coll;

if(cljs.core.truth_(and__3546__auto____2934))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2934;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2935 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2935))
{return or__3548__auto____2935;
} else
{var or__3548__auto____2936 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2936))
{return or__3548__auto____2936;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2937 = coll;

if(cljs.core.truth_(and__3546__auto____2937))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2937;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2938 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2938))
{return or__3548__auto____2938;
} else
{var or__3548__auto____2939 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2939))
{return or__3548__auto____2939;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2940 = coll;

if(cljs.core.truth_(and__3546__auto____2940))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2940;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2941 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2941))
{return or__3548__auto____2941;
} else
{var or__3548__auto____2942 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2942))
{return or__3548__auto____2942;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2943 = coll;

if(cljs.core.truth_(and__3546__auto____2943))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2943;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2944 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2944))
{return or__3548__auto____2944;
} else
{var or__3548__auto____2945 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2945))
{return or__3548__auto____2945;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2946 = coll;

if(cljs.core.truth_(and__3546__auto____2946))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2946;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2947 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2947))
{return or__3548__auto____2947;
} else
{var or__3548__auto____2948 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2948))
{return or__3548__auto____2948;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2949 = coll;

if(cljs.core.truth_(and__3546__auto____2949))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2949;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2950 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2950))
{return or__3548__auto____2950;
} else
{var or__3548__auto____2951 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2951))
{return or__3548__auto____2951;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2952 = o;

if(cljs.core.truth_(and__3546__auto____2952))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2952;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2953 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2953))
{return or__3548__auto____2953;
} else
{var or__3548__auto____2954 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2954))
{return or__3548__auto____2954;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2955 = o;

if(cljs.core.truth_(and__3546__auto____2955))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2955;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2956 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2956))
{return or__3548__auto____2956;
} else
{var or__3548__auto____2957 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2957))
{return or__3548__auto____2957;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2958 = o;

if(cljs.core.truth_(and__3546__auto____2958))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2958;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2959 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2959))
{return or__3548__auto____2959;
} else
{var or__3548__auto____2960 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2960))
{return or__3548__auto____2960;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2961 = o;

if(cljs.core.truth_(and__3546__auto____2961))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2961;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2962 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2962))
{return or__3548__auto____2962;
} else
{var or__3548__auto____2963 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2963))
{return or__3548__auto____2963;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2970 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2964 = coll;

if(cljs.core.truth_(and__3546__auto____2964))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2964;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2965 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2965))
{return or__3548__auto____2965;
} else
{var or__3548__auto____2966 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2966))
{return or__3548__auto____2966;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2971 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2967 = coll;

if(cljs.core.truth_(and__3546__auto____2967))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2967;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2968 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2968))
{return or__3548__auto____2968;
} else
{var or__3548__auto____2969 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2969))
{return or__3548__auto____2969;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2970.call(this,coll,f);
case  3 :
return _reduce__2971.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2973 = o;

if(cljs.core.truth_(and__3546__auto____2973))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2973;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2974 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2974))
{return or__3548__auto____2974;
} else
{var or__3548__auto____2975 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2975))
{return or__3548__auto____2975;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2976 = o;

if(cljs.core.truth_(and__3546__auto____2976))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2976;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2977 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2977))
{return or__3548__auto____2977;
} else
{var or__3548__auto____2978 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2978))
{return or__3548__auto____2978;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2979 = o;

if(cljs.core.truth_(and__3546__auto____2979))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2979;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2980 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2980))
{return or__3548__auto____2980;
} else
{var or__3548__auto____2981 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2981))
{return or__3548__auto____2981;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2982 = o;

if(cljs.core.truth_(and__3546__auto____2982))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2982;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2983 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2983))
{return or__3548__auto____2983;
} else
{var or__3548__auto____2984 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2984))
{return or__3548__auto____2984;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2985 = d;

if(cljs.core.truth_(and__3546__auto____2985))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2985;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2986 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2986))
{return or__3548__auto____2986;
} else
{var or__3548__auto____2987 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2987))
{return or__3548__auto____2987;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2988 = this$;

if(cljs.core.truth_(and__3546__auto____2988))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2988;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2989 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2989))
{return or__3548__auto____2989;
} else
{var or__3548__auto____2990 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2990))
{return or__3548__auto____2990;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2991 = this$;

if(cljs.core.truth_(and__3546__auto____2991))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2991;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2992 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2992))
{return or__3548__auto____2992;
} else
{var or__3548__auto____2993 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2993))
{return or__3548__auto____2993;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2994 = this$;

if(cljs.core.truth_(and__3546__auto____2994))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2994;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2995 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2995))
{return or__3548__auto____2995;
} else
{var or__3548__auto____2996 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2996))
{return or__3548__auto____2996;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2997 = null;
var G__2997__2998 = (function (o,k){
return null;
});
var G__2997__2999 = (function (o,k,not_found){
return not_found;
});
G__2997 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2997__2998.call(this,o,k);
case  3 :
return G__2997__2999.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2997;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3001 = null;
var G__3001__3002 = (function (_,f){
return f.call(null);
});
var G__3001__3003 = (function (_,f,start){
return start;
});
G__3001 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3001__3002.call(this,_,f);
case  3 :
return G__3001__3003.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3001;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3005 = null;
var G__3005__3006 = (function (_,n){
return null;
});
var G__3005__3007 = (function (_,n,not_found){
return not_found;
});
G__3005 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3005__3006.call(this,_,n);
case  3 :
return G__3005__3007.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3005;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3015 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3009 = cljs.core._nth.call(null,cicoll,0);
var n__3010 = 1;

while(true){
if(cljs.core.truth_((n__3010 < cljs.core._count.call(null,cicoll))))
{{
var G__3019 = f.call(null,val__3009,cljs.core._nth.call(null,cicoll,n__3010));
var G__3020 = (n__3010 + 1);
val__3009 = G__3019;
n__3010 = G__3020;
continue;
}
} else
{return val__3009;
}
break;
}
}
});
var ci_reduce__3016 = (function (cicoll,f,val){
var val__3011 = val;
var n__3012 = 0;

while(true){
if(cljs.core.truth_((n__3012 < cljs.core._count.call(null,cicoll))))
{{
var G__3021 = f.call(null,val__3011,cljs.core._nth.call(null,cicoll,n__3012));
var G__3022 = (n__3012 + 1);
val__3011 = G__3021;
n__3012 = G__3022;
continue;
}
} else
{return val__3011;
}
break;
}
});
var ci_reduce__3017 = (function (cicoll,f,val,idx){
var val__3013 = val;
var n__3014 = idx;

while(true){
if(cljs.core.truth_((n__3014 < cljs.core._count.call(null,cicoll))))
{{
var G__3023 = f.call(null,val__3013,cljs.core._nth.call(null,cicoll,n__3014));
var G__3024 = (n__3014 + 1);
val__3013 = G__3023;
n__3014 = G__3024;
continue;
}
} else
{return val__3013;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3015.call(this,cicoll,f);
case  3 :
return ci_reduce__3016.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3017.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3025 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3038 = null;
var G__3038__3039 = (function (_,f){
var this__3026 = this;
return cljs.core.ci_reduce.call(null,this__3026.a,f,(this__3026.a[this__3026.i]),(this__3026.i + 1));
});
var G__3038__3040 = (function (_,f,start){
var this__3027 = this;
return cljs.core.ci_reduce.call(null,this__3027.a,f,start,this__3027.i);
});
G__3038 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3038__3039.call(this,_,f);
case  3 :
return G__3038__3040.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3038;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3028 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3029 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3042 = null;
var G__3042__3043 = (function (coll,n){
var this__3030 = this;
var i__3031 = (n + this__3030.i);

if(cljs.core.truth_((i__3031 < this__3030.a.length)))
{return (this__3030.a[i__3031]);
} else
{return null;
}
});
var G__3042__3044 = (function (coll,n,not_found){
var this__3032 = this;
var i__3033 = (n + this__3032.i);

if(cljs.core.truth_((i__3033 < this__3032.a.length)))
{return (this__3032.a[i__3033]);
} else
{return not_found;
}
});
G__3042 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3042__3043.call(this,coll,n);
case  3 :
return G__3042__3044.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3042;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3034 = this;
return (this__3034.a.length - this__3034.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3035 = this;
return (this__3035.a[this__3035.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3036 = this;
if(cljs.core.truth_(((this__3036.i + 1) < this__3036.a.length)))
{return (new cljs.core.IndexedSeq(this__3036.a,(this__3036.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3037 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3046 = null;
var G__3046__3047 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3046__3048 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3046 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3046__3047.call(this,array,f);
case  3 :
return G__3046__3048.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3046;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3050 = null;
var G__3050__3051 = (function (array,k){
return (array[k]);
});
var G__3050__3052 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3050 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3050__3051.call(this,array,k);
case  3 :
return G__3050__3052.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3050;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3054 = null;
var G__3054__3055 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3054__3056 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3054 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3054__3055.call(this,array,n);
case  3 :
return G__3054__3056.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3054;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3058 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3058))
{var s__3059 = temp__3698__auto____3058;

return cljs.core._first.call(null,s__3059);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3060 = cljs.core.next.call(null,s);
s = G__3060;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3061 = cljs.core.seq.call(null,x);
var n__3062 = 0;

while(true){
if(cljs.core.truth_(s__3061))
{{
var G__3063 = cljs.core.next.call(null,s__3061);
var G__3064 = (n__3062 + 1);
s__3061 = G__3063;
n__3062 = G__3064;
continue;
}
} else
{return n__3062;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3065 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3066 = (function() { 
var G__3068__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3069 = conj.call(null,coll,x);
var G__3070 = cljs.core.first.call(null,xs);
var G__3071 = cljs.core.next.call(null,xs);
coll = G__3069;
x = G__3070;
xs = G__3071;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3068 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3068__delegate.call(this, coll, x, xs);
};
G__3068.cljs$lang$maxFixedArity = 2;
G__3068.cljs$lang$applyTo = (function (arglist__3072){
var coll = cljs.core.first(arglist__3072);
var x = cljs.core.first(cljs.core.next(arglist__3072));
var xs = cljs.core.rest(cljs.core.next(arglist__3072));
return G__3068__delegate.call(this, coll, x, xs);
});
return G__3068;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3065.call(this,coll,x);
default:
return conj__3066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3066.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3073 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3074 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3073.call(this,coll,n);
case  3 :
return nth__3074.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3076 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3077 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3076.call(this,o,k);
case  3 :
return get__3077.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3080 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3081 = (function() { 
var G__3083__delegate = function (coll,k,v,kvs){
while(true){
var ret__3079 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3084 = ret__3079;
var G__3085 = cljs.core.first.call(null,kvs);
var G__3086 = cljs.core.second.call(null,kvs);
var G__3087 = cljs.core.nnext.call(null,kvs);
coll = G__3084;
k = G__3085;
v = G__3086;
kvs = G__3087;
continue;
}
} else
{return ret__3079;
}
break;
}
};
var G__3083 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3083__delegate.call(this, coll, k, v, kvs);
};
G__3083.cljs$lang$maxFixedArity = 3;
G__3083.cljs$lang$applyTo = (function (arglist__3088){
var coll = cljs.core.first(arglist__3088);
var k = cljs.core.first(cljs.core.next(arglist__3088));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3088)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3088)));
return G__3083__delegate.call(this, coll, k, v, kvs);
});
return G__3083;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3080.call(this,coll,k,v);
default:
return assoc__3081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3081.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3090 = (function (coll){
return coll;
});
var dissoc__3091 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3092 = (function() { 
var G__3094__delegate = function (coll,k,ks){
while(true){
var ret__3089 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3095 = ret__3089;
var G__3096 = cljs.core.first.call(null,ks);
var G__3097 = cljs.core.next.call(null,ks);
coll = G__3095;
k = G__3096;
ks = G__3097;
continue;
}
} else
{return ret__3089;
}
break;
}
};
var G__3094 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3094__delegate.call(this, coll, k, ks);
};
G__3094.cljs$lang$maxFixedArity = 2;
G__3094.cljs$lang$applyTo = (function (arglist__3098){
var coll = cljs.core.first(arglist__3098);
var k = cljs.core.first(cljs.core.next(arglist__3098));
var ks = cljs.core.rest(cljs.core.next(arglist__3098));
return G__3094__delegate.call(this, coll, k, ks);
});
return G__3094;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3090.call(this,coll);
case  2 :
return dissoc__3091.call(this,coll,k);
default:
return dissoc__3092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3092.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__351__auto____3099 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3100 = x__351__auto____3099;

if(cljs.core.truth_(and__3546__auto____3100))
{var and__3546__auto____3101 = x__351__auto____3099.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3101))
{return cljs.core.not.call(null,x__351__auto____3099.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3101;
}
} else
{return and__3546__auto____3100;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__351__auto____3099);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3103 = (function (coll){
return coll;
});
var disj__3104 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3105 = (function() { 
var G__3107__delegate = function (coll,k,ks){
while(true){
var ret__3102 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3108 = ret__3102;
var G__3109 = cljs.core.first.call(null,ks);
var G__3110 = cljs.core.next.call(null,ks);
coll = G__3108;
k = G__3109;
ks = G__3110;
continue;
}
} else
{return ret__3102;
}
break;
}
};
var G__3107 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3107__delegate.call(this, coll, k, ks);
};
G__3107.cljs$lang$maxFixedArity = 2;
G__3107.cljs$lang$applyTo = (function (arglist__3111){
var coll = cljs.core.first(arglist__3111);
var k = cljs.core.first(cljs.core.next(arglist__3111));
var ks = cljs.core.rest(cljs.core.next(arglist__3111));
return G__3107__delegate.call(this, coll, k, ks);
});
return G__3107;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3103.call(this,coll);
case  2 :
return disj__3104.call(this,coll,k);
default:
return disj__3105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3105.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__351__auto____3112 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3113 = x__351__auto____3112;

if(cljs.core.truth_(and__3546__auto____3113))
{var and__3546__auto____3114 = x__351__auto____3112.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3114))
{return cljs.core.not.call(null,x__351__auto____3112.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3114;
}
} else
{return and__3546__auto____3113;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__351__auto____3112);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__351__auto____3115 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3116 = x__351__auto____3115;

if(cljs.core.truth_(and__3546__auto____3116))
{var and__3546__auto____3117 = x__351__auto____3115.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3117))
{return cljs.core.not.call(null,x__351__auto____3115.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3117;
}
} else
{return and__3546__auto____3116;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__351__auto____3115);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__351__auto____3118 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3119 = x__351__auto____3118;

if(cljs.core.truth_(and__3546__auto____3119))
{var and__3546__auto____3120 = x__351__auto____3118.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3120))
{return cljs.core.not.call(null,x__351__auto____3118.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3120;
}
} else
{return and__3546__auto____3119;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__351__auto____3118);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__351__auto____3121 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3122 = x__351__auto____3121;

if(cljs.core.truth_(and__3546__auto____3122))
{var and__3546__auto____3123 = x__351__auto____3121.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3123))
{return cljs.core.not.call(null,x__351__auto____3121.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3123;
}
} else
{return and__3546__auto____3122;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__351__auto____3121);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__351__auto____3124 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3125 = x__351__auto____3124;

if(cljs.core.truth_(and__3546__auto____3125))
{var and__3546__auto____3126 = x__351__auto____3124.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3126))
{return cljs.core.not.call(null,x__351__auto____3124.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3126;
}
} else
{return and__3546__auto____3125;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__351__auto____3124);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__351__auto____3127 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3128 = x__351__auto____3127;

if(cljs.core.truth_(and__3546__auto____3128))
{var and__3546__auto____3129 = x__351__auto____3127.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3129))
{return cljs.core.not.call(null,x__351__auto____3127.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3129;
}
} else
{return and__3546__auto____3128;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__351__auto____3127);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__351__auto____3130 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3131 = x__351__auto____3130;

if(cljs.core.truth_(and__3546__auto____3131))
{var and__3546__auto____3132 = x__351__auto____3130.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3132))
{return cljs.core.not.call(null,x__351__auto____3130.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3132;
}
} else
{return and__3546__auto____3131;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__351__auto____3130);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3133 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3133.push(key);
}));
return keys__3133;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__351__auto____3134 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3135 = x__351__auto____3134;

if(cljs.core.truth_(and__3546__auto____3135))
{var and__3546__auto____3136 = x__351__auto____3134.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3136))
{return cljs.core.not.call(null,x__351__auto____3134.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3136;
}
} else
{return and__3546__auto____3135;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__351__auto____3134);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3137 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3137))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3138 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3137;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3139 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3139))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3139;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3140 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3140))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3140;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3141 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3141))
{return (n == n.toFixed());
} else
{return and__3546__auto____3141;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3142 = coll;

if(cljs.core.truth_(and__3546__auto____3142))
{var and__3546__auto____3143 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3143))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3143;
}
} else
{return and__3546__auto____3142;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3148 = (function (x){
return true;
});
var distinct_QMARK___3149 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3150 = (function() { 
var G__3152__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3144 = cljs.core.set([y,x]);
var xs__3145 = more;

while(true){
var x__3146 = cljs.core.first.call(null,xs__3145);
var etc__3147 = cljs.core.next.call(null,xs__3145);

if(cljs.core.truth_(xs__3145))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3144,x__3146)))
{return false;
} else
{{
var G__3153 = cljs.core.conj.call(null,s__3144,x__3146);
var G__3154 = etc__3147;
s__3144 = G__3153;
xs__3145 = G__3154;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3152 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3152__delegate.call(this, x, y, more);
};
G__3152.cljs$lang$maxFixedArity = 2;
G__3152.cljs$lang$applyTo = (function (arglist__3155){
var x = cljs.core.first(arglist__3155);
var y = cljs.core.first(cljs.core.next(arglist__3155));
var more = cljs.core.rest(cljs.core.next(arglist__3155));
return G__3152__delegate.call(this, x, y, more);
});
return G__3152;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3148.call(this,x);
case  2 :
return distinct_QMARK___3149.call(this,x,y);
default:
return distinct_QMARK___3150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3150.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3156 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3156)))
{return r__3156;
} else
{if(cljs.core.truth_(r__3156))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3158 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3159 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3157 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3157,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3157);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3158.call(this,comp);
case  2 :
return sort__3159.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3161 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3162 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3161.call(this,keyfn,comp);
case  3 :
return sort_by__3162.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3164 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3165 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3164.call(this,f,val);
case  3 :
return reduce__3165.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3171 = (function (f,coll){
var temp__3695__auto____3167 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3167))
{var s__3168 = temp__3695__auto____3167;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3168),cljs.core.next.call(null,s__3168));
} else
{return f.call(null);
}
});
var seq_reduce__3172 = (function (f,val,coll){
var val__3169 = val;
var coll__3170 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3170))
{{
var G__3174 = f.call(null,val__3169,cljs.core.first.call(null,coll__3170));
var G__3175 = cljs.core.next.call(null,coll__3170);
val__3169 = G__3174;
coll__3170 = G__3175;
continue;
}
} else
{return val__3169;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3171.call(this,f,val);
case  3 :
return seq_reduce__3172.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3176 = null;
var G__3176__3177 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3176__3178 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3176 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3176__3177.call(this,coll,f);
case  3 :
return G__3176__3178.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3176;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3180 = (function (){
return 0;
});
var _PLUS___3181 = (function (x){
return x;
});
var _PLUS___3182 = (function (x,y){
return (x + y);
});
var _PLUS___3183 = (function() { 
var G__3185__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3185 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3185__delegate.call(this, x, y, more);
};
G__3185.cljs$lang$maxFixedArity = 2;
G__3185.cljs$lang$applyTo = (function (arglist__3186){
var x = cljs.core.first(arglist__3186);
var y = cljs.core.first(cljs.core.next(arglist__3186));
var more = cljs.core.rest(cljs.core.next(arglist__3186));
return G__3185__delegate.call(this, x, y, more);
});
return G__3185;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3180.call(this);
case  1 :
return _PLUS___3181.call(this,x);
case  2 :
return _PLUS___3182.call(this,x,y);
default:
return _PLUS___3183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3183.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3187 = (function (x){
return (- x);
});
var ___3188 = (function (x,y){
return (x - y);
});
var ___3189 = (function() { 
var G__3191__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3191 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3191__delegate.call(this, x, y, more);
};
G__3191.cljs$lang$maxFixedArity = 2;
G__3191.cljs$lang$applyTo = (function (arglist__3192){
var x = cljs.core.first(arglist__3192);
var y = cljs.core.first(cljs.core.next(arglist__3192));
var more = cljs.core.rest(cljs.core.next(arglist__3192));
return G__3191__delegate.call(this, x, y, more);
});
return G__3191;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3187.call(this,x);
case  2 :
return ___3188.call(this,x,y);
default:
return ___3189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3189.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3193 = (function (){
return 1;
});
var _STAR___3194 = (function (x){
return x;
});
var _STAR___3195 = (function (x,y){
return (x * y);
});
var _STAR___3196 = (function() { 
var G__3198__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3198 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3198__delegate.call(this, x, y, more);
};
G__3198.cljs$lang$maxFixedArity = 2;
G__3198.cljs$lang$applyTo = (function (arglist__3199){
var x = cljs.core.first(arglist__3199);
var y = cljs.core.first(cljs.core.next(arglist__3199));
var more = cljs.core.rest(cljs.core.next(arglist__3199));
return G__3198__delegate.call(this, x, y, more);
});
return G__3198;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3193.call(this);
case  1 :
return _STAR___3194.call(this,x);
case  2 :
return _STAR___3195.call(this,x,y);
default:
return _STAR___3196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3196.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3200 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3201 = (function (x,y){
return (x / y);
});
var _SLASH___3202 = (function() { 
var G__3204__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3204 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3204__delegate.call(this, x, y, more);
};
G__3204.cljs$lang$maxFixedArity = 2;
G__3204.cljs$lang$applyTo = (function (arglist__3205){
var x = cljs.core.first(arglist__3205);
var y = cljs.core.first(cljs.core.next(arglist__3205));
var more = cljs.core.rest(cljs.core.next(arglist__3205));
return G__3204__delegate.call(this, x, y, more);
});
return G__3204;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3200.call(this,x);
case  2 :
return _SLASH___3201.call(this,x,y);
default:
return _SLASH___3202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3202.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3206 = (function (x){
return true;
});
var _LT___3207 = (function (x,y){
return (x < y);
});
var _LT___3208 = (function() { 
var G__3210__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3211 = y;
var G__3212 = cljs.core.first.call(null,more);
var G__3213 = cljs.core.next.call(null,more);
x = G__3211;
y = G__3212;
more = G__3213;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3210 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3210__delegate.call(this, x, y, more);
};
G__3210.cljs$lang$maxFixedArity = 2;
G__3210.cljs$lang$applyTo = (function (arglist__3214){
var x = cljs.core.first(arglist__3214);
var y = cljs.core.first(cljs.core.next(arglist__3214));
var more = cljs.core.rest(cljs.core.next(arglist__3214));
return G__3210__delegate.call(this, x, y, more);
});
return G__3210;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3206.call(this,x);
case  2 :
return _LT___3207.call(this,x,y);
default:
return _LT___3208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3208.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3215 = (function (x){
return true;
});
var _LT__EQ___3216 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3217 = (function() { 
var G__3219__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3220 = y;
var G__3221 = cljs.core.first.call(null,more);
var G__3222 = cljs.core.next.call(null,more);
x = G__3220;
y = G__3221;
more = G__3222;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3219 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3219__delegate.call(this, x, y, more);
};
G__3219.cljs$lang$maxFixedArity = 2;
G__3219.cljs$lang$applyTo = (function (arglist__3223){
var x = cljs.core.first(arglist__3223);
var y = cljs.core.first(cljs.core.next(arglist__3223));
var more = cljs.core.rest(cljs.core.next(arglist__3223));
return G__3219__delegate.call(this, x, y, more);
});
return G__3219;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3215.call(this,x);
case  2 :
return _LT__EQ___3216.call(this,x,y);
default:
return _LT__EQ___3217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3217.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3224 = (function (x){
return true;
});
var _GT___3225 = (function (x,y){
return (x > y);
});
var _GT___3226 = (function() { 
var G__3228__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3229 = y;
var G__3230 = cljs.core.first.call(null,more);
var G__3231 = cljs.core.next.call(null,more);
x = G__3229;
y = G__3230;
more = G__3231;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3228 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3228__delegate.call(this, x, y, more);
};
G__3228.cljs$lang$maxFixedArity = 2;
G__3228.cljs$lang$applyTo = (function (arglist__3232){
var x = cljs.core.first(arglist__3232);
var y = cljs.core.first(cljs.core.next(arglist__3232));
var more = cljs.core.rest(cljs.core.next(arglist__3232));
return G__3228__delegate.call(this, x, y, more);
});
return G__3228;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3224.call(this,x);
case  2 :
return _GT___3225.call(this,x,y);
default:
return _GT___3226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3226.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3233 = (function (x){
return true;
});
var _GT__EQ___3234 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3235 = (function() { 
var G__3237__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3238 = y;
var G__3239 = cljs.core.first.call(null,more);
var G__3240 = cljs.core.next.call(null,more);
x = G__3238;
y = G__3239;
more = G__3240;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3237 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3237__delegate.call(this, x, y, more);
};
G__3237.cljs$lang$maxFixedArity = 2;
G__3237.cljs$lang$applyTo = (function (arglist__3241){
var x = cljs.core.first(arglist__3241);
var y = cljs.core.first(cljs.core.next(arglist__3241));
var more = cljs.core.rest(cljs.core.next(arglist__3241));
return G__3237__delegate.call(this, x, y, more);
});
return G__3237;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3233.call(this,x);
case  2 :
return _GT__EQ___3234.call(this,x,y);
default:
return _GT__EQ___3235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3235.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3242 = (function (x){
return x;
});
var max__3243 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3244 = (function() { 
var G__3246__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3246 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3246__delegate.call(this, x, y, more);
};
G__3246.cljs$lang$maxFixedArity = 2;
G__3246.cljs$lang$applyTo = (function (arglist__3247){
var x = cljs.core.first(arglist__3247);
var y = cljs.core.first(cljs.core.next(arglist__3247));
var more = cljs.core.rest(cljs.core.next(arglist__3247));
return G__3246__delegate.call(this, x, y, more);
});
return G__3246;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3242.call(this,x);
case  2 :
return max__3243.call(this,x,y);
default:
return max__3244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3244.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3248 = (function (x){
return x;
});
var min__3249 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3250 = (function() { 
var G__3252__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3252 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3252__delegate.call(this, x, y, more);
};
G__3252.cljs$lang$maxFixedArity = 2;
G__3252.cljs$lang$applyTo = (function (arglist__3253){
var x = cljs.core.first(arglist__3253);
var y = cljs.core.first(cljs.core.next(arglist__3253));
var more = cljs.core.rest(cljs.core.next(arglist__3253));
return G__3252__delegate.call(this, x, y, more);
});
return G__3252;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3248.call(this,x);
case  2 :
return min__3249.call(this,x,y);
default:
return min__3250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3250.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__3254 = (n % d);

return cljs.core.fix.call(null,((n - rem__3254) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3255 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3255));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3256 = (function (){
return Math.random.call(null);
});
var rand__3257 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3256.call(this);
case  1 :
return rand__3257.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___3259 = (function (x){
return true;
});
var _EQ__EQ___3260 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3261 = (function() { 
var G__3263__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3264 = y;
var G__3265 = cljs.core.first.call(null,more);
var G__3266 = cljs.core.next.call(null,more);
x = G__3264;
y = G__3265;
more = G__3266;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3263 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3263__delegate.call(this, x, y, more);
};
G__3263.cljs$lang$maxFixedArity = 2;
G__3263.cljs$lang$applyTo = (function (arglist__3267){
var x = cljs.core.first(arglist__3267);
var y = cljs.core.first(cljs.core.next(arglist__3267));
var more = cljs.core.rest(cljs.core.next(arglist__3267));
return G__3263__delegate.call(this, x, y, more);
});
return G__3263;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3259.call(this,x);
case  2 :
return _EQ__EQ___3260.call(this,x,y);
default:
return _EQ__EQ___3261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3261.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__3268 = n;
var xs__3269 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3270 = xs__3269;

if(cljs.core.truth_(and__3546__auto____3270))
{return (n__3268 > 0);
} else
{return and__3546__auto____3270;
}
})()))
{{
var G__3271 = (n__3268 - 1);
var G__3272 = cljs.core.next.call(null,xs__3269);
n__3268 = G__3271;
xs__3269 = G__3272;
continue;
}
} else
{return xs__3269;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3277 = null;
var G__3277__3278 = (function (coll,n){
var temp__3695__auto____3273 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3273))
{var xs__3274 = temp__3695__auto____3273;

return cljs.core.first.call(null,xs__3274);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3277__3279 = (function (coll,n,not_found){
var temp__3695__auto____3275 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3275))
{var xs__3276 = temp__3695__auto____3275;

return cljs.core.first.call(null,xs__3276);
} else
{return not_found;
}
});
G__3277 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3277__3278.call(this,coll,n);
case  3 :
return G__3277__3279.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3277;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3281 = (function (){
return "";
});
var str_STAR___3282 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3283 = (function() { 
var G__3285__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3286 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3287 = cljs.core.next.call(null,more);
sb = G__3286;
more = G__3287;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3285 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3285__delegate.call(this, x, ys);
};
G__3285.cljs$lang$maxFixedArity = 1;
G__3285.cljs$lang$applyTo = (function (arglist__3288){
var x = cljs.core.first(arglist__3288);
var ys = cljs.core.rest(arglist__3288);
return G__3285__delegate.call(this, x, ys);
});
return G__3285;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3281.call(this);
case  1 :
return str_STAR___3282.call(this,x);
default:
return str_STAR___3283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3283.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3289 = (function (){
return "";
});
var str__3290 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__3291 = (function() { 
var G__3293__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3294 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3295 = cljs.core.next.call(null,more);
sb = G__3294;
more = G__3295;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3293 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3293__delegate.call(this, x, ys);
};
G__3293.cljs$lang$maxFixedArity = 1;
G__3293.cljs$lang$applyTo = (function (arglist__3296){
var x = cljs.core.first(arglist__3296);
var ys = cljs.core.rest(arglist__3296);
return G__3293__delegate.call(this, x, ys);
});
return G__3293;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3289.call(this);
case  1 :
return str__3290.call(this,x);
default:
return str__3291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3291.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3297 = (function (s,start){
return s.substring(start);
});
var subs__3298 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3297.call(this,s,start);
case  3 :
return subs__3298.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3300 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__3301 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3300.call(this,ns);
case  2 :
return symbol__3301.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3303 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__3304 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3303.call(this,ns);
case  2 :
return keyword__3304.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3306 = cljs.core.seq.call(null,x);
var ys__3307 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3306 === null)))
{return (ys__3307 === null);
} else
{if(cljs.core.truth_((ys__3307 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3306),cljs.core.first.call(null,ys__3307))))
{{
var G__3308 = cljs.core.next.call(null,xs__3306);
var G__3309 = cljs.core.next.call(null,ys__3307);
xs__3306 = G__3308;
ys__3307 = G__3309;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3310_SHARP_,p2__3311_SHARP_){
return cljs.core.hash_combine.call(null,p1__3310_SHARP_,cljs.core.hash.call(null,p2__3311_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3312__3313 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3312__3313))
{var G__3315__3317 = cljs.core.first.call(null,G__3312__3313);
var vec__3316__3318 = G__3315__3317;
var key_name__3319 = cljs.core.nth.call(null,vec__3316__3318,0,null);
var f__3320 = cljs.core.nth.call(null,vec__3316__3318,1,null);
var G__3312__3321 = G__3312__3313;

var G__3315__3322 = G__3315__3317;
var G__3312__3323 = G__3312__3321;

while(true){
var vec__3324__3325 = G__3315__3322;
var key_name__3326 = cljs.core.nth.call(null,vec__3324__3325,0,null);
var f__3327 = cljs.core.nth.call(null,vec__3324__3325,1,null);
var G__3312__3328 = G__3312__3323;

var str_name__3329 = cljs.core.name.call(null,key_name__3326);

obj[str_name__3329] = f__3327;
var temp__3698__auto____3330 = cljs.core.next.call(null,G__3312__3328);

if(cljs.core.truth_(temp__3698__auto____3330))
{var G__3312__3331 = temp__3698__auto____3330;

{
var G__3332 = cljs.core.first.call(null,G__3312__3331);
var G__3333 = G__3312__3331;
G__3315__3322 = G__3332;
G__3312__3323 = G__3333;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3334 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3335 = this;
return (new cljs.core.List(this__3335.meta,o,coll,(this__3335.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3336 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3337 = this;
return this__3337.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3338 = this;
return this__3338.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3339 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3340 = this;
return this__3340.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3341 = this;
return this__3341.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3342 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3343 = this;
return (new cljs.core.List(meta,this__3343.first,this__3343.rest,this__3343.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3344 = this;
return this__3344.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3345 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3346 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3347 = this;
return (new cljs.core.List(this__3347.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3348 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3349 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3350 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3351 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3352 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3353 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3354 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3355 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3356 = this;
return this__3356.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3357 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3358){
var items = cljs.core.seq( arglist__3358 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3359 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3360 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3362 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3362.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3363 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3364 = this;
return this__3364.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3365 = this;
if(cljs.core.truth_((this__3365.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3365.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3366 = this;
return this__3366.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3367 = this;
return (new cljs.core.Cons(meta,this__3367.first,this__3367.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3368 = null;
var G__3368__3369 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3368__3370 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3368 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3368__3369.call(this,string,f);
case  3 :
return G__3368__3370.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3368;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3372 = null;
var G__3372__3373 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3372__3374 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3372 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3372__3373.call(this,string,k);
case  3 :
return G__3372__3374.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3372;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3376 = null;
var G__3376__3377 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3376__3378 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3376 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3376__3377.call(this,string,n);
case  3 :
return G__3376__3378.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3376;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3386 = null;
var G__3386__3387 = (function (tsym3380,coll){
var tsym3380__3382 = this;

var this$__3383 = tsym3380__3382;

return cljs.core.get.call(null,coll,this$__3383.toString());
});
var G__3386__3388 = (function (tsym3381,coll,not_found){
var tsym3381__3384 = this;

var this$__3385 = tsym3381__3384;

return cljs.core.get.call(null,coll,this$__3385.toString(),not_found);
});
G__3386 = function(tsym3381,coll,not_found){
switch(arguments.length){
case  2 :
return G__3386__3387.call(this,tsym3381,coll);
case  3 :
return G__3386__3388.call(this,tsym3381,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3386;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3390 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3390;
} else
{lazy_seq.x = x__3390.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3391 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3392 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3393 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3394 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3394.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3395 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3396 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3397 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3398 = this;
return this__3398.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3399 = this;
return (new cljs.core.LazySeq(meta,this__3399.realized,this__3399.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3400 = [];

var s__3401 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3401)))
{ary__3400.push(cljs.core.first.call(null,s__3401));
{
var G__3402 = cljs.core.next.call(null,s__3401);
s__3401 = G__3402;
continue;
}
} else
{return ary__3400;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3403 = s;
var i__3404 = n;
var sum__3405 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3406 = (i__3404 > 0);

if(cljs.core.truth_(and__3546__auto____3406))
{return cljs.core.seq.call(null,s__3403);
} else
{return and__3546__auto____3406;
}
})()))
{{
var G__3407 = cljs.core.next.call(null,s__3403);
var G__3408 = (i__3404 - 1);
var G__3409 = (sum__3405 + 1);
s__3403 = G__3407;
i__3404 = G__3408;
sum__3405 = G__3409;
continue;
}
} else
{return sum__3405;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3413 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3414 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3415 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3410 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3410))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3410),concat.call(null,cljs.core.rest.call(null,s__3410),y));
} else
{return y;
}
})));
});
var concat__3416 = (function() { 
var G__3418__delegate = function (x,y,zs){
var cat__3412 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3411 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3411))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3411),cat.call(null,cljs.core.rest.call(null,xys__3411),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3412.call(null,concat.call(null,x,y),zs);
};
var G__3418 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3418__delegate.call(this, x, y, zs);
};
G__3418.cljs$lang$maxFixedArity = 2;
G__3418.cljs$lang$applyTo = (function (arglist__3419){
var x = cljs.core.first(arglist__3419);
var y = cljs.core.first(cljs.core.next(arglist__3419));
var zs = cljs.core.rest(cljs.core.next(arglist__3419));
return G__3418__delegate.call(this, x, y, zs);
});
return G__3418;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3413.call(this);
case  1 :
return concat__3414.call(this,x);
case  2 :
return concat__3415.call(this,x,y);
default:
return concat__3416.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3416.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3420 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3421 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3422 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3423 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3424 = (function() { 
var G__3426__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3426 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3426__delegate.call(this, a, b, c, d, more);
};
G__3426.cljs$lang$maxFixedArity = 4;
G__3426.cljs$lang$applyTo = (function (arglist__3427){
var a = cljs.core.first(arglist__3427);
var b = cljs.core.first(cljs.core.next(arglist__3427));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3427)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3427))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3427))));
return G__3426__delegate.call(this, a, b, c, d, more);
});
return G__3426;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3420.call(this,a);
case  2 :
return list_STAR___3421.call(this,a,b);
case  3 :
return list_STAR___3422.call(this,a,b,c);
case  4 :
return list_STAR___3423.call(this,a,b,c,d);
default:
return list_STAR___3424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3424.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3437 = (function (f,args){
var fixed_arity__3428 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3428 + 1)) <= fixed_arity__3428)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3438 = (function (f,x,args){
var arglist__3429 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3430 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3429,fixed_arity__3430) <= fixed_arity__3430)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3429));
} else
{return f.cljs$lang$applyTo(arglist__3429);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3429));
}
});
var apply__3439 = (function (f,x,y,args){
var arglist__3431 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3432 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3431,fixed_arity__3432) <= fixed_arity__3432)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3431));
} else
{return f.cljs$lang$applyTo(arglist__3431);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3431));
}
});
var apply__3440 = (function (f,x,y,z,args){
var arglist__3433 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3434 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3433,fixed_arity__3434) <= fixed_arity__3434)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3433));
} else
{return f.cljs$lang$applyTo(arglist__3433);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3433));
}
});
var apply__3441 = (function() { 
var G__3443__delegate = function (f,a,b,c,d,args){
var arglist__3435 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3436 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3435,fixed_arity__3436) <= fixed_arity__3436)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3435));
} else
{return f.cljs$lang$applyTo(arglist__3435);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3435));
}
};
var G__3443 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3443__delegate.call(this, f, a, b, c, d, args);
};
G__3443.cljs$lang$maxFixedArity = 5;
G__3443.cljs$lang$applyTo = (function (arglist__3444){
var f = cljs.core.first(arglist__3444);
var a = cljs.core.first(cljs.core.next(arglist__3444));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3444)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3444))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3444)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3444)))));
return G__3443__delegate.call(this, f, a, b, c, d, args);
});
return G__3443;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3437.call(this,f,a);
case  3 :
return apply__3438.call(this,f,a,b);
case  4 :
return apply__3439.call(this,f,a,b,c);
case  5 :
return apply__3440.call(this,f,a,b,c,d);
default:
return apply__3441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3441.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3445){
var obj = cljs.core.first(arglist__3445);
var f = cljs.core.first(cljs.core.next(arglist__3445));
var args = cljs.core.rest(cljs.core.next(arglist__3445));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3446 = (function (x){
return false;
});
var not_EQ___3447 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3448 = (function() { 
var G__3450__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3450 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3450__delegate.call(this, x, y, more);
};
G__3450.cljs$lang$maxFixedArity = 2;
G__3450.cljs$lang$applyTo = (function (arglist__3451){
var x = cljs.core.first(arglist__3451);
var y = cljs.core.first(cljs.core.next(arglist__3451));
var more = cljs.core.rest(cljs.core.next(arglist__3451));
return G__3450__delegate.call(this, x, y, more);
});
return G__3450;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3446.call(this,x);
case  2 :
return not_EQ___3447.call(this,x,y);
default:
return not_EQ___3448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3448.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3452 = pred;
var G__3453 = cljs.core.next.call(null,coll);
pred = G__3452;
coll = G__3453;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3454 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3454))
{return or__3548__auto____3454;
} else
{{
var G__3455 = pred;
var G__3456 = cljs.core.next.call(null,coll);
pred = G__3455;
coll = G__3456;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3457 = null;
var G__3457__3458 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3457__3459 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3457__3460 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3457__3461 = (function() { 
var G__3463__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3463 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3463__delegate.call(this, x, y, zs);
};
G__3463.cljs$lang$maxFixedArity = 2;
G__3463.cljs$lang$applyTo = (function (arglist__3464){
var x = cljs.core.first(arglist__3464);
var y = cljs.core.first(cljs.core.next(arglist__3464));
var zs = cljs.core.rest(cljs.core.next(arglist__3464));
return G__3463__delegate.call(this, x, y, zs);
});
return G__3463;
})()
;
G__3457 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3457__3458.call(this);
case  1 :
return G__3457__3459.call(this,x);
case  2 :
return G__3457__3460.call(this,x,y);
default:
return G__3457__3461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3457.cljs$lang$maxFixedArity = 2;
G__3457.cljs$lang$applyTo = G__3457__3461.cljs$lang$applyTo;
return G__3457;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3465__delegate = function (args){
return x;
};
var G__3465 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3465__delegate.call(this, args);
};
G__3465.cljs$lang$maxFixedArity = 0;
G__3465.cljs$lang$applyTo = (function (arglist__3466){
var args = cljs.core.seq( arglist__3466 );;
return G__3465__delegate.call(this, args);
});
return G__3465;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3470 = (function (){
return cljs.core.identity;
});
var comp__3471 = (function (f){
return f;
});
var comp__3472 = (function (f,g){
return (function() {
var G__3476 = null;
var G__3476__3477 = (function (){
return f.call(null,g.call(null));
});
var G__3476__3478 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3476__3479 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3476__3480 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3476__3481 = (function() { 
var G__3483__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3483 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3483__delegate.call(this, x, y, z, args);
};
G__3483.cljs$lang$maxFixedArity = 3;
G__3483.cljs$lang$applyTo = (function (arglist__3484){
var x = cljs.core.first(arglist__3484);
var y = cljs.core.first(cljs.core.next(arglist__3484));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3484)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3484)));
return G__3483__delegate.call(this, x, y, z, args);
});
return G__3483;
})()
;
G__3476 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3476__3477.call(this);
case  1 :
return G__3476__3478.call(this,x);
case  2 :
return G__3476__3479.call(this,x,y);
case  3 :
return G__3476__3480.call(this,x,y,z);
default:
return G__3476__3481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3476.cljs$lang$maxFixedArity = 3;
G__3476.cljs$lang$applyTo = G__3476__3481.cljs$lang$applyTo;
return G__3476;
})()
});
var comp__3473 = (function (f,g,h){
return (function() {
var G__3485 = null;
var G__3485__3486 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3485__3487 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3485__3488 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3485__3489 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3485__3490 = (function() { 
var G__3492__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3492 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3492__delegate.call(this, x, y, z, args);
};
G__3492.cljs$lang$maxFixedArity = 3;
G__3492.cljs$lang$applyTo = (function (arglist__3493){
var x = cljs.core.first(arglist__3493);
var y = cljs.core.first(cljs.core.next(arglist__3493));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3493)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3493)));
return G__3492__delegate.call(this, x, y, z, args);
});
return G__3492;
})()
;
G__3485 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3485__3486.call(this);
case  1 :
return G__3485__3487.call(this,x);
case  2 :
return G__3485__3488.call(this,x,y);
case  3 :
return G__3485__3489.call(this,x,y,z);
default:
return G__3485__3490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3485.cljs$lang$maxFixedArity = 3;
G__3485.cljs$lang$applyTo = G__3485__3490.cljs$lang$applyTo;
return G__3485;
})()
});
var comp__3474 = (function() { 
var G__3494__delegate = function (f1,f2,f3,fs){
var fs__3467 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3495__delegate = function (args){
var ret__3468 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3467),args);
var fs__3469 = cljs.core.next.call(null,fs__3467);

while(true){
if(cljs.core.truth_(fs__3469))
{{
var G__3496 = cljs.core.first.call(null,fs__3469).call(null,ret__3468);
var G__3497 = cljs.core.next.call(null,fs__3469);
ret__3468 = G__3496;
fs__3469 = G__3497;
continue;
}
} else
{return ret__3468;
}
break;
}
};
var G__3495 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3495__delegate.call(this, args);
};
G__3495.cljs$lang$maxFixedArity = 0;
G__3495.cljs$lang$applyTo = (function (arglist__3498){
var args = cljs.core.seq( arglist__3498 );;
return G__3495__delegate.call(this, args);
});
return G__3495;
})()
;
};
var G__3494 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3494__delegate.call(this, f1, f2, f3, fs);
};
G__3494.cljs$lang$maxFixedArity = 3;
G__3494.cljs$lang$applyTo = (function (arglist__3499){
var f1 = cljs.core.first(arglist__3499);
var f2 = cljs.core.first(cljs.core.next(arglist__3499));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3499)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3499)));
return G__3494__delegate.call(this, f1, f2, f3, fs);
});
return G__3494;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3470.call(this);
case  1 :
return comp__3471.call(this,f1);
case  2 :
return comp__3472.call(this,f1,f2);
case  3 :
return comp__3473.call(this,f1,f2,f3);
default:
return comp__3474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3474.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3500 = (function (f,arg1){
return (function() { 
var G__3505__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3505 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3505__delegate.call(this, args);
};
G__3505.cljs$lang$maxFixedArity = 0;
G__3505.cljs$lang$applyTo = (function (arglist__3506){
var args = cljs.core.seq( arglist__3506 );;
return G__3505__delegate.call(this, args);
});
return G__3505;
})()
;
});
var partial__3501 = (function (f,arg1,arg2){
return (function() { 
var G__3507__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3507 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3507__delegate.call(this, args);
};
G__3507.cljs$lang$maxFixedArity = 0;
G__3507.cljs$lang$applyTo = (function (arglist__3508){
var args = cljs.core.seq( arglist__3508 );;
return G__3507__delegate.call(this, args);
});
return G__3507;
})()
;
});
var partial__3502 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3509__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3509 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3509__delegate.call(this, args);
};
G__3509.cljs$lang$maxFixedArity = 0;
G__3509.cljs$lang$applyTo = (function (arglist__3510){
var args = cljs.core.seq( arglist__3510 );;
return G__3509__delegate.call(this, args);
});
return G__3509;
})()
;
});
var partial__3503 = (function() { 
var G__3511__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3512__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3512 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3512__delegate.call(this, args);
};
G__3512.cljs$lang$maxFixedArity = 0;
G__3512.cljs$lang$applyTo = (function (arglist__3513){
var args = cljs.core.seq( arglist__3513 );;
return G__3512__delegate.call(this, args);
});
return G__3512;
})()
;
};
var G__3511 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3511__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3511.cljs$lang$maxFixedArity = 4;
G__3511.cljs$lang$applyTo = (function (arglist__3514){
var f = cljs.core.first(arglist__3514);
var arg1 = cljs.core.first(cljs.core.next(arglist__3514));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3514)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3514))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3514))));
return G__3511__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3511;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3500.call(this,f,arg1);
case  3 :
return partial__3501.call(this,f,arg1,arg2);
case  4 :
return partial__3502.call(this,f,arg1,arg2,arg3);
default:
return partial__3503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3503.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3515 = (function (f,x){
return (function() {
var G__3519 = null;
var G__3519__3520 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3519__3521 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3519__3522 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3519__3523 = (function() { 
var G__3525__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3525 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3525__delegate.call(this, a, b, c, ds);
};
G__3525.cljs$lang$maxFixedArity = 3;
G__3525.cljs$lang$applyTo = (function (arglist__3526){
var a = cljs.core.first(arglist__3526);
var b = cljs.core.first(cljs.core.next(arglist__3526));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3526)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3526)));
return G__3525__delegate.call(this, a, b, c, ds);
});
return G__3525;
})()
;
G__3519 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3519__3520.call(this,a);
case  2 :
return G__3519__3521.call(this,a,b);
case  3 :
return G__3519__3522.call(this,a,b,c);
default:
return G__3519__3523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3519.cljs$lang$maxFixedArity = 3;
G__3519.cljs$lang$applyTo = G__3519__3523.cljs$lang$applyTo;
return G__3519;
})()
});
var fnil__3516 = (function (f,x,y){
return (function() {
var G__3527 = null;
var G__3527__3528 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3527__3529 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3527__3530 = (function() { 
var G__3532__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3532 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3532__delegate.call(this, a, b, c, ds);
};
G__3532.cljs$lang$maxFixedArity = 3;
G__3532.cljs$lang$applyTo = (function (arglist__3533){
var a = cljs.core.first(arglist__3533);
var b = cljs.core.first(cljs.core.next(arglist__3533));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3533)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3533)));
return G__3532__delegate.call(this, a, b, c, ds);
});
return G__3532;
})()
;
G__3527 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3527__3528.call(this,a,b);
case  3 :
return G__3527__3529.call(this,a,b,c);
default:
return G__3527__3530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3527.cljs$lang$maxFixedArity = 3;
G__3527.cljs$lang$applyTo = G__3527__3530.cljs$lang$applyTo;
return G__3527;
})()
});
var fnil__3517 = (function (f,x,y,z){
return (function() {
var G__3534 = null;
var G__3534__3535 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3534__3536 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3534__3537 = (function() { 
var G__3539__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3539 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3539__delegate.call(this, a, b, c, ds);
};
G__3539.cljs$lang$maxFixedArity = 3;
G__3539.cljs$lang$applyTo = (function (arglist__3540){
var a = cljs.core.first(arglist__3540);
var b = cljs.core.first(cljs.core.next(arglist__3540));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3540)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3540)));
return G__3539__delegate.call(this, a, b, c, ds);
});
return G__3539;
})()
;
G__3534 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3534__3535.call(this,a,b);
case  3 :
return G__3534__3536.call(this,a,b,c);
default:
return G__3534__3537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3534.cljs$lang$maxFixedArity = 3;
G__3534.cljs$lang$applyTo = G__3534__3537.cljs$lang$applyTo;
return G__3534;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3515.call(this,f,x);
case  3 :
return fnil__3516.call(this,f,x,y);
case  4 :
return fnil__3517.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3543 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3541 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3541))
{var s__3542 = temp__3698__auto____3541;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3542)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3542)));
} else
{return null;
}
})));
});

return mapi__3543.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3544 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3544))
{var s__3545 = temp__3698__auto____3544;

var x__3546 = f.call(null,cljs.core.first.call(null,s__3545));

if(cljs.core.truth_((x__3546 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3545));
} else
{return cljs.core.cons.call(null,x__3546,keep.call(null,f,cljs.core.rest.call(null,s__3545)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3556 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3553 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3553))
{var s__3554 = temp__3698__auto____3553;

var x__3555 = f.call(null,idx,cljs.core.first.call(null,s__3554));

if(cljs.core.truth_((x__3555 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3554));
} else
{return cljs.core.cons.call(null,x__3555,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3554)));
}
} else
{return null;
}
})));
});

return keepi__3556.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3601 = (function (p){
return (function() {
var ep1 = null;
var ep1__3606 = (function (){
return true;
});
var ep1__3607 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3608 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3563 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3563))
{return p.call(null,y);
} else
{return and__3546__auto____3563;
}
})());
});
var ep1__3609 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3564 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3564))
{var and__3546__auto____3565 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3565))
{return p.call(null,z);
} else
{return and__3546__auto____3565;
}
} else
{return and__3546__auto____3564;
}
})());
});
var ep1__3610 = (function() { 
var G__3612__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3566 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3566))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3566;
}
})());
};
var G__3612 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3612__delegate.call(this, x, y, z, args);
};
G__3612.cljs$lang$maxFixedArity = 3;
G__3612.cljs$lang$applyTo = (function (arglist__3613){
var x = cljs.core.first(arglist__3613);
var y = cljs.core.first(cljs.core.next(arglist__3613));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3613)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3613)));
return G__3612__delegate.call(this, x, y, z, args);
});
return G__3612;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3606.call(this);
case  1 :
return ep1__3607.call(this,x);
case  2 :
return ep1__3608.call(this,x,y);
case  3 :
return ep1__3609.call(this,x,y,z);
default:
return ep1__3610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3610.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3602 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3614 = (function (){
return true;
});
var ep2__3615 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3567 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3567))
{return p2.call(null,x);
} else
{return and__3546__auto____3567;
}
})());
});
var ep2__3616 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3568 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3568))
{var and__3546__auto____3569 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3569))
{var and__3546__auto____3570 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3570))
{return p2.call(null,y);
} else
{return and__3546__auto____3570;
}
} else
{return and__3546__auto____3569;
}
} else
{return and__3546__auto____3568;
}
})());
});
var ep2__3617 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3571 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3571))
{var and__3546__auto____3572 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3572))
{var and__3546__auto____3573 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3573))
{var and__3546__auto____3574 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3574))
{var and__3546__auto____3575 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3575))
{return p2.call(null,z);
} else
{return and__3546__auto____3575;
}
} else
{return and__3546__auto____3574;
}
} else
{return and__3546__auto____3573;
}
} else
{return and__3546__auto____3572;
}
} else
{return and__3546__auto____3571;
}
})());
});
var ep2__3618 = (function() { 
var G__3620__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3576 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3576))
{return cljs.core.every_QMARK_.call(null,(function (p1__3547_SHARP_){
var and__3546__auto____3577 = p1.call(null,p1__3547_SHARP_);

if(cljs.core.truth_(and__3546__auto____3577))
{return p2.call(null,p1__3547_SHARP_);
} else
{return and__3546__auto____3577;
}
}),args);
} else
{return and__3546__auto____3576;
}
})());
};
var G__3620 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3620__delegate.call(this, x, y, z, args);
};
G__3620.cljs$lang$maxFixedArity = 3;
G__3620.cljs$lang$applyTo = (function (arglist__3621){
var x = cljs.core.first(arglist__3621);
var y = cljs.core.first(cljs.core.next(arglist__3621));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3621)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3621)));
return G__3620__delegate.call(this, x, y, z, args);
});
return G__3620;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3614.call(this);
case  1 :
return ep2__3615.call(this,x);
case  2 :
return ep2__3616.call(this,x,y);
case  3 :
return ep2__3617.call(this,x,y,z);
default:
return ep2__3618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3618.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3603 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3622 = (function (){
return true;
});
var ep3__3623 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3578 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3578))
{var and__3546__auto____3579 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3579))
{return p3.call(null,x);
} else
{return and__3546__auto____3579;
}
} else
{return and__3546__auto____3578;
}
})());
});
var ep3__3624 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3580 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3580))
{var and__3546__auto____3581 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3581))
{var and__3546__auto____3582 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3582))
{var and__3546__auto____3583 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3583))
{var and__3546__auto____3584 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3584))
{return p3.call(null,y);
} else
{return and__3546__auto____3584;
}
} else
{return and__3546__auto____3583;
}
} else
{return and__3546__auto____3582;
}
} else
{return and__3546__auto____3581;
}
} else
{return and__3546__auto____3580;
}
})());
});
var ep3__3625 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3585 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3585))
{var and__3546__auto____3586 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3586))
{var and__3546__auto____3587 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3587))
{var and__3546__auto____3588 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3588))
{var and__3546__auto____3589 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3589))
{var and__3546__auto____3590 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3590))
{var and__3546__auto____3591 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3591))
{var and__3546__auto____3592 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3592))
{return p3.call(null,z);
} else
{return and__3546__auto____3592;
}
} else
{return and__3546__auto____3591;
}
} else
{return and__3546__auto____3590;
}
} else
{return and__3546__auto____3589;
}
} else
{return and__3546__auto____3588;
}
} else
{return and__3546__auto____3587;
}
} else
{return and__3546__auto____3586;
}
} else
{return and__3546__auto____3585;
}
})());
});
var ep3__3626 = (function() { 
var G__3628__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3593 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3593))
{return cljs.core.every_QMARK_.call(null,(function (p1__3548_SHARP_){
var and__3546__auto____3594 = p1.call(null,p1__3548_SHARP_);

if(cljs.core.truth_(and__3546__auto____3594))
{var and__3546__auto____3595 = p2.call(null,p1__3548_SHARP_);

if(cljs.core.truth_(and__3546__auto____3595))
{return p3.call(null,p1__3548_SHARP_);
} else
{return and__3546__auto____3595;
}
} else
{return and__3546__auto____3594;
}
}),args);
} else
{return and__3546__auto____3593;
}
})());
};
var G__3628 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3628__delegate.call(this, x, y, z, args);
};
G__3628.cljs$lang$maxFixedArity = 3;
G__3628.cljs$lang$applyTo = (function (arglist__3629){
var x = cljs.core.first(arglist__3629);
var y = cljs.core.first(cljs.core.next(arglist__3629));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3629)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3629)));
return G__3628__delegate.call(this, x, y, z, args);
});
return G__3628;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3622.call(this);
case  1 :
return ep3__3623.call(this,x);
case  2 :
return ep3__3624.call(this,x,y);
case  3 :
return ep3__3625.call(this,x,y,z);
default:
return ep3__3626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3626.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3604 = (function() { 
var G__3630__delegate = function (p1,p2,p3,ps){
var ps__3596 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3631 = (function (){
return true;
});
var epn__3632 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3549_SHARP_){
return p1__3549_SHARP_.call(null,x);
}),ps__3596);
});
var epn__3633 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3550_SHARP_){
var and__3546__auto____3597 = p1__3550_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3597))
{return p1__3550_SHARP_.call(null,y);
} else
{return and__3546__auto____3597;
}
}),ps__3596);
});
var epn__3634 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3551_SHARP_){
var and__3546__auto____3598 = p1__3551_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3598))
{var and__3546__auto____3599 = p1__3551_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3599))
{return p1__3551_SHARP_.call(null,z);
} else
{return and__3546__auto____3599;
}
} else
{return and__3546__auto____3598;
}
}),ps__3596);
});
var epn__3635 = (function() { 
var G__3637__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3600 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3600))
{return cljs.core.every_QMARK_.call(null,(function (p1__3552_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3552_SHARP_,args);
}),ps__3596);
} else
{return and__3546__auto____3600;
}
})());
};
var G__3637 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3637__delegate.call(this, x, y, z, args);
};
G__3637.cljs$lang$maxFixedArity = 3;
G__3637.cljs$lang$applyTo = (function (arglist__3638){
var x = cljs.core.first(arglist__3638);
var y = cljs.core.first(cljs.core.next(arglist__3638));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3638)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3638)));
return G__3637__delegate.call(this, x, y, z, args);
});
return G__3637;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3631.call(this);
case  1 :
return epn__3632.call(this,x);
case  2 :
return epn__3633.call(this,x,y);
case  3 :
return epn__3634.call(this,x,y,z);
default:
return epn__3635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3635.cljs$lang$applyTo;
return epn;
})()
};
var G__3630 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3630__delegate.call(this, p1, p2, p3, ps);
};
G__3630.cljs$lang$maxFixedArity = 3;
G__3630.cljs$lang$applyTo = (function (arglist__3639){
var p1 = cljs.core.first(arglist__3639);
var p2 = cljs.core.first(cljs.core.next(arglist__3639));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3639)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3639)));
return G__3630__delegate.call(this, p1, p2, p3, ps);
});
return G__3630;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3601.call(this,p1);
case  2 :
return every_pred__3602.call(this,p1,p2);
case  3 :
return every_pred__3603.call(this,p1,p2,p3);
default:
return every_pred__3604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3604.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3679 = (function (p){
return (function() {
var sp1 = null;
var sp1__3684 = (function (){
return null;
});
var sp1__3685 = (function (x){
return p.call(null,x);
});
var sp1__3686 = (function (x,y){
var or__3548__auto____3641 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3641))
{return or__3548__auto____3641;
} else
{return p.call(null,y);
}
});
var sp1__3687 = (function (x,y,z){
var or__3548__auto____3642 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3642))
{return or__3548__auto____3642;
} else
{var or__3548__auto____3643 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3643))
{return or__3548__auto____3643;
} else
{return p.call(null,z);
}
}
});
var sp1__3688 = (function() { 
var G__3690__delegate = function (x,y,z,args){
var or__3548__auto____3644 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3644))
{return or__3548__auto____3644;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3690 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3690__delegate.call(this, x, y, z, args);
};
G__3690.cljs$lang$maxFixedArity = 3;
G__3690.cljs$lang$applyTo = (function (arglist__3691){
var x = cljs.core.first(arglist__3691);
var y = cljs.core.first(cljs.core.next(arglist__3691));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3691)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3691)));
return G__3690__delegate.call(this, x, y, z, args);
});
return G__3690;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3684.call(this);
case  1 :
return sp1__3685.call(this,x);
case  2 :
return sp1__3686.call(this,x,y);
case  3 :
return sp1__3687.call(this,x,y,z);
default:
return sp1__3688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3688.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3680 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3692 = (function (){
return null;
});
var sp2__3693 = (function (x){
var or__3548__auto____3645 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3645))
{return or__3548__auto____3645;
} else
{return p2.call(null,x);
}
});
var sp2__3694 = (function (x,y){
var or__3548__auto____3646 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3646))
{return or__3548__auto____3646;
} else
{var or__3548__auto____3647 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3647))
{return or__3548__auto____3647;
} else
{var or__3548__auto____3648 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3648))
{return or__3548__auto____3648;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3695 = (function (x,y,z){
var or__3548__auto____3649 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3649))
{return or__3548__auto____3649;
} else
{var or__3548__auto____3650 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3650))
{return or__3548__auto____3650;
} else
{var or__3548__auto____3651 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3651))
{return or__3548__auto____3651;
} else
{var or__3548__auto____3652 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3652))
{return or__3548__auto____3652;
} else
{var or__3548__auto____3653 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3653))
{return or__3548__auto____3653;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3696 = (function() { 
var G__3698__delegate = function (x,y,z,args){
var or__3548__auto____3654 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3654))
{return or__3548__auto____3654;
} else
{return cljs.core.some.call(null,(function (p1__3557_SHARP_){
var or__3548__auto____3655 = p1.call(null,p1__3557_SHARP_);

if(cljs.core.truth_(or__3548__auto____3655))
{return or__3548__auto____3655;
} else
{return p2.call(null,p1__3557_SHARP_);
}
}),args);
}
};
var G__3698 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3698__delegate.call(this, x, y, z, args);
};
G__3698.cljs$lang$maxFixedArity = 3;
G__3698.cljs$lang$applyTo = (function (arglist__3699){
var x = cljs.core.first(arglist__3699);
var y = cljs.core.first(cljs.core.next(arglist__3699));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3699)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3699)));
return G__3698__delegate.call(this, x, y, z, args);
});
return G__3698;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3692.call(this);
case  1 :
return sp2__3693.call(this,x);
case  2 :
return sp2__3694.call(this,x,y);
case  3 :
return sp2__3695.call(this,x,y,z);
default:
return sp2__3696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3696.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3681 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3700 = (function (){
return null;
});
var sp3__3701 = (function (x){
var or__3548__auto____3656 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3656))
{return or__3548__auto____3656;
} else
{var or__3548__auto____3657 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3657))
{return or__3548__auto____3657;
} else
{return p3.call(null,x);
}
}
});
var sp3__3702 = (function (x,y){
var or__3548__auto____3658 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3658))
{return or__3548__auto____3658;
} else
{var or__3548__auto____3659 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3659))
{return or__3548__auto____3659;
} else
{var or__3548__auto____3660 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3660))
{return or__3548__auto____3660;
} else
{var or__3548__auto____3661 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3661))
{return or__3548__auto____3661;
} else
{var or__3548__auto____3662 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3662))
{return or__3548__auto____3662;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3703 = (function (x,y,z){
var or__3548__auto____3663 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3663))
{return or__3548__auto____3663;
} else
{var or__3548__auto____3664 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3664))
{return or__3548__auto____3664;
} else
{var or__3548__auto____3665 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3665))
{return or__3548__auto____3665;
} else
{var or__3548__auto____3666 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3666))
{return or__3548__auto____3666;
} else
{var or__3548__auto____3667 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3667))
{return or__3548__auto____3667;
} else
{var or__3548__auto____3668 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3668))
{return or__3548__auto____3668;
} else
{var or__3548__auto____3669 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3669))
{return or__3548__auto____3669;
} else
{var or__3548__auto____3670 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3670))
{return or__3548__auto____3670;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3704 = (function() { 
var G__3706__delegate = function (x,y,z,args){
var or__3548__auto____3671 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3671))
{return or__3548__auto____3671;
} else
{return cljs.core.some.call(null,(function (p1__3558_SHARP_){
var or__3548__auto____3672 = p1.call(null,p1__3558_SHARP_);

if(cljs.core.truth_(or__3548__auto____3672))
{return or__3548__auto____3672;
} else
{var or__3548__auto____3673 = p2.call(null,p1__3558_SHARP_);

if(cljs.core.truth_(or__3548__auto____3673))
{return or__3548__auto____3673;
} else
{return p3.call(null,p1__3558_SHARP_);
}
}
}),args);
}
};
var G__3706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3706__delegate.call(this, x, y, z, args);
};
G__3706.cljs$lang$maxFixedArity = 3;
G__3706.cljs$lang$applyTo = (function (arglist__3707){
var x = cljs.core.first(arglist__3707);
var y = cljs.core.first(cljs.core.next(arglist__3707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3707)));
return G__3706__delegate.call(this, x, y, z, args);
});
return G__3706;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3700.call(this);
case  1 :
return sp3__3701.call(this,x);
case  2 :
return sp3__3702.call(this,x,y);
case  3 :
return sp3__3703.call(this,x,y,z);
default:
return sp3__3704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3704.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3682 = (function() { 
var G__3708__delegate = function (p1,p2,p3,ps){
var ps__3674 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3709 = (function (){
return null;
});
var spn__3710 = (function (x){
return cljs.core.some.call(null,(function (p1__3559_SHARP_){
return p1__3559_SHARP_.call(null,x);
}),ps__3674);
});
var spn__3711 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3560_SHARP_){
var or__3548__auto____3675 = p1__3560_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3675))
{return or__3548__auto____3675;
} else
{return p1__3560_SHARP_.call(null,y);
}
}),ps__3674);
});
var spn__3712 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3561_SHARP_){
var or__3548__auto____3676 = p1__3561_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3676))
{return or__3548__auto____3676;
} else
{var or__3548__auto____3677 = p1__3561_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3677))
{return or__3548__auto____3677;
} else
{return p1__3561_SHARP_.call(null,z);
}
}
}),ps__3674);
});
var spn__3713 = (function() { 
var G__3715__delegate = function (x,y,z,args){
var or__3548__auto____3678 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3678))
{return or__3548__auto____3678;
} else
{return cljs.core.some.call(null,(function (p1__3562_SHARP_){
return cljs.core.some.call(null,p1__3562_SHARP_,args);
}),ps__3674);
}
};
var G__3715 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3715__delegate.call(this, x, y, z, args);
};
G__3715.cljs$lang$maxFixedArity = 3;
G__3715.cljs$lang$applyTo = (function (arglist__3716){
var x = cljs.core.first(arglist__3716);
var y = cljs.core.first(cljs.core.next(arglist__3716));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3716)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3716)));
return G__3715__delegate.call(this, x, y, z, args);
});
return G__3715;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3709.call(this);
case  1 :
return spn__3710.call(this,x);
case  2 :
return spn__3711.call(this,x,y);
case  3 :
return spn__3712.call(this,x,y,z);
default:
return spn__3713.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3713.cljs$lang$applyTo;
return spn;
})()
};
var G__3708 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3708__delegate.call(this, p1, p2, p3, ps);
};
G__3708.cljs$lang$maxFixedArity = 3;
G__3708.cljs$lang$applyTo = (function (arglist__3717){
var p1 = cljs.core.first(arglist__3717);
var p2 = cljs.core.first(cljs.core.next(arglist__3717));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3717)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3717)));
return G__3708__delegate.call(this, p1, p2, p3, ps);
});
return G__3708;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3679.call(this,p1);
case  2 :
return some_fn__3680.call(this,p1,p2);
case  3 :
return some_fn__3681.call(this,p1,p2,p3);
default:
return some_fn__3682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3682.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3730 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3718 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3718))
{var s__3719 = temp__3698__auto____3718;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3719)),map.call(null,f,cljs.core.rest.call(null,s__3719)));
} else
{return null;
}
})));
});
var map__3731 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3720 = cljs.core.seq.call(null,c1);
var s2__3721 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3722 = s1__3720;

if(cljs.core.truth_(and__3546__auto____3722))
{return s2__3721;
} else
{return and__3546__auto____3722;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3720),cljs.core.first.call(null,s2__3721)),map.call(null,f,cljs.core.rest.call(null,s1__3720),cljs.core.rest.call(null,s2__3721)));
} else
{return null;
}
})));
});
var map__3732 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3723 = cljs.core.seq.call(null,c1);
var s2__3724 = cljs.core.seq.call(null,c2);
var s3__3725 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3726 = s1__3723;

if(cljs.core.truth_(and__3546__auto____3726))
{var and__3546__auto____3727 = s2__3724;

if(cljs.core.truth_(and__3546__auto____3727))
{return s3__3725;
} else
{return and__3546__auto____3727;
}
} else
{return and__3546__auto____3726;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3723),cljs.core.first.call(null,s2__3724),cljs.core.first.call(null,s3__3725)),map.call(null,f,cljs.core.rest.call(null,s1__3723),cljs.core.rest.call(null,s2__3724),cljs.core.rest.call(null,s3__3725)));
} else
{return null;
}
})));
});
var map__3733 = (function() { 
var G__3735__delegate = function (f,c1,c2,c3,colls){
var step__3729 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3728 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3728)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3728),step.call(null,map.call(null,cljs.core.rest,ss__3728)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3640_SHARP_){
return cljs.core.apply.call(null,f,p1__3640_SHARP_);
}),step__3729.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3735 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3735__delegate.call(this, f, c1, c2, c3, colls);
};
G__3735.cljs$lang$maxFixedArity = 4;
G__3735.cljs$lang$applyTo = (function (arglist__3736){
var f = cljs.core.first(arglist__3736);
var c1 = cljs.core.first(cljs.core.next(arglist__3736));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3736)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3736))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3736))));
return G__3735__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3735;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3730.call(this,f,c1);
case  3 :
return map__3731.call(this,f,c1,c2);
case  4 :
return map__3732.call(this,f,c1,c2,c3);
default:
return map__3733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3733.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3737 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3737))
{var s__3738 = temp__3698__auto____3737;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3738),take.call(null,(n - 1),cljs.core.rest.call(null,s__3738)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3741 = (function (n,coll){
while(true){
var s__3739 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3740 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3740))
{return s__3739;
} else
{return and__3546__auto____3740;
}
})()))
{{
var G__3742 = (n - 1);
var G__3743 = cljs.core.rest.call(null,s__3739);
n = G__3742;
coll = G__3743;
continue;
}
} else
{return s__3739;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3741.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3744 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3745 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3744.call(this,n);
case  2 :
return drop_last__3745.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3747 = cljs.core.seq.call(null,coll);
var lead__3748 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3748))
{{
var G__3749 = cljs.core.next.call(null,s__3747);
var G__3750 = cljs.core.next.call(null,lead__3748);
s__3747 = G__3749;
lead__3748 = G__3750;
continue;
}
} else
{return s__3747;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3753 = (function (pred,coll){
while(true){
var s__3751 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3752 = s__3751;

if(cljs.core.truth_(and__3546__auto____3752))
{return pred.call(null,cljs.core.first.call(null,s__3751));
} else
{return and__3546__auto____3752;
}
})()))
{{
var G__3754 = pred;
var G__3755 = cljs.core.rest.call(null,s__3751);
pred = G__3754;
coll = G__3755;
continue;
}
} else
{return s__3751;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3753.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3756 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3756))
{var s__3757 = temp__3698__auto____3756;

return cljs.core.concat.call(null,s__3757,cycle.call(null,s__3757));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3758 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3759 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3758.call(this,n);
case  2 :
return repeat__3759.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3761 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3762 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3761.call(this,n);
case  2 :
return repeatedly__3762.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3768 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3764 = cljs.core.seq.call(null,c1);
var s2__3765 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3766 = s1__3764;

if(cljs.core.truth_(and__3546__auto____3766))
{return s2__3765;
} else
{return and__3546__auto____3766;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3764),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3765),interleave.call(null,cljs.core.rest.call(null,s1__3764),cljs.core.rest.call(null,s2__3765))));
} else
{return null;
}
})));
});
var interleave__3769 = (function() { 
var G__3771__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3767 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3767)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3767),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3767)));
} else
{return null;
}
})));
};
var G__3771 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3771__delegate.call(this, c1, c2, colls);
};
G__3771.cljs$lang$maxFixedArity = 2;
G__3771.cljs$lang$applyTo = (function (arglist__3772){
var c1 = cljs.core.first(arglist__3772);
var c2 = cljs.core.first(cljs.core.next(arglist__3772));
var colls = cljs.core.rest(cljs.core.next(arglist__3772));
return G__3771__delegate.call(this, c1, c2, colls);
});
return G__3771;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3768.call(this,c1,c2);
default:
return interleave__3769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3769.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3775 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3773 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3773))
{var coll__3774 = temp__3695__auto____3773;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3774),cat.call(null,cljs.core.rest.call(null,coll__3774),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3775.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3776 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3777 = (function() { 
var G__3779__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3779 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3779__delegate.call(this, f, coll, colls);
};
G__3779.cljs$lang$maxFixedArity = 2;
G__3779.cljs$lang$applyTo = (function (arglist__3780){
var f = cljs.core.first(arglist__3780);
var coll = cljs.core.first(cljs.core.next(arglist__3780));
var colls = cljs.core.rest(cljs.core.next(arglist__3780));
return G__3779__delegate.call(this, f, coll, colls);
});
return G__3779;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3776.call(this,f,coll);
default:
return mapcat__3777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3777.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3781 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3781))
{var s__3782 = temp__3698__auto____3781;

var f__3783 = cljs.core.first.call(null,s__3782);
var r__3784 = cljs.core.rest.call(null,s__3782);

if(cljs.core.truth_(pred.call(null,f__3783)))
{return cljs.core.cons.call(null,f__3783,filter.call(null,pred,r__3784));
} else
{return filter.call(null,pred,r__3784);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3786 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3786.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3785_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3785_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3793 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3794 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3787 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3787))
{var s__3788 = temp__3698__auto____3787;

var p__3789 = cljs.core.take.call(null,n,s__3788);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3789))))
{return cljs.core.cons.call(null,p__3789,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3788)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3795 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3790 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3790))
{var s__3791 = temp__3698__auto____3790;

var p__3792 = cljs.core.take.call(null,n,s__3791);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3792))))
{return cljs.core.cons.call(null,p__3792,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3791)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3792,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3793.call(this,n,step);
case  3 :
return partition__3794.call(this,n,step,pad);
case  4 :
return partition__3795.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3801 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3802 = (function (m,ks,not_found){
var sentinel__3797 = cljs.core.lookup_sentinel;
var m__3798 = m;
var ks__3799 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3799))
{var m__3800 = cljs.core.get.call(null,m__3798,cljs.core.first.call(null,ks__3799),sentinel__3797);

if(cljs.core.truth_((sentinel__3797 === m__3800)))
{return not_found;
} else
{{
var G__3804 = sentinel__3797;
var G__3805 = m__3800;
var G__3806 = cljs.core.next.call(null,ks__3799);
sentinel__3797 = G__3804;
m__3798 = G__3805;
ks__3799 = G__3806;
continue;
}
}
} else
{return m__3798;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3801.call(this,m,ks);
case  3 :
return get_in__3802.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3807,v){
var vec__3808__3809 = p__3807;
var k__3810 = cljs.core.nth.call(null,vec__3808__3809,0,null);
var ks__3811 = cljs.core.nthnext.call(null,vec__3808__3809,1);

if(cljs.core.truth_(ks__3811))
{return cljs.core.assoc.call(null,m,k__3810,assoc_in.call(null,cljs.core.get.call(null,m,k__3810),ks__3811,v));
} else
{return cljs.core.assoc.call(null,m,k__3810,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3812,f,args){
var vec__3813__3814 = p__3812;
var k__3815 = cljs.core.nth.call(null,vec__3813__3814,0,null);
var ks__3816 = cljs.core.nthnext.call(null,vec__3813__3814,1);

if(cljs.core.truth_(ks__3816))
{return cljs.core.assoc.call(null,m,k__3815,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3815),ks__3816,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3815,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3815),args));
}
};
var update_in = function (m,p__3812,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3812, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3817){
var m = cljs.core.first(arglist__3817);
var p__3812 = cljs.core.first(cljs.core.next(arglist__3817));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3817)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3817)));
return update_in__delegate.call(this, m, p__3812, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3818 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3851 = null;
var G__3851__3852 = (function (coll,k){
var this__3819 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3851__3853 = (function (coll,k,not_found){
var this__3820 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3851 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3851__3852.call(this,coll,k);
case  3 :
return G__3851__3853.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3851;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3821 = this;
var new_array__3822 = cljs.core.aclone.call(null,this__3821.array);

(new_array__3822[k] = v);
return (new cljs.core.Vector(this__3821.meta,new_array__3822));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__3855 = null;
var G__3855__3856 = (function (tsym3823,k){
var this__3825 = this;
var tsym3823__3826 = this;

var coll__3827 = tsym3823__3826;

return cljs.core._lookup.call(null,coll__3827,k);
});
var G__3855__3857 = (function (tsym3824,k,not_found){
var this__3828 = this;
var tsym3824__3829 = this;

var coll__3830 = tsym3824__3829;

return cljs.core._lookup.call(null,coll__3830,k,not_found);
});
G__3855 = function(tsym3824,k,not_found){
switch(arguments.length){
case  2 :
return G__3855__3856.call(this,tsym3824,k);
case  3 :
return G__3855__3857.call(this,tsym3824,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3855;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3831 = this;
var new_array__3832 = cljs.core.aclone.call(null,this__3831.array);

new_array__3832.push(o);
return (new cljs.core.Vector(this__3831.meta,new_array__3832));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3859 = null;
var G__3859__3860 = (function (v,f){
var this__3833 = this;
return cljs.core.ci_reduce.call(null,this__3833.array,f);
});
var G__3859__3861 = (function (v,f,start){
var this__3834 = this;
return cljs.core.ci_reduce.call(null,this__3834.array,f,start);
});
G__3859 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3859__3860.call(this,v,f);
case  3 :
return G__3859__3861.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3859;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3835 = this;
if(cljs.core.truth_((this__3835.array.length > 0)))
{var vector_seq__3836 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3835.array.length)))
{return cljs.core.cons.call(null,(this__3835.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3836.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3837 = this;
return this__3837.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3838 = this;
var count__3839 = this__3838.array.length;

if(cljs.core.truth_((count__3839 > 0)))
{return (this__3838.array[(count__3839 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3840 = this;
if(cljs.core.truth_((this__3840.array.length > 0)))
{var new_array__3841 = cljs.core.aclone.call(null,this__3840.array);

new_array__3841.pop();
return (new cljs.core.Vector(this__3840.meta,new_array__3841));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3842 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3843 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3844 = this;
return (new cljs.core.Vector(meta,this__3844.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3845 = this;
return this__3845.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3863 = null;
var G__3863__3864 = (function (coll,n){
var this__3846 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3847 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3847))
{return (n < this__3846.array.length);
} else
{return and__3546__auto____3847;
}
})()))
{return (this__3846.array[n]);
} else
{return null;
}
});
var G__3863__3865 = (function (coll,n,not_found){
var this__3848 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3849 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3849))
{return (n < this__3848.array.length);
} else
{return and__3546__auto____3849;
}
})()))
{return (this__3848.array[n]);
} else
{return not_found;
}
});
G__3863 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3863__3864.call(this,coll,n);
case  3 :
return G__3863__3865.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3863;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3850 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3850.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__3867 = pv.cnt;

if(cljs.core.truth_((cnt__3867 < 32)))
{return 0;
} else
{return (((cnt__3867 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__3868 = level;
var ret__3869 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__3868)))
{return ret__3869;
} else
{var embed__3870 = ret__3869;
var r__3871 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___3872 = (r__3871[0] = embed__3870);

{
var G__3873 = (ll__3868 - 5);
var G__3874 = r__3871;
ll__3868 = G__3873;
ret__3869 = G__3874;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__3875 = cljs.core.aclone.call(null,parent);
var subidx__3876 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__3875[subidx__3876] = tailnode);
return ret__3875;
} else
{var temp__3695__auto____3877 = (parent[subidx__3876]);

if(cljs.core.truth_(temp__3695__auto____3877))
{var child__3878 = temp__3695__auto____3877;

var node_to_insert__3879 = push_tail.call(null,pv,(level - 5),child__3878,tailnode);
var ___3880 = (ret__3875[subidx__3876] = node_to_insert__3879);

return ret__3875;
} else
{var node_to_insert__3881 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___3882 = (ret__3875[subidx__3876] = node_to_insert__3881);

return ret__3875;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____3883 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____3883))
{return (i < pv.cnt);
} else
{return and__3546__auto____3883;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__3884 = pv.root;
var level__3885 = pv.shift;

while(true){
if(cljs.core.truth_((level__3885 > 0)))
{{
var G__3886 = (node__3884[((i >> level__3885) & 31)]);
var G__3887 = (level__3885 - 5);
node__3884 = G__3886;
level__3885 = G__3887;
continue;
}
} else
{return node__3884;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__3888 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__3888[(i & 31)] = val);
return ret__3888;
} else
{var subidx__3889 = ((i >> level) & 31);
var ___3890 = (ret__3888[subidx__3889] = do_assoc.call(null,pv,(level - 5),(node[subidx__3889]),i,val));

return ret__3888;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__3891 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__3892 = pop_tail.call(null,pv,(level - 5),(node[subidx__3891]));

if(cljs.core.truth_((function (){var and__3546__auto____3893 = (new_child__3892 === null);

if(cljs.core.truth_(and__3546__auto____3893))
{return (subidx__3891 === 0);
} else
{return and__3546__auto____3893;
}
})()))
{return null;
} else
{var ret__3894 = cljs.core.aclone.call(null,node);
var ___3895 = (ret__3894[subidx__3891] = new_child__3892);

return ret__3894;
}
} else
{if(cljs.core.truth_((subidx__3891 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__3896 = cljs.core.aclone.call(null,node);
var ___3897 = (ret__3896[subidx__3891] = null);

return ret__3896;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3898 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3938 = null;
var G__3938__3939 = (function (coll,k){
var this__3899 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3938__3940 = (function (coll,k,not_found){
var this__3900 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3938 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3938__3939.call(this,coll,k);
case  3 :
return G__3938__3940.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3938;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3901 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3902 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____3902))
{return (k < this__3901.cnt);
} else
{return and__3546__auto____3902;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__3903 = cljs.core.aclone.call(null,this__3901.tail);

(new_tail__3903[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__3901.meta,this__3901.cnt,this__3901.shift,this__3901.root,new_tail__3903));
} else
{return (new cljs.core.PersistentVector(this__3901.meta,this__3901.cnt,this__3901.shift,cljs.core.do_assoc.call(null,coll,this__3901.shift,this__3901.root,k,v),this__3901.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__3901.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__3901.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__3942 = null;
var G__3942__3943 = (function (tsym3904,k){
var this__3906 = this;
var tsym3904__3907 = this;

var coll__3908 = tsym3904__3907;

return cljs.core._lookup.call(null,coll__3908,k);
});
var G__3942__3944 = (function (tsym3905,k,not_found){
var this__3909 = this;
var tsym3905__3910 = this;

var coll__3911 = tsym3905__3910;

return cljs.core._lookup.call(null,coll__3911,k,not_found);
});
G__3942 = function(tsym3905,k,not_found){
switch(arguments.length){
case  2 :
return G__3942__3943.call(this,tsym3905,k);
case  3 :
return G__3942__3944.call(this,tsym3905,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3942;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3912 = this;
if(cljs.core.truth_(((this__3912.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__3913 = cljs.core.aclone.call(null,this__3912.tail);

new_tail__3913.push(o);
return (new cljs.core.PersistentVector(this__3912.meta,(this__3912.cnt + 1),this__3912.shift,this__3912.root,new_tail__3913));
} else
{var root_overflow_QMARK___3914 = ((this__3912.cnt >> 5) > (1 << this__3912.shift));
var new_shift__3915 = (cljs.core.truth_(root_overflow_QMARK___3914)?(this__3912.shift + 5):this__3912.shift);
var new_root__3917 = (cljs.core.truth_(root_overflow_QMARK___3914)?(function (){var n_r__3916 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__3916[0] = this__3912.root);
(n_r__3916[1] = cljs.core.new_path.call(null,this__3912.shift,this__3912.tail));
return n_r__3916;
})():cljs.core.push_tail.call(null,coll,this__3912.shift,this__3912.root,this__3912.tail));

return (new cljs.core.PersistentVector(this__3912.meta,(this__3912.cnt + 1),new_shift__3915,new_root__3917,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3946 = null;
var G__3946__3947 = (function (v,f){
var this__3918 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__3946__3948 = (function (v,f,start){
var this__3919 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__3946 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3946__3947.call(this,v,f);
case  3 :
return G__3946__3948.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3946;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3920 = this;
if(cljs.core.truth_((this__3920.cnt > 0)))
{var vector_seq__3921 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3920.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3921.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3922 = this;
return this__3922.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3923 = this;
if(cljs.core.truth_((this__3923.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__3923.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3924 = this;
if(cljs.core.truth_((this__3924.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__3924.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__3924.meta);
} else
{if(cljs.core.truth_((1 < (this__3924.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__3924.meta,(this__3924.cnt - 1),this__3924.shift,this__3924.root,cljs.core.aclone.call(null,this__3924.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__3925 = cljs.core.array_for.call(null,coll,(this__3924.cnt - 2));
var nr__3926 = cljs.core.pop_tail.call(null,this__3924.shift,this__3924.root);
var new_root__3927 = (cljs.core.truth_((nr__3926 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__3926);
var cnt_1__3928 = (this__3924.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____3929 = (5 < this__3924.shift);

if(cljs.core.truth_(and__3546__auto____3929))
{return ((new_root__3927[1]) === null);
} else
{return and__3546__auto____3929;
}
})()))
{return (new cljs.core.PersistentVector(this__3924.meta,cnt_1__3928,(this__3924.shift - 5),(new_root__3927[0]),new_tail__3925));
} else
{return (new cljs.core.PersistentVector(this__3924.meta,cnt_1__3928,this__3924.shift,new_root__3927,new_tail__3925));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3930 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3931 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3932 = this;
return (new cljs.core.PersistentVector(meta,this__3932.cnt,this__3932.shift,this__3932.root,this__3932.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3933 = this;
return this__3933.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3950 = null;
var G__3950__3951 = (function (coll,n){
var this__3934 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__3950__3952 = (function (coll,n,not_found){
var this__3935 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3936 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3936))
{return (n < this__3935.cnt);
} else
{return and__3546__auto____3936;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__3950 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3950__3951.call(this,coll,n);
case  3 :
return G__3950__3952.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3950;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3937 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__3937.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = (new Array(32));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3954){
var args = cljs.core.seq( arglist__3954 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3955 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3983 = null;
var G__3983__3984 = (function (coll,k){
var this__3956 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3983__3985 = (function (coll,k,not_found){
var this__3957 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3983 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3983__3984.call(this,coll,k);
case  3 :
return G__3983__3985.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3983;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3958 = this;
var v_pos__3959 = (this__3958.start + key);

return (new cljs.core.Subvec(this__3958.meta,cljs.core._assoc.call(null,this__3958.v,v_pos__3959,val),this__3958.start,((this__3958.end > (v_pos__3959 + 1)) ? this__3958.end : (v_pos__3959 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__3987 = null;
var G__3987__3988 = (function (tsym3960,k){
var this__3962 = this;
var tsym3960__3963 = this;

var coll__3964 = tsym3960__3963;

return cljs.core._lookup.call(null,coll__3964,k);
});
var G__3987__3989 = (function (tsym3961,k,not_found){
var this__3965 = this;
var tsym3961__3966 = this;

var coll__3967 = tsym3961__3966;

return cljs.core._lookup.call(null,coll__3967,k,not_found);
});
G__3987 = function(tsym3961,k,not_found){
switch(arguments.length){
case  2 :
return G__3987__3988.call(this,tsym3961,k);
case  3 :
return G__3987__3989.call(this,tsym3961,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3987;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3968 = this;
return (new cljs.core.Subvec(this__3968.meta,cljs.core._assoc_n.call(null,this__3968.v,this__3968.end,o),this__3968.start,(this__3968.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3991 = null;
var G__3991__3992 = (function (coll,f){
var this__3969 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3991__3993 = (function (coll,f,start){
var this__3970 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3991 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3991__3992.call(this,coll,f);
case  3 :
return G__3991__3993.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3991;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3971 = this;
var subvec_seq__3972 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3971.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3971.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3972.call(null,this__3971.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3973 = this;
return (this__3973.end - this__3973.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3974 = this;
return cljs.core._nth.call(null,this__3974.v,(this__3974.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3975 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3975.start,this__3975.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3975.meta,this__3975.v,this__3975.start,(this__3975.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3976 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3977 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3978 = this;
return (new cljs.core.Subvec(meta,this__3978.v,this__3978.start,this__3978.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3979 = this;
return this__3979.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3995 = null;
var G__3995__3996 = (function (coll,n){
var this__3980 = this;
return cljs.core._nth.call(null,this__3980.v,(this__3980.start + n));
});
var G__3995__3997 = (function (coll,n,not_found){
var this__3981 = this;
return cljs.core._nth.call(null,this__3981.v,(this__3981.start + n),not_found);
});
G__3995 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3995__3996.call(this,coll,n);
case  3 :
return G__3995__3997.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3995;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3982 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3982.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__3999 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4000 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3999.call(this,v,start);
case  3 :
return subvec__4000.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4002 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4003 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4004 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4005 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4005.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4006 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4007 = this;
return cljs.core._first.call(null,this__4007.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4008 = this;
var temp__3695__auto____4009 = cljs.core.next.call(null,this__4008.front);

if(cljs.core.truth_(temp__3695__auto____4009))
{var f1__4010 = temp__3695__auto____4009;

return (new cljs.core.PersistentQueueSeq(this__4008.meta,f1__4010,this__4008.rear));
} else
{if(cljs.core.truth_((this__4008.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4008.meta,this__4008.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4011 = this;
return this__4011.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4012 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4012.front,this__4012.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4013 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4014 = this;
if(cljs.core.truth_(this__4014.front))
{return (new cljs.core.PersistentQueue(this__4014.meta,(this__4014.count + 1),this__4014.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4015 = this__4014.rear;

if(cljs.core.truth_(or__3548__auto____4015))
{return or__3548__auto____4015;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4014.meta,(this__4014.count + 1),cljs.core.conj.call(null,this__4014.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4016 = this;
var rear__4017 = cljs.core.seq.call(null,this__4016.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4018 = this__4016.front;

if(cljs.core.truth_(or__3548__auto____4018))
{return or__3548__auto____4018;
} else
{return rear__4017;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4016.front,cljs.core.seq.call(null,rear__4017)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4019 = this;
return this__4019.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4020 = this;
return cljs.core._first.call(null,this__4020.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4021 = this;
if(cljs.core.truth_(this__4021.front))
{var temp__3695__auto____4022 = cljs.core.next.call(null,this__4021.front);

if(cljs.core.truth_(temp__3695__auto____4022))
{var f1__4023 = temp__3695__auto____4022;

return (new cljs.core.PersistentQueue(this__4021.meta,(this__4021.count - 1),f1__4023,this__4021.rear));
} else
{return (new cljs.core.PersistentQueue(this__4021.meta,(this__4021.count - 1),cljs.core.seq.call(null,this__4021.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4024 = this;
return cljs.core.first.call(null,this__4024.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4025 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4026 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4027 = this;
return (new cljs.core.PersistentQueue(meta,this__4027.count,this__4027.front,this__4027.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4028 = this;
return this__4028.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4029 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4030 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4031 = array.length;

var i__4032 = 0;

while(true){
if(cljs.core.truth_((i__4032 < len__4031)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4032]))))
{return i__4032;
} else
{{
var G__4033 = (i__4032 + incr);
i__4032 = G__4033;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4035 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4036 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4034 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4034))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4034;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4035.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4036.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4039 = cljs.core.hash.call(null,a);
var b__4040 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4039 < b__4040)))
{return -1;
} else
{if(cljs.core.truth_((a__4039 > b__4040)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4041 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4068 = null;
var G__4068__4069 = (function (coll,k){
var this__4042 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4068__4070 = (function (coll,k,not_found){
var this__4043 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4043.strobj,(this__4043.strobj[k]),not_found);
});
G__4068 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4068__4069.call(this,coll,k);
case  3 :
return G__4068__4070.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4068;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4044 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4045 = goog.object.clone.call(null,this__4044.strobj);
var overwrite_QMARK___4046 = new_strobj__4045.hasOwnProperty(k);

(new_strobj__4045[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4046))
{return (new cljs.core.ObjMap(this__4044.meta,this__4044.keys,new_strobj__4045));
} else
{var new_keys__4047 = cljs.core.aclone.call(null,this__4044.keys);

new_keys__4047.push(k);
return (new cljs.core.ObjMap(this__4044.meta,new_keys__4047,new_strobj__4045));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4044.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4048 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4048.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4072 = null;
var G__4072__4073 = (function (tsym4049,k){
var this__4051 = this;
var tsym4049__4052 = this;

var coll__4053 = tsym4049__4052;

return cljs.core._lookup.call(null,coll__4053,k);
});
var G__4072__4074 = (function (tsym4050,k,not_found){
var this__4054 = this;
var tsym4050__4055 = this;

var coll__4056 = tsym4050__4055;

return cljs.core._lookup.call(null,coll__4056,k,not_found);
});
G__4072 = function(tsym4050,k,not_found){
switch(arguments.length){
case  2 :
return G__4072__4073.call(this,tsym4050,k);
case  3 :
return G__4072__4074.call(this,tsym4050,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4072;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4057 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4058 = this;
if(cljs.core.truth_((this__4058.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4038_SHARP_){
return cljs.core.vector.call(null,p1__4038_SHARP_,(this__4058.strobj[p1__4038_SHARP_]));
}),this__4058.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4059 = this;
return this__4059.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4060 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4061 = this;
return (new cljs.core.ObjMap(meta,this__4061.keys,this__4061.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4062 = this;
return this__4062.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4063 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4063.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4064 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4065 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4065))
{return this__4064.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4065;
}
})()))
{var new_keys__4066 = cljs.core.aclone.call(null,this__4064.keys);
var new_strobj__4067 = goog.object.clone.call(null,this__4064.strobj);

new_keys__4066.splice(cljs.core.scan_array.call(null,1,k,new_keys__4066),1);
cljs.core.js_delete.call(null,new_strobj__4067,k);
return (new cljs.core.ObjMap(this__4064.meta,new_keys__4066,new_strobj__4067));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4077 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4115 = null;
var G__4115__4116 = (function (coll,k){
var this__4078 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4115__4117 = (function (coll,k,not_found){
var this__4079 = this;
var bucket__4080 = (this__4079.hashobj[cljs.core.hash.call(null,k)]);
var i__4081 = (cljs.core.truth_(bucket__4080)?cljs.core.scan_array.call(null,2,k,bucket__4080):null);

if(cljs.core.truth_(i__4081))
{return (bucket__4080[(i__4081 + 1)]);
} else
{return not_found;
}
});
G__4115 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4115__4116.call(this,coll,k);
case  3 :
return G__4115__4117.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4115;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4082 = this;
var h__4083 = cljs.core.hash.call(null,k);
var bucket__4084 = (this__4082.hashobj[h__4083]);

if(cljs.core.truth_(bucket__4084))
{var new_bucket__4085 = cljs.core.aclone.call(null,bucket__4084);
var new_hashobj__4086 = goog.object.clone.call(null,this__4082.hashobj);

(new_hashobj__4086[h__4083] = new_bucket__4085);
var temp__3695__auto____4087 = cljs.core.scan_array.call(null,2,k,new_bucket__4085);

if(cljs.core.truth_(temp__3695__auto____4087))
{var i__4088 = temp__3695__auto____4087;

(new_bucket__4085[(i__4088 + 1)] = v);
return (new cljs.core.HashMap(this__4082.meta,this__4082.count,new_hashobj__4086));
} else
{new_bucket__4085.push(k,v);
return (new cljs.core.HashMap(this__4082.meta,(this__4082.count + 1),new_hashobj__4086));
}
} else
{var new_hashobj__4089 = goog.object.clone.call(null,this__4082.hashobj);

(new_hashobj__4089[h__4083] = [k,v]);
return (new cljs.core.HashMap(this__4082.meta,(this__4082.count + 1),new_hashobj__4089));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4090 = this;
var bucket__4091 = (this__4090.hashobj[cljs.core.hash.call(null,k)]);
var i__4092 = (cljs.core.truth_(bucket__4091)?cljs.core.scan_array.call(null,2,k,bucket__4091):null);

if(cljs.core.truth_(i__4092))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4119 = null;
var G__4119__4120 = (function (tsym4093,k){
var this__4095 = this;
var tsym4093__4096 = this;

var coll__4097 = tsym4093__4096;

return cljs.core._lookup.call(null,coll__4097,k);
});
var G__4119__4121 = (function (tsym4094,k,not_found){
var this__4098 = this;
var tsym4094__4099 = this;

var coll__4100 = tsym4094__4099;

return cljs.core._lookup.call(null,coll__4100,k,not_found);
});
G__4119 = function(tsym4094,k,not_found){
switch(arguments.length){
case  2 :
return G__4119__4120.call(this,tsym4094,k);
case  3 :
return G__4119__4121.call(this,tsym4094,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4119;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4101 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4102 = this;
if(cljs.core.truth_((this__4102.count > 0)))
{var hashes__4103 = cljs.core.js_keys.call(null,this__4102.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4076_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4102.hashobj[p1__4076_SHARP_])));
}),hashes__4103);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4104 = this;
return this__4104.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4105 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4106 = this;
return (new cljs.core.HashMap(meta,this__4106.count,this__4106.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4107 = this;
return this__4107.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4108 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4108.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4109 = this;
var h__4110 = cljs.core.hash.call(null,k);
var bucket__4111 = (this__4109.hashobj[h__4110]);
var i__4112 = (cljs.core.truth_(bucket__4111)?cljs.core.scan_array.call(null,2,k,bucket__4111):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4112)))
{return coll;
} else
{var new_hashobj__4113 = goog.object.clone.call(null,this__4109.hashobj);

if(cljs.core.truth_((3 > bucket__4111.length)))
{cljs.core.js_delete.call(null,new_hashobj__4113,h__4110);
} else
{var new_bucket__4114 = cljs.core.aclone.call(null,bucket__4111);

new_bucket__4114.splice(i__4112,2);
(new_hashobj__4113[h__4110] = new_bucket__4114);
}
return (new cljs.core.HashMap(this__4109.meta,(this__4109.count - 1),new_hashobj__4113));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4123 = ks.length;

var i__4124 = 0;
var out__4125 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4124 < len__4123)))
{{
var G__4126 = (i__4124 + 1);
var G__4127 = cljs.core.assoc.call(null,out__4125,(ks[i__4124]),(vs[i__4124]));
i__4124 = G__4126;
out__4125 = G__4127;
continue;
}
} else
{return out__4125;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4128 = cljs.core.seq.call(null,keyvals);
var out__4129 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4128))
{{
var G__4130 = cljs.core.nnext.call(null,in$__4128);
var G__4131 = cljs.core.assoc.call(null,out__4129,cljs.core.first.call(null,in$__4128),cljs.core.second.call(null,in$__4128));
in$__4128 = G__4130;
out__4129 = G__4131;
continue;
}
} else
{return out__4129;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4132){
var keyvals = cljs.core.seq( arglist__4132 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4133_SHARP_,p2__4134_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4135 = p1__4133_SHARP_;

if(cljs.core.truth_(or__3548__auto____4135))
{return or__3548__auto____4135;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4134_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4136){
var maps = cljs.core.seq( arglist__4136 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4139 = (function (m,e){
var k__4137 = cljs.core.first.call(null,e);
var v__4138 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4137)))
{return cljs.core.assoc.call(null,m,k__4137,f.call(null,cljs.core.get.call(null,m,k__4137),v__4138));
} else
{return cljs.core.assoc.call(null,m,k__4137,v__4138);
}
});
var merge2__4141 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4139,(function (){var or__3548__auto____4140 = m1;

if(cljs.core.truth_(or__3548__auto____4140))
{return or__3548__auto____4140;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4141,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4142){
var f = cljs.core.first(arglist__4142);
var maps = cljs.core.rest(arglist__4142);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4144 = cljs.core.ObjMap.fromObject([],{});
var keys__4145 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4145))
{var key__4146 = cljs.core.first.call(null,keys__4145);
var entry__4147 = cljs.core.get.call(null,map,key__4146,"\uFDD0'clojure.core/not-found");

{
var G__4148 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4147,"\uFDD0'clojure.core/not-found"))?cljs.core.assoc.call(null,ret__4144,key__4146,entry__4147):ret__4144);
var G__4149 = cljs.core.next.call(null,keys__4145);
ret__4144 = G__4148;
keys__4145 = G__4149;
continue;
}
} else
{return ret__4144;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4150 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4171 = null;
var G__4171__4172 = (function (coll,v){
var this__4151 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4171__4173 = (function (coll,v,not_found){
var this__4152 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4152.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4171 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4171__4172.call(this,coll,v);
case  3 :
return G__4171__4173.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4171;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4175 = null;
var G__4175__4176 = (function (tsym4153,k){
var this__4155 = this;
var tsym4153__4156 = this;

var coll__4157 = tsym4153__4156;

return cljs.core._lookup.call(null,coll__4157,k);
});
var G__4175__4177 = (function (tsym4154,k,not_found){
var this__4158 = this;
var tsym4154__4159 = this;

var coll__4160 = tsym4154__4159;

return cljs.core._lookup.call(null,coll__4160,k,not_found);
});
G__4175 = function(tsym4154,k,not_found){
switch(arguments.length){
case  2 :
return G__4175__4176.call(this,tsym4154,k);
case  3 :
return G__4175__4177.call(this,tsym4154,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4175;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4161 = this;
return (new cljs.core.Set(this__4161.meta,cljs.core.assoc.call(null,this__4161.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4162 = this;
return cljs.core.keys.call(null,this__4162.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4163 = this;
return (new cljs.core.Set(this__4163.meta,cljs.core.dissoc.call(null,this__4163.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4164 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4165 = this;
var and__3546__auto____4166 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4166))
{var and__3546__auto____4167 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4167))
{return cljs.core.every_QMARK_.call(null,(function (p1__4143_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4143_SHARP_);
}),other);
} else
{return and__3546__auto____4167;
}
} else
{return and__3546__auto____4166;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4168 = this;
return (new cljs.core.Set(meta,this__4168.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4169 = this;
return this__4169.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4170 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4170.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4180 = cljs.core.seq.call(null,coll);
var out__4181 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4180))))
{{
var G__4182 = cljs.core.rest.call(null,in$__4180);
var G__4183 = cljs.core.conj.call(null,out__4181,cljs.core.first.call(null,in$__4180));
in$__4180 = G__4182;
out__4181 = G__4183;
continue;
}
} else
{return out__4181;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4184 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4185 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4185))
{var e__4186 = temp__3695__auto____4185;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4186));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4184,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4179_SHARP_){
var temp__3695__auto____4187 = cljs.core.find.call(null,smap,p1__4179_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4187))
{var e__4188 = temp__3695__auto____4187;

return cljs.core.second.call(null,e__4188);
} else
{return p1__4179_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4196 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4189,seen){
while(true){
var vec__4190__4191 = p__4189;
var f__4192 = cljs.core.nth.call(null,vec__4190__4191,0,null);
var xs__4193 = vec__4190__4191;

var temp__3698__auto____4194 = cljs.core.seq.call(null,xs__4193);

if(cljs.core.truth_(temp__3698__auto____4194))
{var s__4195 = temp__3698__auto____4194;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4192)))
{{
var G__4197 = cljs.core.rest.call(null,s__4195);
var G__4198 = seen;
p__4189 = G__4197;
seen = G__4198;
continue;
}
} else
{return cljs.core.cons.call(null,f__4192,step.call(null,cljs.core.rest.call(null,s__4195),cljs.core.conj.call(null,seen,f__4192)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4196.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4199 = cljs.core.PersistentVector.fromArray([]);
var s__4200 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4200)))
{{
var G__4201 = cljs.core.conj.call(null,ret__4199,cljs.core.first.call(null,s__4200));
var G__4202 = cljs.core.next.call(null,s__4200);
ret__4199 = G__4201;
s__4200 = G__4202;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4199);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4203 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4203))
{return or__3548__auto____4203;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4204 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4204 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4204 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4205 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4205))
{return or__3548__auto____4205;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4206 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4206 > -1)))
{return cljs.core.subs.call(null,x,2,i__4206);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4209 = cljs.core.ObjMap.fromObject([],{});
var ks__4210 = cljs.core.seq.call(null,keys);
var vs__4211 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4212 = ks__4210;

if(cljs.core.truth_(and__3546__auto____4212))
{return vs__4211;
} else
{return and__3546__auto____4212;
}
})()))
{{
var G__4213 = cljs.core.assoc.call(null,map__4209,cljs.core.first.call(null,ks__4210),cljs.core.first.call(null,vs__4211));
var G__4214 = cljs.core.next.call(null,ks__4210);
var G__4215 = cljs.core.next.call(null,vs__4211);
map__4209 = G__4213;
ks__4210 = G__4214;
vs__4211 = G__4215;
continue;
}
} else
{return map__4209;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4218 = (function (k,x){
return x;
});
var max_key__4219 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4220 = (function() { 
var G__4222__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4207_SHARP_,p2__4208_SHARP_){
return max_key.call(null,k,p1__4207_SHARP_,p2__4208_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4222 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4222__delegate.call(this, k, x, y, more);
};
G__4222.cljs$lang$maxFixedArity = 3;
G__4222.cljs$lang$applyTo = (function (arglist__4223){
var k = cljs.core.first(arglist__4223);
var x = cljs.core.first(cljs.core.next(arglist__4223));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4223)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4223)));
return G__4222__delegate.call(this, k, x, y, more);
});
return G__4222;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4218.call(this,k,x);
case  3 :
return max_key__4219.call(this,k,x,y);
default:
return max_key__4220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4220.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4224 = (function (k,x){
return x;
});
var min_key__4225 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4226 = (function() { 
var G__4228__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4216_SHARP_,p2__4217_SHARP_){
return min_key.call(null,k,p1__4216_SHARP_,p2__4217_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4228 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4228__delegate.call(this, k, x, y, more);
};
G__4228.cljs$lang$maxFixedArity = 3;
G__4228.cljs$lang$applyTo = (function (arglist__4229){
var k = cljs.core.first(arglist__4229);
var x = cljs.core.first(cljs.core.next(arglist__4229));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4229)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4229)));
return G__4228__delegate.call(this, k, x, y, more);
});
return G__4228;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4224.call(this,k,x);
case  3 :
return min_key__4225.call(this,k,x,y);
default:
return min_key__4226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4226.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4232 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4233 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4230 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4230))
{var s__4231 = temp__3698__auto____4230;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4231),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4231)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4232.call(this,n,step);
case  3 :
return partition_all__4233.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4235 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4235))
{var s__4236 = temp__3698__auto____4235;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4236))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4236),take_while.call(null,pred,cljs.core.rest.call(null,s__4236)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4237 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4238 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4254 = null;
var G__4254__4255 = (function (rng,f){
var this__4239 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4254__4256 = (function (rng,f,s){
var this__4240 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4254 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4254__4255.call(this,rng,f);
case  3 :
return G__4254__4256.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4254;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4241 = this;
var comp__4242 = (cljs.core.truth_((this__4241.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4242.call(null,this__4241.start,this__4241.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4243 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4243.end - this__4243.start) / this__4243.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4244 = this;
return this__4244.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4245 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4245.meta,(this__4245.start + this__4245.step),this__4245.end,this__4245.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4246 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4247 = this;
return (new cljs.core.Range(meta,this__4247.start,this__4247.end,this__4247.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4248 = this;
return this__4248.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4258 = null;
var G__4258__4259 = (function (rng,n){
var this__4249 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4249.start + (n * this__4249.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4250 = (this__4249.start > this__4249.end);

if(cljs.core.truth_(and__3546__auto____4250))
{return cljs.core._EQ_.call(null,this__4249.step,0);
} else
{return and__3546__auto____4250;
}
})()))
{return this__4249.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4258__4260 = (function (rng,n,not_found){
var this__4251 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4251.start + (n * this__4251.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4252 = (this__4251.start > this__4251.end);

if(cljs.core.truth_(and__3546__auto____4252))
{return cljs.core._EQ_.call(null,this__4251.step,0);
} else
{return and__3546__auto____4252;
}
})()))
{return this__4251.start;
} else
{return not_found;
}
}
});
G__4258 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4258__4259.call(this,rng,n);
case  3 :
return G__4258__4260.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4258;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4253 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4253.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4262 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4263 = (function (end){
return range.call(null,0,end,1);
});
var range__4264 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4265 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4262.call(this);
case  1 :
return range__4263.call(this,start);
case  2 :
return range__4264.call(this,start,end);
case  3 :
return range__4265.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4267))
{var s__4268 = temp__3698__auto____4267;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4268),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4268)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4270 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4270))
{var s__4271 = temp__3698__auto____4270;

var fst__4272 = cljs.core.first.call(null,s__4271);
var fv__4273 = f.call(null,fst__4272);
var run__4274 = cljs.core.cons.call(null,fst__4272,cljs.core.take_while.call(null,(function (p1__4269_SHARP_){
return cljs.core._EQ_.call(null,fv__4273,f.call(null,p1__4269_SHARP_));
}),cljs.core.next.call(null,s__4271)));

return cljs.core.cons.call(null,run__4274,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4274),s__4271))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4289 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4285 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4285))
{var s__4286 = temp__3695__auto____4285;

return reductions.call(null,f,cljs.core.first.call(null,s__4286),cljs.core.rest.call(null,s__4286));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4290 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4287 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4287))
{var s__4288 = temp__3698__auto____4287;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4288)),cljs.core.rest.call(null,s__4288));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4289.call(this,f,init);
case  3 :
return reductions__4290.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4293 = (function (f){
return (function() {
var G__4298 = null;
var G__4298__4299 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4298__4300 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4298__4301 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4298__4302 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4298__4303 = (function() { 
var G__4305__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4305 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4305__delegate.call(this, x, y, z, args);
};
G__4305.cljs$lang$maxFixedArity = 3;
G__4305.cljs$lang$applyTo = (function (arglist__4306){
var x = cljs.core.first(arglist__4306);
var y = cljs.core.first(cljs.core.next(arglist__4306));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4306)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4306)));
return G__4305__delegate.call(this, x, y, z, args);
});
return G__4305;
})()
;
G__4298 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4298__4299.call(this);
case  1 :
return G__4298__4300.call(this,x);
case  2 :
return G__4298__4301.call(this,x,y);
case  3 :
return G__4298__4302.call(this,x,y,z);
default:
return G__4298__4303.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4298.cljs$lang$maxFixedArity = 3;
G__4298.cljs$lang$applyTo = G__4298__4303.cljs$lang$applyTo;
return G__4298;
})()
});
var juxt__4294 = (function (f,g){
return (function() {
var G__4307 = null;
var G__4307__4308 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4307__4309 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4307__4310 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4307__4311 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4307__4312 = (function() { 
var G__4314__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4314 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4314__delegate.call(this, x, y, z, args);
};
G__4314.cljs$lang$maxFixedArity = 3;
G__4314.cljs$lang$applyTo = (function (arglist__4315){
var x = cljs.core.first(arglist__4315);
var y = cljs.core.first(cljs.core.next(arglist__4315));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4315)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4315)));
return G__4314__delegate.call(this, x, y, z, args);
});
return G__4314;
})()
;
G__4307 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4307__4308.call(this);
case  1 :
return G__4307__4309.call(this,x);
case  2 :
return G__4307__4310.call(this,x,y);
case  3 :
return G__4307__4311.call(this,x,y,z);
default:
return G__4307__4312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4307.cljs$lang$maxFixedArity = 3;
G__4307.cljs$lang$applyTo = G__4307__4312.cljs$lang$applyTo;
return G__4307;
})()
});
var juxt__4295 = (function (f,g,h){
return (function() {
var G__4316 = null;
var G__4316__4317 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4316__4318 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4316__4319 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4316__4320 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4316__4321 = (function() { 
var G__4323__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4323 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4323__delegate.call(this, x, y, z, args);
};
G__4323.cljs$lang$maxFixedArity = 3;
G__4323.cljs$lang$applyTo = (function (arglist__4324){
var x = cljs.core.first(arglist__4324);
var y = cljs.core.first(cljs.core.next(arglist__4324));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4324)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4324)));
return G__4323__delegate.call(this, x, y, z, args);
});
return G__4323;
})()
;
G__4316 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4316__4317.call(this);
case  1 :
return G__4316__4318.call(this,x);
case  2 :
return G__4316__4319.call(this,x,y);
case  3 :
return G__4316__4320.call(this,x,y,z);
default:
return G__4316__4321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4316.cljs$lang$maxFixedArity = 3;
G__4316.cljs$lang$applyTo = G__4316__4321.cljs$lang$applyTo;
return G__4316;
})()
});
var juxt__4296 = (function() { 
var G__4325__delegate = function (f,g,h,fs){
var fs__4292 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4326 = null;
var G__4326__4327 = (function (){
return cljs.core.reduce.call(null,(function (p1__4275_SHARP_,p2__4276_SHARP_){
return cljs.core.conj.call(null,p1__4275_SHARP_,p2__4276_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__4292);
});
var G__4326__4328 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4277_SHARP_,p2__4278_SHARP_){
return cljs.core.conj.call(null,p1__4277_SHARP_,p2__4278_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__4292);
});
var G__4326__4329 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4279_SHARP_,p2__4280_SHARP_){
return cljs.core.conj.call(null,p1__4279_SHARP_,p2__4280_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__4292);
});
var G__4326__4330 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4281_SHARP_,p2__4282_SHARP_){
return cljs.core.conj.call(null,p1__4281_SHARP_,p2__4282_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__4292);
});
var G__4326__4331 = (function() { 
var G__4333__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4283_SHARP_,p2__4284_SHARP_){
return cljs.core.conj.call(null,p1__4283_SHARP_,cljs.core.apply.call(null,p2__4284_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__4292);
};
var G__4333 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4333__delegate.call(this, x, y, z, args);
};
G__4333.cljs$lang$maxFixedArity = 3;
G__4333.cljs$lang$applyTo = (function (arglist__4334){
var x = cljs.core.first(arglist__4334);
var y = cljs.core.first(cljs.core.next(arglist__4334));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4334)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4334)));
return G__4333__delegate.call(this, x, y, z, args);
});
return G__4333;
})()
;
G__4326 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4326__4327.call(this);
case  1 :
return G__4326__4328.call(this,x);
case  2 :
return G__4326__4329.call(this,x,y);
case  3 :
return G__4326__4330.call(this,x,y,z);
default:
return G__4326__4331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4326.cljs$lang$maxFixedArity = 3;
G__4326.cljs$lang$applyTo = G__4326__4331.cljs$lang$applyTo;
return G__4326;
})()
};
var G__4325 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4325__delegate.call(this, f, g, h, fs);
};
G__4325.cljs$lang$maxFixedArity = 3;
G__4325.cljs$lang$applyTo = (function (arglist__4335){
var f = cljs.core.first(arglist__4335);
var g = cljs.core.first(cljs.core.next(arglist__4335));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4335)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4335)));
return G__4325__delegate.call(this, f, g, h, fs);
});
return G__4325;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4293.call(this,f);
case  2 :
return juxt__4294.call(this,f,g);
case  3 :
return juxt__4295.call(this,f,g,h);
default:
return juxt__4296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4296.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4337 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4340 = cljs.core.next.call(null,coll);
coll = G__4340;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4338 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4336 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4336))
{return (n > 0);
} else
{return and__3546__auto____4336;
}
})()))
{{
var G__4341 = (n - 1);
var G__4342 = cljs.core.next.call(null,coll);
n = G__4341;
coll = G__4342;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4337.call(this,n);
case  2 :
return dorun__4338.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4343 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4344 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4343.call(this,n);
case  2 :
return doall__4344.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4346 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4346),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4346),1)))
{return cljs.core.first.call(null,matches__4346);
} else
{return cljs.core.vec.call(null,matches__4346);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4347 = re.exec(s);

if(cljs.core.truth_((matches__4347 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4347),1)))
{return cljs.core.first.call(null,matches__4347);
} else
{return cljs.core.vec.call(null,matches__4347);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4348 = cljs.core.re_find.call(null,re,s);
var match_idx__4349 = s.search(re);
var match_str__4350 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4348))?cljs.core.first.call(null,match_data__4348):match_data__4348);
var post_match__4351 = cljs.core.subs.call(null,s,(match_idx__4349 + cljs.core.count.call(null,match_str__4350)));

if(cljs.core.truth_(match_data__4348))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4348,re_seq.call(null,re,post_match__4351));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4353__4354 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4355 = cljs.core.nth.call(null,vec__4353__4354,0,null);
var flags__4356 = cljs.core.nth.call(null,vec__4353__4354,1,null);
var pattern__4357 = cljs.core.nth.call(null,vec__4353__4354,2,null);

return (new RegExp(pattern__4357,flags__4356));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4352_SHARP_){
return print_one.call(null,p1__4352_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4358 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4358))
{var and__3546__auto____4362 = (function (){var x__351__auto____4359 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4360 = x__351__auto____4359;

if(cljs.core.truth_(and__3546__auto____4360))
{var and__3546__auto____4361 = x__351__auto____4359.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4361))
{return cljs.core.not.call(null,x__351__auto____4359.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4361;
}
} else
{return and__3546__auto____4360;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__351__auto____4359);
}
})();

if(cljs.core.truth_(and__3546__auto____4362))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4362;
}
} else
{return and__3546__auto____4358;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__351__auto____4363 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4364 = x__351__auto____4363;

if(cljs.core.truth_(and__3546__auto____4364))
{var and__3546__auto____4365 = x__351__auto____4363.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4365))
{return cljs.core.not.call(null,x__351__auto____4363.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4365;
}
} else
{return and__3546__auto____4364;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__351__auto____4363);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__4366 = cljs.core.first.call(null,objs);
var sb__4367 = (new goog.string.StringBuffer());

var G__4368__4369 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4368__4369))
{var obj__4370 = cljs.core.first.call(null,G__4368__4369);
var G__4368__4371 = G__4368__4369;

while(true){
if(cljs.core.truth_((obj__4370 === first_obj__4366)))
{} else
{sb__4367.append(" ");
}
var G__4372__4373 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4370,opts));

if(cljs.core.truth_(G__4372__4373))
{var string__4374 = cljs.core.first.call(null,G__4372__4373);
var G__4372__4375 = G__4372__4373;

while(true){
sb__4367.append(string__4374);
var temp__3698__auto____4376 = cljs.core.next.call(null,G__4372__4375);

if(cljs.core.truth_(temp__3698__auto____4376))
{var G__4372__4377 = temp__3698__auto____4376;

{
var G__4380 = cljs.core.first.call(null,G__4372__4377);
var G__4381 = G__4372__4377;
string__4374 = G__4380;
G__4372__4375 = G__4381;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4378 = cljs.core.next.call(null,G__4368__4371);

if(cljs.core.truth_(temp__3698__auto____4378))
{var G__4368__4379 = temp__3698__auto____4378;

{
var G__4382 = cljs.core.first.call(null,G__4368__4379);
var G__4383 = G__4368__4379;
obj__4370 = G__4382;
G__4368__4371 = G__4383;
continue;
}
} else
{}
break;
}
} else
{}
return sb__4367;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.call(null,cljs.core.pr_sb.call(null,objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__4384 = cljs.core.pr_sb.call(null,objs,opts);

sb__4384.append("\n");
return cljs.core.str.call(null,sb__4384);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4385 = cljs.core.first.call(null,objs);

var G__4386__4387 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4386__4387))
{var obj__4388 = cljs.core.first.call(null,G__4386__4387);
var G__4386__4389 = G__4386__4387;

while(true){
if(cljs.core.truth_((obj__4388 === first_obj__4385)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4390__4391 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4388,opts));

if(cljs.core.truth_(G__4390__4391))
{var string__4392 = cljs.core.first.call(null,G__4390__4391);
var G__4390__4393 = G__4390__4391;

while(true){
cljs.core.string_print.call(null,string__4392);
var temp__3698__auto____4394 = cljs.core.next.call(null,G__4390__4393);

if(cljs.core.truth_(temp__3698__auto____4394))
{var G__4390__4395 = temp__3698__auto____4394;

{
var G__4398 = cljs.core.first.call(null,G__4390__4395);
var G__4399 = G__4390__4395;
string__4392 = G__4398;
G__4390__4393 = G__4399;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4396 = cljs.core.next.call(null,G__4386__4389);

if(cljs.core.truth_(temp__3698__auto____4396))
{var G__4386__4397 = temp__3698__auto____4396;

{
var G__4400 = cljs.core.first.call(null,G__4386__4397);
var G__4401 = G__4386__4397;
obj__4388 = G__4400;
G__4386__4389 = G__4401;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__4402){
var objs = cljs.core.seq( arglist__4402 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__4403){
var objs = cljs.core.seq( arglist__4403 );;
return prn_str__delegate.call(this, objs);
});
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__4404){
var objs = cljs.core.seq( arglist__4404 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__4405){
var objs = cljs.core.seq( arglist__4405 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__4406){
var objs = cljs.core.seq( arglist__4406 );;
return print_str__delegate.call(this, objs);
});
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__4407){
var objs = cljs.core.seq( arglist__4407 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__4408){
var objs = cljs.core.seq( arglist__4408 );;
return println_str__delegate.call(this, objs);
});
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__4409){
var objs = cljs.core.seq( arglist__4409 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4410 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4410,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4411 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4411))
{var nspc__4412 = temp__3698__auto____4411;

return cljs.core.str.call(null,nspc__4412,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4413 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4413))
{var nspc__4414 = temp__3698__auto____4413;

return cljs.core.str.call(null,nspc__4414,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4415 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4415,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4416 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4417 = this;
var G__4418__4419 = cljs.core.seq.call(null,this__4417.watches);

if(cljs.core.truth_(G__4418__4419))
{var G__4421__4423 = cljs.core.first.call(null,G__4418__4419);
var vec__4422__4424 = G__4421__4423;
var key__4425 = cljs.core.nth.call(null,vec__4422__4424,0,null);
var f__4426 = cljs.core.nth.call(null,vec__4422__4424,1,null);
var G__4418__4427 = G__4418__4419;

var G__4421__4428 = G__4421__4423;
var G__4418__4429 = G__4418__4427;

while(true){
var vec__4430__4431 = G__4421__4428;
var key__4432 = cljs.core.nth.call(null,vec__4430__4431,0,null);
var f__4433 = cljs.core.nth.call(null,vec__4430__4431,1,null);
var G__4418__4434 = G__4418__4429;

f__4433.call(null,key__4432,this$,oldval,newval);
var temp__3698__auto____4435 = cljs.core.next.call(null,G__4418__4434);

if(cljs.core.truth_(temp__3698__auto____4435))
{var G__4418__4436 = temp__3698__auto____4435;

{
var G__4443 = cljs.core.first.call(null,G__4418__4436);
var G__4444 = G__4418__4436;
G__4421__4428 = G__4443;
G__4418__4429 = G__4444;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__4437 = this;
return this$.watches = cljs.core.assoc.call(null,this__4437.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4438 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4438.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4439 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4439.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4440 = this;
return this__4440.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4441 = this;
return this__4441.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4442 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__4451 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4452 = (function() { 
var G__4454__delegate = function (x,p__4445){
var map__4446__4447 = p__4445;
var map__4446__4448 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4446__4447))?cljs.core.apply.call(null,cljs.core.hash_map,map__4446__4447):map__4446__4447);
var validator__4449 = cljs.core.get.call(null,map__4446__4448,"\uFDD0'validator");
var meta__4450 = cljs.core.get.call(null,map__4446__4448,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4450,validator__4449,null));
};
var G__4454 = function (x,var_args){
var p__4445 = null;
if (goog.isDef(var_args)) {
  p__4445 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4454__delegate.call(this, x, p__4445);
};
G__4454.cljs$lang$maxFixedArity = 1;
G__4454.cljs$lang$applyTo = (function (arglist__4455){
var x = cljs.core.first(arglist__4455);
var p__4445 = cljs.core.rest(arglist__4455);
return G__4454__delegate.call(this, x, p__4445);
});
return G__4454;
})()
;
atom = function(x,var_args){
var p__4445 = var_args;
switch(arguments.length){
case  1 :
return atom__4451.call(this,x);
default:
return atom__4452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4452.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4456 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4456))
{var validate__4457 = temp__3698__auto____4456;

if(cljs.core.truth_(validate__4457.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__4458 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4458,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___4459 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4460 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4461 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4462 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4463 = (function() { 
var G__4465__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4465 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4465__delegate.call(this, a, f, x, y, z, more);
};
G__4465.cljs$lang$maxFixedArity = 5;
G__4465.cljs$lang$applyTo = (function (arglist__4466){
var a = cljs.core.first(arglist__4466);
var f = cljs.core.first(cljs.core.next(arglist__4466));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4466)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4466))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4466)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4466)))));
return G__4465__delegate.call(this, a, f, x, y, z, more);
});
return G__4465;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4459.call(this,a,f);
case  3 :
return swap_BANG___4460.call(this,a,f,x);
case  4 :
return swap_BANG___4461.call(this,a,f,x,y);
case  5 :
return swap_BANG___4462.call(this,a,f,x,y,z);
default:
return swap_BANG___4463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4463.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4467){
var iref = cljs.core.first(arglist__4467);
var f = cljs.core.first(cljs.core.next(arglist__4467));
var args = cljs.core.rest(cljs.core.next(arglist__4467));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__4468 = (function (){
return gensym.call(null,"G__");
});
var gensym__4469 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4468.call(this);
case  1 :
return gensym__4469.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4471 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__4471.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4472 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__4472.state,(function (p__4473){
var curr_state__4474 = p__4473;
var curr_state__4475 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__4474))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__4474):curr_state__4474);
var done__4476 = cljs.core.get.call(null,curr_state__4475,"\uFDD0'done");

if(cljs.core.truth_(done__4476))
{return curr_state__4475;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__4472.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__4477__4478 = options;
var map__4477__4479 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4477__4478))?cljs.core.apply.call(null,cljs.core.hash_map,map__4477__4478):map__4477__4478);
var keywordize_keys__4480 = cljs.core.get.call(null,map__4477__4479,"\uFDD0'keywordize-keys");
var keyfn__4481 = (cljs.core.truth_(keywordize_keys__4480)?cljs.core.keyword:cljs.core.str);
var f__4487 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__420__auto____4486 = (function iter__4482(s__4483){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4483__4484 = s__4483;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4483__4484)))
{var k__4485 = cljs.core.first.call(null,s__4483__4484);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__4481.call(null,k__4485),thisfn.call(null,(x[k__4485]))]),iter__4482.call(null,cljs.core.rest.call(null,s__4483__4484)));
} else
{return null;
}
break;
}
})));
});

return iter__420__auto____4486.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__4487.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4488){
var x = cljs.core.first(arglist__4488);
var options = cljs.core.rest(arglist__4488);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4489 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4493__delegate = function (args){
var temp__3695__auto____4490 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4489),args);

if(cljs.core.truth_(temp__3695__auto____4490))
{var v__4491 = temp__3695__auto____4490;

return v__4491;
} else
{var ret__4492 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4489,cljs.core.assoc,args,ret__4492);
return ret__4492;
}
};
var G__4493 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4493__delegate.call(this, args);
};
G__4493.cljs$lang$maxFixedArity = 0;
G__4493.cljs$lang$applyTo = (function (arglist__4494){
var args = cljs.core.seq( arglist__4494 );;
return G__4493__delegate.call(this, args);
});
return G__4493;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4496 = (function (f){
while(true){
var ret__4495 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4495)))
{{
var G__4499 = ret__4495;
f = G__4499;
continue;
}
} else
{return ret__4495;
}
break;
}
});
var trampoline__4497 = (function() { 
var G__4500__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4500 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4500__delegate.call(this, f, args);
};
G__4500.cljs$lang$maxFixedArity = 1;
G__4500.cljs$lang$applyTo = (function (arglist__4501){
var f = cljs.core.first(arglist__4501);
var args = cljs.core.rest(arglist__4501);
return G__4500__delegate.call(this, f, args);
});
return G__4500;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4496.call(this,f);
default:
return trampoline__4497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4497.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4502 = (function (){
return rand.call(null,1);
});
var rand__4503 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4502.call(this);
case  1 :
return rand__4503.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4505 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4505,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4505,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4514 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4515 = (function (h,child,parent){
var or__3548__auto____4506 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4506))
{return or__3548__auto____4506;
} else
{var or__3548__auto____4507 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4507))
{return or__3548__auto____4507;
} else
{var and__3546__auto____4508 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4508))
{var and__3546__auto____4509 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4509))
{var and__3546__auto____4510 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4510))
{var ret__4511 = true;
var i__4512 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4513 = cljs.core.not.call(null,ret__4511);

if(cljs.core.truth_(or__3548__auto____4513))
{return or__3548__auto____4513;
} else
{return cljs.core._EQ_.call(null,i__4512,cljs.core.count.call(null,parent));
}
})()))
{return ret__4511;
} else
{{
var G__4517 = isa_QMARK_.call(null,h,child.call(null,i__4512),parent.call(null,i__4512));
var G__4518 = (i__4512 + 1);
ret__4511 = G__4517;
i__4512 = G__4518;
continue;
}
}
break;
}
} else
{return and__3546__auto____4510;
}
} else
{return and__3546__auto____4509;
}
} else
{return and__3546__auto____4508;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4514.call(this,h,child);
case  3 :
return isa_QMARK___4515.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4519 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4520 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4519.call(this,h);
case  2 :
return parents__4520.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4522 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4523 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4522.call(this,h);
case  2 :
return ancestors__4523.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4525 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4526 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4525.call(this,h);
case  2 :
return descendants__4526.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4536 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4537 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__4531 = "\uFDD0'parents".call(null,h);
var td__4532 = "\uFDD0'descendants".call(null,h);
var ta__4533 = "\uFDD0'ancestors".call(null,h);
var tf__4534 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4535 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4531.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4533.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4533.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4531,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4534.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4532,parent,ta__4533),"\uFDD0'descendants":tf__4534.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4533,tag,td__4532)});
})());

if(cljs.core.truth_(or__3548__auto____4535))
{return or__3548__auto____4535;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4536.call(this,h,tag);
case  3 :
return derive__4537.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4543 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4544 = (function (h,tag,parent){
var parentMap__4539 = "\uFDD0'parents".call(null,h);
var childsParents__4540 = (cljs.core.truth_(parentMap__4539.call(null,tag))?cljs.core.disj.call(null,parentMap__4539.call(null,tag),parent):cljs.core.set([]));
var newParents__4541 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4540))?cljs.core.assoc.call(null,parentMap__4539,tag,childsParents__4540):cljs.core.dissoc.call(null,parentMap__4539,tag));
var deriv_seq__4542 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4528_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4528_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4528_SHARP_),cljs.core.second.call(null,p1__4528_SHARP_)));
}),cljs.core.seq.call(null,newParents__4541)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4539.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4529_SHARP_,p2__4530_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4529_SHARP_,p2__4530_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4542));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4543.call(this,h,tag);
case  3 :
return underive__4544.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4546 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4548 = (cljs.core.truth_((function (){var and__3546__auto____4547 = xprefs__4546;

if(cljs.core.truth_(and__3546__auto____4547))
{return xprefs__4546.call(null,y);
} else
{return and__3546__auto____4547;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4548))
{return or__3548__auto____4548;
} else
{var or__3548__auto____4550 = (function (){var ps__4549 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4549) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4549),prefer_table)))
{} else
{}
{
var G__4553 = cljs.core.rest.call(null,ps__4549);
ps__4549 = G__4553;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4550))
{return or__3548__auto____4550;
} else
{var or__3548__auto____4552 = (function (){var ps__4551 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4551) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4551),y,prefer_table)))
{} else
{}
{
var G__4554 = cljs.core.rest.call(null,ps__4551);
ps__4551 = G__4554;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4552))
{return or__3548__auto____4552;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4555 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4555))
{return or__3548__auto____4555;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4564 = cljs.core.reduce.call(null,(function (be,p__4556){
var vec__4557__4558 = p__4556;
var k__4559 = cljs.core.nth.call(null,vec__4557__4558,0,null);
var ___4560 = cljs.core.nth.call(null,vec__4557__4558,1,null);
var e__4561 = vec__4557__4558;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4559)))
{var be2__4563 = (cljs.core.truth_((function (){var or__3548__auto____4562 = (be === null);

if(cljs.core.truth_(or__3548__auto____4562))
{return or__3548__auto____4562;
} else
{return cljs.core.dominates.call(null,k__4559,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4561:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4563),k__4559,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4559," and ",cljs.core.first.call(null,be2__4563),", and neither is preferred")));
}
return be2__4563;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4564))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4564));
return cljs.core.second.call(null,best_entry__4564);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4565 = mf;

if(cljs.core.truth_(and__3546__auto____4565))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4565;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4566 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4566))
{return or__3548__auto____4566;
} else
{var or__3548__auto____4567 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4567))
{return or__3548__auto____4567;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4568 = mf;

if(cljs.core.truth_(and__3546__auto____4568))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4568;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4569 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4569))
{return or__3548__auto____4569;
} else
{var or__3548__auto____4570 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4570))
{return or__3548__auto____4570;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4571 = mf;

if(cljs.core.truth_(and__3546__auto____4571))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4571;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4572 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4572))
{return or__3548__auto____4572;
} else
{var or__3548__auto____4573 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4573))
{return or__3548__auto____4573;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4574 = mf;

if(cljs.core.truth_(and__3546__auto____4574))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4574;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4575 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4575))
{return or__3548__auto____4575;
} else
{var or__3548__auto____4576 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4576))
{return or__3548__auto____4576;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4577 = mf;

if(cljs.core.truth_(and__3546__auto____4577))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4577;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4578 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4578))
{return or__3548__auto____4578;
} else
{var or__3548__auto____4579 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4579))
{return or__3548__auto____4579;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4580 = mf;

if(cljs.core.truth_(and__3546__auto____4580))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4580;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4581 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4581))
{return or__3548__auto____4581;
} else
{var or__3548__auto____4582 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4582))
{return or__3548__auto____4582;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4583 = mf;

if(cljs.core.truth_(and__3546__auto____4583))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4583;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4584 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4584))
{return or__3548__auto____4584;
} else
{var or__3548__auto____4585 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4585))
{return or__3548__auto____4585;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4586 = mf;

if(cljs.core.truth_(and__3546__auto____4586))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4586;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4587 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4587))
{return or__3548__auto____4587;
} else
{var or__3548__auto____4588 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4588))
{return or__3548__auto____4588;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4589 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4590 = cljs.core._get_method.call(null,mf,dispatch_val__4589);

if(cljs.core.truth_(target_fn__4590))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4589)));
}
return cljs.core.apply.call(null,target_fn__4590,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__267__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4591 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4592 = this;
cljs.core.swap_BANG_.call(null,this__4592.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4592.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4592.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4592.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4593 = this;
cljs.core.swap_BANG_.call(null,this__4593.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4593.method_cache,this__4593.method_table,this__4593.cached_hierarchy,this__4593.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4594 = this;
cljs.core.swap_BANG_.call(null,this__4594.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4594.method_cache,this__4594.method_table,this__4594.cached_hierarchy,this__4594.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4595 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4595.cached_hierarchy),cljs.core.deref.call(null,this__4595.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4595.method_cache,this__4595.method_table,this__4595.cached_hierarchy,this__4595.hierarchy);
}
var temp__3695__auto____4596 = cljs.core.deref.call(null,this__4595.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4596))
{var target_fn__4597 = temp__3695__auto____4596;

return target_fn__4597;
} else
{var temp__3695__auto____4598 = cljs.core.find_and_cache_best_method.call(null,this__4595.name,dispatch_val,this__4595.hierarchy,this__4595.method_table,this__4595.prefer_table,this__4595.method_cache,this__4595.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4598))
{var target_fn__4599 = temp__3695__auto____4598;

return target_fn__4599;
} else
{return cljs.core.deref.call(null,this__4595.method_table).call(null,this__4595.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4600 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4600.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4600.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4600.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4600.method_cache,this__4600.method_table,this__4600.cached_hierarchy,this__4600.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4601 = this;
return cljs.core.deref.call(null,this__4601.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4602 = this;
return cljs.core.deref.call(null,this__4602.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4603 = this;
return cljs.core.do_dispatch.call(null,mf,this__4603.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4604__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4604 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4604__delegate.call(this, _, args);
};
G__4604.cljs$lang$maxFixedArity = 1;
G__4604.cljs$lang$applyTo = (function (arglist__4605){
var _ = cljs.core.first(arglist__4605);
var args = cljs.core.rest(arglist__4605);
return G__4604__delegate.call(this, _, args);
});
return G__4604;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
