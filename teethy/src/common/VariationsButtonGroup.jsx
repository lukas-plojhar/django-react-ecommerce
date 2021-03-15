import React, {useState} from "react";

const VariationsButtonGroup = ({variations, handleClick}) => {
    const [selected, setSelected] = useState(1);

    return <React.Fragment>
        {/*Content*/}
        <small className="text-center text-md-left">{variations[selected].content}</small>

        {/*Group of variation buttons*/}
        <div className="text-center">
            <div className="btn-group d-block pt-0 mt-2 mb-1" role="group">
                {variations.map((variation, index) => {
                    return <button key={index}
                                   className={`btn-sm mr-1 ` + (selected === index ? 'btn-primary ' : 'btn-outline-primary')}
                                   type="button"
                                   onClick={() => setSelected(index)}>{variation.name}</button>
                })}
            </div>

            {/*Add to cart button*/}
            <button className="btn btn-primary" type="button" value={selected} onClick={handleClick}>Přidat do košíku
            </button>
        </div>
    </React.Fragment>
}

export default VariationsButtonGroup;
