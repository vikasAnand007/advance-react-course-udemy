## Layout Components

 - They focus on organising other components within a web page.
 - The Layout component should be made and styled in such a manner, so that the core component (component with actual logic) be independent of the location within layout component.

### `React.cloneElement(children, {...additionalProps})`
Can be used to modify the incoming children prop. 
*Example: adding additional props in the children component*
### `React.isValidElement(children)`
To validate if a valid react element/component
### `React.Children.map(children, (child) => {}`
Can be used to iterate on the "children" prop