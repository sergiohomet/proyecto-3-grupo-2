import { servicios } from "../data/servicios";
import ServiciosCards from "./ServiciosCards";

const ServiciosGrid = () => {
  return (
    <>
      {servicios.map((data) => (
        <div
          key={data.id}
          className="serviciosCont col-6 col-sm-6 col-lg-3 mt-2 mt-lg-0"
        >
          <ServiciosCards data={data} key={data.id} />
        </div>
      ))}
    </>
  );
};

export default ServiciosGrid;
