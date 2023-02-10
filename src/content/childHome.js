import { useState } from "react";
import "./childHome.css";
const ChildHome =({image,i,setAddBookmark,addBookmark})=>{
    const [buttonView,setButtonView] = useState(false)

    return(
            <span onMouseOver={()=>{setButtonView(true)}} onMouseOut={()=>{setButtonView(false)}} >
            <img key={i} className="image_each" src={`${image}`}></img>
            {buttonView && <span key={i} className="bookmark" onClick={()=>{setAddBookmark([...addBookmark,image])}}>Add image to Bookmark</span>}
            </span>
        
    )
}
export default ChildHome;