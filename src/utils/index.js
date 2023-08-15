const submitImage = async (image) => {
	const data = new FormData();
	data.append('file', image);
	data.append('upload_preset', 'imageupload');
	data.append('cloud_name', 'xyz');

	try {
		const resData = await fetch('https://api.cloudinary.com/v1_1/xyz/image/upload/', {
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
