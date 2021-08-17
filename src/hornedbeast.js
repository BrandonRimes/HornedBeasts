function HornedBeast(props) {
  return (
    <div className="beast">
      <h2>{props.title}</h2>
      <img title={props.title} src={props.image_url} alt={props.keyword} ></img>
      <p>{props.description}</p>
    </div>
  )
}

export default HornedBeast;