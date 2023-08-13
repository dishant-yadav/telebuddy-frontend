const submitImage = async (image) => {
	const data = new FormData();
	data.append('file', image);
	data.append('upload_preset', 'imageupload');
	data.append('cloud_name', 'dj4mlinfo');

	try {
		const resData = await fetch('https://api.cloudinary.com/v1_1/dj4mlinfo/image/upload/', {
			method: 'POST',
			body: data
		});
		const resDataJSON = await resData.json();
		const { secure_url } = resDataJSON;
		return secure_url;
    } catch {
		console.error('Error');
        return null;
	}
};

export { submitImage };
