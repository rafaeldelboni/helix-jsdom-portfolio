goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39831){
var map__39840 = p__39831;
var map__39840__$1 = cljs.core.__destructure_map(map__39840);
var m = map__39840__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39881_40295 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39882_40296 = null;
var count__39883_40297 = (0);
var i__39884_40298 = (0);
while(true){
if((i__39884_40298 < count__39883_40297)){
var f_40299 = chunk__39882_40296.cljs$core$IIndexed$_nth$arity$2(null,i__39884_40298);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40299], 0));


var G__40300 = seq__39881_40295;
var G__40301 = chunk__39882_40296;
var G__40302 = count__39883_40297;
var G__40303 = (i__39884_40298 + (1));
seq__39881_40295 = G__40300;
chunk__39882_40296 = G__40301;
count__39883_40297 = G__40302;
i__39884_40298 = G__40303;
continue;
} else {
var temp__5804__auto___40304 = cljs.core.seq(seq__39881_40295);
if(temp__5804__auto___40304){
var seq__39881_40305__$1 = temp__5804__auto___40304;
if(cljs.core.chunked_seq_QMARK_(seq__39881_40305__$1)){
var c__5568__auto___40306 = cljs.core.chunk_first(seq__39881_40305__$1);
var G__40307 = cljs.core.chunk_rest(seq__39881_40305__$1);
var G__40308 = c__5568__auto___40306;
var G__40309 = cljs.core.count(c__5568__auto___40306);
var G__40310 = (0);
seq__39881_40295 = G__40307;
chunk__39882_40296 = G__40308;
count__39883_40297 = G__40309;
i__39884_40298 = G__40310;
continue;
} else {
var f_40311 = cljs.core.first(seq__39881_40305__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40311], 0));


var G__40312 = cljs.core.next(seq__39881_40305__$1);
var G__40313 = null;
var G__40314 = (0);
var G__40315 = (0);
seq__39881_40295 = G__40312;
chunk__39882_40296 = G__40313;
count__39883_40297 = G__40314;
i__39884_40298 = G__40315;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40316 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40316], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40316)))?cljs.core.second(arglists_40316):arglists_40316)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40021_40331 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40022_40332 = null;
var count__40023_40333 = (0);
var i__40024_40334 = (0);
while(true){
if((i__40024_40334 < count__40023_40333)){
var vec__40107_40335 = chunk__40022_40332.cljs$core$IIndexed$_nth$arity$2(null,i__40024_40334);
var name_40336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40107_40335,(0),null);
var map__40110_40337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40107_40335,(1),null);
var map__40110_40338__$1 = cljs.core.__destructure_map(map__40110_40337);
var doc_40339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40110_40338__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40110_40338__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40336], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40340], 0));

if(cljs.core.truth_(doc_40339)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40339], 0));
} else {
}


var G__40342 = seq__40021_40331;
var G__40343 = chunk__40022_40332;
var G__40344 = count__40023_40333;
var G__40345 = (i__40024_40334 + (1));
seq__40021_40331 = G__40342;
chunk__40022_40332 = G__40343;
count__40023_40333 = G__40344;
i__40024_40334 = G__40345;
continue;
} else {
var temp__5804__auto___40346 = cljs.core.seq(seq__40021_40331);
if(temp__5804__auto___40346){
var seq__40021_40347__$1 = temp__5804__auto___40346;
if(cljs.core.chunked_seq_QMARK_(seq__40021_40347__$1)){
var c__5568__auto___40348 = cljs.core.chunk_first(seq__40021_40347__$1);
var G__40349 = cljs.core.chunk_rest(seq__40021_40347__$1);
var G__40350 = c__5568__auto___40348;
var G__40351 = cljs.core.count(c__5568__auto___40348);
var G__40352 = (0);
seq__40021_40331 = G__40349;
chunk__40022_40332 = G__40350;
count__40023_40333 = G__40351;
i__40024_40334 = G__40352;
continue;
} else {
var vec__40138_40353 = cljs.core.first(seq__40021_40347__$1);
var name_40354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40138_40353,(0),null);
var map__40141_40355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40138_40353,(1),null);
var map__40141_40356__$1 = cljs.core.__destructure_map(map__40141_40355);
var doc_40357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40141_40356__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40141_40356__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40354], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40358], 0));

if(cljs.core.truth_(doc_40357)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40357], 0));
} else {
}


var G__40361 = cljs.core.next(seq__40021_40347__$1);
var G__40362 = null;
var G__40363 = (0);
var G__40364 = (0);
seq__40021_40331 = G__40361;
chunk__40022_40332 = G__40362;
count__40023_40333 = G__40363;
i__40024_40334 = G__40364;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40142 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40143 = null;
var count__40144 = (0);
var i__40145 = (0);
while(true){
if((i__40145 < count__40144)){
var role = chunk__40143.cljs$core$IIndexed$_nth$arity$2(null,i__40145);
var temp__5804__auto___40366__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40366__$1)){
var spec_40370 = temp__5804__auto___40366__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40370)], 0));
} else {
}


var G__40372 = seq__40142;
var G__40373 = chunk__40143;
var G__40374 = count__40144;
var G__40375 = (i__40145 + (1));
seq__40142 = G__40372;
chunk__40143 = G__40373;
count__40144 = G__40374;
i__40145 = G__40375;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__40142);
if(temp__5804__auto____$1){
var seq__40142__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40142__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40142__$1);
var G__40376 = cljs.core.chunk_rest(seq__40142__$1);
var G__40377 = c__5568__auto__;
var G__40378 = cljs.core.count(c__5568__auto__);
var G__40379 = (0);
seq__40142 = G__40376;
chunk__40143 = G__40377;
count__40144 = G__40378;
i__40145 = G__40379;
continue;
} else {
var role = cljs.core.first(seq__40142__$1);
var temp__5804__auto___40381__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40381__$2)){
var spec_40382 = temp__5804__auto___40381__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40382)], 0));
} else {
}


var G__40383 = cljs.core.next(seq__40142__$1);
var G__40384 = null;
var G__40385 = (0);
var G__40386 = (0);
seq__40142 = G__40383;
chunk__40143 = G__40384;
count__40144 = G__40385;
i__40145 = G__40386;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40390 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40391 = cljs.core.ex_cause(t);
via = G__40390;
t = G__40391;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40182 = datafied_throwable;
var map__40182__$1 = cljs.core.__destructure_map(map__40182);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40182__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40182__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40182__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40183 = cljs.core.last(via);
var map__40183__$1 = cljs.core.__destructure_map(map__40183);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40183__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40183__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40184 = data;
var map__40184__$1 = cljs.core.__destructure_map(map__40184);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40184__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40184__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40184__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40185 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40185__$1 = cljs.core.__destructure_map(map__40185);
var top_data = map__40185__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40185__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40187 = phase;
var G__40187__$1 = (((G__40187 instanceof cljs.core.Keyword))?G__40187.fqn:null);
switch (G__40187__$1) {
case "read-source":
var map__40188 = data;
var map__40188__$1 = cljs.core.__destructure_map(map__40188);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40188__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40188__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40189 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40189__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40189,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40189);
var G__40189__$2 = (cljs.core.truth_((function (){var fexpr__40190 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40190.cljs$core$IFn$_invoke$arity$1 ? fexpr__40190.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40190.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40189__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40189__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40189__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40191 = top_data;
var G__40191__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40191,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40191);
var G__40191__$2 = (cljs.core.truth_((function (){var fexpr__40195 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40195.cljs$core$IFn$_invoke$arity$1 ? fexpr__40195.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40195.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40191__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40191__$1);
var G__40191__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40191__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40191__$2);
var G__40191__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40191__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40191__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40191__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40191__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40198 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198,(3),null);
var G__40205 = top_data;
var G__40205__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40205,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40205);
var G__40205__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40205__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40205__$1);
var G__40205__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40205__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40205__$2);
var G__40205__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40205__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40205__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40205__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40205__$4;
}

break;
case "execution":
var vec__40209 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40181_SHARP_){
var or__5045__auto__ = (p1__40181_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__40216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40216.cljs$core$IFn$_invoke$arity$1 ? fexpr__40216.cljs$core$IFn$_invoke$arity$1(p1__40181_SHARP_) : fexpr__40216.call(null,p1__40181_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__40221 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40221__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40221,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40221);
var G__40221__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40221__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40221__$1);
var G__40221__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40221__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40221__$2);
var G__40221__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40221__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40221__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40221__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40221__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40187__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40244){
var map__40245 = p__40244;
var map__40245__$1 = cljs.core.__destructure_map(map__40245);
var triage_data = map__40245__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40250 = phase;
var G__40250__$1 = (((G__40250 instanceof cljs.core.Keyword))?G__40250.fqn:null);
switch (G__40250__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40251 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40252 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40253 = loc;
var G__40254 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40255_40492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40256_40493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40257_40494 = true;
var _STAR_print_fn_STAR__temp_val__40258_40495 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40257_40494);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40258_40495);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40238_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40238_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40256_40493);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40255_40492);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40251,G__40252,G__40253,G__40254) : format.call(null,G__40251,G__40252,G__40253,G__40254));

break;
case "macroexpansion":
var G__40261 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40262 = cause_type;
var G__40263 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40264 = loc;
var G__40265 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40261,G__40262,G__40263,G__40264,G__40265) : format.call(null,G__40261,G__40262,G__40263,G__40264,G__40265));

break;
case "compile-syntax-check":
var G__40266 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40267 = cause_type;
var G__40268 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40269 = loc;
var G__40270 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40266,G__40267,G__40268,G__40269,G__40270) : format.call(null,G__40266,G__40267,G__40268,G__40269,G__40270));

break;
case "compilation":
var G__40274 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40275 = cause_type;
var G__40276 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40277 = loc;
var G__40278 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40274,G__40275,G__40276,G__40277,G__40278) : format.call(null,G__40274,G__40275,G__40276,G__40277,G__40278));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40279 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40280 = symbol;
var G__40281 = loc;
var G__40282 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40283_40518 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40284_40519 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40285_40520 = true;
var _STAR_print_fn_STAR__temp_val__40286_40521 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40285_40520);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40286_40521);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40243_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40243_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40284_40519);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40283_40518);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40279,G__40280,G__40281,G__40282) : format.call(null,G__40279,G__40280,G__40281,G__40282));
} else {
var G__40288 = "Execution error%s at %s(%s).\n%s\n";
var G__40289 = cause_type;
var G__40290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40291 = loc;
var G__40292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40288,G__40289,G__40290,G__40291,G__40292) : format.call(null,G__40288,G__40289,G__40290,G__40291,G__40292));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40250__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
