// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fetchMarvelCharacters = async() => {
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=46ec84284eb2b8dca705be4cd46b098f&hash=4ab869e1f2562bf1c1b9ec1326e275cf`);
  const result = await response.json();
  const resultData = result.data.results;
  return resultData;
}

export default async (req, res) => {
  console.log(req.query.q);
  const getMarvelCharacters = await fetchMarvelCharacters();
  const newResult = req.query.q ? getMarvelCharacters.filter((res) => (res.name.toLowerCase()).includes(req.query.q.toLowerCase())) : getMarvelCharacters;
  // console.log(newResult);
  res.statusCode = 200
  res.json({ marvelData:  newResult})
}