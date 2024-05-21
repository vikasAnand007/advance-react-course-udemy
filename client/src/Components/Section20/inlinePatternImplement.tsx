import Menu from "./menu";
import { Inline, InlineBundle } from "./styled";

const InlinePatternImplement = () => {
  return (
    <div style={{ width: "96vw" }}>
      <Inline>
        <InlineBundle style={{ background: "green" }}>logo</InlineBundle>
        <InlineBundle>
          {[1, 2, 3, 4].map((e) => (
            <Menu key={e} title="Menu" />
          ))}
        </InlineBundle>
        <InlineBundle>
          <a href="#">Login</a>
          <button>Register</button>
        </InlineBundle>
      </Inline>
    </div>
  );
};

export default InlinePatternImplement;
