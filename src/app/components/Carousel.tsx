// import React from 'react';
// import Slider, { Settings } from 'react-slick';
// import Image from 'next/image';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// interface CarouselItem {
//   name: string;
//   img: string;
//   review: string;
// }

// const data: CarouselItem[] = [
//   {
//     name: `Mariya Knowless`,
//     img: `../../../public/name.png`,
//     review: `Working with this AI software development and
//     sales team has been a game-changer for our
//     business. Their innovative solutions have
//     significantly  boosted our efficiency and sales
   
//    `,
//   },
//   {
//     name: `Mariya Knowless`,
//     img: `../../../public/name.png`,
//     review: `Working with this AI software development and
//     sales team has been a game-changer for our
//     business. Their innovative solutions have
//     significantly  boosted our efficiency and sales
   
//    `
//   },
//   {
//     name: `Mariya Knowless`,
//     img: `../../../public/name.png`,
//     review: `Working with this AI software development and
//     sales team has been a game-changer for our
//     business. Their innovative solutions have
//     significantly  boosted our efficiency and sales
   
//    `,
//   },
//   {
//     name: `Mariya Knowless`,
//     img: `../../../public/name.png`,
//     review: `Working with this AI software development and
//     sales team has been a game-changer for our
//     business. Their innovative solutions have
//     significantly  boosted our efficiency and sales
   
//    `,
//   },
//   {
//     name: `Mariya Knowless`,
//     img: `../../../public/name.png`,
//     review: `Working with this AI software development and
//     sales team has been a game-changer for our
//     business. Their innovative solutions have
//     significantly  boosted our efficiency and sales
   
// `   
//   },
// ];

// const Carousel: React.FC = () => {
//   const settings: Settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-3/4 m-auto">
//       <div className="mt-20">
//         <Slider {...settings}>
//           {data.map((d) => (
//             <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
//               <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
//                 <Image src={d.img} alt="" className="h-44 w-44 rounded-full" width={176} height={176} />
//               </div>
//               <div className="flex flex-col items-center justify-center gap-4 p-4">
//                 <p className="text-xl font-semibold">{d.name}</p>
//                 <p className="text-center">{d.review}</p>
//                 <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Carousel;