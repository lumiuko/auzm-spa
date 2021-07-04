<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <div class="cards">
      <div v-for="member in members" :key="member.name" class="card">
        <img :src="member.avatar" :alt="member.name" />
        <div class="card-info">
          <div class="name">{{ member.name }}</div>
          <div class="role">{{ member.role }}</div>
          <div class="social">
            <a v-for="item in member.social" :key="item.name" :href="item.link" target="_blank" rel="noreferrer"
              ><i :class="`fab fa-${item.name}`"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'members',
  data() {
    return {
      title: 'Members',
      members: [
        {
          name: 'Sagokko',
          avatar: require('../assets/images/members/member-1.png'),
          role: 'Content Maker',
          social: [
            {
              name: 'instagram',
              link: 'https://www.instagram.com/sagokko'
            },
            {
              name: 'youtube',
              link: 'https://www.youtube.com/c/Sagokko'
            }
          ]
        },
        {
          name: 'KiRpIcH',
          avatar: require('../assets/images/members/member-2.png'),
          role: 'Game Developer',
          social: [
            {
              name: 'instagram',
              link: 'https://instagram.com/auzmarts'
            },
            {
              name: 'youtube',
              link: 'https://www.youtube.com/channel/UCl9cd4V7o1g-9I9MQOwxy0g'
            }
          ]
        },
        {
          name: 'flxemt',
          avatar: require('../assets/images/members/member-3.png'),
          role: 'Web Developer',
          social: [
            {
              name: 'twitter',
              link: 'https://twitter.com/flxemt'
            },
            {
              name: 'github',
              link: 'https://github.com/flxemt'
            }
          ]
        },
        {
          name: 'Banditman',
          avatar: require('../assets/images/members/member-4.png'),
          role: 'Game Developer',
          social: [
            {
              name: 'instagram',
              link: 'https://www.instagram.com/lenin_grib1870'
            },
            {
              name: 'youtube',
              link: 'https://www.youtube.com/channel/UChdA0MA3LRYDx12-qKvD6tg'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.main {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  padding-top: 20vh;
}
.cards {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 3vh;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  height: 50vh;
}
.card {
  background: rgba(17, 17, 17, 0.4);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  color: #fff;
  border-radius: 10px;
  height: 180px;
  width: 360px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.card img {
  width: 110px;
}
.card-info {
  width: 45%;
  text-align: center;
  font-weight: bold;
}
.card-info .name {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}
.card-info .role {
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #dadada;
}
.card-info .social {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.card-info .social a:not(:last-child) {
  margin-right: 20px;
}
.card-info .social i {
  font-size: 24px;
  transition: color 0.3s;
}
.card-info .social i:hover {
  color: rgba(255, 255, 255, 0.7);
}
@media screen and (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: center;
    padding: 0 5px;
    height: auto;
    align-content: center;
  }
  .card {
    width: 100%;
    max-width: 360px;
    transform: scale(0.9);
  }
  .main {
    overflow-y: auto;
  }
}
</style>
