 

const Card = (props) => {
  return (
    <div>
      <div className="card m-5  " style={{ width: '18rem' }}>
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
          {props.ditail}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.item1}</li>
          <li className="list-group-item">{props.item2}</li>
          <li className="list-group-item">{props.item3}</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Card;
