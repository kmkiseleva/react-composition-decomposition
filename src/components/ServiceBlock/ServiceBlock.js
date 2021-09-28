const ServiceBlock = ({ img, service }) => {
  return (
    <div className="service-container">
      <div>
        <img src={img} alt="2" className="service-image" />
      </div>
      <div>
        <a href="#0">{service}</a>
      </div>
    </div>
  );
};

export default ServiceBlock;
