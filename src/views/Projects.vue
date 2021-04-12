<template>
	<div class="main dynamic-height">
		<h1>{{ title }}</h1>
		<section class="selection">
			<i class="fas fa-chevron-left" v-if="isExpanded" @click="currentCard--" :style="{visibility: currentCard > 0 ? 'visible' : 'hidden'}"></i>
			<div class="cards" :class="{ 'mobile-view': isExpanded }">
				<div v-for="card in cards" :key="card.message" class="card" :style="isExpanded ? `transform: translateX(-${currentCard * 300}px)` : ``">
					<div class="card-header">{{ card.releaseDate }}</div>
					<img :src="card.logo" class="card-image" :alt="card.name">
					<div class="card-bottom">
						<i v-for="platform in card.platforms" :key="platform" :class="`fab fa-${platform.toLowerCase()}`"></i>
					</div>
				</div>
			</div>
			<i class="fas fa-chevron-right" v-if="isExpanded" @click="currentCard++" :style="{visibility: currentCard < cards.length - 1 ? 'visible' : 'hidden'}"></i>
		</section>
		<div class="card-nav" v-if="isExpanded">
			<i v-for="(card, id) in cards" :key="card.message" :class="`fa${id === currentCard ? 's' : 'r'} fa-circle`"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'projects',
	created() {
		window.addEventListener('resize', this.refreshNavSize);
		this.refreshNavSize();
	},
	destroyed() {
		window.removeEventListener('resize', this.refreshNavSize);
	},
	data() {
		return {
			title: 'Projects',
			cards: [
				{
					name: 'Ramis Debt Slayer',
					logo: 'https://auzm-st.ru/assets/game-2.png',
					releaseDate: 2021,
					platforms: ['windows', 'android']
				},
				{
					name: 'Ramis Adventure',
					logo: 'https://auzm-st.ru/assets/game-1.png',
					releaseDate: 'SOON',
					platforms: ['windows']
				}
			],
			currentCard: 0,
			isExpanded: false
		}
	},
	methods: {
		refreshNavSize() {
			if (window.innerWidth <= 384 * this.cards.length) this.isExpanded = true;
			else this.isExpanded = false;
		}
	}
}
</script>

<style scoped>
	.main {
		color: #fff;
		font-family: 'Poppins', sans-serif;
		overflow-y: auto;
	}
	.main h1 {
		margin-bottom: 5vh;
	}
	.selection {
		display: flex;
    align-items: center;
	}
	.selection > i {
		font-size: 1.5rem;
    position: relative;
	}
	.selection > i:first-of-type {
    left: 3%;
	}
	.selection > i:last-of-type {
    right: 3%;
	}
	.cards {
		display: flex;
		top: 30vh;
		margin: 0 auto;
		width: 100%;
		justify-content: center;
	}
	.cards i {
		align-self: center;
    font-size: 1.5rem;
	}
	.card {
		width: 290px;
		height: 380px;
		background: rgba(17, 17, 17, .4);
		backdrop-filter: blur(10px);
		margin: 0 3vw;
		box-sizing: border-box;
		color: #fff;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.card img {
		width: 200px;
    height: 200px;
	}
	.card-header {
		padding-top: 15px;
		font-weight: bold;
	}
	.card-bottom {
		padding-bottom: 20px;
	}
	.card-bottom i {
		font-size: 20px;
		margin: 0 8px;
	}
	.card-nav {
		font-size: .5rem;
		margin-top: 10px;
	}
	.card-nav i {
		margin: 0 1px;
	}
	@media (max-width: 768px) {
		.cards.mobile-view {
			justify-content: flex-start;
			overflow: hidden;
			max-width: 290px;
		}
		.cards.mobile-view .card {
			margin-left: 0;
			margin-right: 10px;
			flex-shrink: 0;
			transition: transform 0.7s ease;
		}
	}
</style>