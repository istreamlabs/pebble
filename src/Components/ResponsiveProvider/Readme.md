This is a [React Context](https://reactjs.org/docs/context.html) Provider component that creates a single window resize handler that exposes a context with window dimensions. This context is then used by pebbles responsive behaviors, for example the `useMobileLayout` hook.

<div className="styleguide__callout">
#### Will be required in 3.x.x of pebble

In order to support backwards compatibility version 2.x.x of pebble will fall back to using multiple resize handlers for it's responsive behavior. This has significant performance implications and it is recommended that you add `responsiveProvider` as a parent component in your application.

</div>

The ideal location for the `ResponsiveProvider` is as "high" as possible in the component tree this ensures that every component has access to the context it creates.

## Examples

Basic `Create-React-App` application using pebble

```shell
<BrowserRouter>
  <ResponsiveProvider>
    <Frame navigation={nav} title="My Pebble Application">
      <ErrorBoundary>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </Frame>
  </ResponsiveProvider>
</BrowserRouter>
```
