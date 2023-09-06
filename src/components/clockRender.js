export default function ClockRender({ time }) {
    let hours = time.getHours();
    let className;
    (hours >=0 && hours <=6) ? className = 'night' : className = 'day';

    return (
        <>
            <h1>Time of the Day!</h1>
            <h2 className={className}>
            {time.toLocaleTimeString()}
            </h2>
        </>
      
    );
  }