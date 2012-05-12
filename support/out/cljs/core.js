goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf.call(null,x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error("No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
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
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return new Array(size);
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__4111__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__4111 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4111__delegate.call(this, array, i, idxs);
};
G__4111.cljs$lang$maxFixedArity = 2;
G__4111.cljs$lang$applyTo = (function (arglist__4112){
var array = cljs.core.first(arglist__4112);
var i = cljs.core.first(cljs.core.next(arglist__4112));
var idxs = cljs.core.rest(cljs.core.next(arglist__4112));
return G__4111__delegate(array, i, idxs);
});
G__4111.cljs$lang$arity$variadic = G__4111__delegate;
return G__4111;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____4113 = this$;
if(and__3822__auto____4113)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____4113;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____4114 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4114)
{return or__3824__auto____4114;
} else
{var or__3824__auto____4115 = (cljs.core._invoke["_"]);
if(or__3824__auto____4115)
{return or__3824__auto____4115;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____4116 = this$;
if(and__3822__auto____4116)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____4116;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____4117 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4117)
{return or__3824__auto____4117;
} else
{var or__3824__auto____4118 = (cljs.core._invoke["_"]);
if(or__3824__auto____4118)
{return or__3824__auto____4118;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____4119 = this$;
if(and__3822__auto____4119)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____4119;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____4120 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4120)
{return or__3824__auto____4120;
} else
{var or__3824__auto____4121 = (cljs.core._invoke["_"]);
if(or__3824__auto____4121)
{return or__3824__auto____4121;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____4122 = this$;
if(and__3822__auto____4122)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____4122;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____4123 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4123)
{return or__3824__auto____4123;
} else
{var or__3824__auto____4124 = (cljs.core._invoke["_"]);
if(or__3824__auto____4124)
{return or__3824__auto____4124;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____4125 = this$;
if(and__3822__auto____4125)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____4125;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____4126 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4126)
{return or__3824__auto____4126;
} else
{var or__3824__auto____4127 = (cljs.core._invoke["_"]);
if(or__3824__auto____4127)
{return or__3824__auto____4127;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____4128 = this$;
if(and__3822__auto____4128)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____4128;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____4129 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4129)
{return or__3824__auto____4129;
} else
{var or__3824__auto____4130 = (cljs.core._invoke["_"]);
if(or__3824__auto____4130)
{return or__3824__auto____4130;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____4131 = this$;
if(and__3822__auto____4131)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____4131;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____4132 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4132)
{return or__3824__auto____4132;
} else
{var or__3824__auto____4133 = (cljs.core._invoke["_"]);
if(or__3824__auto____4133)
{return or__3824__auto____4133;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____4134 = this$;
if(and__3822__auto____4134)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____4134;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____4135 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4135)
{return or__3824__auto____4135;
} else
{var or__3824__auto____4136 = (cljs.core._invoke["_"]);
if(or__3824__auto____4136)
{return or__3824__auto____4136;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____4137 = this$;
if(and__3822__auto____4137)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____4137;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____4138 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4138)
{return or__3824__auto____4138;
} else
{var or__3824__auto____4139 = (cljs.core._invoke["_"]);
if(or__3824__auto____4139)
{return or__3824__auto____4139;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____4140 = this$;
if(and__3822__auto____4140)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____4140;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____4141 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4141)
{return or__3824__auto____4141;
} else
{var or__3824__auto____4142 = (cljs.core._invoke["_"]);
if(or__3824__auto____4142)
{return or__3824__auto____4142;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____4143 = this$;
if(and__3822__auto____4143)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____4143;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____4144 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4144)
{return or__3824__auto____4144;
} else
{var or__3824__auto____4145 = (cljs.core._invoke["_"]);
if(or__3824__auto____4145)
{return or__3824__auto____4145;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____4146 = this$;
if(and__3822__auto____4146)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____4146;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____4147 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4147)
{return or__3824__auto____4147;
} else
{var or__3824__auto____4148 = (cljs.core._invoke["_"]);
if(or__3824__auto____4148)
{return or__3824__auto____4148;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____4149 = this$;
if(and__3822__auto____4149)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____4149;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____4150 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4150)
{return or__3824__auto____4150;
} else
{var or__3824__auto____4151 = (cljs.core._invoke["_"]);
if(or__3824__auto____4151)
{return or__3824__auto____4151;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____4152 = this$;
if(and__3822__auto____4152)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____4152;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____4153 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4153)
{return or__3824__auto____4153;
} else
{var or__3824__auto____4154 = (cljs.core._invoke["_"]);
if(or__3824__auto____4154)
{return or__3824__auto____4154;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____4155 = this$;
if(and__3822__auto____4155)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____4155;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____4156 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4156)
{return or__3824__auto____4156;
} else
{var or__3824__auto____4157 = (cljs.core._invoke["_"]);
if(or__3824__auto____4157)
{return or__3824__auto____4157;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____4158 = this$;
if(and__3822__auto____4158)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____4158;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____4159 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4159)
{return or__3824__auto____4159;
} else
{var or__3824__auto____4160 = (cljs.core._invoke["_"]);
if(or__3824__auto____4160)
{return or__3824__auto____4160;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____4161 = this$;
if(and__3822__auto____4161)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____4161;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____4162 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4162)
{return or__3824__auto____4162;
} else
{var or__3824__auto____4163 = (cljs.core._invoke["_"]);
if(or__3824__auto____4163)
{return or__3824__auto____4163;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____4164 = this$;
if(and__3822__auto____4164)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____4164;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____4165 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4165)
{return or__3824__auto____4165;
} else
{var or__3824__auto____4166 = (cljs.core._invoke["_"]);
if(or__3824__auto____4166)
{return or__3824__auto____4166;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____4167 = this$;
if(and__3822__auto____4167)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____4167;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____4168 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4168)
{return or__3824__auto____4168;
} else
{var or__3824__auto____4169 = (cljs.core._invoke["_"]);
if(or__3824__auto____4169)
{return or__3824__auto____4169;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____4170 = this$;
if(and__3822__auto____4170)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____4170;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____4171 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4171)
{return or__3824__auto____4171;
} else
{var or__3824__auto____4172 = (cljs.core._invoke["_"]);
if(or__3824__auto____4172)
{return or__3824__auto____4172;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____4173 = this$;
if(and__3822__auto____4173)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____4173;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____4174 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4174)
{return or__3824__auto____4174;
} else
{var or__3824__auto____4175 = (cljs.core._invoke["_"]);
if(or__3824__auto____4175)
{return or__3824__auto____4175;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____4176 = coll;
if(and__3822__auto____4176)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____4176;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____4177 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4177)
{return or__3824__auto____4177;
} else
{var or__3824__auto____4178 = (cljs.core._count["_"]);
if(or__3824__auto____4178)
{return or__3824__auto____4178;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____4179 = coll;
if(and__3822__auto____4179)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____4179;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____4180 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4180)
{return or__3824__auto____4180;
} else
{var or__3824__auto____4181 = (cljs.core._empty["_"]);
if(or__3824__auto____4181)
{return or__3824__auto____4181;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____4182 = coll;
if(and__3822__auto____4182)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____4182;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____4183 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4183)
{return or__3824__auto____4183;
} else
{var or__3824__auto____4184 = (cljs.core._conj["_"]);
if(or__3824__auto____4184)
{return or__3824__auto____4184;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____4185 = coll;
if(and__3822__auto____4185)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____4185;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____4186 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4186)
{return or__3824__auto____4186;
} else
{var or__3824__auto____4187 = (cljs.core._nth["_"]);
if(or__3824__auto____4187)
{return or__3824__auto____4187;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____4188 = coll;
if(and__3822__auto____4188)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____4188;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____4189 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4189)
{return or__3824__auto____4189;
} else
{var or__3824__auto____4190 = (cljs.core._nth["_"]);
if(or__3824__auto____4190)
{return or__3824__auto____4190;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____4191 = coll;
if(and__3822__auto____4191)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____4191;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____4192 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4192)
{return or__3824__auto____4192;
} else
{var or__3824__auto____4193 = (cljs.core._first["_"]);
if(or__3824__auto____4193)
{return or__3824__auto____4193;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____4194 = coll;
if(and__3822__auto____4194)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____4194;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____4195 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4195)
{return or__3824__auto____4195;
} else
{var or__3824__auto____4196 = (cljs.core._rest["_"]);
if(or__3824__auto____4196)
{return or__3824__auto____4196;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____4197 = o;
if(and__3822__auto____4197)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____4197;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____4198 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3824__auto____4198)
{return or__3824__auto____4198;
} else
{var or__3824__auto____4199 = (cljs.core._lookup["_"]);
if(or__3824__auto____4199)
{return or__3824__auto____4199;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____4200 = o;
if(and__3822__auto____4200)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____4200;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____4201 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3824__auto____4201)
{return or__3824__auto____4201;
} else
{var or__3824__auto____4202 = (cljs.core._lookup["_"]);
if(or__3824__auto____4202)
{return or__3824__auto____4202;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____4203 = coll;
if(and__3822__auto____4203)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____4203;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____4204 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4204)
{return or__3824__auto____4204;
} else
{var or__3824__auto____4205 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____4205)
{return or__3824__auto____4205;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____4206 = coll;
if(and__3822__auto____4206)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____4206;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____4207 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4207)
{return or__3824__auto____4207;
} else
{var or__3824__auto____4208 = (cljs.core._assoc["_"]);
if(or__3824__auto____4208)
{return or__3824__auto____4208;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____4209 = coll;
if(and__3822__auto____4209)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____4209;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____4210 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4210)
{return or__3824__auto____4210;
} else
{var or__3824__auto____4211 = (cljs.core._dissoc["_"]);
if(or__3824__auto____4211)
{return or__3824__auto____4211;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____4212 = coll;
if(and__3822__auto____4212)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____4212;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____4213 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4213)
{return or__3824__auto____4213;
} else
{var or__3824__auto____4214 = (cljs.core._key["_"]);
if(or__3824__auto____4214)
{return or__3824__auto____4214;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____4215 = coll;
if(and__3822__auto____4215)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____4215;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____4216 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4216)
{return or__3824__auto____4216;
} else
{var or__3824__auto____4217 = (cljs.core._val["_"]);
if(or__3824__auto____4217)
{return or__3824__auto____4217;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____4218 = coll;
if(and__3822__auto____4218)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____4218;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____4219 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4219)
{return or__3824__auto____4219;
} else
{var or__3824__auto____4220 = (cljs.core._disjoin["_"]);
if(or__3824__auto____4220)
{return or__3824__auto____4220;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____4221 = coll;
if(and__3822__auto____4221)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____4221;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____4222 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4222)
{return or__3824__auto____4222;
} else
{var or__3824__auto____4223 = (cljs.core._peek["_"]);
if(or__3824__auto____4223)
{return or__3824__auto____4223;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____4224 = coll;
if(and__3822__auto____4224)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____4224;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____4225 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4225)
{return or__3824__auto____4225;
} else
{var or__3824__auto____4226 = (cljs.core._pop["_"]);
if(or__3824__auto____4226)
{return or__3824__auto____4226;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____4227 = coll;
if(and__3822__auto____4227)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____4227;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____4228 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4228)
{return or__3824__auto____4228;
} else
{var or__3824__auto____4229 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____4229)
{return or__3824__auto____4229;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____4230 = o;
if(and__3822__auto____4230)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____4230;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____4231 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3824__auto____4231)
{return or__3824__auto____4231;
} else
{var or__3824__auto____4232 = (cljs.core._deref["_"]);
if(or__3824__auto____4232)
{return or__3824__auto____4232;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____4233 = o;
if(and__3822__auto____4233)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____4233;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____4234 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3824__auto____4234)
{return or__3824__auto____4234;
} else
{var or__3824__auto____4235 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____4235)
{return or__3824__auto____4235;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____4236 = o;
if(and__3822__auto____4236)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____4236;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____4237 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3824__auto____4237)
{return or__3824__auto____4237;
} else
{var or__3824__auto____4238 = (cljs.core._meta["_"]);
if(or__3824__auto____4238)
{return or__3824__auto____4238;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____4239 = o;
if(and__3822__auto____4239)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____4239;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____4240 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3824__auto____4240)
{return or__3824__auto____4240;
} else
{var or__3824__auto____4241 = (cljs.core._with_meta["_"]);
if(or__3824__auto____4241)
{return or__3824__auto____4241;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____4242 = coll;
if(and__3822__auto____4242)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____4242;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____4243 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4243)
{return or__3824__auto____4243;
} else
{var or__3824__auto____4244 = (cljs.core._reduce["_"]);
if(or__3824__auto____4244)
{return or__3824__auto____4244;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____4245 = coll;
if(and__3822__auto____4245)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____4245;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____4246 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4246)
{return or__3824__auto____4246;
} else
{var or__3824__auto____4247 = (cljs.core._reduce["_"]);
if(or__3824__auto____4247)
{return or__3824__auto____4247;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____4248 = coll;
if(and__3822__auto____4248)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____4248;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____4249 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4249)
{return or__3824__auto____4249;
} else
{var or__3824__auto____4250 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____4250)
{return or__3824__auto____4250;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____4251 = o;
if(and__3822__auto____4251)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____4251;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____4252 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3824__auto____4252)
{return or__3824__auto____4252;
} else
{var or__3824__auto____4253 = (cljs.core._equiv["_"]);
if(or__3824__auto____4253)
{return or__3824__auto____4253;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____4254 = o;
if(and__3822__auto____4254)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____4254;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____4255 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3824__auto____4255)
{return or__3824__auto____4255;
} else
{var or__3824__auto____4256 = (cljs.core._hash["_"]);
if(or__3824__auto____4256)
{return or__3824__auto____4256;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____4257 = o;
if(and__3822__auto____4257)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____4257;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____4258 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3824__auto____4258)
{return or__3824__auto____4258;
} else
{var or__3824__auto____4259 = (cljs.core._seq["_"]);
if(or__3824__auto____4259)
{return or__3824__auto____4259;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____4260 = coll;
if(and__3822__auto____4260)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____4260;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____4261 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4261)
{return or__3824__auto____4261;
} else
{var or__3824__auto____4262 = (cljs.core._rseq["_"]);
if(or__3824__auto____4262)
{return or__3824__auto____4262;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____4263 = coll;
if(and__3822__auto____4263)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____4263;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____4264 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4264)
{return or__3824__auto____4264;
} else
{var or__3824__auto____4265 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____4265)
{return or__3824__auto____4265;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____4266 = coll;
if(and__3822__auto____4266)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____4266;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____4267 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4267)
{return or__3824__auto____4267;
} else
{var or__3824__auto____4268 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____4268)
{return or__3824__auto____4268;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____4269 = coll;
if(and__3822__auto____4269)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____4269;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____4270 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4270)
{return or__3824__auto____4270;
} else
{var or__3824__auto____4271 = (cljs.core._entry_key["_"]);
if(or__3824__auto____4271)
{return or__3824__auto____4271;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____4272 = coll;
if(and__3822__auto____4272)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____4272;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____4273 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4273)
{return or__3824__auto____4273;
} else
{var or__3824__auto____4274 = (cljs.core._comparator["_"]);
if(or__3824__auto____4274)
{return or__3824__auto____4274;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____4275 = o;
if(and__3822__auto____4275)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____4275;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____4276 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3824__auto____4276)
{return or__3824__auto____4276;
} else
{var or__3824__auto____4277 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____4277)
{return or__3824__auto____4277;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____4278 = d;
if(and__3822__auto____4278)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____4278;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____4279 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3824__auto____4279)
{return or__3824__auto____4279;
} else
{var or__3824__auto____4280 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____4280)
{return or__3824__auto____4280;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____4281 = this$;
if(and__3822__auto____4281)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____4281;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____4282 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4282)
{return or__3824__auto____4282;
} else
{var or__3824__auto____4283 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____4283)
{return or__3824__auto____4283;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____4284 = this$;
if(and__3822__auto____4284)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____4284;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____4285 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4285)
{return or__3824__auto____4285;
} else
{var or__3824__auto____4286 = (cljs.core._add_watch["_"]);
if(or__3824__auto____4286)
{return or__3824__auto____4286;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____4287 = this$;
if(and__3822__auto____4287)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____4287;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____4288 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4288)
{return or__3824__auto____4288;
} else
{var or__3824__auto____4289 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____4289)
{return or__3824__auto____4289;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____4290 = coll;
if(and__3822__auto____4290)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____4290;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____4291 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4291)
{return or__3824__auto____4291;
} else
{var or__3824__auto____4292 = (cljs.core._as_transient["_"]);
if(or__3824__auto____4292)
{return or__3824__auto____4292;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____4293 = tcoll;
if(and__3822__auto____4293)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____4293;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____4294 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____4294)
{return or__3824__auto____4294;
} else
{var or__3824__auto____4295 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____4295)
{return or__3824__auto____4295;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____4296 = tcoll;
if(and__3822__auto____4296)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____4296;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____4297 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____4297)
{return or__3824__auto____4297;
} else
{var or__3824__auto____4298 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____4298)
{return or__3824__auto____4298;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____4299 = tcoll;
if(and__3822__auto____4299)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____4299;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____4300 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____4300)
{return or__3824__auto____4300;
} else
{var or__3824__auto____4301 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____4301)
{return or__3824__auto____4301;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____4302 = tcoll;
if(and__3822__auto____4302)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____4302;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____4303 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____4303)
{return or__3824__auto____4303;
} else
{var or__3824__auto____4304 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____4304)
{return or__3824__auto____4304;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____4305 = tcoll;
if(and__3822__auto____4305)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____4305;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____4306 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____4306)
{return or__3824__auto____4306;
} else
{var or__3824__auto____4307 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____4307)
{return or__3824__auto____4307;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____4308 = tcoll;
if(and__3822__auto____4308)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____4308;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____4309 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____4309)
{return or__3824__auto____4309;
} else
{var or__3824__auto____4310 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____4310)
{return or__3824__auto____4310;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____4311 = tcoll;
if(and__3822__auto____4311)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____4311;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____4312 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____4312)
{return or__3824__auto____4312;
} else
{var or__3824__auto____4313 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____4313)
{return or__3824__auto____4313;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____4314 = (x === y);
if(or__3824__auto____4314)
{return or__3824__auto____4314;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__4315__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4316 = y;
var G__4317 = cljs.core.first.call(null,more);
var G__4318 = cljs.core.next.call(null,more);
x = G__4316;
y = G__4317;
more = G__4318;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4315 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4315__delegate.call(this, x, y, more);
};
G__4315.cljs$lang$maxFixedArity = 2;
G__4315.cljs$lang$applyTo = (function (arglist__4319){
var x = cljs.core.first(arglist__4319);
var y = cljs.core.first(cljs.core.next(arglist__4319));
var more = cljs.core.rest(cljs.core.next(arglist__4319));
return G__4315__delegate(x, y, more);
});
G__4315.cljs$lang$arity$variadic = G__4315__delegate;
return G__4315;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((function (){var or__3824__auto____4320 = (x == null);
if(or__3824__auto____4320)
{return or__3824__auto____4320;
} else
{return (void 0 === x);
}
})())
{return null;
} else
{return (x).constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__4321 = null;
var G__4321__2 = (function (o,k){
return null;
});
var G__4321__3 = (function (o,k,not_found){
return not_found;
});
G__4321 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__4321__2.call(this,o,k);
case 3:
return G__4321__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4321;
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
var G__4322 = null;
var G__4322__2 = (function (_,f){
return f.call(null);
});
var G__4322__3 = (function (_,f,start){
return start;
});
G__4322 = function(_,f,start){
switch(arguments.length){
case 2:
return G__4322__2.call(this,_,f);
case 3:
return G__4322__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4322;
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
return (o == null);
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
var G__4323 = null;
var G__4323__2 = (function (_,n){
return null;
});
var G__4323__3 = (function (_,n,not_found){
return not_found;
});
G__4323 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__4323__2.call(this,_,n);
case 3:
return G__4323__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4323;
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
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
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
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
if((cljs.core._count.call(null,cicoll) === 0))
{return f.call(null);
} else
{var val__4324 = cljs.core._nth.call(null,cicoll,0);
var n__4325 = 1;
while(true){
if((n__4325 < cljs.core._count.call(null,cicoll)))
{var nval__4326 = f.call(null,val__4324,cljs.core._nth.call(null,cicoll,n__4325));
if(cljs.core.reduced_QMARK_.call(null,nval__4326))
{return cljs.core.deref.call(null,nval__4326);
} else
{{
var G__4333 = nval__4326;
var G__4334 = (n__4325 + 1);
val__4324 = G__4333;
n__4325 = G__4334;
continue;
}
}
} else
{return val__4324;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__4327 = val;
var n__4328 = 0;
while(true){
if((n__4328 < cljs.core._count.call(null,cicoll)))
{var nval__4329 = f.call(null,val__4327,cljs.core._nth.call(null,cicoll,n__4328));
if(cljs.core.reduced_QMARK_.call(null,nval__4329))
{return cljs.core.deref.call(null,nval__4329);
} else
{{
var G__4335 = nval__4329;
var G__4336 = (n__4328 + 1);
val__4327 = G__4335;
n__4328 = G__4336;
continue;
}
}
} else
{return val__4327;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__4330 = val;
var n__4331 = idx;
while(true){
if((n__4331 < cljs.core._count.call(null,cicoll)))
{var nval__4332 = f.call(null,val__4330,cljs.core._nth.call(null,cicoll,n__4331));
if(cljs.core.reduced_QMARK_.call(null,nval__4332))
{return cljs.core.deref.call(null,nval__4332);
} else
{{
var G__4337 = nval__4332;
var G__4338 = (n__4331 + 1);
val__4330 = G__4337;
n__4331 = G__4338;
continue;
}
}
} else
{return val__4330;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15990906;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__4339 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__4340 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__4341 = this;
var this$__4342 = this;
return cljs.core.pr_str.call(null,this$__4342);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__4343 = this;
if(cljs.core.counted_QMARK_.call(null,this__4343.a))
{return cljs.core.ci_reduce.call(null,this__4343.a,f,(this__4343.a[this__4343.i]),(this__4343.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__4343.a[this__4343.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__4344 = this;
if(cljs.core.counted_QMARK_.call(null,this__4344.a))
{return cljs.core.ci_reduce.call(null,this__4344.a,f,start,this__4344.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__4345 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__4346 = this;
return (this__4346.a.length - this__4346.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__4347 = this;
return (this__4347.a[this__4347.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__4348 = this;
if(((this__4348.i + 1) < this__4348.a.length))
{return (new cljs.core.IndexedSeq(this__4348.a,(this__4348.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__4349 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__4350 = this;
var i__4351 = (n + this__4350.i);
if((i__4351 < this__4350.a.length))
{return (this__4350.a[i__4351]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__4352 = this;
var i__4353 = (n + this__4352.i);
if((i__4353 < this__4352.a.length))
{return (this__4352.a[i__4353]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__4354 = null;
var G__4354__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__4354__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__4354 = function(array,f,start){
switch(arguments.length){
case 2:
return G__4354__2.call(this,array,f);
case 3:
return G__4354__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4354;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__4355 = null;
var G__4355__2 = (function (array,k){
return (array[k]);
});
var G__4355__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__4355 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__4355__2.call(this,array,k);
case 3:
return G__4355__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4355;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__4356 = null;
var G__4356__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__4356__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__4356 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__4356__2.call(this,array,n);
case 3:
return G__4356__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4356;
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
if((coll != null))
{if((function (){var G__4357__4358 = coll;
if((G__4357__4358 != null))
{if((function (){var or__3824__auto____4359 = (G__4357__4358.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____4359)
{return or__3824__auto____4359;
} else
{return G__4357__4358.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__4357__4358.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__4357__4358);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__4357__4358);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll != null))
{if((function (){var G__4360__4361 = coll;
if((G__4360__4361 != null))
{if((function (){var or__3824__auto____4362 = (G__4360__4361.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____4362)
{return or__3824__auto____4362;
} else
{return G__4360__4361.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4360__4361.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4360__4361);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4360__4361);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__4363 = cljs.core.seq.call(null,coll);
if((s__4363 != null))
{return cljs.core._first.call(null,s__4363);
} else
{return null;
}
}
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if((coll != null))
{if((function (){var G__4364__4365 = coll;
if((G__4364__4365 != null))
{if((function (){var or__3824__auto____4366 = (G__4364__4365.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____4366)
{return or__3824__auto____4366;
} else
{return G__4364__4365.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4364__4365.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4364__4365);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4364__4365);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__4367 = cljs.core.seq.call(null,coll);
if((s__4367 != null))
{return cljs.core._rest.call(null,s__4367);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll != null))
{if((function (){var G__4368__4369 = coll;
if((G__4368__4369 != null))
{if((function (){var or__3824__auto____4370 = (G__4368__4369.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____4370)
{return or__3824__auto____4370;
} else
{return G__4368__4369.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4368__4369.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4368__4369);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4368__4369);
}
})())
{var coll__4371 = cljs.core._rest.call(null,coll);
if((coll__4371 != null))
{if((function (){var G__4372__4373 = coll__4371;
if((G__4372__4373 != null))
{if((function (){var or__3824__auto____4374 = (G__4372__4373.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____4374)
{return or__3824__auto____4374;
} else
{return G__4372__4373.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__4372__4373.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__4372__4373);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__4372__4373);
}
})())
{return coll__4371;
} else
{return cljs.core._seq.call(null,coll__4371);
}
} else
{return null;
}
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
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
var G__4375 = cljs.core.next.call(null,s);
s = G__4375;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
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
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__4376__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__4377 = conj.call(null,coll,x);
var G__4378 = cljs.core.first.call(null,xs);
var G__4379 = cljs.core.next.call(null,xs);
coll = G__4377;
x = G__4378;
xs = G__4379;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__4376 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4376__delegate.call(this, coll, x, xs);
};
G__4376.cljs$lang$maxFixedArity = 2;
G__4376.cljs$lang$applyTo = (function (arglist__4380){
var coll = cljs.core.first(arglist__4380);
var x = cljs.core.first(cljs.core.next(arglist__4380));
var xs = cljs.core.rest(cljs.core.next(arglist__4380));
return G__4376__delegate(coll, x, xs);
});
G__4376.cljs$lang$arity$variadic = G__4376__delegate;
return G__4376;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll,acc){
while(true){
if(cljs.core.counted_QMARK_.call(null,coll))
{return (acc + cljs.core._count.call(null,coll));
} else
{{
var G__4381 = cljs.core.next.call(null,coll);
var G__4382 = (acc + 1);
coll = G__4381;
acc = G__4382;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll,0);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((function (){var G__4383__4384 = coll;
if((G__4383__4384 != null))
{if((function (){var or__3824__auto____4385 = (G__4383__4384.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____4385)
{return or__3824__auto____4385;
} else
{return G__4383__4384.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__4383__4384.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__4383__4384);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__4383__4384);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
});
var nth__3 = (function (coll,n,not_found){
if((function (){var G__4386__4387 = coll;
if((G__4386__4387 != null))
{if((function (){var or__3824__auto____4388 = (G__4386__4387.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____4388)
{return or__3824__auto____4388;
} else
{return G__4386__4387.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__4386__4387.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__4386__4387);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__4386__4387);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
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
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__4390__delegate = function (coll,k,v,kvs){
while(true){
var ret__4389 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__4391 = ret__4389;
var G__4392 = cljs.core.first.call(null,kvs);
var G__4393 = cljs.core.second.call(null,kvs);
var G__4394 = cljs.core.nnext.call(null,kvs);
coll = G__4391;
k = G__4392;
v = G__4393;
kvs = G__4394;
continue;
}
} else
{return ret__4389;
}
break;
}
};
var G__4390 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4390__delegate.call(this, coll, k, v, kvs);
};
G__4390.cljs$lang$maxFixedArity = 3;
G__4390.cljs$lang$applyTo = (function (arglist__4395){
var coll = cljs.core.first(arglist__4395);
var k = cljs.core.first(cljs.core.next(arglist__4395));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4395)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4395)));
return G__4390__delegate(coll, k, v, kvs);
});
G__4390.cljs$lang$arity$variadic = G__4390__delegate;
return G__4390;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
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
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__4397__delegate = function (coll,k,ks){
while(true){
var ret__4396 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__4398 = ret__4396;
var G__4399 = cljs.core.first.call(null,ks);
var G__4400 = cljs.core.next.call(null,ks);
coll = G__4398;
k = G__4399;
ks = G__4400;
continue;
}
} else
{return ret__4396;
}
break;
}
};
var G__4397 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4397__delegate.call(this, coll, k, ks);
};
G__4397.cljs$lang$maxFixedArity = 2;
G__4397.cljs$lang$applyTo = (function (arglist__4401){
var coll = cljs.core.first(arglist__4401);
var k = cljs.core.first(cljs.core.next(arglist__4401));
var ks = cljs.core.rest(cljs.core.next(arglist__4401));
return G__4397__delegate(coll, k, ks);
});
G__4397.cljs$lang$arity$variadic = G__4397__delegate;
return G__4397;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
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
if((function (){var G__4402__4403 = o;
if((G__4402__4403 != null))
{if((function (){var or__3824__auto____4404 = (G__4402__4403.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3824__auto____4404)
{return or__3824__auto____4404;
} else
{return G__4402__4403.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__4402__4403.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__4402__4403);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__4402__4403);
}
})())
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
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__4406__delegate = function (coll,k,ks){
while(true){
var ret__4405 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__4407 = ret__4405;
var G__4408 = cljs.core.first.call(null,ks);
var G__4409 = cljs.core.next.call(null,ks);
coll = G__4407;
k = G__4408;
ks = G__4409;
continue;
}
} else
{return ret__4405;
}
break;
}
};
var G__4406 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4406__delegate.call(this, coll, k, ks);
};
G__4406.cljs$lang$maxFixedArity = 2;
G__4406.cljs$lang$applyTo = (function (arglist__4410){
var coll = cljs.core.first(arglist__4410);
var k = cljs.core.first(cljs.core.next(arglist__4410));
var ks = cljs.core.rest(cljs.core.next(arglist__4410));
return G__4406__delegate(coll, k, ks);
});
G__4406.cljs$lang$arity$variadic = G__4406__delegate;
return G__4406;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
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
if((x == null))
{return false;
} else
{var G__4411__4412 = x;
if((G__4411__4412 != null))
{if((function (){var or__3824__auto____4413 = (G__4411__4412.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____4413)
{return or__3824__auto____4413;
} else
{return G__4411__4412.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__4411__4412.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__4411__4412);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__4411__4412);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__4414__4415 = x;
if((G__4414__4415 != null))
{if((function (){var or__3824__auto____4416 = (G__4414__4415.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____4416)
{return or__3824__auto____4416;
} else
{return G__4414__4415.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__4414__4415.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__4414__4415);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__4414__4415);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__4417__4418 = x;
if((G__4417__4418 != null))
{if((function (){var or__3824__auto____4419 = (G__4417__4418.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3824__auto____4419)
{return or__3824__auto____4419;
} else
{return G__4417__4418.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__4417__4418.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__4417__4418);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__4417__4418);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__4420__4421 = x;
if((G__4420__4421 != null))
{if((function (){var or__3824__auto____4422 = (G__4420__4421.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____4422)
{return or__3824__auto____4422;
} else
{return G__4420__4421.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__4420__4421.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__4420__4421);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__4420__4421);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__4423__4424 = x;
if((G__4423__4424 != null))
{if((function (){var or__3824__auto____4425 = (G__4423__4424.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____4425)
{return or__3824__auto____4425;
} else
{return G__4423__4424.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__4423__4424.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__4423__4424);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__4423__4424);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__4426__4427 = x;
if((G__4426__4427 != null))
{if((function (){var or__3824__auto____4428 = (G__4426__4427.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____4428)
{return or__3824__auto____4428;
} else
{return G__4426__4427.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__4426__4427.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__4426__4427);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__4426__4427);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__4429__4430 = x;
if((G__4429__4430 != null))
{if((function (){var or__3824__auto____4431 = (G__4429__4430.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____4431)
{return or__3824__auto____4431;
} else
{return G__4429__4430.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__4429__4430.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__4429__4430);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__4429__4430);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__4432__4433 = x;
if((G__4432__4433 != null))
{if((function (){var or__3824__auto____4434 = (G__4432__4433.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____4434)
{return or__3824__auto____4434;
} else
{return G__4432__4433.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__4432__4433.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__4432__4433);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__4432__4433);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__4435__4436 = x;
if((G__4435__4436 != null))
{if((function (){var or__3824__auto____4437 = (G__4435__4436.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3824__auto____4437)
{return or__3824__auto____4437;
} else
{return G__4435__4436.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__4435__4436.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__4435__4436);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__4435__4436);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__4438__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__4438 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4438__delegate.call(this, keyvals);
};
G__4438.cljs$lang$maxFixedArity = 0;
G__4438.cljs$lang$applyTo = (function (arglist__4439){
var keyvals = cljs.core.seq(arglist__4439);;
return G__4438__delegate(keyvals);
});
G__4438.cljs$lang$arity$variadic = G__4438__delegate;
return G__4438;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__4440 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__4440.push(key);
}));
return keys__4440;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__4441 = i;
var j__4442 = j;
var len__4443 = len;
while(true){
if((len__4443 === 0))
{return to;
} else
{(to[j__4442] = (from[i__4441]));
{
var G__4444 = (i__4441 + 1);
var G__4445 = (j__4442 + 1);
var G__4446 = (len__4443 - 1);
i__4441 = G__4444;
j__4442 = G__4445;
len__4443 = G__4446;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__4447 = (i + (len - 1));
var j__4448 = (j + (len - 1));
var len__4449 = len;
while(true){
if((len__4449 === 0))
{return to;
} else
{(to[j__4448] = (from[i__4447]));
{
var G__4450 = (i__4447 - 1);
var G__4451 = (j__4448 - 1);
var G__4452 = (len__4449 - 1);
i__4447 = G__4450;
j__4448 = G__4451;
len__4449 = G__4452;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
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
if((s == null))
{return false;
} else
{var G__4453__4454 = s;
if((G__4453__4454 != null))
{if((function (){var or__3824__auto____4455 = (G__4453__4454.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____4455)
{return or__3824__auto____4455;
} else
{return G__4453__4454.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4453__4454.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4453__4454);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4453__4454);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__4456__4457 = s;
if((G__4456__4457 != null))
{if((function (){var or__3824__auto____4458 = (G__4456__4457.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3824__auto____4458)
{return or__3824__auto____4458;
} else
{return G__4456__4457.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__4456__4457.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__4456__4457);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__4456__4457);
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
var and__3822__auto____4459 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____4459))
{return cljs.core.not.call(null,(function (){var or__3824__auto____4460 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____4460)
{return or__3824__auto____4460;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____4459;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____4461 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____4461))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____4461;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____4462 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____4462))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____4462;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____4463 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____4463)
{return or__3824__auto____4463;
} else
{var G__4464__4465 = f;
if((G__4464__4465 != null))
{if((function (){var or__3824__auto____4466 = (G__4464__4465.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____4466)
{return or__3824__auto____4466;
} else
{return G__4464__4465.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__4464__4465.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__4464__4465);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__4464__4465);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____4467 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____4467)
{return (n == n.toFixed());
} else
{return and__3822__auto____4467;
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
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____4468 = coll;
if(cljs.core.truth_(and__3822__auto____4468))
{var and__3822__auto____4469 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____4469)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____4469;
}
} else
{return and__3822__auto____4468;
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
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__4474__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__4470 = cljs.core.set([y,x]);
var xs__4471 = more;
while(true){
var x__4472 = cljs.core.first.call(null,xs__4471);
var etc__4473 = cljs.core.next.call(null,xs__4471);
if(cljs.core.truth_(xs__4471))
{if(cljs.core.contains_QMARK_.call(null,s__4470,x__4472))
{return false;
} else
{{
var G__4475 = cljs.core.conj.call(null,s__4470,x__4472);
var G__4476 = etc__4473;
s__4470 = G__4475;
xs__4471 = G__4476;
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
var G__4474 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4474__delegate.call(this, x, y, more);
};
G__4474.cljs$lang$maxFixedArity = 2;
G__4474.cljs$lang$applyTo = (function (arglist__4477){
var x = cljs.core.first(arglist__4477);
var y = cljs.core.first(cljs.core.next(arglist__4477));
var more = cljs.core.rest(cljs.core.next(arglist__4477));
return G__4474__delegate(x, y, more);
});
G__4474.cljs$lang$arity$variadic = G__4474__delegate;
return G__4474;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare for objects of the same type
* and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{return goog.array.defaultCompare.call(null,x,y);
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__4478 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__4478))
{return r__4478;
} else
{if(cljs.core.truth_(r__4478))
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
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__4479 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__4479,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__4479);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
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
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____4480 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____4480))
{var s__4481 = temp__3971__auto____4480;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__4481),cljs.core.next.call(null,s__4481));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__4482 = val;
var coll__4483 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__4483))
{var nval__4484 = f.call(null,val__4482,cljs.core.first.call(null,coll__4483));
if(cljs.core.reduced_QMARK_.call(null,nval__4484))
{return cljs.core.deref.call(null,nval__4484);
} else
{{
var G__4485 = nval__4484;
var G__4486 = cljs.core.next.call(null,coll__4483);
val__4482 = G__4485;
coll__4483 = G__4486;
continue;
}
}
} else
{return val__4482;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
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
var reduce__2 = (function (f,coll){
if((function (){var G__4487__4488 = coll;
if((G__4487__4488 != null))
{if((function (){var or__3824__auto____4489 = (G__4487__4488.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____4489)
{return or__3824__auto____4489;
} else
{return G__4487__4488.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__4487__4488.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__4487__4488);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__4487__4488);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__4490__4491 = coll;
if((G__4490__4491 != null))
{if((function (){var or__3824__auto____4492 = (G__4490__4491.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____4492)
{return or__3824__auto____4492;
} else
{return G__4490__4491.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__4490__4491.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__4490__4491);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__4490__4491);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16384;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$ = true;
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__4493 = this;
return this__4493.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__4494__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__4494 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4494__delegate.call(this, x, y, more);
};
G__4494.cljs$lang$maxFixedArity = 2;
G__4494.cljs$lang$applyTo = (function (arglist__4495){
var x = cljs.core.first(arglist__4495);
var y = cljs.core.first(cljs.core.next(arglist__4495));
var more = cljs.core.rest(cljs.core.next(arglist__4495));
return G__4494__delegate(x, y, more);
});
G__4494.cljs$lang$arity$variadic = G__4494__delegate;
return G__4494;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
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
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__4496__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__4496 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4496__delegate.call(this, x, y, more);
};
G__4496.cljs$lang$maxFixedArity = 2;
G__4496.cljs$lang$applyTo = (function (arglist__4497){
var x = cljs.core.first(arglist__4497);
var y = cljs.core.first(cljs.core.next(arglist__4497));
var more = cljs.core.rest(cljs.core.next(arglist__4497));
return G__4496__delegate(x, y, more);
});
G__4496.cljs$lang$arity$variadic = G__4496__delegate;
return G__4496;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__4498__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__4498 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4498__delegate.call(this, x, y, more);
};
G__4498.cljs$lang$maxFixedArity = 2;
G__4498.cljs$lang$applyTo = (function (arglist__4499){
var x = cljs.core.first(arglist__4499);
var y = cljs.core.first(cljs.core.next(arglist__4499));
var more = cljs.core.rest(cljs.core.next(arglist__4499));
return G__4498__delegate(x, y, more);
});
G__4498.cljs$lang$arity$variadic = G__4498__delegate;
return G__4498;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
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
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__4500__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__4500 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4500__delegate.call(this, x, y, more);
};
G__4500.cljs$lang$maxFixedArity = 2;
G__4500.cljs$lang$applyTo = (function (arglist__4501){
var x = cljs.core.first(arglist__4501);
var y = cljs.core.first(cljs.core.next(arglist__4501));
var more = cljs.core.rest(cljs.core.next(arglist__4501));
return G__4500__delegate(x, y, more);
});
G__4500.cljs$lang$arity$variadic = G__4500__delegate;
return G__4500;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
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
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__4502__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4503 = y;
var G__4504 = cljs.core.first.call(null,more);
var G__4505 = cljs.core.next.call(null,more);
x = G__4503;
y = G__4504;
more = G__4505;
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
var G__4502 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4502__delegate.call(this, x, y, more);
};
G__4502.cljs$lang$maxFixedArity = 2;
G__4502.cljs$lang$applyTo = (function (arglist__4506){
var x = cljs.core.first(arglist__4506);
var y = cljs.core.first(cljs.core.next(arglist__4506));
var more = cljs.core.rest(cljs.core.next(arglist__4506));
return G__4502__delegate(x, y, more);
});
G__4502.cljs$lang$arity$variadic = G__4502__delegate;
return G__4502;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
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
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__4507__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4508 = y;
var G__4509 = cljs.core.first.call(null,more);
var G__4510 = cljs.core.next.call(null,more);
x = G__4508;
y = G__4509;
more = G__4510;
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
var G__4507 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4507__delegate.call(this, x, y, more);
};
G__4507.cljs$lang$maxFixedArity = 2;
G__4507.cljs$lang$applyTo = (function (arglist__4511){
var x = cljs.core.first(arglist__4511);
var y = cljs.core.first(cljs.core.next(arglist__4511));
var more = cljs.core.rest(cljs.core.next(arglist__4511));
return G__4507__delegate(x, y, more);
});
G__4507.cljs$lang$arity$variadic = G__4507__delegate;
return G__4507;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
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
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__4512__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4513 = y;
var G__4514 = cljs.core.first.call(null,more);
var G__4515 = cljs.core.next.call(null,more);
x = G__4513;
y = G__4514;
more = G__4515;
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
var G__4512 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4512__delegate.call(this, x, y, more);
};
G__4512.cljs$lang$maxFixedArity = 2;
G__4512.cljs$lang$applyTo = (function (arglist__4516){
var x = cljs.core.first(arglist__4516);
var y = cljs.core.first(cljs.core.next(arglist__4516));
var more = cljs.core.rest(cljs.core.next(arglist__4516));
return G__4512__delegate(x, y, more);
});
G__4512.cljs$lang$arity$variadic = G__4512__delegate;
return G__4512;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
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
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__4517__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4518 = y;
var G__4519 = cljs.core.first.call(null,more);
var G__4520 = cljs.core.next.call(null,more);
x = G__4518;
y = G__4519;
more = G__4520;
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
var G__4517 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4517__delegate.call(this, x, y, more);
};
G__4517.cljs$lang$maxFixedArity = 2;
G__4517.cljs$lang$applyTo = (function (arglist__4521){
var x = cljs.core.first(arglist__4521);
var y = cljs.core.first(cljs.core.next(arglist__4521));
var more = cljs.core.rest(cljs.core.next(arglist__4521));
return G__4517__delegate(x, y, more);
});
G__4517.cljs$lang$arity$variadic = G__4517__delegate;
return G__4517;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
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
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__4522__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__4522 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4522__delegate.call(this, x, y, more);
};
G__4522.cljs$lang$maxFixedArity = 2;
G__4522.cljs$lang$applyTo = (function (arglist__4523){
var x = cljs.core.first(arglist__4523);
var y = cljs.core.first(cljs.core.next(arglist__4523));
var more = cljs.core.rest(cljs.core.next(arglist__4523));
return G__4522__delegate(x, y, more);
});
G__4522.cljs$lang$arity$variadic = G__4522__delegate;
return G__4522;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__4524__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__4524 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4524__delegate.call(this, x, y, more);
};
G__4524.cljs$lang$maxFixedArity = 2;
G__4524.cljs$lang$applyTo = (function (arglist__4525){
var x = cljs.core.first(arglist__4525);
var y = cljs.core.first(cljs.core.next(arglist__4525));
var more = cljs.core.rest(cljs.core.next(arglist__4525));
return G__4524__delegate(x, y, more);
});
G__4524.cljs$lang$arity$variadic = G__4524__delegate;
return G__4524;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
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
var rem__4526 = (n % d);
return cljs.core.fix.call(null,((n - rem__4526) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__4527 = cljs.core.quot.call(null,n,d);
return (n - (d * q__4527));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
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
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(n){
var c__4528 = 0;
var n__4529 = n;
while(true){
if((n__4529 === 0))
{return c__4528;
} else
{{
var G__4530 = (c__4528 + 1);
var G__4531 = (n__4529 & (n__4529 - 1));
c__4528 = G__4530;
n__4529 = G__4531;
continue;
}
}
break;
}
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__4532__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4533 = y;
var G__4534 = cljs.core.first.call(null,more);
var G__4535 = cljs.core.next.call(null,more);
x = G__4533;
y = G__4534;
more = G__4535;
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
var G__4532 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4532__delegate.call(this, x, y, more);
};
G__4532.cljs$lang$maxFixedArity = 2;
G__4532.cljs$lang$applyTo = (function (arglist__4536){
var x = cljs.core.first(arglist__4536);
var y = cljs.core.first(cljs.core.next(arglist__4536));
var more = cljs.core.rest(cljs.core.next(arglist__4536));
return G__4532__delegate(x, y, more);
});
G__4532.cljs$lang$arity$variadic = G__4532__delegate;
return G__4532;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
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
var n__4537 = n;
var xs__4538 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4539 = xs__4538;
if(cljs.core.truth_(and__3822__auto____4539))
{return (n__4537 > 0);
} else
{return and__3822__auto____4539;
}
})()))
{{
var G__4540 = (n__4537 - 1);
var G__4541 = cljs.core.next.call(null,xs__4538);
n__4537 = G__4540;
xs__4538 = G__4541;
continue;
}
} else
{return xs__4538;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__4542__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__4543 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__4544 = cljs.core.next.call(null,more);
sb = G__4543;
more = G__4544;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__4542 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4542__delegate.call(this, x, ys);
};
G__4542.cljs$lang$maxFixedArity = 1;
G__4542.cljs$lang$applyTo = (function (arglist__4545){
var x = cljs.core.first(arglist__4545);
var ys = cljs.core.rest(arglist__4545);
return G__4542__delegate(x, ys);
});
G__4542.cljs$lang$arity$variadic = G__4542__delegate;
return G__4542;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
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
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__4546__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__4547 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__4548 = cljs.core.next.call(null,more);
sb = G__4547;
more = G__4548;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__4546 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4546__delegate.call(this, x, ys);
};
G__4546.cljs$lang$maxFixedArity = 1;
G__4546.cljs$lang$applyTo = (function (arglist__4549){
var x = cljs.core.first(arglist__4549);
var ys = cljs.core.rest(arglist__4549);
return G__4546__delegate(x, ys);
});
G__4546.cljs$lang$arity$variadic = G__4546__delegate;
return G__4546;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__4550 = cljs.core.seq.call(null,x);
var ys__4551 = cljs.core.seq.call(null,y);
while(true){
if((xs__4550 == null))
{return (ys__4551 == null);
} else
{if((ys__4551 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__4550),cljs.core.first.call(null,ys__4551)))
{{
var G__4552 = cljs.core.next.call(null,xs__4550);
var G__4553 = cljs.core.next.call(null,ys__4551);
xs__4550 = G__4552;
ys__4551 = G__4553;
continue;
}
} else
{if("\uFDD0'else")
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
return cljs.core.reduce.call(null,(function (p1__4554_SHARP_,p2__4555_SHARP_){
return cljs.core.hash_combine.call(null,p1__4554_SHARP_,cljs.core.hash.call(null,p2__4555_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__4556 = 0;
var s__4557 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__4557))
{var e__4558 = cljs.core.first.call(null,s__4557);
{
var G__4559 = ((h__4556 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__4558)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__4558)))) % 4503599627370496);
var G__4560 = cljs.core.next.call(null,s__4557);
h__4556 = G__4559;
s__4557 = G__4560;
continue;
}
} else
{return h__4556;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__4561 = 0;
var s__4562 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__4562))
{var e__4563 = cljs.core.first.call(null,s__4562);
{
var G__4564 = ((h__4561 + cljs.core.hash.call(null,e__4563)) % 4503599627370496);
var G__4565 = cljs.core.next.call(null,s__4562);
h__4561 = G__4564;
s__4562 = G__4565;
continue;
}
} else
{return h__4561;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__4566__4567 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__4566__4567))
{var G__4569__4571 = cljs.core.first.call(null,G__4566__4567);
var vec__4570__4572 = G__4569__4571;
var key_name__4573 = cljs.core.nth.call(null,vec__4570__4572,0,null);
var f__4574 = cljs.core.nth.call(null,vec__4570__4572,1,null);
var G__4566__4575 = G__4566__4567;
var G__4569__4576 = G__4569__4571;
var G__4566__4577 = G__4566__4575;
while(true){
var vec__4578__4579 = G__4569__4576;
var key_name__4580 = cljs.core.nth.call(null,vec__4578__4579,0,null);
var f__4581 = cljs.core.nth.call(null,vec__4578__4579,1,null);
var G__4566__4582 = G__4566__4577;
var str_name__4583 = cljs.core.name.call(null,key_name__4580);
obj[str_name__4583] = f__4581;
var temp__3974__auto____4584 = cljs.core.next.call(null,G__4566__4582);
if(cljs.core.truth_(temp__3974__auto____4584))
{var G__4566__4585 = temp__3974__auto____4584;
{
var G__4586 = cljs.core.first.call(null,G__4566__4585);
var G__4587 = G__4566__4585;
G__4569__4576 = G__4586;
G__4566__4577 = G__4587;
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
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706670;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__4588 = this;
var h__264__auto____4589 = this__4588.__hash;
if((h__264__auto____4589 != null))
{return h__264__auto____4589;
} else
{var h__264__auto____4590 = cljs.core.hash_coll.call(null,coll);
this__4588.__hash = h__264__auto____4590;
return h__264__auto____4590;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__4591 = this;
return (new cljs.core.List(this__4591.meta,o,coll,(this__4591.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__4592 = this;
var this$__4593 = this;
return cljs.core.pr_str.call(null,this$__4593);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__4594 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__4595 = this;
return this__4595.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__4596 = this;
return this__4596.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__4597 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__4598 = this;
return this__4598.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__4599 = this;
return this__4599.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__4600 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__4601 = this;
return (new cljs.core.List(meta,this__4601.first,this__4601.rest,this__4601.count,this__4601.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__4602 = this;
return this__4602.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__4603 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706638;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__4604 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__4605 = this;
return (new cljs.core.List(this__4605.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__4606 = this;
var this$__4607 = this;
return cljs.core.pr_str.call(null,this$__4607);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__4608 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__4609 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__4610 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__4611 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__4612 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__4613 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__4614 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__4615 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__4616 = this;
return this__4616.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__4617 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__4618__4619 = coll;
if((G__4618__4619 != null))
{if((function (){var or__3824__auto____4620 = (G__4618__4619.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3824__auto____4620)
{return or__3824__auto____4620;
} else
{return G__4618__4619.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__4618__4619.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__4618__4619);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__4618__4619);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
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
list.cljs$lang$applyTo = (function (arglist__4621){
var items = cljs.core.seq(arglist__4621);;
return list__delegate(items);
});
list.cljs$lang$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32702572;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__4622 = this;
var h__264__auto____4623 = this__4622.__hash;
if((h__264__auto____4623 != null))
{return h__264__auto____4623;
} else
{var h__264__auto____4624 = cljs.core.hash_coll.call(null,coll);
this__4622.__hash = h__264__auto____4624;
return h__264__auto____4624;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__4625 = this;
return (new cljs.core.Cons(null,o,coll,this__4625.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__4626 = this;
var this$__4627 = this;
return cljs.core.pr_str.call(null,this$__4627);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__4628 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__4629 = this;
return this__4629.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__4630 = this;
if((this__4630.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__4630.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__4631 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__4632 = this;
return (new cljs.core.Cons(meta,this__4632.first,this__4632.rest,this__4632.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__4633 = this;
return this__4633.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__4634 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4634.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____4635 = (coll == null);
if(or__3824__auto____4635)
{return or__3824__auto____4635;
} else
{var G__4636__4637 = coll;
if((G__4636__4637 != null))
{if((function (){var or__3824__auto____4638 = (G__4636__4637.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____4638)
{return or__3824__auto____4638;
} else
{return G__4636__4637.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4636__4637.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4636__4637);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__4636__4637);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__4639__4640 = x;
if((G__4639__4640 != null))
{if((function (){var or__3824__auto____4641 = (G__4639__4640.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____4641)
{return or__3824__auto____4641;
} else
{return G__4639__4640.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__4639__4640.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__4639__4640);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__4639__4640);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__4642 = null;
var G__4642__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__4642__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__4642 = function(string,f,start){
switch(arguments.length){
case 2:
return G__4642__2.call(this,string,f);
case 3:
return G__4642__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4642;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__4643 = null;
var G__4643__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__4643__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__4643 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__4643__2.call(this,string,k);
case 3:
return G__4643__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4643;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__4644 = null;
var G__4644__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__4644__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__4644 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__4644__2.call(this,string,n);
case 3:
return G__4644__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4644;
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
var G__4653 = null;
var G__4653__2 = (function (tsym4647,coll){
var tsym4647__4649 = this;
var this$__4650 = tsym4647__4649;
return cljs.core.get.call(null,coll,this$__4650.toString());
});
var G__4653__3 = (function (tsym4648,coll,not_found){
var tsym4648__4651 = this;
var this$__4652 = tsym4648__4651;
return cljs.core.get.call(null,coll,this$__4652.toString(),not_found);
});
G__4653 = function(tsym4648,coll,not_found){
switch(arguments.length){
case 2:
return G__4653__2.call(this,tsym4648,coll);
case 3:
return G__4653__3.call(this,tsym4648,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4653;
})()
;
String.prototype.apply = (function (tsym4645,args4646){
return tsym4645.call.apply(tsym4645,[tsym4645].concat(cljs.core.aclone.call(null,args4646)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__4654 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__4654;
} else
{lazy_seq.x = x__4654.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__4655 = this;
var h__264__auto____4656 = this__4655.__hash;
if((h__264__auto____4656 != null))
{return h__264__auto____4656;
} else
{var h__264__auto____4657 = cljs.core.hash_coll.call(null,coll);
this__4655.__hash = h__264__auto____4657;
return h__264__auto____4657;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__4658 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__4659 = this;
var this$__4660 = this;
return cljs.core.pr_str.call(null,this$__4660);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__4661 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__4662 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__4663 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__4664 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__4665 = this;
return (new cljs.core.LazySeq(meta,this__4665.realized,this__4665.x,this__4665.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__4666 = this;
return this__4666.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__4667 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4667.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__4668 = [];
var s__4669 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4669)))
{ary__4668.push(cljs.core.first.call(null,s__4669));
{
var G__4670 = cljs.core.next.call(null,s__4669);
s__4669 = G__4670;
continue;
}
} else
{return ary__4668;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__4671 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__4672 = 0;
var xs__4673 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__4673))
{(ret__4671[i__4672] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__4673)));
{
var G__4674 = (i__4672 + 1);
var G__4675 = cljs.core.next.call(null,xs__4673);
i__4672 = G__4674;
xs__4673 = G__4675;
continue;
}
} else
{}
break;
}
return ret__4671;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__4676 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__4677 = cljs.core.seq.call(null,init_val_or_seq);
var i__4678 = 0;
var s__4679 = s__4677;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4680 = s__4679;
if(cljs.core.truth_(and__3822__auto____4680))
{return (i__4678 < size);
} else
{return and__3822__auto____4680;
}
})()))
{(a__4676[i__4678] = cljs.core.first.call(null,s__4679));
{
var G__4683 = (i__4678 + 1);
var G__4684 = cljs.core.next.call(null,s__4679);
i__4678 = G__4683;
s__4679 = G__4684;
continue;
}
} else
{return a__4676;
}
break;
}
} else
{var n__575__auto____4681 = size;
var i__4682 = 0;
while(true){
if((i__4682 < n__575__auto____4681))
{(a__4676[i__4682] = init_val_or_seq);
{
var G__4685 = (i__4682 + 1);
i__4682 = G__4685;
continue;
}
} else
{}
break;
}
return a__4676;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__4686 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__4687 = cljs.core.seq.call(null,init_val_or_seq);
var i__4688 = 0;
var s__4689 = s__4687;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4690 = s__4689;
if(cljs.core.truth_(and__3822__auto____4690))
{return (i__4688 < size);
} else
{return and__3822__auto____4690;
}
})()))
{(a__4686[i__4688] = cljs.core.first.call(null,s__4689));
{
var G__4693 = (i__4688 + 1);
var G__4694 = cljs.core.next.call(null,s__4689);
i__4688 = G__4693;
s__4689 = G__4694;
continue;
}
} else
{return a__4686;
}
break;
}
} else
{var n__575__auto____4691 = size;
var i__4692 = 0;
while(true){
if((i__4692 < n__575__auto____4691))
{(a__4686[i__4692] = init_val_or_seq);
{
var G__4695 = (i__4692 + 1);
i__4692 = G__4695;
continue;
}
} else
{}
break;
}
return a__4686;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__4696 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__4697 = cljs.core.seq.call(null,init_val_or_seq);
var i__4698 = 0;
var s__4699 = s__4697;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4700 = s__4699;
if(cljs.core.truth_(and__3822__auto____4700))
{return (i__4698 < size);
} else
{return and__3822__auto____4700;
}
})()))
{(a__4696[i__4698] = cljs.core.first.call(null,s__4699));
{
var G__4703 = (i__4698 + 1);
var G__4704 = cljs.core.next.call(null,s__4699);
i__4698 = G__4703;
s__4699 = G__4704;
continue;
}
} else
{return a__4696;
}
break;
}
} else
{var n__575__auto____4701 = size;
var i__4702 = 0;
while(true){
if((i__4702 < n__575__auto____4701))
{(a__4696[i__4702] = init_val_or_seq);
{
var G__4705 = (i__4702 + 1);
i__4702 = G__4705;
continue;
}
} else
{}
break;
}
return a__4696;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__4706 = s;
var i__4707 = n;
var sum__4708 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4709 = (i__4707 > 0);
if(and__3822__auto____4709)
{return cljs.core.seq.call(null,s__4706);
} else
{return and__3822__auto____4709;
}
})()))
{{
var G__4710 = cljs.core.next.call(null,s__4706);
var G__4711 = (i__4707 - 1);
var G__4712 = (sum__4708 + 1);
s__4706 = G__4710;
i__4707 = G__4711;
sum__4708 = G__4712;
continue;
}
} else
{return sum__4708;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
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
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4713 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__4713))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4713),concat.call(null,cljs.core.rest.call(null,s__4713),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__4716__delegate = function (x,y,zs){
var cat__4715 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__4714 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__4714))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__4714),cat.call(null,cljs.core.rest.call(null,xys__4714),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__4715.call(null,concat.call(null,x,y),zs);
};
var G__4716 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4716__delegate.call(this, x, y, zs);
};
G__4716.cljs$lang$maxFixedArity = 2;
G__4716.cljs$lang$applyTo = (function (arglist__4717){
var x = cljs.core.first(arglist__4717);
var y = cljs.core.first(cljs.core.next(arglist__4717));
var zs = cljs.core.rest(cljs.core.next(arglist__4717));
return G__4716__delegate(x, y, zs);
});
G__4716.cljs$lang$arity$variadic = G__4716__delegate;
return G__4716;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
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
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__4718__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__4718 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4718__delegate.call(this, a, b, c, d, more);
};
G__4718.cljs$lang$maxFixedArity = 4;
G__4718.cljs$lang$applyTo = (function (arglist__4719){
var a = cljs.core.first(arglist__4719);
var b = cljs.core.first(cljs.core.next(arglist__4719));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4719)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4719))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4719))));
return G__4718__delegate(a, b, c, d, more);
});
G__4718.cljs$lang$arity$variadic = G__4718__delegate;
return G__4718;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__4720 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__4721 = cljs.core._first.call(null,args__4720);
var args__4722 = cljs.core._rest.call(null,args__4720);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__4721);
} else
{return f.call(null,a__4721);
}
} else
{var b__4723 = cljs.core._first.call(null,args__4722);
var args__4724 = cljs.core._rest.call(null,args__4722);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__4721,b__4723);
} else
{return f.call(null,a__4721,b__4723);
}
} else
{var c__4725 = cljs.core._first.call(null,args__4724);
var args__4726 = cljs.core._rest.call(null,args__4724);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__4721,b__4723,c__4725);
} else
{return f.call(null,a__4721,b__4723,c__4725);
}
} else
{var d__4727 = cljs.core._first.call(null,args__4726);
var args__4728 = cljs.core._rest.call(null,args__4726);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__4721,b__4723,c__4725,d__4727);
} else
{return f.call(null,a__4721,b__4723,c__4725,d__4727);
}
} else
{var e__4729 = cljs.core._first.call(null,args__4728);
var args__4730 = cljs.core._rest.call(null,args__4728);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__4721,b__4723,c__4725,d__4727,e__4729);
} else
{return f.call(null,a__4721,b__4723,c__4725,d__4727,e__4729);
}
} else
{var f__4731 = cljs.core._first.call(null,args__4730);
var args__4732 = cljs.core._rest.call(null,args__4730);
if((argc === 6))
{if(f__4731.cljs$lang$arity$6)
{return f__4731.cljs$lang$arity$6(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731);
}
} else
{var g__4733 = cljs.core._first.call(null,args__4732);
var args__4734 = cljs.core._rest.call(null,args__4732);
if((argc === 7))
{if(f__4731.cljs$lang$arity$7)
{return f__4731.cljs$lang$arity$7(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733);
}
} else
{var h__4735 = cljs.core._first.call(null,args__4734);
var args__4736 = cljs.core._rest.call(null,args__4734);
if((argc === 8))
{if(f__4731.cljs$lang$arity$8)
{return f__4731.cljs$lang$arity$8(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735);
}
} else
{var i__4737 = cljs.core._first.call(null,args__4736);
var args__4738 = cljs.core._rest.call(null,args__4736);
if((argc === 9))
{if(f__4731.cljs$lang$arity$9)
{return f__4731.cljs$lang$arity$9(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737);
}
} else
{var j__4739 = cljs.core._first.call(null,args__4738);
var args__4740 = cljs.core._rest.call(null,args__4738);
if((argc === 10))
{if(f__4731.cljs$lang$arity$10)
{return f__4731.cljs$lang$arity$10(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739);
}
} else
{var k__4741 = cljs.core._first.call(null,args__4740);
var args__4742 = cljs.core._rest.call(null,args__4740);
if((argc === 11))
{if(f__4731.cljs$lang$arity$11)
{return f__4731.cljs$lang$arity$11(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741);
}
} else
{var l__4743 = cljs.core._first.call(null,args__4742);
var args__4744 = cljs.core._rest.call(null,args__4742);
if((argc === 12))
{if(f__4731.cljs$lang$arity$12)
{return f__4731.cljs$lang$arity$12(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743);
}
} else
{var m__4745 = cljs.core._first.call(null,args__4744);
var args__4746 = cljs.core._rest.call(null,args__4744);
if((argc === 13))
{if(f__4731.cljs$lang$arity$13)
{return f__4731.cljs$lang$arity$13(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745);
}
} else
{var n__4747 = cljs.core._first.call(null,args__4746);
var args__4748 = cljs.core._rest.call(null,args__4746);
if((argc === 14))
{if(f__4731.cljs$lang$arity$14)
{return f__4731.cljs$lang$arity$14(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747);
}
} else
{var o__4749 = cljs.core._first.call(null,args__4748);
var args__4750 = cljs.core._rest.call(null,args__4748);
if((argc === 15))
{if(f__4731.cljs$lang$arity$15)
{return f__4731.cljs$lang$arity$15(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749);
}
} else
{var p__4751 = cljs.core._first.call(null,args__4750);
var args__4752 = cljs.core._rest.call(null,args__4750);
if((argc === 16))
{if(f__4731.cljs$lang$arity$16)
{return f__4731.cljs$lang$arity$16(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751);
}
} else
{var q__4753 = cljs.core._first.call(null,args__4752);
var args__4754 = cljs.core._rest.call(null,args__4752);
if((argc === 17))
{if(f__4731.cljs$lang$arity$17)
{return f__4731.cljs$lang$arity$17(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751,q__4753);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751,q__4753);
}
} else
{var r__4755 = cljs.core._first.call(null,args__4754);
var args__4756 = cljs.core._rest.call(null,args__4754);
if((argc === 18))
{if(f__4731.cljs$lang$arity$18)
{return f__4731.cljs$lang$arity$18(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751,q__4753,r__4755);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751,q__4753,r__4755);
}
} else
{var s__4757 = cljs.core._first.call(null,args__4756);
var args__4758 = cljs.core._rest.call(null,args__4756);
if((argc === 19))
{if(f__4731.cljs$lang$arity$19)
{return f__4731.cljs$lang$arity$19(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751,q__4753,r__4755,s__4757);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751,q__4753,r__4755,s__4757);
}
} else
{var t__4759 = cljs.core._first.call(null,args__4758);
var args__4760 = cljs.core._rest.call(null,args__4758);
if((argc === 20))
{if(f__4731.cljs$lang$arity$20)
{return f__4731.cljs$lang$arity$20(a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751,q__4753,r__4755,s__4757,t__4759);
} else
{return f__4731.call(null,a__4721,b__4723,c__4725,d__4727,e__4729,f__4731,g__4733,h__4735,i__4737,j__4739,k__4741,l__4743,m__4745,n__4747,o__4749,p__4751,q__4753,r__4755,s__4757,t__4759);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__4761 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__4762 = cljs.core.bounded_count.call(null,args,(fixed_arity__4761 + 1));
if((bc__4762 <= fixed_arity__4761))
{return cljs.core.apply_to.call(null,f,bc__4762,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__4763 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__4764 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__4765 = cljs.core.bounded_count.call(null,arglist__4763,(fixed_arity__4764 + 1));
if((bc__4765 <= fixed_arity__4764))
{return cljs.core.apply_to.call(null,f,bc__4765,arglist__4763);
} else
{return f.cljs$lang$applyTo(arglist__4763);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4763));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__4766 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__4767 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__4768 = cljs.core.bounded_count.call(null,arglist__4766,(fixed_arity__4767 + 1));
if((bc__4768 <= fixed_arity__4767))
{return cljs.core.apply_to.call(null,f,bc__4768,arglist__4766);
} else
{return f.cljs$lang$applyTo(arglist__4766);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4766));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__4769 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__4770 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__4771 = cljs.core.bounded_count.call(null,arglist__4769,(fixed_arity__4770 + 1));
if((bc__4771 <= fixed_arity__4770))
{return cljs.core.apply_to.call(null,f,bc__4771,arglist__4769);
} else
{return f.cljs$lang$applyTo(arglist__4769);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4769));
}
});
var apply__6 = (function() { 
var G__4775__delegate = function (f,a,b,c,d,args){
var arglist__4772 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__4773 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__4774 = cljs.core.bounded_count.call(null,arglist__4772,(fixed_arity__4773 + 1));
if((bc__4774 <= fixed_arity__4773))
{return cljs.core.apply_to.call(null,f,bc__4774,arglist__4772);
} else
{return f.cljs$lang$applyTo(arglist__4772);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4772));
}
};
var G__4775 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4775__delegate.call(this, f, a, b, c, d, args);
};
G__4775.cljs$lang$maxFixedArity = 5;
G__4775.cljs$lang$applyTo = (function (arglist__4776){
var f = cljs.core.first(arglist__4776);
var a = cljs.core.first(cljs.core.next(arglist__4776));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4776)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4776))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4776)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4776)))));
return G__4775__delegate(f, a, b, c, d, args);
});
G__4775.cljs$lang$arity$variadic = G__4775__delegate;
return G__4775;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
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
vary_meta.cljs$lang$applyTo = (function (arglist__4777){
var obj = cljs.core.first(arglist__4777);
var f = cljs.core.first(cljs.core.next(arglist__4777));
var args = cljs.core.rest(cljs.core.next(arglist__4777));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__4778__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__4778 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4778__delegate.call(this, x, y, more);
};
G__4778.cljs$lang$maxFixedArity = 2;
G__4778.cljs$lang$applyTo = (function (arglist__4779){
var x = cljs.core.first(arglist__4779);
var y = cljs.core.first(cljs.core.next(arglist__4779));
var more = cljs.core.rest(cljs.core.next(arglist__4779));
return G__4778__delegate(x, y, more);
});
G__4778.cljs$lang$arity$variadic = G__4778__delegate;
return G__4778;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
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
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__4780 = pred;
var G__4781 = cljs.core.next.call(null,coll);
pred = G__4780;
coll = G__4781;
continue;
}
} else
{if("\uFDD0'else")
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
{var or__3824__auto____4782 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____4782))
{return or__3824__auto____4782;
} else
{{
var G__4783 = pred;
var G__4784 = cljs.core.next.call(null,coll);
pred = G__4783;
coll = G__4784;
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
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
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
var G__4785 = null;
var G__4785__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__4785__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__4785__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__4785__3 = (function() { 
var G__4786__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__4786 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4786__delegate.call(this, x, y, zs);
};
G__4786.cljs$lang$maxFixedArity = 2;
G__4786.cljs$lang$applyTo = (function (arglist__4787){
var x = cljs.core.first(arglist__4787);
var y = cljs.core.first(cljs.core.next(arglist__4787));
var zs = cljs.core.rest(cljs.core.next(arglist__4787));
return G__4786__delegate(x, y, zs);
});
G__4786.cljs$lang$arity$variadic = G__4786__delegate;
return G__4786;
})()
;
G__4785 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__4785__0.call(this);
case 1:
return G__4785__1.call(this,x);
case 2:
return G__4785__2.call(this,x,y);
default:
return G__4785__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__4785.cljs$lang$maxFixedArity = 2;
G__4785.cljs$lang$applyTo = G__4785__3.cljs$lang$applyTo;
return G__4785;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__4788__delegate = function (args){
return x;
};
var G__4788 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4788__delegate.call(this, args);
};
G__4788.cljs$lang$maxFixedArity = 0;
G__4788.cljs$lang$applyTo = (function (arglist__4789){
var args = cljs.core.seq(arglist__4789);;
return G__4788__delegate(args);
});
G__4788.cljs$lang$arity$variadic = G__4788__delegate;
return G__4788;
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
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__4793 = null;
var G__4793__0 = (function (){
return f.call(null,g.call(null));
});
var G__4793__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__4793__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__4793__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__4793__4 = (function() { 
var G__4794__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4794 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4794__delegate.call(this, x, y, z, args);
};
G__4794.cljs$lang$maxFixedArity = 3;
G__4794.cljs$lang$applyTo = (function (arglist__4795){
var x = cljs.core.first(arglist__4795);
var y = cljs.core.first(cljs.core.next(arglist__4795));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4795)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4795)));
return G__4794__delegate(x, y, z, args);
});
G__4794.cljs$lang$arity$variadic = G__4794__delegate;
return G__4794;
})()
;
G__4793 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__4793__0.call(this);
case 1:
return G__4793__1.call(this,x);
case 2:
return G__4793__2.call(this,x,y);
case 3:
return G__4793__3.call(this,x,y,z);
default:
return G__4793__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__4793.cljs$lang$maxFixedArity = 3;
G__4793.cljs$lang$applyTo = G__4793__4.cljs$lang$applyTo;
return G__4793;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__4796 = null;
var G__4796__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__4796__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__4796__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__4796__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__4796__4 = (function() { 
var G__4797__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__4797 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4797__delegate.call(this, x, y, z, args);
};
G__4797.cljs$lang$maxFixedArity = 3;
G__4797.cljs$lang$applyTo = (function (arglist__4798){
var x = cljs.core.first(arglist__4798);
var y = cljs.core.first(cljs.core.next(arglist__4798));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4798)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4798)));
return G__4797__delegate(x, y, z, args);
});
G__4797.cljs$lang$arity$variadic = G__4797__delegate;
return G__4797;
})()
;
G__4796 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__4796__0.call(this);
case 1:
return G__4796__1.call(this,x);
case 2:
return G__4796__2.call(this,x,y);
case 3:
return G__4796__3.call(this,x,y,z);
default:
return G__4796__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__4796.cljs$lang$maxFixedArity = 3;
G__4796.cljs$lang$applyTo = G__4796__4.cljs$lang$applyTo;
return G__4796;
})()
});
var comp__4 = (function() { 
var G__4799__delegate = function (f1,f2,f3,fs){
var fs__4790 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__4800__delegate = function (args){
var ret__4791 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__4790),args);
var fs__4792 = cljs.core.next.call(null,fs__4790);
while(true){
if(cljs.core.truth_(fs__4792))
{{
var G__4801 = cljs.core.first.call(null,fs__4792).call(null,ret__4791);
var G__4802 = cljs.core.next.call(null,fs__4792);
ret__4791 = G__4801;
fs__4792 = G__4802;
continue;
}
} else
{return ret__4791;
}
break;
}
};
var G__4800 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4800__delegate.call(this, args);
};
G__4800.cljs$lang$maxFixedArity = 0;
G__4800.cljs$lang$applyTo = (function (arglist__4803){
var args = cljs.core.seq(arglist__4803);;
return G__4800__delegate(args);
});
G__4800.cljs$lang$arity$variadic = G__4800__delegate;
return G__4800;
})()
;
};
var G__4799 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4799__delegate.call(this, f1, f2, f3, fs);
};
G__4799.cljs$lang$maxFixedArity = 3;
G__4799.cljs$lang$applyTo = (function (arglist__4804){
var f1 = cljs.core.first(arglist__4804);
var f2 = cljs.core.first(cljs.core.next(arglist__4804));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4804)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4804)));
return G__4799__delegate(f1, f2, f3, fs);
});
G__4799.cljs$lang$arity$variadic = G__4799__delegate;
return G__4799;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
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
var partial__2 = (function (f,arg1){
return (function() { 
var G__4805__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__4805 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4805__delegate.call(this, args);
};
G__4805.cljs$lang$maxFixedArity = 0;
G__4805.cljs$lang$applyTo = (function (arglist__4806){
var args = cljs.core.seq(arglist__4806);;
return G__4805__delegate(args);
});
G__4805.cljs$lang$arity$variadic = G__4805__delegate;
return G__4805;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__4807__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__4807 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4807__delegate.call(this, args);
};
G__4807.cljs$lang$maxFixedArity = 0;
G__4807.cljs$lang$applyTo = (function (arglist__4808){
var args = cljs.core.seq(arglist__4808);;
return G__4807__delegate(args);
});
G__4807.cljs$lang$arity$variadic = G__4807__delegate;
return G__4807;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__4809__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__4809 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4809__delegate.call(this, args);
};
G__4809.cljs$lang$maxFixedArity = 0;
G__4809.cljs$lang$applyTo = (function (arglist__4810){
var args = cljs.core.seq(arglist__4810);;
return G__4809__delegate(args);
});
G__4809.cljs$lang$arity$variadic = G__4809__delegate;
return G__4809;
})()
;
});
var partial__5 = (function() { 
var G__4811__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__4812__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__4812 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4812__delegate.call(this, args);
};
G__4812.cljs$lang$maxFixedArity = 0;
G__4812.cljs$lang$applyTo = (function (arglist__4813){
var args = cljs.core.seq(arglist__4813);;
return G__4812__delegate(args);
});
G__4812.cljs$lang$arity$variadic = G__4812__delegate;
return G__4812;
})()
;
};
var G__4811 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4811__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__4811.cljs$lang$maxFixedArity = 4;
G__4811.cljs$lang$applyTo = (function (arglist__4814){
var f = cljs.core.first(arglist__4814);
var arg1 = cljs.core.first(cljs.core.next(arglist__4814));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4814)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4814))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4814))));
return G__4811__delegate(f, arg1, arg2, arg3, more);
});
G__4811.cljs$lang$arity$variadic = G__4811__delegate;
return G__4811;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
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
var fnil__2 = (function (f,x){
return (function() {
var G__4815 = null;
var G__4815__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__4815__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__4815__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__4815__4 = (function() { 
var G__4816__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__4816 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4816__delegate.call(this, a, b, c, ds);
};
G__4816.cljs$lang$maxFixedArity = 3;
G__4816.cljs$lang$applyTo = (function (arglist__4817){
var a = cljs.core.first(arglist__4817);
var b = cljs.core.first(cljs.core.next(arglist__4817));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4817)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4817)));
return G__4816__delegate(a, b, c, ds);
});
G__4816.cljs$lang$arity$variadic = G__4816__delegate;
return G__4816;
})()
;
G__4815 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__4815__1.call(this,a);
case 2:
return G__4815__2.call(this,a,b);
case 3:
return G__4815__3.call(this,a,b,c);
default:
return G__4815__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__4815.cljs$lang$maxFixedArity = 3;
G__4815.cljs$lang$applyTo = G__4815__4.cljs$lang$applyTo;
return G__4815;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__4818 = null;
var G__4818__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__4818__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__4818__4 = (function() { 
var G__4819__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__4819 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4819__delegate.call(this, a, b, c, ds);
};
G__4819.cljs$lang$maxFixedArity = 3;
G__4819.cljs$lang$applyTo = (function (arglist__4820){
var a = cljs.core.first(arglist__4820);
var b = cljs.core.first(cljs.core.next(arglist__4820));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4820)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4820)));
return G__4819__delegate(a, b, c, ds);
});
G__4819.cljs$lang$arity$variadic = G__4819__delegate;
return G__4819;
})()
;
G__4818 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__4818__2.call(this,a,b);
case 3:
return G__4818__3.call(this,a,b,c);
default:
return G__4818__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__4818.cljs$lang$maxFixedArity = 3;
G__4818.cljs$lang$applyTo = G__4818__4.cljs$lang$applyTo;
return G__4818;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__4821 = null;
var G__4821__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__4821__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__4821__4 = (function() { 
var G__4822__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__4822 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4822__delegate.call(this, a, b, c, ds);
};
G__4822.cljs$lang$maxFixedArity = 3;
G__4822.cljs$lang$applyTo = (function (arglist__4823){
var a = cljs.core.first(arglist__4823);
var b = cljs.core.first(cljs.core.next(arglist__4823));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4823)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4823)));
return G__4822__delegate(a, b, c, ds);
});
G__4822.cljs$lang$arity$variadic = G__4822__delegate;
return G__4822;
})()
;
G__4821 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__4821__2.call(this,a,b);
case 3:
return G__4821__3.call(this,a,b,c);
default:
return G__4821__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__4821.cljs$lang$maxFixedArity = 3;
G__4821.cljs$lang$applyTo = G__4821__4.cljs$lang$applyTo;
return G__4821;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
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
var mapi__4826 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4824 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____4824))
{var s__4825 = temp__3974__auto____4824;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__4825)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4825)));
} else
{return null;
}
})));
});
return mapi__4826.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4827 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____4827))
{var s__4828 = temp__3974__auto____4827;
var x__4829 = f.call(null,cljs.core.first.call(null,s__4828));
if((x__4829 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__4828));
} else
{return cljs.core.cons.call(null,x__4829,keep.call(null,f,cljs.core.rest.call(null,s__4828)));
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
var keepi__4839 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4836 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____4836))
{var s__4837 = temp__3974__auto____4836;
var x__4838 = f.call(null,idx,cljs.core.first.call(null,s__4837));
if((x__4838 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4837));
} else
{return cljs.core.cons.call(null,x__4838,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4837)));
}
} else
{return null;
}
})));
});
return keepi__4839.call(null,0,coll);
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
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4846 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____4846))
{return p.call(null,y);
} else
{return and__3822__auto____4846;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4847 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____4847))
{var and__3822__auto____4848 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____4848))
{return p.call(null,z);
} else
{return and__3822__auto____4848;
}
} else
{return and__3822__auto____4847;
}
})());
});
var ep1__4 = (function() { 
var G__4884__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4849 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____4849))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____4849;
}
})());
};
var G__4884 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4884__delegate.call(this, x, y, z, args);
};
G__4884.cljs$lang$maxFixedArity = 3;
G__4884.cljs$lang$applyTo = (function (arglist__4885){
var x = cljs.core.first(arglist__4885);
var y = cljs.core.first(cljs.core.next(arglist__4885));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4885)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4885)));
return G__4884__delegate(x, y, z, args);
});
G__4884.cljs$lang$arity$variadic = G__4884__delegate;
return G__4884;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4850 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____4850))
{return p2.call(null,x);
} else
{return and__3822__auto____4850;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4851 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____4851))
{var and__3822__auto____4852 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____4852))
{var and__3822__auto____4853 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____4853))
{return p2.call(null,y);
} else
{return and__3822__auto____4853;
}
} else
{return and__3822__auto____4852;
}
} else
{return and__3822__auto____4851;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4854 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____4854))
{var and__3822__auto____4855 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____4855))
{var and__3822__auto____4856 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____4856))
{var and__3822__auto____4857 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____4857))
{var and__3822__auto____4858 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____4858))
{return p2.call(null,z);
} else
{return and__3822__auto____4858;
}
} else
{return and__3822__auto____4857;
}
} else
{return and__3822__auto____4856;
}
} else
{return and__3822__auto____4855;
}
} else
{return and__3822__auto____4854;
}
})());
});
var ep2__4 = (function() { 
var G__4886__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4859 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____4859))
{return cljs.core.every_QMARK_.call(null,(function (p1__4830_SHARP_){
var and__3822__auto____4860 = p1.call(null,p1__4830_SHARP_);
if(cljs.core.truth_(and__3822__auto____4860))
{return p2.call(null,p1__4830_SHARP_);
} else
{return and__3822__auto____4860;
}
}),args);
} else
{return and__3822__auto____4859;
}
})());
};
var G__4886 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4886__delegate.call(this, x, y, z, args);
};
G__4886.cljs$lang$maxFixedArity = 3;
G__4886.cljs$lang$applyTo = (function (arglist__4887){
var x = cljs.core.first(arglist__4887);
var y = cljs.core.first(cljs.core.next(arglist__4887));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4887)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4887)));
return G__4886__delegate(x, y, z, args);
});
G__4886.cljs$lang$arity$variadic = G__4886__delegate;
return G__4886;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4861 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____4861))
{var and__3822__auto____4862 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____4862))
{return p3.call(null,x);
} else
{return and__3822__auto____4862;
}
} else
{return and__3822__auto____4861;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4863 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____4863))
{var and__3822__auto____4864 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____4864))
{var and__3822__auto____4865 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____4865))
{var and__3822__auto____4866 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____4866))
{var and__3822__auto____4867 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____4867))
{return p3.call(null,y);
} else
{return and__3822__auto____4867;
}
} else
{return and__3822__auto____4866;
}
} else
{return and__3822__auto____4865;
}
} else
{return and__3822__auto____4864;
}
} else
{return and__3822__auto____4863;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4868 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____4868))
{var and__3822__auto____4869 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____4869))
{var and__3822__auto____4870 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____4870))
{var and__3822__auto____4871 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____4871))
{var and__3822__auto____4872 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____4872))
{var and__3822__auto____4873 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____4873))
{var and__3822__auto____4874 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____4874))
{var and__3822__auto____4875 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____4875))
{return p3.call(null,z);
} else
{return and__3822__auto____4875;
}
} else
{return and__3822__auto____4874;
}
} else
{return and__3822__auto____4873;
}
} else
{return and__3822__auto____4872;
}
} else
{return and__3822__auto____4871;
}
} else
{return and__3822__auto____4870;
}
} else
{return and__3822__auto____4869;
}
} else
{return and__3822__auto____4868;
}
})());
});
var ep3__4 = (function() { 
var G__4888__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4876 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____4876))
{return cljs.core.every_QMARK_.call(null,(function (p1__4831_SHARP_){
var and__3822__auto____4877 = p1.call(null,p1__4831_SHARP_);
if(cljs.core.truth_(and__3822__auto____4877))
{var and__3822__auto____4878 = p2.call(null,p1__4831_SHARP_);
if(cljs.core.truth_(and__3822__auto____4878))
{return p3.call(null,p1__4831_SHARP_);
} else
{return and__3822__auto____4878;
}
} else
{return and__3822__auto____4877;
}
}),args);
} else
{return and__3822__auto____4876;
}
})());
};
var G__4888 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4888__delegate.call(this, x, y, z, args);
};
G__4888.cljs$lang$maxFixedArity = 3;
G__4888.cljs$lang$applyTo = (function (arglist__4889){
var x = cljs.core.first(arglist__4889);
var y = cljs.core.first(cljs.core.next(arglist__4889));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4889)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4889)));
return G__4888__delegate(x, y, z, args);
});
G__4888.cljs$lang$arity$variadic = G__4888__delegate;
return G__4888;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__4890__delegate = function (p1,p2,p3,ps){
var ps__4879 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__4832_SHARP_){
return p1__4832_SHARP_.call(null,x);
}),ps__4879);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__4833_SHARP_){
var and__3822__auto____4880 = p1__4833_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____4880))
{return p1__4833_SHARP_.call(null,y);
} else
{return and__3822__auto____4880;
}
}),ps__4879);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__4834_SHARP_){
var and__3822__auto____4881 = p1__4834_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____4881))
{var and__3822__auto____4882 = p1__4834_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____4882))
{return p1__4834_SHARP_.call(null,z);
} else
{return and__3822__auto____4882;
}
} else
{return and__3822__auto____4881;
}
}),ps__4879);
});
var epn__4 = (function() { 
var G__4891__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4883 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____4883))
{return cljs.core.every_QMARK_.call(null,(function (p1__4835_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__4835_SHARP_,args);
}),ps__4879);
} else
{return and__3822__auto____4883;
}
})());
};
var G__4891 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4891__delegate.call(this, x, y, z, args);
};
G__4891.cljs$lang$maxFixedArity = 3;
G__4891.cljs$lang$applyTo = (function (arglist__4892){
var x = cljs.core.first(arglist__4892);
var y = cljs.core.first(cljs.core.next(arglist__4892));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4892)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4892)));
return G__4891__delegate(x, y, z, args);
});
G__4891.cljs$lang$arity$variadic = G__4891__delegate;
return G__4891;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__4890 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4890__delegate.call(this, p1, p2, p3, ps);
};
G__4890.cljs$lang$maxFixedArity = 3;
G__4890.cljs$lang$applyTo = (function (arglist__4893){
var p1 = cljs.core.first(arglist__4893);
var p2 = cljs.core.first(cljs.core.next(arglist__4893));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4893)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4893)));
return G__4890__delegate(p1, p2, p3, ps);
});
G__4890.cljs$lang$arity$variadic = G__4890__delegate;
return G__4890;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
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
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____4895 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____4895))
{return or__3824__auto____4895;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____4896 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____4896))
{return or__3824__auto____4896;
} else
{var or__3824__auto____4897 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____4897))
{return or__3824__auto____4897;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__4933__delegate = function (x,y,z,args){
var or__3824__auto____4898 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____4898))
{return or__3824__auto____4898;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4933__delegate.call(this, x, y, z, args);
};
G__4933.cljs$lang$maxFixedArity = 3;
G__4933.cljs$lang$applyTo = (function (arglist__4934){
var x = cljs.core.first(arglist__4934);
var y = cljs.core.first(cljs.core.next(arglist__4934));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4934)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4934)));
return G__4933__delegate(x, y, z, args);
});
G__4933.cljs$lang$arity$variadic = G__4933__delegate;
return G__4933;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____4899 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____4899))
{return or__3824__auto____4899;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____4900 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____4900))
{return or__3824__auto____4900;
} else
{var or__3824__auto____4901 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____4901))
{return or__3824__auto____4901;
} else
{var or__3824__auto____4902 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____4902))
{return or__3824__auto____4902;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____4903 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____4903))
{return or__3824__auto____4903;
} else
{var or__3824__auto____4904 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____4904))
{return or__3824__auto____4904;
} else
{var or__3824__auto____4905 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____4905))
{return or__3824__auto____4905;
} else
{var or__3824__auto____4906 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____4906))
{return or__3824__auto____4906;
} else
{var or__3824__auto____4907 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____4907))
{return or__3824__auto____4907;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__4935__delegate = function (x,y,z,args){
var or__3824__auto____4908 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____4908))
{return or__3824__auto____4908;
} else
{return cljs.core.some.call(null,(function (p1__4840_SHARP_){
var or__3824__auto____4909 = p1.call(null,p1__4840_SHARP_);
if(cljs.core.truth_(or__3824__auto____4909))
{return or__3824__auto____4909;
} else
{return p2.call(null,p1__4840_SHARP_);
}
}),args);
}
};
var G__4935 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4935__delegate.call(this, x, y, z, args);
};
G__4935.cljs$lang$maxFixedArity = 3;
G__4935.cljs$lang$applyTo = (function (arglist__4936){
var x = cljs.core.first(arglist__4936);
var y = cljs.core.first(cljs.core.next(arglist__4936));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4936)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4936)));
return G__4935__delegate(x, y, z, args);
});
G__4935.cljs$lang$arity$variadic = G__4935__delegate;
return G__4935;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____4910 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____4910))
{return or__3824__auto____4910;
} else
{var or__3824__auto____4911 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____4911))
{return or__3824__auto____4911;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____4912 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____4912))
{return or__3824__auto____4912;
} else
{var or__3824__auto____4913 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____4913))
{return or__3824__auto____4913;
} else
{var or__3824__auto____4914 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____4914))
{return or__3824__auto____4914;
} else
{var or__3824__auto____4915 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____4915))
{return or__3824__auto____4915;
} else
{var or__3824__auto____4916 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____4916))
{return or__3824__auto____4916;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____4917 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____4917))
{return or__3824__auto____4917;
} else
{var or__3824__auto____4918 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____4918))
{return or__3824__auto____4918;
} else
{var or__3824__auto____4919 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____4919))
{return or__3824__auto____4919;
} else
{var or__3824__auto____4920 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____4920))
{return or__3824__auto____4920;
} else
{var or__3824__auto____4921 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____4921))
{return or__3824__auto____4921;
} else
{var or__3824__auto____4922 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____4922))
{return or__3824__auto____4922;
} else
{var or__3824__auto____4923 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____4923))
{return or__3824__auto____4923;
} else
{var or__3824__auto____4924 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____4924))
{return or__3824__auto____4924;
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
var sp3__4 = (function() { 
var G__4937__delegate = function (x,y,z,args){
var or__3824__auto____4925 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____4925))
{return or__3824__auto____4925;
} else
{return cljs.core.some.call(null,(function (p1__4841_SHARP_){
var or__3824__auto____4926 = p1.call(null,p1__4841_SHARP_);
if(cljs.core.truth_(or__3824__auto____4926))
{return or__3824__auto____4926;
} else
{var or__3824__auto____4927 = p2.call(null,p1__4841_SHARP_);
if(cljs.core.truth_(or__3824__auto____4927))
{return or__3824__auto____4927;
} else
{return p3.call(null,p1__4841_SHARP_);
}
}
}),args);
}
};
var G__4937 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4937__delegate.call(this, x, y, z, args);
};
G__4937.cljs$lang$maxFixedArity = 3;
G__4937.cljs$lang$applyTo = (function (arglist__4938){
var x = cljs.core.first(arglist__4938);
var y = cljs.core.first(cljs.core.next(arglist__4938));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4938)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4938)));
return G__4937__delegate(x, y, z, args);
});
G__4937.cljs$lang$arity$variadic = G__4937__delegate;
return G__4937;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__4939__delegate = function (p1,p2,p3,ps){
var ps__4928 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__4842_SHARP_){
return p1__4842_SHARP_.call(null,x);
}),ps__4928);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__4843_SHARP_){
var or__3824__auto____4929 = p1__4843_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____4929))
{return or__3824__auto____4929;
} else
{return p1__4843_SHARP_.call(null,y);
}
}),ps__4928);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__4844_SHARP_){
var or__3824__auto____4930 = p1__4844_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____4930))
{return or__3824__auto____4930;
} else
{var or__3824__auto____4931 = p1__4844_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____4931))
{return or__3824__auto____4931;
} else
{return p1__4844_SHARP_.call(null,z);
}
}
}),ps__4928);
});
var spn__4 = (function() { 
var G__4940__delegate = function (x,y,z,args){
var or__3824__auto____4932 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____4932))
{return or__3824__auto____4932;
} else
{return cljs.core.some.call(null,(function (p1__4845_SHARP_){
return cljs.core.some.call(null,p1__4845_SHARP_,args);
}),ps__4928);
}
};
var G__4940 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4940__delegate.call(this, x, y, z, args);
};
G__4940.cljs$lang$maxFixedArity = 3;
G__4940.cljs$lang$applyTo = (function (arglist__4941){
var x = cljs.core.first(arglist__4941);
var y = cljs.core.first(cljs.core.next(arglist__4941));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4941)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4941)));
return G__4940__delegate(x, y, z, args);
});
G__4940.cljs$lang$arity$variadic = G__4940__delegate;
return G__4940;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__4939 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4939__delegate.call(this, p1, p2, p3, ps);
};
G__4939.cljs$lang$maxFixedArity = 3;
G__4939.cljs$lang$applyTo = (function (arglist__4942){
var p1 = cljs.core.first(arglist__4942);
var p2 = cljs.core.first(cljs.core.next(arglist__4942));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4942)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4942)));
return G__4939__delegate(p1, p2, p3, ps);
});
G__4939.cljs$lang$arity$variadic = G__4939__delegate;
return G__4939;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
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
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4943 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____4943))
{var s__4944 = temp__3974__auto____4943;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4944)),map.call(null,f,cljs.core.rest.call(null,s__4944)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4945 = cljs.core.seq.call(null,c1);
var s2__4946 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3822__auto____4947 = s1__4945;
if(cljs.core.truth_(and__3822__auto____4947))
{return s2__4946;
} else
{return and__3822__auto____4947;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4945),cljs.core.first.call(null,s2__4946)),map.call(null,f,cljs.core.rest.call(null,s1__4945),cljs.core.rest.call(null,s2__4946)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4948 = cljs.core.seq.call(null,c1);
var s2__4949 = cljs.core.seq.call(null,c2);
var s3__4950 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3822__auto____4951 = s1__4948;
if(cljs.core.truth_(and__3822__auto____4951))
{var and__3822__auto____4952 = s2__4949;
if(cljs.core.truth_(and__3822__auto____4952))
{return s3__4950;
} else
{return and__3822__auto____4952;
}
} else
{return and__3822__auto____4951;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4948),cljs.core.first.call(null,s2__4949),cljs.core.first.call(null,s3__4950)),map.call(null,f,cljs.core.rest.call(null,s1__4948),cljs.core.rest.call(null,s2__4949),cljs.core.rest.call(null,s3__4950)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__4955__delegate = function (f,c1,c2,c3,colls){
var step__4954 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4953 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4953))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4953),step.call(null,map.call(null,cljs.core.rest,ss__4953)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__4894_SHARP_){
return cljs.core.apply.call(null,f,p1__4894_SHARP_);
}),step__4954.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4955 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4955__delegate.call(this, f, c1, c2, c3, colls);
};
G__4955.cljs$lang$maxFixedArity = 4;
G__4955.cljs$lang$applyTo = (function (arglist__4956){
var f = cljs.core.first(arglist__4956);
var c1 = cljs.core.first(cljs.core.next(arglist__4956));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4956)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4956))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4956))));
return G__4955__delegate(f, c1, c2, c3, colls);
});
G__4955.cljs$lang$arity$variadic = G__4955__delegate;
return G__4955;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____4957 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____4957))
{var s__4958 = temp__3974__auto____4957;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__4958),take.call(null,(n - 1),cljs.core.rest.call(null,s__4958)));
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
var step__4961 = (function (n,coll){
while(true){
var s__4959 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____4960 = (n > 0);
if(and__3822__auto____4960)
{return s__4959;
} else
{return and__3822__auto____4960;
}
})()))
{{
var G__4962 = (n - 1);
var G__4963 = cljs.core.rest.call(null,s__4959);
n = G__4962;
coll = G__4963;
continue;
}
} else
{return s__4959;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__4961.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__4964 = cljs.core.seq.call(null,coll);
var lead__4965 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__4965))
{{
var G__4966 = cljs.core.next.call(null,s__4964);
var G__4967 = cljs.core.next.call(null,lead__4965);
s__4964 = G__4966;
lead__4965 = G__4967;
continue;
}
} else
{return s__4964;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4970 = (function (pred,coll){
while(true){
var s__4968 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____4969 = s__4968;
if(cljs.core.truth_(and__3822__auto____4969))
{return pred.call(null,cljs.core.first.call(null,s__4968));
} else
{return and__3822__auto____4969;
}
})()))
{{
var G__4971 = pred;
var G__4972 = cljs.core.rest.call(null,s__4968);
pred = G__4971;
coll = G__4972;
continue;
}
} else
{return s__4968;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__4970.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4973 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____4973))
{var s__4974 = temp__3974__auto____4973;
return cljs.core.concat.call(null,s__4974,cycle.call(null,s__4974));
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
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
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
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
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
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4975 = cljs.core.seq.call(null,c1);
var s2__4976 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3822__auto____4977 = s1__4975;
if(cljs.core.truth_(and__3822__auto____4977))
{return s2__4976;
} else
{return and__3822__auto____4977;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4975),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4976),interleave.call(null,cljs.core.rest.call(null,s1__4975),cljs.core.rest.call(null,s2__4976))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__4979__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4978 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4978))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4978),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4978)));
} else
{return null;
}
})));
};
var G__4979 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4979__delegate.call(this, c1, c2, colls);
};
G__4979.cljs$lang$maxFixedArity = 2;
G__4979.cljs$lang$applyTo = (function (arglist__4980){
var c1 = cljs.core.first(arglist__4980);
var c2 = cljs.core.first(cljs.core.next(arglist__4980));
var colls = cljs.core.rest(cljs.core.next(arglist__4980));
return G__4979__delegate(c1, c2, colls);
});
G__4979.cljs$lang$arity$variadic = G__4979__delegate;
return G__4979;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
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
var cat__4983 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____4981 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____4981))
{var coll__4982 = temp__3971__auto____4981;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4982),cat.call(null,cljs.core.rest.call(null,coll__4982),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__4983.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__4984__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4984 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4984__delegate.call(this, f, coll, colls);
};
G__4984.cljs$lang$maxFixedArity = 2;
G__4984.cljs$lang$applyTo = (function (arglist__4985){
var f = cljs.core.first(arglist__4985);
var coll = cljs.core.first(cljs.core.next(arglist__4985));
var colls = cljs.core.rest(cljs.core.next(arglist__4985));
return G__4984__delegate(f, coll, colls);
});
G__4984.cljs$lang$arity$variadic = G__4984__delegate;
return G__4984;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4986 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____4986))
{var s__4987 = temp__3974__auto____4986;
var f__4988 = cljs.core.first.call(null,s__4987);
var r__4989 = cljs.core.rest.call(null,s__4987);
if(cljs.core.truth_(pred.call(null,f__4988)))
{return cljs.core.cons.call(null,f__4988,filter.call(null,pred,r__4989));
} else
{return filter.call(null,pred,r__4989);
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
var walk__4991 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__4991.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4990_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4990_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__4992__4993 = to;
if((G__4992__4993 != null))
{if((function (){var or__3824__auto____4994 = (G__4992__4993.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____4994)
{return or__3824__auto____4994;
} else
{return G__4992__4993.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__4992__4993.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__4992__4993);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__4992__4993);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__4995__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__4995 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4995__delegate.call(this, f, c1, c2, c3, colls);
};
G__4995.cljs$lang$maxFixedArity = 4;
G__4995.cljs$lang$applyTo = (function (arglist__4996){
var f = cljs.core.first(arglist__4996);
var c1 = cljs.core.first(cljs.core.next(arglist__4996));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4996)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4996))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4996))));
return G__4995__delegate(f, c1, c2, c3, colls);
});
G__4995.cljs$lang$arity$variadic = G__4995__delegate;
return G__4995;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
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
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4997 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____4997))
{var s__4998 = temp__3974__auto____4997;
var p__4999 = cljs.core.take.call(null,n,s__4998);
if((n === cljs.core.count.call(null,p__4999)))
{return cljs.core.cons.call(null,p__4999,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4998)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5000 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5000))
{var s__5001 = temp__3974__auto____5000;
var p__5002 = cljs.core.take.call(null,n,s__5001);
if((n === cljs.core.count.call(null,p__5002)))
{return cljs.core.cons.call(null,p__5002,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__5001)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__5002,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
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
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__5003 = cljs.core.lookup_sentinel;
var m__5004 = m;
var ks__5005 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__5005))
{var m__5006 = cljs.core.get.call(null,m__5004,cljs.core.first.call(null,ks__5005),sentinel__5003);
if((sentinel__5003 === m__5006))
{return not_found;
} else
{{
var G__5007 = sentinel__5003;
var G__5008 = m__5006;
var G__5009 = cljs.core.next.call(null,ks__5005);
sentinel__5003 = G__5007;
m__5004 = G__5008;
ks__5005 = G__5009;
continue;
}
}
} else
{return m__5004;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__5010,v){
var vec__5011__5012 = p__5010;
var k__5013 = cljs.core.nth.call(null,vec__5011__5012,0,null);
var ks__5014 = cljs.core.nthnext.call(null,vec__5011__5012,1);
if(cljs.core.truth_(ks__5014))
{return cljs.core.assoc.call(null,m,k__5013,assoc_in.call(null,cljs.core.get.call(null,m,k__5013),ks__5014,v));
} else
{return cljs.core.assoc.call(null,m,k__5013,v);
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
var update_in__delegate = function (m,p__5015,f,args){
var vec__5016__5017 = p__5015;
var k__5018 = cljs.core.nth.call(null,vec__5016__5017,0,null);
var ks__5019 = cljs.core.nthnext.call(null,vec__5016__5017,1);
if(cljs.core.truth_(ks__5019))
{return cljs.core.assoc.call(null,m,k__5018,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__5018),ks__5019,f,args));
} else
{return cljs.core.assoc.call(null,m,k__5018,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__5018),args));
}
};
var update_in = function (m,p__5015,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__5015, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__5020){
var m = cljs.core.first(arglist__5020);
var p__5015 = cljs.core.first(cljs.core.next(arglist__5020));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5020)));
return update_in__delegate(m, p__5015, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5025 = this;
var h__264__auto____5026 = this__5025.__hash;
if((h__264__auto____5026 != null))
{return h__264__auto____5026;
} else
{var h__264__auto____5027 = cljs.core.hash_coll.call(null,coll);
this__5025.__hash = h__264__auto____5027;
return h__264__auto____5027;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5028 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5029 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5030 = this;
var new_array__5031 = cljs.core.aclone.call(null,this__5030.array);
(new_array__5031[k] = v);
return (new cljs.core.Vector(this__5030.meta,new_array__5031,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__5060 = null;
var G__5060__2 = (function (tsym5023,k){
var this__5032 = this;
var tsym5023__5033 = this;
var coll__5034 = tsym5023__5033;
return cljs.core._lookup.call(null,coll__5034,k);
});
var G__5060__3 = (function (tsym5024,k,not_found){
var this__5035 = this;
var tsym5024__5036 = this;
var coll__5037 = tsym5024__5036;
return cljs.core._lookup.call(null,coll__5037,k,not_found);
});
G__5060 = function(tsym5024,k,not_found){
switch(arguments.length){
case 2:
return G__5060__2.call(this,tsym5024,k);
case 3:
return G__5060__3.call(this,tsym5024,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5060;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym5021,args5022){
return tsym5021.call.apply(tsym5021,[tsym5021].concat(cljs.core.aclone.call(null,args5022)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5038 = this;
var new_array__5039 = cljs.core.aclone.call(null,this__5038.array);
new_array__5039.push(o);
return (new cljs.core.Vector(this__5038.meta,new_array__5039,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__5040 = this;
var this$__5041 = this;
return cljs.core.pr_str.call(null,this$__5041);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__5042 = this;
return cljs.core.ci_reduce.call(null,this__5042.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__5043 = this;
return cljs.core.ci_reduce.call(null,this__5043.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5044 = this;
if((this__5044.array.length > 0))
{var vector_seq__5045 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__5044.array.length))
{return cljs.core.cons.call(null,(this__5044.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__5045.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5046 = this;
return this__5046.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5047 = this;
var count__5048 = this__5047.array.length;
if((count__5048 > 0))
{return (this__5047.array[(count__5048 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5049 = this;
if((this__5049.array.length > 0))
{var new_array__5050 = cljs.core.aclone.call(null,this__5049.array);
new_array__5050.pop();
return (new cljs.core.Vector(this__5049.meta,new_array__5050,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__5051 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5052 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5053 = this;
return (new cljs.core.Vector(meta,this__5053.array,this__5053.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5054 = this;
return this__5054.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5056 = this;
if((function (){var and__3822__auto____5057 = (0 <= n);
if(and__3822__auto____5057)
{return (n < this__5056.array.length);
} else
{return and__3822__auto____5057;
}
})())
{return (this__5056.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5058 = this;
if((function (){var and__3822__auto____5059 = (0 <= n);
if(and__3822__auto____5059)
{return (n < this__5058.array.length);
} else
{return and__3822__auto____5059;
}
})())
{return (this__5058.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5055 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5055.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__355__auto__){
return cljs.core.list.call(null,"cljs.core.VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__5061 = pv.cnt;
if((cnt__5061 < 32))
{return 0;
} else
{return (((cnt__5061 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__5062 = level;
var ret__5063 = node;
while(true){
if((ll__5062 === 0))
{return ret__5063;
} else
{var embed__5064 = ret__5063;
var r__5065 = cljs.core.pv_fresh_node.call(null,edit);
var ___5066 = cljs.core.pv_aset.call(null,r__5065,0,embed__5064);
{
var G__5067 = (ll__5062 - 5);
var G__5068 = r__5065;
ll__5062 = G__5067;
ret__5063 = G__5068;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__5069 = cljs.core.pv_clone_node.call(null,parent);
var subidx__5070 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__5069,subidx__5070,tailnode);
return ret__5069;
} else
{var temp__3971__auto____5071 = cljs.core.pv_aget.call(null,parent,subidx__5070);
if(cljs.core.truth_(temp__3971__auto____5071))
{var child__5072 = temp__3971__auto____5071;
var node_to_insert__5073 = push_tail.call(null,pv,(level - 5),child__5072,tailnode);
cljs.core.pv_aset.call(null,ret__5069,subidx__5070,node_to_insert__5073);
return ret__5069;
} else
{var node_to_insert__5074 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__5069,subidx__5070,node_to_insert__5074);
return ret__5069;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____5075 = (0 <= i);
if(and__3822__auto____5075)
{return (i < pv.cnt);
} else
{return and__3822__auto____5075;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__5076 = pv.root;
var level__5077 = pv.shift;
while(true){
if((level__5077 > 0))
{{
var G__5078 = cljs.core.pv_aget.call(null,node__5076,((i >>> level__5077) & 31));
var G__5079 = (level__5077 - 5);
node__5076 = G__5078;
level__5077 = G__5079;
continue;
}
} else
{return node__5076.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__5080 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__5080,(i & 31),val);
return ret__5080;
} else
{var subidx__5081 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__5080,subidx__5081,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__5081),i,val));
return ret__5080;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__5082 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__5083 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__5082));
if((function (){var and__3822__auto____5084 = (new_child__5083 == null);
if(and__3822__auto____5084)
{return (subidx__5082 === 0);
} else
{return and__3822__auto____5084;
}
})())
{return null;
} else
{var ret__5085 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__5085,subidx__5082,new_child__5083);
return ret__5085;
}
} else
{if((subidx__5082 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__5086 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__5086,subidx__5082,null);
return ret__5086;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.vector_seq = (function vector_seq(v,offset){
var c__5087 = cljs.core._count.call(null,v);
if((c__5087 > 0))
{if((void 0 === cljs.core.t5088))
{
/**
* @constructor
*/
cljs.core.t5088 = (function (c,offset,v,vector_seq,__meta__289__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__289__auto__ = __meta__289__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t5088.cljs$lang$type = true;
cljs.core.t5088.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.t5088");
});
cljs.core.t5088.prototype.cljs$core$ISeqable$ = true;
cljs.core.t5088.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__5089 = this;
return vseq;
});
cljs.core.t5088.prototype.cljs$core$ISeq$ = true;
cljs.core.t5088.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__5090 = this;
return cljs.core._nth.call(null,this__5090.v,this__5090.offset);
});
cljs.core.t5088.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__5091 = this;
var offset__5092 = (this__5091.offset + 1);
if((offset__5092 < this__5091.c))
{return this__5091.vector_seq.call(null,this__5091.v,offset__5092);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t5088.prototype.cljs$core$ASeq$ = true;
cljs.core.t5088.prototype.cljs$core$IEquiv$ = true;
cljs.core.t5088.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__5093 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t5088.prototype.cljs$core$ISequential$ = true;
cljs.core.t5088.prototype.cljs$core$IPrintable$ = true;
cljs.core.t5088.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__5094 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t5088.prototype.cljs$core$IMeta$ = true;
cljs.core.t5088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___290__auto__){
var this__5095 = this;
return this__5095.__meta__289__auto__;
});
cljs.core.t5088.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t5088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___290__auto__,__meta__289__auto__){
var this__5096 = this;
return (new cljs.core.t5088(this__5096.c,this__5096.offset,this__5096.v,this__5096.vector_seq,__meta__289__auto__));
});
cljs.core.t5088;
} else
{}
return (new cljs.core.t5088(c__5087,offset,v,vector_seq,null));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2164209055;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__5101 = this;
return (new cljs.core.TransientVector(this__5101.cnt,this__5101.shift,cljs.core.tv_editable_root.call(null,this__5101.root),cljs.core.tv_editable_tail.call(null,this__5101.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5102 = this;
var h__264__auto____5103 = this__5102.__hash;
if((h__264__auto____5103 != null))
{return h__264__auto____5103;
} else
{var h__264__auto____5104 = cljs.core.hash_coll.call(null,coll);
this__5102.__hash = h__264__auto____5104;
return h__264__auto____5104;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5105 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5106 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5107 = this;
if((function (){var and__3822__auto____5108 = (0 <= k);
if(and__3822__auto____5108)
{return (k < this__5107.cnt);
} else
{return and__3822__auto____5108;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__5109 = cljs.core.aclone.call(null,this__5107.tail);
(new_tail__5109[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__5107.meta,this__5107.cnt,this__5107.shift,this__5107.root,new_tail__5109,null));
} else
{return (new cljs.core.PersistentVector(this__5107.meta,this__5107.cnt,this__5107.shift,cljs.core.do_assoc.call(null,coll,this__5107.shift,this__5107.root,k,v),this__5107.tail,null));
}
} else
{if((k === this__5107.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__5107.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__5154 = null;
var G__5154__2 = (function (tsym5099,k){
var this__5110 = this;
var tsym5099__5111 = this;
var coll__5112 = tsym5099__5111;
return cljs.core._lookup.call(null,coll__5112,k);
});
var G__5154__3 = (function (tsym5100,k,not_found){
var this__5113 = this;
var tsym5100__5114 = this;
var coll__5115 = tsym5100__5114;
return cljs.core._lookup.call(null,coll__5115,k,not_found);
});
G__5154 = function(tsym5100,k,not_found){
switch(arguments.length){
case 2:
return G__5154__2.call(this,tsym5100,k);
case 3:
return G__5154__3.call(this,tsym5100,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5154;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym5097,args5098){
return tsym5097.call.apply(tsym5097,[tsym5097].concat(cljs.core.aclone.call(null,args5098)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__5116 = this;
var step_init__5117 = [0,init];
var i__5118 = 0;
while(true){
if((i__5118 < this__5116.cnt))
{var arr__5119 = cljs.core.array_for.call(null,v,i__5118);
var len__5120 = arr__5119.length;
var init__5124 = (function (){var j__5121 = 0;
var init__5122 = (step_init__5117[1]);
while(true){
if((j__5121 < len__5120))
{var init__5123 = f.call(null,init__5122,(j__5121 + i__5118),(arr__5119[j__5121]));
if(cljs.core.reduced_QMARK_.call(null,init__5123))
{return init__5123;
} else
{{
var G__5155 = (j__5121 + 1);
var G__5156 = init__5123;
j__5121 = G__5155;
init__5122 = G__5156;
continue;
}
}
} else
{(step_init__5117[0] = len__5120);
(step_init__5117[1] = init__5122);
return init__5122;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__5124))
{return cljs.core.deref.call(null,init__5124);
} else
{{
var G__5157 = (i__5118 + (step_init__5117[0]));
i__5118 = G__5157;
continue;
}
}
} else
{return (step_init__5117[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5125 = this;
if(((this__5125.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__5126 = cljs.core.aclone.call(null,this__5125.tail);
new_tail__5126.push(o);
return (new cljs.core.PersistentVector(this__5125.meta,(this__5125.cnt + 1),this__5125.shift,this__5125.root,new_tail__5126,null));
} else
{var root_overflow_QMARK___5127 = ((this__5125.cnt >>> 5) > (1 << this__5125.shift));
var new_shift__5128 = ((root_overflow_QMARK___5127)?(this__5125.shift + 5):this__5125.shift);
var new_root__5130 = ((root_overflow_QMARK___5127)?(function (){var n_r__5129 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__5129,0,this__5125.root);
cljs.core.pv_aset.call(null,n_r__5129,1,cljs.core.new_path.call(null,null,this__5125.shift,(new cljs.core.VectorNode(null,this__5125.tail))));
return n_r__5129;
})():cljs.core.push_tail.call(null,coll,this__5125.shift,this__5125.root,(new cljs.core.VectorNode(null,this__5125.tail))));
return (new cljs.core.PersistentVector(this__5125.meta,(this__5125.cnt + 1),new_shift__5128,new_root__5130,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__5131 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__5132 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__5133 = this;
var this$__5134 = this;
return cljs.core.pr_str.call(null,this$__5134);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__5135 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__5136 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5137 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5138 = this;
return this__5138.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5139 = this;
if((this__5139.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__5139.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5140 = this;
if((this__5140.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__5140.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__5140.meta);
} else
{if((1 < (this__5140.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__5140.meta,(this__5140.cnt - 1),this__5140.shift,this__5140.root,this__5140.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__5141 = cljs.core.array_for.call(null,coll,(this__5140.cnt - 2));
var nr__5142 = cljs.core.pop_tail.call(null,coll,this__5140.shift,this__5140.root);
var new_root__5143 = (((nr__5142 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__5142);
var cnt_1__5144 = (this__5140.cnt - 1);
if((function (){var and__3822__auto____5145 = (5 < this__5140.shift);
if(and__3822__auto____5145)
{return (cljs.core.pv_aget.call(null,new_root__5143,1) == null);
} else
{return and__3822__auto____5145;
}
})())
{return (new cljs.core.PersistentVector(this__5140.meta,cnt_1__5144,(this__5140.shift - 5),cljs.core.pv_aget.call(null,new_root__5143,0),new_tail__5141,null));
} else
{return (new cljs.core.PersistentVector(this__5140.meta,cnt_1__5144,this__5140.shift,new_root__5143,new_tail__5141,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__5147 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5148 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5149 = this;
return (new cljs.core.PersistentVector(meta,this__5149.cnt,this__5149.shift,this__5149.root,this__5149.tail,this__5149.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5150 = this;
return this__5150.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5151 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5152 = this;
if((function (){var and__3822__auto____5153 = (0 <= n);
if(and__3822__auto____5153)
{return (n < this__5152.cnt);
} else
{return and__3822__auto____5153;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5146 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__5146.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__5158 = cljs.core.seq.call(null,xs);
var out__5159 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__5158))
{{
var G__5160 = cljs.core.next.call(null,xs__5158);
var G__5161 = cljs.core.conj_BANG_.call(null,out__5159,cljs.core.first.call(null,xs__5158));
xs__5158 = G__5160;
out__5159 = G__5161;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__5159);
}
break;
}
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
vector.cljs$lang$applyTo = (function (arglist__5162){
var args = cljs.core.seq(arglist__5162);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5167 = this;
var h__264__auto____5168 = this__5167.__hash;
if((h__264__auto____5168 != null))
{return h__264__auto____5168;
} else
{var h__264__auto____5169 = cljs.core.hash_coll.call(null,coll);
this__5167.__hash = h__264__auto____5169;
return h__264__auto____5169;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5170 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5171 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__5172 = this;
var v_pos__5173 = (this__5172.start + key);
return (new cljs.core.Subvec(this__5172.meta,cljs.core._assoc.call(null,this__5172.v,v_pos__5173,val),this__5172.start,((this__5172.end > (v_pos__5173 + 1)) ? this__5172.end : (v_pos__5173 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__5197 = null;
var G__5197__2 = (function (tsym5165,k){
var this__5174 = this;
var tsym5165__5175 = this;
var coll__5176 = tsym5165__5175;
return cljs.core._lookup.call(null,coll__5176,k);
});
var G__5197__3 = (function (tsym5166,k,not_found){
var this__5177 = this;
var tsym5166__5178 = this;
var coll__5179 = tsym5166__5178;
return cljs.core._lookup.call(null,coll__5179,k,not_found);
});
G__5197 = function(tsym5166,k,not_found){
switch(arguments.length){
case 2:
return G__5197__2.call(this,tsym5166,k);
case 3:
return G__5197__3.call(this,tsym5166,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5197;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym5163,args5164){
return tsym5163.call.apply(tsym5163,[tsym5163].concat(cljs.core.aclone.call(null,args5164)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5180 = this;
return (new cljs.core.Subvec(this__5180.meta,cljs.core._assoc_n.call(null,this__5180.v,this__5180.end,o),this__5180.start,(this__5180.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__5181 = this;
var this$__5182 = this;
return cljs.core.pr_str.call(null,this$__5182);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__5183 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__5184 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5185 = this;
var subvec_seq__5186 = (function subvec_seq(i){
if((i === this__5185.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__5185.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__5186.call(null,this__5185.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5187 = this;
return (this__5187.end - this__5187.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5188 = this;
return cljs.core._nth.call(null,this__5188.v,(this__5188.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5189 = this;
if((this__5189.start === this__5189.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__5189.meta,this__5189.v,this__5189.start,(this__5189.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__5190 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5191 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5192 = this;
return (new cljs.core.Subvec(meta,this__5192.v,this__5192.start,this__5192.end,this__5192.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5193 = this;
return this__5193.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5195 = this;
return cljs.core._nth.call(null,this__5195.v,(this__5195.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5196 = this;
return cljs.core._nth.call(null,this__5196.v,(this__5196.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5194 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5194.meta);
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
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__5198 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__5198,0,tl.length);
return ret__5198;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__5199 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__5200 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__5199,subidx__5200,(((level === 5))?tail_node:(function (){var child__5201 = cljs.core.pv_aget.call(null,ret__5199,subidx__5200);
if((child__5201 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__5201,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__5199;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__5202 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__5203 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__5204 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__5202,subidx__5203));
if((function (){var and__3822__auto____5205 = (new_child__5204 == null);
if(and__3822__auto____5205)
{return (subidx__5203 === 0);
} else
{return and__3822__auto____5205;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__5202,subidx__5203,new_child__5204);
return node__5202;
}
} else
{if((subidx__5203 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__5202,subidx__5203,null);
return node__5202;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____5206 = (0 <= i);
if(and__3822__auto____5206)
{return (i < tv.cnt);
} else
{return and__3822__auto____5206;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__5207 = tv.root;
var node__5208 = root__5207;
var level__5209 = tv.shift;
while(true){
if((level__5209 > 0))
{{
var G__5210 = cljs.core.tv_ensure_editable.call(null,root__5207.edit,cljs.core.pv_aget.call(null,node__5208,((i >>> level__5209) & 31)));
var G__5211 = (level__5209 - 5);
node__5208 = G__5210;
level__5209 = G__5211;
continue;
}
} else
{return node__5208.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 147;
this.cljs$lang$protocol_mask$partition1$ = 11;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.TransientVector");
});
cljs.core.TransientVector.prototype.cljs$core$IFn$ = true;
cljs.core.TransientVector.prototype.call = (function() {
var G__5249 = null;
var G__5249__2 = (function (tsym5214,k){
var this__5216 = this;
var tsym5214__5217 = this;
var coll__5218 = tsym5214__5217;
return cljs.core._lookup.call(null,coll__5218,k);
});
var G__5249__3 = (function (tsym5215,k,not_found){
var this__5219 = this;
var tsym5215__5220 = this;
var coll__5221 = tsym5215__5220;
return cljs.core._lookup.call(null,coll__5221,k,not_found);
});
G__5249 = function(tsym5215,k,not_found){
switch(arguments.length){
case 2:
return G__5249__2.call(this,tsym5215,k);
case 3:
return G__5249__3.call(this,tsym5215,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5249;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym5212,args5213){
return tsym5212.call.apply(tsym5212,[tsym5212].concat(cljs.core.aclone.call(null,args5213)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5222 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5223 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5224 = this;
if(cljs.core.truth_(this__5224.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5225 = this;
if((function (){var and__3822__auto____5226 = (0 <= n);
if(and__3822__auto____5226)
{return (n < this__5225.cnt);
} else
{return and__3822__auto____5226;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5227 = this;
if(cljs.core.truth_(this__5227.root.edit))
{return this__5227.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__5228 = this;
if(cljs.core.truth_(this__5228.root.edit))
{if((function (){var and__3822__auto____5229 = (0 <= n);
if(and__3822__auto____5229)
{return (n < this__5228.cnt);
} else
{return and__3822__auto____5229;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__5228.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__5232 = (function go(level,node){
var node__5230 = cljs.core.tv_ensure_editable.call(null,this__5228.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__5230,(n & 31),val);
return node__5230;
} else
{var subidx__5231 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__5230,subidx__5231,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__5230,subidx__5231)));
return node__5230;
}
}).call(null,this__5228.shift,this__5228.root);
this__5228.root = new_root__5232;
return tcoll;
}
} else
{if((n === this__5228.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__5228.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__5233 = this;
if(cljs.core.truth_(this__5233.root.edit))
{if((this__5233.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__5233.cnt))
{this__5233.cnt = 0;
return tcoll;
} else
{if((((this__5233.cnt - 1) & 31) > 0))
{this__5233.cnt = (this__5233.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__5234 = cljs.core.editable_array_for.call(null,tcoll,(this__5233.cnt - 2));
var new_root__5236 = (function (){var nr__5235 = cljs.core.tv_pop_tail.call(null,tcoll,this__5233.shift,this__5233.root);
if((nr__5235 != null))
{return nr__5235;
} else
{return (new cljs.core.VectorNode(this__5233.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____5237 = (5 < this__5233.shift);
if(and__3822__auto____5237)
{return (cljs.core.pv_aget.call(null,new_root__5236,1) == null);
} else
{return and__3822__auto____5237;
}
})())
{var new_root__5238 = cljs.core.tv_ensure_editable.call(null,this__5233.root.edit,cljs.core.pv_aget.call(null,new_root__5236,0));
this__5233.root = new_root__5238;
this__5233.shift = (this__5233.shift - 5);
this__5233.cnt = (this__5233.cnt - 1);
this__5233.tail = new_tail__5234;
return tcoll;
} else
{this__5233.root = new_root__5236;
this__5233.cnt = (this__5233.cnt - 1);
this__5233.tail = new_tail__5234;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__5239 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__5240 = this;
if(cljs.core.truth_(this__5240.root.edit))
{if(((this__5240.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__5240.tail[(this__5240.cnt & 31)] = o);
this__5240.cnt = (this__5240.cnt + 1);
return tcoll;
} else
{var tail_node__5241 = (new cljs.core.VectorNode(this__5240.root.edit,this__5240.tail));
var new_tail__5242 = cljs.core.make_array.call(null,32);
(new_tail__5242[0] = o);
this__5240.tail = new_tail__5242;
if(((this__5240.cnt >>> 5) > (1 << this__5240.shift)))
{var new_root_array__5243 = cljs.core.make_array.call(null,32);
var new_shift__5244 = (this__5240.shift + 5);
(new_root_array__5243[0] = this__5240.root);
(new_root_array__5243[1] = cljs.core.new_path.call(null,this__5240.root.edit,this__5240.shift,tail_node__5241));
this__5240.root = (new cljs.core.VectorNode(this__5240.root.edit,new_root_array__5243));
this__5240.shift = new_shift__5244;
this__5240.cnt = (this__5240.cnt + 1);
return tcoll;
} else
{var new_root__5245 = cljs.core.tv_push_tail.call(null,tcoll,this__5240.shift,this__5240.root,tail_node__5241);
this__5240.root = new_root__5245;
this__5240.cnt = (this__5240.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__5246 = this;
if(cljs.core.truth_(this__5246.root.edit))
{this__5246.root.edit = null;
var len__5247 = (this__5246.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__5248 = cljs.core.make_array.call(null,len__5247);
cljs.core.array_copy.call(null,this__5246.tail,0,trimmed_tail__5248,0,len__5247);
return (new cljs.core.PersistentVector(null,this__5246.cnt,this__5246.shift,this__5246.root,trimmed_tail__5248,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5250 = this;
var h__264__auto____5251 = this__5250.__hash;
if((h__264__auto____5251 != null))
{return h__264__auto____5251;
} else
{var h__264__auto____5252 = cljs.core.hash_coll.call(null,coll);
this__5250.__hash = h__264__auto____5252;
return h__264__auto____5252;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5253 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__5254 = this;
var this$__5255 = this;
return cljs.core.pr_str.call(null,this$__5255);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5256 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5257 = this;
return cljs.core._first.call(null,this__5257.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__5258 = this;
var temp__3971__auto____5259 = cljs.core.next.call(null,this__5258.front);
if(cljs.core.truth_(temp__3971__auto____5259))
{var f1__5260 = temp__3971__auto____5259;
return (new cljs.core.PersistentQueueSeq(this__5258.meta,f1__5260,this__5258.rear,null));
} else
{if((this__5258.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__5258.meta,this__5258.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5261 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5262 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__5262.front,this__5262.rear,this__5262.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5263 = this;
return this__5263.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5264 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5264.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15929422;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5265 = this;
var h__264__auto____5266 = this__5265.__hash;
if((h__264__auto____5266 != null))
{return h__264__auto____5266;
} else
{var h__264__auto____5267 = cljs.core.hash_coll.call(null,coll);
this__5265.__hash = h__264__auto____5267;
return h__264__auto____5267;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5268 = this;
if(cljs.core.truth_(this__5268.front))
{return (new cljs.core.PersistentQueue(this__5268.meta,(this__5268.count + 1),this__5268.front,cljs.core.conj.call(null,(function (){var or__3824__auto____5269 = this__5268.rear;
if(cljs.core.truth_(or__3824__auto____5269))
{return or__3824__auto____5269;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__5268.meta,(this__5268.count + 1),cljs.core.conj.call(null,this__5268.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__5270 = this;
var this$__5271 = this;
return cljs.core.pr_str.call(null,this$__5271);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5272 = this;
var rear__5273 = cljs.core.seq.call(null,this__5272.rear);
if(cljs.core.truth_((function (){var or__3824__auto____5274 = this__5272.front;
if(cljs.core.truth_(or__3824__auto____5274))
{return or__3824__auto____5274;
} else
{return rear__5273;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__5272.front,cljs.core.seq.call(null,rear__5273),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5275 = this;
return this__5275.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5276 = this;
return cljs.core._first.call(null,this__5276.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5277 = this;
if(cljs.core.truth_(this__5277.front))
{var temp__3971__auto____5278 = cljs.core.next.call(null,this__5277.front);
if(cljs.core.truth_(temp__3971__auto____5278))
{var f1__5279 = temp__3971__auto____5278;
return (new cljs.core.PersistentQueue(this__5277.meta,(this__5277.count - 1),f1__5279,this__5277.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__5277.meta,(this__5277.count - 1),cljs.core.seq.call(null,this__5277.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5280 = this;
return cljs.core.first.call(null,this__5280.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__5281 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5282 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5283 = this;
return (new cljs.core.PersistentQueue(meta,this__5283.count,this__5283.front,this__5283.rear,this__5283.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5284 = this;
return this__5284.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5285 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([]),0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1048576;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__5286 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__5287 = array.length;
var i__5288 = 0;
while(true){
if((i__5288 < len__5287))
{if(cljs.core._EQ_.call(null,k,(array[i__5288])))
{return i__5288;
} else
{{
var G__5289 = (i__5288 + incr);
i__5288 = G__5289;
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
var obj_map_contains_key_QMARK___2 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3822__auto____5290 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3822__auto____5290))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____5290;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case 2:
return obj_map_contains_key_QMARK___2.call(this,k,strobj);
case 4:
return obj_map_contains_key_QMARK___4.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
obj_map_contains_key_QMARK_.cljs$lang$arity$2 = obj_map_contains_key_QMARK___2;
obj_map_contains_key_QMARK_.cljs$lang$arity$4 = obj_map_contains_key_QMARK___4;
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__5291 = cljs.core.hash.call(null,a);
var b__5292 = cljs.core.hash.call(null,b);
if((a__5291 < b__5292))
{return -1;
} else
{if((a__5291 > b__5292))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__5294 = m.keys;
var len__5295 = ks__5294.length;
var so__5296 = m.strobj;
var out__5297 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__5298 = 0;
var out__5299 = cljs.core.transient$.call(null,out__5297);
while(true){
if((i__5298 < len__5295))
{var k__5300 = (ks__5294[i__5298]);
{
var G__5301 = (i__5298 + 1);
var G__5302 = cljs.core.assoc_BANG_.call(null,out__5299,k__5300,(so__5296[k__5300]));
i__5298 = G__5301;
out__5299 = G__5302;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__5299,k,v));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155021199;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__5307 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5308 = this;
var h__264__auto____5309 = this__5308.__hash;
if((h__264__auto____5309 != null))
{return h__264__auto____5309;
} else
{var h__264__auto____5310 = cljs.core.hash_imap.call(null,coll);
this__5308.__hash = h__264__auto____5310;
return h__264__auto____5310;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5311 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5312 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__5312.strobj,(this__5312.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5313 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___5314 = this__5313.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___5314))
{var new_strobj__5315 = goog.object.clone.call(null,this__5313.strobj);
(new_strobj__5315[k] = v);
return (new cljs.core.ObjMap(this__5313.meta,this__5313.keys,new_strobj__5315,(this__5313.update_count + 1),null));
} else
{if((this__5313.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__5316 = goog.object.clone.call(null,this__5313.strobj);
var new_keys__5317 = cljs.core.aclone.call(null,this__5313.keys);
(new_strobj__5316[k] = v);
new_keys__5317.push(k);
return (new cljs.core.ObjMap(this__5313.meta,new_keys__5317,new_strobj__5316,(this__5313.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__5318 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__5318.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__5338 = null;
var G__5338__2 = (function (tsym5305,k){
var this__5319 = this;
var tsym5305__5320 = this;
var coll__5321 = tsym5305__5320;
return cljs.core._lookup.call(null,coll__5321,k);
});
var G__5338__3 = (function (tsym5306,k,not_found){
var this__5322 = this;
var tsym5306__5323 = this;
var coll__5324 = tsym5306__5323;
return cljs.core._lookup.call(null,coll__5324,k,not_found);
});
G__5338 = function(tsym5306,k,not_found){
switch(arguments.length){
case 2:
return G__5338__2.call(this,tsym5306,k);
case 3:
return G__5338__3.call(this,tsym5306,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5338;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym5303,args5304){
return tsym5303.call.apply(tsym5303,[tsym5303].concat(cljs.core.aclone.call(null,args5304)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__5325 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__5326 = this;
var this$__5327 = this;
return cljs.core.pr_str.call(null,this$__5327);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5328 = this;
if((this__5328.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__5293_SHARP_){
return cljs.core.vector.call(null,p1__5293_SHARP_,(this__5328.strobj[p1__5293_SHARP_]));
}),this__5328.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5329 = this;
return this__5329.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5330 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5331 = this;
return (new cljs.core.ObjMap(meta,this__5331.keys,this__5331.strobj,this__5331.update_count,this__5331.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5332 = this;
return this__5332.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5333 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__5333.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__5334 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5335 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3822__auto____5335))
{return this__5334.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____5335;
}
})()))
{var new_keys__5336 = cljs.core.aclone.call(null,this__5334.keys);
var new_strobj__5337 = goog.object.clone.call(null,this__5334.strobj);
new_keys__5336.splice(cljs.core.scan_array.call(null,1,k,new_keys__5336),1);
cljs.core.js_delete.call(null,new_strobj__5337,k);
return (new cljs.core.ObjMap(this__5334.meta,new_keys__5336,new_strobj__5337,(this__5334.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 7537551;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5344 = this;
var h__264__auto____5345 = this__5344.__hash;
if((h__264__auto____5345 != null))
{return h__264__auto____5345;
} else
{var h__264__auto____5346 = cljs.core.hash_imap.call(null,coll);
this__5344.__hash = h__264__auto____5346;
return h__264__auto____5346;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5347 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5348 = this;
var bucket__5349 = (this__5348.hashobj[cljs.core.hash.call(null,k)]);
var i__5350 = (cljs.core.truth_(bucket__5349)?cljs.core.scan_array.call(null,2,k,bucket__5349):null);
if(cljs.core.truth_(i__5350))
{return (bucket__5349[(i__5350 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5351 = this;
var h__5352 = cljs.core.hash.call(null,k);
var bucket__5353 = (this__5351.hashobj[h__5352]);
if(cljs.core.truth_(bucket__5353))
{var new_bucket__5354 = cljs.core.aclone.call(null,bucket__5353);
var new_hashobj__5355 = goog.object.clone.call(null,this__5351.hashobj);
(new_hashobj__5355[h__5352] = new_bucket__5354);
var temp__3971__auto____5356 = cljs.core.scan_array.call(null,2,k,new_bucket__5354);
if(cljs.core.truth_(temp__3971__auto____5356))
{var i__5357 = temp__3971__auto____5356;
(new_bucket__5354[(i__5357 + 1)] = v);
return (new cljs.core.HashMap(this__5351.meta,this__5351.count,new_hashobj__5355,null));
} else
{new_bucket__5354.push(k,v);
return (new cljs.core.HashMap(this__5351.meta,(this__5351.count + 1),new_hashobj__5355,null));
}
} else
{var new_hashobj__5358 = goog.object.clone.call(null,this__5351.hashobj);
(new_hashobj__5358[h__5352] = [k,v]);
return (new cljs.core.HashMap(this__5351.meta,(this__5351.count + 1),new_hashobj__5358,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__5359 = this;
var bucket__5360 = (this__5359.hashobj[cljs.core.hash.call(null,k)]);
var i__5361 = (cljs.core.truth_(bucket__5360)?cljs.core.scan_array.call(null,2,k,bucket__5360):null);
if(cljs.core.truth_(i__5361))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__5384 = null;
var G__5384__2 = (function (tsym5342,k){
var this__5362 = this;
var tsym5342__5363 = this;
var coll__5364 = tsym5342__5363;
return cljs.core._lookup.call(null,coll__5364,k);
});
var G__5384__3 = (function (tsym5343,k,not_found){
var this__5365 = this;
var tsym5343__5366 = this;
var coll__5367 = tsym5343__5366;
return cljs.core._lookup.call(null,coll__5367,k,not_found);
});
G__5384 = function(tsym5343,k,not_found){
switch(arguments.length){
case 2:
return G__5384__2.call(this,tsym5343,k);
case 3:
return G__5384__3.call(this,tsym5343,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5384;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym5340,args5341){
return tsym5340.call.apply(tsym5340,[tsym5340].concat(cljs.core.aclone.call(null,args5341)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__5368 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__5369 = this;
var this$__5370 = this;
return cljs.core.pr_str.call(null,this$__5370);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5371 = this;
if((this__5371.count > 0))
{var hashes__5372 = cljs.core.js_keys.call(null,this__5371.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__5339_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__5371.hashobj[p1__5339_SHARP_])));
}),hashes__5372);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5373 = this;
return this__5373.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5374 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5375 = this;
return (new cljs.core.HashMap(meta,this__5375.count,this__5375.hashobj,this__5375.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5376 = this;
return this__5376.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5377 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__5377.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__5378 = this;
var h__5379 = cljs.core.hash.call(null,k);
var bucket__5380 = (this__5378.hashobj[h__5379]);
var i__5381 = (cljs.core.truth_(bucket__5380)?cljs.core.scan_array.call(null,2,k,bucket__5380):null);
if(cljs.core.not.call(null,i__5381))
{return coll;
} else
{var new_hashobj__5382 = goog.object.clone.call(null,this__5378.hashobj);
if((3 > bucket__5380.length))
{cljs.core.js_delete.call(null,new_hashobj__5382,h__5379);
} else
{var new_bucket__5383 = cljs.core.aclone.call(null,bucket__5380);
new_bucket__5383.splice(i__5381,2);
(new_hashobj__5382[h__5379] = new_bucket__5383);
}
return (new cljs.core.HashMap(this__5378.meta,(this__5378.count - 1),new_hashobj__5382,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__5385 = ks.length;
var i__5386 = 0;
var out__5387 = cljs.core.HashMap.EMPTY;
while(true){
if((i__5386 < len__5385))
{{
var G__5388 = (i__5386 + 1);
var G__5389 = cljs.core.assoc.call(null,out__5387,(ks[i__5386]),(vs[i__5386]));
i__5386 = G__5388;
out__5387 = G__5389;
continue;
}
} else
{return out__5387;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__5390 = m.arr;
var len__5391 = arr__5390.length;
var i__5392 = 0;
while(true){
if((len__5391 <= i__5392))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__5390[i__5392]),k))
{return i__5392;
} else
{if("\uFDD0'else")
{{
var G__5393 = (i__5392 + 2);
i__5392 = G__5393;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__5398 = this;
return (new cljs.core.TransientArrayMap({},this__5398.arr.length,cljs.core.aclone.call(null,this__5398.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5399 = this;
var h__264__auto____5400 = this__5399.__hash;
if((h__264__auto____5400 != null))
{return h__264__auto____5400;
} else
{var h__264__auto____5401 = cljs.core.hash_imap.call(null,coll);
this__5399.__hash = h__264__auto____5401;
return h__264__auto____5401;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5402 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5403 = this;
var idx__5404 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__5404 === -1))
{return not_found;
} else
{return (this__5403.arr[(idx__5404 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5405 = this;
var idx__5406 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__5406 === -1))
{if((this__5405.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__5405.meta,(this__5405.cnt + 1),(function (){var G__5407__5408 = cljs.core.aclone.call(null,this__5405.arr);
G__5407__5408.push(k);
G__5407__5408.push(v);
return G__5407__5408;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__5405.arr[(idx__5406 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__5405.meta,this__5405.cnt,(function (){var G__5409__5410 = cljs.core.aclone.call(null,this__5405.arr);
(G__5409__5410[(idx__5406 + 1)] = v);
return G__5409__5410;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__5411 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__5441 = null;
var G__5441__2 = (function (tsym5396,k){
var this__5412 = this;
var tsym5396__5413 = this;
var coll__5414 = tsym5396__5413;
return cljs.core._lookup.call(null,coll__5414,k);
});
var G__5441__3 = (function (tsym5397,k,not_found){
var this__5415 = this;
var tsym5397__5416 = this;
var coll__5417 = tsym5397__5416;
return cljs.core._lookup.call(null,coll__5417,k,not_found);
});
G__5441 = function(tsym5397,k,not_found){
switch(arguments.length){
case 2:
return G__5441__2.call(this,tsym5397,k);
case 3:
return G__5441__3.call(this,tsym5397,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5441;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym5394,args5395){
return tsym5394.call.apply(tsym5394,[tsym5394].concat(cljs.core.aclone.call(null,args5395)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__5418 = this;
var len__5419 = this__5418.arr.length;
var i__5420 = 0;
var init__5421 = init;
while(true){
if((i__5420 < len__5419))
{var init__5422 = f.call(null,init__5421,(this__5418.arr[i__5420]),(this__5418.arr[(i__5420 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__5422))
{return cljs.core.deref.call(null,init__5422);
} else
{{
var G__5442 = (i__5420 + 2);
var G__5443 = init__5422;
i__5420 = G__5442;
init__5421 = G__5443;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__5423 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__5424 = this;
var this$__5425 = this;
return cljs.core.pr_str.call(null,this$__5425);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5426 = this;
if((this__5426.cnt > 0))
{var len__5427 = this__5426.arr.length;
var array_map_seq__5428 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__5427))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__5426.arr[i]),(this__5426.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__5428.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5429 = this;
return this__5429.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5430 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5431 = this;
return (new cljs.core.PersistentArrayMap(meta,this__5431.cnt,this__5431.arr,this__5431.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5432 = this;
return this__5432.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5433 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5433.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__5434 = this;
var idx__5435 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__5435 >= 0))
{var len__5436 = this__5434.arr.length;
var new_len__5437 = (len__5436 - 2);
if((new_len__5437 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__5438 = cljs.core.make_array.call(null,new_len__5437);
var s__5439 = 0;
var d__5440 = 0;
while(true){
if((s__5439 >= len__5436))
{return (new cljs.core.PersistentArrayMap(this__5434.meta,(this__5434.cnt - 1),new_arr__5438,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__5434.arr[s__5439])))
{{
var G__5444 = (s__5439 + 2);
var G__5445 = d__5440;
s__5439 = G__5444;
d__5440 = G__5445;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__5438[d__5440] = (this__5434.arr[s__5439]));
(new_arr__5438[(d__5440 + 1)] = (this__5434.arr[(s__5439 + 1)]));
{
var G__5446 = (s__5439 + 2);
var G__5447 = (d__5440 + 2);
s__5439 = G__5446;
d__5440 = G__5447;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__5448 = cljs.core.count.call(null,ks);
var i__5449 = 0;
var out__5450 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__5449 < len__5448))
{{
var G__5451 = (i__5449 + 1);
var G__5452 = cljs.core.assoc_BANG_.call(null,out__5450,(ks[i__5449]),(vs[i__5449]));
i__5449 = G__5451;
out__5450 = G__5452;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__5450);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__5453 = this;
if(cljs.core.truth_(this__5453.editable_QMARK_))
{var idx__5454 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__5454 >= 0))
{(this__5453.arr[idx__5454] = (this__5453.arr[(this__5453.len - 2)]));
(this__5453.arr[(idx__5454 + 1)] = (this__5453.arr[(this__5453.len - 1)]));
var G__5455__5456 = this__5453.arr;
G__5455__5456.pop();
G__5455__5456.pop();
G__5455__5456;
this__5453.len = (this__5453.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__5457 = this;
if(cljs.core.truth_(this__5457.editable_QMARK_))
{var idx__5458 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__5458 === -1))
{if(((this__5457.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__5457.len = (this__5457.len + 2);
this__5457.arr.push(key);
this__5457.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__5457.len,this__5457.arr),key,val);
}
} else
{if((val === (this__5457.arr[(idx__5458 + 1)])))
{return tcoll;
} else
{(this__5457.arr[(idx__5458 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__5459 = this;
if(cljs.core.truth_(this__5459.editable_QMARK_))
{if((function (){var G__5460__5461 = o;
if((G__5460__5461 != null))
{if((function (){var or__3824__auto____5462 = (G__5460__5461.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____5462)
{return or__3824__auto____5462;
} else
{return G__5460__5461.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__5460__5461.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__5460__5461);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__5460__5461);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__5463 = cljs.core.seq.call(null,o);
var tcoll__5464 = tcoll;
while(true){
var temp__3971__auto____5465 = cljs.core.first.call(null,es__5463);
if(cljs.core.truth_(temp__3971__auto____5465))
{var e__5466 = temp__3971__auto____5465;
{
var G__5472 = cljs.core.next.call(null,es__5463);
var G__5473 = cljs.core._assoc_BANG_.call(null,tcoll__5464,cljs.core.key.call(null,e__5466),cljs.core.val.call(null,e__5466));
es__5463 = G__5472;
tcoll__5464 = G__5473;
continue;
}
} else
{return tcoll__5464;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__5467 = this;
if(cljs.core.truth_(this__5467.editable_QMARK_))
{this__5467.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__5467.len,2),this__5467.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__5468 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__5469 = this;
if(cljs.core.truth_(this__5469.editable_QMARK_))
{var idx__5470 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__5470 === -1))
{return not_found;
} else
{return (this__5469.arr[(idx__5470 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__5471 = this;
if(cljs.core.truth_(this__5471.editable_QMARK_))
{return cljs.core.quot.call(null,this__5471.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__5474 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__5475 = 0;
while(true){
if((i__5475 < len))
{{
var G__5476 = cljs.core.assoc_BANG_.call(null,out__5474,(arr[i__5475]),(arr[(i__5475 + 1)]));
var G__5477 = (i__5475 + 2);
out__5474 = G__5476;
i__5475 = G__5477;
continue;
}
} else
{return out__5474;
}
break;
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__5478__5479 = cljs.core.aclone.call(null,arr);
(G__5478__5479[i] = a);
return G__5478__5479;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__5480__5481 = cljs.core.aclone.call(null,arr);
(G__5480__5481[i] = a);
(G__5480__5481[j] = b);
return G__5480__5481;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__5482 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__5482,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__5482,(2 * i),(new_arr__5482.length - (2 * i)));
return new_arr__5482;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__5483 = inode.ensure_editable(edit);
(editable__5483.arr[i] = a);
return editable__5483;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__5484 = inode.ensure_editable(edit);
(editable__5484.arr[i] = a);
(editable__5484.arr[j] = b);
return editable__5484;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__5485 = arr.length;
var i__5486 = 0;
var init__5487 = init;
while(true){
if((i__5486 < len__5485))
{var init__5490 = (function (){var k__5488 = (arr[i__5486]);
if((k__5488 != null))
{return f.call(null,init__5487,k__5488,(arr[(i__5486 + 1)]));
} else
{var node__5489 = (arr[(i__5486 + 1)]);
if((node__5489 != null))
{return node__5489.kv_reduce(f,init__5487);
} else
{return init__5487;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__5490))
{return cljs.core.deref.call(null,init__5490);
} else
{{
var G__5491 = (i__5486 + 2);
var G__5492 = init__5490;
i__5486 = G__5491;
init__5487 = G__5492;
continue;
}
}
} else
{return init__5487;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__5493 = this;
var inode__5494 = this;
if((this__5493.bitmap === bit))
{return null;
} else
{var editable__5495 = inode__5494.ensure_editable(e);
var earr__5496 = editable__5495.arr;
var len__5497 = earr__5496.length;
editable__5495.bitmap = (bit ^ editable__5495.bitmap);
cljs.core.array_copy.call(null,earr__5496,(2 * (i + 1)),earr__5496,(2 * i),(len__5497 - (2 * (i + 1))));
(earr__5496[(len__5497 - 2)] = null);
(earr__5496[(len__5497 - 1)] = null);
return editable__5495;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__5498 = this;
var inode__5499 = this;
var bit__5500 = (1 << ((hash >>> shift) & 0x01f));
var idx__5501 = cljs.core.bitmap_indexed_node_index.call(null,this__5498.bitmap,bit__5500);
if(((this__5498.bitmap & bit__5500) === 0))
{var n__5502 = cljs.core.bit_count.call(null,this__5498.bitmap);
if(((2 * n__5502) < this__5498.arr.length))
{var editable__5503 = inode__5499.ensure_editable(edit);
var earr__5504 = editable__5503.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__5504,(2 * idx__5501),earr__5504,(2 * (idx__5501 + 1)),(2 * (n__5502 - idx__5501)));
(earr__5504[(2 * idx__5501)] = key);
(earr__5504[((2 * idx__5501) + 1)] = val);
editable__5503.bitmap = (editable__5503.bitmap | bit__5500);
return editable__5503;
} else
{if((n__5502 >= 16))
{var nodes__5505 = cljs.core.make_array.call(null,32);
var jdx__5506 = ((hash >>> shift) & 0x01f);
(nodes__5505[jdx__5506] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__5507 = 0;
var j__5508 = 0;
while(true){
if((i__5507 < 32))
{if((((this__5498.bitmap >>> i__5507) & 1) === 0))
{{
var G__5561 = (i__5507 + 1);
var G__5562 = j__5508;
i__5507 = G__5561;
j__5508 = G__5562;
continue;
}
} else
{(nodes__5505[i__5507] = (((null != (this__5498.arr[j__5508])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__5498.arr[j__5508])),(this__5498.arr[j__5508]),(this__5498.arr[(j__5508 + 1)]),added_leaf_QMARK_):(this__5498.arr[(j__5508 + 1)])));
{
var G__5563 = (i__5507 + 1);
var G__5564 = (j__5508 + 2);
i__5507 = G__5563;
j__5508 = G__5564;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__5502 + 1),nodes__5505));
} else
{if("\uFDD0'else")
{var new_arr__5509 = cljs.core.make_array.call(null,(2 * (n__5502 + 4)));
cljs.core.array_copy.call(null,this__5498.arr,0,new_arr__5509,0,(2 * idx__5501));
(new_arr__5509[(2 * idx__5501)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__5509[((2 * idx__5501) + 1)] = val);
cljs.core.array_copy.call(null,this__5498.arr,(2 * idx__5501),new_arr__5509,(2 * (idx__5501 + 1)),(2 * (n__5502 - idx__5501)));
var editable__5510 = inode__5499.ensure_editable(edit);
editable__5510.arr = new_arr__5509;
editable__5510.bitmap = (editable__5510.bitmap | bit__5500);
return editable__5510;
} else
{return null;
}
}
}
} else
{var key_or_nil__5511 = (this__5498.arr[(2 * idx__5501)]);
var val_or_node__5512 = (this__5498.arr[((2 * idx__5501) + 1)]);
if((null == key_or_nil__5511))
{var n__5513 = val_or_node__5512.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__5513 === val_or_node__5512))
{return inode__5499;
} else
{return cljs.core.edit_and_set.call(null,inode__5499,edit,((2 * idx__5501) + 1),n__5513);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__5511))
{if((val === val_or_node__5512))
{return inode__5499;
} else
{return cljs.core.edit_and_set.call(null,inode__5499,edit,((2 * idx__5501) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__5499,edit,(2 * idx__5501),null,((2 * idx__5501) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__5511,val_or_node__5512,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__5514 = this;
var inode__5515 = this;
return cljs.core.create_inode_seq.call(null,this__5514.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__5516 = this;
var inode__5517 = this;
var bit__5518 = (1 << ((hash >>> shift) & 0x01f));
if(((this__5516.bitmap & bit__5518) === 0))
{return inode__5517;
} else
{var idx__5519 = cljs.core.bitmap_indexed_node_index.call(null,this__5516.bitmap,bit__5518);
var key_or_nil__5520 = (this__5516.arr[(2 * idx__5519)]);
var val_or_node__5521 = (this__5516.arr[((2 * idx__5519) + 1)]);
if((null == key_or_nil__5520))
{var n__5522 = val_or_node__5521.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__5522 === val_or_node__5521))
{return inode__5517;
} else
{if((null != n__5522))
{return cljs.core.edit_and_set.call(null,inode__5517,edit,((2 * idx__5519) + 1),n__5522);
} else
{if((this__5516.bitmap === bit__5518))
{return null;
} else
{if("\uFDD0'else")
{return inode__5517.edit_and_remove_pair(edit,bit__5518,idx__5519);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__5520))
{(removed_leaf_QMARK_[0] = true);
return inode__5517.edit_and_remove_pair(edit,bit__5518,idx__5519);
} else
{if("\uFDD0'else")
{return inode__5517;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__5523 = this;
var inode__5524 = this;
if((e === this__5523.edit))
{return inode__5524;
} else
{var n__5525 = cljs.core.bit_count.call(null,this__5523.bitmap);
var new_arr__5526 = cljs.core.make_array.call(null,(((n__5525 < 0))?4:(2 * (n__5525 + 1))));
cljs.core.array_copy.call(null,this__5523.arr,0,new_arr__5526,0,(2 * n__5525));
return (new cljs.core.BitmapIndexedNode(e,this__5523.bitmap,new_arr__5526));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__5527 = this;
var inode__5528 = this;
return cljs.core.inode_kv_reduce.call(null,this__5527.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__5565 = null;
var G__5565__3 = (function (shift,hash,key){
var this__5529 = this;
var inode__5530 = this;
var bit__5531 = (1 << ((hash >>> shift) & 0x01f));
if(((this__5529.bitmap & bit__5531) === 0))
{return null;
} else
{var idx__5532 = cljs.core.bitmap_indexed_node_index.call(null,this__5529.bitmap,bit__5531);
var key_or_nil__5533 = (this__5529.arr[(2 * idx__5532)]);
var val_or_node__5534 = (this__5529.arr[((2 * idx__5532) + 1)]);
if((null == key_or_nil__5533))
{return val_or_node__5534.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__5533))
{return cljs.core.PersistentVector.fromArray([key_or_nil__5533,val_or_node__5534]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
});
var G__5565__4 = (function (shift,hash,key,not_found){
var this__5535 = this;
var inode__5536 = this;
var bit__5537 = (1 << ((hash >>> shift) & 0x01f));
if(((this__5535.bitmap & bit__5537) === 0))
{return not_found;
} else
{var idx__5538 = cljs.core.bitmap_indexed_node_index.call(null,this__5535.bitmap,bit__5537);
var key_or_nil__5539 = (this__5535.arr[(2 * idx__5538)]);
var val_or_node__5540 = (this__5535.arr[((2 * idx__5538) + 1)]);
if((null == key_or_nil__5539))
{return val_or_node__5540.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__5539))
{return cljs.core.PersistentVector.fromArray([key_or_nil__5539,val_or_node__5540]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
G__5565 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__5565__3.call(this,shift,hash,key);
case 4:
return G__5565__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5565;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__5541 = this;
var inode__5542 = this;
var bit__5543 = (1 << ((hash >>> shift) & 0x01f));
if(((this__5541.bitmap & bit__5543) === 0))
{return inode__5542;
} else
{var idx__5544 = cljs.core.bitmap_indexed_node_index.call(null,this__5541.bitmap,bit__5543);
var key_or_nil__5545 = (this__5541.arr[(2 * idx__5544)]);
var val_or_node__5546 = (this__5541.arr[((2 * idx__5544) + 1)]);
if((null == key_or_nil__5545))
{var n__5547 = val_or_node__5546.inode_without((shift + 5),hash,key);
if((n__5547 === val_or_node__5546))
{return inode__5542;
} else
{if((null != n__5547))
{return (new cljs.core.BitmapIndexedNode(null,this__5541.bitmap,cljs.core.clone_and_set.call(null,this__5541.arr,((2 * idx__5544) + 1),n__5547)));
} else
{if((this__5541.bitmap === bit__5543))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__5541.bitmap ^ bit__5543),cljs.core.remove_pair.call(null,this__5541.arr,idx__5544)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__5545))
{return (new cljs.core.BitmapIndexedNode(null,(this__5541.bitmap ^ bit__5543),cljs.core.remove_pair.call(null,this__5541.arr,idx__5544)));
} else
{if("\uFDD0'else")
{return inode__5542;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__5548 = this;
var inode__5549 = this;
var bit__5550 = (1 << ((hash >>> shift) & 0x01f));
var idx__5551 = cljs.core.bitmap_indexed_node_index.call(null,this__5548.bitmap,bit__5550);
if(((this__5548.bitmap & bit__5550) === 0))
{var n__5552 = cljs.core.bit_count.call(null,this__5548.bitmap);
if((n__5552 >= 16))
{var nodes__5553 = cljs.core.make_array.call(null,32);
var jdx__5554 = ((hash >>> shift) & 0x01f);
(nodes__5553[jdx__5554] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__5555 = 0;
var j__5556 = 0;
while(true){
if((i__5555 < 32))
{if((((this__5548.bitmap >>> i__5555) & 1) === 0))
{{
var G__5566 = (i__5555 + 1);
var G__5567 = j__5556;
i__5555 = G__5566;
j__5556 = G__5567;
continue;
}
} else
{(nodes__5553[i__5555] = (((null != (this__5548.arr[j__5556])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__5548.arr[j__5556])),(this__5548.arr[j__5556]),(this__5548.arr[(j__5556 + 1)]),added_leaf_QMARK_):(this__5548.arr[(j__5556 + 1)])));
{
var G__5568 = (i__5555 + 1);
var G__5569 = (j__5556 + 2);
i__5555 = G__5568;
j__5556 = G__5569;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__5552 + 1),nodes__5553));
} else
{var new_arr__5557 = cljs.core.make_array.call(null,(2 * (n__5552 + 1)));
cljs.core.array_copy.call(null,this__5548.arr,0,new_arr__5557,0,(2 * idx__5551));
(new_arr__5557[(2 * idx__5551)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__5557[((2 * idx__5551) + 1)] = val);
cljs.core.array_copy.call(null,this__5548.arr,(2 * idx__5551),new_arr__5557,(2 * (idx__5551 + 1)),(2 * (n__5552 - idx__5551)));
return (new cljs.core.BitmapIndexedNode(null,(this__5548.bitmap | bit__5550),new_arr__5557));
}
} else
{var key_or_nil__5558 = (this__5548.arr[(2 * idx__5551)]);
var val_or_node__5559 = (this__5548.arr[((2 * idx__5551) + 1)]);
if((null == key_or_nil__5558))
{var n__5560 = val_or_node__5559.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__5560 === val_or_node__5559))
{return inode__5549;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__5548.bitmap,cljs.core.clone_and_set.call(null,this__5548.arr,((2 * idx__5551) + 1),n__5560)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__5558))
{if((val === val_or_node__5559))
{return inode__5549;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__5548.bitmap,cljs.core.clone_and_set.call(null,this__5548.arr,((2 * idx__5551) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__5548.bitmap,cljs.core.clone_and_set.call(null,this__5548.arr,(2 * idx__5551),null,((2 * idx__5551) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__5558,val_or_node__5559,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__5570 = array_node.arr;
var len__5571 = (2 * (array_node.cnt - 1));
var new_arr__5572 = cljs.core.make_array.call(null,len__5571);
var i__5573 = 0;
var j__5574 = 1;
var bitmap__5575 = 0;
while(true){
if((i__5573 < len__5571))
{if((function (){var and__3822__auto____5576 = (i__5573 != idx);
if(and__3822__auto____5576)
{return (null != (arr__5570[i__5573]));
} else
{return and__3822__auto____5576;
}
})())
{(new_arr__5572[j__5574] = (arr__5570[i__5573]));
{
var G__5577 = (i__5573 + 1);
var G__5578 = (j__5574 + 2);
var G__5579 = (bitmap__5575 | (1 << i__5573));
i__5573 = G__5577;
j__5574 = G__5578;
bitmap__5575 = G__5579;
continue;
}
} else
{{
var G__5580 = (i__5573 + 1);
var G__5581 = j__5574;
var G__5582 = bitmap__5575;
i__5573 = G__5580;
j__5574 = G__5581;
bitmap__5575 = G__5582;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__5575,new_arr__5572));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__5583 = this;
var inode__5584 = this;
var idx__5585 = ((hash >>> shift) & 0x01f);
var node__5586 = (this__5583.arr[idx__5585]);
if((null == node__5586))
{return (new cljs.core.ArrayNode(null,(this__5583.cnt + 1),cljs.core.clone_and_set.call(null,this__5583.arr,idx__5585,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__5587 = node__5586.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__5587 === node__5586))
{return inode__5584;
} else
{return (new cljs.core.ArrayNode(null,this__5583.cnt,cljs.core.clone_and_set.call(null,this__5583.arr,idx__5585,n__5587)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__5588 = this;
var inode__5589 = this;
var idx__5590 = ((hash >>> shift) & 0x01f);
var node__5591 = (this__5588.arr[idx__5590]);
if((null != node__5591))
{var n__5592 = node__5591.inode_without((shift + 5),hash,key);
if((n__5592 === node__5591))
{return inode__5589;
} else
{if((n__5592 == null))
{if((this__5588.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__5589,null,idx__5590);
} else
{return (new cljs.core.ArrayNode(null,(this__5588.cnt - 1),cljs.core.clone_and_set.call(null,this__5588.arr,idx__5590,n__5592)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__5588.cnt,cljs.core.clone_and_set.call(null,this__5588.arr,idx__5590,n__5592)));
} else
{return null;
}
}
}
} else
{return inode__5589;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__5624 = null;
var G__5624__3 = (function (shift,hash,key){
var this__5593 = this;
var inode__5594 = this;
var idx__5595 = ((hash >>> shift) & 0x01f);
var node__5596 = (this__5593.arr[idx__5595]);
if((null != node__5596))
{return node__5596.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__5624__4 = (function (shift,hash,key,not_found){
var this__5597 = this;
var inode__5598 = this;
var idx__5599 = ((hash >>> shift) & 0x01f);
var node__5600 = (this__5597.arr[idx__5599]);
if((null != node__5600))
{return node__5600.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__5624 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__5624__3.call(this,shift,hash,key);
case 4:
return G__5624__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5624;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__5601 = this;
var inode__5602 = this;
return cljs.core.create_array_node_seq.call(null,this__5601.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__5603 = this;
var inode__5604 = this;
if((e === this__5603.edit))
{return inode__5604;
} else
{return (new cljs.core.ArrayNode(e,this__5603.cnt,cljs.core.aclone.call(null,this__5603.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__5605 = this;
var inode__5606 = this;
var idx__5607 = ((hash >>> shift) & 0x01f);
var node__5608 = (this__5605.arr[idx__5607]);
if((null == node__5608))
{var editable__5609 = cljs.core.edit_and_set.call(null,inode__5606,edit,idx__5607,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__5609.cnt = (editable__5609.cnt + 1);
return editable__5609;
} else
{var n__5610 = node__5608.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__5610 === node__5608))
{return inode__5606;
} else
{return cljs.core.edit_and_set.call(null,inode__5606,edit,idx__5607,n__5610);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__5611 = this;
var inode__5612 = this;
var idx__5613 = ((hash >>> shift) & 0x01f);
var node__5614 = (this__5611.arr[idx__5613]);
if((null == node__5614))
{return inode__5612;
} else
{var n__5615 = node__5614.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__5615 === node__5614))
{return inode__5612;
} else
{if((null == n__5615))
{if((this__5611.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__5612,edit,idx__5613);
} else
{var editable__5616 = cljs.core.edit_and_set.call(null,inode__5612,edit,idx__5613,n__5615);
editable__5616.cnt = (editable__5616.cnt - 1);
return editable__5616;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__5612,edit,idx__5613,n__5615);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__5617 = this;
var inode__5618 = this;
var len__5619 = this__5617.arr.length;
var i__5620 = 0;
var init__5621 = init;
while(true){
if((i__5620 < len__5619))
{var node__5622 = (this__5617.arr[i__5620]);
if((node__5622 != null))
{var init__5623 = node__5622.kv_reduce(f,init__5621);
if(cljs.core.reduced_QMARK_.call(null,init__5623))
{return cljs.core.deref.call(null,init__5623);
} else
{{
var G__5625 = (i__5620 + 1);
var G__5626 = init__5623;
i__5620 = G__5625;
init__5621 = G__5626;
continue;
}
}
} else
{return null;
}
} else
{return init__5621;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__5627 = (2 * cnt);
var i__5628 = 0;
while(true){
if((i__5628 < lim__5627))
{if(cljs.core._EQ_.call(null,key,(arr[i__5628])))
{return i__5628;
} else
{{
var G__5629 = (i__5628 + 2);
i__5628 = G__5629;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__5630 = this;
var inode__5631 = this;
if((hash === this__5630.collision_hash))
{var idx__5632 = cljs.core.hash_collision_node_find_index.call(null,this__5630.arr,this__5630.cnt,key);
if((idx__5632 === -1))
{var len__5633 = this__5630.arr.length;
var new_arr__5634 = cljs.core.make_array.call(null,(len__5633 + 2));
cljs.core.array_copy.call(null,this__5630.arr,0,new_arr__5634,0,len__5633);
(new_arr__5634[len__5633] = key);
(new_arr__5634[(len__5633 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__5630.collision_hash,(this__5630.cnt + 1),new_arr__5634));
} else
{if(cljs.core._EQ_.call(null,(this__5630.arr[idx__5632]),val))
{return inode__5631;
} else
{return (new cljs.core.HashCollisionNode(null,this__5630.collision_hash,this__5630.cnt,cljs.core.clone_and_set.call(null,this__5630.arr,(idx__5632 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__5630.collision_hash >>> shift) & 0x01f)),[null,inode__5631])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__5635 = this;
var inode__5636 = this;
var idx__5637 = cljs.core.hash_collision_node_find_index.call(null,this__5635.arr,this__5635.cnt,key);
if((idx__5637 === -1))
{return inode__5636;
} else
{if((this__5635.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__5635.collision_hash,(this__5635.cnt - 1),cljs.core.remove_pair.call(null,this__5635.arr,cljs.core.quot.call(null,idx__5637,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__5664 = null;
var G__5664__3 = (function (shift,hash,key){
var this__5638 = this;
var inode__5639 = this;
var idx__5640 = cljs.core.hash_collision_node_find_index.call(null,this__5638.arr,this__5638.cnt,key);
if((idx__5640 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__5638.arr[idx__5640])))
{return cljs.core.PersistentVector.fromArray([(this__5638.arr[idx__5640]),(this__5638.arr[(idx__5640 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__5664__4 = (function (shift,hash,key,not_found){
var this__5641 = this;
var inode__5642 = this;
var idx__5643 = cljs.core.hash_collision_node_find_index.call(null,this__5641.arr,this__5641.cnt,key);
if((idx__5643 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__5641.arr[idx__5643])))
{return cljs.core.PersistentVector.fromArray([(this__5641.arr[idx__5643]),(this__5641.arr[(idx__5643 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__5664 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__5664__3.call(this,shift,hash,key);
case 4:
return G__5664__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5664;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__5644 = this;
var inode__5645 = this;
return cljs.core.create_inode_seq.call(null,this__5644.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__5665 = null;
var G__5665__1 = (function (e){
var this__5646 = this;
var inode__5647 = this;
if((e === this__5646.edit))
{return inode__5647;
} else
{var new_arr__5648 = cljs.core.make_array.call(null,(2 * (this__5646.cnt + 1)));
cljs.core.array_copy.call(null,this__5646.arr,0,new_arr__5648,0,(2 * this__5646.cnt));
return (new cljs.core.HashCollisionNode(e,this__5646.collision_hash,this__5646.cnt,new_arr__5648));
}
});
var G__5665__3 = (function (e,count,array){
var this__5649 = this;
var inode__5650 = this;
if((e === this__5649.edit))
{this__5649.arr = array;
this__5649.cnt = count;
return inode__5650;
} else
{return (new cljs.core.HashCollisionNode(this__5649.edit,this__5649.collision_hash,count,array));
}
});
G__5665 = function(e,count,array){
switch(arguments.length){
case 1:
return G__5665__1.call(this,e);
case 3:
return G__5665__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5665;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__5651 = this;
var inode__5652 = this;
if((hash === this__5651.collision_hash))
{var idx__5653 = cljs.core.hash_collision_node_find_index.call(null,this__5651.arr,this__5651.cnt,key);
if((idx__5653 === -1))
{if((this__5651.arr.length > (2 * this__5651.cnt)))
{var editable__5654 = cljs.core.edit_and_set.call(null,inode__5652,edit,(2 * this__5651.cnt),key,((2 * this__5651.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__5654.cnt = (editable__5654.cnt + 1);
return editable__5654;
} else
{var len__5655 = this__5651.arr.length;
var new_arr__5656 = cljs.core.make_array.call(null,(len__5655 + 2));
cljs.core.array_copy.call(null,this__5651.arr,0,new_arr__5656,0,len__5655);
(new_arr__5656[len__5655] = key);
(new_arr__5656[(len__5655 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__5652.ensure_editable(edit,(this__5651.cnt + 1),new_arr__5656);
}
} else
{if(((this__5651.arr[(idx__5653 + 1)]) === val))
{return inode__5652;
} else
{return cljs.core.edit_and_set.call(null,inode__5652,edit,(idx__5653 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__5651.collision_hash >>> shift) & 0x01f)),[null,inode__5652,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__5657 = this;
var inode__5658 = this;
var idx__5659 = cljs.core.hash_collision_node_find_index.call(null,this__5657.arr,this__5657.cnt,key);
if((idx__5659 === -1))
{return inode__5658;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__5657.cnt === 1))
{return null;
} else
{var editable__5660 = inode__5658.ensure_editable(edit);
var earr__5661 = editable__5660.arr;
(earr__5661[idx__5659] = (earr__5661[((2 * this__5657.cnt) - 2)]));
(earr__5661[(idx__5659 + 1)] = (earr__5661[((2 * this__5657.cnt) - 1)]));
(earr__5661[((2 * this__5657.cnt) - 1)] = null);
(earr__5661[((2 * this__5657.cnt) - 2)] = null);
editable__5660.cnt = (editable__5660.cnt - 1);
return editable__5660;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__5662 = this;
var inode__5663 = this;
return cljs.core.inode_kv_reduce.call(null,this__5662.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__5666 = cljs.core.hash.call(null,key1);
if((key1hash__5666 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__5666,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___5667 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__5666,key1,val1,added_leaf_QMARK___5667).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___5667);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__5668 = cljs.core.hash.call(null,key1);
if((key1hash__5668 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__5668,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___5669 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__5668,key1,val1,added_leaf_QMARK___5669).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___5669);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5670 = this;
var h__264__auto____5671 = this__5670.__hash;
if((h__264__auto____5671 != null))
{return h__264__auto____5671;
} else
{var h__264__auto____5672 = cljs.core.hash_coll.call(null,coll);
this__5670.__hash = h__264__auto____5672;
return h__264__auto____5672;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5673 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__5674 = this;
var this$__5675 = this;
return cljs.core.pr_str.call(null,this$__5675);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__5676 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5677 = this;
if((this__5677.s == null))
{return cljs.core.PersistentVector.fromArray([(this__5677.nodes[this__5677.i]),(this__5677.nodes[(this__5677.i + 1)])]);
} else
{return cljs.core.first.call(null,this__5677.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__5678 = this;
if((this__5678.s == null))
{return cljs.core.create_inode_seq.call(null,this__5678.nodes,(this__5678.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__5678.nodes,this__5678.i,cljs.core.next.call(null,this__5678.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5679 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5680 = this;
return (new cljs.core.NodeSeq(meta,this__5680.nodes,this__5680.i,this__5680.s,this__5680.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5681 = this;
return this__5681.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5682 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5682.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__5683 = nodes.length;
var j__5684 = i;
while(true){
if((j__5684 < len__5683))
{if((null != (nodes[j__5684])))
{return (new cljs.core.NodeSeq(null,nodes,j__5684,null,null));
} else
{var temp__3971__auto____5685 = (nodes[(j__5684 + 1)]);
if(cljs.core.truth_(temp__3971__auto____5685))
{var node__5686 = temp__3971__auto____5685;
var temp__3971__auto____5687 = node__5686.inode_seq();
if(cljs.core.truth_(temp__3971__auto____5687))
{var node_seq__5688 = temp__3971__auto____5687;
return (new cljs.core.NodeSeq(null,nodes,(j__5684 + 2),node_seq__5688,null));
} else
{{
var G__5689 = (j__5684 + 2);
j__5684 = G__5689;
continue;
}
}
} else
{{
var G__5690 = (j__5684 + 2);
j__5684 = G__5690;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5691 = this;
var h__264__auto____5692 = this__5691.__hash;
if((h__264__auto____5692 != null))
{return h__264__auto____5692;
} else
{var h__264__auto____5693 = cljs.core.hash_coll.call(null,coll);
this__5691.__hash = h__264__auto____5693;
return h__264__auto____5693;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5694 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__5695 = this;
var this$__5696 = this;
return cljs.core.pr_str.call(null,this$__5696);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__5697 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5698 = this;
return cljs.core.first.call(null,this__5698.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__5699 = this;
return cljs.core.create_array_node_seq.call(null,null,this__5699.nodes,this__5699.i,cljs.core.next.call(null,this__5699.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5700 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5701 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__5701.nodes,this__5701.i,this__5701.s,this__5701.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5702 = this;
return this__5702.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5703 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5703.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__5704 = nodes.length;
var j__5705 = i;
while(true){
if((j__5705 < len__5704))
{var temp__3971__auto____5706 = (nodes[j__5705]);
if(cljs.core.truth_(temp__3971__auto____5706))
{var nj__5707 = temp__3971__auto____5706;
var temp__3971__auto____5708 = nj__5707.inode_seq();
if(cljs.core.truth_(temp__3971__auto____5708))
{var ns__5709 = temp__3971__auto____5708;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__5705 + 1),ns__5709,null));
} else
{{
var G__5710 = (j__5705 + 1);
j__5705 = G__5710;
continue;
}
}
} else
{{
var G__5711 = (j__5705 + 1);
j__5705 = G__5711;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__5716 = this;
return (new cljs.core.TransientHashMap({},this__5716.root,this__5716.cnt,this__5716.has_nil_QMARK_,this__5716.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5717 = this;
var h__264__auto____5718 = this__5717.__hash;
if((h__264__auto____5718 != null))
{return h__264__auto____5718;
} else
{var h__264__auto____5719 = cljs.core.hash_imap.call(null,coll);
this__5717.__hash = h__264__auto____5719;
return h__264__auto____5719;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5720 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5721 = this;
if((k == null))
{if(cljs.core.truth_(this__5721.has_nil_QMARK_))
{return this__5721.nil_val;
} else
{return not_found;
}
} else
{if((this__5721.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__5721.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5722 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3822__auto____5723 = this__5722.has_nil_QMARK_;
if(cljs.core.truth_(and__3822__auto____5723))
{return (v === this__5722.nil_val);
} else
{return and__3822__auto____5723;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__5722.meta,(cljs.core.truth_(this__5722.has_nil_QMARK_)?this__5722.cnt:(this__5722.cnt + 1)),this__5722.root,true,v,null));
}
} else
{var added_leaf_QMARK___5724 = [false];
var new_root__5725 = (((this__5722.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__5722.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___5724);
if((new_root__5725 === this__5722.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__5722.meta,(cljs.core.truth_((added_leaf_QMARK___5724[0]))?(this__5722.cnt + 1):this__5722.cnt),new_root__5725,this__5722.has_nil_QMARK_,this__5722.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__5726 = this;
if((k == null))
{return this__5726.has_nil_QMARK_;
} else
{if((this__5726.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__5726.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__5747 = null;
var G__5747__2 = (function (tsym5714,k){
var this__5727 = this;
var tsym5714__5728 = this;
var coll__5729 = tsym5714__5728;
return cljs.core._lookup.call(null,coll__5729,k);
});
var G__5747__3 = (function (tsym5715,k,not_found){
var this__5730 = this;
var tsym5715__5731 = this;
var coll__5732 = tsym5715__5731;
return cljs.core._lookup.call(null,coll__5732,k,not_found);
});
G__5747 = function(tsym5715,k,not_found){
switch(arguments.length){
case 2:
return G__5747__2.call(this,tsym5715,k);
case 3:
return G__5747__3.call(this,tsym5715,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5747;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym5712,args5713){
return tsym5712.call.apply(tsym5712,[tsym5712].concat(cljs.core.aclone.call(null,args5713)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__5733 = this;
var init__5734 = (cljs.core.truth_(this__5733.has_nil_QMARK_)?f.call(null,init,null,this__5733.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__5734))
{return cljs.core.deref.call(null,init__5734);
} else
{if((null != this__5733.root))
{return this__5733.root.kv_reduce(f,init__5734);
} else
{if("\uFDD0'else")
{return init__5734;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__5735 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__5736 = this;
var this$__5737 = this;
return cljs.core.pr_str.call(null,this$__5737);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5738 = this;
if((this__5738.cnt > 0))
{var s__5739 = (((null != this__5738.root))?this__5738.root.inode_seq():null);
if(cljs.core.truth_(this__5738.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__5738.nil_val]),s__5739);
} else
{return s__5739;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5740 = this;
return this__5740.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5741 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5742 = this;
return (new cljs.core.PersistentHashMap(meta,this__5742.cnt,this__5742.root,this__5742.has_nil_QMARK_,this__5742.nil_val,this__5742.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5743 = this;
return this__5743.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5744 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__5744.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__5745 = this;
if((k == null))
{if(cljs.core.truth_(this__5745.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__5745.meta,(this__5745.cnt - 1),this__5745.root,false,null,null));
} else
{return coll;
}
} else
{if((this__5745.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__5746 = this__5745.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__5746 === this__5745.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__5745.meta,(this__5745.cnt - 1),new_root__5746,this__5745.has_nil_QMARK_,this__5745.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__5748 = ks.length;
var i__5749 = 0;
var out__5750 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__5749 < len__5748))
{{
var G__5751 = (i__5749 + 1);
var G__5752 = cljs.core.assoc_BANG_.call(null,out__5750,(ks[i__5749]),(vs[i__5749]));
i__5749 = G__5751;
out__5750 = G__5752;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__5750);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__5753 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__5754 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__5755 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__5756 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__5757 = this;
if((k == null))
{if(cljs.core.truth_(this__5757.has_nil_QMARK_))
{return this__5757.nil_val;
} else
{return null;
}
} else
{if((this__5757.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__5757.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__5758 = this;
if((k == null))
{if(cljs.core.truth_(this__5758.has_nil_QMARK_))
{return this__5758.nil_val;
} else
{return not_found;
}
} else
{if((this__5758.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__5758.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5759 = this;
if(cljs.core.truth_(this__5759.edit))
{return this__5759.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__5760 = this;
var tcoll__5761 = this;
if(cljs.core.truth_(this__5760.edit))
{if((function (){var G__5762__5763 = o;
if((G__5762__5763 != null))
{if((function (){var or__3824__auto____5764 = (G__5762__5763.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____5764)
{return or__3824__auto____5764;
} else
{return G__5762__5763.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__5762__5763.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__5762__5763);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__5762__5763);
}
})())
{return tcoll__5761.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__5765 = cljs.core.seq.call(null,o);
var tcoll__5766 = tcoll__5761;
while(true){
var temp__3971__auto____5767 = cljs.core.first.call(null,es__5765);
if(cljs.core.truth_(temp__3971__auto____5767))
{var e__5768 = temp__3971__auto____5767;
{
var G__5779 = cljs.core.next.call(null,es__5765);
var G__5780 = tcoll__5766.assoc_BANG_(cljs.core.key.call(null,e__5768),cljs.core.val.call(null,e__5768));
es__5765 = G__5779;
tcoll__5766 = G__5780;
continue;
}
} else
{return tcoll__5766;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__5769 = this;
var tcoll__5770 = this;
if(cljs.core.truth_(this__5769.edit))
{if((k == null))
{if((this__5769.nil_val === v))
{} else
{this__5769.nil_val = v;
}
if(cljs.core.truth_(this__5769.has_nil_QMARK_))
{} else
{this__5769.count = (this__5769.count + 1);
this__5769.has_nil_QMARK_ = true;
}
return tcoll__5770;
} else
{var added_leaf_QMARK___5771 = [false];
var node__5772 = (((this__5769.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__5769.root).inode_assoc_BANG_(this__5769.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___5771);
if((node__5772 === this__5769.root))
{} else
{this__5769.root = node__5772;
}
if(cljs.core.truth_((added_leaf_QMARK___5771[0])))
{this__5769.count = (this__5769.count + 1);
} else
{}
return tcoll__5770;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__5773 = this;
var tcoll__5774 = this;
if(cljs.core.truth_(this__5773.edit))
{if((k == null))
{if(cljs.core.truth_(this__5773.has_nil_QMARK_))
{this__5773.has_nil_QMARK_ = false;
this__5773.nil_val = null;
this__5773.count = (this__5773.count - 1);
return tcoll__5774;
} else
{return tcoll__5774;
}
} else
{if((this__5773.root == null))
{return tcoll__5774;
} else
{var removed_leaf_QMARK___5775 = [false];
var node__5776 = this__5773.root.inode_without_BANG_(this__5773.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___5775);
if((node__5776 === this__5773.root))
{} else
{this__5773.root = node__5776;
}
if(cljs.core.truth_((removed_leaf_QMARK___5775[0])))
{this__5773.count = (this__5773.count - 1);
} else
{}
return tcoll__5774;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__5777 = this;
var tcoll__5778 = this;
if(cljs.core.truth_(this__5777.edit))
{this__5777.edit = null;
return (new cljs.core.PersistentHashMap(null,this__5777.count,this__5777.root,this__5777.has_nil_QMARK_,this__5777.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__5781 = node;
var stack__5782 = stack;
while(true){
if((t__5781 != null))
{{
var G__5783 = (cljs.core.truth_(ascending_QMARK_)?t__5781.left:t__5781.right);
var G__5784 = cljs.core.conj.call(null,stack__5782,t__5781);
t__5781 = G__5783;
stack__5782 = G__5784;
continue;
}
} else
{return stack__5782;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925322;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5785 = this;
var h__264__auto____5786 = this__5785.__hash;
if((h__264__auto____5786 != null))
{return h__264__auto____5786;
} else
{var h__264__auto____5787 = cljs.core.hash_coll.call(null,coll);
this__5785.__hash = h__264__auto____5787;
return h__264__auto____5787;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5788 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__5789 = this;
var this$__5790 = this;
return cljs.core.pr_str.call(null,this$__5790);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__5791 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5792 = this;
if((this__5792.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__5792.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__5793 = this;
return cljs.core.peek.call(null,this__5793.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__5794 = this;
var t__5795 = cljs.core.peek.call(null,this__5794.stack);
var next_stack__5796 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__5794.ascending_QMARK_)?t__5795.right:t__5795.left),cljs.core.pop.call(null,this__5794.stack),this__5794.ascending_QMARK_);
if((next_stack__5796 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__5796,this__5794.ascending_QMARK_,(this__5794.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5797 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5798 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__5798.stack,this__5798.ascending_QMARK_,this__5798.cnt,this__5798.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5799 = this;
return this__5799.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____5800 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____5800)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____5800;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____5801 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____5801)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____5801;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__5802 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__5802))
{return cljs.core.deref.call(null,init__5802);
} else
{var init__5803 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__5802):init__5802);
if(cljs.core.reduced_QMARK_.call(null,init__5803))
{return cljs.core.deref.call(null,init__5803);
} else
{var init__5804 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__5803):init__5803);
if(cljs.core.reduced_QMARK_.call(null,init__5804))
{return cljs.core.deref.call(null,init__5804);
} else
{return init__5804;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$ = true;
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5809 = this;
var h__264__auto____5810 = this__5809.__hash;
if((h__264__auto____5810 != null))
{return h__264__auto____5810;
} else
{var h__264__auto____5811 = cljs.core.hash_coll.call(null,coll);
this__5809.__hash = h__264__auto____5811;
return h__264__auto____5811;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__5812 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__5813 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__5814 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__5814.key,this__5814.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__5861 = null;
var G__5861__2 = (function (tsym5807,k){
var this__5815 = this;
var tsym5807__5816 = this;
var node__5817 = tsym5807__5816;
return cljs.core._lookup.call(null,node__5817,k);
});
var G__5861__3 = (function (tsym5808,k,not_found){
var this__5818 = this;
var tsym5808__5819 = this;
var node__5820 = tsym5808__5819;
return cljs.core._lookup.call(null,node__5820,k,not_found);
});
G__5861 = function(tsym5808,k,not_found){
switch(arguments.length){
case 2:
return G__5861__2.call(this,tsym5808,k);
case 3:
return G__5861__3.call(this,tsym5808,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5861;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym5805,args5806){
return tsym5805.call.apply(tsym5805,[tsym5805].concat(cljs.core.aclone.call(null,args5806)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__5821 = this;
return cljs.core.PersistentVector.fromArray([this__5821.key,this__5821.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__5822 = this;
return this__5822.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__5823 = this;
return this__5823.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__5824 = this;
var node__5825 = this;
return ins.balance_right(node__5825);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__5826 = this;
var node__5827 = this;
return (new cljs.core.RedNode(this__5826.key,this__5826.val,this__5826.left,this__5826.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__5828 = this;
var node__5829 = this;
return cljs.core.balance_right_del.call(null,this__5828.key,this__5828.val,this__5828.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__5830 = this;
var node__5831 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__5832 = this;
var node__5833 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__5833,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__5834 = this;
var node__5835 = this;
return cljs.core.balance_left_del.call(null,this__5834.key,this__5834.val,del,this__5834.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__5836 = this;
var node__5837 = this;
return ins.balance_left(node__5837);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__5838 = this;
var node__5839 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__5839,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__5862 = null;
var G__5862__0 = (function (){
var this__5842 = this;
var this$__5843 = this;
return cljs.core.pr_str.call(null,this$__5843);
});
G__5862 = function(){
switch(arguments.length){
case 0:
return G__5862__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5862;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__5844 = this;
var node__5845 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__5845,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__5846 = this;
var node__5847 = this;
return node__5847;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__5848 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__5849 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__5850 = this;
return cljs.core.list.call(null,this__5850.key,this__5850.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__5852 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__5853 = this;
return this__5853.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__5854 = this;
return cljs.core.PersistentVector.fromArray([this__5854.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__5855 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__5855.key,this__5855.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5856 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__5857 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__5857.key,this__5857.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__5858 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__5859 = this;
if((n === 0))
{return this__5859.key;
} else
{if((n === 1))
{return this__5859.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__5860 = this;
if((n === 0))
{return this__5860.key;
} else
{if((n === 1))
{return this__5860.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__5851 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$ = true;
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5867 = this;
var h__264__auto____5868 = this__5867.__hash;
if((h__264__auto____5868 != null))
{return h__264__auto____5868;
} else
{var h__264__auto____5869 = cljs.core.hash_coll.call(null,coll);
this__5867.__hash = h__264__auto____5869;
return h__264__auto____5869;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__5870 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__5871 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__5872 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__5872.key,this__5872.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__5919 = null;
var G__5919__2 = (function (tsym5865,k){
var this__5873 = this;
var tsym5865__5874 = this;
var node__5875 = tsym5865__5874;
return cljs.core._lookup.call(null,node__5875,k);
});
var G__5919__3 = (function (tsym5866,k,not_found){
var this__5876 = this;
var tsym5866__5877 = this;
var node__5878 = tsym5866__5877;
return cljs.core._lookup.call(null,node__5878,k,not_found);
});
G__5919 = function(tsym5866,k,not_found){
switch(arguments.length){
case 2:
return G__5919__2.call(this,tsym5866,k);
case 3:
return G__5919__3.call(this,tsym5866,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5919;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym5863,args5864){
return tsym5863.call.apply(tsym5863,[tsym5863].concat(cljs.core.aclone.call(null,args5864)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__5879 = this;
return cljs.core.PersistentVector.fromArray([this__5879.key,this__5879.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__5880 = this;
return this__5880.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__5881 = this;
return this__5881.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__5882 = this;
var node__5883 = this;
return (new cljs.core.RedNode(this__5882.key,this__5882.val,this__5882.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__5884 = this;
var node__5885 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__5886 = this;
var node__5887 = this;
return (new cljs.core.RedNode(this__5886.key,this__5886.val,this__5886.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__5888 = this;
var node__5889 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__5890 = this;
var node__5891 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__5891,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__5892 = this;
var node__5893 = this;
return (new cljs.core.RedNode(this__5892.key,this__5892.val,del,this__5892.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__5894 = this;
var node__5895 = this;
return (new cljs.core.RedNode(this__5894.key,this__5894.val,ins,this__5894.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__5896 = this;
var node__5897 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__5896.left))
{return (new cljs.core.RedNode(this__5896.key,this__5896.val,this__5896.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__5896.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__5896.right))
{return (new cljs.core.RedNode(this__5896.right.key,this__5896.right.val,(new cljs.core.BlackNode(this__5896.key,this__5896.val,this__5896.left,this__5896.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__5896.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__5897,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__5920 = null;
var G__5920__0 = (function (){
var this__5900 = this;
var this$__5901 = this;
return cljs.core.pr_str.call(null,this$__5901);
});
G__5920 = function(){
switch(arguments.length){
case 0:
return G__5920__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5920;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__5902 = this;
var node__5903 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__5902.right))
{return (new cljs.core.RedNode(this__5902.key,this__5902.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__5902.left,null)),this__5902.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__5902.left))
{return (new cljs.core.RedNode(this__5902.left.key,this__5902.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__5902.left.left,null)),(new cljs.core.BlackNode(this__5902.key,this__5902.val,this__5902.left.right,this__5902.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__5903,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__5904 = this;
var node__5905 = this;
return (new cljs.core.BlackNode(this__5904.key,this__5904.val,this__5904.left,this__5904.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__5906 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__5907 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__5908 = this;
return cljs.core.list.call(null,this__5908.key,this__5908.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__5910 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__5911 = this;
return this__5911.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__5912 = this;
return cljs.core.PersistentVector.fromArray([this__5912.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__5913 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__5913.key,this__5913.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5914 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__5915 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__5915.key,this__5915.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__5916 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__5917 = this;
if((n === 0))
{return this__5917.key;
} else
{if((n === 1))
{return this__5917.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__5918 = this;
if((n === 0))
{return this__5918.key;
} else
{if((n === 1))
{return this__5918.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__5909 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__5921 = comp.call(null,k,tree.key);
if((c__5921 === 0))
{(found[0] = tree);
return null;
} else
{if((c__5921 < 0))
{var ins__5922 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__5922 != null))
{return tree.add_left(ins__5922);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__5923 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__5923 != null))
{return tree.add_right(ins__5923);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__5924 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__5924))
{return (new cljs.core.RedNode(app__5924.key,app__5924.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__5924.left)),(new cljs.core.RedNode(right.key,right.val,app__5924.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__5924,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__5925 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__5925))
{return (new cljs.core.RedNode(app__5925.key,app__5925.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__5925.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__5925.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__5925,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if((tree != null))
{var c__5926 = comp.call(null,k,tree.key);
if((c__5926 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__5926 < 0))
{var del__5927 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____5928 = (del__5927 != null);
if(or__3824__auto____5928)
{return or__3824__auto____5928;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__5927,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__5927,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__5929 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____5930 = (del__5929 != null);
if(or__3824__auto____5930)
{return or__3824__auto____5930;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__5929);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__5929,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__5931 = tree.key;
var c__5932 = comp.call(null,k,tk__5931);
if((c__5932 === 0))
{return tree.replace(tk__5931,v,tree.left,tree.right);
} else
{if((c__5932 < 0))
{return tree.replace(tk__5931,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__5931,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 209388431;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5937 = this;
var h__264__auto____5938 = this__5937.__hash;
if((h__264__auto____5938 != null))
{return h__264__auto____5938;
} else
{var h__264__auto____5939 = cljs.core.hash_imap.call(null,coll);
this__5937.__hash = h__264__auto____5939;
return h__264__auto____5939;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5940 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5941 = this;
var n__5942 = coll.entry_at(k);
if((n__5942 != null))
{return n__5942.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5943 = this;
var found__5944 = [null];
var t__5945 = cljs.core.tree_map_add.call(null,this__5943.comp,this__5943.tree,k,v,found__5944);
if((t__5945 == null))
{var found_node__5946 = cljs.core.nth.call(null,found__5944,0);
if(cljs.core._EQ_.call(null,v,found_node__5946.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__5943.comp,cljs.core.tree_map_replace.call(null,this__5943.comp,this__5943.tree,k,v),this__5943.cnt,this__5943.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__5943.comp,t__5945.blacken(),(this__5943.cnt + 1),this__5943.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__5947 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__5979 = null;
var G__5979__2 = (function (tsym5935,k){
var this__5948 = this;
var tsym5935__5949 = this;
var coll__5950 = tsym5935__5949;
return cljs.core._lookup.call(null,coll__5950,k);
});
var G__5979__3 = (function (tsym5936,k,not_found){
var this__5951 = this;
var tsym5936__5952 = this;
var coll__5953 = tsym5936__5952;
return cljs.core._lookup.call(null,coll__5953,k,not_found);
});
G__5979 = function(tsym5936,k,not_found){
switch(arguments.length){
case 2:
return G__5979__2.call(this,tsym5936,k);
case 3:
return G__5979__3.call(this,tsym5936,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5979;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym5933,args5934){
return tsym5933.call.apply(tsym5933,[tsym5933].concat(cljs.core.aclone.call(null,args5934)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__5954 = this;
if((this__5954.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__5954.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__5955 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__5956 = this;
if((this__5956.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__5956.tree,false,this__5956.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__5957 = this;
var this$__5958 = this;
return cljs.core.pr_str.call(null,this$__5958);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__5959 = this;
var coll__5960 = this;
var t__5961 = this__5959.tree;
while(true){
if((t__5961 != null))
{var c__5962 = this__5959.comp.call(null,k,t__5961.key);
if((c__5962 === 0))
{return t__5961;
} else
{if((c__5962 < 0))
{{
var G__5980 = t__5961.left;
t__5961 = G__5980;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__5981 = t__5961.right;
t__5961 = G__5981;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__5963 = this;
if((this__5963.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__5963.tree,ascending_QMARK_,this__5963.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__5964 = this;
if((this__5964.cnt > 0))
{var stack__5965 = null;
var t__5966 = this__5964.tree;
while(true){
if((t__5966 != null))
{var c__5967 = this__5964.comp.call(null,k,t__5966.key);
if((c__5967 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__5965,t__5966),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__5967 < 0))
{{
var G__5982 = cljs.core.conj.call(null,stack__5965,t__5966);
var G__5983 = t__5966.left;
stack__5965 = G__5982;
t__5966 = G__5983;
continue;
}
} else
{{
var G__5984 = stack__5965;
var G__5985 = t__5966.right;
stack__5965 = G__5984;
t__5966 = G__5985;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__5967 > 0))
{{
var G__5986 = cljs.core.conj.call(null,stack__5965,t__5966);
var G__5987 = t__5966.right;
stack__5965 = G__5986;
t__5966 = G__5987;
continue;
}
} else
{{
var G__5988 = stack__5965;
var G__5989 = t__5966.left;
stack__5965 = G__5988;
t__5966 = G__5989;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__5965 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__5965,ascending_QMARK_,-1));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__5968 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__5969 = this;
return this__5969.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5970 = this;
if((this__5970.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__5970.tree,true,this__5970.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5971 = this;
return this__5971.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5972 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5973 = this;
return (new cljs.core.PersistentTreeMap(this__5973.comp,this__5973.tree,this__5973.cnt,meta,this__5973.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5977 = this;
return this__5977.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5978 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__5978.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__5974 = this;
var found__5975 = [null];
var t__5976 = cljs.core.tree_map_remove.call(null,this__5974.comp,this__5974.tree,k,found__5975);
if((t__5976 == null))
{if((cljs.core.nth.call(null,found__5975,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__5974.comp,null,0,this__5974.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__5974.comp,t__5976.blacken(),(this__5974.cnt - 1),this__5974.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__5990 = cljs.core.seq.call(null,keyvals);
var out__5991 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__5990))
{{
var G__5992 = cljs.core.nnext.call(null,in$__5990);
var G__5993 = cljs.core.assoc_BANG_.call(null,out__5991,cljs.core.first.call(null,in$__5990),cljs.core.second.call(null,in$__5990));
in$__5990 = G__5992;
out__5991 = G__5993;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__5991);
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
hash_map.cljs$lang$applyTo = (function (arglist__5994){
var keyvals = cljs.core.seq(arglist__5994);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__5995){
var keyvals = cljs.core.seq(arglist__5995);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$__5996 = cljs.core.seq.call(null,keyvals);
var out__5997 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__5996))
{{
var G__5998 = cljs.core.nnext.call(null,in$__5996);
var G__5999 = cljs.core.assoc.call(null,out__5997,cljs.core.first.call(null,in$__5996),cljs.core.second.call(null,in$__5996));
in$__5996 = G__5998;
out__5997 = G__5999;
continue;
}
} else
{return out__5997;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__6000){
var keyvals = cljs.core.seq(arglist__6000);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$__6001 = cljs.core.seq.call(null,keyvals);
var out__6002 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__6001))
{{
var G__6003 = cljs.core.nnext.call(null,in$__6001);
var G__6004 = cljs.core.assoc.call(null,out__6002,cljs.core.first.call(null,in$__6001),cljs.core.second.call(null,in$__6001));
in$__6001 = G__6003;
out__6002 = G__6004;
continue;
}
} else
{return out__6002;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__6005){
var comparator = cljs.core.first(arglist__6005);
var keyvals = cljs.core.rest(arglist__6005);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
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
{return cljs.core.reduce.call(null,(function (p1__6006_SHARP_,p2__6007_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____6008 = p1__6006_SHARP_;
if(cljs.core.truth_(or__3824__auto____6008))
{return or__3824__auto____6008;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6007_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__6009){
var maps = cljs.core.seq(arglist__6009);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
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
{var merge_entry__6012 = (function (m,e){
var k__6010 = cljs.core.first.call(null,e);
var v__6011 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__6010))
{return cljs.core.assoc.call(null,m,k__6010,f.call(null,cljs.core.get.call(null,m,k__6010),v__6011));
} else
{return cljs.core.assoc.call(null,m,k__6010,v__6011);
}
});
var merge2__6014 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6012,(function (){var or__3824__auto____6013 = m1;
if(cljs.core.truth_(or__3824__auto____6013))
{return or__3824__auto____6013;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__6014,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__6015){
var f = cljs.core.first(arglist__6015);
var maps = cljs.core.rest(arglist__6015);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__6016 = cljs.core.ObjMap.fromObject([],{});
var keys__6017 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__6017))
{var key__6018 = cljs.core.first.call(null,keys__6017);
var entry__6019 = cljs.core.get.call(null,map,key__6018,"\uFDD0'clojure.core/not-found");
{
var G__6020 = ((cljs.core.not_EQ_.call(null,entry__6019,"\uFDD0'clojure.core/not-found"))?cljs.core.assoc.call(null,ret__6016,key__6018,entry__6019):ret__6016);
var G__6021 = cljs.core.next.call(null,keys__6017);
ret__6016 = G__6020;
keys__6017 = G__6021;
continue;
}
} else
{return ret__6016;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155022479;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__6027 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__6027.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6028 = this;
var h__264__auto____6029 = this__6028.__hash;
if((h__264__auto____6029 != null))
{return h__264__auto____6029;
} else
{var h__264__auto____6030 = cljs.core.hash_iset.call(null,coll);
this__6028.__hash = h__264__auto____6030;
return h__264__auto____6030;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__6031 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__6032 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6032.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__6051 = null;
var G__6051__2 = (function (tsym6025,k){
var this__6033 = this;
var tsym6025__6034 = this;
var coll__6035 = tsym6025__6034;
return cljs.core._lookup.call(null,coll__6035,k);
});
var G__6051__3 = (function (tsym6026,k,not_found){
var this__6036 = this;
var tsym6026__6037 = this;
var coll__6038 = tsym6026__6037;
return cljs.core._lookup.call(null,coll__6038,k,not_found);
});
G__6051 = function(tsym6026,k,not_found){
switch(arguments.length){
case 2:
return G__6051__2.call(this,tsym6026,k);
case 3:
return G__6051__3.call(this,tsym6026,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6051;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym6023,args6024){
return tsym6023.call.apply(tsym6023,[tsym6023].concat(cljs.core.aclone.call(null,args6024)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6039 = this;
return (new cljs.core.PersistentHashSet(this__6039.meta,cljs.core.assoc.call(null,this__6039.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__6040 = this;
var this$__6041 = this;
return cljs.core.pr_str.call(null,this$__6041);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6042 = this;
return cljs.core.keys.call(null,this__6042.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__6043 = this;
return (new cljs.core.PersistentHashSet(this__6043.meta,cljs.core.dissoc.call(null,this__6043.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6044 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6045 = this;
var and__3822__auto____6046 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____6046)
{var and__3822__auto____6047 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____6047)
{return cljs.core.every_QMARK_.call(null,(function (p1__6022_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6022_SHARP_);
}),other);
} else
{return and__3822__auto____6047;
}
} else
{return and__3822__auto____6046;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6048 = this;
return (new cljs.core.PersistentHashSet(meta,this__6048.hash_map,this__6048.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6049 = this;
return this__6049.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6050 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__6050.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 131;
this.cljs$lang$protocol_mask$partition1$ = 17;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashSet");
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.TransientHashSet.prototype.call = (function() {
var G__6069 = null;
var G__6069__2 = (function (tsym6055,k){
var this__6057 = this;
var tsym6055__6058 = this;
var tcoll__6059 = tsym6055__6058;
if((cljs.core._lookup.call(null,this__6057.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__6069__3 = (function (tsym6056,k,not_found){
var this__6060 = this;
var tsym6056__6061 = this;
var tcoll__6062 = tsym6056__6061;
if((cljs.core._lookup.call(null,this__6060.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__6069 = function(tsym6056,k,not_found){
switch(arguments.length){
case 2:
return G__6069__2.call(this,tsym6056,k);
case 3:
return G__6069__3.call(this,tsym6056,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6069;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym6053,args6054){
return tsym6053.call.apply(tsym6053,[tsym6053].concat(cljs.core.aclone.call(null,args6054)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__6063 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__6064 = this;
if((cljs.core._lookup.call(null,this__6064.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__6065 = this;
return cljs.core.count.call(null,this__6065.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__6066 = this;
this__6066.transient_map = cljs.core.dissoc_BANG_.call(null,this__6066.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__6067 = this;
this__6067.transient_map = cljs.core.assoc_BANG_.call(null,this__6067.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__6068 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__6068.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 208865423;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6074 = this;
var h__264__auto____6075 = this__6074.__hash;
if((h__264__auto____6075 != null))
{return h__264__auto____6075;
} else
{var h__264__auto____6076 = cljs.core.hash_iset.call(null,coll);
this__6074.__hash = h__264__auto____6076;
return h__264__auto____6076;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__6077 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__6078 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6078.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__6102 = null;
var G__6102__2 = (function (tsym6072,k){
var this__6079 = this;
var tsym6072__6080 = this;
var coll__6081 = tsym6072__6080;
return cljs.core._lookup.call(null,coll__6081,k);
});
var G__6102__3 = (function (tsym6073,k,not_found){
var this__6082 = this;
var tsym6073__6083 = this;
var coll__6084 = tsym6073__6083;
return cljs.core._lookup.call(null,coll__6084,k,not_found);
});
G__6102 = function(tsym6073,k,not_found){
switch(arguments.length){
case 2:
return G__6102__2.call(this,tsym6073,k);
case 3:
return G__6102__3.call(this,tsym6073,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6102;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym6070,args6071){
return tsym6070.call.apply(tsym6070,[tsym6070].concat(cljs.core.aclone.call(null,args6071)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6085 = this;
return (new cljs.core.PersistentTreeSet(this__6085.meta,cljs.core.assoc.call(null,this__6085.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6086 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__6086.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__6087 = this;
var this$__6088 = this;
return cljs.core.pr_str.call(null,this$__6088);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__6089 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__6089.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__6090 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__6090.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__6091 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__6092 = this;
return cljs.core._comparator.call(null,this__6092.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6093 = this;
return cljs.core.keys.call(null,this__6093.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__6094 = this;
return (new cljs.core.PersistentTreeSet(this__6094.meta,cljs.core.dissoc.call(null,this__6094.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6095 = this;
return cljs.core.count.call(null,this__6095.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6096 = this;
var and__3822__auto____6097 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____6097)
{var and__3822__auto____6098 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____6098)
{return cljs.core.every_QMARK_.call(null,(function (p1__6052_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6052_SHARP_);
}),other);
} else
{return and__3822__auto____6098;
}
} else
{return and__3822__auto____6097;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6099 = this;
return (new cljs.core.PersistentTreeSet(meta,this__6099.tree_map,this__6099.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6100 = this;
return this__6100.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6101 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__6101.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6103 = cljs.core.seq.call(null,coll);
var out__6104 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__6103)))
{{
var G__6105 = cljs.core.next.call(null,in$__6103);
var G__6106 = cljs.core.conj_BANG_.call(null,out__6104,cljs.core.first.call(null,in$__6103));
in$__6103 = G__6105;
out__6104 = G__6106;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__6104);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__6107){
var keys = cljs.core.seq(arglist__6107);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__6109){
var comparator = cljs.core.first(arglist__6109);
var keys = cljs.core.rest(arglist__6109);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__6110 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____6111 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____6111))
{var e__6112 = temp__3971__auto____6111;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6112));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6110,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6108_SHARP_){
var temp__3971__auto____6113 = cljs.core.find.call(null,smap,p1__6108_SHARP_);
if(cljs.core.truth_(temp__3971__auto____6113))
{var e__6114 = temp__3971__auto____6113;
return cljs.core.second.call(null,e__6114);
} else
{return p1__6108_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6122 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6115,seen){
while(true){
var vec__6116__6117 = p__6115;
var f__6118 = cljs.core.nth.call(null,vec__6116__6117,0,null);
var xs__6119 = vec__6116__6117;
var temp__3974__auto____6120 = cljs.core.seq.call(null,xs__6119);
if(cljs.core.truth_(temp__3974__auto____6120))
{var s__6121 = temp__3974__auto____6120;
if(cljs.core.contains_QMARK_.call(null,seen,f__6118))
{{
var G__6123 = cljs.core.rest.call(null,s__6121);
var G__6124 = seen;
p__6115 = G__6123;
seen = G__6124;
continue;
}
} else
{return cljs.core.cons.call(null,f__6118,step.call(null,cljs.core.rest.call(null,s__6121),cljs.core.conj.call(null,seen,f__6118)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__6122.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6125 = cljs.core.PersistentVector.fromArray([]);
var s__6126 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6126)))
{{
var G__6127 = cljs.core.conj.call(null,ret__6125,cljs.core.first.call(null,s__6126));
var G__6128 = cljs.core.next.call(null,s__6126);
ret__6125 = G__6127;
s__6126 = G__6128;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6125);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____6129 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____6129)
{return or__3824__auto____6129;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__6130 = x.lastIndexOf("/");
if((i__6130 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__6130 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
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
if((function (){var or__3824__auto____6131 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____6131)
{return or__3824__auto____6131;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__6132 = x.lastIndexOf("/");
if((i__6132 > -1))
{return cljs.core.subs.call(null,x,2,i__6132);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__6135 = cljs.core.ObjMap.fromObject([],{});
var ks__6136 = cljs.core.seq.call(null,keys);
var vs__6137 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6138 = ks__6136;
if(cljs.core.truth_(and__3822__auto____6138))
{return vs__6137;
} else
{return and__3822__auto____6138;
}
})()))
{{
var G__6139 = cljs.core.assoc.call(null,map__6135,cljs.core.first.call(null,ks__6136),cljs.core.first.call(null,vs__6137));
var G__6140 = cljs.core.next.call(null,ks__6136);
var G__6141 = cljs.core.next.call(null,vs__6137);
map__6135 = G__6139;
ks__6136 = G__6140;
vs__6137 = G__6141;
continue;
}
} else
{return map__6135;
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
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__6144__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6133_SHARP_,p2__6134_SHARP_){
return max_key.call(null,k,p1__6133_SHARP_,p2__6134_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6144 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6144__delegate.call(this, k, x, y, more);
};
G__6144.cljs$lang$maxFixedArity = 3;
G__6144.cljs$lang$applyTo = (function (arglist__6145){
var k = cljs.core.first(arglist__6145);
var x = cljs.core.first(cljs.core.next(arglist__6145));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6145)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6145)));
return G__6144__delegate(k, x, y, more);
});
G__6144.cljs$lang$arity$variadic = G__6144__delegate;
return G__6144;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__6146__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6142_SHARP_,p2__6143_SHARP_){
return min_key.call(null,k,p1__6142_SHARP_,p2__6143_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6146 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6146__delegate.call(this, k, x, y, more);
};
G__6146.cljs$lang$maxFixedArity = 3;
G__6146.cljs$lang$applyTo = (function (arglist__6147){
var k = cljs.core.first(arglist__6147);
var x = cljs.core.first(cljs.core.next(arglist__6147));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6147)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6147)));
return G__6146__delegate(k, x, y, more);
});
G__6146.cljs$lang$arity$variadic = G__6146__delegate;
return G__6146;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____6148 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6148))
{var s__6149 = temp__3974__auto____6148;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6149),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6149)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____6150 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6150))
{var s__6151 = temp__3974__auto____6150;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6151))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6151),take_while.call(null,pred,cljs.core.rest.call(null,s__6151)));
} else
{return null;
}
} else
{return null;
}
})));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__6152 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__6152.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__6153 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____6154 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____6154))
{var vec__6155__6156 = temp__3974__auto____6154;
var e__6157 = cljs.core.nth.call(null,vec__6155__6156,0,null);
var s__6158 = vec__6155__6156;
if(cljs.core.truth_(include__6153.call(null,e__6157)))
{return s__6158;
} else
{return cljs.core.next.call(null,s__6158);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__6153,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____6159 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____6159))
{var vec__6160__6161 = temp__3974__auto____6159;
var e__6162 = cljs.core.nth.call(null,vec__6160__6161,0,null);
var s__6163 = vec__6160__6161;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__6162))?s__6163:cljs.core.next.call(null,s__6163)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__6164 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____6165 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____6165))
{var vec__6166__6167 = temp__3974__auto____6165;
var e__6168 = cljs.core.nth.call(null,vec__6166__6167,0,null);
var s__6169 = vec__6166__6167;
if(cljs.core.truth_(include__6164.call(null,e__6168)))
{return s__6169;
} else
{return cljs.core.next.call(null,s__6169);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__6164,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____6170 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____6170))
{var vec__6171__6172 = temp__3974__auto____6170;
var e__6173 = cljs.core.nth.call(null,vec__6171__6172,0,null);
var s__6174 = vec__6171__6172;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__6173))?s__6174:cljs.core.next.call(null,s__6174)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16187486;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__6175 = this;
var h__264__auto____6176 = this__6175.__hash;
if((h__264__auto____6176 != null))
{return h__264__auto____6176;
} else
{var h__264__auto____6177 = cljs.core.hash_coll.call(null,rng);
this__6175.__hash = h__264__auto____6177;
return h__264__auto____6177;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__6178 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__6179 = this;
var this$__6180 = this;
return cljs.core.pr_str.call(null,this$__6180);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__6181 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__6182 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__6183 = this;
var comp__6184 = (((this__6183.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__6184.call(null,this__6183.start,this__6183.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__6185 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__6185.end - this__6185.start) / this__6185.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__6186 = this;
return this__6186.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__6187 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__6187.meta,(this__6187.start + this__6187.step),this__6187.end,this__6187.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__6188 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__6189 = this;
return (new cljs.core.Range(meta,this__6189.start,this__6189.end,this__6189.step,this__6189.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__6190 = this;
return this__6190.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__6191 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__6191.start + (n * this__6191.step));
} else
{if((function (){var and__3822__auto____6192 = (this__6191.start > this__6191.end);
if(and__3822__auto____6192)
{return (this__6191.step === 0);
} else
{return and__3822__auto____6192;
}
})())
{return this__6191.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__6193 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__6193.start + (n * this__6193.step));
} else
{if((function (){var and__3822__auto____6194 = (this__6193.start > this__6193.end);
if(and__3822__auto____6194)
{return (this__6193.step === 0);
} else
{return and__3822__auto____6194;
}
})())
{return this__6193.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__6195 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6195.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____6196 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6196))
{var s__6197 = temp__3974__auto____6196;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__6197),take_nth.call(null,n,cljs.core.drop.call(null,n,s__6197)));
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
var temp__3974__auto____6199 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6199))
{var s__6200 = temp__3974__auto____6199;
var fst__6201 = cljs.core.first.call(null,s__6200);
var fv__6202 = f.call(null,fst__6201);
var run__6203 = cljs.core.cons.call(null,fst__6201,cljs.core.take_while.call(null,(function (p1__6198_SHARP_){
return cljs.core._EQ_.call(null,fv__6202,f.call(null,p1__6198_SHARP_));
}),cljs.core.next.call(null,s__6200)));
return cljs.core.cons.call(null,run__6203,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__6203),s__6200))));
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
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{})),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____6214 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____6214))
{var s__6215 = temp__3971__auto____6214;
return reductions.call(null,f,cljs.core.first.call(null,s__6215),cljs.core.rest.call(null,s__6215));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____6216 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6216))
{var s__6217 = temp__3974__auto____6216;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__6217)),cljs.core.rest.call(null,s__6217));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
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
var juxt__1 = (function (f){
return (function() {
var G__6219 = null;
var G__6219__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__6219__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__6219__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__6219__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__6219__4 = (function() { 
var G__6220__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__6220 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6220__delegate.call(this, x, y, z, args);
};
G__6220.cljs$lang$maxFixedArity = 3;
G__6220.cljs$lang$applyTo = (function (arglist__6221){
var x = cljs.core.first(arglist__6221);
var y = cljs.core.first(cljs.core.next(arglist__6221));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6221)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6221)));
return G__6220__delegate(x, y, z, args);
});
G__6220.cljs$lang$arity$variadic = G__6220__delegate;
return G__6220;
})()
;
G__6219 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6219__0.call(this);
case 1:
return G__6219__1.call(this,x);
case 2:
return G__6219__2.call(this,x,y);
case 3:
return G__6219__3.call(this,x,y,z);
default:
return G__6219__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6219.cljs$lang$maxFixedArity = 3;
G__6219.cljs$lang$applyTo = G__6219__4.cljs$lang$applyTo;
return G__6219;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__6222 = null;
var G__6222__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__6222__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__6222__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__6222__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__6222__4 = (function() { 
var G__6223__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6223 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6223__delegate.call(this, x, y, z, args);
};
G__6223.cljs$lang$maxFixedArity = 3;
G__6223.cljs$lang$applyTo = (function (arglist__6224){
var x = cljs.core.first(arglist__6224);
var y = cljs.core.first(cljs.core.next(arglist__6224));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6224)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6224)));
return G__6223__delegate(x, y, z, args);
});
G__6223.cljs$lang$arity$variadic = G__6223__delegate;
return G__6223;
})()
;
G__6222 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6222__0.call(this);
case 1:
return G__6222__1.call(this,x);
case 2:
return G__6222__2.call(this,x,y);
case 3:
return G__6222__3.call(this,x,y,z);
default:
return G__6222__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6222.cljs$lang$maxFixedArity = 3;
G__6222.cljs$lang$applyTo = G__6222__4.cljs$lang$applyTo;
return G__6222;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__6225 = null;
var G__6225__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__6225__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__6225__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__6225__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__6225__4 = (function() { 
var G__6226__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__6226 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6226__delegate.call(this, x, y, z, args);
};
G__6226.cljs$lang$maxFixedArity = 3;
G__6226.cljs$lang$applyTo = (function (arglist__6227){
var x = cljs.core.first(arglist__6227);
var y = cljs.core.first(cljs.core.next(arglist__6227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6227)));
return G__6226__delegate(x, y, z, args);
});
G__6226.cljs$lang$arity$variadic = G__6226__delegate;
return G__6226;
})()
;
G__6225 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6225__0.call(this);
case 1:
return G__6225__1.call(this,x);
case 2:
return G__6225__2.call(this,x,y);
case 3:
return G__6225__3.call(this,x,y,z);
default:
return G__6225__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6225.cljs$lang$maxFixedArity = 3;
G__6225.cljs$lang$applyTo = G__6225__4.cljs$lang$applyTo;
return G__6225;
})()
});
var juxt__4 = (function() { 
var G__6228__delegate = function (f,g,h,fs){
var fs__6218 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__6229 = null;
var G__6229__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__6204_SHARP_,p2__6205_SHARP_){
return cljs.core.conj.call(null,p1__6204_SHARP_,p2__6205_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__6218);
});
var G__6229__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__6206_SHARP_,p2__6207_SHARP_){
return cljs.core.conj.call(null,p1__6206_SHARP_,p2__6207_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__6218);
});
var G__6229__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__6208_SHARP_,p2__6209_SHARP_){
return cljs.core.conj.call(null,p1__6208_SHARP_,p2__6209_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__6218);
});
var G__6229__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__6210_SHARP_,p2__6211_SHARP_){
return cljs.core.conj.call(null,p1__6210_SHARP_,p2__6211_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__6218);
});
var G__6229__4 = (function() { 
var G__6230__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__6212_SHARP_,p2__6213_SHARP_){
return cljs.core.conj.call(null,p1__6212_SHARP_,cljs.core.apply.call(null,p2__6213_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__6218);
};
var G__6230 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6230__delegate.call(this, x, y, z, args);
};
G__6230.cljs$lang$maxFixedArity = 3;
G__6230.cljs$lang$applyTo = (function (arglist__6231){
var x = cljs.core.first(arglist__6231);
var y = cljs.core.first(cljs.core.next(arglist__6231));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6231)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6231)));
return G__6230__delegate(x, y, z, args);
});
G__6230.cljs$lang$arity$variadic = G__6230__delegate;
return G__6230;
})()
;
G__6229 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6229__0.call(this);
case 1:
return G__6229__1.call(this,x);
case 2:
return G__6229__2.call(this,x,y);
case 3:
return G__6229__3.call(this,x,y,z);
default:
return G__6229__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6229.cljs$lang$maxFixedArity = 3;
G__6229.cljs$lang$applyTo = G__6229__4.cljs$lang$applyTo;
return G__6229;
})()
};
var G__6228 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6228__delegate.call(this, f, g, h, fs);
};
G__6228.cljs$lang$maxFixedArity = 3;
G__6228.cljs$lang$applyTo = (function (arglist__6232){
var f = cljs.core.first(arglist__6232);
var g = cljs.core.first(cljs.core.next(arglist__6232));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6232)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6232)));
return G__6228__delegate(f, g, h, fs);
});
G__6228.cljs$lang$arity$variadic = G__6228__delegate;
return G__6228;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
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
var dorun__1 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__6234 = cljs.core.next.call(null,coll);
coll = G__6234;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6233 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3822__auto____6233))
{return (n > 0);
} else
{return and__3822__auto____6233;
}
})()))
{{
var G__6235 = (n - 1);
var G__6236 = cljs.core.next.call(null,coll);
n = G__6235;
coll = G__6236;
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
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
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
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__6237 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__6237),s))
{if((cljs.core.count.call(null,matches__6237) === 1))
{return cljs.core.first.call(null,matches__6237);
} else
{return cljs.core.vec.call(null,matches__6237);
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
var matches__6238 = re.exec(s);
if((matches__6238 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__6238) === 1))
{return cljs.core.first.call(null,matches__6238);
} else
{return cljs.core.vec.call(null,matches__6238);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__6239 = cljs.core.re_find.call(null,re,s);
var match_idx__6240 = s.search(re);
var match_str__6241 = ((cljs.core.coll_QMARK_.call(null,match_data__6239))?cljs.core.first.call(null,match_data__6239):match_data__6239);
var post_match__6242 = cljs.core.subs.call(null,s,(match_idx__6240 + cljs.core.count.call(null,match_str__6241)));
if(cljs.core.truth_(match_data__6239))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__6239,re_seq.call(null,re,post_match__6242));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__6244__6245 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___6246 = cljs.core.nth.call(null,vec__6244__6245,0,null);
var flags__6247 = cljs.core.nth.call(null,vec__6244__6245,1,null);
var pattern__6248 = cljs.core.nth.call(null,vec__6244__6245,2,null);
return (new RegExp(pattern__6248,flags__6247));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__6243_SHARP_){
return print_one.call(null,p1__6243_SHARP_,opts);
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
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____6249 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3822__auto____6249))
{var and__3822__auto____6253 = (function (){var G__6250__6251 = obj;
if((G__6250__6251 != null))
{if((function (){var or__3824__auto____6252 = (G__6250__6251.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3824__auto____6252)
{return or__3824__auto____6252;
} else
{return G__6250__6251.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6250__6251.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6250__6251);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6250__6251);
}
})();
if(cljs.core.truth_(and__3822__auto____6253))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____6253;
}
} else
{return and__3822__auto____6249;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3822__auto____6254 = (obj != null);
if(and__3822__auto____6254)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____6254;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__6255__6256 = obj;
if((G__6255__6256 != null))
{if((function (){var or__3824__auto____6257 = (G__6255__6256.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3824__auto____6257)
{return or__3824__auto____6257;
} else
{return G__6255__6256.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__6255__6256.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__6255__6256);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__6255__6256);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__6258 = cljs.core.first.call(null,objs);
var sb__6259 = (new goog.string.StringBuffer());
var G__6260__6261 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__6260__6261))
{var obj__6262 = cljs.core.first.call(null,G__6260__6261);
var G__6260__6263 = G__6260__6261;
while(true){
if((obj__6262 === first_obj__6258))
{} else
{sb__6259.append(" ");
}
var G__6264__6265 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6262,opts));
if(cljs.core.truth_(G__6264__6265))
{var string__6266 = cljs.core.first.call(null,G__6264__6265);
var G__6264__6267 = G__6264__6265;
while(true){
sb__6259.append(string__6266);
var temp__3974__auto____6268 = cljs.core.next.call(null,G__6264__6267);
if(cljs.core.truth_(temp__3974__auto____6268))
{var G__6264__6269 = temp__3974__auto____6268;
{
var G__6272 = cljs.core.first.call(null,G__6264__6269);
var G__6273 = G__6264__6269;
string__6266 = G__6272;
G__6264__6267 = G__6273;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____6270 = cljs.core.next.call(null,G__6260__6263);
if(cljs.core.truth_(temp__3974__auto____6270))
{var G__6260__6271 = temp__3974__auto____6270;
{
var G__6274 = cljs.core.first.call(null,G__6260__6271);
var G__6275 = G__6260__6271;
obj__6262 = G__6274;
G__6260__6263 = G__6275;
continue;
}
} else
{}
break;
}
} else
{}
return sb__6259;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__6276 = cljs.core.pr_sb.call(null,objs,opts);
sb__6276.append("\n");
return [cljs.core.str(sb__6276)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__6277 = cljs.core.first.call(null,objs);
var G__6278__6279 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__6278__6279))
{var obj__6280 = cljs.core.first.call(null,G__6278__6279);
var G__6278__6281 = G__6278__6279;
while(true){
if((obj__6280 === first_obj__6277))
{} else
{cljs.core.string_print.call(null," ");
}
var G__6282__6283 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6280,opts));
if(cljs.core.truth_(G__6282__6283))
{var string__6284 = cljs.core.first.call(null,G__6282__6283);
var G__6282__6285 = G__6282__6283;
while(true){
cljs.core.string_print.call(null,string__6284);
var temp__3974__auto____6286 = cljs.core.next.call(null,G__6282__6285);
if(cljs.core.truth_(temp__3974__auto____6286))
{var G__6282__6287 = temp__3974__auto____6286;
{
var G__6290 = cljs.core.first.call(null,G__6282__6287);
var G__6291 = G__6282__6287;
string__6284 = G__6290;
G__6282__6285 = G__6291;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____6288 = cljs.core.next.call(null,G__6278__6281);
if(cljs.core.truth_(temp__3974__auto____6288))
{var G__6278__6289 = temp__3974__auto____6288;
{
var G__6292 = cljs.core.first.call(null,G__6278__6289);
var G__6293 = G__6278__6289;
obj__6280 = G__6292;
G__6278__6281 = G__6293;
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
pr_str.cljs$lang$applyTo = (function (arglist__6294){
var objs = cljs.core.seq(arglist__6294);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
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
prn_str.cljs$lang$applyTo = (function (arglist__6295){
var objs = cljs.core.seq(arglist__6295);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
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
pr.cljs$lang$applyTo = (function (arglist__6296){
var objs = cljs.core.seq(arglist__6296);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__6297){
var objs = cljs.core.seq(arglist__6297);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
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
print_str.cljs$lang$applyTo = (function (arglist__6298){
var objs = cljs.core.seq(arglist__6298);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
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
println.cljs$lang$applyTo = (function (arglist__6299){
var objs = cljs.core.seq(arglist__6299);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
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
println_str.cljs$lang$applyTo = (function (arglist__6300){
var objs = cljs.core.seq(arglist__6300);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
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
prn.cljs$lang$applyTo = (function (arglist__6301){
var objs = cljs.core.seq(arglist__6301);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__6302 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__6302,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__6303 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__6303,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__6304 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__6304,"{",", ","}",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____6305 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____6305))
{var nspc__6306 = temp__3974__auto____6305;
return [cljs.core.str(nspc__6306),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____6307 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____6307))
{var nspc__6308 = temp__3974__auto____6307;
return [cljs.core.str(nspc__6308),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__6309 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__6309,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__6310 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__6310,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1345404928;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__6311 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__6312 = this;
var G__6313__6314 = cljs.core.seq.call(null,this__6312.watches);
if(cljs.core.truth_(G__6313__6314))
{var G__6316__6318 = cljs.core.first.call(null,G__6313__6314);
var vec__6317__6319 = G__6316__6318;
var key__6320 = cljs.core.nth.call(null,vec__6317__6319,0,null);
var f__6321 = cljs.core.nth.call(null,vec__6317__6319,1,null);
var G__6313__6322 = G__6313__6314;
var G__6316__6323 = G__6316__6318;
var G__6313__6324 = G__6313__6322;
while(true){
var vec__6325__6326 = G__6316__6323;
var key__6327 = cljs.core.nth.call(null,vec__6325__6326,0,null);
var f__6328 = cljs.core.nth.call(null,vec__6325__6326,1,null);
var G__6313__6329 = G__6313__6324;
f__6328.call(null,key__6327,this$,oldval,newval);
var temp__3974__auto____6330 = cljs.core.next.call(null,G__6313__6329);
if(cljs.core.truth_(temp__3974__auto____6330))
{var G__6313__6331 = temp__3974__auto____6330;
{
var G__6338 = cljs.core.first.call(null,G__6313__6331);
var G__6339 = G__6313__6331;
G__6316__6323 = G__6338;
G__6313__6324 = G__6339;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__6332 = this;
return this$.watches = cljs.core.assoc.call(null,this__6332.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__6333 = this;
return this$.watches = cljs.core.dissoc.call(null,this__6333.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__6334 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__6334.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__6335 = this;
return this__6335.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__6336 = this;
return this__6336.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__6337 = this;
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
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__6346__delegate = function (x,p__6340){
var map__6341__6342 = p__6340;
var map__6341__6343 = ((cljs.core.seq_QMARK_.call(null,map__6341__6342))?cljs.core.apply.call(null,cljs.core.hash_map,map__6341__6342):map__6341__6342);
var validator__6344 = cljs.core.get.call(null,map__6341__6343,"\uFDD0'validator");
var meta__6345 = cljs.core.get.call(null,map__6341__6343,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__6345,validator__6344,null));
};
var G__6346 = function (x,var_args){
var p__6340 = null;
if (goog.isDef(var_args)) {
  p__6340 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6346__delegate.call(this, x, p__6340);
};
G__6346.cljs$lang$maxFixedArity = 1;
G__6346.cljs$lang$applyTo = (function (arglist__6347){
var x = cljs.core.first(arglist__6347);
var p__6340 = cljs.core.rest(arglist__6347);
return G__6346__delegate(x, p__6340);
});
G__6346.cljs$lang$arity$variadic = G__6346__delegate;
return G__6346;
})()
;
atom = function(x,var_args){
var p__6340 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____6348 = a.validator;
if(cljs.core.truth_(temp__3974__auto____6348))
{var validate__6349 = temp__3974__auto____6348;
if(cljs.core.truth_(validate__6349.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5911))))].join('')));
}
} else
{}
var old_value__6350 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__6350,new_value);
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
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__6351__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__6351 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6351__delegate.call(this, a, f, x, y, z, more);
};
G__6351.cljs$lang$maxFixedArity = 5;
G__6351.cljs$lang$applyTo = (function (arglist__6352){
var a = cljs.core.first(arglist__6352);
var f = cljs.core.first(cljs.core.next(arglist__6352));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6352)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6352))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6352)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6352)))));
return G__6351__delegate(a, f, x, y, z, more);
});
G__6351.cljs$lang$arity$variadic = G__6351__delegate;
return G__6351;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__6353){
var iref = cljs.core.first(arglist__6353);
var f = cljs.core.first(cljs.core.next(arglist__6353));
var args = cljs.core.rest(cljs.core.next(arglist__6353));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
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
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
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
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536887296;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__6354 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__6354.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__6355 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__6355.state,(function (p__6356){
var curr_state__6357 = p__6356;
var curr_state__6358 = ((cljs.core.seq_QMARK_.call(null,curr_state__6357))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__6357):curr_state__6357);
var done__6359 = cljs.core.get.call(null,curr_state__6358,"\uFDD0'done");
if(cljs.core.truth_(done__6359))
{return curr_state__6358;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__6355.f.call(null)});
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
if(cljs.core.delay_QMARK_.call(null,x))
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
var map__6360__6361 = options;
var map__6360__6362 = ((cljs.core.seq_QMARK_.call(null,map__6360__6361))?cljs.core.apply.call(null,cljs.core.hash_map,map__6360__6361):map__6360__6361);
var keywordize_keys__6363 = cljs.core.get.call(null,map__6360__6362,"\uFDD0'keywordize-keys");
var keyfn__6364 = (cljs.core.truth_(keywordize_keys__6363)?cljs.core.keyword:cljs.core.str);
var f__6370 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__515__auto____6369 = (function iter__6365(s__6366){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6366__6367 = s__6366;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6366__6367)))
{var k__6368 = cljs.core.first.call(null,s__6366__6367);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__6364.call(null,k__6368),thisfn.call(null,(x[k__6368]))]),iter__6365.call(null,cljs.core.rest.call(null,s__6366__6367)));
} else
{return null;
}
break;
}
})));
});
return iter__515__auto____6369.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__6370.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__6371){
var x = cljs.core.first(arglist__6371);
var options = cljs.core.rest(arglist__6371);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
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
var mem__6372 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__6376__delegate = function (args){
var temp__3971__auto____6373 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__6372),args);
if(cljs.core.truth_(temp__3971__auto____6373))
{var v__6374 = temp__3971__auto____6373;
return v__6374;
} else
{var ret__6375 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__6372,cljs.core.assoc,args,ret__6375);
return ret__6375;
}
};
var G__6376 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6376__delegate.call(this, args);
};
G__6376.cljs$lang$maxFixedArity = 0;
G__6376.cljs$lang$applyTo = (function (arglist__6377){
var args = cljs.core.seq(arglist__6377);;
return G__6376__delegate(args);
});
G__6376.cljs$lang$arity$variadic = G__6376__delegate;
return G__6376;
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
var trampoline__1 = (function (f){
while(true){
var ret__6378 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__6378))
{{
var G__6379 = ret__6378;
f = G__6379;
continue;
}
} else
{return ret__6378;
}
break;
}
});
var trampoline__2 = (function() { 
var G__6380__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__6380 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6380__delegate.call(this, f, args);
};
G__6380.cljs$lang$maxFixedArity = 1;
G__6380.cljs$lang$applyTo = (function (arglist__6381){
var f = cljs.core.first(arglist__6381);
var args = cljs.core.rest(arglist__6381);
return G__6380__delegate(f, args);
});
G__6380.cljs$lang$arity$variadic = G__6380__delegate;
return G__6380;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
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
var k__6382 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__6382,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__6382,cljs.core.PersistentVector.fromArray([])),x));
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
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____6383 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____6383)
{return or__3824__auto____6383;
} else
{var or__3824__auto____6384 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3824__auto____6384)
{return or__3824__auto____6384;
} else
{var and__3822__auto____6385 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____6385)
{var and__3822__auto____6386 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____6386)
{var and__3822__auto____6387 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____6387)
{var ret__6388 = true;
var i__6389 = 0;
while(true){
if((function (){var or__3824__auto____6390 = cljs.core.not.call(null,ret__6388);
if(or__3824__auto____6390)
{return or__3824__auto____6390;
} else
{return (i__6389 === cljs.core.count.call(null,parent));
}
})())
{return ret__6388;
} else
{{
var G__6391 = isa_QMARK_.call(null,h,child.call(null,i__6389),parent.call(null,i__6389));
var G__6392 = (i__6389 + 1);
ret__6388 = G__6391;
i__6389 = G__6392;
continue;
}
}
break;
}
} else
{return and__3822__auto____6387;
}
} else
{return and__3822__auto____6386;
}
} else
{return and__3822__auto____6385;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
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
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6195))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6199))))].join('')));
}
var tp__6396 = "\uFDD0'parents".call(null,h);
var td__6397 = "\uFDD0'descendants".call(null,h);
var ta__6398 = "\uFDD0'ancestors".call(null,h);
var tf__6399 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____6400 = ((cljs.core.contains_QMARK_.call(null,tp__6396.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__6398.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__6398.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__6396,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__6399.call(null,"\uFDD0'ancestors".call(null,h),tag,td__6397,parent,ta__6398),"\uFDD0'descendants":tf__6399.call(null,"\uFDD0'descendants".call(null,h),parent,ta__6398,tag,td__6397)});
})());
if(cljs.core.truth_(or__3824__auto____6400))
{return or__3824__auto____6400;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
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
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__6401 = "\uFDD0'parents".call(null,h);
var childsParents__6402 = (cljs.core.truth_(parentMap__6401.call(null,tag))?cljs.core.disj.call(null,parentMap__6401.call(null,tag),parent):cljs.core.set([]));
var newParents__6403 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__6402))?cljs.core.assoc.call(null,parentMap__6401,tag,childsParents__6402):cljs.core.dissoc.call(null,parentMap__6401,tag));
var deriv_seq__6404 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6393_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__6393_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__6393_SHARP_),cljs.core.second.call(null,p1__6393_SHARP_)));
}),cljs.core.seq.call(null,newParents__6403)));
if(cljs.core.contains_QMARK_.call(null,parentMap__6401.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__6394_SHARP_,p2__6395_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__6394_SHARP_,p2__6395_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__6404));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
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
var xprefs__6405 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____6407 = (cljs.core.truth_((function (){var and__3822__auto____6406 = xprefs__6405;
if(cljs.core.truth_(and__3822__auto____6406))
{return xprefs__6405.call(null,y);
} else
{return and__3822__auto____6406;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____6407))
{return or__3824__auto____6407;
} else
{var or__3824__auto____6409 = (function (){var ps__6408 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__6408) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__6408),prefer_table)))
{} else
{}
{
var G__6412 = cljs.core.rest.call(null,ps__6408);
ps__6408 = G__6412;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____6409))
{return or__3824__auto____6409;
} else
{var or__3824__auto____6411 = (function (){var ps__6410 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__6410) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__6410),y,prefer_table)))
{} else
{}
{
var G__6413 = cljs.core.rest.call(null,ps__6410);
ps__6410 = G__6413;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____6411))
{return or__3824__auto____6411;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____6414 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____6414))
{return or__3824__auto____6414;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__6423 = cljs.core.reduce.call(null,(function (be,p__6415){
var vec__6416__6417 = p__6415;
var k__6418 = cljs.core.nth.call(null,vec__6416__6417,0,null);
var ___6419 = cljs.core.nth.call(null,vec__6416__6417,1,null);
var e__6420 = vec__6416__6417;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__6418))
{var be2__6422 = (cljs.core.truth_((function (){var or__3824__auto____6421 = (be == null);
if(or__3824__auto____6421)
{return or__3824__auto____6421;
} else
{return cljs.core.dominates.call(null,k__6418,cljs.core.first.call(null,be),prefer_table);
}
})())?e__6420:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__6422),k__6418,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__6418),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__6422)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__6422;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__6423))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__6423));
return cljs.core.second.call(null,best_entry__6423);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____6424 = mf;
if(and__3822__auto____6424)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____6424;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____6425 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3824__auto____6425)
{return or__3824__auto____6425;
} else
{var or__3824__auto____6426 = (cljs.core._reset["_"]);
if(or__3824__auto____6426)
{return or__3824__auto____6426;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____6427 = mf;
if(and__3822__auto____6427)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____6427;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____6428 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____6428)
{return or__3824__auto____6428;
} else
{var or__3824__auto____6429 = (cljs.core._add_method["_"]);
if(or__3824__auto____6429)
{return or__3824__auto____6429;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____6430 = mf;
if(and__3822__auto____6430)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____6430;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____6431 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____6431)
{return or__3824__auto____6431;
} else
{var or__3824__auto____6432 = (cljs.core._remove_method["_"]);
if(or__3824__auto____6432)
{return or__3824__auto____6432;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____6433 = mf;
if(and__3822__auto____6433)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____6433;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____6434 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____6434)
{return or__3824__auto____6434;
} else
{var or__3824__auto____6435 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____6435)
{return or__3824__auto____6435;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____6436 = mf;
if(and__3822__auto____6436)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____6436;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____6437 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____6437)
{return or__3824__auto____6437;
} else
{var or__3824__auto____6438 = (cljs.core._get_method["_"]);
if(or__3824__auto____6438)
{return or__3824__auto____6438;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____6439 = mf;
if(and__3822__auto____6439)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____6439;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____6440 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3824__auto____6440)
{return or__3824__auto____6440;
} else
{var or__3824__auto____6441 = (cljs.core._methods["_"]);
if(or__3824__auto____6441)
{return or__3824__auto____6441;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____6442 = mf;
if(and__3822__auto____6442)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____6442;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____6443 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3824__auto____6443)
{return or__3824__auto____6443;
} else
{var or__3824__auto____6444 = (cljs.core._prefers["_"]);
if(or__3824__auto____6444)
{return or__3824__auto____6444;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____6445 = mf;
if(and__3822__auto____6445)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____6445;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____6446 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3824__auto____6446)
{return or__3824__auto____6446;
} else
{var or__3824__auto____6447 = (cljs.core._dispatch["_"]);
if(or__3824__auto____6447)
{return or__3824__auto____6447;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__6448 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__6449 = cljs.core._get_method.call(null,mf,dispatch_val__6448);
if(cljs.core.truth_(target_fn__6449))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__6448)].join('')));
}
return cljs.core.apply.call(null,target_fn__6449,args);
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
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 32;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__354__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__6450 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__6451 = this;
cljs.core.swap_BANG_.call(null,this__6451.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6451.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6451.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6451.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__6452 = this;
cljs.core.swap_BANG_.call(null,this__6452.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__6452.method_cache,this__6452.method_table,this__6452.cached_hierarchy,this__6452.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__6453 = this;
cljs.core.swap_BANG_.call(null,this__6453.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__6453.method_cache,this__6453.method_table,this__6453.cached_hierarchy,this__6453.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__6454 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__6454.cached_hierarchy),cljs.core.deref.call(null,this__6454.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__6454.method_cache,this__6454.method_table,this__6454.cached_hierarchy,this__6454.hierarchy);
}
var temp__3971__auto____6455 = cljs.core.deref.call(null,this__6454.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____6455))
{var target_fn__6456 = temp__3971__auto____6455;
return target_fn__6456;
} else
{var temp__3971__auto____6457 = cljs.core.find_and_cache_best_method.call(null,this__6454.name,dispatch_val,this__6454.hierarchy,this__6454.method_table,this__6454.prefer_table,this__6454.method_cache,this__6454.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____6457))
{var target_fn__6458 = temp__3971__auto____6457;
return target_fn__6458;
} else
{return cljs.core.deref.call(null,this__6454.method_table).call(null,this__6454.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__6459 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__6459.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__6459.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__6459.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__6459.method_cache,this__6459.method_table,this__6459.cached_hierarchy,this__6459.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__6460 = this;
return cljs.core.deref.call(null,this__6460.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__6461 = this;
return cljs.core.deref.call(null,this__6461.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__6462 = this;
return cljs.core.do_dispatch.call(null,mf,this__6462.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__6463__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__6463 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6463__delegate.call(this, _, args);
};
G__6463.cljs$lang$maxFixedArity = 1;
G__6463.cljs$lang$applyTo = (function (arglist__6464){
var _ = cljs.core.first(arglist__6464);
var args = cljs.core.rest(arglist__6464);
return G__6463__delegate(_, args);
});
G__6463.cljs$lang$arity$variadic = G__6463__delegate;
return G__6463;
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
