import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { InputField } from './../components';

const Login = () => {
	const loginType = useParams();

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	return (
		<section className='flex justify-center items-center h-screen w-screen bg-slate-300'>
			<div className='flex flex-col gap-6 justify-center items-center w-[420px] h-[450px] bg-white rounded-lg'>
				<svg viewBox='0 0 89 89' xmlns='http://www.w3.org/2000/svg' className='w-20 h-20'>
					<path
						fill='#0099FF'
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M76.7528 14.9002C83.7459 22.6904 88 32.9894 88 44.282C88 68.5826 68.3005 88.282 44 88.282C35.6893 88.282 27.9167 85.978 21.2863 81.9737L15.3884 87.0521C14.5187 87.801 13.2784 86.7338 13.8892 85.7622L22.556 71.9745L22.5485 71.9656C22.5514 71.9678 22.5544 71.9701 22.5573 71.9724L35.1199 51.9871C35.5385 51.3211 35.0599 50.4549 34.2733 50.4549H19.8769C18.9505 50.4549 18.5222 49.304 19.2231 48.6983L60.245 13.2494C55.3897 10.7025 49.8631 9.26163 44 9.26163C24.6588 9.26163 8.97959 24.9408 8.97959 44.282C8.97959 52.5687 11.8577 60.1831 16.6689 66.1802L11.7467 74.211C4.45724 66.3591 0 55.8411 0 44.282C0 19.9815 19.6995 0.282043 44 0.282043C52.6142 0.282043 60.6502 2.75747 67.4355 7.03577L72.5813 2.58901C73.4507 1.83776 74.6934 2.9057 74.0815 3.87819L53.421 36.7143C53.002 37.3802 53.4806 38.2468 54.2674 38.2468H69.3753C70.3026 38.2468 70.7305 39.3996 70.0278 40.0046L28.5503 75.719C33.2103 78.0136 38.4546 79.3025 44 79.3025C63.3412 79.3025 79.0204 63.6233 79.0204 44.282C79.0204 36.2682 76.3286 28.883 71.7999 22.9813L76.7528 14.9002Z'></path>
				</svg>

				<form
					className='flex flex-col gap-4 justify-center items-center'
					onSubmit={async e => {
						e.preventDefault();
						console.log({ email, pass });
						const res = await fetch('url', {
							method: 'POST',
							body: JSON.stringify({ name, pass }),
							headers: {
								'Content-Type': 'application/json'
							}
						});
						console.log(res.json());
						console.log('Submitted');
					}}>
					<InputField
						type={'email'}
						htmlFor={'email'}
						placeholder={'you@email.com'}
						label={'Email'}
						value={email}
						setValue={value => {
							setEmail(value);
						}}
					/>

					<InputField
						type={'password'}
						htmlFor={'password'}
						placeholder={'******'}
						label={'Password'}
						value={pass}
						setValue={value => {
							setPass(value);
						}}
					/>

					<button type='submit' className=' w-full rounded bg-indigo-600 mt-4 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
						Login
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
