import {forwardRef, useReducer, useRef, useState} from "react";


const Test = () => {

    const ref = useRef(null);
    const ref2 = useRef(0)
    const [test , setTest] = useState(true)
    const [count , setCount ] = useState(0);
    const [starttime, setStarttime] = useState(null);
    const [now , setNow] = useState(null);
    const stoptime = useRef(null);





    const handelclick= ()=>{
        setTest((e)=> !e)
        setCount(count+1);
        ref2.current=ref2.current+1;

        if (test){
            ref.current.value = 'neveshtam'
        }else {
            ref.current.value = ''
        }




        if (test){
            setStarttime(Date.now())

            setNow(Date.now())

            stoptime.current =setInterval(()=>{
                setNow(Date.now())
            },1000)
        }else {
            clearInterval(stoptime.current)
        }




    }


    return (
        <div>
            <Input count={count} starttime={starttime} handelclick={handelclick} now={now} test={test} ref={ref}/>
            <Counter/>
        </div>
    )

}

export default Test




export const Input = forwardRef(
    function Input ({count , now , starttime , handelclick , test} , ref) {
        return(
            <div className="input">
                <p> count: {count} time:{(now-starttime)/1000} </p>
                <input readOnly={true} className={'ref-test'} type="text" ref={ref} />
                <button className={'ref-test'} onClick={handelclick}> {test ? 'bnvism?':'pak konam?'}   </button>
            </div>
        )

    }
)





export const Counter = ()=>{

    const inittal = 0
    const [count , dispatch] = useReducer(countReduser , inittal)


    function handelinc(){
        dispatch({type:'inc'})

    }

    function handeldec(){
        dispatch({type:'dec'})
    }

    function handelreset(){
        dispatch({type:'res'})

    }

    function countReduser(state , {type} ){

        switch(type){
            case 'inc':{
                return state+1;
            }
            case 'dec':{
                return state-1
            }
            case 'res':{
                return state=0
            }

        }

    }



    return(
        <div className="counter">
            <div className="num">number:{count}</div>
            <div className="btns">
                <button onClick={handelinc} >+</button>
                <button onClick={handelreset}>reset</button>
                <button onClick={handeldec}>-</button>
            </div>
        </div>
    )
}


