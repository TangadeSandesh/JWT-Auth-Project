import image from '../assets/NewsIcon.png';
const NewsItems = ({title, description, src, url}) => {
  return (
    <div>
      <div className="card bg-dark text-light mb-3 mt-4 d-inline-block" style={{maxWidth:"320px"}}>
        <img src={src?src:image} style={{height:"200px", width:"320px"}} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"News is Event. The information of the event happened in the world"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
        </div>
    </div>
  )
};

export default NewsItems
