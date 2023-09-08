import { useState } from "react";

function Card({ id, name, info, image, price,removeTour}) {




    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info :`${info.substring(0, 200)}...`;
    function readmoreHanler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHanler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>

            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>Not Intersted</button>
        </div>
    );
}
export default Card;
