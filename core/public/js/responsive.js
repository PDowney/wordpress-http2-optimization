var Ib=t.matchMedia||t.msMatchMedia,Y={};function P(a){if(!Ib||!a)return!0;a in Y||(Y[a]=Ib(a));return Y[a]}function Fa(a,c,b){function d(g){g.matches?(b||Y[a].removeListener(d),e||(e=!0,c())):g.matches||(b&&!0===e&&b(),e=!1)}var e=!Ib||!a||P(a).matches;e&&c();b&&Y&&a in Y&&Y[a].addListener(d)}B.media=Fa;
