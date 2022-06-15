function DateandTime(){
    const date = new Date()
    const current_Date = date.toLocaleDateString();
  //  const time = new time()
    //const current_Time = time.toLocaleTimeString();
    return (
        <>
            <h2>current_Date{current_Date}</h2>
        <h2>current_Time{current_Time}</h2>

        </>
    )
}
export default DateandTime;
     
