import React, { useState, useEffect } from 'react';
import './Stopwatch.css';
import Card from './Card/Card';
import Button from './Button/Button';

function Stopwatch() {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, mili: 0 });
    const [isRunning, setIsRunning] = useState();

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => {
                    let { hr, min, sec, mili } = prev;

                    mili += 1;
                    if (mili > 99) {
                        mili = 0;
                        sec += 1;
                    }
                    if (sec > 59) {
                        sec = 0;
                        min += 1;
                    }
                    if (min > 59) {
                        min = 0;
                        hr += 1;
                    }
                    return { hr, min, sec, mili };
                });
            }, 10)
        }
        else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const clickstart = () => setIsRunning(true);

    const clickstop = () => setIsRunning(false);

    const clickreset = () => {
        setIsRunning(false);
        setTime({ hr: 0, min: 0, sec: 0, mili: 0 })
    }

    const pad = ((n) => String(n).padStart(2, "0"));

    return (
        <Card>

            <div className="container">

                <p >STOP CLOCK IN JAVASCRIPT</p>

                <h1 id="time">{pad(time.hr)}:{pad(time.min)}:{pad(time.sec)}:{pad(time.mili)}</h1>
                <div className="btn">
                    <Button name="start" onclick={clickstart} />
                    <Button name="stop" onclick={clickstop} />
                    <Button name="reset" onclick={clickreset} />
                </div>


            </div>

        </Card>


    )




};
export default Stopwatch;

