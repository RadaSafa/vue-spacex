<template>




    <div class="margin-8 d-flex ">


        <router-link to="/">

            <v-img max-height="180" max-width="350" src="https://cdn.worldvectorlogo.com/logos/spacex.svg"></v-img>
        </router-link>

        <div class=" d-flex mt-5 blue-grey--text text--darken-1 ">



            <div class="mr-10">

                <router-link to="/dragon">Dragon</router-link>

            </div>

            <div class="mr-10">
                Core
            </div>

            <div class="mr-10">
                <router-link to="/rockets">Rockets</router-link>

            </div>

            <div class="mr-10">
                <router-link to="/update">Update</router-link>
            </div>

            <div class="">
                <router-link to="/transaction">Transaction</router-link>

            </div>

        </div>


    </div>

</template>

<style scoped>
.marginsetup {
    margin-top: 1500px;
}
</style >