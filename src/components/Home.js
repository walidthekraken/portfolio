
import { useEffect,  useState } from 'react';
import mypic from '../images/pic.jpeg';

export const Home = () => {

    const jobs = ['Mobile Developer', 'Web Developer', 'Data Scientist'];
    

    const [job, setJob] = useState(jobs[0]);
    const [ji, setJi] = useState(0);
    const [letter, setLetter] = useState(jobs[ji].length);
    
    useEffect(() => {
        console.log('im running');
        let interval = null;
        const jobs = ['Mobile Developer', 'Web Developer', 'Data Scientist'];
        
        interval = setInterval(() => {
            if (letter>=jobs[ji].length){
                setTimeout(600);
                setJi((ji+1)%jobs.length);
                setJob(jobs[ji]);
                setLetter((letter+1)%jobs[ji].length)
                setLetter(1);
            }else{
                setLetter(letter+3);
                setJob(jobs[ji].substring(0,letter));
            }
            
        }, 400);
        

        return () => clearInterval(interval);
        
      }, [job, ji, letter]);

    

    return ( 
    <div className="home">
        <div className="hometop">
            
            <div>
                <h2>My name is </h2>
                <h2 className='myname'> Walid Azizi</h2>
                <br />
                <h2>I'm a </h2>
                <h2 className='job'> {job}</h2>
            </div>
            <img src={mypic} alt=" pic" width={200} ></img>
        </div>

    </div>
     );
}
