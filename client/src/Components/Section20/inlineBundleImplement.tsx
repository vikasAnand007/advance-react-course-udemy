import Menu from "./menu";
import { InlineBundle, Split } from "./styled";

const InlineBundleImplement = () => {
  return (
    <div style={{ width: "96vw" }}>
      <Split>
        <div>Section 1</div>
        <InlineBundle gap="m" justify="flex-end" align="center">
          {[1, 2, 3, 4].map((e) => (
            <Menu key={e} title="Bundle 1" />
          ))}
          {[1, 2].map((e) => (
            <Menu key={e} title="Bundle 2" />
          ))}
          {[1, 2].map((e) => (
            <Menu key={e} title="Bundle 3" />
          ))}
        </InlineBundle>
      </Split>
    </div>
  );
};

export default InlineBundleImplement;
