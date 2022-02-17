import logo from './logo.svg';
import hour from './Assets/hour-hand.svg';
import min from './Assets/minute-hand.svg';
import sec from './Assets/second-hand.svg';
import style from './App.module.css';
import { useEffect } from 'react';

function App() {
  function settingTime() {
    const date = new Date();
    let currentHour = date.getHours();
    let currentMin = date.getMinutes();
    let currentSec = date.getSeconds();

    const unitAngle = 360 / 60;
    const uniteHourAngle = 360 / 12;
    const secAngle = 180 + unitAngle * currentSec;
    const minAngle = unitAngle * currentMin + currentSec / 60 * unitAngle;
    const hourAngle = 270 + uniteHourAngle * (currentHour - 12) + currentMin / 60 * unitAngle;

    document.getElementById("secImg").style.transform = `rotate(${secAngle}deg)`;
    document.getElementById("minImg").style.transform = `rotate(${minAngle}deg)`;
    document.getElementById("hourImg").style.transform = `rotate(${hourAngle}deg)`;
  }

  useEffect(() => {
    setInterval(settingTime, 1000);
  }, [])


  return (
    <div className={style.App}>
      <div className={style.clockArea}>
        <img id="hourImg" className={style.hour} src={hour} alt="時針" />
        <img id="minImg" className={style.min} src={min} alt="分針" />
        <img id="secImg" className={style.sec} src={sec} alt="秒針" />
      </div>
    </div>
  );
}

export default App;
