
import Clothe from './clothe'
export default function ClotheList({ clothesArr, onSelectClothe }) {
    return (
      <div className="clotheList">
        <h3>Have you seen these?</h3>
        <div className="clothes">
          {clothesArr
            .filter((ele) => {
              return ele.price !== 175;
            })
            .map((ele) => {
              return (
                <Clothe key={ele.id} onSelectClothe={onSelectClothe} ele={ele} />
              );
            })}
        </div>
      </div>
    );
  }
  