const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const icon = document.querySelector(".icons");
let animal = [];
let vegetable = [];
let user = [];


let select = document.querySelector("#form");
select.addEventListener('change', function(){
	if ( form.value === "1"){
		for (let i = 0; i < icons.length; i++) {
			const iconsList = 
			`
				<i class="${icons[i].prefix}solid ${icons[i].prefix}${icons[i].name}" style="color: ${icons[i].color};"</i>
				<p class="small">${icons[i].name}</p>
		
			`;
			icon.innerHTML += iconsList;
		}
	}else if ( form.value === "2"){
		animal = icons.filter(icons => icons.type === "animal");
		for (let i = 0; i < animal.length; i++) {
			const iconsList = 
			`
				<i class="${animal[i].prefix}solid ${animal[i].prefix}${animal[i].name}" style="color: ${animal[i].color};"</i>
				<p class="small">${animal[i].name}</p>
		
			`;
			icon.innerHTML += iconsList;
		}
	}else if ( form.value === "3"){
		vegetable = icons.filter(icons => icons.type === "vegetable");
		for (let i = 0; i < vegetable.length; i++) {
			const iconsList = 
			`
				<i class="${vegetable[i].prefix}solid ${vegetable[i].prefix}${vegetable[i].name}" style="color: ${vegetable[i].color};"</i>
				<p class="small">${vegetable[i].name}</p>
		
			`;
			icon.innerHTML += iconsList;
		}
	}else if ( form.value === "4"){
		user = icons.filter(icons => icons.type === "user");
		for (let i = 0; i < user.length; i++) {
			const iconsList = 
			`
				<i class="${user[i].prefix}solid ${user[i].prefix}${user[i].name}" style="color: ${user[i].color};"</i>
				<p class="small">${user[i].name}</p>
		
			`;
			icon.innerHTML += iconsList;
		}
	}
});

