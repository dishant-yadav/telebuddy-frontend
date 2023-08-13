import React from 'react';
import { telemedDetails, doctorDetails } from './../data';

const Prescription = () => {
	return (
		<section className='border-solid border-2 border-black w-full'>
			<div className='flex h-screen flex-col'>
				<header className='flex flex-col'>
					<div className='flex h-3 w-full flex-row'>
						<div className='h-full w-1/2 bg-[#365ac4] text-center text-white'></div>
						<div className='h-full w-1/2 bg-[#31408e] text-center text-white'></div>
					</div>
					<div className='flex flex-col px-2'>
						<div className='flex flex-row items-center justify-start'>
							<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUh-sr-Tf2P9at9ko8fLa1YnvFDEKyUSkqoFj8SkxG-Q&s' className='circle mr-6 h-40 w-40 rounded-full bg-gray-400' />

							<div className='flex flex-col'>
								<p className='text-base font-medium'>{telemedDetails.name}</p>
								<p className='text-lg font-extrabold text-blue-700'>{`${doctorDetails.name} (${doctorDetails.degree.map(degree => degree)})`}</p>
								<address className='font-regular text-xs'>{doctorDetails.address}</address>
								<p className='font-regular pt-0.5 text-xs'>{`+91 ${doctorDetails.phone}`}</p>
								<p className='font-regular text-xs text-blue-800 underline'>{doctorDetails.emailID}</p>
							</div>
						</div>
						<div className='h-0.5 w-full bg-black'></div>
					</div>
				</header>
				<main className='flex-1 px-2 py-4'>
					<p className='text-left text-base font-semibold'>Summary</p>
					<section className='pb-3'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ab doloribus adipisci velit dicta iusto sed, enim, corrupti, sint officia sapiente. Doloremque qui vel corporis excepturi aperiam, ducimus similique quam quas iusto? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos illo facilis, illum veniam perspiciatis labore impedit laboriosam recusandae harum velit vitae minus consequuntur dolorem nam voluptate, tempore corrupti asperiores eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consectetur perspiciatis tenetur alias sed deserunt tempore consequatur, est quasi fugiat enim, rerum possimus? Quisquam fuga sint ducimus eveniet unde mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus repellat
							voluptate nemo sit hic, quis enim omnis magnam! Praesentium aspernatur molestiae omnis esse, eveniet nisi assumenda blanditiis voluptatem velit laboriosam.
						</p>
					</section>
					<p className='text-left text-base font-semibold pb-6'>Checkups and Medicines</p>
					<section className='grid grid-cols-2'>
						<div>
							<p className='text-center font-medium text-base'>Medicines</p>
							<ul className='text-center  text-sm pt-4'>
								<li> Medicine-1</li>
								<li> Medicine-2</li>
								<li> Medicine-3</li>
							</ul>
						</div>
						<div>
							<p className='text-center font-medium text-base'>Checkups</p>
							<ul className='text-center  text-sm pt-4'>
								<li> Checkups-1</li>
								<li> Checkups-2</li>
								<li> Checkups-3</li>
							</ul>
						</div>
					</section>
				</main>
				<footer>
					<section className='grid grid-cols-2 pb-2'>
						<div className='justify-center items-center'>
							<p className='text-center'>Doctor's Signature</p>
						</div>
						<div className='justify-center items-center'>
							<p className='text-center'>Custom Logo</p>
						</div>
					</section>
					<div className='p-1'>
						<div className='h-0.5 w-full bg-black px-2'></div>
						<div className='row-span-2 grid grid-cols-2 pt-1 gap-1'>
							<p className='text-center text-sm font-medium'>{telemedDetails.name}</p>
							<p className='text-center text-sm font-medium'>{telemedDetails.address}</p>
							<p className='text-center text-sm font-medium'>{`+${telemedDetails.phoneCode} ${telemedDetails.phone}`}</p>
							<p className='text-center text-sm font-medium'>{telemedDetails.emailID}</p>
						</div>
					</div>

					<div className='flex h-3 w-full flex-row'>
						<div className='h-full w-1/2 bg-[#365ac4] text-center text-white'></div>
						<div className='h-full w-1/2 bg-[#31408e] text-center text-white'></div>
					</div>
				</footer>
			</div>
		</section>
	);
};

export default Prescription;
