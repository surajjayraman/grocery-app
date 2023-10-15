

export default function Chat(props) {
  
  return (
    <section className="chat">
      <textarea
        key={props.key}
        value={props.text}
        placeholder={'Chat to ' + props.contact.name}
        onChange={props.onChange}
      />
      <br />
      <button>Send to {props.contact.email}</button>
    </section>
  );
}
