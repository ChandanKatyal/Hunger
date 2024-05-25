import React from 'react';
import './aboutuspage.css';
import image from './123.jpg';
import {useNavigate} from 'react-router-dom';
function Aboutuspage() {
    let navigate = useNavigate();
    return (
        <>

            <div className='upperpart'>
                {/* <h1>HUNGERY ??</h1> */}
                <img src={image} />

            </div>
            <div className='two'>
                <div className='middlepart'>
                    <h1>About us</h1>
                    <hr />

                </div>
                <div className='mid'>
                    <div className='leftside'>
                        <div className='box'></div>
                        <img src='https://media.istockphoto.com/photos/interior-of-a-modern-cozy-french-restaurant-picture-id1314951233?b=1&k=20&m=1314951233&s=170667a&w=0&h=XgyJ96HAeBPpC4c6PnvlN8pnIJw7PAkNhwySVvX2JQk=' />

                    </div>
                    <div className='rightside'>
                        <h1>Who are we?</h1>
                        <p>
                            Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs.
                            Customers use our platform to book a table and make payments while dining-out at restaurants.On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable
                            and efficient last mile delivery service.
                        </p>

                    </div>
                </div>
            </div>
            <div className='line2'>
                <hr />
            </div>
            <div className='threeo'>

                <h1>GALLERY</h1>
                <div className='galldiv'>
                    {/* <div className='div1'> */}
                    {/* div right */}
                    <img className='img2' src='https://storage.googleapis.com/impact-news-photo/news-photo/1546239100_Lja80t_FEATURE.jpg'/>

                    {/* </div> */}
                    {/* <div className='div2'> */}
                    {/* div left */}
                    <img className='img1' src='https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM='/>

                    {/* </div> */}
                    {/* <div className='div3'> */}
                    {/* div mid */}
                    <img className='img3' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg'/>
                    <img className='img4' src='https://media.istockphoto.com/photos/happy-waiter-serving-food-to-group-of-friends-in-a-pub-picture-id1307190527?b=1&k=20&m=1307190527&s=170667a&w=0&h=_GZiHqd9mIhvg_tMT-VwIGlPDeZUY6zUorx5XvQM358='/>
                    <img className='img5' src='https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg'/>
                    <img className='img6' src='https://assets.vogue.com/photos/605b998c1087bb7115b724b5/16:9/w_1600,h_900,c_limit/Sona_Interiors_048.jpg'/>

                    {/* </div> */}
                </div>

            </div>
            <div style={{textAlign: "Center", backgroundColor: "#b4b4b4"}}>
                <button type="submit" style={{backgroundColor: "grey", color:"black", width:"250px", height:"100px", fontSize:"30px"}} onClick={()=>{navigate("/")}}>Go back to home</button>
                </div>
            <div className='line'>
                <hr />
            </div>

        </>
    )
}

export default Aboutuspage