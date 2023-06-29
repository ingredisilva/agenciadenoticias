import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle form submission
  };

  return (
    <>
      <div className='gap-4 p-4'>
        <p className='text-2xl font-bold text-primary-yellow'>Corregedoria</p>
        <hr className='my-10 border-primary-yellow'></hr>
        <p className='m-4 text-justify text-sm'>
          A Corregedoria é responsável pela apuração de irregularidades na
          conduta dos servidores e colaboradores da Agefis. Preencha o
          formulário abaixo e em seguida retornaremos o contato para dar
          seguimento à apuração.
        </p>
        <form
          onSubmit={handleSubmit}
          className=' mt-10 flex flex-col gap-1 rounded-xl border-2 border-primary-yellow bg-gray-50 p-10'
        >
          <h2 className='mb-4 text-center text-lg font-bold'>
            Preencha o formulário
          </h2>

          <div className='mb-4'>
            <label htmlFor='name' className='mb-2 block font-bold'></label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Nome*'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full rounded border-none bg-gray-100 py-2 px-4'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='mb-2 block font-bold text-gray-800'
            ></label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder=' Email*'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full rounded border-none bg-gray-100 py-2 px-4'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Telefone*'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full rounded border-none bg-gray-100  py-2 px-4'
              required
            />
          </div>
          <div className='mb-4'>
            <textarea
              name='message'
              id='message'
              value={message}
              placeholder='Mensagem*'
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className='w-full rounded border-none bg-gray-100 py-2 px-4'
              required
            />
            <p className='text-xs'>*Campos obrigatórios</p>
          </div>
          <div className='flex justify-center'>
            {' '}
            <button
              type='submit'
              className='focus:shadow-outline rounded bg-primary-orange py-2 px-4 font-bold text-gray-700 outline-primary-orange hover:bg-primary-orange hover:bg-yellow-600 focus:outline-none'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
