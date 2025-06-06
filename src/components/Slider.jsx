import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item  className='h-40'>
        <img src="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg" alt="img1" style={{width:'100%', height:'50vh', objectFit:'cover'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://t3.ftcdn.net/jpg/09/43/66/98/360_F_943669841_112O01LGlIbcoiPdycG0raJBbvnX1GPm.jpg" alt="img2" style={{width:'100%', height:'50vh', objectFit:'cover'}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://b.zmtcdn.com/data/pictures/chains/7/19733407/bf81a96121ab40266135aa5c3066d484.jpg" alt="img3" style={{width:'100%', height:'50vh', objectFit:'cover'}}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;