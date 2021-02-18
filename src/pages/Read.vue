<template>
    <div class="box">
        <div class="title-box">{{ animeObj.name }}</div>

        <div class="content-box">
            <figure>
                <img :src="animeObj.image" alt="" />
            </figure>

            <p>
                {{ animeObj.description }}
            </p>

            <p class="episodes">
                Número de episódios: <strong>{{ animeObj.episodes }}</strong>
            </p>

            <button @click="goBack">Voltar</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Read",

    data() {
        return {
            animeId: this.$route.params.id,

            animeObj: {
                name: "",
                image: "",
                description: "",
                episodes: "",
            },
        };
    },

    created: function () {
        axios
            .get(`https://kitsu.io/api/edge/anime/${this.animeId}`)
            .then((response) => {
                const responseData = response.data.data.attributes;

                this.animeObj.name = responseData.canonicalTitle;
                this.animeObj.image = responseData.coverImage.large;
                this.animeObj.description = responseData.description;
                this.animeObj.episodes = responseData.episodeCount;
            });
    },

    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.episodes {
    font-size: 18px;
    margin-top: 10px;
}

button {
    padding: 0 20px;
    margin-top: 20px;
}
</style>