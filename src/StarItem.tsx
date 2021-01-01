import React, {
  FunctionComponent,
  useState,
  useEffect,
  MouseEvent
} from "react";
import "./StarItem.css";

interface IRating {
  id: string;
  isActive: boolean;
}

interface ListItemProps {
  color: string;
  item: IRating;
  updateStars: (arg: number) => void;
}

const starEntity = <>&#9733;</>;

const StarItem: FunctionComponent<ListItemProps> = ({
  color,
  item,
  updateStars
}) => {
  const [style, setStyle] = useState<object>({});

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    updateStars(Number(e.target.id));
  };

  useEffect(() => {
    setStyle(item.isActive ? { color: color } : {});
  }, [item.isActive, color]);

  return (
    <li className="star-item">
      <a href="/#" id={item.id} style={style} onClick={handleClick}>
        {starEntity}
      </a>
    </li>
  );
};

export default StarItem;
