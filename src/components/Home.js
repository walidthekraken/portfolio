
import mypic from '../images/pic.jpeg';

export const Home = () => {

    const job = "Mobile Developer";

    return ( 
    <div className="home">
        <div className="hometop">
            
            <div>
                <h2>My name is </h2>
                <h2 className='myname'> Walid Azizi</h2>
                <br />
                <h2>I'm a </h2>
                <h2 className='myname'> {job}</h2>
            </div>
            <img src={mypic} alt=" pic" width={200} ></img>
        </div>

    </div>
     );
}
