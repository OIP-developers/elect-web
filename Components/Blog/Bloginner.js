import React from "react";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
import Image from "next/image";

const blog = [
  {
    image: blog1,
    title: "GOLDEN GATE CANYON STATE PARK",
    author: "ktTravel",
    date: "Dec 23,2022",
    category: "Uncategorized",
    description:
      "Aliquam erat volutpat. Proin nec lacus dictum, interdum mi vitae, faucibus tortor. Fusce sed elit nunc. In tempor vehicula purus, a aliquet dui ullamcorper ac. Duis ut fringilla dolor. Aliquam a lacus tempus, eleifend nulla et, finibus sapien. Nullam felis ex, dictum...",
  },
  {
    image: blog2,
    title: "FOOTHILLS ART CENTER",
    author: "ktTravel",
    date: "Dec 23,2022",
    category: "Uncategorized",
    description:
      "Aliquam erat volutpat. Proin nec lacus dictum, interdum mi vitae, faucibus tortor. Fusce sed elit nunc. In tempor vehicula purus, a aliquet dui ullamcorper ac. Duis ut fringilla dolor. Aliquam a lacus tempus, eleifend nulla et, finibus sapien. Nullam felis ex, dictum...",
  },
  {
    image: blog3,
    title: "WAITANGI TREATY GROUNDS",
    author: "ktTravel",
    date: "Dec 23,2022",
    category: "Uncategorized",
    description:
      "Aliquam erat volutpat. Proin nec lacus dictum, interdum mi vitae, faucibus tortor. Fusce sed elit nunc. In tempor vehicula purus, a aliquet dui ullamcorper ac. Duis ut fringilla dolor. Aliquam a lacus tempus, eleifend nulla et, finibus sapien. Nullam felis ex, dictum...",
  },
  {
    image: blog4,
    title: "WAITANGI TREATY GROUNDS",
    author: "ktTravel",
    date: "Dec 23,2022",
    category: "Uncategorized",
    description:
      "Aliquam erat volutpat. Proin nec lacus dictum, interdum mi vitae, faucibus tortor. Fusce sed elit nunc. In tempor vehicula purus, a aliquet dui ullamcorper ac. Duis ut fringilla dolor. Aliquam a lacus tempus, eleifend nulla et, finibus sapien. Nullam felis ex, dictum...",
  },
  {
    image: blog5,
    title: "WAITANGI TREATY GROUNDS",
    author: "ktTravel",
    date: "Dec 23,2022",
    category: "Uncategorized",
    description:
      "Aliquam erat volutpat. Proin nec lacus dictum, interdum mi vitae, faucibus tortor. Fusce sed elit nunc. In tempor vehicula purus, a aliquet dui ullamcorper ac. Duis ut fringilla dolor. Aliquam a lacus tempus, eleifend nulla et, finibus sapien. Nullam felis ex, dictum...",
  },
  {
    image: blog6,
    title: "WAITANGI TREATY GROUNDS",
    author: "ktTravel",
    date: "Dec 23,2022",
    category: "Uncategorized",
    description:
      "Aliquam erat volutpat. Proin nec lacus dictum, interdum mi vitae, faucibus tortor. Fusce sed elit nunc. In tempor vehicula purus, a aliquet dui ullamcorper ac. Duis ut fringilla dolor. Aliquam a lacus tempus, eleifend nulla et, finibus sapien. Nullam felis ex, dictum...",
  }

];

const Bloginner = () => {
  return(
<>
<section className="blogs-sec">
        <div className="container-80 no-gutters">
          <div className="row ">
            {
                blog.map((blogs)=>{
                    return(
                        <div className="col-lg-4">
                        <Image src={blogs.image} width="400px" height="250px"/>
                        <h1 className="color-green">{blogs.title}</h1>
                        <p className="author-text">by{blogs.author} | {blogs.date} | {blogs.category}</p>
                        <p className="fa-20">{blogs.description}</p>
                        </div>
                    );
                })
            }

            </div>
          </div>
        
      </section>
</>
  );
};
export default Bloginner;
