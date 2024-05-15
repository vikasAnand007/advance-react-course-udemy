const Page2 = () => {
  const d1 = Date.now();
  while (Date.now() - d1 < 1000) {
    // wait
  }
  return <div>This is Page 2</div>;
};

export default Page2;
