// import React, { useEffect } from 'react';
// import Swiper from 'swiper/modules';
// // import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
// import '../style/blog.css';

// const BlogSlider = () => {
//   useEffect(() => {
//     const initializeSwiper = () => {
//       return new Swiper('.blog-slider', {
//         spaceBetween: 30,
//         effect: 'fade',
//         loop: true,
//         mousewheel: {
//           invert: false,
//         },
//         pagination: {
//           el: '.blog-slider__pagination',
//           clickable: true,
//         },
//       });
//     };

//     const swiper = initializeSwiper();

//     return () => {
//       swiper.destroy();
//     };
//   }, []);

//   return (
//     <div className="blog-slider">
//       <div className="blog-slider__wrp swiper-wrapper">
//         <div className="blog-slider__item swiper-slide">
//           <div className="blog-slider__img">
//             <img
//               src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
//               alt=""
//             />
//           </div>
//           <div className="blog-slider__content">
//             <span className="blog-slider__code">26 December 2019</span>
//             <div className="blog-slider__title">Lorem Ipsum Dolor</div>
//             <div className="blog-slider__text">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               Recusandae voluptate repellendus magni illo ea animi?{' '}
//             </div>
//             <a href="#" className="blog-slider__button">
//               READ MORE
//             </a>
//           </div>
//         </div>
//         {/* Add more blog-slider__item as needed */}
//       </div>
//       <div className="blog-slider__pagination"></div>
//     </div>
//   );
// };

// export default BlogSlider;
