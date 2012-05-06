/**
* Copyright (c) Rich Hickey. All rights reserved.
*
* The use and distribution terms for this software are covered by the Eclipse
* Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php) which can
* be found in the file epl-v10.html under the licenses directory at the root of
* this distribution. By using this software in any fashion, you are agreeing to
* be bound by the terms of this license. You must not remove this notice, or any
* other, from this software.
*/

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
var or__3548__auto____2889 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2889))
{return or__3548__auto____2889;
} else
{var or__3548__auto____2890 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2890))
{return or__3548__auto____2890;
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
var _invoke__2954 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____2891 = this$;

if(cljs.core.truth_(and__3546__auto____2891))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2891;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____2892 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2892))
{return or__3548__auto____2892;
} else
{var or__3548__auto____2893 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2893))
{return or__3548__auto____2893;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2955 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____2894 = this$;

if(cljs.core.truth_(and__3546__auto____2894))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2894;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____2895 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2895))
{return or__3548__auto____2895;
} else
{var or__3548__auto____2896 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2896))
{return or__3548__auto____2896;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__2956 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____2897 = this$;

if(cljs.core.truth_(and__3546__auto____2897))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2897;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____2898 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2898))
{return or__3548__auto____2898;
} else
{var or__3548__auto____2899 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2899))
{return or__3548__auto____2899;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__2957 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____2900 = this$;

if(cljs.core.truth_(and__3546__auto____2900))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2900;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____2901 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2901))
{return or__3548__auto____2901;
} else
{var or__3548__auto____2902 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2902))
{return or__3548__auto____2902;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__2958 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____2903 = this$;

if(cljs.core.truth_(and__3546__auto____2903))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2903;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____2904 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2904))
{return or__3548__auto____2904;
} else
{var or__3548__auto____2905 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2905))
{return or__3548__auto____2905;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__2959 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____2906 = this$;

if(cljs.core.truth_(and__3546__auto____2906))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2906;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____2907 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2907))
{return or__3548__auto____2907;
} else
{var or__3548__auto____2908 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2908))
{return or__3548__auto____2908;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__2960 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____2909 = this$;

if(cljs.core.truth_(and__3546__auto____2909))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2909;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____2910 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2910))
{return or__3548__auto____2910;
} else
{var or__3548__auto____2911 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2911))
{return or__3548__auto____2911;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__2961 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____2912 = this$;

if(cljs.core.truth_(and__3546__auto____2912))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2912;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____2913 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2913))
{return or__3548__auto____2913;
} else
{var or__3548__auto____2914 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2914))
{return or__3548__auto____2914;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__2962 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____2915 = this$;

if(cljs.core.truth_(and__3546__auto____2915))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2915;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____2916 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2916))
{return or__3548__auto____2916;
} else
{var or__3548__auto____2917 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2917))
{return or__3548__auto____2917;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__2963 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____2918 = this$;

if(cljs.core.truth_(and__3546__auto____2918))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2918;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____2919 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2919))
{return or__3548__auto____2919;
} else
{var or__3548__auto____2920 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2920))
{return or__3548__auto____2920;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__2964 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____2921 = this$;

if(cljs.core.truth_(and__3546__auto____2921))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2921;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____2922 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2922))
{return or__3548__auto____2922;
} else
{var or__3548__auto____2923 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2923))
{return or__3548__auto____2923;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__2965 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____2924 = this$;

if(cljs.core.truth_(and__3546__auto____2924))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2924;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____2925 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2925))
{return or__3548__auto____2925;
} else
{var or__3548__auto____2926 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2926))
{return or__3548__auto____2926;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__2966 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____2927 = this$;

if(cljs.core.truth_(and__3546__auto____2927))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2927;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____2928 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2928))
{return or__3548__auto____2928;
} else
{var or__3548__auto____2929 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2929))
{return or__3548__auto____2929;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__2967 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____2930 = this$;

if(cljs.core.truth_(and__3546__auto____2930))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2930;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____2931 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2931))
{return or__3548__auto____2931;
} else
{var or__3548__auto____2932 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2932))
{return or__3548__auto____2932;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__2968 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____2933 = this$;

if(cljs.core.truth_(and__3546__auto____2933))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2933;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____2934 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2934))
{return or__3548__auto____2934;
} else
{var or__3548__auto____2935 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2935))
{return or__3548__auto____2935;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__2969 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____2936 = this$;

if(cljs.core.truth_(and__3546__auto____2936))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2936;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____2937 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2937))
{return or__3548__auto____2937;
} else
{var or__3548__auto____2938 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2938))
{return or__3548__auto____2938;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__2970 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____2939 = this$;

if(cljs.core.truth_(and__3546__auto____2939))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2939;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____2940 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2940))
{return or__3548__auto____2940;
} else
{var or__3548__auto____2941 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2941))
{return or__3548__auto____2941;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__2971 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____2942 = this$;

if(cljs.core.truth_(and__3546__auto____2942))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2942;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____2943 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2943))
{return or__3548__auto____2943;
} else
{var or__3548__auto____2944 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2944))
{return or__3548__auto____2944;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__2972 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____2945 = this$;

if(cljs.core.truth_(and__3546__auto____2945))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2945;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____2946 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2946))
{return or__3548__auto____2946;
} else
{var or__3548__auto____2947 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2947))
{return or__3548__auto____2947;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__2973 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____2948 = this$;

if(cljs.core.truth_(and__3546__auto____2948))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2948;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____2949 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2949))
{return or__3548__auto____2949;
} else
{var or__3548__auto____2950 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2950))
{return or__3548__auto____2950;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__2974 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____2951 = this$;

if(cljs.core.truth_(and__3546__auto____2951))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2951;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____2952 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2952))
{return or__3548__auto____2952;
} else
{var or__3548__auto____2953 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2953))
{return or__3548__auto____2953;
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
return _invoke__2954.call(this,this$);
case  2 :
return _invoke__2955.call(this,this$,a);
case  3 :
return _invoke__2956.call(this,this$,a,b);
case  4 :
return _invoke__2957.call(this,this$,a,b,c);
case  5 :
return _invoke__2958.call(this,this$,a,b,c,d);
case  6 :
return _invoke__2959.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__2960.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__2961.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__2962.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__2963.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__2964.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__2965.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__2966.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__2967.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__2968.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__2969.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__2970.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__2971.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__2972.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__2973.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__2974.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2976 = coll;

if(cljs.core.truth_(and__3546__auto____2976))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2976;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2977 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2977))
{return or__3548__auto____2977;
} else
{var or__3548__auto____2978 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2978))
{return or__3548__auto____2978;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2979 = coll;

if(cljs.core.truth_(and__3546__auto____2979))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2979;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2980 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2980))
{return or__3548__auto____2980;
} else
{var or__3548__auto____2981 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2981))
{return or__3548__auto____2981;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2982 = coll;

if(cljs.core.truth_(and__3546__auto____2982))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2982;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2983 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2983))
{return or__3548__auto____2983;
} else
{var or__3548__auto____2984 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2984))
{return or__3548__auto____2984;
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
var _nth__2991 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2985 = coll;

if(cljs.core.truth_(and__3546__auto____2985))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2985;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2986 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2986))
{return or__3548__auto____2986;
} else
{var or__3548__auto____2987 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2987))
{return or__3548__auto____2987;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2992 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2988 = coll;

if(cljs.core.truth_(and__3546__auto____2988))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2988;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2989 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2989))
{return or__3548__auto____2989;
} else
{var or__3548__auto____2990 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2990))
{return or__3548__auto____2990;
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
return _nth__2991.call(this,coll,n);
case  3 :
return _nth__2992.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2994 = coll;

if(cljs.core.truth_(and__3546__auto____2994))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2994;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2995 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2995))
{return or__3548__auto____2995;
} else
{var or__3548__auto____2996 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2996))
{return or__3548__auto____2996;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2997 = coll;

if(cljs.core.truth_(and__3546__auto____2997))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2997;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2998 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2998))
{return or__3548__auto____2998;
} else
{var or__3548__auto____2999 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2999))
{return or__3548__auto____2999;
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
var _lookup__3006 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3000 = o;

if(cljs.core.truth_(and__3546__auto____3000))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3000;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3001 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3001))
{return or__3548__auto____3001;
} else
{var or__3548__auto____3002 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3002))
{return or__3548__auto____3002;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3007 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3003 = o;

if(cljs.core.truth_(and__3546__auto____3003))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3003;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3004 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3004))
{return or__3548__auto____3004;
} else
{var or__3548__auto____3005 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3005))
{return or__3548__auto____3005;
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
return _lookup__3006.call(this,o,k);
case  3 :
return _lookup__3007.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3009 = coll;

if(cljs.core.truth_(and__3546__auto____3009))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3009;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3010 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3010))
{return or__3548__auto____3010;
} else
{var or__3548__auto____3011 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3011))
{return or__3548__auto____3011;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3012 = coll;

if(cljs.core.truth_(and__3546__auto____3012))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3012;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3013 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3013))
{return or__3548__auto____3013;
} else
{var or__3548__auto____3014 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3014))
{return or__3548__auto____3014;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3015 = coll;

if(cljs.core.truth_(and__3546__auto____3015))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3015;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3016 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3016))
{return or__3548__auto____3016;
} else
{var or__3548__auto____3017 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3017))
{return or__3548__auto____3017;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3018 = coll;

if(cljs.core.truth_(and__3546__auto____3018))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3018;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3019 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3019))
{return or__3548__auto____3019;
} else
{var or__3548__auto____3020 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3020))
{return or__3548__auto____3020;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3021 = coll;

if(cljs.core.truth_(and__3546__auto____3021))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3021;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3022 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3022))
{return or__3548__auto____3022;
} else
{var or__3548__auto____3023 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3023))
{return or__3548__auto____3023;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3024 = coll;

if(cljs.core.truth_(and__3546__auto____3024))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3024;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3025 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3025))
{return or__3548__auto____3025;
} else
{var or__3548__auto____3026 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3026))
{return or__3548__auto____3026;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3027 = coll;

if(cljs.core.truth_(and__3546__auto____3027))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3027;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3028 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3028))
{return or__3548__auto____3028;
} else
{var or__3548__auto____3029 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3029))
{return or__3548__auto____3029;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3030 = o;

if(cljs.core.truth_(and__3546__auto____3030))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3030;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3031 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3031))
{return or__3548__auto____3031;
} else
{var or__3548__auto____3032 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3032))
{return or__3548__auto____3032;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3033 = o;

if(cljs.core.truth_(and__3546__auto____3033))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3033;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3034 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3034))
{return or__3548__auto____3034;
} else
{var or__3548__auto____3035 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3035))
{return or__3548__auto____3035;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3036 = o;

if(cljs.core.truth_(and__3546__auto____3036))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3036;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3037 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3037))
{return or__3548__auto____3037;
} else
{var or__3548__auto____3038 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3038))
{return or__3548__auto____3038;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3039 = o;

if(cljs.core.truth_(and__3546__auto____3039))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3039;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3040 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3040))
{return or__3548__auto____3040;
} else
{var or__3548__auto____3041 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3041))
{return or__3548__auto____3041;
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
var _reduce__3048 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3042 = coll;

if(cljs.core.truth_(and__3546__auto____3042))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3042;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3043 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3043))
{return or__3548__auto____3043;
} else
{var or__3548__auto____3044 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3044))
{return or__3548__auto____3044;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3049 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3045 = coll;

if(cljs.core.truth_(and__3546__auto____3045))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3045;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3046 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3046))
{return or__3548__auto____3046;
} else
{var or__3548__auto____3047 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3047))
{return or__3548__auto____3047;
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
return _reduce__3048.call(this,coll,f);
case  3 :
return _reduce__3049.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3051 = o;

if(cljs.core.truth_(and__3546__auto____3051))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3051;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3052 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3052))
{return or__3548__auto____3052;
} else
{var or__3548__auto____3053 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3053))
{return or__3548__auto____3053;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3054 = o;

if(cljs.core.truth_(and__3546__auto____3054))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3054;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3055 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3055))
{return or__3548__auto____3055;
} else
{var or__3548__auto____3056 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3056))
{return or__3548__auto____3056;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3057 = o;

if(cljs.core.truth_(and__3546__auto____3057))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3057;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3058 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3058))
{return or__3548__auto____3058;
} else
{var or__3548__auto____3059 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3059))
{return or__3548__auto____3059;
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
if(cljs.core.truth_((function (){var and__3546__auto____3060 = o;

if(cljs.core.truth_(and__3546__auto____3060))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3060;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3061 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3061))
{return or__3548__auto____3061;
} else
{var or__3548__auto____3062 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3062))
{return or__3548__auto____3062;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3063 = d;

if(cljs.core.truth_(and__3546__auto____3063))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3063;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3064 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3064))
{return or__3548__auto____3064;
} else
{var or__3548__auto____3065 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3065))
{return or__3548__auto____3065;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3066 = this$;

if(cljs.core.truth_(and__3546__auto____3066))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3066;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3067 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3067))
{return or__3548__auto____3067;
} else
{var or__3548__auto____3068 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3068))
{return or__3548__auto____3068;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3069 = this$;

if(cljs.core.truth_(and__3546__auto____3069))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3069;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3070 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3070))
{return or__3548__auto____3070;
} else
{var or__3548__auto____3071 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3071))
{return or__3548__auto____3071;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3072 = this$;

if(cljs.core.truth_(and__3546__auto____3072))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3072;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3073 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3073))
{return or__3548__auto____3073;
} else
{var or__3548__auto____3074 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3074))
{return or__3548__auto____3074;
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
var G__3075 = null;
var G__3075__3076 = (function (o,k){
return null;
});
var G__3075__3077 = (function (o,k,not_found){
return not_found;
});
G__3075 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3075__3076.call(this,o,k);
case  3 :
return G__3075__3077.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3075;
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
var G__3079 = null;
var G__3079__3080 = (function (_,f){
return f.call(null);
});
var G__3079__3081 = (function (_,f,start){
return start;
});
G__3079 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3079__3080.call(this,_,f);
case  3 :
return G__3079__3081.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3079;
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
var G__3083 = null;
var G__3083__3084 = (function (_,n){
return null;
});
var G__3083__3085 = (function (_,n,not_found){
return not_found;
});
G__3083 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3083__3084.call(this,_,n);
case  3 :
return G__3083__3085.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3083;
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
var ci_reduce__3093 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3087 = cljs.core._nth.call(null,cicoll,0);
var n__3088 = 1;

while(true){
if(cljs.core.truth_((n__3088 < cljs.core._count.call(null,cicoll))))
{{
var G__3097 = f.call(null,val__3087,cljs.core._nth.call(null,cicoll,n__3088));
var G__3098 = (n__3088 + 1);
val__3087 = G__3097;
n__3088 = G__3098;
continue;
}
} else
{return val__3087;
}
break;
}
}
});
var ci_reduce__3094 = (function (cicoll,f,val){
var val__3089 = val;
var n__3090 = 0;

while(true){
if(cljs.core.truth_((n__3090 < cljs.core._count.call(null,cicoll))))
{{
var G__3099 = f.call(null,val__3089,cljs.core._nth.call(null,cicoll,n__3090));
var G__3100 = (n__3090 + 1);
val__3089 = G__3099;
n__3090 = G__3100;
continue;
}
} else
{return val__3089;
}
break;
}
});
var ci_reduce__3095 = (function (cicoll,f,val,idx){
var val__3091 = val;
var n__3092 = idx;

while(true){
if(cljs.core.truth_((n__3092 < cljs.core._count.call(null,cicoll))))
{{
var G__3101 = f.call(null,val__3091,cljs.core._nth.call(null,cicoll,n__3092));
var G__3102 = (n__3092 + 1);
val__3091 = G__3101;
n__3092 = G__3102;
continue;
}
} else
{return val__3091;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3093.call(this,cicoll,f);
case  3 :
return ci_reduce__3094.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3095.call(this,cicoll,f,val,idx);
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
var this__3103 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3116 = null;
var G__3116__3117 = (function (_,f){
var this__3104 = this;
return cljs.core.ci_reduce.call(null,this__3104.a,f,(this__3104.a[this__3104.i]),(this__3104.i + 1));
});
var G__3116__3118 = (function (_,f,start){
var this__3105 = this;
return cljs.core.ci_reduce.call(null,this__3105.a,f,start,this__3105.i);
});
G__3116 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3116__3117.call(this,_,f);
case  3 :
return G__3116__3118.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3116;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3106 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3107 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3120 = null;
var G__3120__3121 = (function (coll,n){
var this__3108 = this;
var i__3109 = (n + this__3108.i);

if(cljs.core.truth_((i__3109 < this__3108.a.length)))
{return (this__3108.a[i__3109]);
} else
{return null;
}
});
var G__3120__3122 = (function (coll,n,not_found){
var this__3110 = this;
var i__3111 = (n + this__3110.i);

if(cljs.core.truth_((i__3111 < this__3110.a.length)))
{return (this__3110.a[i__3111]);
} else
{return not_found;
}
});
G__3120 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3120__3121.call(this,coll,n);
case  3 :
return G__3120__3122.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3120;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3112 = this;
return (this__3112.a.length - this__3112.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3113 = this;
return (this__3113.a[this__3113.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3114 = this;
if(cljs.core.truth_(((this__3114.i + 1) < this__3114.a.length)))
{return (new cljs.core.IndexedSeq(this__3114.a,(this__3114.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3115 = this;
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
var G__3124 = null;
var G__3124__3125 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3124__3126 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3124 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3124__3125.call(this,array,f);
case  3 :
return G__3124__3126.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3124;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3128 = null;
var G__3128__3129 = (function (array,k){
return (array[k]);
});
var G__3128__3130 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3128 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3128__3129.call(this,array,k);
case  3 :
return G__3128__3130.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3128;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3132 = null;
var G__3132__3133 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3132__3134 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3132 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3132__3133.call(this,array,n);
case  3 :
return G__3132__3134.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3132;
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
var temp__3698__auto____3136 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3136))
{var s__3137 = temp__3698__auto____3136;

return cljs.core._first.call(null,s__3137);
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
var G__3138 = cljs.core.next.call(null,s);
s = G__3138;
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
var s__3139 = cljs.core.seq.call(null,x);
var n__3140 = 0;

while(true){
if(cljs.core.truth_(s__3139))
{{
var G__3141 = cljs.core.next.call(null,s__3139);
var G__3142 = (n__3140 + 1);
s__3139 = G__3141;
n__3140 = G__3142;
continue;
}
} else
{return n__3140;
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
var conj__3143 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3144 = (function() { 
var G__3146__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3147 = conj.call(null,coll,x);
var G__3148 = cljs.core.first.call(null,xs);
var G__3149 = cljs.core.next.call(null,xs);
coll = G__3147;
x = G__3148;
xs = G__3149;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3146 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3146__delegate.call(this, coll, x, xs);
};
G__3146.cljs$lang$maxFixedArity = 2;
G__3146.cljs$lang$applyTo = (function (arglist__3150){
var coll = cljs.core.first(arglist__3150);
var x = cljs.core.first(cljs.core.next(arglist__3150));
var xs = cljs.core.rest(cljs.core.next(arglist__3150));
return G__3146__delegate.call(this, coll, x, xs);
});
return G__3146;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3143.call(this,coll,x);
default:
return conj__3144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3144.cljs$lang$applyTo;
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
var nth__3151 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3152 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3151.call(this,coll,n);
case  3 :
return nth__3152.call(this,coll,n,not_found);
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
var get__3154 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3155 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3154.call(this,o,k);
case  3 :
return get__3155.call(this,o,k,not_found);
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
var assoc__3158 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3159 = (function() { 
var G__3161__delegate = function (coll,k,v,kvs){
while(true){
var ret__3157 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3162 = ret__3157;
var G__3163 = cljs.core.first.call(null,kvs);
var G__3164 = cljs.core.second.call(null,kvs);
var G__3165 = cljs.core.nnext.call(null,kvs);
coll = G__3162;
k = G__3163;
v = G__3164;
kvs = G__3165;
continue;
}
} else
{return ret__3157;
}
break;
}
};
var G__3161 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3161__delegate.call(this, coll, k, v, kvs);
};
G__3161.cljs$lang$maxFixedArity = 3;
G__3161.cljs$lang$applyTo = (function (arglist__3166){
var coll = cljs.core.first(arglist__3166);
var k = cljs.core.first(cljs.core.next(arglist__3166));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3166)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3166)));
return G__3161__delegate.call(this, coll, k, v, kvs);
});
return G__3161;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3158.call(this,coll,k,v);
default:
return assoc__3159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3159.cljs$lang$applyTo;
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
var dissoc__3168 = (function (coll){
return coll;
});
var dissoc__3169 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3170 = (function() { 
var G__3172__delegate = function (coll,k,ks){
while(true){
var ret__3167 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3173 = ret__3167;
var G__3174 = cljs.core.first.call(null,ks);
var G__3175 = cljs.core.next.call(null,ks);
coll = G__3173;
k = G__3174;
ks = G__3175;
continue;
}
} else
{return ret__3167;
}
break;
}
};
var G__3172 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3172__delegate.call(this, coll, k, ks);
};
G__3172.cljs$lang$maxFixedArity = 2;
G__3172.cljs$lang$applyTo = (function (arglist__3176){
var coll = cljs.core.first(arglist__3176);
var k = cljs.core.first(cljs.core.next(arglist__3176));
var ks = cljs.core.rest(cljs.core.next(arglist__3176));
return G__3172__delegate.call(this, coll, k, ks);
});
return G__3172;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3168.call(this,coll);
case  2 :
return dissoc__3169.call(this,coll,k);
default:
return dissoc__3170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3170.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__351__auto____3177 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3178 = x__351__auto____3177;

if(cljs.core.truth_(and__3546__auto____3178))
{var and__3546__auto____3179 = x__351__auto____3177.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3179))
{return cljs.core.not.call(null,x__351__auto____3177.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3179;
}
} else
{return and__3546__auto____3178;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__351__auto____3177);
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
var disj__3181 = (function (coll){
return coll;
});
var disj__3182 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3183 = (function() { 
var G__3185__delegate = function (coll,k,ks){
while(true){
var ret__3180 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3186 = ret__3180;
var G__3187 = cljs.core.first.call(null,ks);
var G__3188 = cljs.core.next.call(null,ks);
coll = G__3186;
k = G__3187;
ks = G__3188;
continue;
}
} else
{return ret__3180;
}
break;
}
};
var G__3185 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3185__delegate.call(this, coll, k, ks);
};
G__3185.cljs$lang$maxFixedArity = 2;
G__3185.cljs$lang$applyTo = (function (arglist__3189){
var coll = cljs.core.first(arglist__3189);
var k = cljs.core.first(cljs.core.next(arglist__3189));
var ks = cljs.core.rest(cljs.core.next(arglist__3189));
return G__3185__delegate.call(this, coll, k, ks);
});
return G__3185;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3181.call(this,coll);
case  2 :
return disj__3182.call(this,coll,k);
default:
return disj__3183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3183.cljs$lang$applyTo;
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
{var x__351__auto____3190 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3191 = x__351__auto____3190;

if(cljs.core.truth_(and__3546__auto____3191))
{var and__3546__auto____3192 = x__351__auto____3190.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3192))
{return cljs.core.not.call(null,x__351__auto____3190.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3192;
}
} else
{return and__3546__auto____3191;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__351__auto____3190);
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
{var x__351__auto____3193 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3194 = x__351__auto____3193;

if(cljs.core.truth_(and__3546__auto____3194))
{var and__3546__auto____3195 = x__351__auto____3193.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3195))
{return cljs.core.not.call(null,x__351__auto____3193.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3195;
}
} else
{return and__3546__auto____3194;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__351__auto____3193);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__351__auto____3196 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3197 = x__351__auto____3196;

if(cljs.core.truth_(and__3546__auto____3197))
{var and__3546__auto____3198 = x__351__auto____3196.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3198))
{return cljs.core.not.call(null,x__351__auto____3196.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3198;
}
} else
{return and__3546__auto____3197;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__351__auto____3196);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__351__auto____3199 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3200 = x__351__auto____3199;

if(cljs.core.truth_(and__3546__auto____3200))
{var and__3546__auto____3201 = x__351__auto____3199.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3201))
{return cljs.core.not.call(null,x__351__auto____3199.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3201;
}
} else
{return and__3546__auto____3200;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__351__auto____3199);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__351__auto____3202 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3203 = x__351__auto____3202;

if(cljs.core.truth_(and__3546__auto____3203))
{var and__3546__auto____3204 = x__351__auto____3202.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3204))
{return cljs.core.not.call(null,x__351__auto____3202.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3204;
}
} else
{return and__3546__auto____3203;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__351__auto____3202);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__351__auto____3205 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3206 = x__351__auto____3205;

if(cljs.core.truth_(and__3546__auto____3206))
{var and__3546__auto____3207 = x__351__auto____3205.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3207))
{return cljs.core.not.call(null,x__351__auto____3205.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3207;
}
} else
{return and__3546__auto____3206;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__351__auto____3205);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__351__auto____3208 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3209 = x__351__auto____3208;

if(cljs.core.truth_(and__3546__auto____3209))
{var and__3546__auto____3210 = x__351__auto____3208.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3210))
{return cljs.core.not.call(null,x__351__auto____3208.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3210;
}
} else
{return and__3546__auto____3209;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__351__auto____3208);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3211 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3211.push(key);
}));
return keys__3211;
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
{var x__351__auto____3212 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3213 = x__351__auto____3212;

if(cljs.core.truth_(and__3546__auto____3213))
{var and__3546__auto____3214 = x__351__auto____3212.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3214))
{return cljs.core.not.call(null,x__351__auto____3212.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3214;
}
} else
{return and__3546__auto____3213;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__351__auto____3212);
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
var and__3546__auto____3215 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3215))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3216 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3215;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3217 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3217))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3217;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3218 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3218))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3218;
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
var and__3546__auto____3219 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3219))
{return (n == n.toFixed());
} else
{return and__3546__auto____3219;
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
if(cljs.core.truth_((function (){var and__3546__auto____3220 = coll;

if(cljs.core.truth_(and__3546__auto____3220))
{var and__3546__auto____3221 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3221))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3221;
}
} else
{return and__3546__auto____3220;
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
var distinct_QMARK___3226 = (function (x){
return true;
});
var distinct_QMARK___3227 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3228 = (function() { 
var G__3230__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3222 = cljs.core.set([y,x]);
var xs__3223 = more;

while(true){
var x__3224 = cljs.core.first.call(null,xs__3223);
var etc__3225 = cljs.core.next.call(null,xs__3223);

if(cljs.core.truth_(xs__3223))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3222,x__3224)))
{return false;
} else
{{
var G__3231 = cljs.core.conj.call(null,s__3222,x__3224);
var G__3232 = etc__3225;
s__3222 = G__3231;
xs__3223 = G__3232;
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
var G__3230 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3230__delegate.call(this, x, y, more);
};
G__3230.cljs$lang$maxFixedArity = 2;
G__3230.cljs$lang$applyTo = (function (arglist__3233){
var x = cljs.core.first(arglist__3233);
var y = cljs.core.first(cljs.core.next(arglist__3233));
var more = cljs.core.rest(cljs.core.next(arglist__3233));
return G__3230__delegate.call(this, x, y, more);
});
return G__3230;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3226.call(this,x);
case  2 :
return distinct_QMARK___3227.call(this,x,y);
default:
return distinct_QMARK___3228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3228.cljs$lang$applyTo;
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
var r__3234 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3234)))
{return r__3234;
} else
{if(cljs.core.truth_(r__3234))
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
var sort__3236 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3237 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3235 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3235,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3235);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3236.call(this,comp);
case  2 :
return sort__3237.call(this,comp,coll);
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
var sort_by__3239 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3240 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3239.call(this,keyfn,comp);
case  3 :
return sort_by__3240.call(this,keyfn,comp,coll);
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
var reduce__3242 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3243 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3242.call(this,f,val);
case  3 :
return reduce__3243.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3249 = (function (f,coll){
var temp__3695__auto____3245 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3245))
{var s__3246 = temp__3695__auto____3245;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3246),cljs.core.next.call(null,s__3246));
} else
{return f.call(null);
}
});
var seq_reduce__3250 = (function (f,val,coll){
var val__3247 = val;
var coll__3248 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3248))
{{
var G__3252 = f.call(null,val__3247,cljs.core.first.call(null,coll__3248));
var G__3253 = cljs.core.next.call(null,coll__3248);
val__3247 = G__3252;
coll__3248 = G__3253;
continue;
}
} else
{return val__3247;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3249.call(this,f,val);
case  3 :
return seq_reduce__3250.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3254 = null;
var G__3254__3255 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3254__3256 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3254 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3254__3255.call(this,coll,f);
case  3 :
return G__3254__3256.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3254;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3258 = (function (){
return 0;
});
var _PLUS___3259 = (function (x){
return x;
});
var _PLUS___3260 = (function (x,y){
return (x + y);
});
var _PLUS___3261 = (function() { 
var G__3263__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3263 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3263__delegate.call(this, x, y, more);
};
G__3263.cljs$lang$maxFixedArity = 2;
G__3263.cljs$lang$applyTo = (function (arglist__3264){
var x = cljs.core.first(arglist__3264);
var y = cljs.core.first(cljs.core.next(arglist__3264));
var more = cljs.core.rest(cljs.core.next(arglist__3264));
return G__3263__delegate.call(this, x, y, more);
});
return G__3263;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3258.call(this);
case  1 :
return _PLUS___3259.call(this,x);
case  2 :
return _PLUS___3260.call(this,x,y);
default:
return _PLUS___3261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3261.cljs$lang$applyTo;
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
var ___3265 = (function (x){
return (- x);
});
var ___3266 = (function (x,y){
return (x - y);
});
var ___3267 = (function() { 
var G__3269__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3269 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3269__delegate.call(this, x, y, more);
};
G__3269.cljs$lang$maxFixedArity = 2;
G__3269.cljs$lang$applyTo = (function (arglist__3270){
var x = cljs.core.first(arglist__3270);
var y = cljs.core.first(cljs.core.next(arglist__3270));
var more = cljs.core.rest(cljs.core.next(arglist__3270));
return G__3269__delegate.call(this, x, y, more);
});
return G__3269;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3265.call(this,x);
case  2 :
return ___3266.call(this,x,y);
default:
return ___3267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3267.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3271 = (function (){
return 1;
});
var _STAR___3272 = (function (x){
return x;
});
var _STAR___3273 = (function (x,y){
return (x * y);
});
var _STAR___3274 = (function() { 
var G__3276__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3276 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3276__delegate.call(this, x, y, more);
};
G__3276.cljs$lang$maxFixedArity = 2;
G__3276.cljs$lang$applyTo = (function (arglist__3277){
var x = cljs.core.first(arglist__3277);
var y = cljs.core.first(cljs.core.next(arglist__3277));
var more = cljs.core.rest(cljs.core.next(arglist__3277));
return G__3276__delegate.call(this, x, y, more);
});
return G__3276;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3271.call(this);
case  1 :
return _STAR___3272.call(this,x);
case  2 :
return _STAR___3273.call(this,x,y);
default:
return _STAR___3274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3274.cljs$lang$applyTo;
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
var _SLASH___3278 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3279 = (function (x,y){
return (x / y);
});
var _SLASH___3280 = (function() { 
var G__3282__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3282 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3282__delegate.call(this, x, y, more);
};
G__3282.cljs$lang$maxFixedArity = 2;
G__3282.cljs$lang$applyTo = (function (arglist__3283){
var x = cljs.core.first(arglist__3283);
var y = cljs.core.first(cljs.core.next(arglist__3283));
var more = cljs.core.rest(cljs.core.next(arglist__3283));
return G__3282__delegate.call(this, x, y, more);
});
return G__3282;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3278.call(this,x);
case  2 :
return _SLASH___3279.call(this,x,y);
default:
return _SLASH___3280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3280.cljs$lang$applyTo;
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
var _LT___3284 = (function (x){
return true;
});
var _LT___3285 = (function (x,y){
return (x < y);
});
var _LT___3286 = (function() { 
var G__3288__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3289 = y;
var G__3290 = cljs.core.first.call(null,more);
var G__3291 = cljs.core.next.call(null,more);
x = G__3289;
y = G__3290;
more = G__3291;
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
var G__3288 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3288__delegate.call(this, x, y, more);
};
G__3288.cljs$lang$maxFixedArity = 2;
G__3288.cljs$lang$applyTo = (function (arglist__3292){
var x = cljs.core.first(arglist__3292);
var y = cljs.core.first(cljs.core.next(arglist__3292));
var more = cljs.core.rest(cljs.core.next(arglist__3292));
return G__3288__delegate.call(this, x, y, more);
});
return G__3288;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3284.call(this,x);
case  2 :
return _LT___3285.call(this,x,y);
default:
return _LT___3286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3286.cljs$lang$applyTo;
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
var _LT__EQ___3293 = (function (x){
return true;
});
var _LT__EQ___3294 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3295 = (function() { 
var G__3297__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3298 = y;
var G__3299 = cljs.core.first.call(null,more);
var G__3300 = cljs.core.next.call(null,more);
x = G__3298;
y = G__3299;
more = G__3300;
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
var G__3297 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3297__delegate.call(this, x, y, more);
};
G__3297.cljs$lang$maxFixedArity = 2;
G__3297.cljs$lang$applyTo = (function (arglist__3301){
var x = cljs.core.first(arglist__3301);
var y = cljs.core.first(cljs.core.next(arglist__3301));
var more = cljs.core.rest(cljs.core.next(arglist__3301));
return G__3297__delegate.call(this, x, y, more);
});
return G__3297;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3293.call(this,x);
case  2 :
return _LT__EQ___3294.call(this,x,y);
default:
return _LT__EQ___3295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3295.cljs$lang$applyTo;
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
var _GT___3302 = (function (x){
return true;
});
var _GT___3303 = (function (x,y){
return (x > y);
});
var _GT___3304 = (function() { 
var G__3306__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3307 = y;
var G__3308 = cljs.core.first.call(null,more);
var G__3309 = cljs.core.next.call(null,more);
x = G__3307;
y = G__3308;
more = G__3309;
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
var G__3306 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3306__delegate.call(this, x, y, more);
};
G__3306.cljs$lang$maxFixedArity = 2;
G__3306.cljs$lang$applyTo = (function (arglist__3310){
var x = cljs.core.first(arglist__3310);
var y = cljs.core.first(cljs.core.next(arglist__3310));
var more = cljs.core.rest(cljs.core.next(arglist__3310));
return G__3306__delegate.call(this, x, y, more);
});
return G__3306;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3302.call(this,x);
case  2 :
return _GT___3303.call(this,x,y);
default:
return _GT___3304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3304.cljs$lang$applyTo;
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
var _GT__EQ___3311 = (function (x){
return true;
});
var _GT__EQ___3312 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3313 = (function() { 
var G__3315__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3316 = y;
var G__3317 = cljs.core.first.call(null,more);
var G__3318 = cljs.core.next.call(null,more);
x = G__3316;
y = G__3317;
more = G__3318;
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
var G__3315 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3315__delegate.call(this, x, y, more);
};
G__3315.cljs$lang$maxFixedArity = 2;
G__3315.cljs$lang$applyTo = (function (arglist__3319){
var x = cljs.core.first(arglist__3319);
var y = cljs.core.first(cljs.core.next(arglist__3319));
var more = cljs.core.rest(cljs.core.next(arglist__3319));
return G__3315__delegate.call(this, x, y, more);
});
return G__3315;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3311.call(this,x);
case  2 :
return _GT__EQ___3312.call(this,x,y);
default:
return _GT__EQ___3313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3313.cljs$lang$applyTo;
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
var max__3320 = (function (x){
return x;
});
var max__3321 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3322 = (function() { 
var G__3324__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3324 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3324__delegate.call(this, x, y, more);
};
G__3324.cljs$lang$maxFixedArity = 2;
G__3324.cljs$lang$applyTo = (function (arglist__3325){
var x = cljs.core.first(arglist__3325);
var y = cljs.core.first(cljs.core.next(arglist__3325));
var more = cljs.core.rest(cljs.core.next(arglist__3325));
return G__3324__delegate.call(this, x, y, more);
});
return G__3324;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3320.call(this,x);
case  2 :
return max__3321.call(this,x,y);
default:
return max__3322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3322.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3326 = (function (x){
return x;
});
var min__3327 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3328 = (function() { 
var G__3330__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3330 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3330__delegate.call(this, x, y, more);
};
G__3330.cljs$lang$maxFixedArity = 2;
G__3330.cljs$lang$applyTo = (function (arglist__3331){
var x = cljs.core.first(arglist__3331);
var y = cljs.core.first(cljs.core.next(arglist__3331));
var more = cljs.core.rest(cljs.core.next(arglist__3331));
return G__3330__delegate.call(this, x, y, more);
});
return G__3330;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3326.call(this,x);
case  2 :
return min__3327.call(this,x,y);
default:
return min__3328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3328.cljs$lang$applyTo;
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
var rem__3332 = (n % d);

return cljs.core.fix.call(null,((n - rem__3332) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3333 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3333));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3334 = (function (){
return Math.random.call(null);
});
var rand__3335 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3334.call(this);
case  1 :
return rand__3335.call(this,n);
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
var _EQ__EQ___3337 = (function (x){
return true;
});
var _EQ__EQ___3338 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3339 = (function() { 
var G__3341__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3342 = y;
var G__3343 = cljs.core.first.call(null,more);
var G__3344 = cljs.core.next.call(null,more);
x = G__3342;
y = G__3343;
more = G__3344;
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
var G__3341 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3341__delegate.call(this, x, y, more);
};
G__3341.cljs$lang$maxFixedArity = 2;
G__3341.cljs$lang$applyTo = (function (arglist__3345){
var x = cljs.core.first(arglist__3345);
var y = cljs.core.first(cljs.core.next(arglist__3345));
var more = cljs.core.rest(cljs.core.next(arglist__3345));
return G__3341__delegate.call(this, x, y, more);
});
return G__3341;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3337.call(this,x);
case  2 :
return _EQ__EQ___3338.call(this,x,y);
default:
return _EQ__EQ___3339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3339.cljs$lang$applyTo;
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
var n__3346 = n;
var xs__3347 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3348 = xs__3347;

if(cljs.core.truth_(and__3546__auto____3348))
{return (n__3346 > 0);
} else
{return and__3546__auto____3348;
}
})()))
{{
var G__3349 = (n__3346 - 1);
var G__3350 = cljs.core.next.call(null,xs__3347);
n__3346 = G__3349;
xs__3347 = G__3350;
continue;
}
} else
{return xs__3347;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3355 = null;
var G__3355__3356 = (function (coll,n){
var temp__3695__auto____3351 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3351))
{var xs__3352 = temp__3695__auto____3351;

return cljs.core.first.call(null,xs__3352);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3355__3357 = (function (coll,n,not_found){
var temp__3695__auto____3353 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3353))
{var xs__3354 = temp__3695__auto____3353;

return cljs.core.first.call(null,xs__3354);
} else
{return not_found;
}
});
G__3355 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3355__3356.call(this,coll,n);
case  3 :
return G__3355__3357.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3355;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3359 = (function (){
return "";
});
var str_STAR___3360 = (function (x){
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
var str_STAR___3361 = (function() { 
var G__3363__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3364 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3365 = cljs.core.next.call(null,more);
sb = G__3364;
more = G__3365;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3363 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3363__delegate.call(this, x, ys);
};
G__3363.cljs$lang$maxFixedArity = 1;
G__3363.cljs$lang$applyTo = (function (arglist__3366){
var x = cljs.core.first(arglist__3366);
var ys = cljs.core.rest(arglist__3366);
return G__3363__delegate.call(this, x, ys);
});
return G__3363;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3359.call(this);
case  1 :
return str_STAR___3360.call(this,x);
default:
return str_STAR___3361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3361.cljs$lang$applyTo;
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
var str__3367 = (function (){
return "";
});
var str__3368 = (function (x){
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
var str__3369 = (function() { 
var G__3371__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3372 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3373 = cljs.core.next.call(null,more);
sb = G__3372;
more = G__3373;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3371 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3371__delegate.call(this, x, ys);
};
G__3371.cljs$lang$maxFixedArity = 1;
G__3371.cljs$lang$applyTo = (function (arglist__3374){
var x = cljs.core.first(arglist__3374);
var ys = cljs.core.rest(arglist__3374);
return G__3371__delegate.call(this, x, ys);
});
return G__3371;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3367.call(this);
case  1 :
return str__3368.call(this,x);
default:
return str__3369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3369.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3375 = (function (s,start){
return s.substring(start);
});
var subs__3376 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3375.call(this,s,start);
case  3 :
return subs__3376.call(this,s,start,end);
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
var symbol__3378 = (function (name){
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
var symbol__3379 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3378.call(this,ns);
case  2 :
return symbol__3379.call(this,ns,name);
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
var keyword__3381 = (function (name){
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
var keyword__3382 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3381.call(this,ns);
case  2 :
return keyword__3382.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3384 = cljs.core.seq.call(null,x);
var ys__3385 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3384 === null)))
{return (ys__3385 === null);
} else
{if(cljs.core.truth_((ys__3385 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3384),cljs.core.first.call(null,ys__3385))))
{{
var G__3386 = cljs.core.next.call(null,xs__3384);
var G__3387 = cljs.core.next.call(null,ys__3385);
xs__3384 = G__3386;
ys__3385 = G__3387;
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
return cljs.core.reduce.call(null,(function (p1__3388_SHARP_,p2__3389_SHARP_){
return cljs.core.hash_combine.call(null,p1__3388_SHARP_,cljs.core.hash.call(null,p2__3389_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3390__3391 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3390__3391))
{var G__3393__3395 = cljs.core.first.call(null,G__3390__3391);
var vec__3394__3396 = G__3393__3395;
var key_name__3397 = cljs.core.nth.call(null,vec__3394__3396,0,null);
var f__3398 = cljs.core.nth.call(null,vec__3394__3396,1,null);
var G__3390__3399 = G__3390__3391;

var G__3393__3400 = G__3393__3395;
var G__3390__3401 = G__3390__3399;

while(true){
var vec__3402__3403 = G__3393__3400;
var key_name__3404 = cljs.core.nth.call(null,vec__3402__3403,0,null);
var f__3405 = cljs.core.nth.call(null,vec__3402__3403,1,null);
var G__3390__3406 = G__3390__3401;

var str_name__3407 = cljs.core.name.call(null,key_name__3404);

obj[str_name__3407] = f__3405;
var temp__3698__auto____3408 = cljs.core.next.call(null,G__3390__3406);

if(cljs.core.truth_(temp__3698__auto____3408))
{var G__3390__3409 = temp__3698__auto____3408;

{
var G__3410 = cljs.core.first.call(null,G__3390__3409);
var G__3411 = G__3390__3409;
G__3393__3400 = G__3410;
G__3390__3401 = G__3411;
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
var this__3412 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3413 = this;
return (new cljs.core.List(this__3413.meta,o,coll,(this__3413.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3414 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3415 = this;
return this__3415.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3416 = this;
return this__3416.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3417 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3418 = this;
return this__3418.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3419 = this;
return this__3419.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3420 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3421 = this;
return (new cljs.core.List(meta,this__3421.first,this__3421.rest,this__3421.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3422 = this;
return this__3422.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3423 = this;
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
var this__3424 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3425 = this;
return (new cljs.core.List(this__3425.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3426 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3427 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3428 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3429 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3430 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3431 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3432 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3433 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3434 = this;
return this__3434.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3435 = this;
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
list.cljs$lang$applyTo = (function (arglist__3436){
var items = cljs.core.seq( arglist__3436 );;
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
var this__3437 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3438 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3439 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3440 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3440.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3441 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3442 = this;
return this__3442.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3443 = this;
if(cljs.core.truth_((this__3443.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3443.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3444 = this;
return this__3444.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3445 = this;
return (new cljs.core.Cons(meta,this__3445.first,this__3445.rest));
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
var G__3446 = null;
var G__3446__3447 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3446__3448 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3446 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3446__3447.call(this,string,f);
case  3 :
return G__3446__3448.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3446;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3450 = null;
var G__3450__3451 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3450__3452 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3450 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3450__3451.call(this,string,k);
case  3 :
return G__3450__3452.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3450;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3454 = null;
var G__3454__3455 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3454__3456 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3454 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3454__3455.call(this,string,n);
case  3 :
return G__3454__3456.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3454;
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
var G__3464 = null;
var G__3464__3465 = (function (tsym3458,coll){
var tsym3458__3460 = this;

var this$__3461 = tsym3458__3460;

return cljs.core.get.call(null,coll,this$__3461.toString());
});
var G__3464__3466 = (function (tsym3459,coll,not_found){
var tsym3459__3462 = this;

var this$__3463 = tsym3459__3462;

return cljs.core.get.call(null,coll,this$__3463.toString(),not_found);
});
G__3464 = function(tsym3459,coll,not_found){
switch(arguments.length){
case  2 :
return G__3464__3465.call(this,tsym3459,coll);
case  3 :
return G__3464__3466.call(this,tsym3459,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3464;
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
var x__3468 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3468;
} else
{lazy_seq.x = x__3468.call(null);
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
var this__3469 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3470 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3471 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3472 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3472.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3473 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3474 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3475 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3476 = this;
return this__3476.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3477 = this;
return (new cljs.core.LazySeq(meta,this__3477.realized,this__3477.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3478 = [];

var s__3479 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3479)))
{ary__3478.push(cljs.core.first.call(null,s__3479));
{
var G__3480 = cljs.core.next.call(null,s__3479);
s__3479 = G__3480;
continue;
}
} else
{return ary__3478;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3481 = s;
var i__3482 = n;
var sum__3483 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3484 = (i__3482 > 0);

if(cljs.core.truth_(and__3546__auto____3484))
{return cljs.core.seq.call(null,s__3481);
} else
{return and__3546__auto____3484;
}
})()))
{{
var G__3485 = cljs.core.next.call(null,s__3481);
var G__3486 = (i__3482 - 1);
var G__3487 = (sum__3483 + 1);
s__3481 = G__3485;
i__3482 = G__3486;
sum__3483 = G__3487;
continue;
}
} else
{return sum__3483;
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
var concat__3491 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3492 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3493 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3488 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3488))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3488),concat.call(null,cljs.core.rest.call(null,s__3488),y));
} else
{return y;
}
})));
});
var concat__3494 = (function() { 
var G__3496__delegate = function (x,y,zs){
var cat__3490 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3489 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3489))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3489),cat.call(null,cljs.core.rest.call(null,xys__3489),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3490.call(null,concat.call(null,x,y),zs);
};
var G__3496 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3496__delegate.call(this, x, y, zs);
};
G__3496.cljs$lang$maxFixedArity = 2;
G__3496.cljs$lang$applyTo = (function (arglist__3497){
var x = cljs.core.first(arglist__3497);
var y = cljs.core.first(cljs.core.next(arglist__3497));
var zs = cljs.core.rest(cljs.core.next(arglist__3497));
return G__3496__delegate.call(this, x, y, zs);
});
return G__3496;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3491.call(this);
case  1 :
return concat__3492.call(this,x);
case  2 :
return concat__3493.call(this,x,y);
default:
return concat__3494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3494.cljs$lang$applyTo;
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
var list_STAR___3498 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3499 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3500 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3501 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3502 = (function() { 
var G__3504__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3504 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3504__delegate.call(this, a, b, c, d, more);
};
G__3504.cljs$lang$maxFixedArity = 4;
G__3504.cljs$lang$applyTo = (function (arglist__3505){
var a = cljs.core.first(arglist__3505);
var b = cljs.core.first(cljs.core.next(arglist__3505));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3505)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3505))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3505))));
return G__3504__delegate.call(this, a, b, c, d, more);
});
return G__3504;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3498.call(this,a);
case  2 :
return list_STAR___3499.call(this,a,b);
case  3 :
return list_STAR___3500.call(this,a,b,c);
case  4 :
return list_STAR___3501.call(this,a,b,c,d);
default:
return list_STAR___3502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3502.cljs$lang$applyTo;
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
var apply__3515 = (function (f,args){
var fixed_arity__3506 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3506 + 1)) <= fixed_arity__3506)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3516 = (function (f,x,args){
var arglist__3507 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3508 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3507,fixed_arity__3508) <= fixed_arity__3508)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3507));
} else
{return f.cljs$lang$applyTo(arglist__3507);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3507));
}
});
var apply__3517 = (function (f,x,y,args){
var arglist__3509 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3510 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3509,fixed_arity__3510) <= fixed_arity__3510)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3509));
} else
{return f.cljs$lang$applyTo(arglist__3509);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3509));
}
});
var apply__3518 = (function (f,x,y,z,args){
var arglist__3511 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3512 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3511,fixed_arity__3512) <= fixed_arity__3512)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3511));
} else
{return f.cljs$lang$applyTo(arglist__3511);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3511));
}
});
var apply__3519 = (function() { 
var G__3521__delegate = function (f,a,b,c,d,args){
var arglist__3513 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3514 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3513,fixed_arity__3514) <= fixed_arity__3514)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3513));
} else
{return f.cljs$lang$applyTo(arglist__3513);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3513));
}
};
var G__3521 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3521__delegate.call(this, f, a, b, c, d, args);
};
G__3521.cljs$lang$maxFixedArity = 5;
G__3521.cljs$lang$applyTo = (function (arglist__3522){
var f = cljs.core.first(arglist__3522);
var a = cljs.core.first(cljs.core.next(arglist__3522));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3522)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3522))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3522)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3522)))));
return G__3521__delegate.call(this, f, a, b, c, d, args);
});
return G__3521;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3515.call(this,f,a);
case  3 :
return apply__3516.call(this,f,a,b);
case  4 :
return apply__3517.call(this,f,a,b,c);
case  5 :
return apply__3518.call(this,f,a,b,c,d);
default:
return apply__3519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3519.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3523){
var obj = cljs.core.first(arglist__3523);
var f = cljs.core.first(cljs.core.next(arglist__3523));
var args = cljs.core.rest(cljs.core.next(arglist__3523));
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
var not_EQ___3524 = (function (x){
return false;
});
var not_EQ___3525 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3526 = (function() { 
var G__3528__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3528 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3528__delegate.call(this, x, y, more);
};
G__3528.cljs$lang$maxFixedArity = 2;
G__3528.cljs$lang$applyTo = (function (arglist__3529){
var x = cljs.core.first(arglist__3529);
var y = cljs.core.first(cljs.core.next(arglist__3529));
var more = cljs.core.rest(cljs.core.next(arglist__3529));
return G__3528__delegate.call(this, x, y, more);
});
return G__3528;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3524.call(this,x);
case  2 :
return not_EQ___3525.call(this,x,y);
default:
return not_EQ___3526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3526.cljs$lang$applyTo;
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
var G__3530 = pred;
var G__3531 = cljs.core.next.call(null,coll);
pred = G__3530;
coll = G__3531;
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
{var or__3548__auto____3532 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3532))
{return or__3548__auto____3532;
} else
{{
var G__3533 = pred;
var G__3534 = cljs.core.next.call(null,coll);
pred = G__3533;
coll = G__3534;
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
var G__3535 = null;
var G__3535__3536 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3535__3537 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3535__3538 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3535__3539 = (function() { 
var G__3541__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3541 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3541__delegate.call(this, x, y, zs);
};
G__3541.cljs$lang$maxFixedArity = 2;
G__3541.cljs$lang$applyTo = (function (arglist__3542){
var x = cljs.core.first(arglist__3542);
var y = cljs.core.first(cljs.core.next(arglist__3542));
var zs = cljs.core.rest(cljs.core.next(arglist__3542));
return G__3541__delegate.call(this, x, y, zs);
});
return G__3541;
})()
;
G__3535 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3535__3536.call(this);
case  1 :
return G__3535__3537.call(this,x);
case  2 :
return G__3535__3538.call(this,x,y);
default:
return G__3535__3539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3535.cljs$lang$maxFixedArity = 2;
G__3535.cljs$lang$applyTo = G__3535__3539.cljs$lang$applyTo;
return G__3535;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3543__delegate = function (args){
return x;
};
var G__3543 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3543__delegate.call(this, args);
};
G__3543.cljs$lang$maxFixedArity = 0;
G__3543.cljs$lang$applyTo = (function (arglist__3544){
var args = cljs.core.seq( arglist__3544 );;
return G__3543__delegate.call(this, args);
});
return G__3543;
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
var comp__3548 = (function (){
return cljs.core.identity;
});
var comp__3549 = (function (f){
return f;
});
var comp__3550 = (function (f,g){
return (function() {
var G__3554 = null;
var G__3554__3555 = (function (){
return f.call(null,g.call(null));
});
var G__3554__3556 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3554__3557 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3554__3558 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3554__3559 = (function() { 
var G__3561__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3561 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3561__delegate.call(this, x, y, z, args);
};
G__3561.cljs$lang$maxFixedArity = 3;
G__3561.cljs$lang$applyTo = (function (arglist__3562){
var x = cljs.core.first(arglist__3562);
var y = cljs.core.first(cljs.core.next(arglist__3562));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3562)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3562)));
return G__3561__delegate.call(this, x, y, z, args);
});
return G__3561;
})()
;
G__3554 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3554__3555.call(this);
case  1 :
return G__3554__3556.call(this,x);
case  2 :
return G__3554__3557.call(this,x,y);
case  3 :
return G__3554__3558.call(this,x,y,z);
default:
return G__3554__3559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3554.cljs$lang$maxFixedArity = 3;
G__3554.cljs$lang$applyTo = G__3554__3559.cljs$lang$applyTo;
return G__3554;
})()
});
var comp__3551 = (function (f,g,h){
return (function() {
var G__3563 = null;
var G__3563__3564 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3563__3565 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3563__3566 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3563__3567 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3563__3568 = (function() { 
var G__3570__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3570 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3570__delegate.call(this, x, y, z, args);
};
G__3570.cljs$lang$maxFixedArity = 3;
G__3570.cljs$lang$applyTo = (function (arglist__3571){
var x = cljs.core.first(arglist__3571);
var y = cljs.core.first(cljs.core.next(arglist__3571));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3571)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3571)));
return G__3570__delegate.call(this, x, y, z, args);
});
return G__3570;
})()
;
G__3563 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3563__3564.call(this);
case  1 :
return G__3563__3565.call(this,x);
case  2 :
return G__3563__3566.call(this,x,y);
case  3 :
return G__3563__3567.call(this,x,y,z);
default:
return G__3563__3568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3563.cljs$lang$maxFixedArity = 3;
G__3563.cljs$lang$applyTo = G__3563__3568.cljs$lang$applyTo;
return G__3563;
})()
});
var comp__3552 = (function() { 
var G__3572__delegate = function (f1,f2,f3,fs){
var fs__3545 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3573__delegate = function (args){
var ret__3546 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3545),args);
var fs__3547 = cljs.core.next.call(null,fs__3545);

while(true){
if(cljs.core.truth_(fs__3547))
{{
var G__3574 = cljs.core.first.call(null,fs__3547).call(null,ret__3546);
var G__3575 = cljs.core.next.call(null,fs__3547);
ret__3546 = G__3574;
fs__3547 = G__3575;
continue;
}
} else
{return ret__3546;
}
break;
}
};
var G__3573 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3573__delegate.call(this, args);
};
G__3573.cljs$lang$maxFixedArity = 0;
G__3573.cljs$lang$applyTo = (function (arglist__3576){
var args = cljs.core.seq( arglist__3576 );;
return G__3573__delegate.call(this, args);
});
return G__3573;
})()
;
};
var G__3572 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3572__delegate.call(this, f1, f2, f3, fs);
};
G__3572.cljs$lang$maxFixedArity = 3;
G__3572.cljs$lang$applyTo = (function (arglist__3577){
var f1 = cljs.core.first(arglist__3577);
var f2 = cljs.core.first(cljs.core.next(arglist__3577));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3577)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3577)));
return G__3572__delegate.call(this, f1, f2, f3, fs);
});
return G__3572;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3548.call(this);
case  1 :
return comp__3549.call(this,f1);
case  2 :
return comp__3550.call(this,f1,f2);
case  3 :
return comp__3551.call(this,f1,f2,f3);
default:
return comp__3552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3552.cljs$lang$applyTo;
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
var partial__3578 = (function (f,arg1){
return (function() { 
var G__3583__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3583 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3583__delegate.call(this, args);
};
G__3583.cljs$lang$maxFixedArity = 0;
G__3583.cljs$lang$applyTo = (function (arglist__3584){
var args = cljs.core.seq( arglist__3584 );;
return G__3583__delegate.call(this, args);
});
return G__3583;
})()
;
});
var partial__3579 = (function (f,arg1,arg2){
return (function() { 
var G__3585__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3585 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3585__delegate.call(this, args);
};
G__3585.cljs$lang$maxFixedArity = 0;
G__3585.cljs$lang$applyTo = (function (arglist__3586){
var args = cljs.core.seq( arglist__3586 );;
return G__3585__delegate.call(this, args);
});
return G__3585;
})()
;
});
var partial__3580 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3587__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3587 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3587__delegate.call(this, args);
};
G__3587.cljs$lang$maxFixedArity = 0;
G__3587.cljs$lang$applyTo = (function (arglist__3588){
var args = cljs.core.seq( arglist__3588 );;
return G__3587__delegate.call(this, args);
});
return G__3587;
})()
;
});
var partial__3581 = (function() { 
var G__3589__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3590__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3590 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3590__delegate.call(this, args);
};
G__3590.cljs$lang$maxFixedArity = 0;
G__3590.cljs$lang$applyTo = (function (arglist__3591){
var args = cljs.core.seq( arglist__3591 );;
return G__3590__delegate.call(this, args);
});
return G__3590;
})()
;
};
var G__3589 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3589__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3589.cljs$lang$maxFixedArity = 4;
G__3589.cljs$lang$applyTo = (function (arglist__3592){
var f = cljs.core.first(arglist__3592);
var arg1 = cljs.core.first(cljs.core.next(arglist__3592));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3592)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3592))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3592))));
return G__3589__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3589;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3578.call(this,f,arg1);
case  3 :
return partial__3579.call(this,f,arg1,arg2);
case  4 :
return partial__3580.call(this,f,arg1,arg2,arg3);
default:
return partial__3581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3581.cljs$lang$applyTo;
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
var fnil__3593 = (function (f,x){
return (function() {
var G__3597 = null;
var G__3597__3598 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3597__3599 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3597__3600 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3597__3601 = (function() { 
var G__3603__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3603 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3603__delegate.call(this, a, b, c, ds);
};
G__3603.cljs$lang$maxFixedArity = 3;
G__3603.cljs$lang$applyTo = (function (arglist__3604){
var a = cljs.core.first(arglist__3604);
var b = cljs.core.first(cljs.core.next(arglist__3604));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3604)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3604)));
return G__3603__delegate.call(this, a, b, c, ds);
});
return G__3603;
})()
;
G__3597 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3597__3598.call(this,a);
case  2 :
return G__3597__3599.call(this,a,b);
case  3 :
return G__3597__3600.call(this,a,b,c);
default:
return G__3597__3601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3597.cljs$lang$maxFixedArity = 3;
G__3597.cljs$lang$applyTo = G__3597__3601.cljs$lang$applyTo;
return G__3597;
})()
});
var fnil__3594 = (function (f,x,y){
return (function() {
var G__3605 = null;
var G__3605__3606 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3605__3607 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3605__3608 = (function() { 
var G__3610__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3610 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3610__delegate.call(this, a, b, c, ds);
};
G__3610.cljs$lang$maxFixedArity = 3;
G__3610.cljs$lang$applyTo = (function (arglist__3611){
var a = cljs.core.first(arglist__3611);
var b = cljs.core.first(cljs.core.next(arglist__3611));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3611)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3611)));
return G__3610__delegate.call(this, a, b, c, ds);
});
return G__3610;
})()
;
G__3605 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3605__3606.call(this,a,b);
case  3 :
return G__3605__3607.call(this,a,b,c);
default:
return G__3605__3608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3605.cljs$lang$maxFixedArity = 3;
G__3605.cljs$lang$applyTo = G__3605__3608.cljs$lang$applyTo;
return G__3605;
})()
});
var fnil__3595 = (function (f,x,y,z){
return (function() {
var G__3612 = null;
var G__3612__3613 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3612__3614 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3612__3615 = (function() { 
var G__3617__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3617 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3617__delegate.call(this, a, b, c, ds);
};
G__3617.cljs$lang$maxFixedArity = 3;
G__3617.cljs$lang$applyTo = (function (arglist__3618){
var a = cljs.core.first(arglist__3618);
var b = cljs.core.first(cljs.core.next(arglist__3618));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3618)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3618)));
return G__3617__delegate.call(this, a, b, c, ds);
});
return G__3617;
})()
;
G__3612 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3612__3613.call(this,a,b);
case  3 :
return G__3612__3614.call(this,a,b,c);
default:
return G__3612__3615.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3612.cljs$lang$maxFixedArity = 3;
G__3612.cljs$lang$applyTo = G__3612__3615.cljs$lang$applyTo;
return G__3612;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3593.call(this,f,x);
case  3 :
return fnil__3594.call(this,f,x,y);
case  4 :
return fnil__3595.call(this,f,x,y,z);
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
var mapi__3621 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3619 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3619))
{var s__3620 = temp__3698__auto____3619;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3620)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3620)));
} else
{return null;
}
})));
});

return mapi__3621.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3622 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3622))
{var s__3623 = temp__3698__auto____3622;

var x__3624 = f.call(null,cljs.core.first.call(null,s__3623));

if(cljs.core.truth_((x__3624 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3623));
} else
{return cljs.core.cons.call(null,x__3624,keep.call(null,f,cljs.core.rest.call(null,s__3623)));
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
var keepi__3634 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3631 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3631))
{var s__3632 = temp__3698__auto____3631;

var x__3633 = f.call(null,idx,cljs.core.first.call(null,s__3632));

if(cljs.core.truth_((x__3633 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3632));
} else
{return cljs.core.cons.call(null,x__3633,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3632)));
}
} else
{return null;
}
})));
});

return keepi__3634.call(null,0,coll);
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
var every_pred__3679 = (function (p){
return (function() {
var ep1 = null;
var ep1__3684 = (function (){
return true;
});
var ep1__3685 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3686 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3641 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3641))
{return p.call(null,y);
} else
{return and__3546__auto____3641;
}
})());
});
var ep1__3687 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3642 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3642))
{var and__3546__auto____3643 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3643))
{return p.call(null,z);
} else
{return and__3546__auto____3643;
}
} else
{return and__3546__auto____3642;
}
})());
});
var ep1__3688 = (function() { 
var G__3690__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3644 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3644))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3644;
}
})());
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
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3684.call(this);
case  1 :
return ep1__3685.call(this,x);
case  2 :
return ep1__3686.call(this,x,y);
case  3 :
return ep1__3687.call(this,x,y,z);
default:
return ep1__3688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3688.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3680 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3692 = (function (){
return true;
});
var ep2__3693 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3645 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3645))
{return p2.call(null,x);
} else
{return and__3546__auto____3645;
}
})());
});
var ep2__3694 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3646 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3646))
{var and__3546__auto____3647 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3647))
{var and__3546__auto____3648 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3648))
{return p2.call(null,y);
} else
{return and__3546__auto____3648;
}
} else
{return and__3546__auto____3647;
}
} else
{return and__3546__auto____3646;
}
})());
});
var ep2__3695 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3649 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3649))
{var and__3546__auto____3650 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3650))
{var and__3546__auto____3651 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3651))
{var and__3546__auto____3652 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3652))
{var and__3546__auto____3653 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3653))
{return p2.call(null,z);
} else
{return and__3546__auto____3653;
}
} else
{return and__3546__auto____3652;
}
} else
{return and__3546__auto____3651;
}
} else
{return and__3546__auto____3650;
}
} else
{return and__3546__auto____3649;
}
})());
});
var ep2__3696 = (function() { 
var G__3698__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3654 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3654))
{return cljs.core.every_QMARK_.call(null,(function (p1__3625_SHARP_){
var and__3546__auto____3655 = p1.call(null,p1__3625_SHARP_);

if(cljs.core.truth_(and__3546__auto____3655))
{return p2.call(null,p1__3625_SHARP_);
} else
{return and__3546__auto____3655;
}
}),args);
} else
{return and__3546__auto____3654;
}
})());
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
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3692.call(this);
case  1 :
return ep2__3693.call(this,x);
case  2 :
return ep2__3694.call(this,x,y);
case  3 :
return ep2__3695.call(this,x,y,z);
default:
return ep2__3696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3696.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3681 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3700 = (function (){
return true;
});
var ep3__3701 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3656 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3656))
{var and__3546__auto____3657 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3657))
{return p3.call(null,x);
} else
{return and__3546__auto____3657;
}
} else
{return and__3546__auto____3656;
}
})());
});
var ep3__3702 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3658 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3658))
{var and__3546__auto____3659 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3659))
{var and__3546__auto____3660 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3660))
{var and__3546__auto____3661 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3661))
{var and__3546__auto____3662 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3662))
{return p3.call(null,y);
} else
{return and__3546__auto____3662;
}
} else
{return and__3546__auto____3661;
}
} else
{return and__3546__auto____3660;
}
} else
{return and__3546__auto____3659;
}
} else
{return and__3546__auto____3658;
}
})());
});
var ep3__3703 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3663 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3663))
{var and__3546__auto____3664 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3664))
{var and__3546__auto____3665 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3665))
{var and__3546__auto____3666 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3666))
{var and__3546__auto____3667 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3667))
{var and__3546__auto____3668 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3668))
{var and__3546__auto____3669 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3669))
{var and__3546__auto____3670 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3670))
{return p3.call(null,z);
} else
{return and__3546__auto____3670;
}
} else
{return and__3546__auto____3669;
}
} else
{return and__3546__auto____3668;
}
} else
{return and__3546__auto____3667;
}
} else
{return and__3546__auto____3666;
}
} else
{return and__3546__auto____3665;
}
} else
{return and__3546__auto____3664;
}
} else
{return and__3546__auto____3663;
}
})());
});
var ep3__3704 = (function() { 
var G__3706__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3671 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3671))
{return cljs.core.every_QMARK_.call(null,(function (p1__3626_SHARP_){
var and__3546__auto____3672 = p1.call(null,p1__3626_SHARP_);

if(cljs.core.truth_(and__3546__auto____3672))
{var and__3546__auto____3673 = p2.call(null,p1__3626_SHARP_);

if(cljs.core.truth_(and__3546__auto____3673))
{return p3.call(null,p1__3626_SHARP_);
} else
{return and__3546__auto____3673;
}
} else
{return and__3546__auto____3672;
}
}),args);
} else
{return and__3546__auto____3671;
}
})());
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
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3700.call(this);
case  1 :
return ep3__3701.call(this,x);
case  2 :
return ep3__3702.call(this,x,y);
case  3 :
return ep3__3703.call(this,x,y,z);
default:
return ep3__3704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3704.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3682 = (function() { 
var G__3708__delegate = function (p1,p2,p3,ps){
var ps__3674 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3709 = (function (){
return true;
});
var epn__3710 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3627_SHARP_){
return p1__3627_SHARP_.call(null,x);
}),ps__3674);
});
var epn__3711 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3628_SHARP_){
var and__3546__auto____3675 = p1__3628_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3675))
{return p1__3628_SHARP_.call(null,y);
} else
{return and__3546__auto____3675;
}
}),ps__3674);
});
var epn__3712 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3629_SHARP_){
var and__3546__auto____3676 = p1__3629_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3676))
{var and__3546__auto____3677 = p1__3629_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3677))
{return p1__3629_SHARP_.call(null,z);
} else
{return and__3546__auto____3677;
}
} else
{return and__3546__auto____3676;
}
}),ps__3674);
});
var epn__3713 = (function() { 
var G__3715__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3678 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3678))
{return cljs.core.every_QMARK_.call(null,(function (p1__3630_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3630_SHARP_,args);
}),ps__3674);
} else
{return and__3546__auto____3678;
}
})());
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
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3709.call(this);
case  1 :
return epn__3710.call(this,x);
case  2 :
return epn__3711.call(this,x,y);
case  3 :
return epn__3712.call(this,x,y,z);
default:
return epn__3713.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3713.cljs$lang$applyTo;
return epn;
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
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3679.call(this,p1);
case  2 :
return every_pred__3680.call(this,p1,p2);
case  3 :
return every_pred__3681.call(this,p1,p2,p3);
default:
return every_pred__3682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3682.cljs$lang$applyTo;
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
var some_fn__3757 = (function (p){
return (function() {
var sp1 = null;
var sp1__3762 = (function (){
return null;
});
var sp1__3763 = (function (x){
return p.call(null,x);
});
var sp1__3764 = (function (x,y){
var or__3548__auto____3719 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3719))
{return or__3548__auto____3719;
} else
{return p.call(null,y);
}
});
var sp1__3765 = (function (x,y,z){
var or__3548__auto____3720 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3720))
{return or__3548__auto____3720;
} else
{var or__3548__auto____3721 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3721))
{return or__3548__auto____3721;
} else
{return p.call(null,z);
}
}
});
var sp1__3766 = (function() { 
var G__3768__delegate = function (x,y,z,args){
var or__3548__auto____3722 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3722))
{return or__3548__auto____3722;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3768 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3768__delegate.call(this, x, y, z, args);
};
G__3768.cljs$lang$maxFixedArity = 3;
G__3768.cljs$lang$applyTo = (function (arglist__3769){
var x = cljs.core.first(arglist__3769);
var y = cljs.core.first(cljs.core.next(arglist__3769));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3769)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3769)));
return G__3768__delegate.call(this, x, y, z, args);
});
return G__3768;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3762.call(this);
case  1 :
return sp1__3763.call(this,x);
case  2 :
return sp1__3764.call(this,x,y);
case  3 :
return sp1__3765.call(this,x,y,z);
default:
return sp1__3766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3766.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3758 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3770 = (function (){
return null;
});
var sp2__3771 = (function (x){
var or__3548__auto____3723 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3723))
{return or__3548__auto____3723;
} else
{return p2.call(null,x);
}
});
var sp2__3772 = (function (x,y){
var or__3548__auto____3724 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3724))
{return or__3548__auto____3724;
} else
{var or__3548__auto____3725 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3725))
{return or__3548__auto____3725;
} else
{var or__3548__auto____3726 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3726))
{return or__3548__auto____3726;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3773 = (function (x,y,z){
var or__3548__auto____3727 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3727))
{return or__3548__auto____3727;
} else
{var or__3548__auto____3728 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3728))
{return or__3548__auto____3728;
} else
{var or__3548__auto____3729 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3729))
{return or__3548__auto____3729;
} else
{var or__3548__auto____3730 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3730))
{return or__3548__auto____3730;
} else
{var or__3548__auto____3731 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3731))
{return or__3548__auto____3731;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3774 = (function() { 
var G__3776__delegate = function (x,y,z,args){
var or__3548__auto____3732 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3732))
{return or__3548__auto____3732;
} else
{return cljs.core.some.call(null,(function (p1__3635_SHARP_){
var or__3548__auto____3733 = p1.call(null,p1__3635_SHARP_);

if(cljs.core.truth_(or__3548__auto____3733))
{return or__3548__auto____3733;
} else
{return p2.call(null,p1__3635_SHARP_);
}
}),args);
}
};
var G__3776 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3776__delegate.call(this, x, y, z, args);
};
G__3776.cljs$lang$maxFixedArity = 3;
G__3776.cljs$lang$applyTo = (function (arglist__3777){
var x = cljs.core.first(arglist__3777);
var y = cljs.core.first(cljs.core.next(arglist__3777));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3777)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3777)));
return G__3776__delegate.call(this, x, y, z, args);
});
return G__3776;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3770.call(this);
case  1 :
return sp2__3771.call(this,x);
case  2 :
return sp2__3772.call(this,x,y);
case  3 :
return sp2__3773.call(this,x,y,z);
default:
return sp2__3774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3774.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3759 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3778 = (function (){
return null;
});
var sp3__3779 = (function (x){
var or__3548__auto____3734 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3734))
{return or__3548__auto____3734;
} else
{var or__3548__auto____3735 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3735))
{return or__3548__auto____3735;
} else
{return p3.call(null,x);
}
}
});
var sp3__3780 = (function (x,y){
var or__3548__auto____3736 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3736))
{return or__3548__auto____3736;
} else
{var or__3548__auto____3737 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3737))
{return or__3548__auto____3737;
} else
{var or__3548__auto____3738 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3738))
{return or__3548__auto____3738;
} else
{var or__3548__auto____3739 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3739))
{return or__3548__auto____3739;
} else
{var or__3548__auto____3740 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3740))
{return or__3548__auto____3740;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3781 = (function (x,y,z){
var or__3548__auto____3741 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3741))
{return or__3548__auto____3741;
} else
{var or__3548__auto____3742 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3742))
{return or__3548__auto____3742;
} else
{var or__3548__auto____3743 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3743))
{return or__3548__auto____3743;
} else
{var or__3548__auto____3744 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3744))
{return or__3548__auto____3744;
} else
{var or__3548__auto____3745 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3745))
{return or__3548__auto____3745;
} else
{var or__3548__auto____3746 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3746))
{return or__3548__auto____3746;
} else
{var or__3548__auto____3747 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3747))
{return or__3548__auto____3747;
} else
{var or__3548__auto____3748 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3748))
{return or__3548__auto____3748;
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
var sp3__3782 = (function() { 
var G__3784__delegate = function (x,y,z,args){
var or__3548__auto____3749 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3749))
{return or__3548__auto____3749;
} else
{return cljs.core.some.call(null,(function (p1__3636_SHARP_){
var or__3548__auto____3750 = p1.call(null,p1__3636_SHARP_);

if(cljs.core.truth_(or__3548__auto____3750))
{return or__3548__auto____3750;
} else
{var or__3548__auto____3751 = p2.call(null,p1__3636_SHARP_);

if(cljs.core.truth_(or__3548__auto____3751))
{return or__3548__auto____3751;
} else
{return p3.call(null,p1__3636_SHARP_);
}
}
}),args);
}
};
var G__3784 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3784__delegate.call(this, x, y, z, args);
};
G__3784.cljs$lang$maxFixedArity = 3;
G__3784.cljs$lang$applyTo = (function (arglist__3785){
var x = cljs.core.first(arglist__3785);
var y = cljs.core.first(cljs.core.next(arglist__3785));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3785)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3785)));
return G__3784__delegate.call(this, x, y, z, args);
});
return G__3784;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3778.call(this);
case  1 :
return sp3__3779.call(this,x);
case  2 :
return sp3__3780.call(this,x,y);
case  3 :
return sp3__3781.call(this,x,y,z);
default:
return sp3__3782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3782.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3760 = (function() { 
var G__3786__delegate = function (p1,p2,p3,ps){
var ps__3752 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3787 = (function (){
return null;
});
var spn__3788 = (function (x){
return cljs.core.some.call(null,(function (p1__3637_SHARP_){
return p1__3637_SHARP_.call(null,x);
}),ps__3752);
});
var spn__3789 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3638_SHARP_){
var or__3548__auto____3753 = p1__3638_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3753))
{return or__3548__auto____3753;
} else
{return p1__3638_SHARP_.call(null,y);
}
}),ps__3752);
});
var spn__3790 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3639_SHARP_){
var or__3548__auto____3754 = p1__3639_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3754))
{return or__3548__auto____3754;
} else
{var or__3548__auto____3755 = p1__3639_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3755))
{return or__3548__auto____3755;
} else
{return p1__3639_SHARP_.call(null,z);
}
}
}),ps__3752);
});
var spn__3791 = (function() { 
var G__3793__delegate = function (x,y,z,args){
var or__3548__auto____3756 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3756))
{return or__3548__auto____3756;
} else
{return cljs.core.some.call(null,(function (p1__3640_SHARP_){
return cljs.core.some.call(null,p1__3640_SHARP_,args);
}),ps__3752);
}
};
var G__3793 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3793__delegate.call(this, x, y, z, args);
};
G__3793.cljs$lang$maxFixedArity = 3;
G__3793.cljs$lang$applyTo = (function (arglist__3794){
var x = cljs.core.first(arglist__3794);
var y = cljs.core.first(cljs.core.next(arglist__3794));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3794)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3794)));
return G__3793__delegate.call(this, x, y, z, args);
});
return G__3793;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3787.call(this);
case  1 :
return spn__3788.call(this,x);
case  2 :
return spn__3789.call(this,x,y);
case  3 :
return spn__3790.call(this,x,y,z);
default:
return spn__3791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3791.cljs$lang$applyTo;
return spn;
})()
};
var G__3786 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3786__delegate.call(this, p1, p2, p3, ps);
};
G__3786.cljs$lang$maxFixedArity = 3;
G__3786.cljs$lang$applyTo = (function (arglist__3795){
var p1 = cljs.core.first(arglist__3795);
var p2 = cljs.core.first(cljs.core.next(arglist__3795));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3795)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3795)));
return G__3786__delegate.call(this, p1, p2, p3, ps);
});
return G__3786;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3757.call(this,p1);
case  2 :
return some_fn__3758.call(this,p1,p2);
case  3 :
return some_fn__3759.call(this,p1,p2,p3);
default:
return some_fn__3760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3760.cljs$lang$applyTo;
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
var map__3808 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3796 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3796))
{var s__3797 = temp__3698__auto____3796;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3797)),map.call(null,f,cljs.core.rest.call(null,s__3797)));
} else
{return null;
}
})));
});
var map__3809 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3798 = cljs.core.seq.call(null,c1);
var s2__3799 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3800 = s1__3798;

if(cljs.core.truth_(and__3546__auto____3800))
{return s2__3799;
} else
{return and__3546__auto____3800;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3798),cljs.core.first.call(null,s2__3799)),map.call(null,f,cljs.core.rest.call(null,s1__3798),cljs.core.rest.call(null,s2__3799)));
} else
{return null;
}
})));
});
var map__3810 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3801 = cljs.core.seq.call(null,c1);
var s2__3802 = cljs.core.seq.call(null,c2);
var s3__3803 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3804 = s1__3801;

if(cljs.core.truth_(and__3546__auto____3804))
{var and__3546__auto____3805 = s2__3802;

if(cljs.core.truth_(and__3546__auto____3805))
{return s3__3803;
} else
{return and__3546__auto____3805;
}
} else
{return and__3546__auto____3804;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3801),cljs.core.first.call(null,s2__3802),cljs.core.first.call(null,s3__3803)),map.call(null,f,cljs.core.rest.call(null,s1__3801),cljs.core.rest.call(null,s2__3802),cljs.core.rest.call(null,s3__3803)));
} else
{return null;
}
})));
});
var map__3811 = (function() { 
var G__3813__delegate = function (f,c1,c2,c3,colls){
var step__3807 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3806 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3806)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3806),step.call(null,map.call(null,cljs.core.rest,ss__3806)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3718_SHARP_){
return cljs.core.apply.call(null,f,p1__3718_SHARP_);
}),step__3807.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3813 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3813__delegate.call(this, f, c1, c2, c3, colls);
};
G__3813.cljs$lang$maxFixedArity = 4;
G__3813.cljs$lang$applyTo = (function (arglist__3814){
var f = cljs.core.first(arglist__3814);
var c1 = cljs.core.first(cljs.core.next(arglist__3814));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3814)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3814))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3814))));
return G__3813__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3813;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3808.call(this,f,c1);
case  3 :
return map__3809.call(this,f,c1,c2);
case  4 :
return map__3810.call(this,f,c1,c2,c3);
default:
return map__3811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3811.cljs$lang$applyTo;
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
{var temp__3698__auto____3815 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3815))
{var s__3816 = temp__3698__auto____3815;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3816),take.call(null,(n - 1),cljs.core.rest.call(null,s__3816)));
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
var step__3819 = (function (n,coll){
while(true){
var s__3817 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3818 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3818))
{return s__3817;
} else
{return and__3546__auto____3818;
}
})()))
{{
var G__3820 = (n - 1);
var G__3821 = cljs.core.rest.call(null,s__3817);
n = G__3820;
coll = G__3821;
continue;
}
} else
{return s__3817;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3819.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3822 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3823 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3822.call(this,n);
case  2 :
return drop_last__3823.call(this,n,s);
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
var s__3825 = cljs.core.seq.call(null,coll);
var lead__3826 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3826))
{{
var G__3827 = cljs.core.next.call(null,s__3825);
var G__3828 = cljs.core.next.call(null,lead__3826);
s__3825 = G__3827;
lead__3826 = G__3828;
continue;
}
} else
{return s__3825;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3831 = (function (pred,coll){
while(true){
var s__3829 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3830 = s__3829;

if(cljs.core.truth_(and__3546__auto____3830))
{return pred.call(null,cljs.core.first.call(null,s__3829));
} else
{return and__3546__auto____3830;
}
})()))
{{
var G__3832 = pred;
var G__3833 = cljs.core.rest.call(null,s__3829);
pred = G__3832;
coll = G__3833;
continue;
}
} else
{return s__3829;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3831.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3834 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3834))
{var s__3835 = temp__3698__auto____3834;

return cljs.core.concat.call(null,s__3835,cycle.call(null,s__3835));
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
var repeat__3836 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3837 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3836.call(this,n);
case  2 :
return repeat__3837.call(this,n,x);
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
var repeatedly__3839 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3840 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3839.call(this,n);
case  2 :
return repeatedly__3840.call(this,n,f);
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
var interleave__3846 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3842 = cljs.core.seq.call(null,c1);
var s2__3843 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3844 = s1__3842;

if(cljs.core.truth_(and__3546__auto____3844))
{return s2__3843;
} else
{return and__3546__auto____3844;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3842),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3843),interleave.call(null,cljs.core.rest.call(null,s1__3842),cljs.core.rest.call(null,s2__3843))));
} else
{return null;
}
})));
});
var interleave__3847 = (function() { 
var G__3849__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3845 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3845)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3845),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3845)));
} else
{return null;
}
})));
};
var G__3849 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3849__delegate.call(this, c1, c2, colls);
};
G__3849.cljs$lang$maxFixedArity = 2;
G__3849.cljs$lang$applyTo = (function (arglist__3850){
var c1 = cljs.core.first(arglist__3850);
var c2 = cljs.core.first(cljs.core.next(arglist__3850));
var colls = cljs.core.rest(cljs.core.next(arglist__3850));
return G__3849__delegate.call(this, c1, c2, colls);
});
return G__3849;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3846.call(this,c1,c2);
default:
return interleave__3847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3847.cljs$lang$applyTo;
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
var cat__3853 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3851 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3851))
{var coll__3852 = temp__3695__auto____3851;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3852),cat.call(null,cljs.core.rest.call(null,coll__3852),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3853.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3854 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3855 = (function() { 
var G__3857__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3857 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3857__delegate.call(this, f, coll, colls);
};
G__3857.cljs$lang$maxFixedArity = 2;
G__3857.cljs$lang$applyTo = (function (arglist__3858){
var f = cljs.core.first(arglist__3858);
var coll = cljs.core.first(cljs.core.next(arglist__3858));
var colls = cljs.core.rest(cljs.core.next(arglist__3858));
return G__3857__delegate.call(this, f, coll, colls);
});
return G__3857;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3854.call(this,f,coll);
default:
return mapcat__3855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3855.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3859 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3859))
{var s__3860 = temp__3698__auto____3859;

var f__3861 = cljs.core.first.call(null,s__3860);
var r__3862 = cljs.core.rest.call(null,s__3860);

if(cljs.core.truth_(pred.call(null,f__3861)))
{return cljs.core.cons.call(null,f__3861,filter.call(null,pred,r__3862));
} else
{return filter.call(null,pred,r__3862);
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
var walk__3864 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3864.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3863_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3863_SHARP_));
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
var partition__3871 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3872 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3865))
{var s__3866 = temp__3698__auto____3865;

var p__3867 = cljs.core.take.call(null,n,s__3866);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3867))))
{return cljs.core.cons.call(null,p__3867,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3866)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3873 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3868 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3868))
{var s__3869 = temp__3698__auto____3868;

var p__3870 = cljs.core.take.call(null,n,s__3869);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3870))))
{return cljs.core.cons.call(null,p__3870,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3869)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3870,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3871.call(this,n,step);
case  3 :
return partition__3872.call(this,n,step,pad);
case  4 :
return partition__3873.call(this,n,step,pad,coll);
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
var get_in__3879 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3880 = (function (m,ks,not_found){
var sentinel__3875 = cljs.core.lookup_sentinel;
var m__3876 = m;
var ks__3877 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3877))
{var m__3878 = cljs.core.get.call(null,m__3876,cljs.core.first.call(null,ks__3877),sentinel__3875);

if(cljs.core.truth_((sentinel__3875 === m__3878)))
{return not_found;
} else
{{
var G__3882 = sentinel__3875;
var G__3883 = m__3878;
var G__3884 = cljs.core.next.call(null,ks__3877);
sentinel__3875 = G__3882;
m__3876 = G__3883;
ks__3877 = G__3884;
continue;
}
}
} else
{return m__3876;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3879.call(this,m,ks);
case  3 :
return get_in__3880.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3885,v){
var vec__3886__3887 = p__3885;
var k__3888 = cljs.core.nth.call(null,vec__3886__3887,0,null);
var ks__3889 = cljs.core.nthnext.call(null,vec__3886__3887,1);

if(cljs.core.truth_(ks__3889))
{return cljs.core.assoc.call(null,m,k__3888,assoc_in.call(null,cljs.core.get.call(null,m,k__3888),ks__3889,v));
} else
{return cljs.core.assoc.call(null,m,k__3888,v);
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
var update_in__delegate = function (m,p__3890,f,args){
var vec__3891__3892 = p__3890;
var k__3893 = cljs.core.nth.call(null,vec__3891__3892,0,null);
var ks__3894 = cljs.core.nthnext.call(null,vec__3891__3892,1);

if(cljs.core.truth_(ks__3894))
{return cljs.core.assoc.call(null,m,k__3893,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3893),ks__3894,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3893,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3893),args));
}
};
var update_in = function (m,p__3890,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3890, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3895){
var m = cljs.core.first(arglist__3895);
var p__3890 = cljs.core.first(cljs.core.next(arglist__3895));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3895)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3895)));
return update_in__delegate.call(this, m, p__3890, f, args);
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
var this__3896 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3929 = null;
var G__3929__3930 = (function (coll,k){
var this__3897 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3929__3931 = (function (coll,k,not_found){
var this__3898 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3929 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3929__3930.call(this,coll,k);
case  3 :
return G__3929__3931.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3929;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3899 = this;
var new_array__3900 = cljs.core.aclone.call(null,this__3899.array);

(new_array__3900[k] = v);
return (new cljs.core.Vector(this__3899.meta,new_array__3900));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__3933 = null;
var G__3933__3934 = (function (tsym3901,k){
var this__3903 = this;
var tsym3901__3904 = this;

var coll__3905 = tsym3901__3904;

return cljs.core._lookup.call(null,coll__3905,k);
});
var G__3933__3935 = (function (tsym3902,k,not_found){
var this__3906 = this;
var tsym3902__3907 = this;

var coll__3908 = tsym3902__3907;

return cljs.core._lookup.call(null,coll__3908,k,not_found);
});
G__3933 = function(tsym3902,k,not_found){
switch(arguments.length){
case  2 :
return G__3933__3934.call(this,tsym3902,k);
case  3 :
return G__3933__3935.call(this,tsym3902,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3933;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3909 = this;
var new_array__3910 = cljs.core.aclone.call(null,this__3909.array);

new_array__3910.push(o);
return (new cljs.core.Vector(this__3909.meta,new_array__3910));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3937 = null;
var G__3937__3938 = (function (v,f){
var this__3911 = this;
return cljs.core.ci_reduce.call(null,this__3911.array,f);
});
var G__3937__3939 = (function (v,f,start){
var this__3912 = this;
return cljs.core.ci_reduce.call(null,this__3912.array,f,start);
});
G__3937 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3937__3938.call(this,v,f);
case  3 :
return G__3937__3939.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3937;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3913 = this;
if(cljs.core.truth_((this__3913.array.length > 0)))
{var vector_seq__3914 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3913.array.length)))
{return cljs.core.cons.call(null,(this__3913.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3914.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3915 = this;
return this__3915.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3916 = this;
var count__3917 = this__3916.array.length;

if(cljs.core.truth_((count__3917 > 0)))
{return (this__3916.array[(count__3917 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3918 = this;
if(cljs.core.truth_((this__3918.array.length > 0)))
{var new_array__3919 = cljs.core.aclone.call(null,this__3918.array);

new_array__3919.pop();
return (new cljs.core.Vector(this__3918.meta,new_array__3919));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3920 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3921 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3922 = this;
return (new cljs.core.Vector(meta,this__3922.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3923 = this;
return this__3923.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3941 = null;
var G__3941__3942 = (function (coll,n){
var this__3924 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3925 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3925))
{return (n < this__3924.array.length);
} else
{return and__3546__auto____3925;
}
})()))
{return (this__3924.array[n]);
} else
{return null;
}
});
var G__3941__3943 = (function (coll,n,not_found){
var this__3926 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3927 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3927))
{return (n < this__3926.array.length);
} else
{return and__3546__auto____3927;
}
})()))
{return (this__3926.array[n]);
} else
{return not_found;
}
});
G__3941 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3941__3942.call(this,coll,n);
case  3 :
return G__3941__3943.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3941;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3928 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3928.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__3945 = pv.cnt;

if(cljs.core.truth_((cnt__3945 < 32)))
{return 0;
} else
{return (((cnt__3945 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__3946 = level;
var ret__3947 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__3946)))
{return ret__3947;
} else
{var embed__3948 = ret__3947;
var r__3949 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___3950 = (r__3949[0] = embed__3948);

{
var G__3951 = (ll__3946 - 5);
var G__3952 = r__3949;
ll__3946 = G__3951;
ret__3947 = G__3952;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__3953 = cljs.core.aclone.call(null,parent);
var subidx__3954 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__3953[subidx__3954] = tailnode);
return ret__3953;
} else
{var temp__3695__auto____3955 = (parent[subidx__3954]);

if(cljs.core.truth_(temp__3695__auto____3955))
{var child__3956 = temp__3695__auto____3955;

var node_to_insert__3957 = push_tail.call(null,pv,(level - 5),child__3956,tailnode);
var ___3958 = (ret__3953[subidx__3954] = node_to_insert__3957);

return ret__3953;
} else
{var node_to_insert__3959 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___3960 = (ret__3953[subidx__3954] = node_to_insert__3959);

return ret__3953;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____3961 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____3961))
{return (i < pv.cnt);
} else
{return and__3546__auto____3961;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__3962 = pv.root;
var level__3963 = pv.shift;

while(true){
if(cljs.core.truth_((level__3963 > 0)))
{{
var G__3964 = (node__3962[((i >> level__3963) & 31)]);
var G__3965 = (level__3963 - 5);
node__3962 = G__3964;
level__3963 = G__3965;
continue;
}
} else
{return node__3962;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__3966 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__3966[(i & 31)] = val);
return ret__3966;
} else
{var subidx__3967 = ((i >> level) & 31);
var ___3968 = (ret__3966[subidx__3967] = do_assoc.call(null,pv,(level - 5),(node[subidx__3967]),i,val));

return ret__3966;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__3969 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__3970 = pop_tail.call(null,pv,(level - 5),(node[subidx__3969]));

if(cljs.core.truth_((function (){var and__3546__auto____3971 = (new_child__3970 === null);

if(cljs.core.truth_(and__3546__auto____3971))
{return (subidx__3969 === 0);
} else
{return and__3546__auto____3971;
}
})()))
{return null;
} else
{var ret__3972 = cljs.core.aclone.call(null,node);
var ___3973 = (ret__3972[subidx__3969] = new_child__3970);

return ret__3972;
}
} else
{if(cljs.core.truth_((subidx__3969 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__3974 = cljs.core.aclone.call(null,node);
var ___3975 = (ret__3974[subidx__3969] = null);

return ret__3974;
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
var this__3976 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4016 = null;
var G__4016__4017 = (function (coll,k){
var this__3977 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4016__4018 = (function (coll,k,not_found){
var this__3978 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4016 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4016__4017.call(this,coll,k);
case  3 :
return G__4016__4018.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4016;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3979 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3980 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____3980))
{return (k < this__3979.cnt);
} else
{return and__3546__auto____3980;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__3981 = cljs.core.aclone.call(null,this__3979.tail);

(new_tail__3981[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__3979.meta,this__3979.cnt,this__3979.shift,this__3979.root,new_tail__3981));
} else
{return (new cljs.core.PersistentVector(this__3979.meta,this__3979.cnt,this__3979.shift,cljs.core.do_assoc.call(null,coll,this__3979.shift,this__3979.root,k,v),this__3979.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__3979.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__3979.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__4020 = null;
var G__4020__4021 = (function (tsym3982,k){
var this__3984 = this;
var tsym3982__3985 = this;

var coll__3986 = tsym3982__3985;

return cljs.core._lookup.call(null,coll__3986,k);
});
var G__4020__4022 = (function (tsym3983,k,not_found){
var this__3987 = this;
var tsym3983__3988 = this;

var coll__3989 = tsym3983__3988;

return cljs.core._lookup.call(null,coll__3989,k,not_found);
});
G__4020 = function(tsym3983,k,not_found){
switch(arguments.length){
case  2 :
return G__4020__4021.call(this,tsym3983,k);
case  3 :
return G__4020__4022.call(this,tsym3983,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4020;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3990 = this;
if(cljs.core.truth_(((this__3990.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__3991 = cljs.core.aclone.call(null,this__3990.tail);

new_tail__3991.push(o);
return (new cljs.core.PersistentVector(this__3990.meta,(this__3990.cnt + 1),this__3990.shift,this__3990.root,new_tail__3991));
} else
{var root_overflow_QMARK___3992 = ((this__3990.cnt >> 5) > (1 << this__3990.shift));
var new_shift__3993 = (cljs.core.truth_(root_overflow_QMARK___3992)?(this__3990.shift + 5):this__3990.shift);
var new_root__3995 = (cljs.core.truth_(root_overflow_QMARK___3992)?(function (){var n_r__3994 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__3994[0] = this__3990.root);
(n_r__3994[1] = cljs.core.new_path.call(null,this__3990.shift,this__3990.tail));
return n_r__3994;
})():cljs.core.push_tail.call(null,coll,this__3990.shift,this__3990.root,this__3990.tail));

return (new cljs.core.PersistentVector(this__3990.meta,(this__3990.cnt + 1),new_shift__3993,new_root__3995,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4024 = null;
var G__4024__4025 = (function (v,f){
var this__3996 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__4024__4026 = (function (v,f,start){
var this__3997 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__4024 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4024__4025.call(this,v,f);
case  3 :
return G__4024__4026.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4024;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3998 = this;
if(cljs.core.truth_((this__3998.cnt > 0)))
{var vector_seq__3999 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3998.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3999.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4000 = this;
return this__4000.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4001 = this;
if(cljs.core.truth_((this__4001.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__4001.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4002 = this;
if(cljs.core.truth_((this__4002.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__4002.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4002.meta);
} else
{if(cljs.core.truth_((1 < (this__4002.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__4002.meta,(this__4002.cnt - 1),this__4002.shift,this__4002.root,cljs.core.aclone.call(null,this__4002.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__4003 = cljs.core.array_for.call(null,coll,(this__4002.cnt - 2));
var nr__4004 = cljs.core.pop_tail.call(null,this__4002.shift,this__4002.root);
var new_root__4005 = (cljs.core.truth_((nr__4004 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__4004);
var cnt_1__4006 = (this__4002.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____4007 = (5 < this__4002.shift);

if(cljs.core.truth_(and__3546__auto____4007))
{return ((new_root__4005[1]) === null);
} else
{return and__3546__auto____4007;
}
})()))
{return (new cljs.core.PersistentVector(this__4002.meta,cnt_1__4006,(this__4002.shift - 5),(new_root__4005[0]),new_tail__4003));
} else
{return (new cljs.core.PersistentVector(this__4002.meta,cnt_1__4006,this__4002.shift,new_root__4005,new_tail__4003));
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
var this__4008 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4009 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4010 = this;
return (new cljs.core.PersistentVector(meta,this__4010.cnt,this__4010.shift,this__4010.root,this__4010.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4011 = this;
return this__4011.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4028 = null;
var G__4028__4029 = (function (coll,n){
var this__4012 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__4028__4030 = (function (coll,n,not_found){
var this__4013 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4014 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4014))
{return (n < this__4013.cnt);
} else
{return and__3546__auto____4014;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__4028 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4028__4029.call(this,coll,n);
case  3 :
return G__4028__4030.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4028;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4015 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4015.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4032){
var args = cljs.core.seq( arglist__4032 );;
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
var this__4033 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4061 = null;
var G__4061__4062 = (function (coll,k){
var this__4034 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4061__4063 = (function (coll,k,not_found){
var this__4035 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4061 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4061__4062.call(this,coll,k);
case  3 :
return G__4061__4063.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4061;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4036 = this;
var v_pos__4037 = (this__4036.start + key);

return (new cljs.core.Subvec(this__4036.meta,cljs.core._assoc.call(null,this__4036.v,v_pos__4037,val),this__4036.start,((this__4036.end > (v_pos__4037 + 1)) ? this__4036.end : (v_pos__4037 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4065 = null;
var G__4065__4066 = (function (tsym4038,k){
var this__4040 = this;
var tsym4038__4041 = this;

var coll__4042 = tsym4038__4041;

return cljs.core._lookup.call(null,coll__4042,k);
});
var G__4065__4067 = (function (tsym4039,k,not_found){
var this__4043 = this;
var tsym4039__4044 = this;

var coll__4045 = tsym4039__4044;

return cljs.core._lookup.call(null,coll__4045,k,not_found);
});
G__4065 = function(tsym4039,k,not_found){
switch(arguments.length){
case  2 :
return G__4065__4066.call(this,tsym4039,k);
case  3 :
return G__4065__4067.call(this,tsym4039,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4065;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4046 = this;
return (new cljs.core.Subvec(this__4046.meta,cljs.core._assoc_n.call(null,this__4046.v,this__4046.end,o),this__4046.start,(this__4046.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4069 = null;
var G__4069__4070 = (function (coll,f){
var this__4047 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4069__4071 = (function (coll,f,start){
var this__4048 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4069 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4069__4070.call(this,coll,f);
case  3 :
return G__4069__4071.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4069;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4049 = this;
var subvec_seq__4050 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4049.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4049.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4050.call(null,this__4049.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4051 = this;
return (this__4051.end - this__4051.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4052 = this;
return cljs.core._nth.call(null,this__4052.v,(this__4052.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4053 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4053.start,this__4053.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4053.meta,this__4053.v,this__4053.start,(this__4053.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4054 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4055 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4056 = this;
return (new cljs.core.Subvec(meta,this__4056.v,this__4056.start,this__4056.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4057 = this;
return this__4057.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4073 = null;
var G__4073__4074 = (function (coll,n){
var this__4058 = this;
return cljs.core._nth.call(null,this__4058.v,(this__4058.start + n));
});
var G__4073__4075 = (function (coll,n,not_found){
var this__4059 = this;
return cljs.core._nth.call(null,this__4059.v,(this__4059.start + n),not_found);
});
G__4073 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4073__4074.call(this,coll,n);
case  3 :
return G__4073__4075.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4073;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4060 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4060.meta);
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
var subvec__4077 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4078 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4077.call(this,v,start);
case  3 :
return subvec__4078.call(this,v,start,end);
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
var this__4080 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4081 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4082 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4083 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4083.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4084 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4085 = this;
return cljs.core._first.call(null,this__4085.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4086 = this;
var temp__3695__auto____4087 = cljs.core.next.call(null,this__4086.front);

if(cljs.core.truth_(temp__3695__auto____4087))
{var f1__4088 = temp__3695__auto____4087;

return (new cljs.core.PersistentQueueSeq(this__4086.meta,f1__4088,this__4086.rear));
} else
{if(cljs.core.truth_((this__4086.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4086.meta,this__4086.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4089 = this;
return this__4089.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4090 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4090.front,this__4090.rear));
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
var this__4091 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4092 = this;
if(cljs.core.truth_(this__4092.front))
{return (new cljs.core.PersistentQueue(this__4092.meta,(this__4092.count + 1),this__4092.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4093 = this__4092.rear;

if(cljs.core.truth_(or__3548__auto____4093))
{return or__3548__auto____4093;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4092.meta,(this__4092.count + 1),cljs.core.conj.call(null,this__4092.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4094 = this;
var rear__4095 = cljs.core.seq.call(null,this__4094.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4096 = this__4094.front;

if(cljs.core.truth_(or__3548__auto____4096))
{return or__3548__auto____4096;
} else
{return rear__4095;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4094.front,cljs.core.seq.call(null,rear__4095)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4097 = this;
return this__4097.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4098 = this;
return cljs.core._first.call(null,this__4098.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4099 = this;
if(cljs.core.truth_(this__4099.front))
{var temp__3695__auto____4100 = cljs.core.next.call(null,this__4099.front);

if(cljs.core.truth_(temp__3695__auto____4100))
{var f1__4101 = temp__3695__auto____4100;

return (new cljs.core.PersistentQueue(this__4099.meta,(this__4099.count - 1),f1__4101,this__4099.rear));
} else
{return (new cljs.core.PersistentQueue(this__4099.meta,(this__4099.count - 1),cljs.core.seq.call(null,this__4099.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4102 = this;
return cljs.core.first.call(null,this__4102.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4103 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4104 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4105 = this;
return (new cljs.core.PersistentQueue(meta,this__4105.count,this__4105.front,this__4105.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4106 = this;
return this__4106.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4107 = this;
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
var this__4108 = this;
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
var len__4109 = array.length;

var i__4110 = 0;

while(true){
if(cljs.core.truth_((i__4110 < len__4109)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4110]))))
{return i__4110;
} else
{{
var G__4111 = (i__4110 + incr);
i__4110 = G__4111;
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
var obj_map_contains_key_QMARK___4113 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4114 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4112 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4112))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4112;
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
return obj_map_contains_key_QMARK___4113.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4114.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4117 = cljs.core.hash.call(null,a);
var b__4118 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4117 < b__4118)))
{return -1;
} else
{if(cljs.core.truth_((a__4117 > b__4118)))
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
var this__4119 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4146 = null;
var G__4146__4147 = (function (coll,k){
var this__4120 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4146__4148 = (function (coll,k,not_found){
var this__4121 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4121.strobj,(this__4121.strobj[k]),not_found);
});
G__4146 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4146__4147.call(this,coll,k);
case  3 :
return G__4146__4148.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4146;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4122 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4123 = goog.object.clone.call(null,this__4122.strobj);
var overwrite_QMARK___4124 = new_strobj__4123.hasOwnProperty(k);

(new_strobj__4123[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4124))
{return (new cljs.core.ObjMap(this__4122.meta,this__4122.keys,new_strobj__4123));
} else
{var new_keys__4125 = cljs.core.aclone.call(null,this__4122.keys);

new_keys__4125.push(k);
return (new cljs.core.ObjMap(this__4122.meta,new_keys__4125,new_strobj__4123));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4122.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4126 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4126.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4150 = null;
var G__4150__4151 = (function (tsym4127,k){
var this__4129 = this;
var tsym4127__4130 = this;

var coll__4131 = tsym4127__4130;

return cljs.core._lookup.call(null,coll__4131,k);
});
var G__4150__4152 = (function (tsym4128,k,not_found){
var this__4132 = this;
var tsym4128__4133 = this;

var coll__4134 = tsym4128__4133;

return cljs.core._lookup.call(null,coll__4134,k,not_found);
});
G__4150 = function(tsym4128,k,not_found){
switch(arguments.length){
case  2 :
return G__4150__4151.call(this,tsym4128,k);
case  3 :
return G__4150__4152.call(this,tsym4128,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4150;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4135 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4136 = this;
if(cljs.core.truth_((this__4136.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4116_SHARP_){
return cljs.core.vector.call(null,p1__4116_SHARP_,(this__4136.strobj[p1__4116_SHARP_]));
}),this__4136.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4137 = this;
return this__4137.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4138 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4139 = this;
return (new cljs.core.ObjMap(meta,this__4139.keys,this__4139.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4140 = this;
return this__4140.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4141 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4141.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4142 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4143 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4143))
{return this__4142.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4143;
}
})()))
{var new_keys__4144 = cljs.core.aclone.call(null,this__4142.keys);
var new_strobj__4145 = goog.object.clone.call(null,this__4142.strobj);

new_keys__4144.splice(cljs.core.scan_array.call(null,1,k,new_keys__4144),1);
cljs.core.js_delete.call(null,new_strobj__4145,k);
return (new cljs.core.ObjMap(this__4142.meta,new_keys__4144,new_strobj__4145));
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
var this__4155 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4193 = null;
var G__4193__4194 = (function (coll,k){
var this__4156 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4193__4195 = (function (coll,k,not_found){
var this__4157 = this;
var bucket__4158 = (this__4157.hashobj[cljs.core.hash.call(null,k)]);
var i__4159 = (cljs.core.truth_(bucket__4158)?cljs.core.scan_array.call(null,2,k,bucket__4158):null);

if(cljs.core.truth_(i__4159))
{return (bucket__4158[(i__4159 + 1)]);
} else
{return not_found;
}
});
G__4193 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4193__4194.call(this,coll,k);
case  3 :
return G__4193__4195.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4193;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4160 = this;
var h__4161 = cljs.core.hash.call(null,k);
var bucket__4162 = (this__4160.hashobj[h__4161]);

if(cljs.core.truth_(bucket__4162))
{var new_bucket__4163 = cljs.core.aclone.call(null,bucket__4162);
var new_hashobj__4164 = goog.object.clone.call(null,this__4160.hashobj);

(new_hashobj__4164[h__4161] = new_bucket__4163);
var temp__3695__auto____4165 = cljs.core.scan_array.call(null,2,k,new_bucket__4163);

if(cljs.core.truth_(temp__3695__auto____4165))
{var i__4166 = temp__3695__auto____4165;

(new_bucket__4163[(i__4166 + 1)] = v);
return (new cljs.core.HashMap(this__4160.meta,this__4160.count,new_hashobj__4164));
} else
{new_bucket__4163.push(k,v);
return (new cljs.core.HashMap(this__4160.meta,(this__4160.count + 1),new_hashobj__4164));
}
} else
{var new_hashobj__4167 = goog.object.clone.call(null,this__4160.hashobj);

(new_hashobj__4167[h__4161] = [k,v]);
return (new cljs.core.HashMap(this__4160.meta,(this__4160.count + 1),new_hashobj__4167));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4168 = this;
var bucket__4169 = (this__4168.hashobj[cljs.core.hash.call(null,k)]);
var i__4170 = (cljs.core.truth_(bucket__4169)?cljs.core.scan_array.call(null,2,k,bucket__4169):null);

if(cljs.core.truth_(i__4170))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4197 = null;
var G__4197__4198 = (function (tsym4171,k){
var this__4173 = this;
var tsym4171__4174 = this;

var coll__4175 = tsym4171__4174;

return cljs.core._lookup.call(null,coll__4175,k);
});
var G__4197__4199 = (function (tsym4172,k,not_found){
var this__4176 = this;
var tsym4172__4177 = this;

var coll__4178 = tsym4172__4177;

return cljs.core._lookup.call(null,coll__4178,k,not_found);
});
G__4197 = function(tsym4172,k,not_found){
switch(arguments.length){
case  2 :
return G__4197__4198.call(this,tsym4172,k);
case  3 :
return G__4197__4199.call(this,tsym4172,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4197;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4179 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4180 = this;
if(cljs.core.truth_((this__4180.count > 0)))
{var hashes__4181 = cljs.core.js_keys.call(null,this__4180.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4154_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4180.hashobj[p1__4154_SHARP_])));
}),hashes__4181);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4182 = this;
return this__4182.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4183 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4184 = this;
return (new cljs.core.HashMap(meta,this__4184.count,this__4184.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4185 = this;
return this__4185.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4186 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4186.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4187 = this;
var h__4188 = cljs.core.hash.call(null,k);
var bucket__4189 = (this__4187.hashobj[h__4188]);
var i__4190 = (cljs.core.truth_(bucket__4189)?cljs.core.scan_array.call(null,2,k,bucket__4189):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4190)))
{return coll;
} else
{var new_hashobj__4191 = goog.object.clone.call(null,this__4187.hashobj);

if(cljs.core.truth_((3 > bucket__4189.length)))
{cljs.core.js_delete.call(null,new_hashobj__4191,h__4188);
} else
{var new_bucket__4192 = cljs.core.aclone.call(null,bucket__4189);

new_bucket__4192.splice(i__4190,2);
(new_hashobj__4191[h__4188] = new_bucket__4192);
}
return (new cljs.core.HashMap(this__4187.meta,(this__4187.count - 1),new_hashobj__4191));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4201 = ks.length;

var i__4202 = 0;
var out__4203 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4202 < len__4201)))
{{
var G__4204 = (i__4202 + 1);
var G__4205 = cljs.core.assoc.call(null,out__4203,(ks[i__4202]),(vs[i__4202]));
i__4202 = G__4204;
out__4203 = G__4205;
continue;
}
} else
{return out__4203;
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
var in$__4206 = cljs.core.seq.call(null,keyvals);
var out__4207 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4206))
{{
var G__4208 = cljs.core.nnext.call(null,in$__4206);
var G__4209 = cljs.core.assoc.call(null,out__4207,cljs.core.first.call(null,in$__4206),cljs.core.second.call(null,in$__4206));
in$__4206 = G__4208;
out__4207 = G__4209;
continue;
}
} else
{return out__4207;
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
hash_map.cljs$lang$applyTo = (function (arglist__4210){
var keyvals = cljs.core.seq( arglist__4210 );;
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
{return cljs.core.reduce.call(null,(function (p1__4211_SHARP_,p2__4212_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4213 = p1__4211_SHARP_;

if(cljs.core.truth_(or__3548__auto____4213))
{return or__3548__auto____4213;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4212_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4214){
var maps = cljs.core.seq( arglist__4214 );;
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
{var merge_entry__4217 = (function (m,e){
var k__4215 = cljs.core.first.call(null,e);
var v__4216 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4215)))
{return cljs.core.assoc.call(null,m,k__4215,f.call(null,cljs.core.get.call(null,m,k__4215),v__4216));
} else
{return cljs.core.assoc.call(null,m,k__4215,v__4216);
}
});
var merge2__4219 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4217,(function (){var or__3548__auto____4218 = m1;

if(cljs.core.truth_(or__3548__auto____4218))
{return or__3548__auto____4218;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4219,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4220){
var f = cljs.core.first(arglist__4220);
var maps = cljs.core.rest(arglist__4220);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4222 = cljs.core.ObjMap.fromObject([],{});
var keys__4223 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4223))
{var key__4224 = cljs.core.first.call(null,keys__4223);
var entry__4225 = cljs.core.get.call(null,map,key__4224,"\uFDD0'clojure.core/not-found");

{
var G__4226 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4225,"\uFDD0'clojure.core/not-found"))?cljs.core.assoc.call(null,ret__4222,key__4224,entry__4225):ret__4222);
var G__4227 = cljs.core.next.call(null,keys__4223);
ret__4222 = G__4226;
keys__4223 = G__4227;
continue;
}
} else
{return ret__4222;
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
var this__4228 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4249 = null;
var G__4249__4250 = (function (coll,v){
var this__4229 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4249__4251 = (function (coll,v,not_found){
var this__4230 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4230.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4249 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4249__4250.call(this,coll,v);
case  3 :
return G__4249__4251.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4249;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4253 = null;
var G__4253__4254 = (function (tsym4231,k){
var this__4233 = this;
var tsym4231__4234 = this;

var coll__4235 = tsym4231__4234;

return cljs.core._lookup.call(null,coll__4235,k);
});
var G__4253__4255 = (function (tsym4232,k,not_found){
var this__4236 = this;
var tsym4232__4237 = this;

var coll__4238 = tsym4232__4237;

return cljs.core._lookup.call(null,coll__4238,k,not_found);
});
G__4253 = function(tsym4232,k,not_found){
switch(arguments.length){
case  2 :
return G__4253__4254.call(this,tsym4232,k);
case  3 :
return G__4253__4255.call(this,tsym4232,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4253;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4239 = this;
return (new cljs.core.Set(this__4239.meta,cljs.core.assoc.call(null,this__4239.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4240 = this;
return cljs.core.keys.call(null,this__4240.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4241 = this;
return (new cljs.core.Set(this__4241.meta,cljs.core.dissoc.call(null,this__4241.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4242 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4243 = this;
var and__3546__auto____4244 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4244))
{var and__3546__auto____4245 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4245))
{return cljs.core.every_QMARK_.call(null,(function (p1__4221_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4221_SHARP_);
}),other);
} else
{return and__3546__auto____4245;
}
} else
{return and__3546__auto____4244;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4246 = this;
return (new cljs.core.Set(meta,this__4246.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4247 = this;
return this__4247.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4248 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4248.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4258 = cljs.core.seq.call(null,coll);
var out__4259 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4258))))
{{
var G__4260 = cljs.core.rest.call(null,in$__4258);
var G__4261 = cljs.core.conj.call(null,out__4259,cljs.core.first.call(null,in$__4258));
in$__4258 = G__4260;
out__4259 = G__4261;
continue;
}
} else
{return out__4259;
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
{var n__4262 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4263 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4263))
{var e__4264 = temp__3695__auto____4263;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4264));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4262,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4257_SHARP_){
var temp__3695__auto____4265 = cljs.core.find.call(null,smap,p1__4257_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4265))
{var e__4266 = temp__3695__auto____4265;

return cljs.core.second.call(null,e__4266);
} else
{return p1__4257_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4274 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4267,seen){
while(true){
var vec__4268__4269 = p__4267;
var f__4270 = cljs.core.nth.call(null,vec__4268__4269,0,null);
var xs__4271 = vec__4268__4269;

var temp__3698__auto____4272 = cljs.core.seq.call(null,xs__4271);

if(cljs.core.truth_(temp__3698__auto____4272))
{var s__4273 = temp__3698__auto____4272;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4270)))
{{
var G__4275 = cljs.core.rest.call(null,s__4273);
var G__4276 = seen;
p__4267 = G__4275;
seen = G__4276;
continue;
}
} else
{return cljs.core.cons.call(null,f__4270,step.call(null,cljs.core.rest.call(null,s__4273),cljs.core.conj.call(null,seen,f__4270)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4274.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4277 = cljs.core.PersistentVector.fromArray([]);
var s__4278 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4278)))
{{
var G__4279 = cljs.core.conj.call(null,ret__4277,cljs.core.first.call(null,s__4278));
var G__4280 = cljs.core.next.call(null,s__4278);
ret__4277 = G__4279;
s__4278 = G__4280;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4277);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4281 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4281))
{return or__3548__auto____4281;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4282 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4282 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4282 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4283 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4283))
{return or__3548__auto____4283;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4284 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4284 > -1)))
{return cljs.core.subs.call(null,x,2,i__4284);
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
var map__4287 = cljs.core.ObjMap.fromObject([],{});
var ks__4288 = cljs.core.seq.call(null,keys);
var vs__4289 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4290 = ks__4288;

if(cljs.core.truth_(and__3546__auto____4290))
{return vs__4289;
} else
{return and__3546__auto____4290;
}
})()))
{{
var G__4291 = cljs.core.assoc.call(null,map__4287,cljs.core.first.call(null,ks__4288),cljs.core.first.call(null,vs__4289));
var G__4292 = cljs.core.next.call(null,ks__4288);
var G__4293 = cljs.core.next.call(null,vs__4289);
map__4287 = G__4291;
ks__4288 = G__4292;
vs__4289 = G__4293;
continue;
}
} else
{return map__4287;
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
var max_key__4296 = (function (k,x){
return x;
});
var max_key__4297 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4298 = (function() { 
var G__4300__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4285_SHARP_,p2__4286_SHARP_){
return max_key.call(null,k,p1__4285_SHARP_,p2__4286_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4300 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4300__delegate.call(this, k, x, y, more);
};
G__4300.cljs$lang$maxFixedArity = 3;
G__4300.cljs$lang$applyTo = (function (arglist__4301){
var k = cljs.core.first(arglist__4301);
var x = cljs.core.first(cljs.core.next(arglist__4301));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4301)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4301)));
return G__4300__delegate.call(this, k, x, y, more);
});
return G__4300;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4296.call(this,k,x);
case  3 :
return max_key__4297.call(this,k,x,y);
default:
return max_key__4298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4298.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4302 = (function (k,x){
return x;
});
var min_key__4303 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4304 = (function() { 
var G__4306__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4294_SHARP_,p2__4295_SHARP_){
return min_key.call(null,k,p1__4294_SHARP_,p2__4295_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4306 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4306__delegate.call(this, k, x, y, more);
};
G__4306.cljs$lang$maxFixedArity = 3;
G__4306.cljs$lang$applyTo = (function (arglist__4307){
var k = cljs.core.first(arglist__4307);
var x = cljs.core.first(cljs.core.next(arglist__4307));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4307)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4307)));
return G__4306__delegate.call(this, k, x, y, more);
});
return G__4306;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4302.call(this,k,x);
case  3 :
return min_key__4303.call(this,k,x,y);
default:
return min_key__4304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4304.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4310 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4311 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4308 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4308))
{var s__4309 = temp__3698__auto____4308;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4309),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4309)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4310.call(this,n,step);
case  3 :
return partition_all__4311.call(this,n,step,coll);
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
var temp__3698__auto____4313 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4313))
{var s__4314 = temp__3698__auto____4313;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4314))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4314),take_while.call(null,pred,cljs.core.rest.call(null,s__4314)));
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
var this__4315 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4316 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4332 = null;
var G__4332__4333 = (function (rng,f){
var this__4317 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4332__4334 = (function (rng,f,s){
var this__4318 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4332 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4332__4333.call(this,rng,f);
case  3 :
return G__4332__4334.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4332;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4319 = this;
var comp__4320 = (cljs.core.truth_((this__4319.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4320.call(null,this__4319.start,this__4319.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4321 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4321.end - this__4321.start) / this__4321.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4322 = this;
return this__4322.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4323 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4323.meta,(this__4323.start + this__4323.step),this__4323.end,this__4323.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4324 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4325 = this;
return (new cljs.core.Range(meta,this__4325.start,this__4325.end,this__4325.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4326 = this;
return this__4326.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4336 = null;
var G__4336__4337 = (function (rng,n){
var this__4327 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4327.start + (n * this__4327.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4328 = (this__4327.start > this__4327.end);

if(cljs.core.truth_(and__3546__auto____4328))
{return cljs.core._EQ_.call(null,this__4327.step,0);
} else
{return and__3546__auto____4328;
}
})()))
{return this__4327.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4336__4338 = (function (rng,n,not_found){
var this__4329 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4329.start + (n * this__4329.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4330 = (this__4329.start > this__4329.end);

if(cljs.core.truth_(and__3546__auto____4330))
{return cljs.core._EQ_.call(null,this__4329.step,0);
} else
{return and__3546__auto____4330;
}
})()))
{return this__4329.start;
} else
{return not_found;
}
}
});
G__4336 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4336__4337.call(this,rng,n);
case  3 :
return G__4336__4338.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4336;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4331 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4331.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4340 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4341 = (function (end){
return range.call(null,0,end,1);
});
var range__4342 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4343 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4340.call(this);
case  1 :
return range__4341.call(this,start);
case  2 :
return range__4342.call(this,start,end);
case  3 :
return range__4343.call(this,start,end,step);
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
var temp__3698__auto____4345 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4345))
{var s__4346 = temp__3698__auto____4345;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4346),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4346)));
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
var temp__3698__auto____4348 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4348))
{var s__4349 = temp__3698__auto____4348;

var fst__4350 = cljs.core.first.call(null,s__4349);
var fv__4351 = f.call(null,fst__4350);
var run__4352 = cljs.core.cons.call(null,fst__4350,cljs.core.take_while.call(null,(function (p1__4347_SHARP_){
return cljs.core._EQ_.call(null,fv__4351,f.call(null,p1__4347_SHARP_));
}),cljs.core.next.call(null,s__4349)));

return cljs.core.cons.call(null,run__4352,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4352),s__4349))));
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
var reductions__4367 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4363 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4363))
{var s__4364 = temp__3695__auto____4363;

return reductions.call(null,f,cljs.core.first.call(null,s__4364),cljs.core.rest.call(null,s__4364));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4368 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4365 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4365))
{var s__4366 = temp__3698__auto____4365;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4366)),cljs.core.rest.call(null,s__4366));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4367.call(this,f,init);
case  3 :
return reductions__4368.call(this,f,init,coll);
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
var juxt__4371 = (function (f){
return (function() {
var G__4376 = null;
var G__4376__4377 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4376__4378 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4376__4379 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4376__4380 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4376__4381 = (function() { 
var G__4383__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4383 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4383__delegate.call(this, x, y, z, args);
};
G__4383.cljs$lang$maxFixedArity = 3;
G__4383.cljs$lang$applyTo = (function (arglist__4384){
var x = cljs.core.first(arglist__4384);
var y = cljs.core.first(cljs.core.next(arglist__4384));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4384)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4384)));
return G__4383__delegate.call(this, x, y, z, args);
});
return G__4383;
})()
;
G__4376 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4376__4377.call(this);
case  1 :
return G__4376__4378.call(this,x);
case  2 :
return G__4376__4379.call(this,x,y);
case  3 :
return G__4376__4380.call(this,x,y,z);
default:
return G__4376__4381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4376.cljs$lang$maxFixedArity = 3;
G__4376.cljs$lang$applyTo = G__4376__4381.cljs$lang$applyTo;
return G__4376;
})()
});
var juxt__4372 = (function (f,g){
return (function() {
var G__4385 = null;
var G__4385__4386 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4385__4387 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4385__4388 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4385__4389 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4385__4390 = (function() { 
var G__4392__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4392 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4392__delegate.call(this, x, y, z, args);
};
G__4392.cljs$lang$maxFixedArity = 3;
G__4392.cljs$lang$applyTo = (function (arglist__4393){
var x = cljs.core.first(arglist__4393);
var y = cljs.core.first(cljs.core.next(arglist__4393));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4393)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4393)));
return G__4392__delegate.call(this, x, y, z, args);
});
return G__4392;
})()
;
G__4385 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4385__4386.call(this);
case  1 :
return G__4385__4387.call(this,x);
case  2 :
return G__4385__4388.call(this,x,y);
case  3 :
return G__4385__4389.call(this,x,y,z);
default:
return G__4385__4390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4385.cljs$lang$maxFixedArity = 3;
G__4385.cljs$lang$applyTo = G__4385__4390.cljs$lang$applyTo;
return G__4385;
})()
});
var juxt__4373 = (function (f,g,h){
return (function() {
var G__4394 = null;
var G__4394__4395 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4394__4396 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4394__4397 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4394__4398 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4394__4399 = (function() { 
var G__4401__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4401 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4401__delegate.call(this, x, y, z, args);
};
G__4401.cljs$lang$maxFixedArity = 3;
G__4401.cljs$lang$applyTo = (function (arglist__4402){
var x = cljs.core.first(arglist__4402);
var y = cljs.core.first(cljs.core.next(arglist__4402));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4402)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4402)));
return G__4401__delegate.call(this, x, y, z, args);
});
return G__4401;
})()
;
G__4394 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4394__4395.call(this);
case  1 :
return G__4394__4396.call(this,x);
case  2 :
return G__4394__4397.call(this,x,y);
case  3 :
return G__4394__4398.call(this,x,y,z);
default:
return G__4394__4399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4394.cljs$lang$maxFixedArity = 3;
G__4394.cljs$lang$applyTo = G__4394__4399.cljs$lang$applyTo;
return G__4394;
})()
});
var juxt__4374 = (function() { 
var G__4403__delegate = function (f,g,h,fs){
var fs__4370 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4404 = null;
var G__4404__4405 = (function (){
return cljs.core.reduce.call(null,(function (p1__4353_SHARP_,p2__4354_SHARP_){
return cljs.core.conj.call(null,p1__4353_SHARP_,p2__4354_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__4370);
});
var G__4404__4406 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4355_SHARP_,p2__4356_SHARP_){
return cljs.core.conj.call(null,p1__4355_SHARP_,p2__4356_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__4370);
});
var G__4404__4407 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4357_SHARP_,p2__4358_SHARP_){
return cljs.core.conj.call(null,p1__4357_SHARP_,p2__4358_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__4370);
});
var G__4404__4408 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4359_SHARP_,p2__4360_SHARP_){
return cljs.core.conj.call(null,p1__4359_SHARP_,p2__4360_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__4370);
});
var G__4404__4409 = (function() { 
var G__4411__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4361_SHARP_,p2__4362_SHARP_){
return cljs.core.conj.call(null,p1__4361_SHARP_,cljs.core.apply.call(null,p2__4362_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__4370);
};
var G__4411 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4411__delegate.call(this, x, y, z, args);
};
G__4411.cljs$lang$maxFixedArity = 3;
G__4411.cljs$lang$applyTo = (function (arglist__4412){
var x = cljs.core.first(arglist__4412);
var y = cljs.core.first(cljs.core.next(arglist__4412));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4412)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4412)));
return G__4411__delegate.call(this, x, y, z, args);
});
return G__4411;
})()
;
G__4404 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4404__4405.call(this);
case  1 :
return G__4404__4406.call(this,x);
case  2 :
return G__4404__4407.call(this,x,y);
case  3 :
return G__4404__4408.call(this,x,y,z);
default:
return G__4404__4409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4404.cljs$lang$maxFixedArity = 3;
G__4404.cljs$lang$applyTo = G__4404__4409.cljs$lang$applyTo;
return G__4404;
})()
};
var G__4403 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4403__delegate.call(this, f, g, h, fs);
};
G__4403.cljs$lang$maxFixedArity = 3;
G__4403.cljs$lang$applyTo = (function (arglist__4413){
var f = cljs.core.first(arglist__4413);
var g = cljs.core.first(cljs.core.next(arglist__4413));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4413)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4413)));
return G__4403__delegate.call(this, f, g, h, fs);
});
return G__4403;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4371.call(this,f);
case  2 :
return juxt__4372.call(this,f,g);
case  3 :
return juxt__4373.call(this,f,g,h);
default:
return juxt__4374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4374.cljs$lang$applyTo;
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
var dorun__4415 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4418 = cljs.core.next.call(null,coll);
coll = G__4418;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4416 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4414 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4414))
{return (n > 0);
} else
{return and__3546__auto____4414;
}
})()))
{{
var G__4419 = (n - 1);
var G__4420 = cljs.core.next.call(null,coll);
n = G__4419;
coll = G__4420;
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
return dorun__4415.call(this,n);
case  2 :
return dorun__4416.call(this,n,coll);
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
var doall__4421 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4422 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4421.call(this,n);
case  2 :
return doall__4422.call(this,n,coll);
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
var matches__4424 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4424),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4424),1)))
{return cljs.core.first.call(null,matches__4424);
} else
{return cljs.core.vec.call(null,matches__4424);
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
var matches__4425 = re.exec(s);

if(cljs.core.truth_((matches__4425 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4425),1)))
{return cljs.core.first.call(null,matches__4425);
} else
{return cljs.core.vec.call(null,matches__4425);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4426 = cljs.core.re_find.call(null,re,s);
var match_idx__4427 = s.search(re);
var match_str__4428 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4426))?cljs.core.first.call(null,match_data__4426):match_data__4426);
var post_match__4429 = cljs.core.subs.call(null,s,(match_idx__4427 + cljs.core.count.call(null,match_str__4428)));

if(cljs.core.truth_(match_data__4426))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4426,re_seq.call(null,re,post_match__4429));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4431__4432 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4433 = cljs.core.nth.call(null,vec__4431__4432,0,null);
var flags__4434 = cljs.core.nth.call(null,vec__4431__4432,1,null);
var pattern__4435 = cljs.core.nth.call(null,vec__4431__4432,2,null);

return (new RegExp(pattern__4435,flags__4434));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4430_SHARP_){
return print_one.call(null,p1__4430_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4436 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4436))
{var and__3546__auto____4440 = (function (){var x__351__auto____4437 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4438 = x__351__auto____4437;

if(cljs.core.truth_(and__3546__auto____4438))
{var and__3546__auto____4439 = x__351__auto____4437.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4439))
{return cljs.core.not.call(null,x__351__auto____4437.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4439;
}
} else
{return and__3546__auto____4438;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__351__auto____4437);
}
})();

if(cljs.core.truth_(and__3546__auto____4440))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4440;
}
} else
{return and__3546__auto____4436;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__351__auto____4441 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4442 = x__351__auto____4441;

if(cljs.core.truth_(and__3546__auto____4442))
{var and__3546__auto____4443 = x__351__auto____4441.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4443))
{return cljs.core.not.call(null,x__351__auto____4441.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4443;
}
} else
{return and__3546__auto____4442;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__351__auto____4441);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__4444 = cljs.core.first.call(null,objs);
var sb__4445 = (new goog.string.StringBuffer());

var G__4446__4447 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4446__4447))
{var obj__4448 = cljs.core.first.call(null,G__4446__4447);
var G__4446__4449 = G__4446__4447;

while(true){
if(cljs.core.truth_((obj__4448 === first_obj__4444)))
{} else
{sb__4445.append(" ");
}
var G__4450__4451 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4448,opts));

if(cljs.core.truth_(G__4450__4451))
{var string__4452 = cljs.core.first.call(null,G__4450__4451);
var G__4450__4453 = G__4450__4451;

while(true){
sb__4445.append(string__4452);
var temp__3698__auto____4454 = cljs.core.next.call(null,G__4450__4453);

if(cljs.core.truth_(temp__3698__auto____4454))
{var G__4450__4455 = temp__3698__auto____4454;

{
var G__4458 = cljs.core.first.call(null,G__4450__4455);
var G__4459 = G__4450__4455;
string__4452 = G__4458;
G__4450__4453 = G__4459;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4456 = cljs.core.next.call(null,G__4446__4449);

if(cljs.core.truth_(temp__3698__auto____4456))
{var G__4446__4457 = temp__3698__auto____4456;

{
var G__4460 = cljs.core.first.call(null,G__4446__4457);
var G__4461 = G__4446__4457;
obj__4448 = G__4460;
G__4446__4449 = G__4461;
continue;
}
} else
{}
break;
}
} else
{}
return sb__4445;
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
var sb__4462 = cljs.core.pr_sb.call(null,objs,opts);

sb__4462.append("\n");
return cljs.core.str.call(null,sb__4462);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4463 = cljs.core.first.call(null,objs);

var G__4464__4465 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4464__4465))
{var obj__4466 = cljs.core.first.call(null,G__4464__4465);
var G__4464__4467 = G__4464__4465;

while(true){
if(cljs.core.truth_((obj__4466 === first_obj__4463)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4468__4469 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4466,opts));

if(cljs.core.truth_(G__4468__4469))
{var string__4470 = cljs.core.first.call(null,G__4468__4469);
var G__4468__4471 = G__4468__4469;

while(true){
cljs.core.string_print.call(null,string__4470);
var temp__3698__auto____4472 = cljs.core.next.call(null,G__4468__4471);

if(cljs.core.truth_(temp__3698__auto____4472))
{var G__4468__4473 = temp__3698__auto____4472;

{
var G__4476 = cljs.core.first.call(null,G__4468__4473);
var G__4477 = G__4468__4473;
string__4470 = G__4476;
G__4468__4471 = G__4477;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4474 = cljs.core.next.call(null,G__4464__4467);

if(cljs.core.truth_(temp__3698__auto____4474))
{var G__4464__4475 = temp__3698__auto____4474;

{
var G__4478 = cljs.core.first.call(null,G__4464__4475);
var G__4479 = G__4464__4475;
obj__4466 = G__4478;
G__4464__4467 = G__4479;
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
pr_str.cljs$lang$applyTo = (function (arglist__4480){
var objs = cljs.core.seq( arglist__4480 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__4481){
var objs = cljs.core.seq( arglist__4481 );;
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
pr.cljs$lang$applyTo = (function (arglist__4482){
var objs = cljs.core.seq( arglist__4482 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4483){
var objs = cljs.core.seq( arglist__4483 );;
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
print_str.cljs$lang$applyTo = (function (arglist__4484){
var objs = cljs.core.seq( arglist__4484 );;
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
println.cljs$lang$applyTo = (function (arglist__4485){
var objs = cljs.core.seq( arglist__4485 );;
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
println_str.cljs$lang$applyTo = (function (arglist__4486){
var objs = cljs.core.seq( arglist__4486 );;
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
prn.cljs$lang$applyTo = (function (arglist__4487){
var objs = cljs.core.seq( arglist__4487 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4488 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4488,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4489 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4489))
{var nspc__4490 = temp__3698__auto____4489;

return cljs.core.str.call(null,nspc__4490,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4491 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4491))
{var nspc__4492 = temp__3698__auto____4491;

return cljs.core.str.call(null,nspc__4492,"/");
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
var pr_pair__4493 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4493,"{",", ","}",opts,coll);
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
var this__4494 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4495 = this;
var G__4496__4497 = cljs.core.seq.call(null,this__4495.watches);

if(cljs.core.truth_(G__4496__4497))
{var G__4499__4501 = cljs.core.first.call(null,G__4496__4497);
var vec__4500__4502 = G__4499__4501;
var key__4503 = cljs.core.nth.call(null,vec__4500__4502,0,null);
var f__4504 = cljs.core.nth.call(null,vec__4500__4502,1,null);
var G__4496__4505 = G__4496__4497;

var G__4499__4506 = G__4499__4501;
var G__4496__4507 = G__4496__4505;

while(true){
var vec__4508__4509 = G__4499__4506;
var key__4510 = cljs.core.nth.call(null,vec__4508__4509,0,null);
var f__4511 = cljs.core.nth.call(null,vec__4508__4509,1,null);
var G__4496__4512 = G__4496__4507;

f__4511.call(null,key__4510,this$,oldval,newval);
var temp__3698__auto____4513 = cljs.core.next.call(null,G__4496__4512);

if(cljs.core.truth_(temp__3698__auto____4513))
{var G__4496__4514 = temp__3698__auto____4513;

{
var G__4521 = cljs.core.first.call(null,G__4496__4514);
var G__4522 = G__4496__4514;
G__4499__4506 = G__4521;
G__4496__4507 = G__4522;
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
var this__4515 = this;
return this$.watches = cljs.core.assoc.call(null,this__4515.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4516 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4516.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4517 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4517.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4518 = this;
return this__4518.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4519 = this;
return this__4519.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4520 = this;
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
var atom__4529 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4530 = (function() { 
var G__4532__delegate = function (x,p__4523){
var map__4524__4525 = p__4523;
var map__4524__4526 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4524__4525))?cljs.core.apply.call(null,cljs.core.hash_map,map__4524__4525):map__4524__4525);
var validator__4527 = cljs.core.get.call(null,map__4524__4526,"\uFDD0'validator");
var meta__4528 = cljs.core.get.call(null,map__4524__4526,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4528,validator__4527,null));
};
var G__4532 = function (x,var_args){
var p__4523 = null;
if (goog.isDef(var_args)) {
  p__4523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4532__delegate.call(this, x, p__4523);
};
G__4532.cljs$lang$maxFixedArity = 1;
G__4532.cljs$lang$applyTo = (function (arglist__4533){
var x = cljs.core.first(arglist__4533);
var p__4523 = cljs.core.rest(arglist__4533);
return G__4532__delegate.call(this, x, p__4523);
});
return G__4532;
})()
;
atom = function(x,var_args){
var p__4523 = var_args;
switch(arguments.length){
case  1 :
return atom__4529.call(this,x);
default:
return atom__4530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4530.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4534 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4534))
{var validate__4535 = temp__3698__auto____4534;

if(cljs.core.truth_(validate__4535.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__4536 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4536,new_value);
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
var swap_BANG___4537 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4538 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4539 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4540 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4541 = (function() { 
var G__4543__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4543 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4543__delegate.call(this, a, f, x, y, z, more);
};
G__4543.cljs$lang$maxFixedArity = 5;
G__4543.cljs$lang$applyTo = (function (arglist__4544){
var a = cljs.core.first(arglist__4544);
var f = cljs.core.first(cljs.core.next(arglist__4544));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4544)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4544))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4544)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4544)))));
return G__4543__delegate.call(this, a, f, x, y, z, more);
});
return G__4543;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4537.call(this,a,f);
case  3 :
return swap_BANG___4538.call(this,a,f,x);
case  4 :
return swap_BANG___4539.call(this,a,f,x,y);
case  5 :
return swap_BANG___4540.call(this,a,f,x,y,z);
default:
return swap_BANG___4541.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4541.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4545){
var iref = cljs.core.first(arglist__4545);
var f = cljs.core.first(cljs.core.next(arglist__4545));
var args = cljs.core.rest(cljs.core.next(arglist__4545));
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
var gensym__4546 = (function (){
return gensym.call(null,"G__");
});
var gensym__4547 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4546.call(this);
case  1 :
return gensym__4547.call(this,prefix_string);
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
var this__4549 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__4549.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4550 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__4550.state,(function (p__4551){
var curr_state__4552 = p__4551;
var curr_state__4553 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__4552))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__4552):curr_state__4552);
var done__4554 = cljs.core.get.call(null,curr_state__4553,"\uFDD0'done");

if(cljs.core.truth_(done__4554))
{return curr_state__4553;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__4550.f.call(null)});
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
var map__4555__4556 = options;
var map__4555__4557 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4555__4556))?cljs.core.apply.call(null,cljs.core.hash_map,map__4555__4556):map__4555__4556);
var keywordize_keys__4558 = cljs.core.get.call(null,map__4555__4557,"\uFDD0'keywordize-keys");
var keyfn__4559 = (cljs.core.truth_(keywordize_keys__4558)?cljs.core.keyword:cljs.core.str);
var f__4565 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__420__auto____4564 = (function iter__4560(s__4561){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4561__4562 = s__4561;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4561__4562)))
{var k__4563 = cljs.core.first.call(null,s__4561__4562);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__4559.call(null,k__4563),thisfn.call(null,(x[k__4563]))]),iter__4560.call(null,cljs.core.rest.call(null,s__4561__4562)));
} else
{return null;
}
break;
}
})));
});

return iter__420__auto____4564.call(null,cljs.core.js_keys.call(null,x));
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

return f__4565.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4566){
var x = cljs.core.first(arglist__4566);
var options = cljs.core.rest(arglist__4566);
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
var mem__4567 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4571__delegate = function (args){
var temp__3695__auto____4568 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4567),args);

if(cljs.core.truth_(temp__3695__auto____4568))
{var v__4569 = temp__3695__auto____4568;

return v__4569;
} else
{var ret__4570 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4567,cljs.core.assoc,args,ret__4570);
return ret__4570;
}
};
var G__4571 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4571__delegate.call(this, args);
};
G__4571.cljs$lang$maxFixedArity = 0;
G__4571.cljs$lang$applyTo = (function (arglist__4572){
var args = cljs.core.seq( arglist__4572 );;
return G__4571__delegate.call(this, args);
});
return G__4571;
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
var trampoline__4574 = (function (f){
while(true){
var ret__4573 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4573)))
{{
var G__4577 = ret__4573;
f = G__4577;
continue;
}
} else
{return ret__4573;
}
break;
}
});
var trampoline__4575 = (function() { 
var G__4578__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4578 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4578__delegate.call(this, f, args);
};
G__4578.cljs$lang$maxFixedArity = 1;
G__4578.cljs$lang$applyTo = (function (arglist__4579){
var f = cljs.core.first(arglist__4579);
var args = cljs.core.rest(arglist__4579);
return G__4578__delegate.call(this, f, args);
});
return G__4578;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4574.call(this,f);
default:
return trampoline__4575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4575.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4580 = (function (){
return rand.call(null,1);
});
var rand__4581 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4580.call(this);
case  1 :
return rand__4581.call(this,n);
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
var k__4583 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4583,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4583,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___4592 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4593 = (function (h,child,parent){
var or__3548__auto____4584 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4584))
{return or__3548__auto____4584;
} else
{var or__3548__auto____4585 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4585))
{return or__3548__auto____4585;
} else
{var and__3546__auto____4586 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4586))
{var and__3546__auto____4587 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4587))
{var and__3546__auto____4588 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4588))
{var ret__4589 = true;
var i__4590 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4591 = cljs.core.not.call(null,ret__4589);

if(cljs.core.truth_(or__3548__auto____4591))
{return or__3548__auto____4591;
} else
{return cljs.core._EQ_.call(null,i__4590,cljs.core.count.call(null,parent));
}
})()))
{return ret__4589;
} else
{{
var G__4595 = isa_QMARK_.call(null,h,child.call(null,i__4590),parent.call(null,i__4590));
var G__4596 = (i__4590 + 1);
ret__4589 = G__4595;
i__4590 = G__4596;
continue;
}
}
break;
}
} else
{return and__3546__auto____4588;
}
} else
{return and__3546__auto____4587;
}
} else
{return and__3546__auto____4586;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4592.call(this,h,child);
case  3 :
return isa_QMARK___4593.call(this,h,child,parent);
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
var parents__4597 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4598 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4597.call(this,h);
case  2 :
return parents__4598.call(this,h,tag);
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
var ancestors__4600 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4601 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4600.call(this,h);
case  2 :
return ancestors__4601.call(this,h,tag);
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
var descendants__4603 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4604 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4603.call(this,h);
case  2 :
return descendants__4604.call(this,h,tag);
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
var derive__4614 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4615 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__4609 = "\uFDD0'parents".call(null,h);
var td__4610 = "\uFDD0'descendants".call(null,h);
var ta__4611 = "\uFDD0'ancestors".call(null,h);
var tf__4612 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4613 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4609.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4611.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4611.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4609,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4612.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4610,parent,ta__4611),"\uFDD0'descendants":tf__4612.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4611,tag,td__4610)});
})());

if(cljs.core.truth_(or__3548__auto____4613))
{return or__3548__auto____4613;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4614.call(this,h,tag);
case  3 :
return derive__4615.call(this,h,tag,parent);
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
var underive__4621 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4622 = (function (h,tag,parent){
var parentMap__4617 = "\uFDD0'parents".call(null,h);
var childsParents__4618 = (cljs.core.truth_(parentMap__4617.call(null,tag))?cljs.core.disj.call(null,parentMap__4617.call(null,tag),parent):cljs.core.set([]));
var newParents__4619 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4618))?cljs.core.assoc.call(null,parentMap__4617,tag,childsParents__4618):cljs.core.dissoc.call(null,parentMap__4617,tag));
var deriv_seq__4620 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4606_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4606_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4606_SHARP_),cljs.core.second.call(null,p1__4606_SHARP_)));
}),cljs.core.seq.call(null,newParents__4619)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4617.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4607_SHARP_,p2__4608_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4607_SHARP_,p2__4608_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4620));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4621.call(this,h,tag);
case  3 :
return underive__4622.call(this,h,tag,parent);
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
var xprefs__4624 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4626 = (cljs.core.truth_((function (){var and__3546__auto____4625 = xprefs__4624;

if(cljs.core.truth_(and__3546__auto____4625))
{return xprefs__4624.call(null,y);
} else
{return and__3546__auto____4625;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4626))
{return or__3548__auto____4626;
} else
{var or__3548__auto____4628 = (function (){var ps__4627 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4627) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4627),prefer_table)))
{} else
{}
{
var G__4631 = cljs.core.rest.call(null,ps__4627);
ps__4627 = G__4631;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4628))
{return or__3548__auto____4628;
} else
{var or__3548__auto____4630 = (function (){var ps__4629 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4629) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4629),y,prefer_table)))
{} else
{}
{
var G__4632 = cljs.core.rest.call(null,ps__4629);
ps__4629 = G__4632;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4630))
{return or__3548__auto____4630;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4633 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4633))
{return or__3548__auto____4633;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4642 = cljs.core.reduce.call(null,(function (be,p__4634){
var vec__4635__4636 = p__4634;
var k__4637 = cljs.core.nth.call(null,vec__4635__4636,0,null);
var ___4638 = cljs.core.nth.call(null,vec__4635__4636,1,null);
var e__4639 = vec__4635__4636;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4637)))
{var be2__4641 = (cljs.core.truth_((function (){var or__3548__auto____4640 = (be === null);

if(cljs.core.truth_(or__3548__auto____4640))
{return or__3548__auto____4640;
} else
{return cljs.core.dominates.call(null,k__4637,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4639:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4641),k__4637,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4637," and ",cljs.core.first.call(null,be2__4641),", and neither is preferred")));
}
return be2__4641;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4642))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4642));
return cljs.core.second.call(null,best_entry__4642);
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
if(cljs.core.truth_((function (){var and__3546__auto____4643 = mf;

if(cljs.core.truth_(and__3546__auto____4643))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4643;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4644 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4644))
{return or__3548__auto____4644;
} else
{var or__3548__auto____4645 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4645))
{return or__3548__auto____4645;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4646 = mf;

if(cljs.core.truth_(and__3546__auto____4646))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4646;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4647 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4647))
{return or__3548__auto____4647;
} else
{var or__3548__auto____4648 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4648))
{return or__3548__auto____4648;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4649 = mf;

if(cljs.core.truth_(and__3546__auto____4649))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4649;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4650 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4650))
{return or__3548__auto____4650;
} else
{var or__3548__auto____4651 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4651))
{return or__3548__auto____4651;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4652 = mf;

if(cljs.core.truth_(and__3546__auto____4652))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4652;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4653 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4653))
{return or__3548__auto____4653;
} else
{var or__3548__auto____4654 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4654))
{return or__3548__auto____4654;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4655 = mf;

if(cljs.core.truth_(and__3546__auto____4655))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4655;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4656 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4656))
{return or__3548__auto____4656;
} else
{var or__3548__auto____4657 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4657))
{return or__3548__auto____4657;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4658 = mf;

if(cljs.core.truth_(and__3546__auto____4658))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4658;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4659 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4659))
{return or__3548__auto____4659;
} else
{var or__3548__auto____4660 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4660))
{return or__3548__auto____4660;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4661 = mf;

if(cljs.core.truth_(and__3546__auto____4661))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4661;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4662 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4662))
{return or__3548__auto____4662;
} else
{var or__3548__auto____4663 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4663))
{return or__3548__auto____4663;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4664 = mf;

if(cljs.core.truth_(and__3546__auto____4664))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4664;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4665 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4665))
{return or__3548__auto____4665;
} else
{var or__3548__auto____4666 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4666))
{return or__3548__auto____4666;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4667 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4668 = cljs.core._get_method.call(null,mf,dispatch_val__4667);

if(cljs.core.truth_(target_fn__4668))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4667)));
}
return cljs.core.apply.call(null,target_fn__4668,args);
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
var this__4669 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4670 = this;
cljs.core.swap_BANG_.call(null,this__4670.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4670.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4670.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4670.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4671 = this;
cljs.core.swap_BANG_.call(null,this__4671.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4671.method_cache,this__4671.method_table,this__4671.cached_hierarchy,this__4671.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4672 = this;
cljs.core.swap_BANG_.call(null,this__4672.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4672.method_cache,this__4672.method_table,this__4672.cached_hierarchy,this__4672.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4673 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4673.cached_hierarchy),cljs.core.deref.call(null,this__4673.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4673.method_cache,this__4673.method_table,this__4673.cached_hierarchy,this__4673.hierarchy);
}
var temp__3695__auto____4674 = cljs.core.deref.call(null,this__4673.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4674))
{var target_fn__4675 = temp__3695__auto____4674;

return target_fn__4675;
} else
{var temp__3695__auto____4676 = cljs.core.find_and_cache_best_method.call(null,this__4673.name,dispatch_val,this__4673.hierarchy,this__4673.method_table,this__4673.prefer_table,this__4673.method_cache,this__4673.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4676))
{var target_fn__4677 = temp__3695__auto____4676;

return target_fn__4677;
} else
{return cljs.core.deref.call(null,this__4673.method_table).call(null,this__4673.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4678 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4678.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4678.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4678.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4678.method_cache,this__4678.method_table,this__4678.cached_hierarchy,this__4678.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4679 = this;
return cljs.core.deref.call(null,this__4679.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4680 = this;
return cljs.core.deref.call(null,this__4680.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4681 = this;
return cljs.core.do_dispatch.call(null,mf,this__4681.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4682__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4682 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4682__delegate.call(this, _, args);
};
G__4682.cljs$lang$maxFixedArity = 1;
G__4682.cljs$lang$applyTo = (function (arglist__4683){
var _ = cljs.core.first(arglist__4683);
var args = cljs.core.rest(arglist__4683);
return G__4682__delegate.call(this, _, args);
});
return G__4682;
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
