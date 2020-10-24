import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from "react";
import StarItem from "./StarItem";
import "./StarsList.css";

interface IStar {
  id: number;
  isActive: boolean;
}

interface IDATA {
  stars: IStar[];
  currentRating: number;
}

type IProps = {
  numOfStars: number;
  color: string;
};

const data: IDATA = {
  stars: []
};

const StarsList: FunctionComponent<IProps> = ({ numOfStars, color }) => {
  const clonedData = JSON.parse(JSON.stringify(data));
  const [stars, setRatings] = useState<IStar[]>(clonedData.stars);
  const [currentRating, setCurrentRating] = useState<number>(0);

  const init = (num: number) => {
    for (let i = 1; i <= numOfStars; i++) {
      stars.push({
        id: i,
        isActive: false
      });
    }
    setRatings([...stars]);
  };

  useEffect(() => {
    init(numOfStars);
  }, [numOfStars]);

  const updateStars = (id: number) => {
    const newRatings = stars.map((item: IStar) => {
      if (item.id <= id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }

      return item;
    });

    setCurrentRating(id);
    setRatings([...newRatings]);
  };

  return (
    <>
      <ul className="stars-list">
        {stars.map((item: IStar, index: number) => {
          return (
            <StarItem
              key={index}
              item={item}
              color={color}
              updateStars={updateStars}
            />
          );
        })}
      </ul>
      <h4>currentRating: {currentRating}</h4>
    </>
  );
};

export default StarsList;
