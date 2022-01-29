// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import CollectionCard from './Components/CollectionCard';
import {useState ,useEffect} from 'react';
import axios from 'axios';
import Boomerlist from './Components/Boomerlist';
import Main from './Components/Main';

function App() {
  const [BoomerListData , setBoomerListData] = useState([])
  const [selectedBoomer, setSelectedBoomer] = useState(0)
  useEffect(() => {
    const getMyNfts =async() => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x4dD9928aeA5E9a2CCdcb04415A38c77d606899A8&order_direction=asc')
      console.log(openseaData.data.assets)
      setBoomerListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[])

  return (<div className='app'> 
  <Header />
  {
    BoomerListData.length >0 && (
      <>
      <Main BoomerListData={BoomerListData} selectedBoomer={selectedBoomer}/>
      {/* <CollectionCard
        id={0}
        name={'Cigar Boomer'}
        traits={[{value : 4}]}
        image='https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg'
      /> */}
      <Boomerlist BoomerListData={BoomerListData} setSelectedBoomer={setSelectedBoomer}/>
      </>
    )
  }
  
   </div> ) 

}

export default App;
