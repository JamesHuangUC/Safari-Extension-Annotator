(function() {
    $('body')
        .annotator()
        .annotator('addPlugin', 'Offline', {
            online: function(plugin) {
                // Do something when the browser is online.
                // alert("onlining");
            },
            offline: function(plugin) {
                // Do something when the browser goes offline.
                // alert("offlining");
            }
        });
}.call(this));
