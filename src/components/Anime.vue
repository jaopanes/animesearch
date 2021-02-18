<template>
    <div class="anime">
        <div
            class="picture-anime"
            :style="
                'background-image: url(' +
                data.attributes.posterImage.original +
                ')'
            "
        ></div>

        <div class="based-text">
            <router-link :to="'/anime/' + data.id">
                <h2 class="name-anime">{{ data.attributes.canonicalTitle }}</h2>
            </router-link>

            <p class="episode">{{ data.attributes.episodeCount }} episódios</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Anime",

    props: {
        data: Object,
    },
};
</script>

<style>
.anime {
    width: 100%;
    border-radius: 10px;
    border: 2px solid #000;
    padding: 8px;
    display: flex;
    align-items: center;
}

.anime .picture-anime {
    min-width: 80px;
    min-height: 80px;
    height: 100%;
    border: 2px solid #000;
    border-radius: 5px;
    background-size: cover;
    background-position: center;
    margin-right: 15px;
}

.anime h2 {
    font-size: 20px;
    line-height: 18px;
}

.anime p {
    font-size: 15px;
}
</style>