import './App.css';
import FoodCard from './components/FoodCard';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import { getData } from './services/services'

function App() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  if (loading) return <p>chargement</p>
  else
    return (
      <>
        <Form />
        {data.map((food) => <FoodCard key={food._id} food={food} />)}

      </>
    );
}

export default App;
