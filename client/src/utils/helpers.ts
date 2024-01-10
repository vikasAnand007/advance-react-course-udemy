export const getData = async (setApiData: any) => {
  let res: any = await fetch("https://api.attackontitanapi.com/characters");
  res = await res.json();
  console.log(res);
  setApiData(res?.results || []);
};
