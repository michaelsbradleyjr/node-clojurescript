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
var or__3548__auto____2816 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2816))
{return or__3548__auto____2816;
} else
{var or__3548__auto____2817 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2817))
{return or__3548__auto____2817;
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
var _invoke__2881 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____2818 = this$;

if(cljs.core.truth_(and__3546__auto____2818))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2818;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____2819 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2819))
{return or__3548__auto____2819;
} else
{var or__3548__auto____2820 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2820))
{return or__3548__auto____2820;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2882 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____2821 = this$;

if(cljs.core.truth_(and__3546__auto____2821))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2821;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____2822 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2822))
{return or__3548__auto____2822;
} else
{var or__3548__auto____2823 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2823))
{return or__3548__auto____2823;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__2883 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____2824 = this$;

if(cljs.core.truth_(and__3546__auto____2824))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2824;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____2825 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2825))
{return or__3548__auto____2825;
} else
{var or__3548__auto____2826 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2826))
{return or__3548__auto____2826;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__2884 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____2827 = this$;

if(cljs.core.truth_(and__3546__auto____2827))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2827;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____2828 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2828))
{return or__3548__auto____2828;
} else
{var or__3548__auto____2829 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2829))
{return or__3548__auto____2829;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__2885 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____2830 = this$;

if(cljs.core.truth_(and__3546__auto____2830))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2830;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____2831 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2831))
{return or__3548__auto____2831;
} else
{var or__3548__auto____2832 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2832))
{return or__3548__auto____2832;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__2886 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____2833 = this$;

if(cljs.core.truth_(and__3546__auto____2833))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2833;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____2834 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2834))
{return or__3548__auto____2834;
} else
{var or__3548__auto____2835 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2835))
{return or__3548__auto____2835;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__2887 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____2836 = this$;

if(cljs.core.truth_(and__3546__auto____2836))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2836;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____2837 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2837))
{return or__3548__auto____2837;
} else
{var or__3548__auto____2838 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2838))
{return or__3548__auto____2838;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__2888 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____2839 = this$;

if(cljs.core.truth_(and__3546__auto____2839))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2839;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____2840 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2840))
{return or__3548__auto____2840;
} else
{var or__3548__auto____2841 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2841))
{return or__3548__auto____2841;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__2889 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____2842 = this$;

if(cljs.core.truth_(and__3546__auto____2842))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2842;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____2843 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2843))
{return or__3548__auto____2843;
} else
{var or__3548__auto____2844 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2844))
{return or__3548__auto____2844;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__2890 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____2845 = this$;

if(cljs.core.truth_(and__3546__auto____2845))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2845;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____2846 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2846))
{return or__3548__auto____2846;
} else
{var or__3548__auto____2847 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2847))
{return or__3548__auto____2847;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__2891 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____2848 = this$;

if(cljs.core.truth_(and__3546__auto____2848))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2848;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____2849 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2849))
{return or__3548__auto____2849;
} else
{var or__3548__auto____2850 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2850))
{return or__3548__auto____2850;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__2892 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____2851 = this$;

if(cljs.core.truth_(and__3546__auto____2851))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2851;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____2852 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2852))
{return or__3548__auto____2852;
} else
{var or__3548__auto____2853 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2853))
{return or__3548__auto____2853;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__2893 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____2854 = this$;

if(cljs.core.truth_(and__3546__auto____2854))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2854;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____2855 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2855))
{return or__3548__auto____2855;
} else
{var or__3548__auto____2856 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2856))
{return or__3548__auto____2856;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__2894 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____2857 = this$;

if(cljs.core.truth_(and__3546__auto____2857))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2857;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____2858 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2858))
{return or__3548__auto____2858;
} else
{var or__3548__auto____2859 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2859))
{return or__3548__auto____2859;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__2895 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____2860 = this$;

if(cljs.core.truth_(and__3546__auto____2860))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2860;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____2861 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2861))
{return or__3548__auto____2861;
} else
{var or__3548__auto____2862 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2862))
{return or__3548__auto____2862;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__2896 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____2863 = this$;

if(cljs.core.truth_(and__3546__auto____2863))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2863;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____2864 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2864))
{return or__3548__auto____2864;
} else
{var or__3548__auto____2865 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2865))
{return or__3548__auto____2865;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__2897 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____2866 = this$;

if(cljs.core.truth_(and__3546__auto____2866))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2866;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____2867 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2867))
{return or__3548__auto____2867;
} else
{var or__3548__auto____2868 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2868))
{return or__3548__auto____2868;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__2898 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____2869 = this$;

if(cljs.core.truth_(and__3546__auto____2869))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2869;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____2870 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2870))
{return or__3548__auto____2870;
} else
{var or__3548__auto____2871 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2871))
{return or__3548__auto____2871;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__2899 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____2872 = this$;

if(cljs.core.truth_(and__3546__auto____2872))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2872;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____2873 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2873))
{return or__3548__auto____2873;
} else
{var or__3548__auto____2874 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2874))
{return or__3548__auto____2874;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__2900 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____2875 = this$;

if(cljs.core.truth_(and__3546__auto____2875))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2875;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____2876 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2876))
{return or__3548__auto____2876;
} else
{var or__3548__auto____2877 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2877))
{return or__3548__auto____2877;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__2901 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____2878 = this$;

if(cljs.core.truth_(and__3546__auto____2878))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2878;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____2879 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2879))
{return or__3548__auto____2879;
} else
{var or__3548__auto____2880 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2880))
{return or__3548__auto____2880;
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
return _invoke__2881.call(this,this$);
case  2 :
return _invoke__2882.call(this,this$,a);
case  3 :
return _invoke__2883.call(this,this$,a,b);
case  4 :
return _invoke__2884.call(this,this$,a,b,c);
case  5 :
return _invoke__2885.call(this,this$,a,b,c,d);
case  6 :
return _invoke__2886.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__2887.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__2888.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__2889.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__2890.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__2891.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__2892.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__2893.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__2894.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__2895.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__2896.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__2897.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__2898.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__2899.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__2900.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__2901.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2903 = coll;

if(cljs.core.truth_(and__3546__auto____2903))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2903;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2904 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2904))
{return or__3548__auto____2904;
} else
{var or__3548__auto____2905 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2905))
{return or__3548__auto____2905;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2906 = coll;

if(cljs.core.truth_(and__3546__auto____2906))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2906;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2907 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2907))
{return or__3548__auto____2907;
} else
{var or__3548__auto____2908 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2908))
{return or__3548__auto____2908;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2909 = coll;

if(cljs.core.truth_(and__3546__auto____2909))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2909;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2910 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2910))
{return or__3548__auto____2910;
} else
{var or__3548__auto____2911 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2911))
{return or__3548__auto____2911;
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
var _nth__2918 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2912 = coll;

if(cljs.core.truth_(and__3546__auto____2912))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2912;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2913 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2913))
{return or__3548__auto____2913;
} else
{var or__3548__auto____2914 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2914))
{return or__3548__auto____2914;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2919 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2915 = coll;

if(cljs.core.truth_(and__3546__auto____2915))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2915;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2916 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2916))
{return or__3548__auto____2916;
} else
{var or__3548__auto____2917 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2917))
{return or__3548__auto____2917;
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
return _nth__2918.call(this,coll,n);
case  3 :
return _nth__2919.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2921 = coll;

if(cljs.core.truth_(and__3546__auto____2921))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2921;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2922 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2922))
{return or__3548__auto____2922;
} else
{var or__3548__auto____2923 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2923))
{return or__3548__auto____2923;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2924 = coll;

if(cljs.core.truth_(and__3546__auto____2924))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2924;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2925 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2925))
{return or__3548__auto____2925;
} else
{var or__3548__auto____2926 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2926))
{return or__3548__auto____2926;
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
var _lookup__2933 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2927 = o;

if(cljs.core.truth_(and__3546__auto____2927))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2927;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2928 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2928))
{return or__3548__auto____2928;
} else
{var or__3548__auto____2929 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2929))
{return or__3548__auto____2929;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2934 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2930 = o;

if(cljs.core.truth_(and__3546__auto____2930))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2930;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2931 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2931))
{return or__3548__auto____2931;
} else
{var or__3548__auto____2932 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2932))
{return or__3548__auto____2932;
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
return _lookup__2933.call(this,o,k);
case  3 :
return _lookup__2934.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2936 = coll;

if(cljs.core.truth_(and__3546__auto____2936))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2936;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2937 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2937))
{return or__3548__auto____2937;
} else
{var or__3548__auto____2938 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2938))
{return or__3548__auto____2938;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2939 = coll;

if(cljs.core.truth_(and__3546__auto____2939))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2939;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2940 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2940))
{return or__3548__auto____2940;
} else
{var or__3548__auto____2941 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2941))
{return or__3548__auto____2941;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2942 = coll;

if(cljs.core.truth_(and__3546__auto____2942))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2942;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2943 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2943))
{return or__3548__auto____2943;
} else
{var or__3548__auto____2944 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2944))
{return or__3548__auto____2944;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2945 = coll;

if(cljs.core.truth_(and__3546__auto____2945))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2945;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2946 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2946))
{return or__3548__auto____2946;
} else
{var or__3548__auto____2947 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2947))
{return or__3548__auto____2947;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2948 = coll;

if(cljs.core.truth_(and__3546__auto____2948))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2948;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2949 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2949))
{return or__3548__auto____2949;
} else
{var or__3548__auto____2950 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2950))
{return or__3548__auto____2950;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2951 = coll;

if(cljs.core.truth_(and__3546__auto____2951))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2951;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2952 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2952))
{return or__3548__auto____2952;
} else
{var or__3548__auto____2953 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2953))
{return or__3548__auto____2953;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2954 = coll;

if(cljs.core.truth_(and__3546__auto____2954))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2954;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2955 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2955))
{return or__3548__auto____2955;
} else
{var or__3548__auto____2956 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2956))
{return or__3548__auto____2956;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2957 = o;

if(cljs.core.truth_(and__3546__auto____2957))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2957;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2958 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2958))
{return or__3548__auto____2958;
} else
{var or__3548__auto____2959 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2959))
{return or__3548__auto____2959;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2960 = o;

if(cljs.core.truth_(and__3546__auto____2960))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2960;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2961 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2961))
{return or__3548__auto____2961;
} else
{var or__3548__auto____2962 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2962))
{return or__3548__auto____2962;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2963 = o;

if(cljs.core.truth_(and__3546__auto____2963))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2963;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2964 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2964))
{return or__3548__auto____2964;
} else
{var or__3548__auto____2965 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2965))
{return or__3548__auto____2965;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2966 = o;

if(cljs.core.truth_(and__3546__auto____2966))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2966;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2967 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2967))
{return or__3548__auto____2967;
} else
{var or__3548__auto____2968 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2968))
{return or__3548__auto____2968;
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
var _reduce__2975 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2969 = coll;

if(cljs.core.truth_(and__3546__auto____2969))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2969;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2970 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2970))
{return or__3548__auto____2970;
} else
{var or__3548__auto____2971 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2971))
{return or__3548__auto____2971;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2976 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2972 = coll;

if(cljs.core.truth_(and__3546__auto____2972))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2972;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2973 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2973))
{return or__3548__auto____2973;
} else
{var or__3548__auto____2974 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2974))
{return or__3548__auto____2974;
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
return _reduce__2975.call(this,coll,f);
case  3 :
return _reduce__2976.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2978 = o;

if(cljs.core.truth_(and__3546__auto____2978))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2978;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2979 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2979))
{return or__3548__auto____2979;
} else
{var or__3548__auto____2980 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2980))
{return or__3548__auto____2980;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2981 = o;

if(cljs.core.truth_(and__3546__auto____2981))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2981;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2982 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2982))
{return or__3548__auto____2982;
} else
{var or__3548__auto____2983 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2983))
{return or__3548__auto____2983;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2984 = o;

if(cljs.core.truth_(and__3546__auto____2984))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2984;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2985 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2985))
{return or__3548__auto____2985;
} else
{var or__3548__auto____2986 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2986))
{return or__3548__auto____2986;
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
if(cljs.core.truth_((function (){var and__3546__auto____2987 = o;

if(cljs.core.truth_(and__3546__auto____2987))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2987;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2988 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2988))
{return or__3548__auto____2988;
} else
{var or__3548__auto____2989 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2989))
{return or__3548__auto____2989;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2990 = d;

if(cljs.core.truth_(and__3546__auto____2990))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2990;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2991 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2991))
{return or__3548__auto____2991;
} else
{var or__3548__auto____2992 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2992))
{return or__3548__auto____2992;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2993 = this$;

if(cljs.core.truth_(and__3546__auto____2993))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2993;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2994 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2994))
{return or__3548__auto____2994;
} else
{var or__3548__auto____2995 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2995))
{return or__3548__auto____2995;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2996 = this$;

if(cljs.core.truth_(and__3546__auto____2996))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2996;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2997 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2997))
{return or__3548__auto____2997;
} else
{var or__3548__auto____2998 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2998))
{return or__3548__auto____2998;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2999 = this$;

if(cljs.core.truth_(and__3546__auto____2999))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2999;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3000 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3000))
{return or__3548__auto____3000;
} else
{var or__3548__auto____3001 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3001))
{return or__3548__auto____3001;
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
var G__3002 = null;
var G__3002__3003 = (function (o,k){
return null;
});
var G__3002__3004 = (function (o,k,not_found){
return not_found;
});
G__3002 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3002__3003.call(this,o,k);
case  3 :
return G__3002__3004.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3002;
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
var G__3006 = null;
var G__3006__3007 = (function (_,f){
return f.call(null);
});
var G__3006__3008 = (function (_,f,start){
return start;
});
G__3006 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3006__3007.call(this,_,f);
case  3 :
return G__3006__3008.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3006;
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
var G__3010 = null;
var G__3010__3011 = (function (_,n){
return null;
});
var G__3010__3012 = (function (_,n,not_found){
return not_found;
});
G__3010 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3010__3011.call(this,_,n);
case  3 :
return G__3010__3012.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3010;
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
var ci_reduce__3020 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3014 = cljs.core._nth.call(null,cicoll,0);
var n__3015 = 1;

while(true){
if(cljs.core.truth_((n__3015 < cljs.core._count.call(null,cicoll))))
{{
var G__3024 = f.call(null,val__3014,cljs.core._nth.call(null,cicoll,n__3015));
var G__3025 = (n__3015 + 1);
val__3014 = G__3024;
n__3015 = G__3025;
continue;
}
} else
{return val__3014;
}
break;
}
}
});
var ci_reduce__3021 = (function (cicoll,f,val){
var val__3016 = val;
var n__3017 = 0;

while(true){
if(cljs.core.truth_((n__3017 < cljs.core._count.call(null,cicoll))))
{{
var G__3026 = f.call(null,val__3016,cljs.core._nth.call(null,cicoll,n__3017));
var G__3027 = (n__3017 + 1);
val__3016 = G__3026;
n__3017 = G__3027;
continue;
}
} else
{return val__3016;
}
break;
}
});
var ci_reduce__3022 = (function (cicoll,f,val,idx){
var val__3018 = val;
var n__3019 = idx;

while(true){
if(cljs.core.truth_((n__3019 < cljs.core._count.call(null,cicoll))))
{{
var G__3028 = f.call(null,val__3018,cljs.core._nth.call(null,cicoll,n__3019));
var G__3029 = (n__3019 + 1);
val__3018 = G__3028;
n__3019 = G__3029;
continue;
}
} else
{return val__3018;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3020.call(this,cicoll,f);
case  3 :
return ci_reduce__3021.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3022.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3030 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3043 = null;
var G__3043__3044 = (function (_,f){
var this__3031 = this;
return cljs.core.ci_reduce.call(null,this__3031.a,f,(this__3031.a[this__3031.i]),(this__3031.i + 1));
});
var G__3043__3045 = (function (_,f,start){
var this__3032 = this;
return cljs.core.ci_reduce.call(null,this__3032.a,f,start,this__3032.i);
});
G__3043 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3043__3044.call(this,_,f);
case  3 :
return G__3043__3045.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3043;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3033 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3034 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3047 = null;
var G__3047__3048 = (function (coll,n){
var this__3035 = this;
var i__3036 = (n + this__3035.i);

if(cljs.core.truth_((i__3036 < this__3035.a.length)))
{return (this__3035.a[i__3036]);
} else
{return null;
}
});
var G__3047__3049 = (function (coll,n,not_found){
var this__3037 = this;
var i__3038 = (n + this__3037.i);

if(cljs.core.truth_((i__3038 < this__3037.a.length)))
{return (this__3037.a[i__3038]);
} else
{return not_found;
}
});
G__3047 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3047__3048.call(this,coll,n);
case  3 :
return G__3047__3049.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3047;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3039 = this;
return (this__3039.a.length - this__3039.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3040 = this;
return (this__3040.a[this__3040.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3041 = this;
if(cljs.core.truth_(((this__3041.i + 1) < this__3041.a.length)))
{return (new cljs.core.IndexedSeq(this__3041.a,(this__3041.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3042 = this;
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
var G__3051 = null;
var G__3051__3052 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3051__3053 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3051 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3051__3052.call(this,array,f);
case  3 :
return G__3051__3053.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3051;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3055 = null;
var G__3055__3056 = (function (array,k){
return (array[k]);
});
var G__3055__3057 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3055 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3055__3056.call(this,array,k);
case  3 :
return G__3055__3057.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3055;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3059 = null;
var G__3059__3060 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3059__3061 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3059 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3059__3060.call(this,array,n);
case  3 :
return G__3059__3061.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3059;
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
var temp__3698__auto____3063 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3063))
{var s__3064 = temp__3698__auto____3063;

return cljs.core._first.call(null,s__3064);
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
var G__3065 = cljs.core.next.call(null,s);
s = G__3065;
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
var s__3066 = cljs.core.seq.call(null,x);
var n__3067 = 0;

while(true){
if(cljs.core.truth_(s__3066))
{{
var G__3068 = cljs.core.next.call(null,s__3066);
var G__3069 = (n__3067 + 1);
s__3066 = G__3068;
n__3067 = G__3069;
continue;
}
} else
{return n__3067;
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
var conj__3070 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3071 = (function() { 
var G__3073__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3074 = conj.call(null,coll,x);
var G__3075 = cljs.core.first.call(null,xs);
var G__3076 = cljs.core.next.call(null,xs);
coll = G__3074;
x = G__3075;
xs = G__3076;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3073 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3073__delegate.call(this, coll, x, xs);
};
G__3073.cljs$lang$maxFixedArity = 2;
G__3073.cljs$lang$applyTo = (function (arglist__3077){
var coll = cljs.core.first(arglist__3077);
var x = cljs.core.first(cljs.core.next(arglist__3077));
var xs = cljs.core.rest(cljs.core.next(arglist__3077));
return G__3073__delegate.call(this, coll, x, xs);
});
return G__3073;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3070.call(this,coll,x);
default:
return conj__3071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3071.cljs$lang$applyTo;
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
var nth__3078 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3079 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3078.call(this,coll,n);
case  3 :
return nth__3079.call(this,coll,n,not_found);
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
var get__3081 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3082 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3081.call(this,o,k);
case  3 :
return get__3082.call(this,o,k,not_found);
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
var assoc__3085 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3086 = (function() { 
var G__3088__delegate = function (coll,k,v,kvs){
while(true){
var ret__3084 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3089 = ret__3084;
var G__3090 = cljs.core.first.call(null,kvs);
var G__3091 = cljs.core.second.call(null,kvs);
var G__3092 = cljs.core.nnext.call(null,kvs);
coll = G__3089;
k = G__3090;
v = G__3091;
kvs = G__3092;
continue;
}
} else
{return ret__3084;
}
break;
}
};
var G__3088 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3088__delegate.call(this, coll, k, v, kvs);
};
G__3088.cljs$lang$maxFixedArity = 3;
G__3088.cljs$lang$applyTo = (function (arglist__3093){
var coll = cljs.core.first(arglist__3093);
var k = cljs.core.first(cljs.core.next(arglist__3093));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3093)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3093)));
return G__3088__delegate.call(this, coll, k, v, kvs);
});
return G__3088;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3085.call(this,coll,k,v);
default:
return assoc__3086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3086.cljs$lang$applyTo;
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
var dissoc__3095 = (function (coll){
return coll;
});
var dissoc__3096 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3097 = (function() { 
var G__3099__delegate = function (coll,k,ks){
while(true){
var ret__3094 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3100 = ret__3094;
var G__3101 = cljs.core.first.call(null,ks);
var G__3102 = cljs.core.next.call(null,ks);
coll = G__3100;
k = G__3101;
ks = G__3102;
continue;
}
} else
{return ret__3094;
}
break;
}
};
var G__3099 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3099__delegate.call(this, coll, k, ks);
};
G__3099.cljs$lang$maxFixedArity = 2;
G__3099.cljs$lang$applyTo = (function (arglist__3103){
var coll = cljs.core.first(arglist__3103);
var k = cljs.core.first(cljs.core.next(arglist__3103));
var ks = cljs.core.rest(cljs.core.next(arglist__3103));
return G__3099__delegate.call(this, coll, k, ks);
});
return G__3099;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3095.call(this,coll);
case  2 :
return dissoc__3096.call(this,coll,k);
default:
return dissoc__3097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3097.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__357__auto____3104 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3105 = x__357__auto____3104;

if(cljs.core.truth_(and__3546__auto____3105))
{var and__3546__auto____3106 = x__357__auto____3104.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3106))
{return cljs.core.not.call(null,x__357__auto____3104.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3106;
}
} else
{return and__3546__auto____3105;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__357__auto____3104);
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
var disj__3108 = (function (coll){
return coll;
});
var disj__3109 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3110 = (function() { 
var G__3112__delegate = function (coll,k,ks){
while(true){
var ret__3107 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3113 = ret__3107;
var G__3114 = cljs.core.first.call(null,ks);
var G__3115 = cljs.core.next.call(null,ks);
coll = G__3113;
k = G__3114;
ks = G__3115;
continue;
}
} else
{return ret__3107;
}
break;
}
};
var G__3112 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3112__delegate.call(this, coll, k, ks);
};
G__3112.cljs$lang$maxFixedArity = 2;
G__3112.cljs$lang$applyTo = (function (arglist__3116){
var coll = cljs.core.first(arglist__3116);
var k = cljs.core.first(cljs.core.next(arglist__3116));
var ks = cljs.core.rest(cljs.core.next(arglist__3116));
return G__3112__delegate.call(this, coll, k, ks);
});
return G__3112;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3108.call(this,coll);
case  2 :
return disj__3109.call(this,coll,k);
default:
return disj__3110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3110.cljs$lang$applyTo;
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
{var x__357__auto____3117 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3118 = x__357__auto____3117;

if(cljs.core.truth_(and__3546__auto____3118))
{var and__3546__auto____3119 = x__357__auto____3117.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3119))
{return cljs.core.not.call(null,x__357__auto____3117.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3119;
}
} else
{return and__3546__auto____3118;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__357__auto____3117);
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
{var x__357__auto____3120 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3121 = x__357__auto____3120;

if(cljs.core.truth_(and__3546__auto____3121))
{var and__3546__auto____3122 = x__357__auto____3120.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3122))
{return cljs.core.not.call(null,x__357__auto____3120.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3122;
}
} else
{return and__3546__auto____3121;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__357__auto____3120);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__357__auto____3123 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3124 = x__357__auto____3123;

if(cljs.core.truth_(and__3546__auto____3124))
{var and__3546__auto____3125 = x__357__auto____3123.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3125))
{return cljs.core.not.call(null,x__357__auto____3123.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3125;
}
} else
{return and__3546__auto____3124;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__357__auto____3123);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__357__auto____3126 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3127 = x__357__auto____3126;

if(cljs.core.truth_(and__3546__auto____3127))
{var and__3546__auto____3128 = x__357__auto____3126.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3128))
{return cljs.core.not.call(null,x__357__auto____3126.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3128;
}
} else
{return and__3546__auto____3127;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__357__auto____3126);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__357__auto____3129 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3130 = x__357__auto____3129;

if(cljs.core.truth_(and__3546__auto____3130))
{var and__3546__auto____3131 = x__357__auto____3129.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3131))
{return cljs.core.not.call(null,x__357__auto____3129.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3131;
}
} else
{return and__3546__auto____3130;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__357__auto____3129);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__357__auto____3132 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3133 = x__357__auto____3132;

if(cljs.core.truth_(and__3546__auto____3133))
{var and__3546__auto____3134 = x__357__auto____3132.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3134))
{return cljs.core.not.call(null,x__357__auto____3132.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3134;
}
} else
{return and__3546__auto____3133;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__357__auto____3132);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__357__auto____3135 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3136 = x__357__auto____3135;

if(cljs.core.truth_(and__3546__auto____3136))
{var and__3546__auto____3137 = x__357__auto____3135.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3137))
{return cljs.core.not.call(null,x__357__auto____3135.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3137;
}
} else
{return and__3546__auto____3136;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__357__auto____3135);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3138 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3138.push(key);
}));
return keys__3138;
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
{var x__357__auto____3139 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3140 = x__357__auto____3139;

if(cljs.core.truth_(and__3546__auto____3140))
{var and__3546__auto____3141 = x__357__auto____3139.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3141))
{return cljs.core.not.call(null,x__357__auto____3139.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3141;
}
} else
{return and__3546__auto____3140;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__357__auto____3139);
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
var and__3546__auto____3142 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3142))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3143 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3143))
{return or__3548__auto____3143;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3142;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3144 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3144))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3144;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3145 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3145))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3145;
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
var and__3546__auto____3146 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3146))
{return (n == n.toFixed());
} else
{return and__3546__auto____3146;
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
if(cljs.core.truth_((function (){var and__3546__auto____3147 = coll;

if(cljs.core.truth_(and__3546__auto____3147))
{var and__3546__auto____3148 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3148))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3148;
}
} else
{return and__3546__auto____3147;
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
var distinct_QMARK___3153 = (function (x){
return true;
});
var distinct_QMARK___3154 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3155 = (function() { 
var G__3157__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3149 = cljs.core.set([y,x]);
var xs__3150 = more;

while(true){
var x__3151 = cljs.core.first.call(null,xs__3150);
var etc__3152 = cljs.core.next.call(null,xs__3150);

if(cljs.core.truth_(xs__3150))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3149,x__3151)))
{return false;
} else
{{
var G__3158 = cljs.core.conj.call(null,s__3149,x__3151);
var G__3159 = etc__3152;
s__3149 = G__3158;
xs__3150 = G__3159;
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
var G__3157 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3157__delegate.call(this, x, y, more);
};
G__3157.cljs$lang$maxFixedArity = 2;
G__3157.cljs$lang$applyTo = (function (arglist__3160){
var x = cljs.core.first(arglist__3160);
var y = cljs.core.first(cljs.core.next(arglist__3160));
var more = cljs.core.rest(cljs.core.next(arglist__3160));
return G__3157__delegate.call(this, x, y, more);
});
return G__3157;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3153.call(this,x);
case  2 :
return distinct_QMARK___3154.call(this,x,y);
default:
return distinct_QMARK___3155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3155.cljs$lang$applyTo;
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
var r__3161 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3161)))
{return r__3161;
} else
{if(cljs.core.truth_(r__3161))
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
var sort__3163 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3164 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3162 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3162,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3162);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3163.call(this,comp);
case  2 :
return sort__3164.call(this,comp,coll);
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
var sort_by__3166 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3167 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3166.call(this,keyfn,comp);
case  3 :
return sort_by__3167.call(this,keyfn,comp,coll);
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
var reduce__3169 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3170 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3169.call(this,f,val);
case  3 :
return reduce__3170.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3176 = (function (f,coll){
var temp__3695__auto____3172 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3172))
{var s__3173 = temp__3695__auto____3172;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3173),cljs.core.next.call(null,s__3173));
} else
{return f.call(null);
}
});
var seq_reduce__3177 = (function (f,val,coll){
var val__3174 = val;
var coll__3175 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3175))
{{
var G__3179 = f.call(null,val__3174,cljs.core.first.call(null,coll__3175));
var G__3180 = cljs.core.next.call(null,coll__3175);
val__3174 = G__3179;
coll__3175 = G__3180;
continue;
}
} else
{return val__3174;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3176.call(this,f,val);
case  3 :
return seq_reduce__3177.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3181 = null;
var G__3181__3182 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3181__3183 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3181 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3181__3182.call(this,coll,f);
case  3 :
return G__3181__3183.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3181;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3185 = (function (){
return 0;
});
var _PLUS___3186 = (function (x){
return x;
});
var _PLUS___3187 = (function (x,y){
return (x + y);
});
var _PLUS___3188 = (function() { 
var G__3190__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3190 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3190__delegate.call(this, x, y, more);
};
G__3190.cljs$lang$maxFixedArity = 2;
G__3190.cljs$lang$applyTo = (function (arglist__3191){
var x = cljs.core.first(arglist__3191);
var y = cljs.core.first(cljs.core.next(arglist__3191));
var more = cljs.core.rest(cljs.core.next(arglist__3191));
return G__3190__delegate.call(this, x, y, more);
});
return G__3190;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3185.call(this);
case  1 :
return _PLUS___3186.call(this,x);
case  2 :
return _PLUS___3187.call(this,x,y);
default:
return _PLUS___3188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3188.cljs$lang$applyTo;
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
var ___3192 = (function (x){
return (- x);
});
var ___3193 = (function (x,y){
return (x - y);
});
var ___3194 = (function() { 
var G__3196__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3196 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3196__delegate.call(this, x, y, more);
};
G__3196.cljs$lang$maxFixedArity = 2;
G__3196.cljs$lang$applyTo = (function (arglist__3197){
var x = cljs.core.first(arglist__3197);
var y = cljs.core.first(cljs.core.next(arglist__3197));
var more = cljs.core.rest(cljs.core.next(arglist__3197));
return G__3196__delegate.call(this, x, y, more);
});
return G__3196;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3192.call(this,x);
case  2 :
return ___3193.call(this,x,y);
default:
return ___3194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3194.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3198 = (function (){
return 1;
});
var _STAR___3199 = (function (x){
return x;
});
var _STAR___3200 = (function (x,y){
return (x * y);
});
var _STAR___3201 = (function() { 
var G__3203__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3203 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3203__delegate.call(this, x, y, more);
};
G__3203.cljs$lang$maxFixedArity = 2;
G__3203.cljs$lang$applyTo = (function (arglist__3204){
var x = cljs.core.first(arglist__3204);
var y = cljs.core.first(cljs.core.next(arglist__3204));
var more = cljs.core.rest(cljs.core.next(arglist__3204));
return G__3203__delegate.call(this, x, y, more);
});
return G__3203;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3198.call(this);
case  1 :
return _STAR___3199.call(this,x);
case  2 :
return _STAR___3200.call(this,x,y);
default:
return _STAR___3201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3201.cljs$lang$applyTo;
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
var _SLASH___3205 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3206 = (function (x,y){
return (x / y);
});
var _SLASH___3207 = (function() { 
var G__3209__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3209 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3209__delegate.call(this, x, y, more);
};
G__3209.cljs$lang$maxFixedArity = 2;
G__3209.cljs$lang$applyTo = (function (arglist__3210){
var x = cljs.core.first(arglist__3210);
var y = cljs.core.first(cljs.core.next(arglist__3210));
var more = cljs.core.rest(cljs.core.next(arglist__3210));
return G__3209__delegate.call(this, x, y, more);
});
return G__3209;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3205.call(this,x);
case  2 :
return _SLASH___3206.call(this,x,y);
default:
return _SLASH___3207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3207.cljs$lang$applyTo;
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
var _LT___3211 = (function (x){
return true;
});
var _LT___3212 = (function (x,y){
return (x < y);
});
var _LT___3213 = (function() { 
var G__3215__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3216 = y;
var G__3217 = cljs.core.first.call(null,more);
var G__3218 = cljs.core.next.call(null,more);
x = G__3216;
y = G__3217;
more = G__3218;
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
var G__3215 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3215__delegate.call(this, x, y, more);
};
G__3215.cljs$lang$maxFixedArity = 2;
G__3215.cljs$lang$applyTo = (function (arglist__3219){
var x = cljs.core.first(arglist__3219);
var y = cljs.core.first(cljs.core.next(arglist__3219));
var more = cljs.core.rest(cljs.core.next(arglist__3219));
return G__3215__delegate.call(this, x, y, more);
});
return G__3215;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3211.call(this,x);
case  2 :
return _LT___3212.call(this,x,y);
default:
return _LT___3213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3213.cljs$lang$applyTo;
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
var _LT__EQ___3220 = (function (x){
return true;
});
var _LT__EQ___3221 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3222 = (function() { 
var G__3224__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3225 = y;
var G__3226 = cljs.core.first.call(null,more);
var G__3227 = cljs.core.next.call(null,more);
x = G__3225;
y = G__3226;
more = G__3227;
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
var G__3224 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3224__delegate.call(this, x, y, more);
};
G__3224.cljs$lang$maxFixedArity = 2;
G__3224.cljs$lang$applyTo = (function (arglist__3228){
var x = cljs.core.first(arglist__3228);
var y = cljs.core.first(cljs.core.next(arglist__3228));
var more = cljs.core.rest(cljs.core.next(arglist__3228));
return G__3224__delegate.call(this, x, y, more);
});
return G__3224;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3220.call(this,x);
case  2 :
return _LT__EQ___3221.call(this,x,y);
default:
return _LT__EQ___3222.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3222.cljs$lang$applyTo;
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
var _GT___3229 = (function (x){
return true;
});
var _GT___3230 = (function (x,y){
return (x > y);
});
var _GT___3231 = (function() { 
var G__3233__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3234 = y;
var G__3235 = cljs.core.first.call(null,more);
var G__3236 = cljs.core.next.call(null,more);
x = G__3234;
y = G__3235;
more = G__3236;
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
var G__3233 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3233__delegate.call(this, x, y, more);
};
G__3233.cljs$lang$maxFixedArity = 2;
G__3233.cljs$lang$applyTo = (function (arglist__3237){
var x = cljs.core.first(arglist__3237);
var y = cljs.core.first(cljs.core.next(arglist__3237));
var more = cljs.core.rest(cljs.core.next(arglist__3237));
return G__3233__delegate.call(this, x, y, more);
});
return G__3233;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3229.call(this,x);
case  2 :
return _GT___3230.call(this,x,y);
default:
return _GT___3231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3231.cljs$lang$applyTo;
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
var _GT__EQ___3238 = (function (x){
return true;
});
var _GT__EQ___3239 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3240 = (function() { 
var G__3242__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3243 = y;
var G__3244 = cljs.core.first.call(null,more);
var G__3245 = cljs.core.next.call(null,more);
x = G__3243;
y = G__3244;
more = G__3245;
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
var G__3242 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3242__delegate.call(this, x, y, more);
};
G__3242.cljs$lang$maxFixedArity = 2;
G__3242.cljs$lang$applyTo = (function (arglist__3246){
var x = cljs.core.first(arglist__3246);
var y = cljs.core.first(cljs.core.next(arglist__3246));
var more = cljs.core.rest(cljs.core.next(arglist__3246));
return G__3242__delegate.call(this, x, y, more);
});
return G__3242;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3238.call(this,x);
case  2 :
return _GT__EQ___3239.call(this,x,y);
default:
return _GT__EQ___3240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3240.cljs$lang$applyTo;
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
var max__3247 = (function (x){
return x;
});
var max__3248 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3249 = (function() { 
var G__3251__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3251 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3251__delegate.call(this, x, y, more);
};
G__3251.cljs$lang$maxFixedArity = 2;
G__3251.cljs$lang$applyTo = (function (arglist__3252){
var x = cljs.core.first(arglist__3252);
var y = cljs.core.first(cljs.core.next(arglist__3252));
var more = cljs.core.rest(cljs.core.next(arglist__3252));
return G__3251__delegate.call(this, x, y, more);
});
return G__3251;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3247.call(this,x);
case  2 :
return max__3248.call(this,x,y);
default:
return max__3249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3249.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3253 = (function (x){
return x;
});
var min__3254 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3255 = (function() { 
var G__3257__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3257 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3257__delegate.call(this, x, y, more);
};
G__3257.cljs$lang$maxFixedArity = 2;
G__3257.cljs$lang$applyTo = (function (arglist__3258){
var x = cljs.core.first(arglist__3258);
var y = cljs.core.first(cljs.core.next(arglist__3258));
var more = cljs.core.rest(cljs.core.next(arglist__3258));
return G__3257__delegate.call(this, x, y, more);
});
return G__3257;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3253.call(this,x);
case  2 :
return min__3254.call(this,x,y);
default:
return min__3255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3255.cljs$lang$applyTo;
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
var rem__3259 = (n % d);

return cljs.core.fix.call(null,((n - rem__3259) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3260 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3260));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3261 = (function (){
return Math.random.call(null);
});
var rand__3262 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3261.call(this);
case  1 :
return rand__3262.call(this,n);
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
var _EQ__EQ___3264 = (function (x){
return true;
});
var _EQ__EQ___3265 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3266 = (function() { 
var G__3268__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3269 = y;
var G__3270 = cljs.core.first.call(null,more);
var G__3271 = cljs.core.next.call(null,more);
x = G__3269;
y = G__3270;
more = G__3271;
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
var G__3268 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3268__delegate.call(this, x, y, more);
};
G__3268.cljs$lang$maxFixedArity = 2;
G__3268.cljs$lang$applyTo = (function (arglist__3272){
var x = cljs.core.first(arglist__3272);
var y = cljs.core.first(cljs.core.next(arglist__3272));
var more = cljs.core.rest(cljs.core.next(arglist__3272));
return G__3268__delegate.call(this, x, y, more);
});
return G__3268;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3264.call(this,x);
case  2 :
return _EQ__EQ___3265.call(this,x,y);
default:
return _EQ__EQ___3266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3266.cljs$lang$applyTo;
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
var n__3273 = n;
var xs__3274 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3275 = xs__3274;

if(cljs.core.truth_(and__3546__auto____3275))
{return (n__3273 > 0);
} else
{return and__3546__auto____3275;
}
})()))
{{
var G__3276 = (n__3273 - 1);
var G__3277 = cljs.core.next.call(null,xs__3274);
n__3273 = G__3276;
xs__3274 = G__3277;
continue;
}
} else
{return xs__3274;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3282 = null;
var G__3282__3283 = (function (coll,n){
var temp__3695__auto____3278 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3278))
{var xs__3279 = temp__3695__auto____3278;

return cljs.core.first.call(null,xs__3279);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3282__3284 = (function (coll,n,not_found){
var temp__3695__auto____3280 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3280))
{var xs__3281 = temp__3695__auto____3280;

return cljs.core.first.call(null,xs__3281);
} else
{return not_found;
}
});
G__3282 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3282__3283.call(this,coll,n);
case  3 :
return G__3282__3284.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3282;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3286 = (function (){
return "";
});
var str_STAR___3287 = (function (x){
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
var str_STAR___3288 = (function() { 
var G__3290__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3291 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3292 = cljs.core.next.call(null,more);
sb = G__3291;
more = G__3292;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3290 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3290__delegate.call(this, x, ys);
};
G__3290.cljs$lang$maxFixedArity = 1;
G__3290.cljs$lang$applyTo = (function (arglist__3293){
var x = cljs.core.first(arglist__3293);
var ys = cljs.core.rest(arglist__3293);
return G__3290__delegate.call(this, x, ys);
});
return G__3290;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3286.call(this);
case  1 :
return str_STAR___3287.call(this,x);
default:
return str_STAR___3288.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3288.cljs$lang$applyTo;
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
var str__3294 = (function (){
return "";
});
var str__3295 = (function (x){
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
var str__3296 = (function() { 
var G__3298__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3299 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3300 = cljs.core.next.call(null,more);
sb = G__3299;
more = G__3300;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3298 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3298__delegate.call(this, x, ys);
};
G__3298.cljs$lang$maxFixedArity = 1;
G__3298.cljs$lang$applyTo = (function (arglist__3301){
var x = cljs.core.first(arglist__3301);
var ys = cljs.core.rest(arglist__3301);
return G__3298__delegate.call(this, x, ys);
});
return G__3298;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3294.call(this);
case  1 :
return str__3295.call(this,x);
default:
return str__3296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3296.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3302 = (function (s,start){
return s.substring(start);
});
var subs__3303 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3302.call(this,s,start);
case  3 :
return subs__3303.call(this,s,start,end);
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
var symbol__3305 = (function (name){
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
var symbol__3306 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3305.call(this,ns);
case  2 :
return symbol__3306.call(this,ns,name);
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
var keyword__3308 = (function (name){
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
var keyword__3309 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3308.call(this,ns);
case  2 :
return keyword__3309.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3311 = cljs.core.seq.call(null,x);
var ys__3312 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3311 === null)))
{return (ys__3312 === null);
} else
{if(cljs.core.truth_((ys__3312 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3311),cljs.core.first.call(null,ys__3312))))
{{
var G__3313 = cljs.core.next.call(null,xs__3311);
var G__3314 = cljs.core.next.call(null,ys__3312);
xs__3311 = G__3313;
ys__3312 = G__3314;
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
return cljs.core.reduce.call(null,(function (p1__3315_SHARP_,p2__3316_SHARP_){
return cljs.core.hash_combine.call(null,p1__3315_SHARP_,cljs.core.hash.call(null,p2__3316_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3317__3318 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3317__3318))
{var G__3320__3322 = cljs.core.first.call(null,G__3317__3318);
var vec__3321__3323 = G__3320__3322;
var key_name__3324 = cljs.core.nth.call(null,vec__3321__3323,0,null);
var f__3325 = cljs.core.nth.call(null,vec__3321__3323,1,null);
var G__3317__3326 = G__3317__3318;

var G__3320__3327 = G__3320__3322;
var G__3317__3328 = G__3317__3326;

while(true){
var vec__3329__3330 = G__3320__3327;
var key_name__3331 = cljs.core.nth.call(null,vec__3329__3330,0,null);
var f__3332 = cljs.core.nth.call(null,vec__3329__3330,1,null);
var G__3317__3333 = G__3317__3328;

var str_name__3334 = cljs.core.name.call(null,key_name__3331);

obj[str_name__3334] = f__3332;
var temp__3698__auto____3335 = cljs.core.next.call(null,G__3317__3333);

if(cljs.core.truth_(temp__3698__auto____3335))
{var G__3317__3336 = temp__3698__auto____3335;

{
var G__3337 = cljs.core.first.call(null,G__3317__3336);
var G__3338 = G__3317__3336;
G__3320__3327 = G__3337;
G__3317__3328 = G__3338;
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
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3339 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3340 = this;
return (new cljs.core.List(this__3340.meta,o,coll,(this__3340.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3341 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3342 = this;
return this__3342.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3343 = this;
return this__3343.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3344 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3345 = this;
return this__3345.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3346 = this;
return this__3346.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3347 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3348 = this;
return (new cljs.core.List(meta,this__3348.first,this__3348.rest,this__3348.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3349 = this;
return this__3349.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3350 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3351 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3352 = this;
return (new cljs.core.List(this__3352.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3353 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3354 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3355 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3356 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3357 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3358 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3359 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3360 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3361 = this;
return this__3361.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3362 = this;
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
list.cljs$lang$applyTo = (function (arglist__3363){
var items = cljs.core.seq( arglist__3363 );;
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
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3364 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3365 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3366 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3367 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3367.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3368 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3369 = this;
return this__3369.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3370 = this;
if(cljs.core.truth_((this__3370.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3370.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3371 = this;
return this__3371.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3372 = this;
return (new cljs.core.Cons(meta,this__3372.first,this__3372.rest));
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
var G__3373 = null;
var G__3373__3374 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3373__3375 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3373 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3373__3374.call(this,string,f);
case  3 :
return G__3373__3375.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3373;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3377 = null;
var G__3377__3378 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3377__3379 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3377 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3377__3378.call(this,string,k);
case  3 :
return G__3377__3379.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3377;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3381 = null;
var G__3381__3382 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3381__3383 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3381 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3381__3382.call(this,string,n);
case  3 :
return G__3381__3383.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3381;
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
var G__3391 = null;
var G__3391__3392 = (function (tsym3385,coll){
var tsym3385__3387 = this;

var this$__3388 = tsym3385__3387;

return cljs.core.get.call(null,coll,this$__3388.toString());
});
var G__3391__3393 = (function (tsym3386,coll,not_found){
var tsym3386__3389 = this;

var this$__3390 = tsym3386__3389;

return cljs.core.get.call(null,coll,this$__3390.toString(),not_found);
});
G__3391 = function(tsym3386,coll,not_found){
switch(arguments.length){
case  2 :
return G__3391__3392.call(this,tsym3386,coll);
case  3 :
return G__3391__3393.call(this,tsym3386,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3391;
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
var x__3395 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3395;
} else
{lazy_seq.x = x__3395.call(null);
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
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3396 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3397 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3398 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3399 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3399.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3400 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3401 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3402 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3403 = this;
return this__3403.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3404 = this;
return (new cljs.core.LazySeq(meta,this__3404.realized,this__3404.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3405 = [];

var s__3406 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3406)))
{ary__3405.push(cljs.core.first.call(null,s__3406));
{
var G__3407 = cljs.core.next.call(null,s__3406);
s__3406 = G__3407;
continue;
}
} else
{return ary__3405;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3408 = s;
var i__3409 = n;
var sum__3410 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3411 = (i__3409 > 0);

if(cljs.core.truth_(and__3546__auto____3411))
{return cljs.core.seq.call(null,s__3408);
} else
{return and__3546__auto____3411;
}
})()))
{{
var G__3412 = cljs.core.next.call(null,s__3408);
var G__3413 = (i__3409 - 1);
var G__3414 = (sum__3410 + 1);
s__3408 = G__3412;
i__3409 = G__3413;
sum__3410 = G__3414;
continue;
}
} else
{return sum__3410;
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
var concat__3418 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3419 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3420 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3415 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3415))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3415),concat.call(null,cljs.core.rest.call(null,s__3415),y));
} else
{return y;
}
})));
});
var concat__3421 = (function() { 
var G__3423__delegate = function (x,y,zs){
var cat__3417 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3416 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3416))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3416),cat.call(null,cljs.core.rest.call(null,xys__3416),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3417.call(null,concat.call(null,x,y),zs);
};
var G__3423 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3423__delegate.call(this, x, y, zs);
};
G__3423.cljs$lang$maxFixedArity = 2;
G__3423.cljs$lang$applyTo = (function (arglist__3424){
var x = cljs.core.first(arglist__3424);
var y = cljs.core.first(cljs.core.next(arglist__3424));
var zs = cljs.core.rest(cljs.core.next(arglist__3424));
return G__3423__delegate.call(this, x, y, zs);
});
return G__3423;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3418.call(this);
case  1 :
return concat__3419.call(this,x);
case  2 :
return concat__3420.call(this,x,y);
default:
return concat__3421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3421.cljs$lang$applyTo;
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
var list_STAR___3425 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3426 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3427 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3428 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3429 = (function() { 
var G__3431__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3431 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3431__delegate.call(this, a, b, c, d, more);
};
G__3431.cljs$lang$maxFixedArity = 4;
G__3431.cljs$lang$applyTo = (function (arglist__3432){
var a = cljs.core.first(arglist__3432);
var b = cljs.core.first(cljs.core.next(arglist__3432));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3432)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3432))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3432))));
return G__3431__delegate.call(this, a, b, c, d, more);
});
return G__3431;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3425.call(this,a);
case  2 :
return list_STAR___3426.call(this,a,b);
case  3 :
return list_STAR___3427.call(this,a,b,c);
case  4 :
return list_STAR___3428.call(this,a,b,c,d);
default:
return list_STAR___3429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3429.cljs$lang$applyTo;
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
var apply__3442 = (function (f,args){
var fixed_arity__3433 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3433 + 1)) <= fixed_arity__3433)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3443 = (function (f,x,args){
var arglist__3434 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3435 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3434,fixed_arity__3435) <= fixed_arity__3435)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3434));
} else
{return f.cljs$lang$applyTo(arglist__3434);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3434));
}
});
var apply__3444 = (function (f,x,y,args){
var arglist__3436 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3437 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3436,fixed_arity__3437) <= fixed_arity__3437)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3436));
} else
{return f.cljs$lang$applyTo(arglist__3436);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3436));
}
});
var apply__3445 = (function (f,x,y,z,args){
var arglist__3438 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3439 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3438,fixed_arity__3439) <= fixed_arity__3439)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3438));
} else
{return f.cljs$lang$applyTo(arglist__3438);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3438));
}
});
var apply__3446 = (function() { 
var G__3448__delegate = function (f,a,b,c,d,args){
var arglist__3440 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3441 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3440,fixed_arity__3441) <= fixed_arity__3441)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3440));
} else
{return f.cljs$lang$applyTo(arglist__3440);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3440));
}
};
var G__3448 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3448__delegate.call(this, f, a, b, c, d, args);
};
G__3448.cljs$lang$maxFixedArity = 5;
G__3448.cljs$lang$applyTo = (function (arglist__3449){
var f = cljs.core.first(arglist__3449);
var a = cljs.core.first(cljs.core.next(arglist__3449));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3449)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3449))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3449)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3449)))));
return G__3448__delegate.call(this, f, a, b, c, d, args);
});
return G__3448;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3442.call(this,f,a);
case  3 :
return apply__3443.call(this,f,a,b);
case  4 :
return apply__3444.call(this,f,a,b,c);
case  5 :
return apply__3445.call(this,f,a,b,c,d);
default:
return apply__3446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3446.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3450){
var obj = cljs.core.first(arglist__3450);
var f = cljs.core.first(cljs.core.next(arglist__3450));
var args = cljs.core.rest(cljs.core.next(arglist__3450));
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
var not_EQ___3451 = (function (x){
return false;
});
var not_EQ___3452 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3453 = (function() { 
var G__3455__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3455 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3455__delegate.call(this, x, y, more);
};
G__3455.cljs$lang$maxFixedArity = 2;
G__3455.cljs$lang$applyTo = (function (arglist__3456){
var x = cljs.core.first(arglist__3456);
var y = cljs.core.first(cljs.core.next(arglist__3456));
var more = cljs.core.rest(cljs.core.next(arglist__3456));
return G__3455__delegate.call(this, x, y, more);
});
return G__3455;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3451.call(this,x);
case  2 :
return not_EQ___3452.call(this,x,y);
default:
return not_EQ___3453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3453.cljs$lang$applyTo;
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
var G__3457 = pred;
var G__3458 = cljs.core.next.call(null,coll);
pred = G__3457;
coll = G__3458;
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
{var or__3548__auto____3459 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3459))
{return or__3548__auto____3459;
} else
{{
var G__3460 = pred;
var G__3461 = cljs.core.next.call(null,coll);
pred = G__3460;
coll = G__3461;
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
var G__3462 = null;
var G__3462__3463 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3462__3464 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3462__3465 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3462__3466 = (function() { 
var G__3468__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3468 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3468__delegate.call(this, x, y, zs);
};
G__3468.cljs$lang$maxFixedArity = 2;
G__3468.cljs$lang$applyTo = (function (arglist__3469){
var x = cljs.core.first(arglist__3469);
var y = cljs.core.first(cljs.core.next(arglist__3469));
var zs = cljs.core.rest(cljs.core.next(arglist__3469));
return G__3468__delegate.call(this, x, y, zs);
});
return G__3468;
})()
;
G__3462 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3462__3463.call(this);
case  1 :
return G__3462__3464.call(this,x);
case  2 :
return G__3462__3465.call(this,x,y);
default:
return G__3462__3466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3462.cljs$lang$maxFixedArity = 2;
G__3462.cljs$lang$applyTo = G__3462__3466.cljs$lang$applyTo;
return G__3462;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3470__delegate = function (args){
return x;
};
var G__3470 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3470__delegate.call(this, args);
};
G__3470.cljs$lang$maxFixedArity = 0;
G__3470.cljs$lang$applyTo = (function (arglist__3471){
var args = cljs.core.seq( arglist__3471 );;
return G__3470__delegate.call(this, args);
});
return G__3470;
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
var comp__3475 = (function (){
return cljs.core.identity;
});
var comp__3476 = (function (f){
return f;
});
var comp__3477 = (function (f,g){
return (function() {
var G__3481 = null;
var G__3481__3482 = (function (){
return f.call(null,g.call(null));
});
var G__3481__3483 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3481__3484 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3481__3485 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3481__3486 = (function() { 
var G__3488__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3488 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3488__delegate.call(this, x, y, z, args);
};
G__3488.cljs$lang$maxFixedArity = 3;
G__3488.cljs$lang$applyTo = (function (arglist__3489){
var x = cljs.core.first(arglist__3489);
var y = cljs.core.first(cljs.core.next(arglist__3489));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3489)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3489)));
return G__3488__delegate.call(this, x, y, z, args);
});
return G__3488;
})()
;
G__3481 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3481__3482.call(this);
case  1 :
return G__3481__3483.call(this,x);
case  2 :
return G__3481__3484.call(this,x,y);
case  3 :
return G__3481__3485.call(this,x,y,z);
default:
return G__3481__3486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3481.cljs$lang$maxFixedArity = 3;
G__3481.cljs$lang$applyTo = G__3481__3486.cljs$lang$applyTo;
return G__3481;
})()
});
var comp__3478 = (function (f,g,h){
return (function() {
var G__3490 = null;
var G__3490__3491 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3490__3492 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3490__3493 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3490__3494 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3490__3495 = (function() { 
var G__3497__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3497 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3497__delegate.call(this, x, y, z, args);
};
G__3497.cljs$lang$maxFixedArity = 3;
G__3497.cljs$lang$applyTo = (function (arglist__3498){
var x = cljs.core.first(arglist__3498);
var y = cljs.core.first(cljs.core.next(arglist__3498));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3498)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3498)));
return G__3497__delegate.call(this, x, y, z, args);
});
return G__3497;
})()
;
G__3490 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3490__3491.call(this);
case  1 :
return G__3490__3492.call(this,x);
case  2 :
return G__3490__3493.call(this,x,y);
case  3 :
return G__3490__3494.call(this,x,y,z);
default:
return G__3490__3495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3490.cljs$lang$maxFixedArity = 3;
G__3490.cljs$lang$applyTo = G__3490__3495.cljs$lang$applyTo;
return G__3490;
})()
});
var comp__3479 = (function() { 
var G__3499__delegate = function (f1,f2,f3,fs){
var fs__3472 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3500__delegate = function (args){
var ret__3473 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3472),args);
var fs__3474 = cljs.core.next.call(null,fs__3472);

while(true){
if(cljs.core.truth_(fs__3474))
{{
var G__3501 = cljs.core.first.call(null,fs__3474).call(null,ret__3473);
var G__3502 = cljs.core.next.call(null,fs__3474);
ret__3473 = G__3501;
fs__3474 = G__3502;
continue;
}
} else
{return ret__3473;
}
break;
}
};
var G__3500 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3500__delegate.call(this, args);
};
G__3500.cljs$lang$maxFixedArity = 0;
G__3500.cljs$lang$applyTo = (function (arglist__3503){
var args = cljs.core.seq( arglist__3503 );;
return G__3500__delegate.call(this, args);
});
return G__3500;
})()
;
};
var G__3499 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3499__delegate.call(this, f1, f2, f3, fs);
};
G__3499.cljs$lang$maxFixedArity = 3;
G__3499.cljs$lang$applyTo = (function (arglist__3504){
var f1 = cljs.core.first(arglist__3504);
var f2 = cljs.core.first(cljs.core.next(arglist__3504));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3504)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3504)));
return G__3499__delegate.call(this, f1, f2, f3, fs);
});
return G__3499;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3475.call(this);
case  1 :
return comp__3476.call(this,f1);
case  2 :
return comp__3477.call(this,f1,f2);
case  3 :
return comp__3478.call(this,f1,f2,f3);
default:
return comp__3479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3479.cljs$lang$applyTo;
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
var partial__3505 = (function (f,arg1){
return (function() { 
var G__3510__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3510 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3510__delegate.call(this, args);
};
G__3510.cljs$lang$maxFixedArity = 0;
G__3510.cljs$lang$applyTo = (function (arglist__3511){
var args = cljs.core.seq( arglist__3511 );;
return G__3510__delegate.call(this, args);
});
return G__3510;
})()
;
});
var partial__3506 = (function (f,arg1,arg2){
return (function() { 
var G__3512__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
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
});
var partial__3507 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3514__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3514 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3514__delegate.call(this, args);
};
G__3514.cljs$lang$maxFixedArity = 0;
G__3514.cljs$lang$applyTo = (function (arglist__3515){
var args = cljs.core.seq( arglist__3515 );;
return G__3514__delegate.call(this, args);
});
return G__3514;
})()
;
});
var partial__3508 = (function() { 
var G__3516__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3517__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3517 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3517__delegate.call(this, args);
};
G__3517.cljs$lang$maxFixedArity = 0;
G__3517.cljs$lang$applyTo = (function (arglist__3518){
var args = cljs.core.seq( arglist__3518 );;
return G__3517__delegate.call(this, args);
});
return G__3517;
})()
;
};
var G__3516 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3516__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3516.cljs$lang$maxFixedArity = 4;
G__3516.cljs$lang$applyTo = (function (arglist__3519){
var f = cljs.core.first(arglist__3519);
var arg1 = cljs.core.first(cljs.core.next(arglist__3519));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3519)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3519))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3519))));
return G__3516__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3516;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3505.call(this,f,arg1);
case  3 :
return partial__3506.call(this,f,arg1,arg2);
case  4 :
return partial__3507.call(this,f,arg1,arg2,arg3);
default:
return partial__3508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3508.cljs$lang$applyTo;
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
var fnil__3520 = (function (f,x){
return (function() {
var G__3524 = null;
var G__3524__3525 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3524__3526 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3524__3527 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3524__3528 = (function() { 
var G__3530__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3530 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3530__delegate.call(this, a, b, c, ds);
};
G__3530.cljs$lang$maxFixedArity = 3;
G__3530.cljs$lang$applyTo = (function (arglist__3531){
var a = cljs.core.first(arglist__3531);
var b = cljs.core.first(cljs.core.next(arglist__3531));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3531)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3531)));
return G__3530__delegate.call(this, a, b, c, ds);
});
return G__3530;
})()
;
G__3524 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3524__3525.call(this,a);
case  2 :
return G__3524__3526.call(this,a,b);
case  3 :
return G__3524__3527.call(this,a,b,c);
default:
return G__3524__3528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3524.cljs$lang$maxFixedArity = 3;
G__3524.cljs$lang$applyTo = G__3524__3528.cljs$lang$applyTo;
return G__3524;
})()
});
var fnil__3521 = (function (f,x,y){
return (function() {
var G__3532 = null;
var G__3532__3533 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3532__3534 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3532__3535 = (function() { 
var G__3537__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3537 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3537__delegate.call(this, a, b, c, ds);
};
G__3537.cljs$lang$maxFixedArity = 3;
G__3537.cljs$lang$applyTo = (function (arglist__3538){
var a = cljs.core.first(arglist__3538);
var b = cljs.core.first(cljs.core.next(arglist__3538));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3538)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3538)));
return G__3537__delegate.call(this, a, b, c, ds);
});
return G__3537;
})()
;
G__3532 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3532__3533.call(this,a,b);
case  3 :
return G__3532__3534.call(this,a,b,c);
default:
return G__3532__3535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3532.cljs$lang$maxFixedArity = 3;
G__3532.cljs$lang$applyTo = G__3532__3535.cljs$lang$applyTo;
return G__3532;
})()
});
var fnil__3522 = (function (f,x,y,z){
return (function() {
var G__3539 = null;
var G__3539__3540 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3539__3541 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3539__3542 = (function() { 
var G__3544__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3544 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3544__delegate.call(this, a, b, c, ds);
};
G__3544.cljs$lang$maxFixedArity = 3;
G__3544.cljs$lang$applyTo = (function (arglist__3545){
var a = cljs.core.first(arglist__3545);
var b = cljs.core.first(cljs.core.next(arglist__3545));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3545)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3545)));
return G__3544__delegate.call(this, a, b, c, ds);
});
return G__3544;
})()
;
G__3539 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3539__3540.call(this,a,b);
case  3 :
return G__3539__3541.call(this,a,b,c);
default:
return G__3539__3542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3539.cljs$lang$maxFixedArity = 3;
G__3539.cljs$lang$applyTo = G__3539__3542.cljs$lang$applyTo;
return G__3539;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3520.call(this,f,x);
case  3 :
return fnil__3521.call(this,f,x,y);
case  4 :
return fnil__3522.call(this,f,x,y,z);
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
var mapi__3548 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3546 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3546))
{var s__3547 = temp__3698__auto____3546;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3547)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3547)));
} else
{return null;
}
})));
});

return mapi__3548.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3549 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3549))
{var s__3550 = temp__3698__auto____3549;

var x__3551 = f.call(null,cljs.core.first.call(null,s__3550));

if(cljs.core.truth_((x__3551 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3550));
} else
{return cljs.core.cons.call(null,x__3551,keep.call(null,f,cljs.core.rest.call(null,s__3550)));
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
var keepi__3561 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3558 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3558))
{var s__3559 = temp__3698__auto____3558;

var x__3560 = f.call(null,idx,cljs.core.first.call(null,s__3559));

if(cljs.core.truth_((x__3560 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3559));
} else
{return cljs.core.cons.call(null,x__3560,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3559)));
}
} else
{return null;
}
})));
});

return keepi__3561.call(null,0,coll);
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
var every_pred__3606 = (function (p){
return (function() {
var ep1 = null;
var ep1__3611 = (function (){
return true;
});
var ep1__3612 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3613 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3568 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3568))
{return p.call(null,y);
} else
{return and__3546__auto____3568;
}
})());
});
var ep1__3614 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3569 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3569))
{var and__3546__auto____3570 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3570))
{return p.call(null,z);
} else
{return and__3546__auto____3570;
}
} else
{return and__3546__auto____3569;
}
})());
});
var ep1__3615 = (function() { 
var G__3617__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3571 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3571))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3571;
}
})());
};
var G__3617 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3617__delegate.call(this, x, y, z, args);
};
G__3617.cljs$lang$maxFixedArity = 3;
G__3617.cljs$lang$applyTo = (function (arglist__3618){
var x = cljs.core.first(arglist__3618);
var y = cljs.core.first(cljs.core.next(arglist__3618));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3618)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3618)));
return G__3617__delegate.call(this, x, y, z, args);
});
return G__3617;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3611.call(this);
case  1 :
return ep1__3612.call(this,x);
case  2 :
return ep1__3613.call(this,x,y);
case  3 :
return ep1__3614.call(this,x,y,z);
default:
return ep1__3615.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3615.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3607 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3619 = (function (){
return true;
});
var ep2__3620 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3572 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3572))
{return p2.call(null,x);
} else
{return and__3546__auto____3572;
}
})());
});
var ep2__3621 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3573 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3573))
{var and__3546__auto____3574 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3574))
{var and__3546__auto____3575 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3575))
{return p2.call(null,y);
} else
{return and__3546__auto____3575;
}
} else
{return and__3546__auto____3574;
}
} else
{return and__3546__auto____3573;
}
})());
});
var ep2__3622 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3576 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3576))
{var and__3546__auto____3577 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3577))
{var and__3546__auto____3578 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3578))
{var and__3546__auto____3579 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3579))
{var and__3546__auto____3580 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3580))
{return p2.call(null,z);
} else
{return and__3546__auto____3580;
}
} else
{return and__3546__auto____3579;
}
} else
{return and__3546__auto____3578;
}
} else
{return and__3546__auto____3577;
}
} else
{return and__3546__auto____3576;
}
})());
});
var ep2__3623 = (function() { 
var G__3625__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3581 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3581))
{return cljs.core.every_QMARK_.call(null,(function (p1__3552_SHARP_){
var and__3546__auto____3582 = p1.call(null,p1__3552_SHARP_);

if(cljs.core.truth_(and__3546__auto____3582))
{return p2.call(null,p1__3552_SHARP_);
} else
{return and__3546__auto____3582;
}
}),args);
} else
{return and__3546__auto____3581;
}
})());
};
var G__3625 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3625__delegate.call(this, x, y, z, args);
};
G__3625.cljs$lang$maxFixedArity = 3;
G__3625.cljs$lang$applyTo = (function (arglist__3626){
var x = cljs.core.first(arglist__3626);
var y = cljs.core.first(cljs.core.next(arglist__3626));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3626)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3626)));
return G__3625__delegate.call(this, x, y, z, args);
});
return G__3625;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3619.call(this);
case  1 :
return ep2__3620.call(this,x);
case  2 :
return ep2__3621.call(this,x,y);
case  3 :
return ep2__3622.call(this,x,y,z);
default:
return ep2__3623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3623.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3608 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3627 = (function (){
return true;
});
var ep3__3628 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3583 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3583))
{var and__3546__auto____3584 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3584))
{return p3.call(null,x);
} else
{return and__3546__auto____3584;
}
} else
{return and__3546__auto____3583;
}
})());
});
var ep3__3629 = (function (x,y){
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
{return p3.call(null,y);
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
var ep3__3630 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3590 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3590))
{var and__3546__auto____3591 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3591))
{var and__3546__auto____3592 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3592))
{var and__3546__auto____3593 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3593))
{var and__3546__auto____3594 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3594))
{var and__3546__auto____3595 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3595))
{var and__3546__auto____3596 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3596))
{var and__3546__auto____3597 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3597))
{return p3.call(null,z);
} else
{return and__3546__auto____3597;
}
} else
{return and__3546__auto____3596;
}
} else
{return and__3546__auto____3595;
}
} else
{return and__3546__auto____3594;
}
} else
{return and__3546__auto____3593;
}
} else
{return and__3546__auto____3592;
}
} else
{return and__3546__auto____3591;
}
} else
{return and__3546__auto____3590;
}
})());
});
var ep3__3631 = (function() { 
var G__3633__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3598 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3598))
{return cljs.core.every_QMARK_.call(null,(function (p1__3553_SHARP_){
var and__3546__auto____3599 = p1.call(null,p1__3553_SHARP_);

if(cljs.core.truth_(and__3546__auto____3599))
{var and__3546__auto____3600 = p2.call(null,p1__3553_SHARP_);

if(cljs.core.truth_(and__3546__auto____3600))
{return p3.call(null,p1__3553_SHARP_);
} else
{return and__3546__auto____3600;
}
} else
{return and__3546__auto____3599;
}
}),args);
} else
{return and__3546__auto____3598;
}
})());
};
var G__3633 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3633__delegate.call(this, x, y, z, args);
};
G__3633.cljs$lang$maxFixedArity = 3;
G__3633.cljs$lang$applyTo = (function (arglist__3634){
var x = cljs.core.first(arglist__3634);
var y = cljs.core.first(cljs.core.next(arglist__3634));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3634)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3634)));
return G__3633__delegate.call(this, x, y, z, args);
});
return G__3633;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3627.call(this);
case  1 :
return ep3__3628.call(this,x);
case  2 :
return ep3__3629.call(this,x,y);
case  3 :
return ep3__3630.call(this,x,y,z);
default:
return ep3__3631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3631.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3609 = (function() { 
var G__3635__delegate = function (p1,p2,p3,ps){
var ps__3601 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3636 = (function (){
return true;
});
var epn__3637 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3554_SHARP_){
return p1__3554_SHARP_.call(null,x);
}),ps__3601);
});
var epn__3638 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3555_SHARP_){
var and__3546__auto____3602 = p1__3555_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3602))
{return p1__3555_SHARP_.call(null,y);
} else
{return and__3546__auto____3602;
}
}),ps__3601);
});
var epn__3639 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3556_SHARP_){
var and__3546__auto____3603 = p1__3556_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3603))
{var and__3546__auto____3604 = p1__3556_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3604))
{return p1__3556_SHARP_.call(null,z);
} else
{return and__3546__auto____3604;
}
} else
{return and__3546__auto____3603;
}
}),ps__3601);
});
var epn__3640 = (function() { 
var G__3642__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3605 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3605))
{return cljs.core.every_QMARK_.call(null,(function (p1__3557_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3557_SHARP_,args);
}),ps__3601);
} else
{return and__3546__auto____3605;
}
})());
};
var G__3642 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3642__delegate.call(this, x, y, z, args);
};
G__3642.cljs$lang$maxFixedArity = 3;
G__3642.cljs$lang$applyTo = (function (arglist__3643){
var x = cljs.core.first(arglist__3643);
var y = cljs.core.first(cljs.core.next(arglist__3643));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3643)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3643)));
return G__3642__delegate.call(this, x, y, z, args);
});
return G__3642;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3636.call(this);
case  1 :
return epn__3637.call(this,x);
case  2 :
return epn__3638.call(this,x,y);
case  3 :
return epn__3639.call(this,x,y,z);
default:
return epn__3640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3640.cljs$lang$applyTo;
return epn;
})()
};
var G__3635 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3635__delegate.call(this, p1, p2, p3, ps);
};
G__3635.cljs$lang$maxFixedArity = 3;
G__3635.cljs$lang$applyTo = (function (arglist__3644){
var p1 = cljs.core.first(arglist__3644);
var p2 = cljs.core.first(cljs.core.next(arglist__3644));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3644)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3644)));
return G__3635__delegate.call(this, p1, p2, p3, ps);
});
return G__3635;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3606.call(this,p1);
case  2 :
return every_pred__3607.call(this,p1,p2);
case  3 :
return every_pred__3608.call(this,p1,p2,p3);
default:
return every_pred__3609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3609.cljs$lang$applyTo;
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
var some_fn__3684 = (function (p){
return (function() {
var sp1 = null;
var sp1__3689 = (function (){
return null;
});
var sp1__3690 = (function (x){
return p.call(null,x);
});
var sp1__3691 = (function (x,y){
var or__3548__auto____3646 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3646))
{return or__3548__auto____3646;
} else
{return p.call(null,y);
}
});
var sp1__3692 = (function (x,y,z){
var or__3548__auto____3647 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3647))
{return or__3548__auto____3647;
} else
{var or__3548__auto____3648 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3648))
{return or__3548__auto____3648;
} else
{return p.call(null,z);
}
}
});
var sp1__3693 = (function() { 
var G__3695__delegate = function (x,y,z,args){
var or__3548__auto____3649 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3649))
{return or__3548__auto____3649;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3695 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3695__delegate.call(this, x, y, z, args);
};
G__3695.cljs$lang$maxFixedArity = 3;
G__3695.cljs$lang$applyTo = (function (arglist__3696){
var x = cljs.core.first(arglist__3696);
var y = cljs.core.first(cljs.core.next(arglist__3696));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3696)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3696)));
return G__3695__delegate.call(this, x, y, z, args);
});
return G__3695;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3689.call(this);
case  1 :
return sp1__3690.call(this,x);
case  2 :
return sp1__3691.call(this,x,y);
case  3 :
return sp1__3692.call(this,x,y,z);
default:
return sp1__3693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3693.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3685 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3697 = (function (){
return null;
});
var sp2__3698 = (function (x){
var or__3548__auto____3650 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3650))
{return or__3548__auto____3650;
} else
{return p2.call(null,x);
}
});
var sp2__3699 = (function (x,y){
var or__3548__auto____3651 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3651))
{return or__3548__auto____3651;
} else
{var or__3548__auto____3652 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3652))
{return or__3548__auto____3652;
} else
{var or__3548__auto____3653 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3653))
{return or__3548__auto____3653;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3700 = (function (x,y,z){
var or__3548__auto____3654 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3654))
{return or__3548__auto____3654;
} else
{var or__3548__auto____3655 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3655))
{return or__3548__auto____3655;
} else
{var or__3548__auto____3656 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3656))
{return or__3548__auto____3656;
} else
{var or__3548__auto____3657 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3657))
{return or__3548__auto____3657;
} else
{var or__3548__auto____3658 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3658))
{return or__3548__auto____3658;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3701 = (function() { 
var G__3703__delegate = function (x,y,z,args){
var or__3548__auto____3659 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3659))
{return or__3548__auto____3659;
} else
{return cljs.core.some.call(null,(function (p1__3562_SHARP_){
var or__3548__auto____3660 = p1.call(null,p1__3562_SHARP_);

if(cljs.core.truth_(or__3548__auto____3660))
{return or__3548__auto____3660;
} else
{return p2.call(null,p1__3562_SHARP_);
}
}),args);
}
};
var G__3703 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3703__delegate.call(this, x, y, z, args);
};
G__3703.cljs$lang$maxFixedArity = 3;
G__3703.cljs$lang$applyTo = (function (arglist__3704){
var x = cljs.core.first(arglist__3704);
var y = cljs.core.first(cljs.core.next(arglist__3704));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3704)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3704)));
return G__3703__delegate.call(this, x, y, z, args);
});
return G__3703;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3697.call(this);
case  1 :
return sp2__3698.call(this,x);
case  2 :
return sp2__3699.call(this,x,y);
case  3 :
return sp2__3700.call(this,x,y,z);
default:
return sp2__3701.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3701.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3686 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3705 = (function (){
return null;
});
var sp3__3706 = (function (x){
var or__3548__auto____3661 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3661))
{return or__3548__auto____3661;
} else
{var or__3548__auto____3662 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3662))
{return or__3548__auto____3662;
} else
{return p3.call(null,x);
}
}
});
var sp3__3707 = (function (x,y){
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
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3708 = (function (x,y,z){
var or__3548__auto____3668 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3668))
{return or__3548__auto____3668;
} else
{var or__3548__auto____3669 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3669))
{return or__3548__auto____3669;
} else
{var or__3548__auto____3670 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3670))
{return or__3548__auto____3670;
} else
{var or__3548__auto____3671 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3671))
{return or__3548__auto____3671;
} else
{var or__3548__auto____3672 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3672))
{return or__3548__auto____3672;
} else
{var or__3548__auto____3673 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3673))
{return or__3548__auto____3673;
} else
{var or__3548__auto____3674 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3674))
{return or__3548__auto____3674;
} else
{var or__3548__auto____3675 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3675))
{return or__3548__auto____3675;
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
var sp3__3709 = (function() { 
var G__3711__delegate = function (x,y,z,args){
var or__3548__auto____3676 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3676))
{return or__3548__auto____3676;
} else
{return cljs.core.some.call(null,(function (p1__3563_SHARP_){
var or__3548__auto____3677 = p1.call(null,p1__3563_SHARP_);

if(cljs.core.truth_(or__3548__auto____3677))
{return or__3548__auto____3677;
} else
{var or__3548__auto____3678 = p2.call(null,p1__3563_SHARP_);

if(cljs.core.truth_(or__3548__auto____3678))
{return or__3548__auto____3678;
} else
{return p3.call(null,p1__3563_SHARP_);
}
}
}),args);
}
};
var G__3711 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3711__delegate.call(this, x, y, z, args);
};
G__3711.cljs$lang$maxFixedArity = 3;
G__3711.cljs$lang$applyTo = (function (arglist__3712){
var x = cljs.core.first(arglist__3712);
var y = cljs.core.first(cljs.core.next(arglist__3712));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3712)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3712)));
return G__3711__delegate.call(this, x, y, z, args);
});
return G__3711;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3705.call(this);
case  1 :
return sp3__3706.call(this,x);
case  2 :
return sp3__3707.call(this,x,y);
case  3 :
return sp3__3708.call(this,x,y,z);
default:
return sp3__3709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3709.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3687 = (function() { 
var G__3713__delegate = function (p1,p2,p3,ps){
var ps__3679 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3714 = (function (){
return null;
});
var spn__3715 = (function (x){
return cljs.core.some.call(null,(function (p1__3564_SHARP_){
return p1__3564_SHARP_.call(null,x);
}),ps__3679);
});
var spn__3716 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3565_SHARP_){
var or__3548__auto____3680 = p1__3565_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3680))
{return or__3548__auto____3680;
} else
{return p1__3565_SHARP_.call(null,y);
}
}),ps__3679);
});
var spn__3717 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3566_SHARP_){
var or__3548__auto____3681 = p1__3566_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3681))
{return or__3548__auto____3681;
} else
{var or__3548__auto____3682 = p1__3566_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3682))
{return or__3548__auto____3682;
} else
{return p1__3566_SHARP_.call(null,z);
}
}
}),ps__3679);
});
var spn__3718 = (function() { 
var G__3720__delegate = function (x,y,z,args){
var or__3548__auto____3683 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3683))
{return or__3548__auto____3683;
} else
{return cljs.core.some.call(null,(function (p1__3567_SHARP_){
return cljs.core.some.call(null,p1__3567_SHARP_,args);
}),ps__3679);
}
};
var G__3720 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3720__delegate.call(this, x, y, z, args);
};
G__3720.cljs$lang$maxFixedArity = 3;
G__3720.cljs$lang$applyTo = (function (arglist__3721){
var x = cljs.core.first(arglist__3721);
var y = cljs.core.first(cljs.core.next(arglist__3721));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3721)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3721)));
return G__3720__delegate.call(this, x, y, z, args);
});
return G__3720;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3714.call(this);
case  1 :
return spn__3715.call(this,x);
case  2 :
return spn__3716.call(this,x,y);
case  3 :
return spn__3717.call(this,x,y,z);
default:
return spn__3718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3718.cljs$lang$applyTo;
return spn;
})()
};
var G__3713 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3713__delegate.call(this, p1, p2, p3, ps);
};
G__3713.cljs$lang$maxFixedArity = 3;
G__3713.cljs$lang$applyTo = (function (arglist__3722){
var p1 = cljs.core.first(arglist__3722);
var p2 = cljs.core.first(cljs.core.next(arglist__3722));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3722)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3722)));
return G__3713__delegate.call(this, p1, p2, p3, ps);
});
return G__3713;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3684.call(this,p1);
case  2 :
return some_fn__3685.call(this,p1,p2);
case  3 :
return some_fn__3686.call(this,p1,p2,p3);
default:
return some_fn__3687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3687.cljs$lang$applyTo;
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
var map__3735 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3723 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3723))
{var s__3724 = temp__3698__auto____3723;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3724)),map.call(null,f,cljs.core.rest.call(null,s__3724)));
} else
{return null;
}
})));
});
var map__3736 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3725 = cljs.core.seq.call(null,c1);
var s2__3726 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3727 = s1__3725;

if(cljs.core.truth_(and__3546__auto____3727))
{return s2__3726;
} else
{return and__3546__auto____3727;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3725),cljs.core.first.call(null,s2__3726)),map.call(null,f,cljs.core.rest.call(null,s1__3725),cljs.core.rest.call(null,s2__3726)));
} else
{return null;
}
})));
});
var map__3737 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3728 = cljs.core.seq.call(null,c1);
var s2__3729 = cljs.core.seq.call(null,c2);
var s3__3730 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3731 = s1__3728;

if(cljs.core.truth_(and__3546__auto____3731))
{var and__3546__auto____3732 = s2__3729;

if(cljs.core.truth_(and__3546__auto____3732))
{return s3__3730;
} else
{return and__3546__auto____3732;
}
} else
{return and__3546__auto____3731;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3728),cljs.core.first.call(null,s2__3729),cljs.core.first.call(null,s3__3730)),map.call(null,f,cljs.core.rest.call(null,s1__3728),cljs.core.rest.call(null,s2__3729),cljs.core.rest.call(null,s3__3730)));
} else
{return null;
}
})));
});
var map__3738 = (function() { 
var G__3740__delegate = function (f,c1,c2,c3,colls){
var step__3734 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3733 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3733)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3733),step.call(null,map.call(null,cljs.core.rest,ss__3733)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3645_SHARP_){
return cljs.core.apply.call(null,f,p1__3645_SHARP_);
}),step__3734.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3740 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3740__delegate.call(this, f, c1, c2, c3, colls);
};
G__3740.cljs$lang$maxFixedArity = 4;
G__3740.cljs$lang$applyTo = (function (arglist__3741){
var f = cljs.core.first(arglist__3741);
var c1 = cljs.core.first(cljs.core.next(arglist__3741));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3741)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3741))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3741))));
return G__3740__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3740;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3735.call(this,f,c1);
case  3 :
return map__3736.call(this,f,c1,c2);
case  4 :
return map__3737.call(this,f,c1,c2,c3);
default:
return map__3738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3738.cljs$lang$applyTo;
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
{var temp__3698__auto____3742 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3742))
{var s__3743 = temp__3698__auto____3742;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3743),take.call(null,(n - 1),cljs.core.rest.call(null,s__3743)));
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
var step__3746 = (function (n,coll){
while(true){
var s__3744 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3745 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3745))
{return s__3744;
} else
{return and__3546__auto____3745;
}
})()))
{{
var G__3747 = (n - 1);
var G__3748 = cljs.core.rest.call(null,s__3744);
n = G__3747;
coll = G__3748;
continue;
}
} else
{return s__3744;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3746.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3749 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3750 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3749.call(this,n);
case  2 :
return drop_last__3750.call(this,n,s);
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
var s__3752 = cljs.core.seq.call(null,coll);
var lead__3753 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3753))
{{
var G__3754 = cljs.core.next.call(null,s__3752);
var G__3755 = cljs.core.next.call(null,lead__3753);
s__3752 = G__3754;
lead__3753 = G__3755;
continue;
}
} else
{return s__3752;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3758 = (function (pred,coll){
while(true){
var s__3756 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3757 = s__3756;

if(cljs.core.truth_(and__3546__auto____3757))
{return pred.call(null,cljs.core.first.call(null,s__3756));
} else
{return and__3546__auto____3757;
}
})()))
{{
var G__3759 = pred;
var G__3760 = cljs.core.rest.call(null,s__3756);
pred = G__3759;
coll = G__3760;
continue;
}
} else
{return s__3756;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3758.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3761 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3761))
{var s__3762 = temp__3698__auto____3761;

return cljs.core.concat.call(null,s__3762,cycle.call(null,s__3762));
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
var repeat__3763 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3764 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3763.call(this,n);
case  2 :
return repeat__3764.call(this,n,x);
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
var repeatedly__3766 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3767 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3766.call(this,n);
case  2 :
return repeatedly__3767.call(this,n,f);
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
var interleave__3773 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3769 = cljs.core.seq.call(null,c1);
var s2__3770 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3771 = s1__3769;

if(cljs.core.truth_(and__3546__auto____3771))
{return s2__3770;
} else
{return and__3546__auto____3771;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3769),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3770),interleave.call(null,cljs.core.rest.call(null,s1__3769),cljs.core.rest.call(null,s2__3770))));
} else
{return null;
}
})));
});
var interleave__3774 = (function() { 
var G__3776__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3772 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3772)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3772),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3772)));
} else
{return null;
}
})));
};
var G__3776 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3776__delegate.call(this, c1, c2, colls);
};
G__3776.cljs$lang$maxFixedArity = 2;
G__3776.cljs$lang$applyTo = (function (arglist__3777){
var c1 = cljs.core.first(arglist__3777);
var c2 = cljs.core.first(cljs.core.next(arglist__3777));
var colls = cljs.core.rest(cljs.core.next(arglist__3777));
return G__3776__delegate.call(this, c1, c2, colls);
});
return G__3776;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3773.call(this,c1,c2);
default:
return interleave__3774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3774.cljs$lang$applyTo;
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
var cat__3780 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3778 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3778))
{var coll__3779 = temp__3695__auto____3778;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3779),cat.call(null,cljs.core.rest.call(null,coll__3779),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3780.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3781 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3782 = (function() { 
var G__3784__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3784 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3784__delegate.call(this, f, coll, colls);
};
G__3784.cljs$lang$maxFixedArity = 2;
G__3784.cljs$lang$applyTo = (function (arglist__3785){
var f = cljs.core.first(arglist__3785);
var coll = cljs.core.first(cljs.core.next(arglist__3785));
var colls = cljs.core.rest(cljs.core.next(arglist__3785));
return G__3784__delegate.call(this, f, coll, colls);
});
return G__3784;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3781.call(this,f,coll);
default:
return mapcat__3782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3782.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3786 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3786))
{var s__3787 = temp__3698__auto____3786;

var f__3788 = cljs.core.first.call(null,s__3787);
var r__3789 = cljs.core.rest.call(null,s__3787);

if(cljs.core.truth_(pred.call(null,f__3788)))
{return cljs.core.cons.call(null,f__3788,filter.call(null,pred,r__3789));
} else
{return filter.call(null,pred,r__3789);
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
var walk__3791 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3791.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3790_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3790_SHARP_));
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
var partition__3798 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3799 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3792 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3792))
{var s__3793 = temp__3698__auto____3792;

var p__3794 = cljs.core.take.call(null,n,s__3793);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3794))))
{return cljs.core.cons.call(null,p__3794,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3793)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3800 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3795 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3795))
{var s__3796 = temp__3698__auto____3795;

var p__3797 = cljs.core.take.call(null,n,s__3796);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3797))))
{return cljs.core.cons.call(null,p__3797,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3796)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3797,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3798.call(this,n,step);
case  3 :
return partition__3799.call(this,n,step,pad);
case  4 :
return partition__3800.call(this,n,step,pad,coll);
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
var get_in__3806 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3807 = (function (m,ks,not_found){
var sentinel__3802 = cljs.core.lookup_sentinel;
var m__3803 = m;
var ks__3804 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3804))
{var m__3805 = cljs.core.get.call(null,m__3803,cljs.core.first.call(null,ks__3804),sentinel__3802);

if(cljs.core.truth_((sentinel__3802 === m__3805)))
{return not_found;
} else
{{
var G__3809 = sentinel__3802;
var G__3810 = m__3805;
var G__3811 = cljs.core.next.call(null,ks__3804);
sentinel__3802 = G__3809;
m__3803 = G__3810;
ks__3804 = G__3811;
continue;
}
}
} else
{return m__3803;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3806.call(this,m,ks);
case  3 :
return get_in__3807.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3812,v){
var vec__3813__3814 = p__3812;
var k__3815 = cljs.core.nth.call(null,vec__3813__3814,0,null);
var ks__3816 = cljs.core.nthnext.call(null,vec__3813__3814,1);

if(cljs.core.truth_(ks__3816))
{return cljs.core.assoc.call(null,m,k__3815,assoc_in.call(null,cljs.core.get.call(null,m,k__3815),ks__3816,v));
} else
{return cljs.core.assoc.call(null,m,k__3815,v);
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
var update_in__delegate = function (m,p__3817,f,args){
var vec__3818__3819 = p__3817;
var k__3820 = cljs.core.nth.call(null,vec__3818__3819,0,null);
var ks__3821 = cljs.core.nthnext.call(null,vec__3818__3819,1);

if(cljs.core.truth_(ks__3821))
{return cljs.core.assoc.call(null,m,k__3820,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3820),ks__3821,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3820,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3820),args));
}
};
var update_in = function (m,p__3817,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3817, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3822){
var m = cljs.core.first(arglist__3822);
var p__3817 = cljs.core.first(cljs.core.next(arglist__3822));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3822)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3822)));
return update_in__delegate.call(this, m, p__3817, f, args);
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
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3823 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3856 = null;
var G__3856__3857 = (function (coll,k){
var this__3824 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3856__3858 = (function (coll,k,not_found){
var this__3825 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3856 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3856__3857.call(this,coll,k);
case  3 :
return G__3856__3858.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3856;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3826 = this;
var new_array__3827 = cljs.core.aclone.call(null,this__3826.array);

(new_array__3827[k] = v);
return (new cljs.core.Vector(this__3826.meta,new_array__3827));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__3860 = null;
var G__3860__3861 = (function (tsym3828,k){
var this__3830 = this;
var tsym3828__3831 = this;

var coll__3832 = tsym3828__3831;

return cljs.core._lookup.call(null,coll__3832,k);
});
var G__3860__3862 = (function (tsym3829,k,not_found){
var this__3833 = this;
var tsym3829__3834 = this;

var coll__3835 = tsym3829__3834;

return cljs.core._lookup.call(null,coll__3835,k,not_found);
});
G__3860 = function(tsym3829,k,not_found){
switch(arguments.length){
case  2 :
return G__3860__3861.call(this,tsym3829,k);
case  3 :
return G__3860__3862.call(this,tsym3829,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3860;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3836 = this;
var new_array__3837 = cljs.core.aclone.call(null,this__3836.array);

new_array__3837.push(o);
return (new cljs.core.Vector(this__3836.meta,new_array__3837));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3864 = null;
var G__3864__3865 = (function (v,f){
var this__3838 = this;
return cljs.core.ci_reduce.call(null,this__3838.array,f);
});
var G__3864__3866 = (function (v,f,start){
var this__3839 = this;
return cljs.core.ci_reduce.call(null,this__3839.array,f,start);
});
G__3864 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3864__3865.call(this,v,f);
case  3 :
return G__3864__3866.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3864;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3840 = this;
if(cljs.core.truth_((this__3840.array.length > 0)))
{var vector_seq__3841 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3840.array.length)))
{return cljs.core.cons.call(null,(this__3840.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3841.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3842 = this;
return this__3842.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3843 = this;
var count__3844 = this__3843.array.length;

if(cljs.core.truth_((count__3844 > 0)))
{return (this__3843.array[(count__3844 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3845 = this;
if(cljs.core.truth_((this__3845.array.length > 0)))
{var new_array__3846 = cljs.core.aclone.call(null,this__3845.array);

new_array__3846.pop();
return (new cljs.core.Vector(this__3845.meta,new_array__3846));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3847 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3848 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3849 = this;
return (new cljs.core.Vector(meta,this__3849.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3850 = this;
return this__3850.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3868 = null;
var G__3868__3869 = (function (coll,n){
var this__3851 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3852 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3852))
{return (n < this__3851.array.length);
} else
{return and__3546__auto____3852;
}
})()))
{return (this__3851.array[n]);
} else
{return null;
}
});
var G__3868__3870 = (function (coll,n,not_found){
var this__3853 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3854 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3854))
{return (n < this__3853.array.length);
} else
{return and__3546__auto____3854;
}
})()))
{return (this__3853.array[n]);
} else
{return not_found;
}
});
G__3868 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3868__3869.call(this,coll,n);
case  3 :
return G__3868__3870.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3868;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3855 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3855.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__3872 = pv.cnt;

if(cljs.core.truth_((cnt__3872 < 32)))
{return 0;
} else
{return (((cnt__3872 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__3873 = level;
var ret__3874 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__3873)))
{return ret__3874;
} else
{var embed__3875 = ret__3874;
var r__3876 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___3877 = (r__3876[0] = embed__3875);

{
var G__3878 = (ll__3873 - 5);
var G__3879 = r__3876;
ll__3873 = G__3878;
ret__3874 = G__3879;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__3880 = cljs.core.aclone.call(null,parent);
var subidx__3881 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__3880[subidx__3881] = tailnode);
return ret__3880;
} else
{var temp__3695__auto____3882 = (parent[subidx__3881]);

if(cljs.core.truth_(temp__3695__auto____3882))
{var child__3883 = temp__3695__auto____3882;

var node_to_insert__3884 = push_tail.call(null,pv,(level - 5),child__3883,tailnode);
var ___3885 = (ret__3880[subidx__3881] = node_to_insert__3884);

return ret__3880;
} else
{var node_to_insert__3886 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___3887 = (ret__3880[subidx__3881] = node_to_insert__3886);

return ret__3880;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____3888 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____3888))
{return (i < pv.cnt);
} else
{return and__3546__auto____3888;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__3889 = pv.root;
var level__3890 = pv.shift;

while(true){
if(cljs.core.truth_((level__3890 > 0)))
{{
var G__3891 = (node__3889[((i >> level__3890) & 31)]);
var G__3892 = (level__3890 - 5);
node__3889 = G__3891;
level__3890 = G__3892;
continue;
}
} else
{return node__3889;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__3893 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__3893[(i & 31)] = val);
return ret__3893;
} else
{var subidx__3894 = ((i >> level) & 31);
var ___3895 = (ret__3893[subidx__3894] = do_assoc.call(null,pv,(level - 5),(node[subidx__3894]),i,val));

return ret__3893;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__3896 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__3897 = pop_tail.call(null,pv,(level - 5),(node[subidx__3896]));

if(cljs.core.truth_((function (){var and__3546__auto____3898 = (new_child__3897 === null);

if(cljs.core.truth_(and__3546__auto____3898))
{return (subidx__3896 === 0);
} else
{return and__3546__auto____3898;
}
})()))
{return null;
} else
{var ret__3899 = cljs.core.aclone.call(null,node);
var ___3900 = (ret__3899[subidx__3896] = new_child__3897);

return ret__3899;
}
} else
{if(cljs.core.truth_((subidx__3896 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__3901 = cljs.core.aclone.call(null,node);
var ___3902 = (ret__3901[subidx__3896] = null);

return ret__3901;
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
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3903 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3943 = null;
var G__3943__3944 = (function (coll,k){
var this__3904 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3943__3945 = (function (coll,k,not_found){
var this__3905 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3943 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3943__3944.call(this,coll,k);
case  3 :
return G__3943__3945.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3943;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3906 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3907 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____3907))
{return (k < this__3906.cnt);
} else
{return and__3546__auto____3907;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__3908 = cljs.core.aclone.call(null,this__3906.tail);

(new_tail__3908[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__3906.meta,this__3906.cnt,this__3906.shift,this__3906.root,new_tail__3908));
} else
{return (new cljs.core.PersistentVector(this__3906.meta,this__3906.cnt,this__3906.shift,cljs.core.do_assoc.call(null,coll,this__3906.shift,this__3906.root,k,v),this__3906.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__3906.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__3906.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__3947 = null;
var G__3947__3948 = (function (tsym3909,k){
var this__3911 = this;
var tsym3909__3912 = this;

var coll__3913 = tsym3909__3912;

return cljs.core._lookup.call(null,coll__3913,k);
});
var G__3947__3949 = (function (tsym3910,k,not_found){
var this__3914 = this;
var tsym3910__3915 = this;

var coll__3916 = tsym3910__3915;

return cljs.core._lookup.call(null,coll__3916,k,not_found);
});
G__3947 = function(tsym3910,k,not_found){
switch(arguments.length){
case  2 :
return G__3947__3948.call(this,tsym3910,k);
case  3 :
return G__3947__3949.call(this,tsym3910,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3947;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3917 = this;
if(cljs.core.truth_(((this__3917.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__3918 = cljs.core.aclone.call(null,this__3917.tail);

new_tail__3918.push(o);
return (new cljs.core.PersistentVector(this__3917.meta,(this__3917.cnt + 1),this__3917.shift,this__3917.root,new_tail__3918));
} else
{var root_overflow_QMARK___3919 = ((this__3917.cnt >> 5) > (1 << this__3917.shift));
var new_shift__3920 = (cljs.core.truth_(root_overflow_QMARK___3919)?(this__3917.shift + 5):this__3917.shift);
var new_root__3922 = (cljs.core.truth_(root_overflow_QMARK___3919)?(function (){var n_r__3921 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__3921[0] = this__3917.root);
(n_r__3921[1] = cljs.core.new_path.call(null,this__3917.shift,this__3917.tail));
return n_r__3921;
})():cljs.core.push_tail.call(null,coll,this__3917.shift,this__3917.root,this__3917.tail));

return (new cljs.core.PersistentVector(this__3917.meta,(this__3917.cnt + 1),new_shift__3920,new_root__3922,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3951 = null;
var G__3951__3952 = (function (v,f){
var this__3923 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__3951__3953 = (function (v,f,start){
var this__3924 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__3951 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3951__3952.call(this,v,f);
case  3 :
return G__3951__3953.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3951;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3925 = this;
if(cljs.core.truth_((this__3925.cnt > 0)))
{var vector_seq__3926 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3925.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3926.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3927 = this;
return this__3927.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3928 = this;
if(cljs.core.truth_((this__3928.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__3928.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3929 = this;
if(cljs.core.truth_((this__3929.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__3929.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__3929.meta);
} else
{if(cljs.core.truth_((1 < (this__3929.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__3929.meta,(this__3929.cnt - 1),this__3929.shift,this__3929.root,cljs.core.aclone.call(null,this__3929.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__3930 = cljs.core.array_for.call(null,coll,(this__3929.cnt - 2));
var nr__3931 = cljs.core.pop_tail.call(null,this__3929.shift,this__3929.root);
var new_root__3932 = (cljs.core.truth_((nr__3931 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__3931);
var cnt_1__3933 = (this__3929.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____3934 = (5 < this__3929.shift);

if(cljs.core.truth_(and__3546__auto____3934))
{return ((new_root__3932[1]) === null);
} else
{return and__3546__auto____3934;
}
})()))
{return (new cljs.core.PersistentVector(this__3929.meta,cnt_1__3933,(this__3929.shift - 5),(new_root__3932[0]),new_tail__3930));
} else
{return (new cljs.core.PersistentVector(this__3929.meta,cnt_1__3933,this__3929.shift,new_root__3932,new_tail__3930));
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
var this__3935 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3936 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3937 = this;
return (new cljs.core.PersistentVector(meta,this__3937.cnt,this__3937.shift,this__3937.root,this__3937.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3938 = this;
return this__3938.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3955 = null;
var G__3955__3956 = (function (coll,n){
var this__3939 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__3955__3957 = (function (coll,n,not_found){
var this__3940 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3941 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3941))
{return (n < this__3940.cnt);
} else
{return and__3546__auto____3941;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__3955 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3955__3956.call(this,coll,n);
case  3 :
return G__3955__3957.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3955;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3942 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__3942.meta);
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
vector.cljs$lang$applyTo = (function (arglist__3959){
var args = cljs.core.seq( arglist__3959 );;
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
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3960 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3988 = null;
var G__3988__3989 = (function (coll,k){
var this__3961 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3988__3990 = (function (coll,k,not_found){
var this__3962 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3988 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3988__3989.call(this,coll,k);
case  3 :
return G__3988__3990.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3988;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3963 = this;
var v_pos__3964 = (this__3963.start + key);

return (new cljs.core.Subvec(this__3963.meta,cljs.core._assoc.call(null,this__3963.v,v_pos__3964,val),this__3963.start,((this__3963.end > (v_pos__3964 + 1)) ? this__3963.end : (v_pos__3964 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__3992 = null;
var G__3992__3993 = (function (tsym3965,k){
var this__3967 = this;
var tsym3965__3968 = this;

var coll__3969 = tsym3965__3968;

return cljs.core._lookup.call(null,coll__3969,k);
});
var G__3992__3994 = (function (tsym3966,k,not_found){
var this__3970 = this;
var tsym3966__3971 = this;

var coll__3972 = tsym3966__3971;

return cljs.core._lookup.call(null,coll__3972,k,not_found);
});
G__3992 = function(tsym3966,k,not_found){
switch(arguments.length){
case  2 :
return G__3992__3993.call(this,tsym3966,k);
case  3 :
return G__3992__3994.call(this,tsym3966,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3992;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3973 = this;
return (new cljs.core.Subvec(this__3973.meta,cljs.core._assoc_n.call(null,this__3973.v,this__3973.end,o),this__3973.start,(this__3973.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3996 = null;
var G__3996__3997 = (function (coll,f){
var this__3974 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3996__3998 = (function (coll,f,start){
var this__3975 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3996 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3996__3997.call(this,coll,f);
case  3 :
return G__3996__3998.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3996;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3976 = this;
var subvec_seq__3977 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3976.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3976.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3977.call(null,this__3976.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3978 = this;
return (this__3978.end - this__3978.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3979 = this;
return cljs.core._nth.call(null,this__3979.v,(this__3979.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3980 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3980.start,this__3980.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3980.meta,this__3980.v,this__3980.start,(this__3980.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3981 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3982 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3983 = this;
return (new cljs.core.Subvec(meta,this__3983.v,this__3983.start,this__3983.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3984 = this;
return this__3984.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4000 = null;
var G__4000__4001 = (function (coll,n){
var this__3985 = this;
return cljs.core._nth.call(null,this__3985.v,(this__3985.start + n));
});
var G__4000__4002 = (function (coll,n,not_found){
var this__3986 = this;
return cljs.core._nth.call(null,this__3986.v,(this__3986.start + n),not_found);
});
G__4000 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4000__4001.call(this,coll,n);
case  3 :
return G__4000__4002.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4000;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3987 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3987.meta);
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
var subvec__4004 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4005 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4004.call(this,v,start);
case  3 :
return subvec__4005.call(this,v,start,end);
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
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4007 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4008 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4009 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4010 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4010.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4011 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4012 = this;
return cljs.core._first.call(null,this__4012.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4013 = this;
var temp__3695__auto____4014 = cljs.core.next.call(null,this__4013.front);

if(cljs.core.truth_(temp__3695__auto____4014))
{var f1__4015 = temp__3695__auto____4014;

return (new cljs.core.PersistentQueueSeq(this__4013.meta,f1__4015,this__4013.rear));
} else
{if(cljs.core.truth_((this__4013.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4013.meta,this__4013.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4016 = this;
return this__4016.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4017 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4017.front,this__4017.rear));
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
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4018 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4019 = this;
if(cljs.core.truth_(this__4019.front))
{return (new cljs.core.PersistentQueue(this__4019.meta,(this__4019.count + 1),this__4019.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4020 = this__4019.rear;

if(cljs.core.truth_(or__3548__auto____4020))
{return or__3548__auto____4020;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4019.meta,(this__4019.count + 1),cljs.core.conj.call(null,this__4019.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4021 = this;
var rear__4022 = cljs.core.seq.call(null,this__4021.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4023 = this__4021.front;

if(cljs.core.truth_(or__3548__auto____4023))
{return or__3548__auto____4023;
} else
{return rear__4022;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4021.front,cljs.core.seq.call(null,rear__4022)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4024 = this;
return this__4024.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4025 = this;
return cljs.core._first.call(null,this__4025.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4026 = this;
if(cljs.core.truth_(this__4026.front))
{var temp__3695__auto____4027 = cljs.core.next.call(null,this__4026.front);

if(cljs.core.truth_(temp__3695__auto____4027))
{var f1__4028 = temp__3695__auto____4027;

return (new cljs.core.PersistentQueue(this__4026.meta,(this__4026.count - 1),f1__4028,this__4026.rear));
} else
{return (new cljs.core.PersistentQueue(this__4026.meta,(this__4026.count - 1),cljs.core.seq.call(null,this__4026.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4029 = this;
return cljs.core.first.call(null,this__4029.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4030 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4031 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4032 = this;
return (new cljs.core.PersistentQueue(meta,this__4032.count,this__4032.front,this__4032.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4033 = this;
return this__4033.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4034 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4035 = this;
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
var len__4036 = array.length;

var i__4037 = 0;

while(true){
if(cljs.core.truth_((i__4037 < len__4036)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4037]))))
{return i__4037;
} else
{{
var G__4038 = (i__4037 + incr);
i__4037 = G__4038;
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
var obj_map_contains_key_QMARK___4040 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4041 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4039 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4039))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4039;
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
return obj_map_contains_key_QMARK___4040.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4041.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4044 = cljs.core.hash.call(null,a);
var b__4045 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4044 < b__4045)))
{return -1;
} else
{if(cljs.core.truth_((a__4044 > b__4045)))
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
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4046 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4073 = null;
var G__4073__4074 = (function (coll,k){
var this__4047 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4073__4075 = (function (coll,k,not_found){
var this__4048 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4048.strobj,(this__4048.strobj[k]),not_found);
});
G__4073 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4073__4074.call(this,coll,k);
case  3 :
return G__4073__4075.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4073;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4049 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4050 = goog.object.clone.call(null,this__4049.strobj);
var overwrite_QMARK___4051 = new_strobj__4050.hasOwnProperty(k);

(new_strobj__4050[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4051))
{return (new cljs.core.ObjMap(this__4049.meta,this__4049.keys,new_strobj__4050));
} else
{var new_keys__4052 = cljs.core.aclone.call(null,this__4049.keys);

new_keys__4052.push(k);
return (new cljs.core.ObjMap(this__4049.meta,new_keys__4052,new_strobj__4050));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4049.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4053 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4053.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4077 = null;
var G__4077__4078 = (function (tsym4054,k){
var this__4056 = this;
var tsym4054__4057 = this;

var coll__4058 = tsym4054__4057;

return cljs.core._lookup.call(null,coll__4058,k);
});
var G__4077__4079 = (function (tsym4055,k,not_found){
var this__4059 = this;
var tsym4055__4060 = this;

var coll__4061 = tsym4055__4060;

return cljs.core._lookup.call(null,coll__4061,k,not_found);
});
G__4077 = function(tsym4055,k,not_found){
switch(arguments.length){
case  2 :
return G__4077__4078.call(this,tsym4055,k);
case  3 :
return G__4077__4079.call(this,tsym4055,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4077;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4062 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4063 = this;
if(cljs.core.truth_((this__4063.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4043_SHARP_){
return cljs.core.vector.call(null,p1__4043_SHARP_,(this__4063.strobj[p1__4043_SHARP_]));
}),this__4063.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4064 = this;
return this__4064.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4065 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4066 = this;
return (new cljs.core.ObjMap(meta,this__4066.keys,this__4066.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4067 = this;
return this__4067.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4068 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4068.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4069 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4070 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4070))
{return this__4069.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4070;
}
})()))
{var new_keys__4071 = cljs.core.aclone.call(null,this__4069.keys);
var new_strobj__4072 = goog.object.clone.call(null,this__4069.strobj);

new_keys__4071.splice(cljs.core.scan_array.call(null,1,k,new_keys__4071),1);
cljs.core.js_delete.call(null,new_strobj__4072,k);
return (new cljs.core.ObjMap(this__4069.meta,new_keys__4071,new_strobj__4072));
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
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4082 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4120 = null;
var G__4120__4121 = (function (coll,k){
var this__4083 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4120__4122 = (function (coll,k,not_found){
var this__4084 = this;
var bucket__4085 = (this__4084.hashobj[cljs.core.hash.call(null,k)]);
var i__4086 = (cljs.core.truth_(bucket__4085)?cljs.core.scan_array.call(null,2,k,bucket__4085):null);

if(cljs.core.truth_(i__4086))
{return (bucket__4085[(i__4086 + 1)]);
} else
{return not_found;
}
});
G__4120 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4120__4121.call(this,coll,k);
case  3 :
return G__4120__4122.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4120;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4087 = this;
var h__4088 = cljs.core.hash.call(null,k);
var bucket__4089 = (this__4087.hashobj[h__4088]);

if(cljs.core.truth_(bucket__4089))
{var new_bucket__4090 = cljs.core.aclone.call(null,bucket__4089);
var new_hashobj__4091 = goog.object.clone.call(null,this__4087.hashobj);

(new_hashobj__4091[h__4088] = new_bucket__4090);
var temp__3695__auto____4092 = cljs.core.scan_array.call(null,2,k,new_bucket__4090);

if(cljs.core.truth_(temp__3695__auto____4092))
{var i__4093 = temp__3695__auto____4092;

(new_bucket__4090[(i__4093 + 1)] = v);
return (new cljs.core.HashMap(this__4087.meta,this__4087.count,new_hashobj__4091));
} else
{new_bucket__4090.push(k,v);
return (new cljs.core.HashMap(this__4087.meta,(this__4087.count + 1),new_hashobj__4091));
}
} else
{var new_hashobj__4094 = goog.object.clone.call(null,this__4087.hashobj);

(new_hashobj__4094[h__4088] = [k,v]);
return (new cljs.core.HashMap(this__4087.meta,(this__4087.count + 1),new_hashobj__4094));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4095 = this;
var bucket__4096 = (this__4095.hashobj[cljs.core.hash.call(null,k)]);
var i__4097 = (cljs.core.truth_(bucket__4096)?cljs.core.scan_array.call(null,2,k,bucket__4096):null);

if(cljs.core.truth_(i__4097))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4124 = null;
var G__4124__4125 = (function (tsym4098,k){
var this__4100 = this;
var tsym4098__4101 = this;

var coll__4102 = tsym4098__4101;

return cljs.core._lookup.call(null,coll__4102,k);
});
var G__4124__4126 = (function (tsym4099,k,not_found){
var this__4103 = this;
var tsym4099__4104 = this;

var coll__4105 = tsym4099__4104;

return cljs.core._lookup.call(null,coll__4105,k,not_found);
});
G__4124 = function(tsym4099,k,not_found){
switch(arguments.length){
case  2 :
return G__4124__4125.call(this,tsym4099,k);
case  3 :
return G__4124__4126.call(this,tsym4099,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4124;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4106 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4107 = this;
if(cljs.core.truth_((this__4107.count > 0)))
{var hashes__4108 = cljs.core.js_keys.call(null,this__4107.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4081_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4107.hashobj[p1__4081_SHARP_])));
}),hashes__4108);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4109 = this;
return this__4109.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4110 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4111 = this;
return (new cljs.core.HashMap(meta,this__4111.count,this__4111.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4112 = this;
return this__4112.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4113 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4113.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4114 = this;
var h__4115 = cljs.core.hash.call(null,k);
var bucket__4116 = (this__4114.hashobj[h__4115]);
var i__4117 = (cljs.core.truth_(bucket__4116)?cljs.core.scan_array.call(null,2,k,bucket__4116):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4117)))
{return coll;
} else
{var new_hashobj__4118 = goog.object.clone.call(null,this__4114.hashobj);

if(cljs.core.truth_((3 > bucket__4116.length)))
{cljs.core.js_delete.call(null,new_hashobj__4118,h__4115);
} else
{var new_bucket__4119 = cljs.core.aclone.call(null,bucket__4116);

new_bucket__4119.splice(i__4117,2);
(new_hashobj__4118[h__4115] = new_bucket__4119);
}
return (new cljs.core.HashMap(this__4114.meta,(this__4114.count - 1),new_hashobj__4118));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4128 = ks.length;

var i__4129 = 0;
var out__4130 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4129 < len__4128)))
{{
var G__4131 = (i__4129 + 1);
var G__4132 = cljs.core.assoc.call(null,out__4130,(ks[i__4129]),(vs[i__4129]));
i__4129 = G__4131;
out__4130 = G__4132;
continue;
}
} else
{return out__4130;
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
var in$__4133 = cljs.core.seq.call(null,keyvals);
var out__4134 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4133))
{{
var G__4135 = cljs.core.nnext.call(null,in$__4133);
var G__4136 = cljs.core.assoc.call(null,out__4134,cljs.core.first.call(null,in$__4133),cljs.core.second.call(null,in$__4133));
in$__4133 = G__4135;
out__4134 = G__4136;
continue;
}
} else
{return out__4134;
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
hash_map.cljs$lang$applyTo = (function (arglist__4137){
var keyvals = cljs.core.seq( arglist__4137 );;
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
{return cljs.core.reduce.call(null,(function (p1__4138_SHARP_,p2__4139_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4140 = p1__4138_SHARP_;

if(cljs.core.truth_(or__3548__auto____4140))
{return or__3548__auto____4140;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4139_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4141){
var maps = cljs.core.seq( arglist__4141 );;
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
{var merge_entry__4144 = (function (m,e){
var k__4142 = cljs.core.first.call(null,e);
var v__4143 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4142)))
{return cljs.core.assoc.call(null,m,k__4142,f.call(null,cljs.core.get.call(null,m,k__4142),v__4143));
} else
{return cljs.core.assoc.call(null,m,k__4142,v__4143);
}
});
var merge2__4146 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4144,(function (){var or__3548__auto____4145 = m1;

if(cljs.core.truth_(or__3548__auto____4145))
{return or__3548__auto____4145;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4146,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4147){
var f = cljs.core.first(arglist__4147);
var maps = cljs.core.rest(arglist__4147);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4149 = cljs.core.ObjMap.fromObject([],{});
var keys__4150 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4150))
{var key__4151 = cljs.core.first.call(null,keys__4150);
var entry__4152 = cljs.core.get.call(null,map,key__4151,"\uFDD0'clojure.core/not-found");

{
var G__4153 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4152,"\uFDD0'clojure.core/not-found"))?cljs.core.assoc.call(null,ret__4149,key__4151,entry__4152):ret__4149);
var G__4154 = cljs.core.next.call(null,keys__4150);
ret__4149 = G__4153;
keys__4150 = G__4154;
continue;
}
} else
{return ret__4149;
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
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4155 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4176 = null;
var G__4176__4177 = (function (coll,v){
var this__4156 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4176__4178 = (function (coll,v,not_found){
var this__4157 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4157.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4176 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4176__4177.call(this,coll,v);
case  3 :
return G__4176__4178.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4176;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4180 = null;
var G__4180__4181 = (function (tsym4158,k){
var this__4160 = this;
var tsym4158__4161 = this;

var coll__4162 = tsym4158__4161;

return cljs.core._lookup.call(null,coll__4162,k);
});
var G__4180__4182 = (function (tsym4159,k,not_found){
var this__4163 = this;
var tsym4159__4164 = this;

var coll__4165 = tsym4159__4164;

return cljs.core._lookup.call(null,coll__4165,k,not_found);
});
G__4180 = function(tsym4159,k,not_found){
switch(arguments.length){
case  2 :
return G__4180__4181.call(this,tsym4159,k);
case  3 :
return G__4180__4182.call(this,tsym4159,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4180;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4166 = this;
return (new cljs.core.Set(this__4166.meta,cljs.core.assoc.call(null,this__4166.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4167 = this;
return cljs.core.keys.call(null,this__4167.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4168 = this;
return (new cljs.core.Set(this__4168.meta,cljs.core.dissoc.call(null,this__4168.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4169 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4170 = this;
var and__3546__auto____4171 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4171))
{var and__3546__auto____4172 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4172))
{return cljs.core.every_QMARK_.call(null,(function (p1__4148_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4148_SHARP_);
}),other);
} else
{return and__3546__auto____4172;
}
} else
{return and__3546__auto____4171;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4173 = this;
return (new cljs.core.Set(meta,this__4173.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4174 = this;
return this__4174.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4175 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4175.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4185 = cljs.core.seq.call(null,coll);
var out__4186 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4185))))
{{
var G__4187 = cljs.core.rest.call(null,in$__4185);
var G__4188 = cljs.core.conj.call(null,out__4186,cljs.core.first.call(null,in$__4185));
in$__4185 = G__4187;
out__4186 = G__4188;
continue;
}
} else
{return out__4186;
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
{var n__4189 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4190 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4190))
{var e__4191 = temp__3695__auto____4190;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4191));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4189,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4184_SHARP_){
var temp__3695__auto____4192 = cljs.core.find.call(null,smap,p1__4184_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4192))
{var e__4193 = temp__3695__auto____4192;

return cljs.core.second.call(null,e__4193);
} else
{return p1__4184_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4201 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4194,seen){
while(true){
var vec__4195__4196 = p__4194;
var f__4197 = cljs.core.nth.call(null,vec__4195__4196,0,null);
var xs__4198 = vec__4195__4196;

var temp__3698__auto____4199 = cljs.core.seq.call(null,xs__4198);

if(cljs.core.truth_(temp__3698__auto____4199))
{var s__4200 = temp__3698__auto____4199;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4197)))
{{
var G__4202 = cljs.core.rest.call(null,s__4200);
var G__4203 = seen;
p__4194 = G__4202;
seen = G__4203;
continue;
}
} else
{return cljs.core.cons.call(null,f__4197,step.call(null,cljs.core.rest.call(null,s__4200),cljs.core.conj.call(null,seen,f__4197)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4201.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4204 = cljs.core.PersistentVector.fromArray([]);
var s__4205 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4205)))
{{
var G__4206 = cljs.core.conj.call(null,ret__4204,cljs.core.first.call(null,s__4205));
var G__4207 = cljs.core.next.call(null,s__4205);
ret__4204 = G__4206;
s__4205 = G__4207;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4204);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4208 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4208))
{return or__3548__auto____4208;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4209 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4209 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4209 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4210 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4210))
{return or__3548__auto____4210;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4211 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4211 > -1)))
{return cljs.core.subs.call(null,x,2,i__4211);
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
var map__4214 = cljs.core.ObjMap.fromObject([],{});
var ks__4215 = cljs.core.seq.call(null,keys);
var vs__4216 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4217 = ks__4215;

if(cljs.core.truth_(and__3546__auto____4217))
{return vs__4216;
} else
{return and__3546__auto____4217;
}
})()))
{{
var G__4218 = cljs.core.assoc.call(null,map__4214,cljs.core.first.call(null,ks__4215),cljs.core.first.call(null,vs__4216));
var G__4219 = cljs.core.next.call(null,ks__4215);
var G__4220 = cljs.core.next.call(null,vs__4216);
map__4214 = G__4218;
ks__4215 = G__4219;
vs__4216 = G__4220;
continue;
}
} else
{return map__4214;
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
var max_key__4223 = (function (k,x){
return x;
});
var max_key__4224 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4225 = (function() { 
var G__4227__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4212_SHARP_,p2__4213_SHARP_){
return max_key.call(null,k,p1__4212_SHARP_,p2__4213_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4227 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4227__delegate.call(this, k, x, y, more);
};
G__4227.cljs$lang$maxFixedArity = 3;
G__4227.cljs$lang$applyTo = (function (arglist__4228){
var k = cljs.core.first(arglist__4228);
var x = cljs.core.first(cljs.core.next(arglist__4228));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4228)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4228)));
return G__4227__delegate.call(this, k, x, y, more);
});
return G__4227;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4223.call(this,k,x);
case  3 :
return max_key__4224.call(this,k,x,y);
default:
return max_key__4225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4225.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4229 = (function (k,x){
return x;
});
var min_key__4230 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4231 = (function() { 
var G__4233__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4221_SHARP_,p2__4222_SHARP_){
return min_key.call(null,k,p1__4221_SHARP_,p2__4222_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4233 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4233__delegate.call(this, k, x, y, more);
};
G__4233.cljs$lang$maxFixedArity = 3;
G__4233.cljs$lang$applyTo = (function (arglist__4234){
var k = cljs.core.first(arglist__4234);
var x = cljs.core.first(cljs.core.next(arglist__4234));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4234)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4234)));
return G__4233__delegate.call(this, k, x, y, more);
});
return G__4233;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4229.call(this,k,x);
case  3 :
return min_key__4230.call(this,k,x,y);
default:
return min_key__4231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4231.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4237 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4238 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4235 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4235))
{var s__4236 = temp__3698__auto____4235;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4236),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4236)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4237.call(this,n,step);
case  3 :
return partition_all__4238.call(this,n,step,coll);
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
var temp__3698__auto____4240 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4240))
{var s__4241 = temp__3698__auto____4240;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4241))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4241),take_while.call(null,pred,cljs.core.rest.call(null,s__4241)));
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
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4242 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4243 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4259 = null;
var G__4259__4260 = (function (rng,f){
var this__4244 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4259__4261 = (function (rng,f,s){
var this__4245 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4259 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4259__4260.call(this,rng,f);
case  3 :
return G__4259__4261.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4259;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4246 = this;
var comp__4247 = (cljs.core.truth_((this__4246.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4247.call(null,this__4246.start,this__4246.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4248 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4248.end - this__4248.start) / this__4248.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4249 = this;
return this__4249.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4250 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4250.meta,(this__4250.start + this__4250.step),this__4250.end,this__4250.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4251 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4252 = this;
return (new cljs.core.Range(meta,this__4252.start,this__4252.end,this__4252.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4253 = this;
return this__4253.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4263 = null;
var G__4263__4264 = (function (rng,n){
var this__4254 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4254.start + (n * this__4254.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4255 = (this__4254.start > this__4254.end);

if(cljs.core.truth_(and__3546__auto____4255))
{return cljs.core._EQ_.call(null,this__4254.step,0);
} else
{return and__3546__auto____4255;
}
})()))
{return this__4254.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4263__4265 = (function (rng,n,not_found){
var this__4256 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4256.start + (n * this__4256.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4257 = (this__4256.start > this__4256.end);

if(cljs.core.truth_(and__3546__auto____4257))
{return cljs.core._EQ_.call(null,this__4256.step,0);
} else
{return and__3546__auto____4257;
}
})()))
{return this__4256.start;
} else
{return not_found;
}
}
});
G__4263 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4263__4264.call(this,rng,n);
case  3 :
return G__4263__4265.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4263;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4258 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4258.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4267 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4268 = (function (end){
return range.call(null,0,end,1);
});
var range__4269 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4270 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4267.call(this);
case  1 :
return range__4268.call(this,start);
case  2 :
return range__4269.call(this,start,end);
case  3 :
return range__4270.call(this,start,end,step);
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
var temp__3698__auto____4272 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4272))
{var s__4273 = temp__3698__auto____4272;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4273),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4273)));
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
var temp__3698__auto____4275 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4275))
{var s__4276 = temp__3698__auto____4275;

var fst__4277 = cljs.core.first.call(null,s__4276);
var fv__4278 = f.call(null,fst__4277);
var run__4279 = cljs.core.cons.call(null,fst__4277,cljs.core.take_while.call(null,(function (p1__4274_SHARP_){
return cljs.core._EQ_.call(null,fv__4278,f.call(null,p1__4274_SHARP_));
}),cljs.core.next.call(null,s__4276)));

return cljs.core.cons.call(null,run__4279,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4279),s__4276))));
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
var reductions__4294 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4290 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4290))
{var s__4291 = temp__3695__auto____4290;

return reductions.call(null,f,cljs.core.first.call(null,s__4291),cljs.core.rest.call(null,s__4291));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4295 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4292))
{var s__4293 = temp__3698__auto____4292;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4293)),cljs.core.rest.call(null,s__4293));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4294.call(this,f,init);
case  3 :
return reductions__4295.call(this,f,init,coll);
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
var juxt__4298 = (function (f){
return (function() {
var G__4303 = null;
var G__4303__4304 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4303__4305 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4303__4306 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4303__4307 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4303__4308 = (function() { 
var G__4310__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4310 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4310__delegate.call(this, x, y, z, args);
};
G__4310.cljs$lang$maxFixedArity = 3;
G__4310.cljs$lang$applyTo = (function (arglist__4311){
var x = cljs.core.first(arglist__4311);
var y = cljs.core.first(cljs.core.next(arglist__4311));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4311)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4311)));
return G__4310__delegate.call(this, x, y, z, args);
});
return G__4310;
})()
;
G__4303 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4303__4304.call(this);
case  1 :
return G__4303__4305.call(this,x);
case  2 :
return G__4303__4306.call(this,x,y);
case  3 :
return G__4303__4307.call(this,x,y,z);
default:
return G__4303__4308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4303.cljs$lang$maxFixedArity = 3;
G__4303.cljs$lang$applyTo = G__4303__4308.cljs$lang$applyTo;
return G__4303;
})()
});
var juxt__4299 = (function (f,g){
return (function() {
var G__4312 = null;
var G__4312__4313 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4312__4314 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4312__4315 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4312__4316 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4312__4317 = (function() { 
var G__4319__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4319 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4319__delegate.call(this, x, y, z, args);
};
G__4319.cljs$lang$maxFixedArity = 3;
G__4319.cljs$lang$applyTo = (function (arglist__4320){
var x = cljs.core.first(arglist__4320);
var y = cljs.core.first(cljs.core.next(arglist__4320));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4320)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4320)));
return G__4319__delegate.call(this, x, y, z, args);
});
return G__4319;
})()
;
G__4312 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4312__4313.call(this);
case  1 :
return G__4312__4314.call(this,x);
case  2 :
return G__4312__4315.call(this,x,y);
case  3 :
return G__4312__4316.call(this,x,y,z);
default:
return G__4312__4317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4312.cljs$lang$maxFixedArity = 3;
G__4312.cljs$lang$applyTo = G__4312__4317.cljs$lang$applyTo;
return G__4312;
})()
});
var juxt__4300 = (function (f,g,h){
return (function() {
var G__4321 = null;
var G__4321__4322 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4321__4323 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4321__4324 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4321__4325 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4321__4326 = (function() { 
var G__4328__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4328__delegate.call(this, x, y, z, args);
};
G__4328.cljs$lang$maxFixedArity = 3;
G__4328.cljs$lang$applyTo = (function (arglist__4329){
var x = cljs.core.first(arglist__4329);
var y = cljs.core.first(cljs.core.next(arglist__4329));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4329)));
return G__4328__delegate.call(this, x, y, z, args);
});
return G__4328;
})()
;
G__4321 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4321__4322.call(this);
case  1 :
return G__4321__4323.call(this,x);
case  2 :
return G__4321__4324.call(this,x,y);
case  3 :
return G__4321__4325.call(this,x,y,z);
default:
return G__4321__4326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4321.cljs$lang$maxFixedArity = 3;
G__4321.cljs$lang$applyTo = G__4321__4326.cljs$lang$applyTo;
return G__4321;
})()
});
var juxt__4301 = (function() { 
var G__4330__delegate = function (f,g,h,fs){
var fs__4297 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4331 = null;
var G__4331__4332 = (function (){
return cljs.core.reduce.call(null,(function (p1__4280_SHARP_,p2__4281_SHARP_){
return cljs.core.conj.call(null,p1__4280_SHARP_,p2__4281_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__4297);
});
var G__4331__4333 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4282_SHARP_,p2__4283_SHARP_){
return cljs.core.conj.call(null,p1__4282_SHARP_,p2__4283_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__4297);
});
var G__4331__4334 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4284_SHARP_,p2__4285_SHARP_){
return cljs.core.conj.call(null,p1__4284_SHARP_,p2__4285_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__4297);
});
var G__4331__4335 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4286_SHARP_,p2__4287_SHARP_){
return cljs.core.conj.call(null,p1__4286_SHARP_,p2__4287_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__4297);
});
var G__4331__4336 = (function() { 
var G__4338__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4288_SHARP_,p2__4289_SHARP_){
return cljs.core.conj.call(null,p1__4288_SHARP_,cljs.core.apply.call(null,p2__4289_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__4297);
};
var G__4338 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4338__delegate.call(this, x, y, z, args);
};
G__4338.cljs$lang$maxFixedArity = 3;
G__4338.cljs$lang$applyTo = (function (arglist__4339){
var x = cljs.core.first(arglist__4339);
var y = cljs.core.first(cljs.core.next(arglist__4339));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4339)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4339)));
return G__4338__delegate.call(this, x, y, z, args);
});
return G__4338;
})()
;
G__4331 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4331__4332.call(this);
case  1 :
return G__4331__4333.call(this,x);
case  2 :
return G__4331__4334.call(this,x,y);
case  3 :
return G__4331__4335.call(this,x,y,z);
default:
return G__4331__4336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4331.cljs$lang$maxFixedArity = 3;
G__4331.cljs$lang$applyTo = G__4331__4336.cljs$lang$applyTo;
return G__4331;
})()
};
var G__4330 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4330__delegate.call(this, f, g, h, fs);
};
G__4330.cljs$lang$maxFixedArity = 3;
G__4330.cljs$lang$applyTo = (function (arglist__4340){
var f = cljs.core.first(arglist__4340);
var g = cljs.core.first(cljs.core.next(arglist__4340));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4340)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4340)));
return G__4330__delegate.call(this, f, g, h, fs);
});
return G__4330;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4298.call(this,f);
case  2 :
return juxt__4299.call(this,f,g);
case  3 :
return juxt__4300.call(this,f,g,h);
default:
return juxt__4301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4301.cljs$lang$applyTo;
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
var dorun__4342 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4345 = cljs.core.next.call(null,coll);
coll = G__4345;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4343 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4341 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4341))
{return (n > 0);
} else
{return and__3546__auto____4341;
}
})()))
{{
var G__4346 = (n - 1);
var G__4347 = cljs.core.next.call(null,coll);
n = G__4346;
coll = G__4347;
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
return dorun__4342.call(this,n);
case  2 :
return dorun__4343.call(this,n,coll);
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
var doall__4348 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4349 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4348.call(this,n);
case  2 :
return doall__4349.call(this,n,coll);
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
var matches__4351 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4351),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4351),1)))
{return cljs.core.first.call(null,matches__4351);
} else
{return cljs.core.vec.call(null,matches__4351);
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
var matches__4352 = re.exec(s);

if(cljs.core.truth_((matches__4352 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4352),1)))
{return cljs.core.first.call(null,matches__4352);
} else
{return cljs.core.vec.call(null,matches__4352);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4353 = cljs.core.re_find.call(null,re,s);
var match_idx__4354 = s.search(re);
var match_str__4355 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4353))?cljs.core.first.call(null,match_data__4353):match_data__4353);
var post_match__4356 = cljs.core.subs.call(null,s,(match_idx__4354 + cljs.core.count.call(null,match_str__4355)));

if(cljs.core.truth_(match_data__4353))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4353,re_seq.call(null,re,post_match__4356));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4358__4359 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4360 = cljs.core.nth.call(null,vec__4358__4359,0,null);
var flags__4361 = cljs.core.nth.call(null,vec__4358__4359,1,null);
var pattern__4362 = cljs.core.nth.call(null,vec__4358__4359,2,null);

return (new RegExp(pattern__4362,flags__4361));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4357_SHARP_){
return print_one.call(null,p1__4357_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4363 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4363))
{var and__3546__auto____4367 = (function (){var x__357__auto____4364 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4365 = x__357__auto____4364;

if(cljs.core.truth_(and__3546__auto____4365))
{var and__3546__auto____4366 = x__357__auto____4364.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4366))
{return cljs.core.not.call(null,x__357__auto____4364.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4366;
}
} else
{return and__3546__auto____4365;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__357__auto____4364);
}
})();

if(cljs.core.truth_(and__3546__auto____4367))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4367;
}
} else
{return and__3546__auto____4363;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__357__auto____4368 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4369 = x__357__auto____4368;

if(cljs.core.truth_(and__3546__auto____4369))
{var and__3546__auto____4370 = x__357__auto____4368.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4370))
{return cljs.core.not.call(null,x__357__auto____4368.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4370;
}
} else
{return and__3546__auto____4369;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__357__auto____4368);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__4371 = cljs.core.first.call(null,objs);
var sb__4372 = (new goog.string.StringBuffer());

var G__4373__4374 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4373__4374))
{var obj__4375 = cljs.core.first.call(null,G__4373__4374);
var G__4373__4376 = G__4373__4374;

while(true){
if(cljs.core.truth_((obj__4375 === first_obj__4371)))
{} else
{sb__4372.append(" ");
}
var G__4377__4378 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4375,opts));

if(cljs.core.truth_(G__4377__4378))
{var string__4379 = cljs.core.first.call(null,G__4377__4378);
var G__4377__4380 = G__4377__4378;

while(true){
sb__4372.append(string__4379);
var temp__3698__auto____4381 = cljs.core.next.call(null,G__4377__4380);

if(cljs.core.truth_(temp__3698__auto____4381))
{var G__4377__4382 = temp__3698__auto____4381;

{
var G__4385 = cljs.core.first.call(null,G__4377__4382);
var G__4386 = G__4377__4382;
string__4379 = G__4385;
G__4377__4380 = G__4386;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4383 = cljs.core.next.call(null,G__4373__4376);

if(cljs.core.truth_(temp__3698__auto____4383))
{var G__4373__4384 = temp__3698__auto____4383;

{
var G__4387 = cljs.core.first.call(null,G__4373__4384);
var G__4388 = G__4373__4384;
obj__4375 = G__4387;
G__4373__4376 = G__4388;
continue;
}
} else
{}
break;
}
} else
{}
return sb__4372;
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
var sb__4389 = cljs.core.pr_sb.call(null,objs,opts);

sb__4389.append("\n");
return cljs.core.str.call(null,sb__4389);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4390 = cljs.core.first.call(null,objs);

var G__4391__4392 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4391__4392))
{var obj__4393 = cljs.core.first.call(null,G__4391__4392);
var G__4391__4394 = G__4391__4392;

while(true){
if(cljs.core.truth_((obj__4393 === first_obj__4390)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4395__4396 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4393,opts));

if(cljs.core.truth_(G__4395__4396))
{var string__4397 = cljs.core.first.call(null,G__4395__4396);
var G__4395__4398 = G__4395__4396;

while(true){
cljs.core.string_print.call(null,string__4397);
var temp__3698__auto____4399 = cljs.core.next.call(null,G__4395__4398);

if(cljs.core.truth_(temp__3698__auto____4399))
{var G__4395__4400 = temp__3698__auto____4399;

{
var G__4403 = cljs.core.first.call(null,G__4395__4400);
var G__4404 = G__4395__4400;
string__4397 = G__4403;
G__4395__4398 = G__4404;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4401 = cljs.core.next.call(null,G__4391__4394);

if(cljs.core.truth_(temp__3698__auto____4401))
{var G__4391__4402 = temp__3698__auto____4401;

{
var G__4405 = cljs.core.first.call(null,G__4391__4402);
var G__4406 = G__4391__4402;
obj__4393 = G__4405;
G__4391__4394 = G__4406;
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
pr_str.cljs$lang$applyTo = (function (arglist__4407){
var objs = cljs.core.seq( arglist__4407 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__4408){
var objs = cljs.core.seq( arglist__4408 );;
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
pr.cljs$lang$applyTo = (function (arglist__4409){
var objs = cljs.core.seq( arglist__4409 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4410){
var objs = cljs.core.seq( arglist__4410 );;
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
print_str.cljs$lang$applyTo = (function (arglist__4411){
var objs = cljs.core.seq( arglist__4411 );;
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
println.cljs$lang$applyTo = (function (arglist__4412){
var objs = cljs.core.seq( arglist__4412 );;
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
println_str.cljs$lang$applyTo = (function (arglist__4413){
var objs = cljs.core.seq( arglist__4413 );;
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
prn.cljs$lang$applyTo = (function (arglist__4414){
var objs = cljs.core.seq( arglist__4414 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4415 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4415,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4416 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4416))
{var nspc__4417 = temp__3698__auto____4416;

return cljs.core.str.call(null,nspc__4417,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4418 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4418))
{var nspc__4419 = temp__3698__auto____4418;

return cljs.core.str.call(null,nspc__4419,"/");
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
var pr_pair__4420 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4420,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4421 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4422 = this;
var G__4423__4424 = cljs.core.seq.call(null,this__4422.watches);

if(cljs.core.truth_(G__4423__4424))
{var G__4426__4428 = cljs.core.first.call(null,G__4423__4424);
var vec__4427__4429 = G__4426__4428;
var key__4430 = cljs.core.nth.call(null,vec__4427__4429,0,null);
var f__4431 = cljs.core.nth.call(null,vec__4427__4429,1,null);
var G__4423__4432 = G__4423__4424;

var G__4426__4433 = G__4426__4428;
var G__4423__4434 = G__4423__4432;

while(true){
var vec__4435__4436 = G__4426__4433;
var key__4437 = cljs.core.nth.call(null,vec__4435__4436,0,null);
var f__4438 = cljs.core.nth.call(null,vec__4435__4436,1,null);
var G__4423__4439 = G__4423__4434;

f__4438.call(null,key__4437,this$,oldval,newval);
var temp__3698__auto____4440 = cljs.core.next.call(null,G__4423__4439);

if(cljs.core.truth_(temp__3698__auto____4440))
{var G__4423__4441 = temp__3698__auto____4440;

{
var G__4448 = cljs.core.first.call(null,G__4423__4441);
var G__4449 = G__4423__4441;
G__4426__4433 = G__4448;
G__4423__4434 = G__4449;
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
var this__4442 = this;
return this$.watches = cljs.core.assoc.call(null,this__4442.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4443 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4443.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4444 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4444.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4445 = this;
return this__4445.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4446 = this;
return this__4446.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4447 = this;
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
var atom__4456 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4457 = (function() { 
var G__4459__delegate = function (x,p__4450){
var map__4451__4452 = p__4450;
var map__4451__4453 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4451__4452))?cljs.core.apply.call(null,cljs.core.hash_map,map__4451__4452):map__4451__4452);
var validator__4454 = cljs.core.get.call(null,map__4451__4453,"\uFDD0'validator");
var meta__4455 = cljs.core.get.call(null,map__4451__4453,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4455,validator__4454,null));
};
var G__4459 = function (x,var_args){
var p__4450 = null;
if (goog.isDef(var_args)) {
  p__4450 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4459__delegate.call(this, x, p__4450);
};
G__4459.cljs$lang$maxFixedArity = 1;
G__4459.cljs$lang$applyTo = (function (arglist__4460){
var x = cljs.core.first(arglist__4460);
var p__4450 = cljs.core.rest(arglist__4460);
return G__4459__delegate.call(this, x, p__4450);
});
return G__4459;
})()
;
atom = function(x,var_args){
var p__4450 = var_args;
switch(arguments.length){
case  1 :
return atom__4456.call(this,x);
default:
return atom__4457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4457.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4461 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4461))
{var validate__4462 = temp__3698__auto____4461;

if(cljs.core.truth_(validate__4462.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__4463 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4463,new_value);
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
var swap_BANG___4464 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4465 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4466 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4467 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4468 = (function() { 
var G__4470__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4470 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4470__delegate.call(this, a, f, x, y, z, more);
};
G__4470.cljs$lang$maxFixedArity = 5;
G__4470.cljs$lang$applyTo = (function (arglist__4471){
var a = cljs.core.first(arglist__4471);
var f = cljs.core.first(cljs.core.next(arglist__4471));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4471)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4471))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4471)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4471)))));
return G__4470__delegate.call(this, a, f, x, y, z, more);
});
return G__4470;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4464.call(this,a,f);
case  3 :
return swap_BANG___4465.call(this,a,f,x);
case  4 :
return swap_BANG___4466.call(this,a,f,x,y);
case  5 :
return swap_BANG___4467.call(this,a,f,x,y,z);
default:
return swap_BANG___4468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4468.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4472){
var iref = cljs.core.first(arglist__4472);
var f = cljs.core.first(cljs.core.next(arglist__4472));
var args = cljs.core.rest(cljs.core.next(arglist__4472));
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
var gensym__4473 = (function (){
return gensym.call(null,"G__");
});
var gensym__4474 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4473.call(this);
case  1 :
return gensym__4474.call(this,prefix_string);
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
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4476 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__4476.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4477 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__4477.state,(function (p__4478){
var curr_state__4479 = p__4478;
var curr_state__4480 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__4479))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__4479):curr_state__4479);
var done__4481 = cljs.core.get.call(null,curr_state__4480,"\uFDD0'done");

if(cljs.core.truth_(done__4481))
{return curr_state__4480;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__4477.f.call(null)});
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
var map__4482__4483 = options;
var map__4482__4484 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4482__4483))?cljs.core.apply.call(null,cljs.core.hash_map,map__4482__4483):map__4482__4483);
var keywordize_keys__4485 = cljs.core.get.call(null,map__4482__4484,"\uFDD0'keywordize-keys");
var keyfn__4486 = (cljs.core.truth_(keywordize_keys__4485)?cljs.core.keyword:cljs.core.str);
var f__4492 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__426__auto____4491 = (function iter__4487(s__4488){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4488__4489 = s__4488;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4488__4489)))
{var k__4490 = cljs.core.first.call(null,s__4488__4489);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__4486.call(null,k__4490),thisfn.call(null,(x[k__4490]))]),iter__4487.call(null,cljs.core.rest.call(null,s__4488__4489)));
} else
{return null;
}
break;
}
})));
});

return iter__426__auto____4491.call(null,cljs.core.js_keys.call(null,x));
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

return f__4492.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4493){
var x = cljs.core.first(arglist__4493);
var options = cljs.core.rest(arglist__4493);
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
var mem__4494 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4498__delegate = function (args){
var temp__3695__auto____4495 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4494),args);

if(cljs.core.truth_(temp__3695__auto____4495))
{var v__4496 = temp__3695__auto____4495;

return v__4496;
} else
{var ret__4497 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4494,cljs.core.assoc,args,ret__4497);
return ret__4497;
}
};
var G__4498 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4498__delegate.call(this, args);
};
G__4498.cljs$lang$maxFixedArity = 0;
G__4498.cljs$lang$applyTo = (function (arglist__4499){
var args = cljs.core.seq( arglist__4499 );;
return G__4498__delegate.call(this, args);
});
return G__4498;
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
var trampoline__4501 = (function (f){
while(true){
var ret__4500 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4500)))
{{
var G__4504 = ret__4500;
f = G__4504;
continue;
}
} else
{return ret__4500;
}
break;
}
});
var trampoline__4502 = (function() { 
var G__4505__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4505 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4505__delegate.call(this, f, args);
};
G__4505.cljs$lang$maxFixedArity = 1;
G__4505.cljs$lang$applyTo = (function (arglist__4506){
var f = cljs.core.first(arglist__4506);
var args = cljs.core.rest(arglist__4506);
return G__4505__delegate.call(this, f, args);
});
return G__4505;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4501.call(this,f);
default:
return trampoline__4502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4502.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4507 = (function (){
return rand.call(null,1);
});
var rand__4508 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4507.call(this);
case  1 :
return rand__4508.call(this,n);
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
var k__4510 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4510,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4510,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___4519 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4520 = (function (h,child,parent){
var or__3548__auto____4511 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4511))
{return or__3548__auto____4511;
} else
{var or__3548__auto____4512 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4512))
{return or__3548__auto____4512;
} else
{var and__3546__auto____4513 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4513))
{var and__3546__auto____4514 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4514))
{var and__3546__auto____4515 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4515))
{var ret__4516 = true;
var i__4517 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4518 = cljs.core.not.call(null,ret__4516);

if(cljs.core.truth_(or__3548__auto____4518))
{return or__3548__auto____4518;
} else
{return cljs.core._EQ_.call(null,i__4517,cljs.core.count.call(null,parent));
}
})()))
{return ret__4516;
} else
{{
var G__4522 = isa_QMARK_.call(null,h,child.call(null,i__4517),parent.call(null,i__4517));
var G__4523 = (i__4517 + 1);
ret__4516 = G__4522;
i__4517 = G__4523;
continue;
}
}
break;
}
} else
{return and__3546__auto____4515;
}
} else
{return and__3546__auto____4514;
}
} else
{return and__3546__auto____4513;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4519.call(this,h,child);
case  3 :
return isa_QMARK___4520.call(this,h,child,parent);
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
var parents__4524 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4525 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4524.call(this,h);
case  2 :
return parents__4525.call(this,h,tag);
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
var ancestors__4527 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4528 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4527.call(this,h);
case  2 :
return ancestors__4528.call(this,h,tag);
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
var descendants__4530 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4531 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4530.call(this,h);
case  2 :
return descendants__4531.call(this,h,tag);
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
var derive__4541 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4542 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__4536 = "\uFDD0'parents".call(null,h);
var td__4537 = "\uFDD0'descendants".call(null,h);
var ta__4538 = "\uFDD0'ancestors".call(null,h);
var tf__4539 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4540 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4536.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4538.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4538.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4536,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4539.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4537,parent,ta__4538),"\uFDD0'descendants":tf__4539.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4538,tag,td__4537)});
})());

if(cljs.core.truth_(or__3548__auto____4540))
{return or__3548__auto____4540;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4541.call(this,h,tag);
case  3 :
return derive__4542.call(this,h,tag,parent);
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
var underive__4548 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4549 = (function (h,tag,parent){
var parentMap__4544 = "\uFDD0'parents".call(null,h);
var childsParents__4545 = (cljs.core.truth_(parentMap__4544.call(null,tag))?cljs.core.disj.call(null,parentMap__4544.call(null,tag),parent):cljs.core.set([]));
var newParents__4546 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4545))?cljs.core.assoc.call(null,parentMap__4544,tag,childsParents__4545):cljs.core.dissoc.call(null,parentMap__4544,tag));
var deriv_seq__4547 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4533_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4533_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4533_SHARP_),cljs.core.second.call(null,p1__4533_SHARP_)));
}),cljs.core.seq.call(null,newParents__4546)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4544.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4534_SHARP_,p2__4535_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4534_SHARP_,p2__4535_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4547));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4548.call(this,h,tag);
case  3 :
return underive__4549.call(this,h,tag,parent);
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
var xprefs__4551 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4553 = (cljs.core.truth_((function (){var and__3546__auto____4552 = xprefs__4551;

if(cljs.core.truth_(and__3546__auto____4552))
{return xprefs__4551.call(null,y);
} else
{return and__3546__auto____4552;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4553))
{return or__3548__auto____4553;
} else
{var or__3548__auto____4555 = (function (){var ps__4554 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4554) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4554),prefer_table)))
{} else
{}
{
var G__4558 = cljs.core.rest.call(null,ps__4554);
ps__4554 = G__4558;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4555))
{return or__3548__auto____4555;
} else
{var or__3548__auto____4557 = (function (){var ps__4556 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4556) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4556),y,prefer_table)))
{} else
{}
{
var G__4559 = cljs.core.rest.call(null,ps__4556);
ps__4556 = G__4559;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4557))
{return or__3548__auto____4557;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4560 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4560))
{return or__3548__auto____4560;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4569 = cljs.core.reduce.call(null,(function (be,p__4561){
var vec__4562__4563 = p__4561;
var k__4564 = cljs.core.nth.call(null,vec__4562__4563,0,null);
var ___4565 = cljs.core.nth.call(null,vec__4562__4563,1,null);
var e__4566 = vec__4562__4563;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4564)))
{var be2__4568 = (cljs.core.truth_((function (){var or__3548__auto____4567 = (be === null);

if(cljs.core.truth_(or__3548__auto____4567))
{return or__3548__auto____4567;
} else
{return cljs.core.dominates.call(null,k__4564,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4566:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4568),k__4564,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4564," and ",cljs.core.first.call(null,be2__4568),", and neither is preferred")));
}
return be2__4568;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4569))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4569));
return cljs.core.second.call(null,best_entry__4569);
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
if(cljs.core.truth_((function (){var and__3546__auto____4570 = mf;

if(cljs.core.truth_(and__3546__auto____4570))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4570;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4571 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4571))
{return or__3548__auto____4571;
} else
{var or__3548__auto____4572 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4572))
{return or__3548__auto____4572;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4573 = mf;

if(cljs.core.truth_(and__3546__auto____4573))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4573;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4574 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4574))
{return or__3548__auto____4574;
} else
{var or__3548__auto____4575 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4575))
{return or__3548__auto____4575;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4576 = mf;

if(cljs.core.truth_(and__3546__auto____4576))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4576;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4577 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4577))
{return or__3548__auto____4577;
} else
{var or__3548__auto____4578 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4578))
{return or__3548__auto____4578;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4579 = mf;

if(cljs.core.truth_(and__3546__auto____4579))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4579;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4580 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4580))
{return or__3548__auto____4580;
} else
{var or__3548__auto____4581 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4581))
{return or__3548__auto____4581;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4582 = mf;

if(cljs.core.truth_(and__3546__auto____4582))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4582;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4583 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4583))
{return or__3548__auto____4583;
} else
{var or__3548__auto____4584 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4584))
{return or__3548__auto____4584;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4585 = mf;

if(cljs.core.truth_(and__3546__auto____4585))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4585;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4586 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4586))
{return or__3548__auto____4586;
} else
{var or__3548__auto____4587 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4587))
{return or__3548__auto____4587;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4588 = mf;

if(cljs.core.truth_(and__3546__auto____4588))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4588;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4589 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4589))
{return or__3548__auto____4589;
} else
{var or__3548__auto____4590 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4590))
{return or__3548__auto____4590;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4591 = mf;

if(cljs.core.truth_(and__3546__auto____4591))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4591;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4592 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4592))
{return or__3548__auto____4592;
} else
{var or__3548__auto____4593 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4593))
{return or__3548__auto____4593;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4594 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4595 = cljs.core._get_method.call(null,mf,dispatch_val__4594);

if(cljs.core.truth_(target_fn__4595))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4594)));
}
return cljs.core.apply.call(null,target_fn__4595,args);
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
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4596 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4597 = this;
cljs.core.swap_BANG_.call(null,this__4597.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4597.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4597.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4597.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4598 = this;
cljs.core.swap_BANG_.call(null,this__4598.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4598.method_cache,this__4598.method_table,this__4598.cached_hierarchy,this__4598.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4599 = this;
cljs.core.swap_BANG_.call(null,this__4599.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4599.method_cache,this__4599.method_table,this__4599.cached_hierarchy,this__4599.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4600 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4600.cached_hierarchy),cljs.core.deref.call(null,this__4600.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4600.method_cache,this__4600.method_table,this__4600.cached_hierarchy,this__4600.hierarchy);
}
var temp__3695__auto____4601 = cljs.core.deref.call(null,this__4600.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4601))
{var target_fn__4602 = temp__3695__auto____4601;

return target_fn__4602;
} else
{var temp__3695__auto____4603 = cljs.core.find_and_cache_best_method.call(null,this__4600.name,dispatch_val,this__4600.hierarchy,this__4600.method_table,this__4600.prefer_table,this__4600.method_cache,this__4600.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4603))
{var target_fn__4604 = temp__3695__auto____4603;

return target_fn__4604;
} else
{return cljs.core.deref.call(null,this__4600.method_table).call(null,this__4600.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4605 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4605.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4605.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4605.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4605.method_cache,this__4605.method_table,this__4605.cached_hierarchy,this__4605.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4606 = this;
return cljs.core.deref.call(null,this__4606.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4607 = this;
return cljs.core.deref.call(null,this__4607.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4608 = this;
return cljs.core.do_dispatch.call(null,mf,this__4608.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4609__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4609 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4609__delegate.call(this, _, args);
};
G__4609.cljs$lang$maxFixedArity = 1;
G__4609.cljs$lang$applyTo = (function (arglist__4610){
var _ = cljs.core.first(arglist__4610);
var args = cljs.core.rest(arglist__4610);
return G__4609__delegate.call(this, _, args);
});
return G__4609;
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
