import * as flsFunctions from './modules/functions.js'
import Swiper, { Navigation, Pagination } from 'swiper'



flsFunctions.isWebp()

document.addEventListener('DOMContentLoaded', () => {
	// !header phone animation 

	
		const headerPhone = document.querySelector('.upper__phone')
		const content = headerPhone.innerHTML

		if (document.documentElement.clientWidth >= 1024) {
			headerPhone.addEventListener('mouseenter', (e) => {
			

				headerPhone.innerHTML = `
				<span style="color:#fff;">заказать звонок</span>
				`
	
				headerPhone.classList.add('green-bg')
			})
		
			headerPhone.addEventListener('mouseleave', () => {
				headerPhone.innerHTML = content
	
				headerPhone.classList.remove('green-bg')
			})
		} else {
			headerPhone.textContent = 'заказать звонок'
		}
	
	

	//! menu opener
	const menuLinkBlock = document.querySelector('.header__menu-nav')
	const menu = document.querySelector('.header__menu')
	const menuBtn = document.querySelector('#menu-btn')
	const headerMain = document.querySelector('.header__main')
	const headerLower = document.querySelector('.header__lower')

	menuLinkBlock.style.display = 'none'

	menuBtn.addEventListener('click', () => {
		if (menu.classList.contains('hide')) {
			menuBtn.setAttribute('src', 'img/Close_menu.png')
			menu.classList.remove('hide')
			menuLinkBlock.style.display = 'flex'
			displayNone(headerMain, headerLower)

		} else {
			menuBtn.setAttribute('src', 'img/coolicon.png')
			menu.classList.add('hide')
			displayNone(menuLinkBlock)
			setTimeout(() => {
				headerMain.style.display = 'grid'
				headerLower.style.display = 'flex'
			}, 500)
		}
		
		setTimeout(() => {
			if (!menu.classList.contains('hide')) {
				displayNone(headerMain, headerLower)
			}
		}, 500)
	})

	//! menu links
	menuLinkBlock.addEventListener('click', e => {
		e.preventDefault()
	})

	//! header swiper 

	Swiper.use([Navigation, Pagination]);

	const headerSwiper = new Swiper('.header__swiper', {
		loop: true,
		pagination: {
			el: '.header__swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		}	
		

	})

	//! represent
	const representItems = document.querySelectorAll('.controls-item')
	const representControls = document.querySelector('.represent__controls')

	representControls.addEventListener('click', e => {
		let active = document.querySelector('.controls-item_active')
		const img = document.querySelector('#represent-img')

		if(e.target.closest('.controls-item')) {
			const item = e.target.closest('.controls-item')

			if (active !== item) {
				item.classList.add('controls-item_active')
				active.classList.remove('controls-item_active')

				findSrc([
					'img/content/IMG_0482.jpg',
					'img/bg/header.jpg',
					'img/content/IMG_0482.jpg',
					'img/content/IMG_0482.jpg'
				])
			}
		}

		function findSrc(srcArr) {
			const ANIMATION_SPEED = 200
			active = document.querySelector('.controls-item_active')

			hide(img)
			
			setTimeout(() => {
				img.setAttribute('src', srcArr[Array.from(representItems).indexOf(active)])
				
				show(img)
			}, ANIMATION_SPEED)
		}
		
		
	})
	
	function hide(elem) {
		elem.classList.add('hide')
	}
	
	function show(elem) {
		elem.classList.remove('hide')
	}

	function displayNone(...elems) {
		elems.forEach(elem => {
			elem.style.display = 'none'
		})
	}
})

