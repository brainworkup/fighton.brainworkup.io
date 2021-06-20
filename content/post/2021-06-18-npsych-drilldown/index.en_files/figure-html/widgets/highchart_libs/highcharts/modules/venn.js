/*
 Highcharts JS v9.1.0 (2021-05-03)

 (c) 2017-2021 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/venn",["highcharts"],function(p){a(p);a.Highcharts=p;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function p(a,g,b,m){a.hasOwnProperty(g)||(a[g]=m.apply(null,b))}a=a?a._modules:{};p(a,"Mixins/Geometry.js",[],function(){return{getAngleBetweenPoints:function(a,g){return Math.atan2(g.x-a.x,g.y-a.y)},getCenterOfPoints:function(a){var g=
a.reduce(function(b,a){b.x+=a.x;b.y+=a.y;return b},{x:0,y:0});return{x:g.x/a.length,y:g.y/a.length}},getDistanceBetweenPoints:function(a,g){return Math.sqrt(Math.pow(g.x-a.x,2)+Math.pow(g.y-a.y,2))}}});p(a,"Mixins/GeometryCircles.js",[a["Mixins/Geometry.js"]],function(a){function g(d,c){c=Math.pow(10,c);return Math.round(d*c)/c}function b(d){if(0>=d)throw Error("radius of circle must be a positive number.");return Math.PI*d*d}function m(d,c){return d*d*Math.acos(1-c/d)-(d-c)*Math.sqrt(c*(2*d-c))}
function q(d,c){var a=t(d,c),b=d.r,h=c.r,n=[];if(a<b+h&&a>Math.abs(b-h)){b*=b;var e=(b-h*h+a*a)/(2*a);h=Math.sqrt(b-e*e);b=d.x;n=c.x;d=d.y;var k=c.y;c=b+e*(n-b)/a;e=d+e*(k-d)/a;d=h/a*-(k-d);a=h/a*-(n-b);n=[{x:g(c+d,14),y:g(e-a,14)},{x:g(c-d,14),y:g(e+a,14)}]}return n}function l(a){return a.reduce(function(c,a,b,d){d=d.slice(b+1).reduce(function(c,d,h){var g=[b,h+b+1];return c.concat(q(a,d).map(function(c){c.indexes=g;return c}))},[]);return c.concat(d)},[])}function k(a,c){return t(a,c)<=c.r+1e-10}
function v(a,c){return!c.some(function(c){return!k(a,c)})}function e(a){return l(a).filter(function(c){return v(c,a)})}var h=a.getAngleBetweenPoints,u=a.getCenterOfPoints,t=a.getDistanceBetweenPoints;return{getAreaOfCircle:b,getAreaOfIntersectionBetweenCircles:function(a){var c=e(a);if(1<c.length){var b=u(c);c=c.map(function(c){c.angle=h(b,c);return c}).sort(function(c,a){return a.angle-c.angle});var d=c[c.length-1];c=c.reduce(function(c,b){var d=c.startPoint,g=u([d,b]),e=b.indexes.filter(function(c){return-1<
d.indexes.indexOf(c)}).reduce(function(c,e){e=a[e];var k=h(e,b),x=h(e,d);k=x-(x-k+(x<k?2*Math.PI:0))/2;k=t(g,{x:e.x+e.r*Math.sin(k),y:e.y+e.r*Math.cos(k)});e=e.r;k>2*e&&(k=2*e);if(!c||c.width>k)c={r:e,largeArc:k>e?1:0,width:k,x:b.x,y:b.y};return c},null);if(e){var k=e.r;c.arcs.push(["A",k,k,0,e.largeArc,1,e.x,e.y]);c.startPoint=b}return c},{startPoint:d,arcs:[]}).arcs;if(0!==c.length&&1!==c.length){c.unshift(["M",d.x,d.y]);var g={center:b,d:c}}}return g},getCircleCircleIntersection:q,getCirclesIntersectionPoints:l,
getCirclesIntersectionPolygon:e,getCircularSegmentArea:m,getOverlapBetweenCircles:function(a,c,e){var d=0;e<a+c&&(e<=Math.abs(c-a)?d=b(a<c?a:c):(d=(a*a-c*c+e*e)/(2*e),e-=d,d=m(a,a-d)+m(c,c-e)),d=g(d,14));return d},isCircle1CompletelyOverlappingCircle2:function(a,c){return t(a,c)+c.r<a.r+1e-10},isPointInsideCircle:k,isPointInsideAllCircles:v,isPointOutsideAllCircles:function(a,c){return!c.some(function(c){return k(a,c)})},round:g}});p(a,"Mixins/NelderMead.js",[],function(){var a=function(a){a=a.slice(0,
-1);for(var b=a.length,g=[],q=function(a,b){a.sum+=b[a.i];return a},l=0;l<b;l++)g[l]=a.reduce(q,{sum:0,i:l}).sum/b;return g};return{getCentroid:a,nelderMead:function(g,b){var m=function(a,b){return a.fx-b.fx},q=function(a,b,e,d){return b.map(function(c,b){return a*c+e*d[b]})},l=function(a,b){b.fx=g(b);a[a.length-1]=b;return a},k=function(a){var c=a[0];return a.map(function(a){a=q(.5,c,.5,a);a.fx=g(a);return a})},v=function(a,b,e,d){a=q(e,a,d,b);a.fx=g(a);return a};b=function(a){var b=a.length,c=Array(b+
1);c[0]=a;c[0].fx=g(a);for(var e=0;e<b;++e){var d=a.slice();d[e]=d[e]?1.05*d[e]:.001;d.fx=g(d);c[e+1]=d}return c}(b);for(var e=0;100>e;e++){b.sort(m);var h=b[b.length-1],u=a(b),t=v(u,h,2,-1);if(t.fx<b[0].fx)h=v(u,h,3,-2),b=l(b,h.fx<t.fx?h:t);else if(t.fx>=b[b.length-2].fx){var d=void 0;t.fx>h.fx?(d=v(u,h,.5,.5),b=d.fx<h.fx?l(b,d):k(b)):(d=v(u,h,1.5,-.5),b=d.fx<t.fx?l(b,d):k(b))}else b=l(b,t)}return b[0]}}});p(a,"Mixins/DrawPoint.js",[],function(){var a=function(a){return"function"===typeof a},g=function(b){var g=
this,q=b.animatableAttribs,l=b.onComplete,k=b.css,v=b.renderer,e=this.series&&this.series.chart.hasRendered?void 0:this.series&&this.series.options.animation,h=this.graphic;if(this.shouldDraw())h||(this.graphic=h=v[b.shapeType](b.shapeArgs).add(b.group)),h.css(k).attr(b.attribs).animate(q,b.isNew?!1:e,l);else if(h){var u=function(){g.graphic=h=h&&h.destroy();a(l)&&l()};Object.keys(q).length?h.animate(q,void 0,function(){u()}):u()}};return{draw:g,drawPoint:function(a){(a.attribs=a.attribs||{})["class"]=
this.getClassName();g.call(this,a)},isFn:a}});p(a,"Series/Venn/VennPoint.js",[a["Mixins/DrawPoint.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,g,b){var q=this&&this.__extends||function(){var a=function(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e])};return a(b,e)};return function(b,e){function h(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(h.prototype=
e.prototype,new h)}}(),p=b.extend,l=b.isNumber;g=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.options=void 0;b.series=void 0;return b}q(b,a);b.prototype.isValid=function(){return l(this.value)};b.prototype.shouldDraw=function(){return!!this.shapeArgs};return b}(g.seriesTypes.scatter.prototype.pointClass);p(g.prototype,{draw:a.drawPoint});return g});p(a,"Series/Venn/VennUtils.js",[a["Mixins/GeometryCircles.js"],a["Mixins/Geometry.js"],a["Mixins/NelderMead.js"],a["Core/Utilities.js"]],
function(a,g,b,m){var q=a.getAreaOfCircle,l=a.getCircleCircleIntersection,k=a.getOverlapBetweenCircles,p=a.isPointInsideAllCircles,e=a.isPointInsideCircle,h=a.isPointOutsideAllCircles,u=g.getDistanceBetweenPoints,t=m.extend,d=m.isArray,c=m.isNumber,H=m.isObject,F=m.isString,A;(function(n){function m(a){var b=a.filter(function(a){return 2===a.sets.length}).reduce(function(a,b){b.sets.forEach(function(f,r,c){H(a[f])||(a[f]={overlapping:{},totalOverlap:0});a[f].totalOverlap+=b.value;a[f].overlapping[c[1-
r]]=b.value});return a},{});a.filter(C).forEach(function(a){t(a,b[a.sets[0]])});return a}function v(a,b,f,r,c){var z=a(b),e=a(f);c=c||100;r=r||1e-10;var d=f-b,L=1;if(b>=f)throw Error("a must be smaller than b.");if(0<z*e)throw Error("f(a) and f(b) must have opposite signs.");if(0===z)var x=b;else if(0===e)x=f;else for(;L++<=c&&0!==h&&d>r;){d=(f-b)/2;x=b+d;var h=a(x);0<z*h?b=x:f=x}return x}function B(a,b,f){var c=a+b;return 0>=f?c:q(a<b?a:b)<=f?0:v(function(c){c=k(a,b,c);return f-c},0,c)}function A(a){var b=
0;2===a.length&&(b=a[0],a=a[1],b=k(b.r,a.r,u(b,a)));return b}function C(a){return d(a.sets)&&1===a.sets.length}function y(a){var b={};return H(a)&&c(a.value)&&-1<a.value&&d(a.sets)&&0<a.sets.length&&!a.sets.some(function(a){var f=!1;!b[a]&&F(a)?b[a]=!0:f=!0;return f})}function E(a,b){return b.reduce(function(b,c){var f=0;1<c.sets.length&&(f=c.value,c=A(c.sets.map(function(b){return a[b]})),c=f-c,f=Math.round(c*c*1E11)/1E11);return b+f},0)}function D(a,b){return b.totalOverlap-a.totalOverlap}n.geometry=
g;n.geometryCircles=a;n.nelderMead=b;n.addOverlapToSets=m;n.getDistanceBetweenCirclesByOverlap=B;n.getLabelWidth=function(a,b,f){var c=b.reduce(function(a,b){return Math.min(b.r,a)},Infinity),z=f.filter(function(b){return!e(a,b)});f=function(c,f){return v(function(e){var r={x:a.x+f*e,y:a.y};r=p(r,b)&&h(r,z);return-(c-e)+(r?0:Number.MAX_VALUE)},0,c)};return 2*Math.min(f(c,-1),f(c,1))};n.getMarginFromCircles=function(a,b,c){b=b.reduce(function(b,c){c=c.r-u(a,c);return c<=b?c:b},Number.MAX_VALUE);return b=
c.reduce(function(b,c){c=u(a,c)-c.r;return c<=b?c:b},b)};n.isSet=C;n.layoutGreedyVenn=function(a){var b=[],c={};a.filter(function(a){return 1===a.sets.length}).forEach(function(a){c[a.sets[0]]=a.circle={x:Number.MAX_VALUE,y:Number.MAX_VALUE,r:Math.sqrt(a.value/Math.PI)}});var e=function(a,c){var f=a.circle;f.x=c.x;f.y=c.y;b.push(a)};m(a);var d=a.filter(C).sort(D);e(d.shift(),{x:0,y:0});var h=a.filter(function(a){return 2===a.sets.length});d.forEach(function(a){var f=a.circle,d=f.r,r=a.overlapping,
z=b.reduce(function(a,e,z){var w=e.circle,g=B(d,w.r,r[e.sets[0]]),G=[{x:w.x+g,y:w.y},{x:w.x-g,y:w.y},{x:w.x,y:w.y+g},{x:w.x,y:w.y-g}];b.slice(z+1).forEach(function(a){var b=a.circle;a=B(d,b.r,r[a.sets[0]]);G=G.concat(l({x:w.x,y:w.y,r:g},{x:b.x,y:b.y,r:a}))});G.forEach(function(b){f.x=b.x;f.y=b.y;var e=E(c,h);e<a.loss&&(a.loss=e,a.coordinates=b)});return a},{loss:Number.MAX_VALUE,coordinates:void 0});e(a,z.coordinates)});return c};n.loss=E;n.processVennData=function(a){a=d(a)?a:[];var b=a.reduce(function(a,
b){y(b)&&C(b)&&0<b.value&&-1===a.indexOf(b.sets[0])&&a.push(b.sets[0]);return a},[]).sort(),c=a.reduce(function(a,c){y(c)&&!c.sets.some(function(a){return-1===b.indexOf(a)})&&(a[c.sets.sort().join()]=c);return a},{});b.reduce(function(a,b,c,f){f.slice(c+1).forEach(function(c){a.push(b+","+c)});return a},[]).forEach(function(a){if(!c[a]){var b={sets:a.split(","),value:0};c[a]=b}});return Object.keys(c).map(function(a){return c[a]})};n.sortByTotalOverlap=D})(A||(A={}));return A});p(a,"Series/Venn/VennSeries.js",
[a["Core/Animation/AnimationUtilities.js"],a["Core/Color/Color.js"],a["Mixins/Geometry.js"],a["Mixins/GeometryCircles.js"],a["Mixins/NelderMead.js"],a["Core/Color/Palette.js"],a["Core/Series/SeriesRegistry.js"],a["Series/Venn/VennPoint.js"],a["Series/Venn/VennUtils.js"],a["Core/Utilities.js"]],function(a,g,b,m,p,l,k,v,e,h){var u=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c])};return a(b,c)};return function(b,c){function f(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(f.prototype=c.prototype,new f)}}(),t=a.animObject,d=g.parse,c=b.getCenterOfPoints,q=m.getAreaOfIntersectionBetweenCircles,F=m.getCirclesIntersectionPolygon,A=m.isCircle1CompletelyOverlappingCircle2,n=m.isPointInsideAllCircles,J=m.isPointOutsideAllCircles,K=p.nelderMead,B=k.seriesTypes.scatter;a=h.addEvent;var I=h.extend,C=h.isArray,y=h.isNumber,E=h.isObject,D=h.merge;h=function(a){function b(){var b=
null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.mapOfIdToRelation=void 0;b.options=void 0;b.points=void 0;return b}u(b,a);b.getLabelPosition=function(a,b){var f=a.reduce(function(c,f){var d=f.r/2;return[{x:f.x,y:f.y},{x:f.x+d,y:f.y},{x:f.x-d,y:f.y},{x:f.x,y:f.y+d},{x:f.x,y:f.y-d}].reduce(function(c,f){var d=e.getMarginFromCircles(f,a,b);c.margin<d&&(c.point=f,c.margin=d);return c},c)},{point:void 0,margin:-Number.MAX_VALUE}).point;f=K(function(c){return-e.getMarginFromCircles({x:c[0],y:c[1]},
a,b)},[f.x,f.y]);f={x:f[0],y:f[1]};n(f,a)&&J(f,b)||(f=1<a.length?c(F(a)):{x:a[0].x,y:a[0].y});return f};b.getLabelValues=function(a,c){var f=a.sets,d=c.reduce(function(a,b){var c=-1<f.indexOf(b.sets[0]);a[c?"internal":"external"].push(b.circle);return a},{internal:[],external:[]});d.external=d.external.filter(function(a){return d.internal.some(function(b){return!A(a,b)})});a=b.getLabelPosition(d.internal,d.external);c=e.getLabelWidth(a,d.internal,d.external);return{position:a,width:c}};b.layout=function(a){var c=
{},f={};if(0<a.length){var d=e.layoutGreedyVenn(a),g=a.filter(e.isSet);a.forEach(function(a){var h=a.sets,r=h.join();if(h=e.isSet(a)?d[r]:q(h.map(function(a){return d[a]})))c[r]=h,f[r]=b.getLabelValues(a,g)})}return{mapOfIdToShape:c,mapOfIdToLabelValues:f}};b.getScale=function(a,b,c){var f=c.bottom-c.top,d=c.right-c.left;f=Math.min(0<d?1/d*a:1,0<f?1/f*b:1);return{scale:f,centerX:a/2-(c.right+c.left)/2*f,centerY:b/2-(c.top+c.bottom)/2*f}};b.updateFieldBoundaries=function(a,b){var c=b.x-b.r,f=b.x+b.r,
d=b.y+b.r;b=b.y-b.r;if(!y(a.left)||a.left>c)a.left=c;if(!y(a.right)||a.right<f)a.right=f;if(!y(a.top)||a.top>b)a.top=b;if(!y(a.bottom)||a.bottom<d)a.bottom=d;return a};b.prototype.animate=function(a){if(!a){var b=t(this.options.animation);this.points.forEach(function(a){var c=a.shapeArgs;if(a.graphic&&c){var f={},d={};c.d?f.opacity=.001:(f.r=0,d.r=c.r);a.graphic.attr(f).animate(d,b);c.d&&setTimeout(function(){a&&a.graphic&&a.graphic.animate({opacity:1})},b.duration)}},this)}};b.prototype.drawPoints=
function(){var a=this,b=a.chart,c=a.group,d=b.renderer;(a.points||[]).forEach(function(f){var e={zIndex:C(f.sets)?f.sets.length:0},h=f.shapeArgs;b.styledMode||I(e,a.pointAttribs(f,f.state));f.draw({isNew:!f.graphic,animatableAttribs:h,attribs:e,group:c,renderer:d,shapeType:h&&h.d?"path":"circle"})})};b.prototype.init=function(){B.prototype.init.apply(this,arguments);delete this.opacity};b.prototype.pointAttribs=function(a,b){var c=this.options||{};a=D(c,{color:a&&a.color},a&&a.options||{},b&&c.states[b]||
{});return{fill:d(a.color).brighten(a.brightness).get(),opacity:a.opacity,stroke:a.borderColor,"stroke-width":a.borderWidth,dashstyle:a.borderDashStyle}};b.prototype.translate=function(){var a=this.chart;this.processedXData=this.xData;this.generatePoints();var c=e.processVennData(this.options.data);c=b.layout(c);var d=c.mapOfIdToShape,h=c.mapOfIdToLabelValues;c=Object.keys(d).filter(function(a){return(a=d[a])&&y(a.r)}).reduce(function(a,c){return b.updateFieldBoundaries(a,d[c])},{top:0,bottom:0,left:0,
right:0});a=b.getScale(a.plotWidth,a.plotHeight,c);var g=a.scale,k=a.centerX,l=a.centerY;this.points.forEach(function(a){var b=C(a.sets)?a.sets:[],c=b.join(),f=d[c],e=h[c]||{};c=e.width;e=e.position;var m=a.options&&a.options.dataLabels;if(f){if(f.r)var n={x:k+f.x*g,y:l+f.y*g,r:f.r*g};else f.d&&(f=f.d,f.forEach(function(a){"M"===a[0]?(a[1]=k+a[1]*g,a[2]=l+a[2]*g):"A"===a[0]&&(a[1]*=g,a[2]*=g,a[6]=k+a[6]*g,a[7]=l+a[7]*g)}),n={d:f});e?(e.x=k+e.x*g,e.y=l+e.y*g):e={};y(c)&&(c=Math.round(c*g))}a.shapeArgs=
n;e&&n&&(a.plotX=e.x,a.plotY=e.y);c&&n&&(a.dlOptions=D(!0,{style:{width:c}},E(m,!0)?m:void 0));a.name=a.options.name||b.join("\u2229")})};b.defaultOptions=D(B.defaultOptions,{borderColor:l.neutralColor20,borderDashStyle:"solid",borderWidth:1,brighten:0,clip:!1,colorByPoint:!0,dataLabels:{enabled:!0,verticalAlign:"middle",formatter:function(){return this.point.name}},inactiveOtherPoints:!0,marker:!1,opacity:.75,showInLegend:!1,states:{hover:{opacity:1,borderColor:l.neutralColor80},select:{color:l.neutralColor20,
borderColor:l.neutralColor100,animation:!1},inactive:{opacity:.075}},tooltip:{pointFormat:"{point.name}: {point.value}"}});return b}(B);I(h.prototype,{axisTypes:[],directTouch:!0,isCartesian:!1,pointArrayMap:["value"],pointClass:v,utils:e});k.registerSeriesType("venn",h);"";a(h,"afterSetOptions",function(a){var b=a.options.states;this.is("venn")&&Object.keys(b).forEach(function(a){b[a].halo=!1})});return h});p(a,"masters/modules/venn.src.js",[],function(){})});
//# sourceMappingURL=venn.js.map