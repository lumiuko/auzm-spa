<template>
	<div class="main dynamic-height">
		<h1>{{ title }}</h1>
		<section class="faq-container">
			<div class="faq-item" v-for="item in faq" :key="item.key">
				<div class="faq-header" @click="item.isExpanded = !item.isExpanded">
					<div class="heading">{{ item.question }}</div>
					<i class="fas fa-arrow-left" :class="{ expanded: item.isExpanded }"></i>
				</div>
				<transition name="fade">
					<div class="faq-body" v-if="item.isExpanded" v-html="item.anwser"></div>
				</transition>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data () {
			return {
				title: 'About',
				faq: [
					{
						question: 'Who we are',
						anwser: 'We are group of enthusiats which make various content. AUZM has existed since 2015, when our founder started to make some edits and videos for Instagram and YouTube. In 2019 we decided to make our first videogame.',
						isExpanded: false
					},
					{
						question: 'What we do',
						anwser: 'We make games, arts and, probably, more things.',
						isExpanded: false
					},
					{
						question: 'How can I donate?',
						anwser: 'You can donate via Donation Alerts <a href="https://www.donationalerts.com/r/auti" target="_blank" style="text-decoration: underline">here</a>.',
						isExpanded: false
					},
					{
						question: 'What projects are we planning',
						anwser: 'There are quite a few. Follow us on social media.',
						isExpanded: false
					}
				]
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
	.faq-container {
		max-width: 800px;
		margin: 0 auto;
		text-align: left;
		margin-top: 5vh;
	}
	.faq-item {
		width: 100%;
		background: rgba(17, 17, 17, .4);
		border-radius: 5px;
		backdrop-filter: blur(10px);
		padding: 16px 35px;
		margin-bottom: 20px;
	}
	.faq-header {
		display: flex;
    justify-content: space-between;
    align-items: center;
		font-size: 1.2rem;
		cursor: pointer;
	}
	.faq-header .heading {
		font-weight: 600;
	}
	.faq-body {
		padding-top: 15px;
		font-family: 'Roboto', sans-serif;
		color: #e5e5e5;
	}
	.faq-header i {
		transition: transform 0.3s;
	}
	.expanded {
		transform: rotate(-90deg);
	}
	@media screen and (max-width: 768px) {
		.faq-container {
			padding: 0 15px;
		}
		.faq-header {
			font-size: 1rem;
		}
		.faq-body {
			font-size: 0.9rem;
		}
	}
</style>