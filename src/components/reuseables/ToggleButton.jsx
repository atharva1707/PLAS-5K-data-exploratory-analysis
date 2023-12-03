import { useState } from "react"

export default function ToggleButton(props) {

    const [isToggled, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!isToggled)
    }

    return (
        <div>
            <button
                className="toggle-switch"
                onClick={handleClick}
            >
                {isToggled ? (
                    "Hide Details"
                ) : (
                    "Read more details"
                )}
            </button>
            {
                isToggled ? (
                    props.asList ? 
                        (
                            <ul className="toggle-description-box">
                                {
                                    props.data.map((point) => {
                                        return (
                                            <li
                                                key={point}
                                                className="toggle-description"
                                            >
                                                {point}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        ) : (
                            <div className="toggle-description">
                                {props.data}
                            </div>
                        )
                    ) : (<></>)
            }
    </div>
    )
}