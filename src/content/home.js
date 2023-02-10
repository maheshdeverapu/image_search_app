import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bookmark from "./bookmark";
import ChildHome from "./childHome";
import "./home.css";
const Home =()=>{
    const [data,setData] = useState([]);
    const [inputData,setInputData] = useState("");
    const [addBookmark,setAddBookmark] = useState([]);
    const [bookmarkVisible,setBookmarkVisible] = useState(false);
    // useEffect(()=>{
    //     homeHandling();
    // },[])
    console.log(addBookmark)

    const homeHandling=(e)=>{
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f029116145msh0b0debd2189bf2fp1994cajsn73cbd65a99db',
                'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
            }
        };
        
        fetch(`https://joj-image-search.p.rapidapi.com/v2/?q=${inputData}&hl=en`, options)
            .then(response => response.json())
            .then(response => {
                setData(response.response.images);
                console.log(response.response.images)
                // console.log(response)
    })
            .catch(err => console.error(err));
    }
    return(
        <div className="image_content">
            <div>
                <div className="header">
                    <h1>React Photo Search</h1>
                    <button className="bookmarks" onClick={()=>{setBookmarkVisible(!bookmarkVisible)}}>Bookmarks</button>
                </div>
                <div className="input">
                    <input className="input_search" placeholder="Search free high resolution images" type={"text"} value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>
                    <button className="input_search_button" onClick={(e)=>{ homeHandling(e)}}>search</button>
                </div>
            </div>
            {bookmarkVisible && <Bookmark addBookmark={addBookmark}/>}
            <div className="images">

            {data?.map((ele,i)=>{
                return(
                // <div className="images" >
                <span className="bookmark_button">

                    <ChildHome  image={ele.image.url} key={i} setAddBookmark={setAddBookmark} addBookmark={addBookmark}/>
                </span>
                    // </div>
                )
            })}
            </div>

        </div>
    )
}
export default Home;