function Cup({guest}) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <h3>Welcome to our kitty party</h3>  
      <Cup guest={1} />
      <Cup guest={2}/>
      <Cup guest={3}/>
    </>
  );
}
