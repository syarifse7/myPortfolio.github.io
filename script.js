/*let user = prompt("What's your name?");

	alert('hallo ' + user + ' nice to meet you ');*/

/* add function */

const changeJobsTitle = (job) => {
	const JobsTitle = document.getElementsByTagName('h5');

	if (typeof job === 'string'){
	
		JobsTitle[0].innerText = job;

	} else {
		JobsTitle[0].innerText = "Alert: Jobs Title must be string!";
	}

}

// call function 
changeJobsTitle('Front-End Developer | Cat Lovers');
 
const pagescrolledAboutMe = document.querySelector('#about');

pagescrolledAboutMe.addEventListener('click', function(){

	alert('oke!');

});
