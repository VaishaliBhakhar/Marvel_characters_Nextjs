import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Search from './search';

// export default function Home() {
//   return (
  
//     )
// }

const Home = () => {
  return (
          <div>
              <h1>Welcome to Next Application</h1>
              <h3>Marvel Character List</h3>
              {/* {musicData.map((item, i) => {
                 return (
                 <li key={i}>{item.name}</li>
                 )
             })} */}
             <Search></Search>
          </div>
  );
}
// Home.getInitialProps = async function() {
//   const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=46ec84284eb2b8dca705be4cd46b098f&hash=4ab869e1f2562bf1c1b9ec1326e275cf`);
//   const result = await response.json();
//   return { musicData: result.data.results }
// }
export default Home;