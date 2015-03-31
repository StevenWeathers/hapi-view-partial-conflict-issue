# hapi-view-partial-conflict-issue
hapi-view-partial-conflict-issue

```
When server.views() is called within a plugin, the views manager is only available to plugins methods.
```

Expected:
```
Plugin A loads views/partials from its folder (pluginA/views/partials/something.html)
Plugin B loads views/partials from its folder (pluginB/views/partials/something.html)
```

Actual:
```
Plugin A loads views/partials from B's folder (pluginB/views/partials/something.html)
Plugin B loads views/partials from its folder (pluginB/views/partials/something.html)
```

See repo for example: 
