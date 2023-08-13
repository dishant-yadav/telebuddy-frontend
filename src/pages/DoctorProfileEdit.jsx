import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { InputField } from '../components';
import { submitImage } from './../utils';

const DoctorProfileEdit = ({ open, setOpen, props }) => {
	const [signature, setSignature] = useState('');
	const [customStamp, setCustomStamp] = useState('');

	const { name, address, phone, emailID, degree, speciality, experience, college, hospital, about, signaturee, stampImage } = props;

	const [formValues, setFormValues] = useState({
		name: name ?? '',
		address: address ?? '',
		phone: phone ?? '',
		emailID: emailID ?? '',
		degree: [] ?? degree,
		speciality: speciality ?? '',
		experience: experience ?? '',
		college: college ?? '',
		hospital: hospital ?? '',
		about: about ?? '',
		signature: signaturee ?? '',
		stampImage: stampImage ?? ''
	});

	const onChangeSignature = e => {
		console.log('signature: ', signature);
		setSignature(e.target.files[0]);
	};

	const onChangeCustomStamp = e => {
		console.log('customStamp: ', customStamp);
		setCustomStamp(e.target.files[0]);
	};

	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={setOpen}>
				<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95' enterTo='opacity-100 translate-y-0 sm:scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 translate-y-0 sm:scale-100' leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
								<form
									onSubmit={e => {
										e.preventDefault();
										console.log('Submit');
										const degrees = formValues?.degree?.split(',');
										formValues.degree = degrees.map(degree => {
											return degree.trim();
										});
										console.log(formValues);
										setOpen(false);
									}}>
									<div className='grid grid-cols-2 row-span-3 gap-3'>
										<InputField
											name={'Name'}
											type={'text'}
											htmlFor={'name'}
											label={'Name'}
											placeholder={'John Doe'}
											value={formValues.name}
											setValue={value => {
												setFormValues({
													...formValues,
													name: value
												});
											}}
										/>
										<InputField
											name={'email'}
											type={'email'}
											htmlFor={'email'}
											label={'Email'}
											placeholder={'john@mail.com'}
											value={formValues.emailID}
											setValue={value => {
												setFormValues({
													...formValues,
													emailID: value
												});
											}}
										/>

										<InputField
											name={'phone'}
											type={'tel'}
											htmlFor={'phone'}
											label={'Phone'}
											placeholder={'+91 7845125263'}
											value={formValues.phone}
											setValue={value => {
												setFormValues({
													...formValues,
													phone: value
												});
											}}
										/>

										<InputField
											name={'address'}
											type={'text'}
											htmlFor={'address'}
											label={'Address'}
											placeholder={'123, Park Street, Bangalore, Karnataka, India'}
											value={formValues.address}
											setValue={value => {
												setFormValues({
													...formValues,
													address: value
												});
											}}
										/>
										<InputField
											name={'degree'}
											type={'text'}
											htmlFor={'degree'}
											label={'Degree'}
											placeholder={'(MBBS, MD)'}
											value={formValues.degree}
											setValue={value => {
												setFormValues({
													...formValues,
													degree: value
												});
											}}
										/>
										<InputField
											name={'speciality'}
											type={'text'}
											htmlFor={'speciality'}
											label={'Speciality'}
											placeholder={'Dentist'}
											value={formValues.speciality}
											setValue={value => {
												setFormValues({
													...formValues,
													speciality: value
												});
											}}
										/>

										<InputField
											name={'college'}
											type={'text'}
											htmlFor={'college'}
											label={'College of Degree'}
											placeholder={'AIIMS, Kalyani'}
											value={formValues.college}
											setValue={value => {
												setFormValues({
													...formValues,
													college: value
												});
											}}
										/>

										<InputField
											name={'hospital'}
											type={'text'}
											htmlFor={'hospital'}
											label={'Current Hospital'}
											placeholder={'AIIMS, Delhi'}
											value={formValues.hospital}
											setValue={value => {
												setFormValues({
													...formValues,
													hospital: value
												});
											}}
										/>

										<InputField
											name={'experience'}
											type={'number'}
											htmlFor={'experience'}
											label={'Year of Experience'}
											placeholder={3}
											value={formValues.experience}
											setValue={value => {
												setFormValues({
													...formValues,
													experience: value
												});
											}}
										/>

										<InputField
											name={'about'}
											type={'text'}
											htmlFor={'about'}
											label={'About'}
											placeholder={3}
											value={formValues.about}
											setValue={value => {
												setFormValues({
													...formValues,
													about: value
												});
											}}
										/>
										<div className='flex flex-col justify-center'>
											<div className='flex flex-row items-center'>
												<label htmlFor={'signature'} className='text-sm font-medium leading-6 text-gray-900'>
													Signature
													<input
														id='signature'
														type='file'
														className='text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700'
														accept='.png, .jpg, .jpeg'
														onChange={onChangeSignature}
													/>
												</label>
												<button
													type='button'
													className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
													onClick={async () => {
														const imageURI = await submitImage(signature);
														console.log(imageURI);
														setFormValues({
															...formValues,
															signature: imageURI
														});
													}}>
													Upload
												</button>
											</div>
											<div className='flex flex-row items-center'>
												<label htmlFor={'custom-stamp'} className='text-sm font-medium leading-6 text-gray-900'>
													Custom Stamp
													<input
														id='custom-stamp'
														type='file'
														className='text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700'
														accept='.png, .jpg, .jpeg'
														onChange={onChangeCustomStamp}
													/>
												</label>
												<button
													type='button'
													className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
													onClick={async () => {
														const imageURI = await submitImage(customStamp);
														console.log(imageURI);
														setFormValues({
															...formValues,
															customStamp: imageURI
														});
													}}>
													Upload
												</button>
											</div>
										</div>
									</div>
									<div className='mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3'>
										<button type='submit' className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2'>
											Save changes
										</button>
										<button type='button' className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0' onClick={() => setOpen(false)} ref={cancelButtonRef}>
											Cancel
										</button>
									</div>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default DoctorProfileEdit;
