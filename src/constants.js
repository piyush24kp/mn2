'use strict';
 /*Define API level constant here  */
module.exports = {
	id_names : {		
		cif_number : 'CIF Number',
	},
	loan_app_status : {
		draft : 'Draft' ,
		submitted : 'Submitted',
		decisioned : 'Decisioned',
		pending : 'In Process',
		blacklist : 'In process � black list validation failed',
		validation_error: 'In process � application data validation issues',
	},
	loan_app_types : {
		preapproval : 'quote' ,
		final_approval : 'proposal'	
	},
	error_messages : {
		application_submission_error : 'There was a server error while processing this application. Please contact the system administrator.',
		CIF_number_error: 'The CIF number cannot be obtained for the user. Please contact the system administrator.'
	},
	contact_entity_type : {
		dealer : 'dealers' ,
		user : 'users',
		account: 'accounts',
		
	},	
	services : {
		findcar : 'find_car' ,
		preappr: 'pre_approval',
		
	},
	email:{
		fromMailId : 'neha.soni@valuelabs.com',
		toMailId : 'neha.soni@valuelabs.com',
		bankeremailid : 'aartekkrishna@gmail.com'
	},
	images:{
		path : /images/
	},
	leaseAmtDetails:{
		chargesInPercentage : 0.25,
		totalPercentage : 100,
		daysInMonth : 30,
		downPaymentPercentage : 25
	},
	loan_status : {
		initiate : 'initiated',
		process : 'in process',
		approved : 'approved',
		rejected : 'rejected'
	}
	
};


