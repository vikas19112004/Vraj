import { Link } from 'react-router-dom';
import './Home.css';
import WhyBrajSevaCard from '../components/WhyVrajSevaCard';
import DestinationCard1 from '../components/DestinationCard1';
import DestinationCard2 from '../components/DestinationCard2';
import ServiceCard from '../components/ServiceCard';


const Home = () => {

  let icon = [
    "fa-solid fa-motorcycle text-[50px] text-pink-500",
    "fa-solid fa-lock text-[50px] text-yellow-500",
    "fa-solid fa-sack-dollar text-[50px] text-orange-900",
    "fa-solid fa-tree-city text-[50px] text-green-600",
    "fa-solid fa-star text-[50px] text-yellow-400",
    "fa-solid fa-mobile-screen text-[50px] text-gray-700",
  ];

  let title = [
    "Quick Booking",
    "Safe Rides",
    "Affordable Pricing",
    "Explore Vraj",
    "Rated Drivers",
    "Easy Tracking",
  ];

  let content = [
    "Book a ride in just a few clicks and get on your way within minutes.",
    "All our drivers are verified and our vehicles regularly maintained for your safety.",
    "Transparent pricing with no hidden charges. Pay only for the distance you travel.",
    "Visit all the important temples and sites in Mathura Vrindavan and surrounding areas.",
    "Our drivers are locals who knoethe area well and provide excellent service.",
    "Track your ride in real-time and share your trip details with friends and family.",
  ];

  let cardTitle = [
    "Vrindavan – Land of Krishna’s Leelas",
    "Mathura – The Birthplace of Lord Krishna",
    "Goverdhan – The Hill of Devotion",
    "Barsana – The Village of Radha Rani",
    "Nandgaon – Home of Nanda Baba",
  ];

  let cardContent = [
    "Vrindavan is known for Lord Krishna’s childhood stories and is filled with devotion. The town has many beautiful temples and sacred places.Key Attractions: Banke Bihari Temple, Prem Mandir, Nidhivan, ISKCON Temple.Things to Do: Celebrate the colorful flower Holi at Banke Bihari Temple and enjoy the soulful kirtans that fill the town with devotion.",
    "Mathura, the birthplace of Lord Krishna, is a major spiritual hub in Braj. The city is home to many sacred temples and sites that attract devotees from around the world.Key Attractions: Krishna Janmabhoomi Temple, Vishram Ghat, Dwarkadheesh Temple.Things to Do: Attend the evening aarti at Vishram Ghat and explore local markets for spiritual souvenirs and Mathura’s famous peda.",
    "According to Hindu mythology, Lord Krishna lifted Govardhan Hill to protect the villagers from heavy rains. Today, it is a sacred pilgrimage site.Key Attractions: Govardhan Hill, Kusum Sarovar, Radha Kund.Things to Do: Walk the Parikrama (circumambulation) around Govardhan Hill and enjoy local treats like kachori sabzi.",
    "Barsana, the birthplace of Radha Rani, is famous for its beautiful temples and the colorful Lathmar Holi festival.Key Attractions: Radha Rani Temple, Sankari Khor.Things to Do: Experience the unique Lathmar Holi and explore the charming village that celebrates Radha’s love for Krishna.",
    "Nandgaon, the home of Lord Krishna’s foster father Nanda Baba, is a peaceful and spiritual place in Braj.Key Attractions: Nanda Bhavan Temple, Pan Sarovar.Things to Do: Visit during Holi to experience the vibrant celebrations filled with devotion and joy.",
  ];

  let cardImg = [
    "src/assets/Card-img-Vrindawan.png",
    "src/assets/Card-img-Mathura.png",
    "src/assets/Card-img-Goverdhan.png",
    "src/assets/Card-img-Barsana.png",
    "src/assets/Card-img-NandGao.png",
  ];

  let serviCardImg = [
    "src/assets/Service-card-image1.png",
    "src/assets/Service-card-image1.png",
    "src/assets/Service-card-image1.png",
  ];

  let serviCardTitle = [
    "Parikrma Special Rentals",
    "Hourly Rentals",
    "Long Distance Rentals",
  ];

  return (
    <div className="home">
      <div className='home-video'>
        <div className='video'>
          <video autoPlay loop muted playsInline style={{ width: "100%", }}>
            <source src="src/assets/Home-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='home-video-content'>
          <p className='home-greeting'>Welcome To Vraj</p>
          <div className="book-now">
            <p>Here's the image of a girl booking a cab for a ride. Let me know if this captures what you had in mind!</p>
            <Link to="/login">Book Now</Link>
          </div>
        </div>
      </div>

      <div className='home-content'>
        <div className="explore-vraj">
          <div className="explore-vraj-bg-img">
            <img src="src/assets/Home-page-bg.jpg" alt="image" />
            <img src="src/assets/Home-page-bg2.png" alt="image" />
          </div>
          <div className="bike-image">
            <h2>Explore Braj On Two Wheels</h2>
            <img src="src/assets/Home-bike-image.png" alt="" />
          </div>
        </div>

        <hr id='home-hr1' />
        <div className='services'>
          <h2 className='text-[6rem] font-[800] text-gray-500 tracking-[3px] text-center max-[450px]:text-[3rem]'>VRAJ DIARIES</h2>
          <div className='srvices-cards Cards flex flex-wrap items-center justify-between items-center w-[90%] mt-[3rem] max-[450px]:justify-center'>
            <ServiceCard serviCardImg={serviCardImg[0]} serviCardTitle={serviCardTitle[0]} />
            <ServiceCard serviCardImg={serviCardImg[1]} serviCardTitle={serviCardTitle[1]} />
            <ServiceCard serviCardImg={serviCardImg[2]} serviCardTitle={serviCardTitle[2]} />
          </div>
        </div>
        <hr id='home-hr2' />

        <div className='DestinationCards vraj-seva-cards flex flex-col items-center w-[85%] justify-between max-[450px]:w-[100%]'>
          <h2 className='text-[3rem] font-[700] mt-[7rem] text-center max-[450px]:text-[2.2rem] max-[450px]:leading-[2.5rem]'>Popular Destinations</h2>
          <p className='text-[1.5rem] font-[500] text-pink-800 mb-[2rem] mt-[0.7rem] text-center max-[450px]:text-[1.3rem]'>Book and Ride</p>
          <div className='Cards flex flex-col gap-[2rem] items-center w-[100%]'>
            <DestinationCard1 cardTitle={cardTitle[0]} cardContent={cardContent[0]} cardImg={cardImg[0]} />
            <DestinationCard2 cardImg={cardImg[1]} cardTitle={cardTitle[1]} cardContent={cardContent[1]} />
            <DestinationCard1 cardTitle={cardTitle[2]} cardContent={cardContent[2]} cardImg={cardImg[2]} />
            <DestinationCard2 cardImg={cardImg[3]} cardTitle={cardTitle[3]} cardContent={cardContent[3]} />
            <DestinationCard1 cardTitle={cardTitle[4]} cardContent={cardContent[4]} cardImg={cardImg[4]} />
          </div>
        </div>

        <div className="vraj-seva-cards flex flex-col items-center justify-between">
          <h2 className='text-[2.5rem] font-[700] mt-[7rem] text-center max-[450px]:text-[2.2rem] max-[450px]:leading-[2.5rem]'>Why Choose Vras Seva?</h2>
          <p className='text-[1.5rem] font-[500] text-pink-800 mb-[2rem] mt-[0.7rem] text-center max-[450px]:text-[1.3rem] max-[450px]:leading-[1.4rem]'>Explore the beauty of Vraj</p>
          <div className="vraj-seva-cards flex flex-wrap justify-evenly w-[90%]">
            <WhyBrajSevaCard icon={icon[0]} title={title[0]} content={content[0]} />
            <WhyBrajSevaCard icon={icon[1]} title={title[1]} content={content[1]} />
            <WhyBrajSevaCard icon={icon[2]} title={title[2]} content={content[2]} />
            <WhyBrajSevaCard icon={icon[3]} title={title[3]} content={content[3]} />
            <WhyBrajSevaCard icon={icon[4]} title={title[4]} content={content[4]} />
            <WhyBrajSevaCard icon={icon[5]} title={title[5]} content={content[5]} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
