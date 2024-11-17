import { useGetPlan } from "../../apis/plan";

function Price() {
  const { data } = useGetPlan();

  return (
    <div className="main">
      {
        data?.data?.map((item: any, index: any) => (
          <div key={index} className="price" id="Services">
            <h3>{item.name}</h3>
            <p className="price_description">{item.description}</p>
            <h2>
              ${item.price} <span className="price_description">/year</span>
            </h2>
            <div className="price_checkbox">
              <div>
                <input type="checkbox" />
                <p>{item.options[0]}</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>{item.options[1]}</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>{item.options[2]}</p>
              </div>
            </div>
            <button className="price_button">Choose Plan</button>
          </div>
        ))
      }
    </div>
  );
}

export default Price;
