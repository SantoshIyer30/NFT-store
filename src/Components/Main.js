import React, {useState ,useEffect} from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import './Main.css'

const Main = ({selectedBoomer , BoomerListData}) => {
    const [activeBoomer,setActiveBoomer] = useState(BoomerListData[0])

    useEffect(() => {
        setActiveBoomer (BoomerListData[selectedBoomer])
    } , [BoomerListData, selectedBoomer])
    
  return (<div className = 'main'>
      <div className ='mainContent'>
          <div className = 'boomerHighlight'>
              <div className = 'boomerContainer'>
                {/* <img src='https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg' alt='' /> */}
                  <img src={activeBoomer.image_url} alt=''/>
              </div>
          </div>
          <div className='boomerDetails' style={{color: 'white'}}>
              <div className='title'>
                  {activeBoomer.name} 
              </div>
              <span className='itemNumber'>#{activeBoomer.token_id}</span>
          </div>
          <div className='owner'>
              <div className='ownerImageContainer'>
                  <img src={activeBoomer.owner.profile_img_url} alt=''/>
                  {/* <img src='https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg' alt='' /> */}
              </div>
              <div className='ownerDetails'>
                  <div className='ownerNameAndHandle'>
                      <div>{activeBoomer.owner.address}</div>
                      <div className='ownerHandle'>@ksantoshiyer</div>
                  </div>
                  <div className='ownerLink'>
                      <img src={instagramLogo} alt=''/>
                  </div>
                  <div className='ownerLink'>
                      <img src={twitterLogo} alt=''/>
                  </div>
                  <div className='ownerLink'>
                      <img src={moreIcon} alt=''/>
                  </div>
              </div>
          </div>
      </div>
  </div>)
};

export default Main;
