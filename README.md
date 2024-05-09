# Advanced React: Design System, Design Patterns, Performance
### Course link: [https://www.udemy.com/course/advanced-react/](https://www.udemy.com/course/advanced-react/)


### Demo (POC url): [https://advanced-react-iota.vercel.app/](https://advanced-react-iota.vercel.app/)

### FAQs.

 - **How to locate code for a particular lession ?** 
 Follow this folder structure - `client/src/utils/sections.ts`
  From this file you can locate code for a particular lession.

### Topics not covered !

 - Lession 54 (Section 9 : Async react router)

<!-- ### Disclaimer !

 - There might be many spelling and grammer mistakes in this README file.
 - I have written notes for only those topics which I found new or worth to be noted.
 - The notes written here are made as per my personal understanding. **Don't trust them blindly**. -->

 
 

# Notes ------------------------------>>

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

> Note ::

*state : states of components
behaviour : like how the sates are changed* 

## `React.Children.toArray()`
to convert the incoming children prop in an array of react elements.

## HOC (Higher Order Components)

 - HOC are functions which receives a component as an argument and returns a component. 
 - It is generally used to create a wrapper with added features around a component.

## Compound Component
Compound components are a pattern in React, where several components using shared state are used together. that allows them to communicate with each other in the background.

## Observer Pattern/Subscriber Pattern
The Observer Pattern **establishes a “one-to-many” relationship between objects where any change in the subject automatically notifies multiple objects (observers)**. This allows for efficient and flexible communication between objects without the need for direct coupling between those components.

With help of this we can establish communication between two parallel child without taking parent as a medium.

## Portals
It is a feature in React that allows you to render components outside the current React tree hierarchy

    createPortal(<ComponentToRender/>, DOMNode)

## forwardRef
ref is a special attribute that is given to an element. But when we try to send ref as a prop in some custom component, then React throws error. 
There might be some use case where we need to pass the "ref" as a prop. To achieve this we use "forwardRef".
**forwardRef** wraps around the Child component and add a second argument (ref) in the Child component.
This argument holds the ref object and can be attached to any element in the Child component.

## error boundary
error boundary can be  created using class component to **catch errors during painting the components on actual DOM**.

*Note: These error boundaries do not catch errors which are held asynchronously ( occurs after the DOM is painted ). Example - errors in setTimeout, http request etc.*

 ## key Prop
 **key** prop is a unique identifier, user by React to differentiate between two or more similar components of elements.
 Whenever the value of key prop changes the component or element associated with that key is completely re-renders.

## Event bubbling/capturing
**bubbling**: Propagation of event from child to parent.
**capturing**: Propagation of event from parent to child.

*Note: Bubbling is the default way of event propagation.*

In React we can listen to capture based events to set the event propagation in capturing way.

Example: `onClick` -> `onClickCapture`

## useEffect v/s useLayoutEffect

> This is not understood properly ! Please study more about it

|useEffect| useLayoutEffect |
|--|--|
| Content is rendered/re-rendered first and side effect runs after that | side effect runs first and content is rendered/re-rendered after that  |

## useId hook

 - **useId** hook generates an Id which will be unique among the entire React App. 
 - It is generated when the component mounts and get destroyed when component unmounts. 
 - This Id remains stable when component re-renders ( do not get changed).

**Use case**
Suppose there is a component containing an input field with an Id. If this component is used at multiple places, then the input element with same id will be rendered at multiple places in DOM.
Here we can use **useId** hook to provide a unique id for that input field.

## useCallback as ref
If we pass a a function memoised with `useCallback()` hook as a **ref**. Then the element or component it is referencing is received as the first argument in that function.

*See the usecase in code*

## useImperativeHandle
The `useImperativeHandle` hook in React allows a child component to expose certain functions or properties to its parent component, giving the parent component more control over the child component.

> It can be used to pass data from child component to parent component.

*See the usecase in code*
*also see why using **useImperativeHandle** is not recommended.*

## useDeferredValue
**useDeferredValue** hook is used to create a deferred version of a value or state. The value returned by **useDeferredValue** is updated only after the re-render due to change in original value is completed.
This acts like a **debouce** , The value returned by **useDeferredValue** is a copy of the original value, but it is only regenerated when the original value is finalised and the re-renders due to it is completed.

*See the usecase in code*

## useTransition
**useTransition**  is almost similar to **useDeferredValue**  the difference is, That **useDeferredValue** is used to delay a updation of value until the re-renders completes and **useTransition** is used to delay a process until re-render completes.

useTransition hook also gives a pending indicator, whose value is true until the process completes.

*See the usecase in code*