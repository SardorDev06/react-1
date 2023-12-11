import { useState } from "react";
import "./hero.css";

const Hero = () => {
    const [count, setCount] = useState(false);

    const click = () => {
    setCount(!count)
        console.log(count);
    }
const [data, setSubmit]= useState(true);

    const pushClick = ()=> {    
        setSubmit(!data)
        console.log(data);
    }
    return (
        <>
        <div className="container">
        <div className="hero">
            <ul className={count ? 'lorem' : 'untext'}>
                <li>Home</li>
                <li>Abaute</li>
                <li>Business</li>
                <p className={data ? 'untext' : 'texts'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, suscipit.</p>
                <button className="learmore_btn" onClick={pushClick}>Lear more</button>
            </ul>   
            <button className="button" onClick = {click}>{count ? 'unclick' : 'click'}</button>
        </div>
        </div>
        </>
    )
}
export default Hero;