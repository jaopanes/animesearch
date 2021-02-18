<template>
    <div class="container">
        <div class="box">
            <div class="title-box">Categorias</div>

            <div class="content-box category-content">
                <button
                    v-for="category in categories"
                    :key="category.id"
                    :style="'background-color: ' + category.color"
                    @click="categorySearch"
                    :value="category.name"
                >
                    {{ category.name }}
                </button>
            </div>
        </div>

        <div class="box" v-show="showResponse">
            <div class="title-box">
                Exibindo resultado para {{ categoryName }}
            </div>

            <div class="content-box response-content">
                <Anime
                    v-for="anime in animeObj"
                    :key="anime.id"
                    :data="anime"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Anime from "../components/Anime";
export default {
    name: "Home",

    components: {
        Anime,
    },

    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: "Shounen",
                    color: "#ff8fb5",
                },
                {
                    id: 2,
                    name: "Shoujo",
                    color: "#f5b2ef",
                },
                {
                    id: 3,
                    name: "Yaoi",
                    color: "#b2f5f2",
                },
                {
                    id: 4,
                    name: "Adventure",
                    color: "#f4f5b2",
                },
                {
                    id: 5,
                    name: "Romance",
                    color: "#b2d0f5",
                },
                {
                    id: 6,
                    name: "Comedy",
                    color: "#f5b2b2",
                },
            ],

            animeObj: {},

            showResponse: false,

            categoryName: "",
        };
    },

    methods: {
        categorySearch: async function (event) {
            axios
                .get(
                    `https://kitsu.io/api/edge/anime?filter[categories]=${event.target.value}&sort=popularityRank`
                )
                .then((response) => {
                    this.animeObj = response.data.data;
                });

            this.showResponse = true;
            this.categoryName = event.target.value;
        },
    },
};
</script>

<style>
.box {
    width: 100%;
    height: auto;
    position: relative;
    border: 2px solid #000;
    border-radius: 10px;
    margin-top: 30px;
    float: left;
}

h1 {
    text-align: center;
    margin-top: 100px;
}

.box .title-box {
    width: 100%;
    height: 30px;
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
    padding: 0 12px;
    border-bottom: 2px solid #000;
}

.box .content-box {
    width: 100%;
    float: left;
    padding: 12px;
}

.box .content-box.category-content {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
}

.box .content-box.response-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.box button {
    font-weight: 700;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #000;
}
</style>
