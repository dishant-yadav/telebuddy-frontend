// import { EnvelopeIcon } from '@heroicons/react/20/solid';

const InputField = ({ htmlFor, type, name, label, value, setValue, placeholder }) => {
	return (
		<div>
			<label htmlFor={htmlFor} className='block text-sm font-medium leading-6 text-gray-900'>
				{label}
			</label>
			<div className='relative mt-2 rounded-md shadow-sm'>
				{/* 		<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
					<EnvelopeIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
				</div> */}
				<input
					type={type}
					name={name || 'Input'}
					id={htmlFor}
					className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					placeholder={placeholder}
					value={value}
					onChange={e => {
						setValue(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default InputField;
