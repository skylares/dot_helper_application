const IMG_URLS  = [
    "https://cf.specifyconcrete.org/img/pouring-concrete-over-rebar.jpg", 
    "https://media.istockphoto.com/photos/new-road-construction-picture-id496119890?k=20&m=496119890&s=170667a&w=0&h=EJvyPIiwtY-URHy6Wq3MXfi7quMJcoBtx9AzpjvBcng=",
    "https://www.traffictechnologytoday.com/wp-content/uploads/2020/03/T4US-e1583853134116-702x336.jpg"
];

export default function RightImage({ stage }) {
    return (
      <div className="right-image">
        <img src={IMG_URLS[stage]} />
      </div>
    );
  }