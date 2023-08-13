import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const navigate = useNavigate();

	return (
		<div className='w-full h-screen bg-blue-900 bg-contain bg-center bg-gradient-to-b from-transparent via-blue-900 to-blue-900 py-24 md:py-12'>
			<div className='container mx-auto flex justify-between md:flex-col'>
				<div className='md:hidden'>
					<img className='hidden md:block w-full h-auto' src='https://static.vecteezy.com/system/resources/previews/021/459/222/non_2x/online-doctor-telemedicine-healthcare-service-concept-medical-consultation-by-internet-with-doctor-outline-design-style-minimal-illustration-for-landing-page-infographics-hero-images-vector.jpg' alt='Hero Image' />
				</div>
				<div className='md:w-3/5 flex flex-col justify-center items-start px-6 md:px-0 mt-12 md:mt-0'>
					<h1 className='text-white font-bold text-4xl md:text-5xl leading-tight md:leading-snug mb-4'>MediConnect</h1>
					<h2 className='text-white font-bold text-4xl md:text-5xl leading-tight md:leading-snug mb-4'>
						Breaking <span className='bg-gradient-to-r text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-yellow-500'>Language Barriers</span> in the Telemedicine Sector
					</h2>
					<p className='text-white opacity-75 text-lg md:text-xl leading-relaxed mb-8'>Real-time Translation for Seamless Communication Between Patients and Doctors</p>
					<button
						className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-3 text-lg md:text-xl rounded-md shadow-lg hover:shadow-xl focus:outline-none'
						onClick={() => {
							navigate('/login/doctor');
						}}>
						Register
					</button>
				</div>
				<div className='hidden md:block w-2/5'>
					<img className='w-full h-auto' src='https://static.vecteezy.com/system/resources/previews/021/459/222/non_2x/online-doctor-telemedicine-healthcare-service-concept-medical-consultation-by-internet-with-doctor-outline-design-style-minimal-illustration-for-landing-page-infographics-hero-images-vector.jpg' alt='Hero Image' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
