<template>
  <div class="main">
		<img :src="require('../assets/images/logo.png')" id="logo" alt="">
		<footer class="footer">
			<a href="https://vk.com/auzmst" target="_blank" rel="noreferrer"><i class="fab fa-vk"></i></a>
			<a href="https://www.youtube.com/channel/UC6lUtknBk33VOx26TmALGFQ" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a>
			<a href="https://steamcommunity.com/groups/autizm_main" target="_blank" rel="noreferrer"><i class="fab fa-steam"></i></a>
			<a href="https://discord.gg/uKQyE3V" target="_blank" rel="noreferrer"><i class="fab fa-discord"></i></a>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data () {
			return {
				title: 'Home'
			}
		}
	}
</script>

<style scoped>
	#logo {
		height: 50%;
		margin-top: 25vh;
	}
	.footer {
		position: fixed;
		width: 100%;
		bottom: 7%;
		display: flex;
		justify-content: center;
		margin-top: 6vh;
	}
	.footer a {
		font-size: 3rem;
		transition: color 0.3s;
		margin: 0 40px;
	}
	.footer a:hover {
		color: rgba(255, 255, 255, 0.7);
	}
	@media (max-width: 515px) {
		.footer {
			justify-content: space-evenly;
		}
		.footer a {
			margin: 0;
		}
	}
	@media (max-height: 400px) {
		.footer a {
			font-size: 8vh;
		}
	}
</style>
