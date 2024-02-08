export default function Clothe({ ele, onSelectClothe,onDisplayClothe }) {
    // console.log(ele.size)
    return (
      <div onClick={() => onSelectClothe(ele)} className="clothe">
        <img src={ele.img} alt={ele.alt} />
        <h2>{ele.clotheName}</h2>
        <p>${ele.price}.00</p>
        <div className="color" style={{ background: ele.color }}></div>
  
        <div className="sizes">
          {ele.size
            .filter((ele) => {
              return ele.isAvailble;
            })
            .map((ele) => {
              return <p key={ele.sizeNum}>{ele.sizeNum}</p>;
            })}
          
        </div>
      </div>
    );
  }
  