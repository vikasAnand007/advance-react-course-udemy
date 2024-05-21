const IncapsulatingStyles = () => {
  return (
    <div style={{width: "40vw"}}>
      Incapsulating Styles means keeping the style of a component within the
      border of that component.
      <br />
      It should't force it's parent component to do any changes in it's style.
      <h3>Principals fo encapsulating styles....</h3>
      <li>
        <b>Component should not lay themselves out: </b> Component should not
        set CSS properties like it's position, size and margin. These should be
        decided by the parent component.
      </li>
      <li>
        Components should only style themselves and only layout their immediate
        children
      </li>
    </div>
  );
};

export default IncapsulatingStyles;
