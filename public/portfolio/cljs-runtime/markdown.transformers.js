goog.provide('markdown.transformers');
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text))){
return null;
} else {
var trimmed = (function (){var G__44036 = text;
if((G__44036 == null)){
return null;
} else {
return clojure.string.trim(G__44036);
}
})();
var and__5043__auto__ = cljs.core.not_empty(trimmed);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([type]),trimmed);
} else {
return and__5043__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,p__44037){
var map__44038 = p__44037;
var map__44038__$1 = cljs.core.__destructure_map(map__44038);
var state = map__44038__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__5045__auto__ = code;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5045__auto__ = markdown.transformers.h1_QMARK_(text);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return markdown.transformers.h2_QMARK_(text);
}
})())?"":text),((clojure.string.blank_QMARK_(text))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"hr","hr",1377740067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"heading","heading",-1312171873)], 0)):state)], null);
}
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__44089 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq("<sup>"),cljs.core.second(remaining),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq("</sup>")], 0)));
var G__44090 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),remaining);
buf = G__44089;
remaining = G__44090;
continue;
} else {
var G__44091 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(remaining));
var G__44092 = cljs.core.rest(remaining);
buf = G__44091;
remaining = G__44092;
continue;

}
}
break;
}
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,p__44039){
var map__44040 = p__44039;
var map__44040__$1 = cljs.core.__destructure_map(map__44040);
var state = map__44040__$1;
var buf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44040__$1,new cljs.core.Keyword(null,"buf","buf",-213913340));
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44040__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44040__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44040__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var heading_anchors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44040__$1,new cljs.core.Keyword(null,"heading-anchors","heading-anchors",1713527866));
if(cljs.core.truth_((function (){var or__5045__auto__ = codeblock;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return code;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_((function (){var or__5045__auto__ = buf;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return next_line;
}
})()))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</h1>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_((function (){var or__5045__auto__ = buf;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return next_line;
}
})()))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<h2>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</h2>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
var temp__5802__auto__ = markdown.common.make_heading(text,heading_anchors);
if(cljs.core.truth_(temp__5802__auto__)){
var heading = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__44041){
var map__44042 = p__44041;
var map__44042__$1 = cljs.core.__destructure_map(map__44042);
var state = map__44042__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44042__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44042__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),text))) && (cljs.core.not((function (){var or__5045__auto__ = code;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lists;
}
})()))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),text))),"<br />"].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,p__44044){
var map__44045 = p__44044;
var map__44045__$1 = cljs.core.__destructure_map(map__44045);
var state = map__44045__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44045__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var frozen_strings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44045__$1,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560));
if(cljs.core.truth_(code)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var currently_frozen = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),frozen_strings], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,(function (p1__44043_SHARP_){
var vec__44046 = markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__44043_SHARP_,(1),(cljs.core.count(p1__44043_SHARP_) - (1))),cljs.core.deref(currently_frozen)], 0));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44046,(0),null);
var frozen_strings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44046,(1),null);
cljs.core.vreset_BANG_(currently_frozen,frozen_strings__$1);

return ["<a href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"</a>"].join('');
})),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,cljs.core.deref(currently_frozen)], 0))], null);
}
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
var left_pad = (function (s){
var G__44050 = s;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(s))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44050)].join('');
} else {
return G__44050;
}
});
var encoder = (cljs.core.truth_(new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403).cljs$core$IFn$_invoke$arity$1(state))?(function (c){
return ["&#x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_pad(c.charCodeAt((0)).toString((16)))),";"].join('');
}):(function (c){
return markdown.transformers._STAR_formatter_STAR_.call(null,"&#x%02x;",(c | (0)));
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__44049_SHARP_){
var encoded = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(encoder,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__44049_SHARP_,(1),(cljs.core.count(p1__44049_SHARP_) - (1)))));
return ["<a href=\"mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded),"</a>"].join('');
}))),state], null);
});
markdown.transformers.set_line_state = (function markdown$transformers$set_line_state(text,p__44051){
var map__44052 = p__44051;
var map__44052__$1 = cljs.core.__destructure_map(map__44052);
var state = map__44052__$1;
var inline_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44052__$1,new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818)], null),inline_heading)], null);
});
markdown.transformers.clear_line_state = (function markdown$transformers$clear_line_state(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"temp","temp",1791541284))], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(last_line_empty_QMARK_);
if(and__5043__auto__){
return cljs.core.not_empty(text);
} else {
return and__5043__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('');
} else {
return text;
}
});
markdown.transformers.open_paragraph = (function markdown$transformers$open_paragraph(text,p__44053){
var map__44054 = p__44053;
var map__44054__$1 = cljs.core.__destructure_map(map__44054);
var state = map__44054__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"paragraph","paragraph",296707709));
var blockquote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"blockquote","blockquote",372264190));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var inline_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818));
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44054__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.truth_((function (){var and__5043__auto__ = paragraph;
if(cljs.core.truth_(and__5043__auto__)){
return lists;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["</p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709))], null);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = heading;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = inline_heading;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = hr;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = code;
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = lists;
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
return blockquote;
}
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph)){
if(cljs.core.truth_((function (){var or__5045__auto__ = eof;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.empty_QMARK_(clojure.string.trim(text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.transformers.paragraph_text(last_line_empty_QMARK_,text)),"</p>"].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text(last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(eof);
if(and__5043__auto__){
var and__5043__auto____$1 = (!(clojure.string.blank_QMARK_(text)));
if(and__5043__auto____$1){
var or__5045__auto__ = new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818).cljs$core$IFn$_invoke$arity$1(temp);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return last_line_empty_QMARK_;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.close_paragraph = (function markdown$transformers$close_paragraph(text,p__44055){
var map__44056 = p__44055;
var map__44056__$1 = cljs.core.__destructure_map(map__44056);
var state = map__44056__$1;
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44056__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287));
var paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44056__$1,new cljs.core.Keyword(null,"paragraph","paragraph",296707709));
if(cljs.core.truth_((function (){var and__5043__auto__ = paragraph;
if(cljs.core.truth_(and__5043__auto__)){
var G__44057 = next_line;
var G__44057__$1 = (((G__44057 == null))?null:clojure.string.trim(G__44057));
if((G__44057__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__44057__$1,"```");
}
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</p>"].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,state){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.transformers.close_paragraph,markdown.transformers.open_paragraph(text,state));
});
markdown.transformers.code = (function markdown$transformers$code(text,p__44058){
var map__44059 = p__44058;
var map__44059__$1 = cljs.core.__destructure_map(map__44059);
var state = map__44059__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var indent_code_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059__$1,new cljs.core.Keyword(null,"indent-code-end","indent-code-end",644690061));
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287));
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44059__$1,new cljs.core.Keyword(null,"paragraph","paragraph",296707709));
var should_close_QMARK_ = (function (){var or__5045__auto__ = eof;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(((clojure.string.blank_QMARK_(next_line)) || (clojure.string.starts_with_QMARK_(next_line,"    ")))));
}
})();
if(cljs.core.truth_((function (){var or__5045__auto__ = lists;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(indent_code_end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"indent-code-end","indent-code-end",644690061),new cljs.core.Keyword(null,"indented-code","indented-code",-904930175)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)], null);
} else {
if(cljs.core.truth_(code)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[markdown.common.escape_code(clojure.string.replace_first(text,/    /,"\n")),(cljs.core.truth_(should_close_QMARK_)?"</code></pre>":null)].join(''),(function (){var G__44060 = state;
if(cljs.core.truth_(should_close_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44060,new cljs.core.Keyword(null,"indent-code-end","indent-code-end",644690061),true);
} else {
return G__44060;
}
})()], null);
} else {
if(cljs.core.truth_(paragraph)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.empty_QMARK_(clojure.string.trim(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
if((num_spaces >= (4))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<pre><code>",markdown.common.escape_code(clojure.string.replace_first(text,/    /,"")),(cljs.core.truth_(should_close_QMARK_)?"</code></pre>":null)].join(''),(function (){var G__44061 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"code","code",1586293142),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"indented-code","indented-code",-904930175),true], 0));
if(cljs.core.truth_(should_close_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44061,new cljs.core.Keyword(null,"indent-code-end","indent-code-end",644690061),true);
} else {
return G__44061;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,p__44062){
var map__44063 = p__44062;
var map__44063__$1 = cljs.core.__destructure_map(map__44063);
var state = map__44063__$1;
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44063__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var codeblock_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44063__$1,new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736));
var indented_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44063__$1,new cljs.core.Keyword(null,"indented-code","indented-code",-904930175));
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44063__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287));
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44063__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var trimmed = clojure.string.trim(text);
var next_line_closes_QMARK_ = (function (){var G__44064 = next_line;
var G__44064__$1 = (((G__44064 == null))?null:clojure.string.trim(G__44064));
if((G__44064__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__44064__$1,"```");
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = lists;
if(cljs.core.truth_(and__5043__auto__)){
return codeblock_end;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736)], 0))], null);
} else {
if(cljs.core.truth_(codeblock_end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736)], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = next_line_closes_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return codeblock;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[markdown.common.escape_code([cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(next_line,/```/))))].join('')),"</code></pre>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749),cljs.core.not(lists),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736),true,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.not(lists)], 0))], null);
} else {
if(((cljs.core.not(indented_code)) && (clojure.string.starts_with_QMARK_(trimmed,"```")))){
var vec__44065 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"\n"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed));
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44065,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44065,(1),null);
var lang__$1 = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang));
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(code));
var formatter = new cljs.core.Keyword(null,"code-style","code-style",-2144009586).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<pre><code",((cljs.core.seq(lang__$1))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(formatter)?(formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(lang__$1) : formatter.call(null,lang__$1)):["class=\"",clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang__$1),"\""].join('')))].join(''):null),">",markdown.common.escape_code(((cljs.core.empty_QMARK_(s))?s:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n"].join(''))),(cljs.core.truth_(next_line_closes_QMARK_)?"</code></pre>":null)].join(''),(cljs.core.truth_(next_line_closes_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749),true], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"code","code",1586293142),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),true], 0)))], null);
} else {
if(cljs.core.truth_(codeblock)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[markdown.common.escape_code(text),"\n"].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((((cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (((cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text))))))) && ((cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<hr/>",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hr","hr",1377740067),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
/**
 * Check for blockquotes and signal to blockquote-2 function with
 *   states blockquote-start and blockquote-end so that tags can be added.
 *   This approach enables lists to be included in blockquotes.
 */
markdown.transformers.blockquote_1 = (function markdown$transformers$blockquote_1(text,p__44068){
var map__44069 = p__44068;
var map__44069__$1 = cljs.core.__destructure_map(map__44069);
var state = map__44069__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44069__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44069__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44069__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var or__5045__auto__ = code;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote","blockquote",372264190).cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__5045__auto__ = eof;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.empty_QMARK_(trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"blockquote-end","blockquote-end",1122544964),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blockquote","blockquote",372264190),false], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",trimmed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682).cljs$core$IFn$_invoke$arity$1(state))?"</p>":null),"<p>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),true)], null);
} else {
if((((((trimmed).length) >= (2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(2)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682).cljs$core$IFn$_invoke$arity$1(state))?"</p>":null),"<footer>",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(2)),"</footer>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),false)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682).cljs$core$IFn$_invoke$arity$1(state))?null:"<p>"),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1))," "].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682).cljs$core$IFn$_invoke$arity$1(state))?null:"<p>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)," "].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),true)], null);

}
}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.first(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(text))," "].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"blockquote-start","blockquote-start",276074935),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blockquote","blockquote",372264190),true,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),true], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
/**
 * Check for change in blockquote states and add start or end tags.
 *   Closing a blockquote with a list in it is a bit more complex,
 *   as the list is not closed until the following blank line.
 */
markdown.transformers.blockquote_2 = (function markdown$transformers$blockquote_2(text,p__44070){
var map__44071 = p__44070;
var map__44071__$1 = cljs.core.__destructure_map(map__44071);
var state = map__44071__$1;
var blockquote_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44071__$1,new cljs.core.Keyword(null,"blockquote-start","blockquote-start",276074935));
var blockquote_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44071__$1,new cljs.core.Keyword(null,"blockquote-end","blockquote-end",1122544964));
var blockquote_paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44071__$1,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682));
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44071__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var not_in_list = ((cljs.core.not(lists)) || (cljs.core.empty_QMARK_(lists)));
if(cljs.core.truth_(blockquote_start)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<blockquote><p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"blockquote-start","blockquote-start",276074935))], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = blockquote_end;
if(cljs.core.truth_(and__5043__auto__)){
return not_in_list;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),(cljs.core.truth_(blockquote_paragraph)?"</p>":null),"</blockquote>"].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),new cljs.core.Keyword(null,"blockquote-end","blockquote-end",1122544964)], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
});
markdown.transformers.footer = (function markdown$transformers$footer(footnotes){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(footnotes))){
return "";
} else {
return (function (p1__44072_SHARP_){
return ["<ol class='footnotes'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44072_SHARP_),"</ol>"].join('');
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (footnotes__$1,p__44073){
var vec__44074 = p__44073;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44074,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44074,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(footnotes__$1),"<li id='fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",label))),"<a href='#fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"'>&#8617;</a></li>"].join('');
}),"",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(footnotes))));
}
});
/**
 * Given a line of metadata header text return either a list containing a parsed
 *   and normalizd key and the original text of the value, or if no header is found
 *   (this is a continuation or new value from a pervious header key) simply
 *   return the text. If a blank or invalid line is found return nil.
 */
markdown.transformers.parse_metadata_line = (function markdown$transformers$parse_metadata_line(line){
if(cljs.core.truth_(line)){
var vec__44077 = cljs.core.re_matches(/^([0-9A-Za-z_-]*):(.*)$/,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44077,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44077,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44077,(2),null);
var vec__44080 = cljs.core.re_matches(/^    (.*)$/,line);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(0),null);
var next_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),"")){
if(cljs.core.truth_(key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(key)),val], null);
} else {
if(cljs.core.truth_(next_val)){
return line;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a list of maps which contain a single key/value, flatten them all into
 *   a single map with all the leading spaces removed. If an empty list is provided
 *   then return nil.
 */
markdown.transformers.flatten_metadata = (function markdown$transformers$flatten_metadata(metadata){
if((cljs.core.count(metadata) > (0))){
var acc = cljs.core.PersistentArrayMap.EMPTY;
var remain = metadata;
var prev_key = null;
while(true){
if(cljs.core.seq(remain)){
var data = cljs.core.first(remain);
var vec__44086 = ((cljs.core.sequential_QMARK_(data))?data:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_key,data], null));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44086,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44086,(1),null);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,key,cljs.core.PersistentVector.EMPTY);
var postfix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),val)))?"\n":"");
var norm_val = [clojure.string.trim(val),postfix].join('');
var new_val = (((!(cljs.core.empty_QMARK_(norm_val))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_val,norm_val):prev_val);
var G__44093 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new_val])], 0));
var G__44094 = cljs.core.rest(remain);
var G__44095 = key;
acc = G__44093;
remain = G__44094;
prev_key = G__44095;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
});
markdown.transformers.parse_wiki_metadata_headers = (function markdown$transformers$parse_wiki_metadata_headers(lines_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,line){
var temp__5802__auto__ = markdown.transformers.parse_metadata_line(line);
if(cljs.core.truth_(temp__5802__auto__)){
var parsed = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,parsed);
} else {
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.flatten_metadata(acc),cljs.core.count(acc)], null));
}
}),cljs.core.PersistentVector.EMPTY,lines_seq);
});
markdown.transformers.parse_yaml_metadata_headers = (function markdown$transformers$parse_yaml_metadata_headers(lines_seq){
throw (new Error("YAML is unsupported in ClojureScript mode"));
});
markdown.transformers.parse_edn_metadata_headers = (function markdown$transformers$parse_edn_metadata_headers(lines_seq){
var meta_lines = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,/\s*/)),lines_seq);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",meta_lines)),(cljs.core.count(meta_lines) + (1))], null);
});
/**
 * Given a sequence of lines from a markdown document, attempt to parse a
 *   metadata header if it exists. Accepts wiki, yaml, and edn formats.
 * 
 *   Returns the parsed headers number of lines the metadata spans
 */
markdown.transformers.parse_metadata_headers = (function markdown$transformers$parse_metadata_headers(lines_seq){
if(cljs.core.sequential_QMARK_(lines_seq)){
} else {
throw (new Error("Assert failed: (sequential? lines-seq)"));
}

if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,lines_seq)){
} else {
throw (new Error("Assert failed: (every? string? lines-seq)"));
}

if(cljs.core.truth_(cljs.core.re_matches(/---\s*/,cljs.core.first(lines_seq)))){
return markdown.transformers.parse_yaml_metadata_headers(lines_seq);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\w+: .*/,cljs.core.first(lines_seq)))){
return markdown.transformers.parse_wiki_metadata_headers(lines_seq);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\{.*/,cljs.core.first(lines_seq)))){
return markdown.transformers.parse_edn_metadata_headers(lines_seq);
} else {
return null;
}
}
}
});
markdown.transformers.transformer_vector = cljs.core.PersistentVector.fromArray([markdown.transformers.set_line_state,markdown.transformers.empty_line,markdown.common.inhibit,markdown.common.escape_inhibit_separator,markdown.transformers.code,markdown.transformers.codeblock,markdown.common.escaped_chars,markdown.common.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.links.image,markdown.links.image_reference_link,markdown.links.link,markdown.links.implicit_reference_link,markdown.links.reference_link,markdown.links.footnote_link,markdown.transformers.hr,markdown.transformers.blockquote_1,markdown.lists.li,markdown.transformers.heading,markdown.transformers.blockquote_2,markdown.common.italics,markdown.common.bold_italic,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough,markdown.transformers.superscript,markdown.tables.table,markdown.transformers.paragraph,markdown.transformers.br,markdown.common.thaw_strings,markdown.common.dashes,markdown.transformers.clear_line_state], true);

//# sourceMappingURL=markdown.transformers.js.map