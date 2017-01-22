<link href="/azure/guidance/_css/pnp.css" type="text/css" rel="stylesheet" />
<nav class="series">
</nav>
<script type="text/javascript">
(function () {
var nav = $('nav.series');
var prev = $('meta[name="pnp.series.prev"]');
var next = $('meta[name="pnp.series.next"]');
var title = $('meta[name="pnp.series.title"]');
if (prev.length) {
    nav.append( $('<a class="prev" href="' + prev.attr('content') +'">« Previous</a>') );
}
if (next.length) {
    nav.append( $('<a class="next" href="' + next.attr('content') +'">Next »</a>') );
}
if (title.length) {
    $('h1').prepend( $('<span class="series">' + title.attr('content') +  '</span>') );
}
})();
</script>