import "./bookmark.css";
const Bookmark = ({addBookmark})=>{
    return(
        <div className="bookmark_display">
            <h1>Bookmark Images</h1>
            
            {addBookmark?.map((ele,i)=>{
                return(

                    <img className="bookmark_display_image" key={i} src={ele}></img>
                )
            })}
        </div>
    )
}
export default Bookmark;