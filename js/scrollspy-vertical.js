let menuSection=document.querySelectorAll('menu li');
menuSection.forEach((v)=>{
	v.onclick =(()=>{
		setTimeout(()=>{
			menuSection.forEach(j=>j.classList.remove('active'))
			v.classList.add('active')
		},50)
	})
})

window.onscroll=(()=> {
	let section = document.querySelectorAll('.content');
	section.forEach((v,i)=> {
		let rect = v.getBoundingClientRect().y;
		if(rect < window.innerHeight-400){
			menuSection.forEach(v=>
				v.classList.remove('active'))
				menuSection[i].classList.add('active')
			}
		})
	})

