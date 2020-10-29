import { useCallback, useState, useEffect } from "react";

const Search = () => {
    const [search,setSearch] = useState('');
    const [marvelData,setMarvelData] = useState([]);
    const [active,setActive] = useState(false);
    const [isLoading,setIsLoading] = useState(true);

    const searchApi = (query) => `/api/hello?q=${query}`;
    const fetchMarvelData = useCallback(() => {
        fetch(searchApi(search)).then(res => res.json()).then(res => {
            console.log('inside fetch');
            setMarvelData(res);
            setIsLoading(false);
        });

    },[marvelData])
   
    

    useEffect(() => {
        if(isLoading) {
            console.log('*************')
            fetchMarvelData();
        }
    }, 
    [marvelData]);

    const onChange = useCallback((event) => {
        const search = event.target.value;

        setSearch(search);
        if(search.length) {
            fetchMarvelData();
        } else {
            setMarvelData([]);
        }
    })
    // console.log(data);
    // console.log(searchEndPoint("Ajak"));
    return(<div>
        <input onChange={onChange} placeholder="Search for marvel character" type="text" value={search} />
        {/* {  active && marvelData.length > 0 && (
            <ul>
            {
            marvelData.map((item, i) => (
                item.name
                //  <li key={i}>{item.name}</li>
                 )
            )
            }
             </ul>)
        
        } */}
        {marvelData.length}
        
        {console.log(marvelData)}
        {marvelData.length > 0 && (
            marvelData.map((item, i) => (
            <div>{item}</div>

            ))
        )}
    </div>)
}

// Search.getInitialProps = () => {
//     console.log('*************')
//     fetchMarvelData();
//     return true;
// }

export default Search;  