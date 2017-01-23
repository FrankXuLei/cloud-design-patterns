<link href="/azure/design-patterns/_css/pnp.css" type="text/css" rel="stylesheet" />
<nav class="categories"></nav>
<script type="text/javascript">
(function () {
var title = $('meta[name="pnp.series.title"]');
if (title.length) {
    $('h1').prepend( $('<span class="series">' + title.attr('content') +  '</span>') );
}
var nav = $('nav.categories');
var categories = $('meta[name="pnp.pattern.categories"]');
categories.each(function(index){
    var el = $(this);
    var slug = el.attr('content');
    var img = '<img src="/azure/design-patterns/_images/category/' + slug + '.svg" alt="' + slug +'" />';
    nav.append( $('<a href="category/' + slug +'">' + img + '</a>') );
});
})();
</script>