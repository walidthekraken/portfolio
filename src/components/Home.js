
import mypic from '../images/pic.jpeg';

export const Home = () => {
    return ( 
    <div className="home">
        <div className="hometop">
            
            <div>
                <h2>My name is </h2>
                <h2 className='myname'> Walid Azizi</h2>
            </div>
            <img src={mypic} alt=" pic" width={200} ></img>
        </div>

    </div>
     );
}
