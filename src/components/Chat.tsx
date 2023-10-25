const messages = [
  {
    id: 1,
    message: "Hola mundo",
    user: "Tito Pacheco",
  },
  {
    id: 2,
    message: "Hola mundo",
    user: "Tito Pacheco",
  },
  {
    id: 3,
    message: "Hola mundo",
    user: "Tito Pacheco",
  },
  {
    id: 4,
    message: "Hola mundo",
    user: "Tito Pacheco",
  },
  {
    id: 5,
    message: "Hola mundo",
    user: "Tito Pacheco",
  },
  {
    id: 6,
    message: "Hola mundo",
    user: "Tito Pacheco",
  },
];

const Chat = () => {
  return (
    <div className="border-4 border-green-600 rounded-xl flex flex-col justify-between py-4 px-2">
      <ul className="flex flex-col gap-2">
        {messages.map((message) => (
          <li key={message.id} className="flex gap-2">
            <span className="font-bold">{message.user}</span>
            <span>{message.message}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          className="rounded-xl w-full p-2"
          type="text"
          placeholder="Escribe un mensaje"
        />
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-xl">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
