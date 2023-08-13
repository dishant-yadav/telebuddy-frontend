import { FaUserAlt } from 'react-icons/fa';
import { IoMdPhotos } from 'react-icons/io';
import { DoctorProfileEdit } from './../pages';
import { doctorDetails } from './../data/index';
import { useState } from 'react';

const DoctorProfile = () => {
	const [open, setOpen] = useState(false);

	const props = {
		name: 'John Doe',
		address: 'Address',
		phone: '',
		emailID: '',
		degree: [],
		speciality: '',
		experience: '',
		college: '',
		hospital: '',
		about: '',
		signaturee: '',
		stampImage: ''
	};

	return (
		<section className='h-screen w-screen bg-[#f6f6f6] px-4 py-6'>
			{!!open && <DoctorProfileEdit open={open} setOpen={setOpen} props={props} />}
			<div>
				<h3 className='text-2xl px-2 font-medium text-center pb-3 leading-7 text-slate-800 sm:truncate sm:text-3xl sm:tracking-tight'>Account Settings</h3>
				<div className='w-full bg-white  rounded-xl border-2 border-slate-300 border-solid px-3 py-4'>
					<div className='flex flex-row justify-start items-center gap-4'>
						<h3 className='text-lg font-normal leading-7 text-slate-800 sm:truncate sm:text-3xl sm:tracking-tight'>My Profile</h3>
						<button
							type='button'
							className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							onClick={() => {
								setOpen(true);
							}}>
							Edit
						</button>
					</div>
					<div className='w-full bg-white  rounded-xl border-2 border-slate-300 border-solid px-3 pl-8 py-2 my-2 flex flex-row justify-start items-center'>
						<img className='h-20 w-20 rounded-full mr-6 cursor-pointer hover:opacity-70 ' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='profile-image' />
						<div>
							<h3 className='text-xl font-medium text-slate-800 my-0'>{doctorDetails.name}</h3>
							<h3 className='text-base font-medium text-gray-600'>{doctorDetails.speciality}</h3>
							<address className='text-base font-medium text-gray-600'>{doctorDetails.address}</address>
						</div>
					</div>

					<div className='flex flex-col justify-center items-start'>
						<div className='w-1/2 bg-white rounded-xl  px-3 py-2 flex flex-col justify-start'>
							<div className='flex flex-row justify-between items-center'>
								<h3 className='text-lg font-semibold leading-6 text-slate-800'>Personal Information</h3>
							</div>

							<div className='w-full bg-white  rounded-xl border-2 border-slate-300 border-solid px-4 py-2 my-2'>
								<div className=' grid grid-cols-2 row-span-3 gap-2'>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>First Name</p>
										<p className='text-base font-semibold	 text-slate-800'>{doctorDetails.name.split(' ')[1]}</p>
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Last Name</p>
										<p className='text-base font-semibold text-slate-800'>{doctorDetails.name.split(' ')[2]}</p>
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Phone Number</p>
										<p className='text-base font-semibold text-slate-800'>{`+91 ${doctorDetails.phone}`}</p>
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Email Address</p>
										<p className='text-base font-semibold text-blue-900 underline underline-offset-2'>{doctorDetails.emailID}</p>
									</div>
								</div>
								<div className='flex flex-col gap-0.5 w-full py-2'>
									<p className='text-base font-medium text-gray-700'>Address</p>
									<p className='text-base font-semibold text-slate-800'>{doctorDetails.address}</p>
								</div>
							</div>
						</div>

						<div className='w-1/2 bg-white rounded-xl  px-3 py-2 my-2 flex flex-col justify-start'>
							<div className='flex flex-row justify-between items-center'>
								<p className='text-lg font-semibold leading-6 text-slate-800'>Professional Information</p>
							</div>

							<div className='w-full bg-white  rounded-xl border-2 border-slate-300 border-solid px-4 py-2 my-2'>
								<div className=' grid grid-cols-2 row-span-3 gap-2'>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Degree</p>
										<p className='text-base font-semibold text-slate-800'>
											{doctorDetails.degree.map(degree => {
												return degree;
											})}
										</p>
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Speciality</p>
										<p className='text-base font-semibold text-slate-800'>{doctorDetails.speciality}</p>
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>College Of Degree</p>
										<p className='text-base font-semibold text-slate-800'>{doctorDetails.college}</p>
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Current Hospital</p>
										<p className='text-base font-semibold text-slate-800'>{doctorDetails.hospital}</p>
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Years of Experience</p>
										<p className='text-base font-semibold text-slate-800'>{doctorDetails.experience}</p>
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Speciality</p>
										<p className='text-base font-semibold text-slate-800'>{doctorDetails.speciality}</p>
									</div>
								</div>
								<div className='flex flex-col gap-0.5 w-full'>
									<p className='text-base font-medium text-gray-700'>About</p>
									<p className='text-base font-semibold text-slate-800'>{doctorDetails.about}</p>
								</div>
							</div>
						</div>

						<div className='w-1/2 bg-white rounded-xl  px-3 py-2 flex flex-col justify-start'>
							<div className='flex flex-row justify-between items-center'>
								<h3 className='text-lg font-semibold leading-6 text-slate-800'>Assets</h3>
							</div>

							<div className='w-full bg-white  rounded-xl border-2 border-slate-300 border-solid px-4 py-2 my-2'>
								<div className=' grid grid-cols-2 row-span-3 gap-2'>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Signatre</p>
										<img className='h-20 w-20 rounded-full mr-6 cursor-pointer hover:opacity-70 ' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='profile-image' />
									</div>
									<div className='flex flex-col gap-0.5'>
										<p className='text-base font-medium text-gray-700'>Stamp Image</p>
										<img className='h-20 w-20 rounded-full mr-6 cursor-pointer hover:opacity-70 ' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='profile-image' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DoctorProfile;
