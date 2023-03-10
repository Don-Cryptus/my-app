import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('don');
  const [email, setEmail] = useState(
    `${Math.random()}`.slice(15) + 'don@don.don'
  );

  const submit = async () => {
    const res = await axios.post('/api/create-user', { name, email });
    console.log(res.data);
    setEmail(`${Math.random()}`.slice(15) + 'don@don.don');
  };

  return (
    <div className='text-xl flex flex-col space-y-2 p-5'>
      <input
        className='border'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='border'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className='bg-slate-700 text-white' onClick={submit}>
        submit
      </button>
    </div>
  );
}
