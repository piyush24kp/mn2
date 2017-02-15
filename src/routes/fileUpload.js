const upload = require('../handlers/fileUpload');

module.exports = [ {
	path : '/mnmn/outlet/gallery',
	method : 'POST',
	handler : upload.uploadGallery,
	config: {
		 cors : true,
        payload:{
              maxBytes:209715200,
              output:'stream',
              parse: false
        }, 
	}
}];