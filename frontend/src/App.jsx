import {useState} from 'react';

function App()
{

    function searchitem(item)
    {
        return(<div>Biryani</div>);
    }
    const [item,setitem]=useState("");
    return(
        <div>
            <h3>job application</h3>
            <input 
              type="text"
              placeholder="name"
              value={item}
              onChange={(e)=>setitem(e.target.value)}
            ></input>
            <button onClick={searchitem}>add</button>
        </div>
    )
}
export default App;