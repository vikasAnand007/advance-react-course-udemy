import { Suspense, lazy, useState } from "react";
const Page1 = lazy(() => import("./page1"));
const Page2 = lazy(() => import("./page2"));

const CodeSandLL = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <button disabled={page === 1} onClick={() => setPage(1)}>
        page 1
      </button>
      <button disabled={page === 2} onClick={() => setPage(2)}>
        page 2
      </button>
      <Suspense fallback={<p>Loading.. ..</p>}>
        {page === 1 && <Page1 />}
        {page === 2 && <Page2 />}
      </Suspense>
    </div>
  );
};

export default CodeSandLL;
