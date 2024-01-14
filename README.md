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

## Render Prop
Render prop is a function (fun) returning a component (comp). It is passed in a component (parentComp) as a prop. 
Now,  *parentComp* receives that prop and renders it. 
*Example:*

    const Parent = ({render}) => {  
      return render();
    };

    const Child = ({render}) => {  
      return (
          <RenderPropDataSource
	          render={() => <BookInfo />}
          />
      );
    };
## Controlled vs Uncontrolled Components
| Controlled | Uncontrolled |
|--|--|
| Components where state and behaviour are managed by the parent component | Components where state and behaviour are managed within the component |
*state : states of components
behaviour : like how the sates are changed* 

## `React.Children.toArray()`
to convert the incoming children prop in an array of react elements.