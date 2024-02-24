import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  scrollbars: "none",
  borderRadius: "30px",

};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1584727129739-cd30984745bc?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Slide 3",
  },
  {
    url:     "https://images.unsplash.com/photo-1548611716-bd56b0f5aaa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
    caption: "Slide 4",
  },
];
export default function Slideshow  ()  {
    return (
      <div style={{
        maxWidth: "80%",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        padding: "10px",
          borderRadius: "30px",
      
      }}>
        <Slide autoplay arrows={false}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,backgroundSize:'cover'}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}