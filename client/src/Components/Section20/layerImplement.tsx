import { Layer } from "./styled";

const LayerImplement = () => {
  return (
    <Layer gap="xxl">
      <Layer gap="xl">
        <h3>Subscribe to newsletter</h3>
        <p>
          Subscribe to the newsletter to receive updates about new products.
        </p>
      </Layer>

      <form>
        <Layer>
          <Layer gap="s">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </Layer>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
          <button type="button">Subscribe</button>
        </Layer>
      </form>
    </Layer>
  );
};

export default LayerImplement;
