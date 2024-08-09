// import React, { useState, useEffect } from "react";
// // import React from "react";
// import Navbar from "../components/navbar";
// import "../styles/blog.css";
// import Footer from "../components/footer";
// import { motion } from "framer-motion";
// import axios from "axios";

// function truncateTitle(title, limit = 20) {
//   const words = title.split(' ');
//   if (words.length > limit) {
//     return words.slice(0, limit).join(' ') + '...';
//   }
//   return title;
// }


// function Blog() {

//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 9;

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get("https://genisup-backend.vercel.app/api/blogs/");
//         setBlogs(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching the blog data:", error);
//         setLoading(false);
//       }
//     };


//     fetchBlogs();
//   }, []);


//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);


//   const paginate = (pageNumber) => setCurrentPage(pageNumber);


//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
//     pageNumbers.push(i);
//   }


//   if (loading) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <div>
//       <header className="header-blogs">
//         <Navbar />
//         <div className="blog_banner">
//         </div>
//         <div className="blog_overlay">
//           <div className="blog_content">
//             <h1>Our Blogs</h1>
//             <h3>Archives</h3>
//           </div>
//         </div>
//         <section className="cards_section">
//           <div className="container">
//             <div className="all_cards">
//               {[...Array(6)].map((_, index) => (
//                 <div className="card_wrapper" key={index}>
//                   <div className="card">
//                     <div className="card_image">
//                       <img src={`blog_card${index + 1}.jpg`} alt="img" />
//                     </div>
//                     <div className="card_content">
//                       <h3>Move fast, and stay adaptable.</h3>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                         Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
//                         natoque penatibus et magnis dis parturient montes,
//                         nascetur
//                       </p>
//                       <hr className="card_hr" />
//                       <div className="card_date">
//                         <p>September 3, 2022</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </header>
//     </div>
//   );
// }

// export default Blog;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import "../styles/blog.css";
import Footer from "../components/footer";


function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;


  useEffect(() => {
    // Fetch data from backend using Axios
    axios.get("https://genisup-backend.vercel.app/api/blogs/")
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
      });
  }, []);


  // Calculate the current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div>
      <header className="header-blogs">
        <Navbar />
        <div className="blog_banner"></div>
        <div className="blog_overlay">
          <div className="blog_content">
            <h1>Our Blogs</h1>
            <h3>Archives</h3>
          </div>
        </div>
        <section className="cards_section">
          <div className="container">
            <div className="all_cards">
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog, index) => (
                  <div className="card_wrapper" key={index}>
                    <div className="card">
                      <div className="card_image">
                        <img src={blog.image} alt={blog.title} />
                      </div>
                      <div className="card_content">
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                        <hr className="card_hr" />
                        <div className="card_author">
                          <p>By {blog.author}</p>
                        </div>
                        <div className="card_date">
                          {/* If your backend sends a date, format it here */}
                          <p>{new Date(blog.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No blogs available</p>
              )}
            </div>
          </div>
          {/* Pagination */}
          <div className="pagination">
            {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(number => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`page-number ${currentPage === number + 1 ? "active" : ""}`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </section>
        <Footer />
      </header>
    </div>
  );
}


export default Blog;
