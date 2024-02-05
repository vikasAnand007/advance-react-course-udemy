const EventBubbling = () => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid red",
      }}
      onClick={() => console.log("outer clicked")}
    >
      outer div{" "}
      <div
        style={{
          padding: "10px",
          border: "1px solid green",
        }}
        onClick={() => console.log("middle clicked")}
      >
        Middle Div
        <div
          style={{
            padding: "10px",
            border: "1px solid blue",
          }}
          onClick={() => console.log("inner clicked")}
        >
          Inner Div
        </div>
      </div>
    </div>
  );
};

export default EventBubbling;
