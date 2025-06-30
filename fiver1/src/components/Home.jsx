import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Banner images array (replace with your own images)
const bannerImages = [
  "https://img.freepik.com/free-vector/children-sitting-desk-classroom_1308-32401.jpg",
  "https://img.freepik.com/free-vector/kids-classroom-illustration_1308-32402.jpg",
  "https://img.freepik.com/free-vector/children-school-classroom_1308-32403.jpg"
];

// Client logos for Our Clients section
const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/2560px-Facebook.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png',
];

// Reviews array for testimonial section
const reviews = [
  {
    name: 'Shyam',
    text: "Maskeen Playschool toys is the go to resource for the latest playschool toys/equipment's. They are truly brilliant in their services and stand true to the assured quality.",
  },
  {
    name: 'Geeta',
    text: "Maskeen Playschool toys have been very cooperative in providing us with our customized toys. They are thorough professionals in their dealings and their post delivery services too are worth mentioning.",
  },
  {
    name: 'Amit',
    text: "Excellent quality and timely delivery. Highly recommended for anyone looking for reliable school furniture and toys.",
  },
  {
    name: 'Priya',
    text: "Great customer support and a wide range of products. Our school kids love the new play equipment!",
  },
];

// Custom Arrow Components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 right-8 top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-[#23276b] rounded-full flex items-center justify-center shadow-lg">
        <FaArrowRight className="text-white text-2xl" />
      </div>
    </div>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 left-8 top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-[#23276b] rounded-full flex items-center justify-center shadow-lg">
        <FaArrowLeft className="text-white text-2xl" />
      </div>
    </div>
  );
}

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const projectImages = [
    { img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt: 'Project 1' },
    { img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', alt: 'Project 2' },
    { img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', alt: 'Project 3' },
    { img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80', alt: 'Project 4' },
    { img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80', alt: 'Project 5' },
    { img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', alt: 'Project 6' },
    { img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', alt: 'Project 7' },
    { img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', alt: 'Project 8' },
    { img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', alt: 'Project 9' },
    { img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', alt: 'Project 10' },
  ];

  return (
    <div>
      {/* Hero Banner Slider */}
      <div className="relative w-full">
        <Slider {...settings}>
          {bannerImages.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={`Banner ${idx + 1}`}
                className="w-full h-[420px] md:h-[520px] object-cover"
                draggable={false}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Why We're the Right Choice Section */}
      <section className="w-full bg-[#d2f1fb] py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#23276b] mb-10 animate-fadeInUp">Why We're the Right Choice?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* 1 */}
          <div className="flex items-center gap-4 animate-fadeInUp delay-400">
            <span className="mb-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e6003a"/>
                    <stop offset="100%" stopColor="#23276b"/>
                  </linearGradient>
                </defs>
                <g>
                  <path d="M14 36V20a2 2 0 012-2h24a2 2 0 012 2v16" stroke="url(#grad1)" strokeWidth="3" fill="none"/>
                  <rect x="18" y="26" width="20" height="12" rx="2" fill="url(#grad1)"/>
                  <rect x="24" y="32" width="8" height="6" rx="1" fill="#fff"/>
                </g>
              </svg>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-[#1976d2] mb-1">Years Of Experience</h3>
            <p className="text-gray-700 text-base">With 75+ years of experience in this industry, we have...</p>
            </div>
          </div>
          {/* 2 */}
         <div className="flex items-center gap-4 animate-fadeInUp delay-400">
            <span className="mb-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e6003a"/>
                    <stop offset="100%" stopColor="#23276b"/>
                  </linearGradient>
                </defs>
                <g>
                  <circle cx="28" cy="28" r="20" stroke="url(#grad2)" strokeWidth="3" fill="none"/>
                  <path d="M28 36V28M28 28l6-6M28 28l-6-6" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round"/>
                </g>
              </svg>
            </span>
           <div>
             <h3 className="text-xl font-semibold text-[#1976d2] mb-1">Customize Collection</h3>
            <p className="text-gray-700 text-base">We aim to nurture the needs of our clients for the same...</p>
           </div>
          </div>
          {/* 3 */}
          <div className="flex items-center gap-4 animate-fadeInUp delay-400">
            <span className="mb-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e6003a"/>
                    <stop offset="100%" stopColor="#23276b"/>
                  </linearGradient>
                </defs>
                <g>
                  <rect x="10" y="24" width="36" height="12" rx="6" fill="url(#grad3)"/>
                  <rect x="36" y="18" width="10" height="8" rx="4" fill="url(#grad3)"/>
                </g>
              </svg>
            </span>
          <div>
              <h3 className="text-xl font-semibold text-[#1976d2] mb-1">Worldwide Shipment</h3>
            <p className="text-gray-700 text-base">With worldwide reach, we are devoted to delivering undamaged</p>
          </div>
          </div>
          {/* 4 */}
          <div className="flex items-center gap-4 animate-fadeInUp delay-400">
            <span className="mb-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e6003a"/>
                    <stop offset="100%" stopColor="#23276b"/>
                  </linearGradient>
                </defs>
                <g>
                  <circle cx="28" cy="28" r="20" fill="url(#grad4)"/>
                  <path d="M18 32c2 2 6 2 8 0s6-2 8 0" stroke="#fff" strokeWidth="2" fill="none"/>
                  <circle cx="22" cy="24" r="2" fill="#fff"/>
                  <circle cx="34" cy="24" r="2" fill="#fff"/>
                </g>
              </svg>
            </span>
            <div>
                <h3 className="text-xl font-semibold text-[#1976d2] mb-1">Client Satisfaction</h3>
            <p className="text-gray-700 text-base">Since our establishment, we are committed to bringing...</p>
            </div>
          </div>
          {/* 5 */}
           <div className="flex items-center gap-4 animate-fadeInUp delay-400">
            <span className="mb-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad5" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e6003a"/>
                    <stop offset="100%" stopColor="#23276b"/>
                  </linearGradient>
                </defs>
                <g>
                  <circle cx="28" cy="28" r="20" stroke="url(#grad5)" strokeWidth="3" fill="none"/>
                  <path d="M28 36V28M28 28l6-6M28 28l-6-6" stroke="url(#grad5)" strokeWidth="3" strokeLinecap="round"/>
                </g>
              </svg>
            </span>
          <div>
              <h3 className="text-xl font-semibold text-[#1976d2] mb-1">Team Of Experts</h3>
            <p className="text-gray-700 text-base">We have a team of experts who are committed to offering...</p>
          </div>
          </div>
          {/* 6 */}
          <div className="flex items-center gap-4 animate-fadeInUp delay-400">
            <span className="mb-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad6" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e6003a"/>
                    <stop offset="100%" stopColor="#23276b"/>
                  </linearGradient>
                </defs>
                <g>
                  <circle cx="28" cy="28" r="20" fill="url(#grad6)"/>
                  <path d="M20 32l8-8 8 8" stroke="#fff" strokeWidth="2" fill="none"/>
                  <circle cx="28" cy="24" r="2" fill="#fff"/>
                </g>
              </svg>
            </span>
          <div>
              <h3 className="text-xl font-semibold text-[#1976d2] mb-1">Premium Quality Products</h3>
            <p className="text-gray-700 text-base">Experience top-quality school furniture that enhances...</p>
          </div>
          </div>
        </div>
      </section>
      {/* Leading Playschool Toys Manufacturers In Delhi Section */}
      <section className="w-full bg-[#f7f7fa] py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading and description */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#23276b] mb-2">Leading Playschool Toys Manufacturers In Delhi</h2>
          <div className="flex justify-center mb-6">
            <span className="block w-16 h-1 bg-[#e6003a] rounded-full"></span>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
            {/* Description */}
            <div className="flex-1 flex items-center">
              <p className="text-gray-700 text-base md:text-sm  text-center md:text-left max-w-2xl  md:mx-0">
                The words education refine the core aspects of knowledge and analytical understanding of the world. In another word, it develops and helps in the growth of the child in every stage of life. The inquisitive nature of every student is being adapted to serenity by not only learning the pages of the books but also sharing their thoughts and innovative ideas with peer groups. Moreover, in the early days of kids, parents are concerned about their learning habits. For the same playschools toys are the best choice in Delhi for nourishing their thought process along with giving them a vivid picture of social interaction and curriculum activities. Being indulged with learning, it is equally important to ensure the safety and comfort of the kids. For the same, the material of toys is one of the inevitable components that excel the elements of effective learning. Now, meet Maskeen Overseas in Delhi, one of the foremost and leading providers of playschool furniture. We are entitled as the <span className="font-bold">Leading Playschool Toys Manufacturers in Delhi</span>. With glorifying years of experience, we have a core understanding of the various material of the kid's toys in Delhi. Moreover, our manufactured toys match all the standards of high quality besides this, these are highly recommendable of playschool and cratch school in Delhi.
              </p>
            </div>
            {/* YouTube Video Thumbnail */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-lg">
                <a href="https://www.youtube.com/watch?v=QH2-TGUlwu4" target="_blank" rel="noopener noreferrer" className="block group">
                  <img src="https://static.vecteezy.com/system/resources/previews/007/270/994/non_2x/happy-school-children-with-alphabet-blocks-vector.jpg" alt="Maskeen Classroom Video" className="w-full h-56 md:h-[44vh] object-cover rounded-2xl group-hover:brightness-90 transition" />
                  {/* Logo overlay */}
                  <img src="https://maskeenoverseas.com/assets/images/logo.png" alt="Maskeen Logo" className="absolute top-4 left-4 w-28 h-auto z-10" />
                  {/* Play button overlay */}
                  <span className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="bg-white bg-opacity-80 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#e6003a"/>
                        <polygon points="20,16 36,24 20,32" fill="#fff"/>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative overflow-hidden group">
              <img src="https://img.freepik.com/free-photo/kids-classroom-education_23-2149204922.jpg?w=600" alt="School Toys" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                <h3 className="text-white text-2xl font-bold mb-2 drop-shadow">Play School Toys</h3>
                <span className="text-white text-lg font-semibold">New Collection</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative overflow-hidden group">
              <img src="https://img.freepik.com/free-photo/soft-playground-equipment_23-2149204924.jpg?w=600" alt="Soft Play Equipment" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                <h3 className="text-white text-2xl font-bold mb-2 drop-shadow">Soft Play Equipment</h3>
                <span className="text-white text-lg font-semibold">New Collection</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative overflow-hidden group">
              <img src="https://img.freepik.com/free-photo/empty-classroom-with-desks-chairs_23-2149204921.jpg?w=600" alt="School Furniture" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                <h3 className="text-white text-2xl font-bold mb-2 drop-shadow">School Furniture</h3>
                <span className="text-white text-lg font-semibold">New Collection</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="relative overflow-hidden group">
              <img src="https://img.freepik.com/free-photo/playground-swings_23-2149204923.jpg?w=600" alt="Playground Swings" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                <h3 className="text-white text-2xl font-bold mb-2 drop-shadow">Playground Swings</h3>
                <span className="text-white text-lg font-semibold">View More</span>
              </div>
            </div>
            {/* Card 5 */}
            <div className="relative overflow-hidden group">
              <img src="https://img.freepik.com/free-photo/multi-play-station_23-2149204925.jpg?w=600" alt="Multi Play Station" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                <h3 className="text-white text-2xl font-bold mb-2 drop-shadow">Multi Play Station</h3>
                <span className="text-white text-lg font-semibold">View More</span>
              </div>
            </div>
            {/* Card 6 */}
            <div className="relative overflow-hidden group">
              <img src="https://img.freepik.com/free-photo/epdm-flooring_23-2149204926.jpg?w=600" alt="MC EPDM Flooring" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                <h3 className="text-white text-2xl font-bold mb-2 drop-shadow">MC EPDM Flooring</h3>
                <span className="text-white text-lg font-semibold">View More</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Awards & Recognition Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-center text-[#23276b] mb-2">
            Recognized for Excellence in <span className="text-[#e6b800]">Play School Toys and Furniture</span>
          </h2>
          <p className="text-center text-gray-700  mb-10 text-base md:text-lg">
            Maskeen Overseas proudly stands as an industry leader, recognized for its commitment to quality and innovation. Awarded the prestigious titles of "Best Playschool Toys and Furniture Brand of the Year" and "Most Trusted Play School Toys Manufacturer in India," we continue to craft toys and furniture that inspire joy, learning, and trust. These accolades reflect our dedication to creating safe, educational, and delightful experiences for children across the nation.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-6">
            {/* Award 1 */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
              <a href="https://www.youtube.com/watch?v=QH2-TGUlwu4" target="_blank" rel="noopener noreferrer" className="block group">
                <img src="https://world-arabia.com/storage/images/news/crops/news-promo/sV4Ka2bPN1z1PoJF0oI2z86KKOi1IBMDn4svvwpD.webp" alt="GEA 2022 Award" className="w-full h-[300px] object-cover rounded-2xl group-hover:brightness-90 transition" />
                {/* Play button overlay */}
                <span className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="bg-transparent bg-opacity-80 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="#e6003a"/>
                      <polygon points="20,16 36,24 20,32" fill="#fff"/>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
            
            {/* Award 2 */}
            <div className="relative w-full  rounded-2xl overflow-hidden shadow-lg">
              <a href="https://www.youtube.com/watch?v=QH2-TGUlwu4" target="_blank" rel="noopener noreferrer" className="block group">
                <img src="https://i.ytimg.com/vi/tKHnExO1xpA/maxresdefault.jpg" alt="GEA 2019 Award" className="w-full h-[300px] object-cover rounded-2xl group-hover:brightness-90 transition" />
                {/* Play button overlay */}
                <span className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="bg-transparent bg-opacity-80 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="#e6003a"/>
                      <polygon points="20,16 36,24 20,32" fill="#fff"/>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="w-full  text-center">
              <p className="font-semibold text-md text-[#23276b]">Maskeen Overseas Won GEA2022 For Best Playschool Toys and Furniture Brand of the Year</p>
            </div>
            <div className="w-full  text-center">
              <p className="font-semibold text-md text-[#23276b]">Maskeen Overseas won GEA2019 award for Most Trusted Play School Toys Manufacturer in India</p>
            </div>
          </div>
        </div>
      </section>
      {/* Project Completed Section */}
      <section className="w-full bg-[#f7f7fa] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#f06292]">Project Completed</h2>
          {/* Project Slider */}
          <Slider
            dots={false}
            infinite={true}
            speed={700}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2500}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
            className="mb-10"
          >
            {projectImages.map((project, idx) => (
              <div key={idx} className="px-2">
                <div className="flex flex-col overflow-hidden  bg-white">
                  <img src={project.img} alt={project.alt} className="w-full h-64 object-cover" />
                  <div className="bg-[#f06292] text-white text-center py-3 font-semibold text-lg">Achievements</div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center">
            <button className="bg-[#23276b] text-white font-semibold text-lg px-10 py-3 rounded-full shadow-md hover:bg-[#1a1d4d] transition">View More</button>
          </div>
        </div>
      </section>
      {/* Play School Toy Info Section */}
      <section className="w-full bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          {/* Left: Single Image with Blue Circle */}
          <div className="">
           
             
              {/* Main Toy Image */}
              <img src="https://img.freepik.com/free-photo/little-boy-playing-with-colorful-toys_1150-11015.jpg?w=400" alt="Play School Toy"  />
          </div>
          {/* Right: Text Content */}
          <div className="flex-1">
           
            <div className="space-y-6 text-gray-800">
              <div>
                <h5 className="text-xl font-bold mb-1">Play School Toys</h5>
                <p className='text-sm'>Welcome to Maskeen Overseas, your one-stop destination for top-quality Toys. As a leading provider in the industry, we take immense pride in offering a diverse range of <b>Play School Toys</b> that cater to the educational and recreational needs of young learners. Our commitment to providing safe, durable, and engaging toys has made us a trusted name among educators and parents alike. As pioneers in the industry, Maskeen Overseas takes immense pride in shaping the future of education through innovative and reliable products. Our commitment to excellence and customer satisfaction drives us to constantly evolve and improve our offerings. We work with the vision of providing innovative and high-quality products that help kids explore their creative side.</p>
              </div>
              <div>
                <h5 className="text-xl font-bold mb-1">Play School Toys Manufacturers</h5>
                <p className='text-sm'>Our extensive collection of <b>Play School Toys</b> is designed to stimulate the imagination and creativity of children while promoting essential skills such as cognitive development, motor skills, and social interactions. Each toy is crafted with precision and undergoes rigorous quality checks to ensure they meet the highest safety standards. We are not just <b>Play School Toys Manufacturers</b>, but also dedicated to fostering a joyful and interactive learning environment. We make sure that each of our products is designed to encourage children to explore, discover, and learn. Also, we work with our customers to ensure that they are completely satisfied with our offerings. We are a reputed name among <b>Play School Toys Manufacturers in Delhi</b>.</p>
              </div>
              <div>
                <h5 className="text-xl font-bold mb-1">School Furniture Suppliers in India</h5>
                <p className='text-sm'>Our selection of <b>School Furniture</b> is ergonomically designed to provide comfort and support during long hours of learning. We are also renowned <b>School Furniture Suppliers in India</b>. Whether it's colourful and vibrant chairs, sturdy tables, or versatile storage solutions, we offer a wide array of furniture that complements the dynamic needs of modern educational institutions. With Maskeen Overseas, you can rest assured that you are providing the best for the young minds that hold the potential to shape tomorrow's world. We are one of the leading <b>School Furniture Suppliers</b>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Arrivals Section */}
      <section className="w-full bg-[#e9d9ec] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#23276b]">New Arrivals</h2>
          <Slider
            dots={false}
            infinite={true}
            speed={700}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
            className="mb-10"
          >
            {[
              {
                img: 'https://images.pexels.com/photos/459296/pexels-photo-459296.jpeg?auto=compress&w=600',
                title: 'Titan Treehouse Jumbo 1',
                code: '7714',
              },
              {
                img: 'https://images.pexels.com/photos/3661350/pexels-photo-3661350.jpeg?auto=compress&w=600',
                title: 'Kids Heavy Quality Rocker Cum Rider',
                code: 'RK-202',
              },
              {
                img: 'https://images.pexels.com/photos/3661196/pexels-photo-3661196.jpeg?auto=compress&w=600',
                title: 'School Dual Heavy Desk Bench',
                code: '732',
              },
              {
                img: 'https://images.pexels.com/photos/3662670/pexels-photo-3662670.jpeg?auto=compress&w=600',
                title: 'Colorful Slide Set',
                code: 'SL-101',
              },
              {
                img: 'https://images.pexels.com/photos/3662830/pexels-photo-3662830.jpeg?auto=compress&w=600',
                title: 'Kids Activity Table',
                code: 'AT-555',
              },
              {
                img: 'https://images.pexels.com/photos/3661199/pexels-photo-3661199.jpeg?auto=compress&w=600',
                title: 'Playground Seesaw',
                code: 'SS-888',
              },
            ].map((item, idx) => (
              <div key={idx} className="px-3 group">
                <div className="relative flex flex-col items-center">
                  {/* Image with border */}
                  <div className="w-full bg-white border-2 border-[#b39ddb] rounded-t-lg overflow-hidden shadow-md flex flex-col items-center">
                    <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                    {/* Hover Overlay with + icon */}
                    <div className="absolute top-0 left-0 w-full h-64 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300">
                      <span className="opacity-0 group-hover:opacity-100 transition duration-300">
                        <span className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-90 shadow-lg">
                          <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#8e24aa"/><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* Text box with less width than image */}
                  <div className="-mt-6 w-[90%] bg-[#8e24aa] text-white text-center py-6 px-2 flex flex-col items-center z-10 relative" style={{boxShadow:'0 8px 24px 0 rgba(0,0,0,0.10)'}}>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-md font-semibold mb-3">Product Code: {item.code}</p>
                    <button className="bg-gray-800 text-white px-8 py-2 rounded font-semibold hover:bg-gray-900 transition">Send Enquiry</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center">
            <button className="bg-[#e9408f] text-white font-semibold text-lg px-10 py-3 rounded-full shadow-md hover:bg-[#c2185b] transition">View More</button>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Our Clients</h2>
          <div className="flex justify-center mb-10">
            <span className="block w-24 h-1 bg-[#e6003a] rounded-full"></span>
          </div>
          <Slider
            dots={false}
            infinite={true}
            speed={700}
            slidesToShow={6}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            responsive={[
              { breakpoint: 1280, settings: { slidesToShow: 4 } },
              { breakpoint: 900, settings: { slidesToShow: 3 } },
              { breakpoint: 600, settings: { slidesToShow: 2 } },
              { breakpoint: 400, settings: { slidesToShow: 1 } },
            ]}
            className="mb-4"
          >
            {logos.map((logo, idx) => (
              <div key={idx} className="flex justify-center items-center px-2">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center p-6 h-36 w-48 mx-auto">
                  <img src={logo} alt={`Client Logo ${idx + 1}`} className="max-h-24 max-w-full object-contain" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-[#845b94] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-8 justify-center ">
          {/* Left: Heading */}
          <div className="md:w-1/3 flex flex-col items-start justify-center mb-8 md:mb-0">
            <span className="text-6xl -mb-6 text-[#ffd600]">&ldquo;</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">What Our<br/>Customers Are<br/>Saying</h2>
          </div>
          {/* Right: Reviews Slider */}
          <div className="md:w-2/3 w-full">
            <Slider
              dots={false}
              infinite={true}
              speed={700}
              slidesToShow={2}
              autoplay={true}
              autoplaySpeed={3500}
              arrows={false}
              responsive={[
                { breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1 } },
              ]}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="px-4 flex flex-col items-center">
                  {/* Card with speech bubble triangle */}
                  <div className="relative w-full flex flex-col items-center">
                    <div className="bg-gray-100 rounded-sm shadow-md p-8 flex flex-col justify-between w-[350px] h-[180px] md:w-[370px] md:h-[200px] max-w-full">
                      <div className="overflow-y-auto h-full pr-2">
                        <p className="text-gray-800 italic text-lg">{review.text}</p>
                      </div>
                    </div>
                    {/* Triangle */}
                    <div className="absolute left-12 bottom-[-18px]">
                      <svg width="40" height="20" viewBox="0 0 40 20">
                        <polygon points="0,0 20,20 40,0" fill="#f3f4f6" />
                      </svg>
                    </div>
                  </div>
                  {/* Name and star below card, centered */}
                  <div className="flex items-center gap-2 mt-6">
                    <span className="text-[#ffd600] text-2xl">★</span>
                    <span className="font-bold text-white text-lg">{review.name}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
