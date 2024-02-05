const EventCapturing = () => {
    return (
      <div
        style={{
          padding: "10px",
          border: "1px solid red",
        }}
        onClickCapture={() => console.log("outer clicked")}
      >
        outer div{" "}
        <div
          style={{
            padding: "10px",
            border: "1px solid green",
          }}
          onClickCapture={() => console.log("middle clicked")}
        >
          Middle Div
          <div
            style={{
              padding: "10px",
              border: "1px solid blue",
            }}
            onClickCapture={() => console.log("inner clicked")}
          >
            Inner Div
          </div>
        </div>
      </div>
    );
  };
  
  export default EventCapturing;
  