import {forwardRef, useRef, useState} from "react";


const Timer = () => {

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
        console.log(test);
        if (test){
            ref.current.value = 'neveshtani'
        }else {
            ref.current.value = ''
        }



        console.log(stoptime.current)
        console.log(test)


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

    console.log('render')

    return (
        <Input count={count} starttime={starttime} handelclick={handelclick} now={now} test={test}  ref={ref}/>

    )


}

export default Timer




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


