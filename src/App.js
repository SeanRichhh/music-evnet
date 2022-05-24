import './App.css';
import React , {useEffect , useState} from "react"
import SelectCategory from './components/selectcategory';
import Excuselist from './components/excuseList';


function App() {
  const [category, setCategory] = useState("");

  const[excuse, setExcuse] = useState(null)

  console.log({excuse})
  useEffect(() => {
    if(!category)return

    fetch(`https://excuser.herokuapp.com/v1/excuse/${category}`)
    .then((res) => res.json())
    .then((data) => setExcuse(data))
  }, [category])

  return (
    <div className="App">
      <header className="">
        <SelectCategory setCategory={setCategory}/>
        {excuse && <Excuselist category={category} excuse={excuse}/>}
      </header>
    </div>
  );
}

export default App;
